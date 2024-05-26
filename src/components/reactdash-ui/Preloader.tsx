import { ENUM_COLOR, PRELOADER_COLORS } from "@/utils/utils.enum";
import { useState, useEffect } from "react";

type PreloaderProps = {
  className?: string;
  children?: React.ReactNode;
  color?: keyof typeof ENUM_COLOR;
};

// Preloader
export default function Preloader(props: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Props ( color )
  const addcolor = props.color
    ? PRELOADER_COLORS[props.color]
    : PRELOADER_COLORS[ENUM_COLOR.primary];

  return (
    <div className="relative">
      {loading && (
        <div className="preloader loaded-success absolute w-full h-screen overflow-hidden inset-0 bg-gray-100 dark:bg-gray-900">
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
            <div className="relative mx-auto mb-12">
              <div className="inline-block">
                <svg
                  className={`animate-spin h-8 w-8 ${addcolor}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && <>{props.children}</>}
    </div>
  );
}
