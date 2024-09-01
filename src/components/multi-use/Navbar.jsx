import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Person2 as Person2Icon,
  Settings as SettingsIcon,
  LockReset as LockResetIcon,
  Security as SecurityIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { NavLink } from 'react-router-dom';
import "../../css/navbar.css";
import Breadcrumbs from './Breadcrumbs';



function Navbar() {
  const [openDropdown1, setOpenDropdown1] = useState(false);


  // for dropdown1 expand collapse
  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };

  const moreOption = [
    { name: "Profile", link: "", icon: <Person2Icon /> },
    { name: "Settings", link: "", icon: <SettingsIcon /> },
    { name: "Change Password", link: "", icon: <LockResetIcon /> },
    { name: "Data Privacy", link: "", icon: <SecurityIcon />,  isDivider: true },
    { name: "Log out", link: "", icon: <LogoutIcon />,}
  ];

  return (
    <>
      <div className="navParent h-[58px] w-full flex justify-between">
        <div className="left flex justify-center items-center ">
          {" "}
          <p>Welcome Admin</p>
        </div>
        <div className="right flex justify-center items-center">
          <div className="list h-full">
            <List>
              {/* Dropdown 1 CHECKOUT*/}
              <NavLink>
                <ListItem button onClick={handleDropdown1Click}>
                  <ListItemText primary="Manage" />{" "}
                  <ListItemIcon>
                    {" "}
                    {/* admin profile pic here */}
                    <img
                      src={
                        "https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small_2x/admin-3d-illustration-icon-png.png"
                      }
                      alt=""
                      className="w-[35px]"
                    />
                  </ListItemIcon>
                  {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </NavLink>
              <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {moreOption.map((elem) => {
                    {
                      /* navbar right side options  */
                    }
                    return (
                      <>
                        <NavLink>
                          <ListItem button>
                            <ListItemIcon>{elem.icon}</ListItemIcon>
                            <ListItemText primary={elem.name} />
                          </ListItem>
                        </NavLink>
                        {elem.isDivider && <Divider />}
                      </>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar