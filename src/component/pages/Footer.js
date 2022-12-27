import React from 'react'
import { Box, Typography } from '@mui/material'
import '../styles/style.css'
import logo from '../images/Dealerz.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { display } from '@mui/system';

function Footer() {
  return (
    <Box className="footer" sx={{padding:{lg:"50px 20px 35px 20px",xs:"350px 20px 35px 20px;"}}}>
        <img src='https://source.unsplash.com/random' height='260px' width='250px' style={{ marginRight:'1120px' }} />
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