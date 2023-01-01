import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const searchbarStyles = {
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
    boxShadow: 'none',
    mr: { sm: 5 }
}

const searchIconStyles = {
    p: '10px',
    color: 'red'
}

const SearchBar = () => {
    return (
        <Paper component='form' onSubmit={() => { }} sx={searchbarStyles}>
            <input type="text" className="search-bar" placeholder='Search...' value='' onChange={() => { }} />
            <IconButton>
                <Search type='sumit' sx={searchIconStyles} />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;