import React from "react";
import { MDBCard, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

const Category = ({ handleCategory, option }) => {
    return (
      <MDBCard style={{ width: "18rem", marginTop: "20px" }}>
        <h4>Category</h4>
        <MDBListGroup flush>
          {option.map((item, index) => {
            return (
              <MDBListGroupItem
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => handleCategory(item)}
              >
                {item}
              </MDBListGroupItem>
            );
          })}
        </MDBListGroup>
      </MDBCard>
    );
  };
  

export default Category;