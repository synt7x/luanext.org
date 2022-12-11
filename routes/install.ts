import { HandlerContext } from "$fresh/server.ts";

export const handler = (req: Request, _ctx: HandlerContext): Response => {
  const headers = req.headers
  const userAgent = headers.get("user-agent") || "Unknown";

  if (userAgent.includes("WindowsPowerShell")) {
    return new Response("", {
      status: 301,
      headers: { Location: "/install.ps1" },
    });
  } else if (userAgent.includes("Windows")) {
    return new Response("", {
      status: 301,
      headers: { Location: "/install.bat" },
    });
  }

  return new Response("", {
    status: 301,
    headers: { Location: "/install.sh" },
  });
};
