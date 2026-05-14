import { Button, Menu, Fade, MenuItem, ListItemIcon, ListItemText, Divider} from "@mui/material";
import  { useState } from "react";
import type { User } from "../model/user";
// import { Logout, Person } from "@mui/icons-material";
import { useLogoutMutation } from "../../features/account/accountApi";
import { Logout, Person, History } from "@mui/icons-material"; 

type UserProps = {
user: User
}
export default function UserMenu({user}:UserProps) {
  const [logout] = useLogoutMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        color="inherit"
        size="large"
        sx={{fontSize: '1.1rem'}}
      >
        {user.email}
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
        <ListItemIcon>
            <Person/>
            </ListItemIcon>
            <ListItemText>
                Profile
        </ListItemText>
        </MenuItem>
        <MenuItem>
        <ListItemIcon>
            <History/>
            </ListItemIcon>
            <ListItemText>
                My account
        </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem  onClick={logout}>
        <ListItemIcon >
            <Logout/>
            </ListItemIcon>
            <ListItemText>
                Logout
        </ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
