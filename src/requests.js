import { commerce } from "./lib/commerce";

const fairCategory = {
  category_slug: "fair-skin",
};

export const FairSkin = commerce.products.list({ category_slug: "fair-skin" });

export const name = "junior"