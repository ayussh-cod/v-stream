import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar,Videos} from "./";
import { fetchfromAPI } from "../utils/fetchFromAPI";
window.localStorage.setItem('a','0');
const Feed = () => {
  const [selectedcategory,setselecetedcategory]=useState('New')
  const [videos,setvideos]=useState()

useEffect(()=>{
  fetchfromAPI(`search?part=snippet&q=${selectedcategory}`)
  .then((data)=>setvideos(data.items))
  
  
},[selectedcategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
        selectedcategory={selectedcategory}
        setselecetedcategory={setselecetedcategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4"
        fontWeight="bold" mb={2} sx={{color:'white'}}>
         {selectedcategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
