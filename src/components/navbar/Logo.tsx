import { logoData } from "@/utils/utils";
import { ENUM_LOGO_COLOR, LOGO_COLORS } from "@/utils/utils.enum";
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  color?: keyof typeof ENUM_LOGO_COLOR;
};

export default function Logo(props: LogoProps) {
  const addcolor = props.color
    ? LOGO_COLORS[props.color]
    : LOGO_COLORS[ENUM_LOGO_COLOR.dark];
  const addClass = props.className ? `${props.className}` : "";

  return (
    <div className={`text-center ${addClass}`}>
      <Link className="py-2 text-2xl" to={logoData.url}>
        <h2 className="text-2xl font-semibold max-h-9 flex items-center">
          <img
            src={logoData.img}
            className="inline-block w-8 h-8 ltr:mr-2 rtl:ml-2 -mt-1"
          />
          <span className={`${addcolor}`}>{logoData.text}</span>
        </h2>
      </Link>
    </div>
  );
}
