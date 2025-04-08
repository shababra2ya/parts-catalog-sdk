import { ProxyAgent } from "undici";
import { paths } from './types/pc';
import createFetchClient, { Middleware } from 'openapi-fetch';

function partsCatalogClient({
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
  const client = createFetchClient<paths>({
    baseUrl: basePath
  });

  let proxyAgent = proxyUrl ? new ProxyAgent(proxyUrl) : undefined;

  for (const middleware of middlewares) {
    client.use(middleware);
  }

  const authMiddleware = {
    onRequest:  ({ request }: { request: Request }) => {
      if (proxyAgent) {
        // @ts-expect-error: Property 'dispatcher' exists on type 'Request'
        request.dispatcher = proxyAgent;
      }
      request.headers.set("Authorization", apiKey);
      request.headers.set('Content-Type', "application/json");
  
      return request
    }
  }
  
  client.use(authMiddleware)

  return client;
}

export {partsCatalogClient, paths as partsCatalogPaths}