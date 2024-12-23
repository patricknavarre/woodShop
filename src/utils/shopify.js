import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "your-store-name.myshopify.com",
  storefrontAccessToken: "your-access-token",
});

export default client;
