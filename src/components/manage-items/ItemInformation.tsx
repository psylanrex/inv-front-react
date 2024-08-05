import {
  Input,
  InputGroup,
  InputLabel,
  Radio,
  Select,
} from "@/components/reactdash-ui";
import { FormAddItem } from "@/layouts/manage-items/AddItems";
import {
  FormState,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type ItemInformationProps = {
  required?: boolean;
  categories: { value: string; title: string }[];
  condition: { value: string; title: string }[];
  brand: { value: string; title: string }[];
  register: UseFormRegister<FormAddItem>;
  getValues: UseFormGetValues<FormAddItem>;
  setValue: UseFormSetValue<FormAddItem>;
  formState: FormState<FormAddItem>;
};

const ItemInformation: React.FC<ItemInformationProps> = (props) => {
  return (
    <>
      <InputLabel
        required={props.required}
        label="Item Code"
        placeholder="Enter item code"
        minLength={5}
        {...props.register("item_code")}
      />
      <div className="mb-4">
        <label className="inline-block mb-2">
          Price
          <span className="text-red-500"> *</span>
        </label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Body>
            <Input
              required={props.required}
              step={0.01}
              placeholder="0.00"
              type="number"
              className="rounded-l-none"
              {...props.register("price")}
            />
          </InputGroup.Body>
        </InputGroup>
      </div>
      <Select
        required={props.required}
        label="Category"
        placeholder="Choose a category..."
        options={props.categories}
        {...props.register("category")}
      />
      <Select
        required={props.required}
        label="Condition"
        placeholder="Choose a condition..."
        options={props.condition}
        {...props.register("condition")}
      />
      <Select
        required={props.required}
        label="Brand"
        placeholder="None"
        options={props.brand}
        {...props.register("brand")}
      />
      <Radio
        label="Reorderable"
        options={[
          { id: 1, value: 1, title: "Yes" },
          { id: 0, value: 0, title: "No" },
        ]}
        checked={props.getValues("reorderable")}
        {...props.register("reorderable")}
      />
      <Radio
        label="Returnable"
        options={[
          { id: 1, value: 1, title: "Yes" },
          { id: 0, value: 0, title: "No" },
        ]}
        checked={props.getValues("returnable")}
        {...props.register("returnable")}
      />
    </>
  );
};

export default ItemInformation;
