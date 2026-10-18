"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Say a little more — at least 10 characters."),
  // Honeypot: real users never see or fill this field.
  company: z.string().max(0, "Spam detected.").optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    setStatus("idle");
    try {
      // Static hosting (GitHub Pages) has no server, so there is no /api/contact.
      // Set NEXT_PUBLIC_CONTACT_ENDPOINT (Formspree etc.) to post directly to a service;
      // without one, a static build falls back to opening the visitor's email app.
      if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" && !process.env.NEXT_PUBLIC_CONTACT_ENDPOINT) {
        const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
        const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        reset();
        return;
      }
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-card border border-line bg-surface p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-success" aria-hidden />
        <h3 className="font-heading text-xl text-text">Message sent</h3>
        <p className="max-w-sm text-sm text-text-secondary">
          Thanks for reaching out — I read every message and usually reply within a day or two.
        </p>
        <Button variant="ghost" onClick={() => setStatus("idle")} className="mt-2">
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("company")}
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-[10px] border border-line bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-danger">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-[10px] border border-line bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-danger">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-[10px] border border-line bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-teal"
          placeholder="What are you building, and how can I help?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-danger">
            {errors.message.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-danger"
          >
            Something went wrong sending that — please try again, or email me directly.
          </motion.p>
        )}
      </AnimatePresence>

      <Button type="submit" fullWidth loading={isSubmitting} leftIcon={<Send className="size-4" />}>
        {isSubmitting ? "Sending" : "Send message"}
      </Button>
    </form>
  );
}
