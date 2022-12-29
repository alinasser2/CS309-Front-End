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
import Mobile from "./menuMobile";
import logo from './Assts/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import './NavBar.css'
import {Link} from 'react-router-dom';

const settings=[{title:'Products',id:"./ProductList"},{title:'Register',id:"./Register"},{title:'Login',id:"./Login"},{title:'About',id:"./About"},{title:'UsersList',id:"./UsersList"}];

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
      marginLeft: theme.spacing(-192),
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
  const [value, setValue] = useState(-1);
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
      <AppBar sx={{ background: '#393E46', height:'75px'}}>
        <Toolbar>
       <a href="/">
        <Logo src={logo} />
        </a>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shopping
              </Typography>
              <Mobile />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "65%"  }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
               <a href="./ProductList" >
                 < Tab className="links" label="Procects"  />
                 </a>
                 <a href="./Register" >
                <Tab className="links" label="Register" />
                </a>
                <a href="./Login" >
                <Tab className="links" label="Login" />
                </a>
                <a href="./About" >
                <Tab className="links" label="About" />
                </a>
                if(1===2){
                <a href="./UsersList">
                <Tab className="links" label="UsersList" />
                </a>
                   }
              </Tabs>
            
         {/* <Box sx={ {marginLeft: "1" } }>
            <IconButton style={{color:'white',marginLeft:'10px'}}>
            <a href="https://www.google.com/" >
            <ShoppingCartIcon/>
                </a>
            
            </IconButton>
          
          </Box> */}
           <a href="./CartItem" >
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={"https://www.google.com/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
          
            </div>
          </Button>
          </a>
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