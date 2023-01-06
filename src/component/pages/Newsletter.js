import React from 'react'
import { Box,Input, Typography } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Newsletter() {
    return (
        <Box sx={{align:"center",paddingBottom:{xs:"5px",lg:"90px"},}}>
 <Box sx={{
            position: 'relative',
            width: { lg: "1050px" ,xs:"100wh"},
            height: { xs: "350px", lg: "100wh" },
            left: { lg: "110px", xs: '1px' },
            top: { lg: "50px", xs: '35px' },
            background: 'white',
            borderRadius: {lg:"4px",xs:'2px'},
            paddingTop: { xs: "5px",lg:'50px' },
            marginBottom:{xs: "150px",lg:'50px'}
        }}>
            <Typography sx={{
                fontSize: { lg: "45px", xs: "18px" },
                fontFamily: "DM sans",
                fontWeight: "bolder",
                marginTop: {lg:"1px",xs:"40px"},
            }}>Join Our News Letters</Typography>
            <Box>
                <Typography textAlign='center' color='#9A9AB0'>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative <br />    approaches to corporate strategy foster
                </Typography>

                <Input type='search' id="standard-basic" placeholder='Insert your mail here' variant="standard" sx={{
                    position:'relative',
                    width: {lg:"816px",xs:"200px"},
                    height:{lg:"64px",xs:"40px"},
                    left: {lg:'14px',xs:'-2px'},
                    top: {xs:"10px",lg:'18px'},
                    background: '#F4F7F8',
                    textDecoration:'none',
                    borderRadius: '8px',
                    fontFamily:"DM sans",
                    border:"solid 1px black"
                }} />
                <Box >
                    <ArrowCircleRightIcon sx={{
                        color: '#F86338',
                        fontSize: {lg:"55px",xs:"45px"},
                        position: 'absolute',
                        left: {xs:'205px',lg:"880px"},
                        top:  {xs:'240px',lg:"230px"},
                        
                    }} />
                </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Newsletter