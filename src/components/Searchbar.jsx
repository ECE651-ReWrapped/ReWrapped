import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "../utility/debounce";
import axios from "axios";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debouncedSearch = debounce(async (query) => {
    console.log("Submitted");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_LOCAL}/searchUser`,
        {
          query: query,
        },
        { withCredentials: true }
      );

      console.log(res);
    } catch (err) {
      console.error("Search Error", err);
    }
  }, 500);

  //Rerennder only on query greater than 3
  useEffect(() => {
    if (query.length >= 3) {
      debouncedSearch(query);
    }
  }, [query]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          label="Find users"
          variant="outlined"
          placeholder="Search..."
          size="large"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
};

export default Searchbar;
