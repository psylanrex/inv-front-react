import { Badge, InputLabel } from "@/components/reactdash-ui";
import { FormAddItem } from "@/layouts/manage-items/AddItems";
import {
  FormState,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type ItemImagesProps = {
  required?: boolean;
  register: UseFormRegister<FormAddItem>;
  getValues: UseFormGetValues<FormAddItem>;
  setValue: UseFormSetValue<FormAddItem>;
  formState: FormState<FormAddItem>;
};

const ItemImages: React.FC<ItemImagesProps> = (props) => {
  const type = "file";
  const accept = "image/*";
  return (
    <>
      <Badge className="mb-2" color="warning">
        <span className="text-base">
          Note:{" "}
          <span className="font-normal">
            Image dimensions are restricted to min. 1080x1080 pixels.
          </span>
        </span>
      </Badge>
      <InputLabel
        required={props.required}
        label="HD Primary Image"
        type={type}
        accept={accept}
        {...props.register("hd_primary_image")}
      />
      <InputLabel
        required={props.required}
        label="HD Secondary Image"
        type={type}
        accept={accept}
        {...props.register("hd_secondary_image")}
      />
      <InputLabel
        label="HD Image 3"
        type={type}
        accept={accept}
        {...props.register("hd_image_3")}
      />
      <InputLabel
        label="HD Image 4"
        type={type}
        accept={accept}
        {...props.register("hd_image_4")}
      />
      <InputLabel
        label="HD Image 5"
        type={type}
        accept={accept}
        {...props.register("hd_image_5")}
      />
      <InputLabel
        label="HD Image 6"
        type={type}
        accept={accept}
        {...props.register("hd_image_6")}
      />
    </>
  );
};

export default ItemImages;
