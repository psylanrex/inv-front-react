import { useState, useEffect } from "react";
import { Tooltip } from "@/components/reactdash-ui";
import {
  ENUM_PAGINATION_PLACEMENTS,
  PAGINATION_PLACEMENTS,
} from "@/utils/utils.enum";

type PaginationProps = {
  className?: string;
  totalData: number;
  perPage: number;
  onPageChanged: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    page: number
  ) => void;
  currentPage: number;
  placement?: keyof typeof ENUM_PAGINATION_PLACEMENTS;
};

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default function Pagination(props: PaginationProps) {
  // Props ( totalData, perPage, onPageChanged, currentPage , placement, className )
  const left_nav = "left";
  const right_nav = "right";

  const { totalData, perPage, onPageChanged, currentPage } = props;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(totalData / perPage));
  }, [setTotalPages]);

  const fetchPageNumbers = () => {
    const totalNumbers = 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [...extraPages, ...pages];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [...pages];
          break;
        }
      }
      return [left_nav, 1, ...pages, totalPages, right_nav];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];

  const addplacement = props.placement
    ? PAGINATION_PLACEMENTS[props.placement]
    : PAGINATION_PLACEMENTS[ENUM_PAGINATION_PLACEMENTS.center];
  const addClass = props.className ? ` ${props.className}` : "";

  return (
    <nav aria-label="Pagination">
      <ul
        className={`pagination-nav flex ${addplacement}${addClass} space-x-0`}
      >
        {pages.map((page, index) => {
          if (page === left_nav)
            return (
              <li key={index} className="page-item">
                <Tooltip title="First page">
                  <a
                    href="/"
                    className="block relative py-3 px-4 bg-white border border-gray-200 hover:bg-indigo-100 hover:text-indigo-500 -mr-0.5 dark:bg-gray-800 dark:border-gray-700"
                    aria-label="Previous"
                    onClick={(e) => onPageChanged(e, 1)}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </Tooltip>
              </li>
            );

          if (page === right_nav)
            return (
              <li key={index} className="page-item">
                <Tooltip title="Last page">
                  <a
                    className="block relative py-3 px-4 bg-white border border-gray-200 hover:bg-indigo-100 hover:text-indigo-500 ltr:-mr-0.5 rtl:-ml-0.5 dark:bg-gray-800 dark:border-gray-700"
                    href="/"
                    aria-label="Next"
                    onClick={(e) => onPageChanged(e, totalPages)}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </Tooltip>
              </li>
            );

          return (
            <li
              key={index}
              className={`page-item${currentPage === page ? " active" : ""}`}
            >
              <a
                className="block relative py-3 px-4 bg-white border border-gray-200 hover:bg-indigo-100 hover:text-indigo-500 -mr-0.5 dark:bg-gray-800 dark:border-gray-700"
                href="/"
                onClick={(e) => onPageChanged(e, page as number)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
