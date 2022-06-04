import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);
    switch (pathname) {
        case "/": {
            const contents = await Deno.readFile("./static/index.html");
            return new Response(contents, {
                headers: {
                  "content-type": "text/html",
                },
              });
        }
        case "/styles.css": {
            const contents = await Deno.readFile("./static/styles.css");
            return new Response(contents, {
                headers: {
                  "content-type": "text/css",
                },
              });
        }
        default: {
            return new Response(`<h1>Not found (${pathname})</h1>`, {
                status: 404,
                statusText: "Not found",
                headers: { "content-type": "text/html" },
            })
        }
    }
}

serve(handleRequest);