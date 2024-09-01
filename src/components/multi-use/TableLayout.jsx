import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Container } from "reactstrap"; // Removed Input as it's not used
import SearchBtn from "./SearchBtn";
import AddModalPopup from "./AddModalPopup";
import { useLocation } from "react-router-dom";


const Orders = ({ header, data, columns, isAdd }) => {
  const [searchValue, setSearchValue] = useState("");

  // Filtered data based on search value
  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.email.toLowerCase().includes(searchValue.toLowerCase())
  );
  // -------------
  const location = useLocation(); // Get the current URL

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Determine the data to pass to the modal based on the URL
  const getModalData = () => {
    switch (location.pathname) {
      case "/orders":
        return { type: "order", additionalData: "some order-specific data" };
      case "/invoice":
        return {
          type: "invoice",
          additionalData: "some invoice-specific data",
        };
      case "/products":
        return {
          type: "product",
          additionalData: [
  {
    name: "Product Name",
    isOption: false,
    isDate: false,
    isTextArea: false,
    class: "prodName",
  },
  {
    name: "Product Code",
    isOption: false,
    isDate: false,
    isTextArea: false,
    class: "prodCode",
  },
  {
    name: "Manufactured Date",
    isOption: false,
    isDate: true,
    isTextArea: false,
    class: "prodManufacDate",
  },
  {
    name: "Expiry Date",
    isOption: false,
    isDate: true,
    isTextArea: false,
    class: "prodExpDate",
  },
  {
    name: "Price",
    isOption: false,
    isDate: false,
    isTextArea: false,
    class: "prodPrice",
  },
  {
    name: "Stock Management",
    isOption: true,
    isDate: false,
    isTextArea: false,
    class: "prodManagement",
  },
  {
    name: "Select Category",
    isOption: true,
    isDate: false,
    isTextArea: false,
    class: "prodCategory",
  },
  {
    name: "Select Unit",
    isOption: false,
    isDate: true,
    isTextArea: true,
    class: "prodTextArea",
  },
]
,
        };
      default:
        return {};
    }
  };

  const modalData = getModalData();

  return (
    <>
      <div className="searchWithHeader">
        <h1 className="cs-topper">{header}</h1>
        {isAdd && (
          <>
            <AddModalPopup data={modalData}></AddModalPopup>
          </>
        )}

        <SearchBtn searchValue={searchValue} handleChange={handleChange} />
      </div>
      <div className="tableParent">
        <Container>
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            defaultSortField="name"
            sortIcon={<span>⇅</span>}
          />
        </Container>
      </div>
    </>
  );
};

export default Orders;
