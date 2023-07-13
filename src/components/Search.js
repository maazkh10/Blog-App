import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const Search= ({handelSearch, searchValue, onInputChange}) => {
    return (
        <div className="searchForm">
            <form className="d-flex" onSubmit={handelSearch}>
                <input 
                type="Search"
                className="form-control"
                placeholder="Search Bolg ..."
                value={searchValue}
                onChange={onInputChange}
                />
                <MDBBtn type="submit">Submit</MDBBtn>
            </form>
        </div>
    )
}
export default Search;