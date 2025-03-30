import { SearchQueryProps } from "../../types/props/searchQuery";
import { Input, SearchIcon, SearchWrapper } from "./style";

const SearchBar = ({ searchQuery, setSearchQuery }: SearchQueryProps) => {
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

export default SearchBar;
