import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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

const Header =()=> {
  const navigate = useNavigate();
  const [value, setValue] = React.useState()
  
  
  const getSearchData =() =>{
    console.log("value",value)
navigate(`/searchBar/${value}`)
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ 
    marginLeft: 'auto',
    backgroundColor:'#051A49',
    width:'80%',
    marginRight: 'auto'}} >
        <Toolbar >
          <Typography onClick={()=>navigate('./home')}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },marginLeft:'20%' }}
          >
          The CocktailDB
          </Typography>
          <Button variant="contained" sx={{color:'white'}} onClick={()=>{                                 //adding the onChange event
                getSearchData()
              }} >search</Button>
          <Search>
            
            <SearchIconWrapper>
            
              <IconButton >
              <SearchIcon />
                </IconButton> 
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search in here"
              inputProps={{ 'aria-label': 'search' }}
              onChange={event=>{                                 //adding the onChange event
                setValue(event.target.value)
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;