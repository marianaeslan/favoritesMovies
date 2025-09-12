import { useState } from "react";
import { Form, Input, SearchButton } from "./styles";

export default function SearchBar({ onSearch, loading }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    onSearch(searchQuery);
  };

  return (
    <>
      <Form onSubmit={handleSearch} className="search-form">
        <Input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={loading}
        />
        <SearchButton type="submit" className="search-btn">
          Search
        </SearchButton>
      </Form>
    </>
  );
}
