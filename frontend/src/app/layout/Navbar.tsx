import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

type NavbarProps = {
    toggleDarkMode: () => void;
    darkMode: boolean;
};

export const Navbar = ({
    toggleDarkMode,
    darkMode
}:NavbarProps
) => {
  

  return (
   <AppBar position="fixed" >
        <Toolbar>
            <Typography variant="h6">
                Re-Store
            </Typography>

            <IconButton onClick={toggleDarkMode} sx={{mr:10}}>
                {darkMode ? <DarkMode/> : < LightMode sx={{color:"yellow"}} />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}