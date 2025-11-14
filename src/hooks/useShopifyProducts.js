import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql query { products(first: 20) { edges { node { id title description handle images(first: 1) { edges { node { src altText } } } priceRange { minVariantPrice { amount currencyCode } } } } } };

export const useShopifyProducts = () => {
const { loading, error, data } = useQuery(GET_PRODUCTS);

const products = data?.products?.edges?.map(({ node }) => ({
id: node.id,
name: node.title,
description: node.description,
price: parseFloat(node.priceRange.minVariantPrice.amount),
currency: node.priceRange.minVariantPrice.currencyCode,
image: node.images.edges?.node.src || '',
altText: node.images.edges?.node.altText || node.title,
handle: node.handle,
})) || [];

return { products, loading, error };
};