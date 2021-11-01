import { commerce } from "./lib/commerce";



export const FairSkin = commerce.products.list({ category_slug: "fair-skin" });
export const MediumSkin = commerce.products.list({ category_slug: "medium" });
export const DarkSkin = commerce.products.list({ category_slug: "dark-skin" });

export const name = "junior"