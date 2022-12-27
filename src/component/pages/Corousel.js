import Carousel from 'react-bootstrap/Carousel';
import { Box, Typography, Grid } from '@mui/material'
function IndividualIntervalsExample() {
  return (

    <Box style={{ background: "white",borderRadius:'8px', padding:"10px" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Box style={{
            position: 'relative',
            height: "450px",
            zIndex: "1",
            background: "#E2E2EA",
            borderRadius:'8px',
          }}>
            <Grid container>
              <Grid item xs={12} lg={4}>
                <img src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' height='350px' width='250px' style={{ marginTop: "22px",borderRadius:'15px' }} />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography fontSize='45px' textAlign="left" fontFamily="DM sans" fontWeight="bolder" marginTop="12px" color="#F86338">Good Seller!</Typography>
                <Typography textAlign='left' color='#9A9AB0' >
                  I am very happy with the services provided, it is very helpful, starting<br />
                  from the insight that the company gave from the start that I did not<br />
                  understand what it was so I got knowledge and made my website<br />
                  look better
                </Typography>
                <Typography fontSize='30px' textAlign="left" fontFamily="DM sans" fontWeight="bolder" color="#F86338">Anna Saraspova</Typography>
                <Typography fontSize='15px' textAlign="left" fontFamily="DM sans">
                  Your Beloved Buyer
                </Typography>

              </Grid>
            </Grid>
          </Box>

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Box style={{
            position: 'relative',
            height: "450px",
            background: "#E2E2EA",
            zIndex: "1",
            borderRadius:"8px"
          }}>
            <Grid container>

              <Grid item xs={12} lg={4}>
                <img src='https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 ' height='350px' width='250px' style={{ marginTop: "22px" ,borderRadius:'15px'}} />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography fontSize='45px' textAlign="left" fontFamily="DM sans" fontWeight="bolder" marginTop="12px" color="#F86338">Good Seller!</Typography>
                <Typography textAlign='left' color='#9A9AB0' >
                  I am very happy with the services provided, it is very helpful, starting<br />
                  from the insight that the company gave from the start that I did not<br />
                  understand what it was so I got knowledge and made my website<br />
                  look better
                </Typography>
                <Typography fontSize='30px' textAlign="left" fontFamily="DM sans" fontWeight="bolder" color="#F86338">Anna Saraspova</Typography>
                <Typography fontSize='15px' textAlign="left" fontFamily="DM sans">
                  Your Beloved Buyer
                </Typography>

              </Grid>
            </Grid>
          </Box>

        </Carousel.Item>
        <Carousel.Item>
          <Box style={{
            position: 'relative',
            background: "#E2E2EA",
            height: "450px",
            zIndex: "1",
            borderRadius:"8px"
          }}>
            <Grid container>

              <Grid item xs={12} lg={4}>
                <img src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' height='350px' width='250px' style={{ marginTop: "22px" ,borderRadius:'15px'}} />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography fontSize='45px' textAlign="left" fontFamily="DM sans" fontWeight="bolder" marginTop="12px" color="#F86338">Good Seller!</Typography>
                <Typography textAlign='left' color='#9A9AB0' >
                  I am very happy with the services provided, it is very helpful, starting<br />
                  from the insight that the company gave from the start that I did not<br />
                  understand what it was so I got knowledge and made my website<br />
                  look better
                </Typography>
                <Typography fontSize='30px' textAlign="left" fontFamily="DM sans" fontWeight="bolder" color="#F86338">Anna Saraspova</Typography>
                <Typography fontSize='15px' textAlign="left" fontFamily="DM sans">
                  Your Beloved Buyer
                </Typography>

              </Grid>
            </Grid>
          </Box>

        </Carousel.Item>
      </Carousel>


    </Box>
  );
}

export default IndividualIntervalsExample;