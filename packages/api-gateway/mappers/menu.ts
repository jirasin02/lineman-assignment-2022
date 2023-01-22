import { FullMenuResponse, ShortMenuResponse } from "../types/models/menu";
import { isInTimeRange } from "../endpoints/restaurant/restaurant";
import { MenuDetail, MenuInfo } from "../types/menu";

export const shortMenuResponseToMenuInfo = (
  shortMenuResponse: ShortMenuResponse[],
  currentDate: Date
): MenuInfo[] => {
  const sortedResponse = shortMenuResponse.sort((a, b) => b.sold - a.sold);

  return sortedResponse.map((menu) => ({
    name: menu.name,
    id: menu.id,
    fullPrice: menu.fullPrice,
    discountedPrice:
      menu.fullPrice - menu.fullPrice * (menu.discountedPercent / 100),
    isDiscounted:
      menu.discountedTimePeriod?.begin || menu.discountedTimePeriod?.end
        ? isInTimeRange(
            currentDate,
            menu.discountedTimePeriod?.begin,
            menu.discountedTimePeriod?.end
          )
        : false,
    isOutOfStock: menu.totalInStock - menu.sold === 0,
    thumbnailImage: menu.thumbnailImage ?? "",
  }));
};

export const menuResponseToMenuDetail = (
  menuResponse: FullMenuResponse,
  currentDate: Date
): MenuDetail => {
  return {
    id: menuResponse.id,
    name: menuResponse.name,
    thumbnailImage: menuResponse.thumbnailImage ?? "",
    largeImage: menuResponse.largeImage ?? "",
    fullPrice: menuResponse.fullPrice,
    discountedPrice:
      menuResponse.fullPrice -
      menuResponse.fullPrice * (menuResponse.discountedPercent / 100),
    isDiscounted:
      menuResponse.discountedTimePeriod?.begin ||
      menuResponse.discountedTimePeriod?.end
        ? isInTimeRange(
            currentDate,
            menuResponse.discountedTimePeriod?.begin,
            menuResponse.discountedTimePeriod?.end
          )
        : false,
    isOutOfStock: menuResponse.totalInStock - menuResponse.sold === 0,
    options: menuResponse.options,
  };
};
