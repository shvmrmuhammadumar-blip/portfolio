import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(10),
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    try {
      const forwarded = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!forwarded.ok) {
        return NextResponse.json({ error: "Upstream delivery failed." }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ error: "Upstream delivery failed." }, { status: 502 });
    }
  } else {
    // No CONTACT_FORM_ENDPOINT configured yet — log so it's visible during
    // development. Wire this up to email, a database, or a service like
    // Resend before going to production.
    console.info("[contact] new message", parsed.data);
  }

  return NextResponse.json({ ok: true });
}
