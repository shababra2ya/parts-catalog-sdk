import { mockData } from "./mockData";

const middleware = {
  onRequest: async ({request}: { request: Request }) => {
    const selectedPath = Object.keys(mockData).find((path) => {
      // remove leading and trailing slashes
      const segments = path.split("/").filter((segment) => segment !== "");
      const requestSegments = new URL(request.url).pathname.split("/").filter((segment) => segment !== "");
      requestSegments.shift();
      if (segments.length !== requestSegments.length) {
        return false;
      }
      return segments.every((segment, index) => { 
        if (segment.startsWith("{")) {
          return true;
        }
        return segment === requestSegments[index];
      })
    });
    if (!selectedPath) {
      throw new Error("Path is not set");
    }
    // @ts-expect-error: Property 'pathname' does not exist on type 'URL'
    const headers = mockData[selectedPath].headers ?? {};

    // @ts-expect-error: Property 'pathname' does not exist on type 'URL'
    const mockResponse = new Response(JSON.stringify(mockData[selectedPath].output), {
      status: 200,
      headers: { "Content-Type": "application/json" , ...headers},
    });
    return mockResponse;
  }
}

export {middleware as partsCatalogMockMiddleware, mockData as partsCatalogMockData}