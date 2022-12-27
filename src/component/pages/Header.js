import Box from '@mui/material/Box'
import React from 'react'
import logo from '../images/Dealerz.png'
import Typography from '@mui/material/Typography';
import '../styles/style.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CallIcon from '@mui/icons-material/Call';
function Header() {
    return (
        <Box className="Header" style={{ display: "flex" ,justifyContent:"space-between" }}>
            <Box>
                <img src={logo} sx={{ height:{xs:"20px",lg:"auto"},width:{xs:"20px",lg:"auto"},marginLeft: "20px" }} alt='logo' />
            </Box>
            <Box style={{display:"flex"}}>
                <Box style={{display:"flex"}}>
                    <CallIcon sx={{fontSize:{lg:"45px",xs:"30px"}}}/>
                    <Typography sx={{fontFamily:"DM Sans" ,fontSize:{xs:"8px",lg:"16px"},marginLeft:{xs:"-10px",lg:"-4px"},fontWeight:"bolder"}}>
                        Call center
                    </Typography>
                </Box>
                <Box style={{display:"flex"}}>
                    <LocalShippingIcon sx={{fontSize:{lg:"45px",xs:"30px"},marginLeft:{xs:'-15px',lg:'10px'}}}/>
                    <Typography sx={{fontFamily:"DM Sans" ,fontSize:{xs:"8px",lg:"16px"},marginLeft:{xs:"-10px",lg:"-4px"},fontWeight:"bolder"}}>
                        Shipping 
                    </Typography>
                </Box>

            </Box>


        </Box>
    )
}

export default Header