import { Option } from "./models/menu";

export type MenuInfo = {
  name: string;
  id: string;
  thumbnailImage?: string;
  fullPrice: number;
  discountedPrice?: number;
  isDiscounted: boolean;
  isOutOfStock: boolean;
};

export type MenuDetail = {
  name: string;
  id: string;
  thumbnailImage?: string;
  fullPrice: number;
  discountedPrice?: number;
  isDiscounted: boolean;
  isOutOfStock: boolean;
  largeImage?: string;
  options: Option[];
};
