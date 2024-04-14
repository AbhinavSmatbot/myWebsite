import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

import mainLogo from '../../assets/images/HomePage/main_logo.JPG';
// import Logo from '../../assets/images/HomePage/1.JPG'

const pages = [
  {
    id:1,
    page:'Project',
    url:"project"
  },
  {
    id:2,
    page:'Skills',
    url:"skill"
  },
  {
    id:3,
    page:'Experience',
    url:"experience"
  },
  {
    id:4,
    page:'Education',
    url:'education',
  },
  {
    id:5,
    page:'Contact Us',
    url:"contact-us"
  },
  
];
const settings = [
  {
    id:1,
    page:'Profile',
    url:"Profile",
  },
  {
    id:2,
    page:'Gallery',
    url:'images',
  },
  {
    id:3,
    page:'Login',
    url:"login"
  },
  {
    id:4,
    page:'Logout',
    url:'Logout',
  }];

function Header() {
  
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
  // const navigate = useNavigate();
  // const logout = () =>{
  //   if(localStorage.getItem('isLoggin')){
  //     navigate('logout');
  //   }
  // }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" className='mono' style={{fontFamily:'Montserrat'}}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
         <Link sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} to='/' style={{textDecoration:"none"}}><img width={"45px"} style={{borderRadius:"50%"}} src={mainLogo} alt="Abhinav" /></Link> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'10px'
            }}
          >
            
            <Link to='/' style={{color:"white",textDecoration:"none"}}>Abhinav</Link>
            {/* <img src={mainLogo} alt="Abhinav" /> */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                 <Link to={page.url} style={{textDecoration:"none"}}><Typography textAlign="center">{page.page}</Typography></Link> 
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Link sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} to='/'><img sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} width={"40px"} style={{borderRadius:"50%"}} src={mainLogo} alt="Abhinav" /></Link>  */}
          <Link to='/' style={{color:'white', textDecoration:'none'}}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Abhinav
          </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.id}  to={page.url} style={{textDecoration:"none"}}>
                <Button style={{textTransform:"capitalize"}}
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.page}
              </Button>
              </Link>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Abhinav" src='' />
                {/* A */}
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
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                 <Link to={setting.url} style={{textDecoration:"none"}}><Typography textAlign="center">{setting.page}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Outlet /> */}
        </Toolbar>
        

      </Container>
    </AppBar>
  );
}
export default Header;