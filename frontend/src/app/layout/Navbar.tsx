import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Grid, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { Loading } from "../../features/loader/Loading";
import icon from "../../assets/icon.ico";
import { useDispatch } from "react-redux";
import { setDarkMode } from "./uiSlice";


const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
];
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
];

const navStyle = {
                        color: 'inherit',
                        typography: 'h6',
                        textDecoration: 'none',
                        "&:hover": {
                            color: 'grey.500'
                        },
                        "&.active": {
                            color: '#03f8e4ff'
                        }
                    }


export const Navbar = () => {
  
const {isLoading, darkMode} = useAppSelector((state) => state.ui);
const dispatch = useDispatch()
  return (
   <AppBar position="fixed" >
        <Toolbar sx={{display:'flex', alignItems:'center', justifyContent: "space-between"}}>
            <Box display="flex" alignItems="center">
                <Typography variant="h6" component={NavLink} to="/" sx={navStyle}>
                Re-Store
            </Typography>

            <IconButton onClick={()=> dispatch(setDarkMode())} sx={{ml:2}}>
                {darkMode ? <DarkMode/> : < LightMode sx={{color:"yellow"}} />}
            </IconButton>
            </Box>

        
<List sx={{display:'flex'}}>
             {midLinks.map(({title, path}) => (
                <ListItem
                    key={path}
                    component={NavLink}
                    to={path}
                    sx={navStyle}
                >
                    {title.toUpperCase()}
                </ListItem>
            ))}
            </List>

<Box display="flex" alignItems="center">
            <IconButton size="large" sx={{color: "inherit"}}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>

             <List sx={{display:'flex', gap:4, marginLeft:'auto', marginRight:'auto'}}>
             {rightLinks.map(({title, path}) => (
                <ListItem
                    key={path}
                    component={NavLink}
                    to={path}
                    sx={navStyle}
                >
                    {title.toUpperCase()}
                </ListItem>
            ))}
            </List>

            </Box>
           

            
        </Toolbar>
        {
        isLoading && (
             <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "80vh" }}
    
>
      <Loading 
        src = {icon}
        size = {100}
        borderSize = {5}
        borderColor = "#13c528ff"
      />    
      </Grid>
        )
    }
    </AppBar>
  )
}