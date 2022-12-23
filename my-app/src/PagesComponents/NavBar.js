import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,Box,IconButton,styled,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,alpha,Menu,MenuItem
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartSharp';
import DrawerComp from "./Drawer";
import logo from './Assts/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import MenuIcon from '@mui/icons-material/Menu';
import './Navar.css'
import { Link } from 'react-router-dom';
import Test from "./Test";
const settings=[{title:'Products',id:"./Products"},{title:'REGISTER',id:"./REGISTER"},{title:'LOGIN',id:"./LOGIN"},{title:'About',id:"./About"}];
// ['Products','REGISTER','LOGIN','About'];
// const hj=['./'];
const Logo=styled('img')(()=>({
  width:'5rem',
  minWidth:'5rem'
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    minWidth:'300px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-175),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("xl"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#00b4d8'}}>
        <Toolbar>
        <Logo src={logo} />
       
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shopping
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "63%" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
               <a href="./Procects" >
                 < Tab className="links" label="Procects"  />
                 </a>
                 <a href="./REGISTER" >
                <Tab className="links" label="REGISTER" />
                </a>
                <a href="./login" >
                <Tab className="links" label="LOGIN" />
                </a>
                <a href="./About" >
                <Tab className="links" label="About" />
                </a>
                
              </Tabs>
            
         <Box sx={ {marginLeft: "1" } }>
            <IconButton style={{color:'white',marginLeft:'10px'}}>
            <a href="https://www.google.com/" >
            <ShoppingCartIcon/>
                </a>
            
            </IconButton>
          
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1}} style={{color:'white'}}>
                <ReorderSharpIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" >
                  <a href={setting.id} style={{color:"black"}} >
                 {setting.title}
                </a>
                  
                  
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;