import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchfromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [video,setvideo]=useState();
  const { id } = useParams();
console.log(video)
  useEffect(() => {
    fetchfromAPI(`channels?part="snippet&id=${id}`).then(
      (data) =>setChannelDetail(data?.items[0]))
    fetchfromAPI(`search?part=snippet&order=date&channelId=${id}&maxResults=5`).then(
      (data)=>setvideo(data?.items)
    )
    
    },[id])
    return (
      <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(90,236,14,1) 25%, rgba(0,212,255,1) 53%)',height:'300px',zIndex:'10'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop={'-93px'}/>
      </Box>
        <Box display="flex" p="2">
          <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={video}/>
                    </Box>
      </Box>
    )
   
     
};


export default ChannelDetail;
