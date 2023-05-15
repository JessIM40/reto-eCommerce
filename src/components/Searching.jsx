import { useState } from "react";
import "../style/search.css";

function Searching ({onSearch}){

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
      };
    
    return(
        <div className="containerSearch">
            <input
              type="search"
              value={search}
              placeholder="Encuentra lo que quieres"
              onChange={handleSearch}
            />
            <i className="fi fi-rr-search"></i>
        </div>
    )
}

export default Searching