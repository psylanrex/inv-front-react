import API from "../utils/request";

type ItemInformation = {
  item_code: string;
  price: string;
  category: string;
  category_name: string;
  condition: number;
  tags: any[];
  brand: number;
  reorderable: number;
  returnable: number;
  item_information_required_fields: string[];
  tag_select_options: { [key: string]: string };
  condition_select_options: { [key: string]: string };
  brand_select_options: { [key: string]: string };
};

type ItemImage = {
  hd_primary_image: number;
  hd_scondary_image: number;
  hd_image_3: number;
  hd_image_4: number;
  hd_image_5: number;
  hd_image_6: number;
  item_images_required_fields: string[];
  item_images_note: string;
};

type ItemDescription = {
  name: string;
  short_name: string;
  description: string;
  item_description_required_fields: string[];
};

type DataFormByCategory = {
  vendor_id: number;
  item_information: ItemInformation;
  item_images: ItemImage;
  item_description: ItemDescription;
};

export const getCategoryItem = async (): Promise<{ [key: string]: string }> => {
  const res = await API.get(`api/items/get-categories`);
  return res.data;
};

export const getFormByCategoryItem = async (
  category_id: number
): Promise<DataFormByCategory> => {
  const res = await API.get(`api/items/get-form-by-category/${category_id}`);
  return res.data;
};

export const saveItem = async (body: FormData): Promise<any> => {
  const res = await API.post(`api/items/save-item`, body);
  return res.data;
};
