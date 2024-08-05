import {
  Avatar,
  Button,
  Card,
  Input,
  InputGroup,
  InputLabel,
  QuillEditor,
  Radio,
  Row,
  Select,
} from "@/components/reactdash-ui";
import { FormAddItem } from "@/layouts/manage-items/AddItems";
import { PencilSquare } from "react-bootstrap-icons";
import {
  FormState,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type ItemConfirmationProps = {
  required?: boolean;
  categories: { value: string; title: string }[];
  condition: { value: string; title: string }[];
  brand: { value: string; title: string }[];
  register: UseFormRegister<FormAddItem>;
  getValues: UseFormGetValues<FormAddItem>;
  setValue: UseFormSetValue<FormAddItem>;
  formState: FormState<FormAddItem>;
  setStep: (step: number) => void;
};

const ItemConfirmation: React.FC<ItemConfirmationProps> = (props) => {
  const handleEdit = (name: string) => {
    switch (name) {
      case "item_code":
      case "price":
      case "category":
      case "condition":
      case "brand":
      case "reorderable":
      case "returnable":
        props.setStep(0);
        break;
      case "images":
        props.setStep(1);
        break;
      case "name":
      case "short_name":
      case "description":
        props.setStep(2);
        break;
      default:
        break;
    }
  };

  const getImage = (name: keyof FormAddItem) => {
    const file = (props.getValues(name) as any)?.[0];
    if (file) return { img: URL.createObjectURL(file), name };
    return undefined;
  };

  return (
    <>
      <InputLabel
        disabled
        required={props.required}
        label="Item Code"
        placeholder="Enter item code"
        minLength={5}
        extra={
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("item_code")}
          >
            <PencilSquare className="inline" />
          </Button>
        }
        {...props.register("item_code")}
      />
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <label className="inline-block">
            <span className="align-sub">
              Price
              <span className="text-red-500"> *</span>
            </span>
          </label>
          <Button color="info" size="small" onClick={() => handleEdit("price")}>
            <PencilSquare className="inline" />
          </Button>
        </div>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Body>
            <Input
              disabled
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
        disabled
        required={props.required}
        label="Category"
        placeholder="Choose a category..."
        options={props.categories}
        extra={
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("category")}
          >
            <PencilSquare className="inline" />
          </Button>
        }
        {...props.register("category")}
      />
      <Select
        disabled
        required={props.required}
        label="Condition"
        placeholder="Choose a condition..."
        options={props.condition}
        extra={
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("condition")}
          >
            <PencilSquare className="inline" />
          </Button>
        }
        {...props.register("condition")}
      />
      <Select
        disabled
        label="Brand"
        placeholder="None"
        options={props.brand}
        extra={
          <Button color="info" size="small" onClick={() => handleEdit("brand")}>
            <PencilSquare className="inline" />
          </Button>
        }
        {...props.register("brand")}
      />
      <Radio
        disabled
        label="Reorderable"
        options={[
          { id: 1, value: 1, title: "Yes" },
          { id: 0, value: 0, title: "No" },
        ]}
        checked={props.getValues("reorderable")}
        extra={
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("reorderable")}
          >
            <PencilSquare className="inline" />
          </Button>
        }
      />
      <Radio
        disabled
        label="Returnable"
        options={[
          { id: 1, value: 1, title: "Yes" },
          { id: 0, value: 0, title: "No" },
        ]}
        checked={props.getValues("returnable")}
        extra={
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("returnable")}
          >
            <PencilSquare className="inline" />
          </Button>
        }
      />
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <label className="inline-block">
            <span className="align-sub">
              Images
              <span className="text-red-500"> *</span>
            </span>
          </label>
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("images")}
          >
            <PencilSquare className="inline" />
          </Button>
        </div>
        <Row className="gap-2 flex-wrap">
          <Card hidden={!getImage("hd_primary_image")} className="!p-2">
            <Avatar data={getImage("hd_primary_image")} shape="rounded" />
          </Card>
          <Card hidden={!getImage("hd_secondary_image")} className="!p-2">
            <Avatar data={getImage("hd_secondary_image")} shape="rounded" />
          </Card>
          <Card hidden={!getImage("hd_image_3")} className="!p-2">
            <Avatar data={getImage("hd_image_3")} shape="rounded" />
          </Card>
          <Card hidden={!getImage("hd_image_4")} className="!p-2">
            <Avatar data={getImage("hd_image_4")} shape="rounded" />
          </Card>
          <Card hidden={!getImage("hd_image_5")} className="!p-2">
            <Avatar data={getImage("hd_image_5")} shape="rounded" />
          </Card>
          <Card hidden={!getImage("hd_image_6")} className="!p-2">
            <Avatar data={getImage("hd_image_6")} shape="rounded" />
          </Card>
        </Row>
      </div>
      <InputLabel
        disabled
        required={props.required}
        label="Name"
        placeholder="Enter name"
        extra={
          <Button color="info" size="small" onClick={() => handleEdit("name")}>
            <PencilSquare className="inline" />
          </Button>
        }
        {...props.register("name")}
      />
      <InputLabel
        disabled
        required={props.required}
        label="Short Name (16 Chars)"
        placeholder="Enter short name"
        maxLength={16}
        extra={
          <Button
            color="info"
            size="small"
            onClick={() => handleEdit("short_name")}
          >
            <PencilSquare className="inline" />
          </Button>
        }
        {...props.register("short_name")}
      />
      <div className="flex justify-between mb-2">
        <label className="inline-block">
          <span className="align-sub">
            Description
            <span className="text-red-500"> *</span>
          </span>
        </label>
        <Button
          color="info"
          size="small"
          onClick={() => handleEdit("description")}
        >
          <PencilSquare className="inline" />
        </Button>
      </div>
      <QuillEditor readOnly value={props.getValues("description")} />
    </>
  );
};

export default ItemConfirmation;
