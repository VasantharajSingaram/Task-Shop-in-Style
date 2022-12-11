import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useState } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardMedia } from '@mui/material';
import {Jumbotron} from 'react-bootstrap';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Fab from '@mui/material/Fab';
import Skeleton from '@mui/material/Skeleton';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';
import MailIcon from '@mui/icons-material/Mail';
import { createContext, useContext } from "react";






function App() {

const [count, setCount] =  useState(0);
  return (
    <div>
  
 <ResponsiveAppBar />
 <Jumbo />
 <Datalists />



    </div>
  );
}


const pages = ['New Arrivals', 'Look Book'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




function ResponsiveAppBar() {
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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  
//#eceff1
  return (
    <div>
     
    <AppBar position="fixed" elevation={0} style={{backgroundColor:"white", color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
    
          <Typography className='abo'
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            
              fontFamily: 'teko',
              fontWeight: 600,
              letterSpacing: "0.2rem",
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ABO
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
   
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 9,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'teko',
              fontWeight: 600,
              letterSpacing: "0.2",
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ABO
   
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
               
                sx={{ flexGrow: 0, my: 2, color: 'black', display: 'block' }}
                style={{fontFamily:"Assistant", fontWeight: 500, fontSize: 16, wordSpacing:"-0.1rem"}}
                
              >
                {page}
              </Button>
            ))}
          
          </Box>
          

       
          
          <Box sx={{ flexGrow: 0, display:"flex" }}>
          <FavoriteBorderIcon sx={{ mt: '9px', mr: '20px' }} style={{color:"error"}}/>
          <ShoppingCartIcon sx={{ mt: '9px' }} style={{color:"error"}}/>
          <Badge style={{top: 10}} color="primary" badgeContent={0} />
          <Search sx={{mr:"-50px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
            <Tooltip title="Open settings">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="Profile.jpg" />
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
          
        </Toolbar>
      </Container>
      
    </AppBar>
    {/* <Jumbo /> */}
  
    </div>
  );
}





function Jumbo(){
  return(
<div>
<div>
<Container maxWidth="xl" >
<Grid className='jumbo' spacing={0} columns={16} >
 <Grid item xs={4} >
 <div className='her'>
  <div>H</div>
  <div>E</div>
  <div>R</div>
  </div>
   <img className="img1" src='https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
  
 </Grid>
 <Grid item xs={4}>
 <div className='him'>
  <div>H</div>
  <div>I</div>
  <div>M</div>
  </div>
 <img className="img2" src='https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
 </Grid>
 <Grid item xs={4}>
 <div className='shoes'>
  <div>S</div>
  <div>H</div>
  <div>O</div>
  <div>E</div>
  <div>S</div>
  </div>
 <img className="img3" src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
 </Grid>
 <Grid item xs={4}>
 <div className='timer'>
  <div>T</div>
  <div>I</div>
  <div>M</div>
  <div>E</div>
  <div>R</div>
  </div>
 <img className="img4" src='https://images.pexels.com/photos/8968349/pexels-photo-8968349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
 </Grid>
</Grid>
           
   </Container>
   {/* <CardsInfo /> */}
 </div>
</div>
  )
}


function Datalists(){
  const data = [{
    title: "HIGHLANDER",
    description: "Slim Fit Casual Shirt",
    rating: "4.1",
    price: "$40.00 - $80.00",
    image: "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    
  },
  {
    title: "The Indian",
    description: "Slim Fit Casual Shirt",
    rating: "5",
    price: <s>$20.00</s>,
    price2: '$18.00',
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    sale: "yes"
  },

  {
    title: "Roadster",
    description: "Slim Fit Casual Shirt",
    rating: 0,
    price: <s>$50.00</s>,
    price2: '$25.00',
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    sale: "yes"
  },

  {
    title: "Dennis Lingo",
    description: "Slim Fit Casual Shirt - Half Sleeves",
    rating: 5,
    price: "$40.00",
  
    image: "https://images.unsplash.com/photo-1586793810436-0851834fe086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
   
  },
  {
    title: "Dennis Lingo",
    description: "Slim Fit Casual Shirt - Half Sleeves",
    rating: 0,
    price: <s>$50.00</s>,
    price2: '$25.00',
  
    image: "https://images.unsplash.com/photo-1634136922909-28674948b516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
    sale: "yes"
  },
  {
    title: "WROGN",
    description: "Slim Fit Casual Shirt",
    rating: "0",
    price: "$120.00 - $280.00",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    
  },
  {
    title: "HERE&NOW",
    description: "Slim Fit Casual Shirt",
    rating: "5",
    price: <s>$20.00</s>,
    price2: '$18.00',
    image: "https://images.unsplash.com/photo-1622462716291-3dba57c9e7f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    sale: "yes"
  },
  {
    title: "ETHNIC",
    description: "Girs Ethnic Wear",
    rating: 5,
    price: "$40.00",
  
    image: "https://images.pexels.com/photos/13192049/pexels-photo-13192049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   
  },
  ]
  return(
    <div className='for-cards'>
    {data.map((cdt)=>(
     <CardsInfo cards={cdt}/>
    ))}
    </div>
    );
  
}


function CardsInfo({cards}){
  const [clicked, setClicked] = useState(false);

  const [count, setCount] = useState(0);

  // const [count, setCount] = useContext(countCtx);



  return(
    
    <div>
      
 
      <Card className="card-container" sx={{ maxWidth: 345 }}>
      <div className='rating' style={{ position: "relative" }}>
        <div>
   {cards.sale == "yes" ?  <h5 className='sale' style={{position: "absolute", top: 25}}>S A L E</h5> : null}
   
    
    </div>
    <div>
   
      <IconButton 
      onClick={()=>setClicked(!clicked)}

      aria-label="delete" style={{position: "absolute",top: 8,left: "86%",transform: "translateX(-50%)",}}>
      {clicked ? <Fab size="small"><FavoriteIcon sx={{color: '#ff1744'}}/></Fab> : <Fab size="small"><FavoriteBorderIcon /></Fab>}
      </IconButton>
      </div>
      <CardMedia component="img" image={cards.image} alt="image" height="400" className='image-data'  />
      <div style={{position: "absolute",top: 370,left: "20%",transform: "translateX(-50%)",}}>
      {cards.rating >=1 ? <Rating  name="size-small" defaultValue={cards.rating} size="small" readOnly/> : null}
      </div>
      <AddShoppingCartIcon  style={{position: "absolute",top: 370,left: "88%",transform: "translateX(-50%)", color: "white", backgroundColor: "black", }}/>
      <Badge style={{position: "absolute",top: 370,left: "93%",transform: "translateX(-50%)",}} color="error" badgeContent={count} />
     
     
      
      </div>
 
 
       
      <CardContent>
        <div className='selection'>
         <div>

      <Typography variant="h6" fontFamily="Assistant" fontWeight={700}  component="div">
          {cards.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {cards.description}
        </Typography>
        <Typography gutterBottom variant="body1" color="text.primary" fontFamily="Assistant" fontWeight={700}>
          {cards.price} {cards.price2}
        </Typography></div>
        <div>

        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
         
          <option value={10}>Size</option>
          <option value={20}>m</option>
          <option value={30}>lg</option>
          <option value={40}>xl</option>
          <option value={50}>xxl</option>
          <option value={60}>xxl</option>
          
        </NativeSelect></div>
        
        </div>
       
       
     
   

      
      </CardContent>
      
      <CardActions >

      <Button  gutterBottom  className='btn' onClick={()=>setCount(count + 1)} size="small" variant='outlined' color='success'>Add to cart</Button>
        {count >= 1 ? <Button  gutterBottom onClick={()=>setCount(count - 1)} size="small" variant='outlined' color='error'>Remove</Button> : null}
        
      
      </CardActions>
     
      </Card>
      
    </div>
   
  )
}



export default App;
