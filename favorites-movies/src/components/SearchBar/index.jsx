import { useState } from "react";
import { Form, Input, SearchButton } from "./styles";

export default function SearchBar() {
  const [SearchQuery, setSeacrhQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(SearchQuery);
    setSeacrhQuery("");
  };

  return (
    <>
      <Form onSubmit={handleSearch} className="search-form">
        <Input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={SearchQuery}
          onChange={(e) => setSeacrhQuery(e.target.value)}
        />
        <SearchButton type="submit" className="search-btn">
          Search
        </SearchButton>
      </Form>
    </>
  );
}
