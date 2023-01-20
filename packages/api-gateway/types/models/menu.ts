export type ShortMenuResponse = {
  name: string;
  id: string;
  thumbnailImage?: string;
  fullPrice: number;
  discountedPercent: number;
  discountedTimePeriod?: DiscountedTimePeriod;
  sold: number;
  totalInStock: number;
};

export type FullMenuResponse = {
  name: string;
  id: string;
  thumbnailImage?: string;
  fullPrice: number;
  discountedPercent: number;
  discountedTimePeriod?: DiscountedTimePeriod;
  sold: number;
  totalInStock: number;
  largeImage?: string;
  options: Option[];
};

export type DiscountedTimePeriod = {
  begin: string;
  end: string;
};

export type Option = {
  label: string;
  choices: OptionChoice[];
};

export type OptionChoice = {
  label: string;
};
