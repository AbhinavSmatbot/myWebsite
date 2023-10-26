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
import Logo from '../../assets/images/HomePage/1.JPG'

const pages = [
  {
    id:1,
    page:'Project',
    url:"project"
  },
  {
    id:2,
    page:'Contact Us',
    url:"contact-us"
  },
  {
    id:3,
    page:'About Us',
    url:"about"
  },
  {
    id:4,
    page:'Skills',
    url:"skill"
  },
  {
    id:5,
    page:'Login',
    url:"login"
  }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Education'];

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='mono'>
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
            
            <Link to='/'>Abhinav</Link>
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
          <Link to='/'>
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
                <Avatar alt="Abhinav" src={Logo} />
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
                  <Typography textAlign="center">{setting}</Typography>
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