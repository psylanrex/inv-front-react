import { RootState } from "@/app/store";
import { saveVendorId } from "@/utils/utils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type VendorAddress = {
  id: number;
  vendor_id: number;
  primary: number;
  billing: number;
  shipping: number;
  address_label: string;
  address: string;
  city: string;
  state: string;
  country_id: number | null;
  zip_code: string;
  create_user_id: number;
  create_time: string;
  update_user_id: number;
  update_time: string;
};

export type ProfileState = {
  id?: number;
  accepts_returns?: number;
  account?: string;
  active?: number;
  advanced_po?: number;
  approval_window_days?: number;
  assigned_employee_id?: number;
  avg_delivery_time?: number;
  avg_rating?: number;
  balance?: string;
  bdp_flag?: number;
  bdp_minimum_value?: string;
  bdp_modifier?: string;
  category_id?: number;
  communication?: number;
  create_time?: string;
  create_user_id?: number;
  default_payment_term_id?: number;
  default_ship_method_id?: number;
  global_first_counter_perc?: string;
  global_target_price_perc?: string;
  import_rate?: string;
  labor_rate?: string;
  name?: string;
  origin_country_id?: number;
  overall_rating?: number;
  prepackage?: number;
  profit_rate?: string;
  ratings?: string;
  reliabilty?: number;
  shipping_cost_factor?: string;
  test_vendor?: number;
  timely?: number;
  update_time?: string;
  update_user_id?: number;
  vendor_addresses?: VendorAddress[];
  vendor_contacts?: any[];
  vendor_priority_id?: number;
  website?: string;
};

const initialState: ProfileState = {
  id: undefined,
  accepts_returns: undefined,
  account: undefined,
  active: undefined,
  advanced_po: undefined,
  approval_window_days: undefined,
  assigned_employee_id: undefined,
  avg_delivery_time: undefined,
  avg_rating: undefined,
  balance: undefined,
  bdp_flag: undefined,
  bdp_minimum_value: undefined,
  bdp_modifier: undefined,
  category_id: undefined,
  communication: undefined,
  create_time: undefined,
  create_user_id: undefined,
  default_payment_term_id: undefined,
  default_ship_method_id: undefined,
  global_first_counter_perc: undefined,
  global_target_price_perc: undefined,
  import_rate: undefined,
  labor_rate: undefined,
  name: undefined,
  origin_country_id: undefined,
  overall_rating: undefined,
  prepackage: undefined,
  profit_rate: undefined,
  ratings: undefined,
  reliabilty: undefined,
  shipping_cost_factor: undefined,
  test_vendor: undefined,
  timely: undefined,
  update_time: undefined,
  update_user_id: undefined,
  vendor_addresses: [],
  vendor_contacts: [],
  vendor_priority_id: undefined,
  website: undefined,
};

const name = "profile";

export const profileSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<ProfileState>) => {
      const fields = action.payload;
      saveVendorId(fields.id);
      Object.assign(state, fields);
    },
    resetProfile: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { updateProfile, resetProfile } = profileSlice.actions;

export const profileInfo = (state: RootState) => state[profileSlice.name];

export default profileSlice.reducer;
