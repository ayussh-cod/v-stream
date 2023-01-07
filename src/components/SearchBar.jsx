import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {SVGAnimatedPreserveAspectRatio,IconButtin, paperClasses} from '@mui/material';
import {Search} from '@mui/icons-material'
import {Paper,IconButton} from '@mui/material';

const Searchbar = () => {
  
const [searchterm,setsearchterm]=useState('');
const navigate=useNavigate();
const handles=(e)=>{
  e.preventDefault();
  
  if(searchterm)
  {
    navigate(`search/${searchterm}`)
    setsearchterm('');
  }
}
  return (
    <Paper
    component="form"
    onSubmit={handles}
    sx={{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      boxShadow:'none',
      mr:{sm:5}
    }}
  >
    <input
    className='search-bar'
    placeholder="Search..."
    value={searchterm}
    onChange={(e)=>{setsearchterm(e.target.value)}}
    />
    <IconButton  
    type="submit"
    sx={{
      p:'10px',
      color:'red'
    }}>
    <Search/>
    </IconButton>
  </Paper>
  )
}

  

export default Searchbar