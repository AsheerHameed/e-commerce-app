import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import '../styles/style.css'
import React from 'react';
import one from '../images/logos/1.png';
import two from '../images/logos/2.png';
import three from '../images/logos/3.png';
import four from '../images/logos/4.png';
import five from '../images/logos/5.png';
import six from '../images/logos/6.png';
import seven from '../images/logos/7.png';

function Mainpage() {
    return (
        <Box sx={{
            position: "relative",
            height: {xs:"50vh",lg:"100vh"}
            ,background:"white"
        }}>
            <Box className="responsive">
                <Typography className="mainPageHeading" sx={{
                    position:'absolute',
                    left: {xs:'start',lg:"698px"},
                    top: {xs:'140px',lg:"220px"},     
                    fontFamily: 'DM Sans',
                    fontStyle: 'normal',
                    fontWeight: "bolder",
                    fontSize: {
                        xs: "36px", lg: "64px"
                    },
                    lineHeight: '120%',
                    letterSpacing: "0.003em",
                    textAlign: "left",

                }}>
                    Our Gallery,<br />
                    Your Dreams!
                </Typography>
                <Typography sx={{
                    position: 'absolute',

                    height: '40px',
                    left: {xs:"start" ,lg:"706px"},
                    top: {xs:"250px",lg:"405px"},
                    fontFamily: 'DM Sans',
                    fontStyle: 'normal',
                    fontWeight: '400',
                     fontSize: {
                        xs: "12px", lg: "16px"
                    },
                    lineHeight: '125%',
                    letterSpacing: '0.005em',
                    textAlign: "left",
                    color: '#515151'
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</Typography>
            </Box >
            <Box>
                <Box sx={{
                    position: 'absolute',
                    width: {xs:"20px" ,lg:"100px"},
                    height:{xs:"20px" ,lg:"100px"},
                    left: {lg:"68px",xs:'12px'},
                    top: {lg:"23.92px",xs:'18px'},
                    
                }}>
                    <img src={one} alt="vector" srcset="" />
                </Box>

                <Box sx={{
                    position: 'absolute',
                    width: {xs:"8px" ,lg:"9px"},
                    height:{xs:"8px" ,lg:"9px"},
                    left: {xs:"29px",lg:"119px"},
                    top: {xs:"300px",lg:"558px"},

                }}>
                    <img src={two} alt="vector" srcset="" />
                </Box>

                <Box sx={{
                    position: 'absolute',
                    width: '39px',
                    height: '39px',
                    left: '579px',
                    top: '59px',
                    display:{xs:"none",lg:"block"}
                    
                }}>
                    <img src={three} alt="vector" srcset="" />
                </Box>


                <Box sx={{
                    position: 'absolute',
                    width: {xs:"8px" ,lg:"100px"},
                    height:{xs:"8px" ,lg:"100px"},
                    left: {xs:"222px",lg:"564px"},
                    top: {xs:"300px",lg:"453px"},

                }}>
                    <img src={four} alt="vector4" srcset="" />
                </Box>


                <Box sx={{
                    position: 'absolute',
                    width: "100px",
                    height: "100px",
                    left: "885px",
                    top: '550px',
                    display:{xs:'none',lg:"block"}
                }}>
                    <img src={five} alt="vector" srcset="" />
                </Box>


                <Box sx={{
                    position: 'absolute',
                    width: "100px",
                    height: "100px",
                    left: "1206px",
                    top: '24px',
                    display:{xs:"none",lg:"block"}
                }}>
                    <img src={six} alt="vector" srcset="" />
                </Box>


                <Box sx={{
                    position: 'absolute',
                    width: "100px",
                    height: "100px",
                    left: "1200px",
                    top: '465px',
                    display:{xs:"none" ,lg:'block'}
                }}>
                    <img src={seven} alt="vector" srcset="" />
                </Box>
            </Box>

        </Box >
    )
}

export default Mainpage