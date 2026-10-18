import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/data/nav";

export default function NotFound() {
  return (
    <Container size="narrow" className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-sm text-teal">{"// 404"}</p>
      <pre className="mt-4 overflow-x-auto rounded-card border border-line bg-surface p-5 text-left font-mono text-xs text-text-secondary sm:text-sm">
        <code>{`$ cd ${"${requested-route}"}\nbash: cd: no such file or directory`}</code>
      </pre>
      <h1 className="mt-6 font-heading text-3xl text-text sm:text-4xl">This route doesn&apos;t exist.</h1>
      <p className="mt-3 max-w-sm text-text-secondary">
        The page you&apos;re looking for was moved, renamed, or never built. Try one of these instead.
      </p>

      <div className="mt-6">
        <Button href="/" leftIcon={<ArrowLeft className="size-4" />}>
          Back home
        </Button>
      </div>

      <ul className="mt-8 flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-line-strong hover:text-text"
            >
              {item.path}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
