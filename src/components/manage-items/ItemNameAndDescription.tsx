import { Badge, InputLabel, QuillEditor } from "@/components/reactdash-ui";
import { FormAddItem } from "@/layouts/manage-items/AddItems";
import {
  FormState,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { isQuillEmpty } from "@/utils/utils";

type ItemNameAndDescriptionProps = {
  register: UseFormRegister<FormAddItem>;
  getValues: UseFormGetValues<FormAddItem>;
  setValue: UseFormSetValue<FormAddItem>;
  formState: FormState<FormAddItem>;
};

const ItemNameAndDescription: React.FC<ItemNameAndDescriptionProps> = (
  props
) => {
  useEffect(() => {
    props.register("description", {
      required: "The description field is required.",
    });
  }, [props.register]);

  return (
    <>
      <Badge className="mb-2 w-full" color="danger">
        <ErrorMessage
          errors={props.formState.errors}
          name="description"
          render={({ message }) => <span className="text-base">{message}</span>}
        />
      </Badge>
      <InputLabel
        required
        label="Name"
        placeholder="Enter name"
        {...props.register("name")}
      />
      <InputLabel
        required
        label="Short Name (16 Chars)"
        placeholder="Enter short name"
        maxLength={16}
        {...props.register("short_name")}
      />
      <label className="inline-block mb-2">
        Description
        <span className="text-red-500"> *</span>
      </label>
      <QuillEditor
        value={props.getValues("description")}
        onChange={(value) => {
          props.setValue("description", isQuillEmpty(value) ? "" : value);
        }}
      />
    </>
  );
};

export default ItemNameAndDescription;
