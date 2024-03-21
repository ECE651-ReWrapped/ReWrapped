import { useEffect, useState } from "react";
import { IconButton, TextField, CircularProgress, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "../utility/debounce";
import axios from "axios";
import { useStyles } from "../styles/searchBar";
import SearchCard from "./SearchCard";

const Searchbar = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = debounce(async (query) => {
    setIsLoading(true);
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
    <div className={classes.container}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={classes.searchContainer}
      >
        <TextField
          className={classes.searchInput}
          id="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          label="Find users"
          variant="outlined"
          placeholder="Search..."
          size="large"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      </form>
      {isLoading ? (
        <CircularProgress color="success" className={classes.loading} />
      ) : (
        <div className={classes.resultsContainer}>
          {results.map((user) => (
            <SearchCard user={user} key={user.user_id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
