import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import '../styles/style.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Navbar() {
    return (
        <Box style={{ background: "#E5E5E5", display: "flex", justifyContent: "space-between" }}>
            <Box style={{ display: "flex" }}>
                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography style={{ fontFamily: "DM Sans", fontWeight: "bolder" }}>
                        Shop
                    </Typography>
                    <Typography style={{ fontFamily: "DM Sans", fontWeight: "bolder" }}>
                        Promo
                    </Typography>
                    <Typography style={{ fontFamily: "DM Sans", fontWeight: "bolder" }}>
                        About
                    </Typography>
                    <Typography style={{ fontFamily: "DM Sans", fontWeight: "bolder" }}>
                        Blog
                    </Typography>
                </Box>
                <Box sx={{ display: {lg:"flex",xs:'none' }}}>
                    <input type="search" placeholder='Search what you need' className='search'/> 
                    <SearchIcon sx={{ fontSize: "40px", display: {lg:"flex",xs:'none' }, marginLeft: "680px", zIndex: '100' }} />
                </Box>
                <Box sx={{
                    display: "flex", justifyContent: "space-between",display: {lg:"flex",xs:'none' }, marginLeft: "72px"
                }}>
                    <FavoriteBorderIcon style={{ fontSize: "40px" }} />
                    <ShoppingCartIcon style={{ fontSize: "40px" }} />
                    <PersonOutlinedIcon style={{ fontSize: "40px" }} />
                    <NotificationsNoneOutlinedIcon style={{ fontSize: "40px" }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar