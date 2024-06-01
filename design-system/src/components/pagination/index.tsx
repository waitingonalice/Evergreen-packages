import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "../../utils";
import { Button } from "../button";
import { Text } from "../text";

interface PaginationButtonProps {
  onClick: (page: number) => void;
  active: boolean;
  value: number;
}

interface RenderPageButtonsProps {
  pages: number;
  currentPage: number;
  onClick: (page: number) => void;
}

interface PageButtonWrapperProps extends RenderPageButtonsProps {
  children: React.ReactNode;
}

export interface PaginationProps {
  totalCount: number;
  className?: string;
  currentLimit: number;
  currentIndex: number;
  onClick: (index: number) => void;
}
function PageButton({ onClick, active, value }: PaginationButtonProps) {
  const handleOnClick = (page: number) => {
    onClick(page);
  };

  return (
    <Button
      variant="primaryLink"
      onClick={() => handleOnClick(value)}
      className={cn(
        "inline-flex items-center px-4 pb-2 border-b-2 border-transparent",
        active && "border-primary-main"
      )}
      aria-current="page"
    >
      <Text type="body">{value}</Text>
    </Button>
  );
}

function Ellipsis() {
  return (
    <span className="inline-flex items-center px-4 text-primary-main">...</span>
  );
}

function RenderPageButtons({
  pages,
  currentPage,
  onClick,
}: RenderPageButtonsProps) {
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  if (pages < 6) {
    return pageNumbers.map((page) => (
      <PageButton
        key={page}
        onClick={onClick}
        active={currentPage === page}
        value={page}
      />
    ));
  }
  // handle first 3 pages
  if (currentPage < 4) {
    return (
      <>
        {pageNumbers.slice(0, 4).map((page) => (
          <PageButton
            key={page}
            onClick={onClick}
            active={currentPage === page}
            value={page}
          />
        ))}
        <Ellipsis />
        <PageButton
          onClick={onClick}
          active={currentPage === pages}
          value={pages}
        />
      </>
    );
  }

  // handle last 3 pages
  if (currentPage > pages - 3) {
    return (
      <>
        <PageButton
          onClick={onClick}
          active={currentPage === pageNumbers[0]}
          value={pageNumbers[0]}
        />
        <Ellipsis />
        {pageNumbers.slice(-4).map((page) => (
          <PageButton
            key={page}
            onClick={onClick}
            active={currentPage === page}
            value={page}
          />
        ))}
      </>
    );
  }
  // handle middle pages
  return (
    <>
      <PageButton
        onClick={onClick}
        active={currentPage === pageNumbers[0]}
        value={pageNumbers[0]}
      />
      <Ellipsis />
      {pageNumbers.slice(currentPage - 2, currentPage + 1).map((page) => (
        <PageButton
          key={page}
          onClick={onClick}
          value={page}
          active={currentPage === page}
        />
      ))}
      <Ellipsis />
      <PageButton
        onClick={onClick}
        active={currentPage === pageNumbers[pageNumbers.length - 1]}
        value={pageNumbers[pageNumbers.length - 1]}
      />
    </>
  );
}

function PaginationWrapper({
  children,
  pages,
  onClick,
  currentPage,
}: PageButtonWrapperProps) {
  const isLastPage = currentPage === pages;
  const isFirstPage = currentPage === 1;
  const handlePrevClick = () => {
    onClick(currentPage - 1);
  };

  const handleNextClick = () => {
    onClick(currentPage + 1);
  };
  return (
    <>
      <div className={cn("-mt-px flex w-0 flex-1")}>
        <Button
          variant="primaryLink"
          onClick={handlePrevClick}
          disabled={isFirstPage}
          className={cn(
            "inline-flex items-center border-transparent pr-1 pb-2"
          )}
        >
          <ArrowLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
          <Text type="caption">Previous</Text>
        </Button>
      </div>

      <div className="hidden md:-mt-px md:flex">{children}</div>

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Button
          variant="primaryLink"
          onClick={handleNextClick}
          disabled={isLastPage}
          className={cn(
            "inline-flex items-center  border-transparent pl-1 pb-2"
          )}
        >
          <Text type="caption">Next</Text>
          <ArrowRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </>
  );
}

export function Pagination({
  totalCount,
  currentIndex,
  currentLimit,
  className,
  onClick,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / currentLimit);
  const currentPage = Math.ceil(currentIndex / currentLimit + 1);

  const handleOnClick = (page: number) => {
    onClick(page * currentLimit - currentLimit);
  };

  return (
    <nav className={cn("flex items-center justify-between mt-4", className)}>
      <PaginationWrapper
        pages={pages}
        currentPage={currentPage}
        onClick={handleOnClick}
      >
        <RenderPageButtons
          pages={pages}
          currentPage={currentPage}
          onClick={handleOnClick}
        />
      </PaginationWrapper>
    </nav>
  );
}
