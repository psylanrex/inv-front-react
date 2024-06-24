import { getCategoryItem, getFormByCategoryItem, saveItem } from "@/api/item";
import ItemConfirmation from "@/components/manage-items/ItemConfirmation";
import ItemImages from "@/components/manage-items/ItemImages";
import ItemInformation from "@/components/manage-items/ItemInformation";
import ItemNameAndDescription from "@/components/manage-items/ItemNameAndDescription";
import {
  Preloader,
  Row,
  Column,
  Card,
  Button,
} from "@/components/reactdash-ui";
import Steps from "@/components/reactdash-ui/Steps";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import { ArrowLeft, ArrowRight, Save, XLg } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

type AddItemsState = {
  categories: { value: string; title: string }[];
  condition: { value: string; title: string }[];
  brand: { value: string; title: string }[];
  step: number;
  past_step: number;
  editable: {
    open: boolean;
    data?: FormAddItem;
  };
};

export type FormAddItem = {
  item_code: string;
  price: string;
  category: string;
  condition: string;
  brand: string;
  reorderable: number;
  returnable: number;
  hd_primary_image: string;
  hd_secondary_image: string;
  hd_image_3: string;
  hd_image_4: string;
  hd_image_5: string;
  hd_image_6: string;
  name: string;
  short_name: string;
  description: string;
};

