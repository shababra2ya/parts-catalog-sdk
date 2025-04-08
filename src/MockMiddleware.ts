import { mockData } from "./mockData";

const partsCatalogMockMiddleware = {
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

export {partsCatalogMockMiddleware}