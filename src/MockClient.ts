import { Middleware } from "openapi-fetch";
import { getPartsCatalogClient } from "./BaseClient";
import { mockData } from "./mockData";

function client({
  apiKey,
  basePath = 'https://api.parts-catalogs.com/v1',
  proxyUrl,
  middlewares = []
}: {
  apiKey: string;
  basePath?: string;
  proxyUrl?: string;
  middlewares?: Middleware[];
}) {
  const mockMiddleware = {
    onRequest: async ({ request }: { request: Request }) => {
      const url = new URL(request.url);
      const path = url.pathname;

      // @ts-expect-error: Property 'pathname' does not exist on type 'URL'
      const mockResponse = new Response(JSON.stringify(mockData[path].output), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
      return mockResponse;
    }
  }

  middlewares.unshift(mockMiddleware);

  return getPartsCatalogClient({
    apiKey,
    basePath,
    proxyUrl,
    middlewares
  })
}

export {client as getMockClient}