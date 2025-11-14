import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
uri: 'https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json',
headers: {
'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
'Content-Type': 'application/json',
},
credentials: 'include',
});

const client = new ApolloClient({
link: httpLink,
cache: new InMemoryCache(),
});

export default client;