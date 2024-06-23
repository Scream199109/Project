import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {QueryParams} from "components/catalog/Catalog";
import {TOKEN} from "components/shared/const/localStorage";
import {API_URL} from "http/index";
import {Product} from "pages/product-page/types/product.types";
import {IServerResponse} from "./types/server.response";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
        return headers
      }
    }
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<IServerResponse<'products', Product[]>, QueryParams>({
      query: (params) => `/products/search?q=${params.q}&limit=${params.limit}&skip=${params.skip}`,
      serializeQueryArgs: ({endpointName}) => {
        return endpointName
      },
      merge: (currentCache, newItems, {arg}) => {
        const {skip} = arg;

        // Для того чтобы после перехода между страницами не добавлялись повторно данные
        if (skip === 0) return newItems;
        currentCache.products.push(...newItems.products)
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg
      },
    }),
    getProductById: builder.query<Product, number | undefined | ''>({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery
} = productsApi;
