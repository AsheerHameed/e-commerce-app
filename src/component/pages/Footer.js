import React from 'react'
import { Box, Typography } from '@mui/material'
import '../styles/style.css'
import logo from '../images/Dealerz.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box className="footer" sx={{padding:{lg:"50px 20px 35px 20px",xs:"30px 20px 35px 20px;"}}}>
        <Box
        component="img"
        sx={{
          marginRight:{lg:"920px",xs:"start"},
          borderRadius:{lg:"15px",xs:"25px"},
          height: 260,
          width: 250,
          // <img src='https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' height='260px' width='250px' style={{  />
        }}
        alt="Lotus"
        src="https://images.unsplash.com/photo-1557053965-626a58d7b7b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Box sx={{ marginLeft: "260px", marginTop: "-253px" ,display:{xs:'none',lg:'block'}}}>
        <Box style={{ display: 'flex', justifyContent: 'space-between ' }}>
          <Box>
            <img src={logo} style={{ marginTop:"-35px",marginLeft: "45px", display: "inline" }} alt='logo' />
          </Box>
          <Box>
            <YouTubeIcon style={{ fontSize: '45px', marginTop:"-35px"}} />
            <FacebookIcon style={{ fontSize: '45px',marginTop:"-35px" }} />
            <TwitterIcon style={{ fontSize: '45px', marginTop:"-35px"}} />
            <InstagramIcon style={{ fontSize: '45px', marginTop:"-35px"}} />
          </Box>
        </Box>
        <Box style={{ textAlign: "left", marginLeft: "55px" }}>
          <Typography fontFamily="DM sans" fontSize='15px' fontWeight="bolder">
            Privacy Policy
          </Typography>
          <Typography fontFamily="DM sans" fontSize='15px' fontWeight="bolder">
            Terms and Condition
          </Typography>
          <Typography fontFamily="DM sans" fontSize='15px' fontWeight="bolder" marginTop='70px'>
            &copy; AsheerHameed All Rights reserved     </Typography>
        </Box>
      </Box>
    </Box >
  )
}

export default Footer