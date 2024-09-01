// src/components/Sidebar.js

import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Inbox,
  Mail,
  Category,
  Subscriptions,
  Home as HomeIcon,
  ViewList as ViewListIcon,
  Receipt as ReceiptIcon,
  Inventory as InventoryIcon,
  AddBusiness as AddBusinessIcon,
  Factory as FactoryIcon,
  SafetyDivider as SafetyDividerIcon,
} from "@mui/icons-material";
// import "remixicon/fonts/remixicon.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";




const Sidebar = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);

  // for dropdown1 expand collapse
  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };

  // for dropdown2 expand collapse
  const handleDropdown2Click = () => {
    setOpenDropdown2(!openDropdown2);
  };

  // Aside Options 
  let asideOptions = [
    {
      name: "Home",
      link: "/",
      isDivider: "1",
      icon: <HomeIcon />,
    },
    {
      name: "Orders",
      link: "/orders",
      isDivider: "0",
      icon: <ViewListIcon />,
    },
    {
      name: "Invoice",
      link: "/invoice",
      isDivider: "0",
      icon: <ReceiptIcon />,
    },
    {
      name: "Products",
      link: "/products",
      isDivider: "0",
      icon: <InventoryIcon />,
    },
    {
      name: "Retailers",
      link: "/retailer",
      isDivider: "0",
      icon: <AddBusinessIcon />,
    },
    {
      name: "Manufacturers",
      link: "/manufacturer",
      isDivider: "0",
      icon: <FactoryIcon />,
    },
    {
      name: "Distributors",
      link: "/distributors",
      isDivider: "0",
      icon: <SafetyDividerIcon />,

      dropDownParent: [
        {
          name: "Manage",
        },
        {
          name: "Checkout",
        },
        {
          name: "Page Control",
        },
      ],
    },
  ];

  return (
    <div className="asideParent" style={{ width: 240, height: "100vh", backgroundColor: "#f4f4f4" }}>
      <List>
        {/* ASIDE OPTIONS WITHOUT DROPDOWN */}
        {asideOptions.map((elem) => {
          return (
            <>
              {elem.name && (
                <NavLink to={elem.link} className={"navLink"}>
                  <ListItem button>
                    <ListItemIcon>{elem.icon}</ListItemIcon>
                    <ListItemText primary={elem.name} />
                  </ListItem>
                </NavLink>
              )}
              {elem.isDivider == 1 && <Divider />}{" "}
              {/*keeps horizontal lines bellow home oprion */}
            </>
          );
        })}
        <Divider />

        {/* Dropdown 1 CHECKOUT*/}
        <ListItem button onClick={handleDropdown1Click}>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Checkout" />
          {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Option 1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Option 2" />
            </ListItem>
          </List>
        </Collapse>

        <Divider />

        {/* Dropdown 2 PAGE CONTROL*/}
        <ListItem button onClick={handleDropdown2Click}>
          <ListItemIcon>
            <Subscriptions />
          </ListItemIcon>
          <ListItemText primary="Page Control" />
          {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              {/* <ListItemText primary="Option A" /> */}
              <a href="">fwfwef</a>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Option B" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />

        {/* Dropdown 3 Manage*/}
        <ListItem button onClick={handleDropdown2Click}>
          <ListItemIcon>
            <Subscriptions />
          </ListItemIcon>
          <ListItemText primary="Manage" />
          {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              {/* <ListItemText primary="Option A" /> */}
              <a href="">fwfwef</a>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Option B" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
      </List>
    </div>

  );
};

export default Sidebar;
