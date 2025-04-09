import { mockData } from "./mockData";

const middleware = {
  onRequest: async ({request}: { request: Request }) => {
    const paths = Object.keys(mockData);
    const selectedPath = paths.find((path) => {
      // split by slash, check if each segment is equal, ignore if surrounded with {}
      const segments = path.split("/");
      const requestSegments = new URL(request.url).pathname.split("/");
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