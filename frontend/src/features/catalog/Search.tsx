import { debounce, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { setSearchTerm } from "./catalogSlice";
import { useEffect, useState } from "react";

export const Search = () => {
    const {searchTerm } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    const [terms, setTerms] = useState(searchTerm);

    useEffect(() => {
        setTerms(searchTerm);
    }, [searchTerm]);

    const debounceSearch = debounce(event => {
        dispatch(setSearchTerm(event.target.value));
    }, 500);
  return <TextField label="Search products" variant="outlined" fullWidth value={terms} onChange={e => {
    setTerms(e.target.value);
    debounceSearch(e);
  }} />;
};
