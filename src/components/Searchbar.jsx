import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "../utility/debounce";
import axios from "axios";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = debounce(async (query) => {
    setIsLoading(true);
    console.log("Submitted");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_LOCAL}/searchUser`,
        {
          query: query,
        },
        { withCredentials: true }
      );

      setResults(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Search Error", err);
      setIsLoading(false);
    }
  }, 500);

  //Rerennder only on query greater than 3
  useEffect(() => {
    if (query.length >= 3) {
      debouncedSearch(query);
    } else {
      setResults([]); //Empty results if query length less than 3
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        results.map((user) => <div key={user.user_name}>{user.user_name}</div>)
      )}
    </>
  );
};

export default Searchbar;
