import { axiosClient } from "@/api/axiosClient";
import { AsyncApiRequestFn } from "@/api/types";

export type GalleryItem = {
  id: number;
  name: string;
};

export const getGalleryImageList: AsyncApiRequestFn<
  GalleryItem[]
> = async () => {
  console.log(" ::: getGalleryImageList 333 ::: ");
  const result = await axiosClient.get<GalleryItem[]>(
    "http://localhost:4000/orders"
  );
  return result.data;
};
