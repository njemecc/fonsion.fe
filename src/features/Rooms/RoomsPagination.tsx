import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router";
import { PAGESIZE } from "./constants";
import { cn } from "../../lib/utils";

const PAGE_SIZE = PAGESIZE;

const Pagination = ({
  count,
  className,
  ...props
}: { count: number } & React.ComponentProps<"nav">) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 0
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function goToPage(page: number) {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  function nextPage() {
    if (currentPage < pageCount - 1) goToPage(currentPage + 1);
  }

  function prevPage() {
    if (currentPage > 0) goToPage(currentPage - 1);
  }

  if (pageCount <= 0) return null;

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn(
        "mx-auto flex w-full justify-center items-center gap-2",
        className
      )}
      {...props}
    >
      <PaginationPrevious onClick={prevPage} disabled={currentPage === 0} />

      <ul className="flex items-center gap-2">
        {Array.from({ length: pageCount }, (_, index) => (
          <PaginationPage
            key={index}
            page={index}
            isActive={index === currentPage}
            onClick={() => goToPage(index)}
          />
        ))}
      </ul>

      <PaginationNext
        onClick={nextPage}
        disabled={currentPage === pageCount - 1}
      />
    </nav>
  );
};

const PaginationPrevious = ({
  className,
  onClick,
  disabled,
  ...props
}: React.ComponentProps<"button"> & {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    aria-label="Go to previous page"
    className={cn(
      "flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300",
      disabled ? "opacity-50 cursor-not-allowed" : "",
      className
    )}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </button>
);

const PaginationNext = ({
  className,
  onClick,
  disabled,
  ...props
}: React.ComponentProps<"button"> & {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    aria-label="Go to next page"
    className={cn(
      "flex items-center gap-1 px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300",
      disabled ? "opacity-50 cursor-not-allowed" : "",
      className
    )}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </button>
);

const PaginationPage = ({
  page,
  isActive,
  onClick,
}: {
  page: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <li>
    <button
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "px-3 py-2 rounded-md",
        isActive ? "bg-appBrown text-white" : "bg-gray-200 hover:bg-gray-300"
      )}
      onClick={onClick}
    >
      {page + 1}
    </button>
  </li>
);

export default Pagination;
