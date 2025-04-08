# 📦 parts-catalog-ts

#### This is package that interfaces parts-catalog api to fetch data about cars and car parts data.

## 🚀 Installation

```bash
npm install parts-catalog-sdk
```

## 🛠 Usage

```js
import { getPartsCatalogClient, partsCatalogMockMiddleware } from 'parts-catalog-ts'


// You can use the client to fetch data from the API
const partsCatalogClient = getPartsCatalogClient({apiKey})
await partsCatalogClient().GET('/catalogs/', {})

// You can use the mock middleware to  get example the API responses
const partsCatalogClient = getPartsCatalogClient({apiKey: "mockApiKey", middlewares: [partsCatalogMockMiddleware]})
await partsCatalogClient().GET('/catalogs/', {})
```