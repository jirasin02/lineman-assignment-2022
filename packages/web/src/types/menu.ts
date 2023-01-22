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

export type Option = {
  label: string;
  choices: OptionChoice[];
};

export type OptionChoice = {
  label: string;
};
