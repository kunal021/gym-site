import {Box, Stack, Typography} from "@mui/material";

const ExerciseVideos = ({exerciseVideo, name}) =>{

    if(!exerciseVideo.length) return 'Loading...';

    return(
        <Box
            sx={{marginTop:{lg:'200px', xs:'20px'}}}
            p="20px"
        >
            <Typography
                variant="h4"
                mb="33px"
            >
                Watch
                <span style={{color: '#FF2625', textTransform: 'capitalize'}}>
                    {name}
                </span>
                exercise videos
            </Typography>
            <Stack
                justifyContenr="flex-start"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection:{lg: 'row'},
                    gap:{lg:'110px', xs:'0'}
                }}
            >
                {exerciseVideo?.slice(0, 6).map((item, index) =>(
                    <a
                    key={index}
                    className="exercise-video"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank"
                    rel="noopener"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography
                                variant="h5"
                                color="#000"
                            >
                                {item.video.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="#000"
                            >
                               <p>Channel: {item.video.channelName}</p>
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;