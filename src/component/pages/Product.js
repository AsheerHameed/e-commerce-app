import { Box, Card, CardContent, Typography, CardMedia, Grid } from '@mui/material'
import React, { useState } from 'react'
import '../styles/style.css';
import Carousel from './Corousel';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Data from '../product'
import Newsletter from './Newsletter';
import { NavLink } from 'react-bootstrap'

function Product() {
    const [items, setItems] = useState(Data)
    const filterItem = (category) => {
        const updatedItems = Data.filter((currentElement) => {
            return currentElement.category === category;
        })
        setItems(updatedItems);
    }
    return (
        <Box sx={{ padding:{ xs:"-480px 10px 100px 10px",lg:"75px 55px 255px 55px"}, background: '#E5E5E5' }}>
            <Box>
                <Typography sx={{
                    fontFamily: "DM sans", fontWeight: "bolder",
                    fontSize:{ lg:'45px',xs:"32px" }
                }}>
                    Our Latest
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" ,marginLeft:{lg:"120px",xs:"12px"},marginRight:{lg:"100px",xs:"2px"}}}>
                <Typography sx={{ fontFamily: "DM sans", fontSize: {xs:"10px",lg:"15px"}, fontWeight: "bolder", className: "productOption", color: "#F86338" }} onClick={() => setItems(Data)}>
                    All Products
                </Typography>

                <Typography sx={{ fontFamily: "DM sans", fontSize: {xs:"10px",lg:"15px"}, fontWeight: "bolder", className: "productOption", color: "black" }} onClick={() => filterItem('Jackets')}>
                    Coats & Jackets
                </Typography>

                <Typography sx={{ fontFamily: "DM sans", fontSize: {xs:"10px",lg:"15px"},fontWeight: "bolder", className: "productOption", color: "black" }} onClick={() => filterItem('Dresses')}>
                    Dresses
                </Typography>

                <Typography sx={{ fontFamily: "DM sans", fontSize: {xs:"10px",lg:"15px"}, fontWeight: "bolder", className: "productOption", color: "black" }} onClick={() => filterItem('Shorts')}>
                    Short
                </Typography>

                <Typography sx={{ fontFamily: "DM sans",fontSize: {xs:"10px",lg:"15px"}, fontWeight: "bolder", className: "productOption", color: "black" }} onClick={() => filterItem('Skirts')}>
                    Skirt
                </Typography>

                <Typography sx={{ fontFamily: "DM sans",fontSize: {xs:"10px",lg:"15px"}, fontWeight: "bolder", className: "productOption", color: "black" }} onClick={() => filterItem('T-shirt')}>
                    T-shirt
                </Typography>
            </Box>
            <Grid container spacing={2} ml={2}>


                {
                    items.map((element) => {
                        const { image, category, name } = element;
                        return (
                            <Grid item xs={12} lg={4}>
                                <Box width="360px" sx={{
                                        marginLeft:{xs:"start"}
                                    }}>
                                    <Card sx={{height:{xs:'360px',lg:""},width:{xs:"210px" ,lg:"360px"}}} >
                                        <CardMedia 
                                            component='img'
                                            sx={{height:{lg:'340px',xs:'270px'}}}
                                            image={image}
                                        />
                                        <CardContent>
                                            <Box>
                                                <Typography variant='span' sx={{fontFamily:"DM sans", fontSize:{lg:"12px",xs:"8px"},display:'flex', marginTop:"-25px",color:"#9A9AB0" ,textAlign:"left"}}>
                                                    Category : {category}
                                                </Typography>
                                                <Typography sx={{color:'#11142D' ,fontFamily:'DM sans' ,fontSize:{lg:"24px",xs:"16px"},fontWeight:'bolder',marginTop:"-15px", textAlign:'left'}}>
                                                    {name}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <ArrowCircleRightIcon sx={{ display: {lg:"flex",xs:"none"}, color: "#F86338", fontSize: "50px", marginLeft: "14px" }} />
                                    </Card>
                                </Box>
                            </Grid>
                        )
                    })
                }



            </Grid>

            <button role="button" className="findOut">Find out more</button>
            <Carousel />
            <Newsletter />
        </Box >





    )
}

export default Product







