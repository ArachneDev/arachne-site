import { createFileRoute } from "@tanstack/react-router";

// Container contract: /healthz answers 2xx and returns the build version (VERSION, set in the Containerfile).
export const Route = createFileRoute("/healthz")({
  server: {
    handlers: {
      GET: () =>
        new Response(`ok ${process.env["VERSION"] ?? "dev"}\n`, {
          headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
        }),
    },
  },
});
