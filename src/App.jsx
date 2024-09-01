import React, { useState } from "react";
import Sidebar from "./components/multi-use/Sidebar";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/multi-use/Navbar";
import Breadcrumbs from "./components/multi-use/Breadcrumbs";
import Dashboard from "./components/dashboard/Dashboard";
// import Orders from "./components/orders/Orders";
import TableLayout from './components/multi-use/TableLayout'

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
// ORDER TABLE COLUMN DEFINED 
const orderColumns = [
  {
    name: "Order ID",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Retailer",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Order Date",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Approved Status",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Order Status",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <button
        onClick={() => handleButtonClick(row)}
        className="viewBtn"
      >
        View
      </button>
    ),
    sortable: false, // Usually you don't want to sort action buttons
  },
];
// INVOICE TABLE COLUMN DEFINED 
const invoiceColumns = [
  {
    name: "Invoice ID",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Retailer Name",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Area",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Invoice Date",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Total Amt with VAT",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Payment Status",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <button onClick={() => handleButtonClick(row)} className="viewBtn">
        View Invoice
      </button>
    ),
    sortable: false, // Usually you don't want to sort action buttons
  },
];
// PRODUCTS TABLE COLUMN DEFINED 
const productsColumns = [
  {
    name: "Product Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Mfd Date",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Exp Date",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Unit",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Ava. Quantity",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <button onClick={() => handleButtonClick(row)} className="viewBtn">
        Details
      </button>
    ),
    sortable: false, // Usually you don't want to sort action buttons
  },
];
// PRODUCTS TABLE COLUMN DEFINED 
const RetailerColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Area Code",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Street Address",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Varification",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <button onClick={() => handleButtonClick(row)} className="viewBtn">
        Details
      </button>
    ),
    sortable: false, // Usually you don't want to sort action buttons
  },
];
// PRODUCTS TABLE COLUMN DEFINED 
const manufacturerColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.email,
    sortable: true,
  },

  {
    name: "Action",
    cell: (row) => (
      <div className="multiBtnParent flex gap-1">
        <button onClick={() => handleButtonClick(row)} className="viewBtn">
          Details
        </button>
        <button onClick={() => handleButtonClick(row)} className="viewBtn edit">
          Edit
        </button>
        <button onClick={() => handleButtonClick(row)} className="viewBtn delete">
          Delete
        </button>
      </div>
    ),
    sortable: false, // Usually you don't want to sort action buttons
  },
];
const distributorsColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.email,
    sortable: true,
  },

  {
    name: "Action",
    cell: (row) => (
      <div className="multiBtnParent flex gap-1">
        <button onClick={() => handleButtonClick(row)} className="viewBtn">
          Details
        </button>
        <button onClick={() => handleButtonClick(row)} className="viewBtn edit">
          Edit
        </button>
        <button
          onClick={() => handleButtonClick(row)}
          className="viewBtn delete"
        >
          Delete
        </button>
      </div>
    ),
    sortable: false, // Usually you don't want to sort action buttons
  },
];

// HARD CODED TABLE DATA 
        // ORDER PAGE DATA 
const OrderData = [
  { id: 1, name: "John Doe", age: 28, email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane.smith@example.com" },

];


// POPUP MODAL | ADD PRODUCT 


  return (
    <>
      <div className="w-full flex">
        <Sidebar></Sidebar>
        <div className="navAndBreadcrumbs w-full">
          <Navbar></Navbar>
          <Breadcrumbs></Breadcrumbs>

          {/* ------------ */}
          <Routes>
            {/*  HOME   */}
            <Route path="/" element={<Dashboard></Dashboard>}></Route>{" "}
            {/* ORDERS */}
            <Route
              path="/orders"
              element={
                <TableLayout
                  header={"Orders"}
                  columns={orderColumns}
                  data={OrderData}
                  isAdd={false}
                ></TableLayout>
              }
            ></Route>{" "}
            {/*  INVOICE ROUTE   */}
            <Route
              path="/invoice"
              element={
                <TableLayout
                  header={"Invoices"}
                  columns={invoiceColumns}
                  data={OrderData}
                  isAdd={false}
                ></TableLayout>
              }
            ></Route>
            {/* PRODUCTS  ROUTE */}
            <Route
              path="/products"
              element={
                <TableLayout
                  header={"Products"}
                  columns={productsColumns}
                  data={OrderData}
                  isAdd={true}
                ></TableLayout>
              }
            ></Route>{" "}
            {/* RETAILER  ROUTE */}
            <Route
              path="/retailer"
              element={
                <TableLayout
                  header={"Retailer"}
                  columns={RetailerColumns}
                  data={OrderData}
                  isAdd={true}
                ></TableLayout>
              }
            ></Route>{" "}
            {/* MANUFACTURER ROUTE  */}
            <Route
              path="/manufacturer"
              element={
                <TableLayout
                  header={"Manufacturer"}
                  columns={manufacturerColumns}
                  data={OrderData}
                  isAdd={true}
                ></TableLayout>
              }
            ></Route>{" "}
            {/* DISTRIBUTORS ROUTE  */}
            <Route
              path="/distributors"
              element={
                <TableLayout
                  header={"Distributors"}
                  columns={distributorsColumns}
                  data={OrderData}
                  isAdd={true}
                ></TableLayout>
              }
            ></Route>{" "}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
