import Carousel from 'react-bootstrap/Carousel';
import { Box, Typography, Grid } from '@mui/material'
function IndividualIntervalsExample() {
  return (
      <Carousel  fade variant="dark">       
        <Carousel.Item interval={1000}>
          <Box sx={{
            position: 'relative',
            height: {xs:"550px",lg:"350px"},
            width:{lg:"1000px",xs:"250px"},
            left:{lg:"120px",xs:"20px"},
            zIndex: "1",
            background: "white",
            borderRadius:'8px',
          }}>
            <Grid container>
            <Grid item xs={12} lg={4}>
            <Box
        component="img"
        sx={{
          // display:{lg:"block",xs:"none"},
          marginLeft:{lg:"5px",xs:"-10px"},
          marginTop:"30px",
          height: {lg:230,xs:170},
          width:{lg: 280 ,xs:220},
          borderRadius:"15px"
        }}
        alt="Business women"
        src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80"/>
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography sx= {{fontSize:{lg:'35px',xs:"20px"}, textAlign:"left", fontFamily:"DM sans", fontWeight:"bolder", marginTop:"12px" ,color:"#F86338"}}>Great Customer!</Typography>
                <Typography textAlign='left' color='#9A9AB0' fontSize="12px">
                  I am very happy with the services provided, it is very helpful, starting<br />
                  from the insight that the company gave from the start that I did not<br />
                  understand what it was so I got knowledge and made my website<br />
                  look better
                </Typography>
                <Typography sx = {{fontSize:{lg:'20px' ,xs:"18px"},textAlign:"left", fontFamily:"DM sans", fontWeight:"bolder", color:"#11142D"}}>John Doe</Typography>
                <Typography fontSize='12px' textAlign="left" paddingBottom ="12px" fontFamily="DM sans"  color="#11142D">
                  Your Beloved Customer
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
          <Box sx={{
            position: 'relative',
            height: {xs:"550px",lg:"350px"},
            width:{lg:"1000px",xs:"250px"},
            left:{lg:"120px",xs:"20px"},
            zIndex: "1",
            background: "white",
            borderRadius:'8px',
          }}>
            <Grid container>
            <Grid item xs={12} lg={4}>
            <Box
        component="img"
        sx={{
          // display:{lg:"block",xs:"none"},
          marginLeft:{lg:"5px",xs:"-10px"},
          marginTop:"30px",
          height: {lg:230,xs:170},
          width:{lg: 280 ,xs:220},
          borderRadius:"15px"
        }}
        alt="Business women"
src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  
/>
            </Grid>
              <Grid item xs={12} lg={8}>
                <Typography sx= {{fontSize:{lg:'35px',xs:"20px"}, textAlign:"left", fontFamily:"DM sans", fontWeight:"bolder", marginTop:"12px" ,color:"#F86338"}}>Good Seller!</Typography>
                <Typography textAlign='left' color='#9A9AB0' fontSize="12px">
                  I am very happy with the services provided, it is very helpful, starting<br />
                  from the insight that the company gave from the start that I did not<br />
                  understand what it was so I got knowledge and made my website<br />
                  look better
                </Typography>
                <Typography sx = {{fontSize:{lg:'20px' ,xs:"18px"},textAlign:"left", fontFamily:"DM sans", fontWeight:"bolder", color:"#11142D"}}>Alice Pitt</Typography>
                <Typography fontSize='12px' textAlign="left" paddingBottom ="12px" fontFamily="DM sans"  color="#11142D">
                  Your Beloved Customer
                </Typography>

              </Grid>
            </Grid>
          </Box>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
          <Box sx={{
            position: 'relative',
            height: {xs:"550px",lg:"350px"},
            width:{lg:"1000px",xs:"250px"},
            left:{lg:"120px",xs:"20px"},
            zIndex: "1",
            background: "white",
            borderRadius:'8px',
          }}>
            <Grid container>
            <Grid item xs={12} lg={4}>
                <Box
        component="img"
        sx={{
          // display:{lg:"block",xs:"none"},
          marginLeft:{lg:"5px",xs:"-10px"},
          marginTop:"30px",
          height: {lg:230,xs:170},
          width:{lg: 280 ,xs:220},
          borderRadius:"15px"
        }}
        alt="Business women"
        src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "      />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography sx= {{fontSize:{lg:'35px',xs:"20px"}, textAlign:"left", fontFamily:"DM sans", fontWeight:"bolder", marginTop:"12px" ,color:"#F86338"}}>Great Customer!</Typography>
                <Typography textAlign='left' color='#9A9AB0' fontSize="12px">
                  I am very happy with the services provided, it is very helpful, starting<br />
                  from the insight that the company gave from the start that I did not<br />
                  understand what it was so I got knowledge and made my website<br />
                  look better
                </Typography>
                <Typography sx = {{fontSize:{lg:'20px' ,xs:"18px"},textAlign:"left", fontFamily:"DM sans", fontWeight:"bolder", color:"#11142D"}}>Asheer Hameed</Typography>
                <Typography fontSize='12px' textAlign="left" paddingBottom ="12px" fontFamily="DM sans"  color="#11142D">
                  Your Beloved Buyer
                </Typography>

              </Grid>
            </Grid>
          </Box>
        </Carousel.Item>
        
      </Carousel>
  );
}

export default IndividualIntervalsExample;