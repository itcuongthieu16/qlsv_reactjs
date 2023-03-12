import React, { useState } from "react";
import { Input, Table } from "antd";

const Search = ({ searchData }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (value) => {
        setSearch(value);
        searchData(value);
    };

    return (
        <div className="w-full float-left max-w-sm mx-auto mb-3">
            <Input.Search
                placeholder="Search"
                enterButton="Search"
                size="large"
                className="w-full"
                onSearch={handleSearch}
            />
        </div>
    );
};

export default Search;