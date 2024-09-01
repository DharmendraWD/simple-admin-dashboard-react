import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Container } from "reactstrap"; // Removed Input as it's not used
import SearchBtn from "../multi-use/SearchBtn";

// Hard-coded data
const data = [
  { id: 1, name: "John Doe", age: 28, email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
  {
    id: 3,
    name: "Michael Johnson",
    age: 45,
    email: "michael.johnson@example.com",
  },
  { id: 4, name: "Emily Davis", age: 29, email: "emily.davis@example.com" },
  // Add more data as needed
];

// Define columns
const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
];

const Orders = () => {
  const [searchValue, setSearchValue] = useState("");

  // Filtered data based on search value
  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.email.toLowerCase().includes(searchValue.toLowerCase())
  );



  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="searchWithHeader">
      <SearchBtn searchValue={searchValue} handleChange={handleChange} />
        <h1>Header</h1>
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
