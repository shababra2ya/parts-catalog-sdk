# 📦 PartsCatalogSdk

#### This is package to fetch data about cars data include ( schema , groups-tree, parts info, and more)

## 🚀 Installation

### Using npm

```bash
npm install parts-catalog-sdk
```

### Using pnpm

```bash
pnpm install parts-catalog-sdk
```

## 🛠 Usage

```js
import { getPartsCatalogClient, partsCatalogMockMiddleware } from 'parts-catalog-sdk'


// You can use the client to fetch data from the API
const partsCatalogClient = getPartsCatalogClient({apiKey})
await partsCatalogClient().GET('/catalogs/', {})

// You can use the mock middleware to  get example the API responses
const partsCatalogClient = getPartsCatalogClient({apiKey: "mockApiKey", middlewares: [partsCatalogMockMiddleware]})
await partsCatalogClient().GET('/catalogs/', {})
```