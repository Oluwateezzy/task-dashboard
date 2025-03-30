import { PaginationProps } from "../../types/props/paginationProps";
import { PaginationButton, PaginationContainer } from "./style";

export default function Pagination({ totalPages, currentPage, setCurrentPage }: PaginationProps) {
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <PaginationContainer>
            <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
                Previous
            </PaginationButton>

            {Array.from({ length: totalPages }, (_, i) => (
                <PaginationButton
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    active={currentPage === i + 1}
                >
                    {i + 1}
                </PaginationButton>
            ))}

            <PaginationButton onClick={nextPage} disabled={currentPage >= totalPages}>
                Next
            </PaginationButton>
        </PaginationContainer>
    );
};
