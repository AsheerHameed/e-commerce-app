import React from 'react'
import { Box,Input, Card, CardContent, Typography, CardMedia, Grid } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Newsletter() {
    return (
        <Box sx={{
            position: 'relative',
            width: { lg: "1230px" ,xs:"290px"},
            height: { xs: "20px", lg: "408px" },
            left: { lg: "14px", xs: '12px' },
            top: { lg: "160px", xs: '18px' },
            background: 'white',
            borderRadius: {lg:"10px",xs:'7px'},
            paddingTop: { xs: "40px",lg:'50px' },
        }}>
            <Typography sx={{
                fontSize: { lg: "45px", xs: "18px" },
                fontFamily: "DM sans",
                fontWeight: "bolder",
                paddingTop: "5px",
            }}>Join Our News Letters</Typography>
            <Box>
                <Typography textAlign='center' color='#9A9AB0'>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative <br />    approaches to corporate strategy foster
                </Typography>

                <Input type='search' id="standard-basic" variant="standard" sx={{
                    position:'relative',
                    width: {lg:"816px",xs:"200px"},
                    height:{lg:"64px",xs:"40px"},
                    left: {lg:'14px',xs:'-2px'},
                    top: {xs:"10px",lg:'41px'},
                    background: '#F4F7F8',
                    textDecoration:'none',
                    borderRadius: '8px',
                    border:"solid 1px black"
                }} fontFamily="DM sans" placeholder='Insert your mail here' className="searchBarJoinLetter" />
                <Box >
                    <ArrowCircleRightIcon sx={{
                        color: '#F86338',
                        fontSize: "55px",
                        position: 'absolute',
                        left: {xs:'195px',lg:"975px"},
                        top:  {xs:'226px',lg:"249px"},
                        
                    }} />
                </Box>
            </Box>
        </Box >

    )
}

export default Newsletter