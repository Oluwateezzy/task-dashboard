import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
    totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}