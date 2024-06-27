import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import withReactContent, { ReactSweetAlert } from "sweetalert2-react-content";
import { Button } from "@/components/reactdash-ui";
import { ENUM_BUTTON_COLOR, ENUM_BUTTON_SIZE } from "@/utils/utils.enum";

type SweetAlertProps = {
  title: string;
  data: SweetAlertOptions;
  btn_color?: keyof typeof ENUM_BUTTON_COLOR;
  btn_size?: keyof typeof ENUM_BUTTON_SIZE;
  onResult?: (
    result: SweetAlertResult,
    swal: typeof Swal & ReactSweetAlert
  ) => void;
};

export default function SweetAlert(props: SweetAlertProps) {
  const handleButton = () => {
    const MySwal = withReactContent(Swal);
    const Content = props.data;

    MySwal.fire({
      didOpen: () => {
        // alert content
        return MySwal.fire(Content).then((result) => {
          props.onResult && props.onResult(result, MySwal);
        });
      },
    });
  };

  return (
    <>
      <Button
        color={props.btn_color}
        size={props.btn_size}
        onClick={handleButton}
      >
        {props.title}
      </Button>
    </>
  );
}
