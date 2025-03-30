import { SearchQueryProps } from "../../types/props/searchQueryProps";
import { Input, SearchIcon, SearchWrapper } from "./style";

// SearchBar component for filtering tasks by title or description
export default function SearchBar({ searchQuery, setSearchQuery }: SearchQueryProps) {
    return (
        <SearchWrapper>
            
            <SearchIcon />
            <Input
                id="search"
                placeholder="Search by title or description"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
            />

        </SearchWrapper>
    );
};

