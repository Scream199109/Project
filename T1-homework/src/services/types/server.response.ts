import {QueryParams} from "components/catalog/Catalog";

export type IServerResponse<K extends string, T> = {
  [key in K]: T;
} & {
  total: number;
} & QueryParams;
