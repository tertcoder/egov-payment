import { useState, useMemo } from "react";

export interface PaginationOptions {
  pageSize: number;
  currentPage: number;
}

export interface PaginationResult<T> {
  currentItems: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  setPageSize: (size: number) => void;
}

export function usePagination<T>(
  items: T[],
  initialPageSize: number = 10
): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const paginationData = useMemo(() => {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      currentItems,
      totalPages,
      totalItems,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };
  }, [items, currentPage, pageSize]);

  const goToPage = (page: number) => {
    const clampedPage = Math.max(1, Math.min(page, paginationData.totalPages));
    setCurrentPage(clampedPage);
  };

  const goToNextPage = () => {
    if (paginationData.hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (paginationData.hasPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSetPageSize = (size: number) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when page size changes
  };

  return {
    ...paginationData,
    currentPage,
    pageSize,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    setPageSize: handleSetPageSize,
  };
}