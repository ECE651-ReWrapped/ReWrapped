import { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <form>
        <TextField
          id="search-bar"
          onInput={(e) => setQuery(e.target.value)}
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
