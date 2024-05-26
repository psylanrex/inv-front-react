import { Tooltip } from "@/components/reactdash-ui";
import { ENUM_SIZE, RATING_SIZES } from "@/utils/utils.enum";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

type RatingProps = {
  model?: "right" | "tooltip";
  data: number;
  size?: keyof typeof ENUM_SIZE;
};

export default function Rating(props: RatingProps) {
  const count = props.data;
  const addSize = props.size
    ? RATING_SIZES[props.size]
    : RATING_SIZES[ENUM_SIZE.small];

  return (
    <>
      {props.model === "right" ? (
        <div className="flex items-center">
          <ul className="flex mt-1 mb-2 relative">
            {count < 1 ? (
              [...Array(5)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-white">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })
            ) : count >= 1 && count < 1.5 ? (
              <>
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarFill className={`${addSize}`} />
                </li>
                {[...Array(4)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 1.5 && count < 2 ? (
              <>
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarFill className={`${addSize}`} />
                </li>
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 2 && count < 2.5 ? (
              <>
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 2.5 && count < 3 ? (
              <>
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 3 && count < 3.5 ? (
              <>
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 3.5 && count < 4 ? (
              <>
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
                {[...Array(1)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 4 && count < 4.5 ? (
              <>
                {[...Array(4)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                {[...Array(1)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 4.5 && count < 5 ? (
              <>
                {[...Array(4)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
              </>
            ) : count === 5 ? (
              <>
                {[...Array(5)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </ul>
          <div className="inline-block">({count})</div>
        </div>
      ) : props.model === "tooltip" ? (
        <Tooltip title={`${count} / 5`}>
          <ul className="flex mt-1 mb-2 relative">
            {count < 1 ? (
              [...Array(5)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-white">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })
            ) : count >= 1 && count < 1.5 ? (
              <>
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarFill className={`${addSize}`} />
                </li>
                {[...Array(4)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 1.5 && count < 2 ? (
              <>
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarFill className={`${addSize}`} />
                </li>
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 2 && count < 2.5 ? (
              <>
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 2.5 && count < 3 ? (
              <>
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 3 && count < 3.5 ? (
              <>
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                {[...Array(2)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 3.5 && count < 4 ? (
              <>
                {[...Array(3)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
                {[...Array(1)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 4 && count < 4.5 ? (
              <>
                {[...Array(4)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                {[...Array(1)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <Star className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : count >= 4.5 && count < 5 ? (
              <>
                {[...Array(4)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
                <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                  <StarHalf className={`${addSize}`} />
                </li>
              </>
            ) : count === 5 ? (
              <>
                {[...Array(5)].map((_, index) => {
                  index += 1;
                  return (
                    <li
                      key={index}
                      className="ltr:mr-2 rtl:ml-2 text-yellow-400"
                    >
                      <StarFill className={`${addSize}`} />
                    </li>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </ul>
        </Tooltip>
      ) : (
        <ul className="flex relative">
          {count < 1 ? (
            [...Array(5)].map((_, index) => {
              index += 1;
              return (
                <li key={index} className="ltr:mr-2 rtl:ml-2 text-white">
                  <Star className={`${addSize}`} />
                </li>
              );
            })
          ) : count >= 1 && count < 1.5 ? (
            <>
              <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                <StarFill className={`${addSize}`} />
              </li>
              {[...Array(4)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 1.5 && count < 2 ? (
            <>
              <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                <StarFill className={`${addSize}`} />
              </li>
              <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                <StarHalf className={`${addSize}`} />
              </li>
              {[...Array(3)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 2 && count < 2.5 ? (
            <>
              {[...Array(2)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
              {[...Array(3)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 2.5 && count < 3 ? (
            <>
              {[...Array(2)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
              <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                <StarHalf className={`${addSize}`} />
              </li>
              {[...Array(2)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 3 && count < 3.5 ? (
            <>
              {[...Array(3)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
              {[...Array(2)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 3.5 && count < 4 ? (
            <>
              {[...Array(3)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
              <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                <StarHalf className={`${addSize}`} />
              </li>
              {[...Array(1)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 4 && count < 4.5 ? (
            <>
              {[...Array(4)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
              {[...Array(1)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <Star className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : count >= 4.5 && count < 5 ? (
            <>
              {[...Array(4)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
              <li className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                <StarHalf className={`${addSize}`} />
              </li>
            </>
          ) : count === 5 ? (
            <>
              {[...Array(5)].map((_, index) => {
                index += 1;
                return (
                  <li key={index} className="ltr:mr-2 rtl:ml-2 text-yellow-400">
                    <StarFill className={`${addSize}`} />
                  </li>
                );
              })}
            </>
          ) : (
            ""
          )}
        </ul>
      )}
    </>
  );
}
