import { Client as ClientType } from 'openapi-fetch';
import type { paths } from './index.d';
type Client = ClientType<paths>;
declare const client: () => Promise<{
    GET: Client["GET"];
}>;
export { client as partsCatalogClient };
