import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import {Videos} from "./"
import { fetchfromAPI } from '../utils/fetchFromAPI';
const VideoDetail = () => {
  
  const [videodetail,setvideodetail]=useState();
  const [v,setv]=useState();
  const {id}=useParams();
  useEffect(()=>{
    fetchfromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>{setvideodetail(data.items[0])})
    fetchfromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`).then((data)=>setv(data.items))
  },[id])
  if(!(videodetail?.snippet)) return "Loading..."
  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videodetail
  return (
  
    <Box minHeight="95vh">
      <Stack direction={{xs:'cloumn',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'1024px',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:'#FFF'}} py={1} px={2}>
              <Link to={`channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1',md:'h6' }} color='#FFF' >
                  {channelTitle}
                  <CheckCircle sx={{color:'grey',fontSize:'12px',ml:'5px'}}/>
                </Typography>
              </Link>
            </Stack>
            <Stack direction="row" gap="20px" alignItems="center">
            <Typography variant='body1' sx={{opacity:0.7}} >
                {parseInt(viewCount).toLocaleString()} views
                </Typography>
            
            <Typography variant='body1' sx={{opacity:0.7}} >
                {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
            </Stack>

           
          </Box>
        </Box>
     
        <Box px={2} py={{md:1 ,xs:5}} justifyContent="center" alignItems="center">
          <Videos videos={v} direction='column'/>
        </Box>
        </Stack>


    </Box>
  )
}

export default VideoDetail