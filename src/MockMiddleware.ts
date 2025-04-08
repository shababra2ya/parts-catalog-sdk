import { mockData } from "./mockData";

class PartsCatalogMockMiddlewareFactory {
  middleware
  path?: string
  constructor() {
    this.middleware = {
      onRequest: async ({}: { request: Request }) => {
        if (!this.path) {
          throw new Error("Path is not set");
        }
        // @ts-expect-error: Property 'pathname' does not exist on type 'URL'
        const headers = mockData[this.path].headers ?? {};
  
        // @ts-expect-error: Property 'pathname' does not exist on type 'URL'
        const mockResponse = new Response(JSON.stringify(mockData[path].output), {
          status: 200,
          headers: { "Content-Type": "application/json" , ...headers},
        });
        return mockResponse;
      }
    };
  }
  setPath(path: string) {
    this.path = path;
  }
}

export {PartsCatalogMockMiddlewareFactory, mockData as partsCatalogMockData}