export default function AddItems() {
  const profile = useSelector((state: RootState) => state.profile);
  const { register, handleSubmit, getValues, reset, setValue, formState } =
    useForm<FormAddItem>({
      defaultValues: { reorderable: 1, returnable: 1 },
    });
  const [state, setState] = useSetState<AddItemsState>({
    categories: [],
    condition: [],
    brand: [],
    step: 0,
    past_step: 0,
    editable: { open: false, data: undefined },
  });

  useAsyncEffect(async () => {
    const [err, res] = await to(
      Promise.all([getCategoryItem(), getFormByCategoryItem(1)])
    );
    if (err) return;

    setState({
      categories: Object.entries(res[0] ?? {}).map(([key, value]) => ({
        value: key,
        title: value,
      })),
      condition: Object.entries(
        (res[1] ?? {}).item_information.condition_select_options
      ).map(([key, value]) => ({
        value: key,
        title: value,
      })),
      brand: Object.entries(
        (res[1] ?? {}).item_information.brand_select_options
      ).map(([key, value]) => ({
        value: key,
        title: value,
      })),
    });
  }, []);

  const onSubmit = async (data: FormAddItem) => {
    console.log(data);

    if (state.editable.open)
      return setState({ step: 3, editable: { open: false } });

    switch (state.step) {
      case 0:
        return setState({
          step: 1,
          past_step: state.past_step < 1 ? 1 : state.past_step,
        });
      case 1:
        return setState({
          step: 2,
          past_step: state.past_step < 2 ? 2 : state.past_step,
        });
      case 2:
        return setState({
          step: 3,
          past_step: state.past_step < 3 ? 3 : state.past_step,
        });
      case 3:
        const formData = new FormData();
        Object.keys(data).forEach((key: string) => {
          const value = data[key as keyof FormAddItem];

          if (_.isEmpty(value)) return;

          if (typeof value === "number") {
            formData.append(key, String(value));
            return;
          }

          if (
            [
              "hd_primary_image",
              "hd_secondary_image",
              "hd_image_3",
              "hd_image_4",
              "hd_image_5",
              "hd_image_6",
            ].includes(key)
          ) {
            formData.append(key, value[0]);
            return;
          }

          formData.append(key, value);
        });
        formData.append("vendor_id", `${profile.id}`);
        formData.append("gender", "1");

        const [err, res] = await to(saveItem(formData));
        console.log(err, res);

        return;
      default:
        return;
    }
  };

  const onBack = () => {
    switch (state.step) {
      case 1:
        return setState({ step: 0 });
      case 2:
        return setState({ step: 1 });
      case 3:
        return setState({ step: 2 });
      default:
        return;
    }
  };

  const onCancel = () => {
    if (state.editable.open) {
      setState({ step: 3, editable: { open: false } });
      setValue("brand", state.editable.data?.brand || "");
      setValue("category", state.editable.data?.category || "");
      setValue("condition", state.editable.data?.condition || "");
      setValue("description", state.editable.data?.description || "");
      setValue("hd_image_3", state.editable.data?.hd_image_3 || "");
      setValue("hd_image_4", state.editable.data?.hd_image_4 || "");
      setValue("hd_image_5", state.editable.data?.hd_image_5 || "");
      setValue("hd_image_6", state.editable.data?.hd_image_6 || "");
      setValue("hd_primary_image", state.editable.data?.hd_primary_image || "");
      setValue(
        "hd_secondary_image",
        state.editable.data?.hd_secondary_image || ""
      );
      setValue("item_code", state.editable.data?.item_code || "");
      setValue("name", state.editable.data?.name || "");
      setValue("price", state.editable.data?.price || "");
      setValue("reorderable", state.editable.data?.reorderable || 1);
      setValue("returnable", state.editable.data?.returnable || 1);
      setValue("short_name", state.editable.data?.short_name || "");
      return;
    }

    reset();
    setState({ step: 0 });
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ItemInformation
            register={register}
            getValues={getValues}
            setValue={setValue}
            formState={formState}
            brand={state.brand}
            categories={state.categories}
            condition={state.condition}
          />
        );
      case 1:
        return (
          <ItemImages
            register={register}
            getValues={getValues}
            setValue={setValue}
            formState={formState}
          />
        );
      case 2:
        return (
          <ItemNameAndDescription
            register={register}
            getValues={getValues}
            setValue={setValue}
            formState={formState}
          />
        );
      case 3:
        return (
          <ItemConfirmation
            register={register}
            getValues={getValues}
            setValue={setValue}
            formState={formState}
            brand={state.brand}
            categories={state.categories}
            condition={state.condition}
            setStep={(step) => {
              setState({ step, editable: { open: true, data: getValues() } });
            }}
          />
        );
      default:
        return;
    }
  };

  const hideButtonNext = () => {
    if (state.editable.open) return true;
    if (state.step === 3) return true;
    return false;
  };

  const hideButtonCancel = () => {
    if (state.editable.open) return false;
    return true;
  };

  const hideButtonBack = () => {
    if (state.editable.open) return true;
    if (state.step === 0) return true;
    return false;
  };

  console.log(getValues());
  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold mt-3 mb-5">Item Form - Add</p>
        </Column>
      </Row>

      {/* content  */}
      <Row className="gap-2">
        <Column className="w-full px-4">
          <Card>
            <Steps
              items={[
                { title: "Item Information" },
                { title: "Item Images" },
                { title: "Item Name / Description" },
                { title: "Item Confirmation" },
              ]}
              current={state.step}
            />
          </Card>
        </Column>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div hidden={state.step !== 0}>
                {state.past_step >= 0 && renderStep(0)}
              </div>
              <div hidden={state.step !== 1}>
                {state.past_step >= 1 && renderStep(1)}
              </div>
              <div hidden={state.step !== 2}>
                {state.past_step >= 2 && renderStep(2)}
              </div>
              <div hidden={state.step !== 3}>
                {state.past_step >= 3 && renderStep(3)}
              </div>
              <Row className="justify-end gap-2">
                <Button
                  hidden={hideButtonCancel()}
                  color="danger"
                  onClick={onCancel}
                >
                  <Row className="items-center gap-1">
                    <XLg className="text-sm" />
                    Cancel
                  </Row>
                </Button>
                <Button hidden={hideButtonBack()} color="info" onClick={onBack}>
                  <Row className="items-center gap-1">
                    <ArrowLeft className="text-sm" />
                    Back
                  </Row>
                </Button>
                <Button hidden={hideButtonNext()} type="submit">
                  <Row className="items-center gap-1">
                    <ArrowRight className="text-md" />
                    Next
                  </Row>
                </Button>
                <Button hidden={state.step !== 3} type="submit">
                  <Row className="items-center gap-1">
                    <Save className="text-md" />
                    Save
                  </Row>
                </Button>
                <Button hidden={!state.editable.open} type="submit">
                  <Row className="items-center gap-1">
                    <ArrowRight className="text-md" />
                    Confirmation
                  </Row>
                </Button>
              </Row>
            </form>
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}
