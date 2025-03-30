import { PaginationButton, PaginationContainer } from "./style";

export default function Pagination({ currentPage, setCurrentPage }) {
    const totalPages = 5;

    return (
        <PaginationContainer>
            <PaginationButton onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
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

            <PaginationButton onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage >= totalPages}>
                Next
            </PaginationButton>
        </PaginationContainer>
    );
};
