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
} from "@mui/icons-material";

const Sidebar = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);

  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };

  const handleDropdown2Click = () => {
    setOpenDropdown2(!openDropdown2);
  };

  return (
    <div style={{ width: 240, height: "100vh", backgroundColor: "#f4f4f4" }}>
      <List>
        {/* Dropdown 1 */}
        <ListItem button onClick={handleDropdown1Click}>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Category" />
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

        {/* Dropdown 2 */}
        <ListItem button onClick={handleDropdown2Click}>
          <ListItemIcon>
            <Subscriptions />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
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
      </List>
    </div>
  );
};

export default Sidebar;
