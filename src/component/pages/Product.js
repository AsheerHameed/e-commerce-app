import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/style.css";
import Carousel from "./Corousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Data from "../product";
import Newsletter from "./Newsletter";

function Product() {
  const [items, setItems] = useState(Data);
  const filterItem = (category) => {
    const updatedItems = Data.filter((currentElement) => {
      return currentElement.category === category;
    });
    setItems(updatedItems);
  };

  const [isActiveAllProduct, setActiveAllProduct] = useState(true);
  const ToggleClassAllProduct = () => {
    setActiveAllProduct(true);
    setActiveCoats(false);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(false);
    setActiveDress(false);
  };

  const [isActiveCoats, setActiveCoats] = useState(false);
  const ToggleClassCoats = () => {
    setActiveAllProduct(false);
    setActiveCoats(true);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(false);
    setActiveDress(false);
  };

  const [isActiveDress, setActiveDress] = useState(false);
  const ToggleClassDress = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveDress(true);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(false);
  };

  const [isActiveSkirt, setActiveSkirt] = useState(false);
  const ToggleClassSkirt = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveSkirt(true);
    setActiveShort(false);
    setActiveTshirt(false);
    setActiveDress(false);
  };
  const [isActiveShort, setActiveShort] = useState(false);
  const ToggleClassShort = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveSkirt(false);
    setActiveShort(true);
    setActiveDress(false);
    setActiveTshirt(false);
  };
  const [isActiveTshirt, setActiveTshirt] = useState(false);
  const ToggleClassTshirt = () => {
    setActiveAllProduct(false);
    setActiveCoats(false);
    setActiveSkirt(false);
    setActiveShort(false);
    setActiveTshirt(true);
    setActiveDress(false);
  };
  return (
    <Box
      sx={{
        padding: { xs: "-480px 10px 100px 10px" ,lg:"-8px "},
        background: "#E5E5E5",
        borderRadius:"8px"
        
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "DM sans",
            fontWeight: "bolder",
            fontSize: { lg: "45px", xs: "32px" },
          }}
        >
          Our Latest
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: { lg: "120px", xs: "12px" },
          marginRight: { lg: "100px", xs: "2px" },
        }}
      >
        <Typography
        className={isActiveAllProduct ? "active" : null}
          sx={{
            fontFamily: "DM sans",
            fontSize: { xs: "10px", lg: "15px" },
            fontWeight: "bolder",
            color: "#9A9AB0",
            cursor:"pointer"
          }}
          onClick={() => {
            setItems(Data);
            ToggleClassAllProduct();
          }}
        >
          All Products
        </Typography>

        <Typography
          className={isActiveCoats ? "active" : null}
          sx={{
            fontFamily: "DM sans",
            fontSize: { xs: "10px", lg: "15px" },
            fontWeight: "bolder",
            color: "#9A9AB0",
            cursor:"pointer"
          }}
          onClick={() => {
            filterItem("Jackets");
            ToggleClassCoats();
          }}
        >
          Coats & Jackets
        </Typography>

        <Typography
          className={isActiveDress ? "active" : null}
          sx={{
            fontFamily: "DM sans",
            fontSize: { xs: "10px", lg: "15px" },
            fontWeight: "bolder",
            color: "#9A9AB0",
            cursor:"pointer"
          }}
          onClick={() => {
            filterItem("Dresses");
            ToggleClassDress();
          }}
        >
          Dresses
        </Typography>

        <Typography
           className={isActiveShort ? "active" : null}
          sx={{
            fontFamily: "DM sans",
            fontSize: { xs: "10px", lg: "15px" },
            fontWeight: "bolder",
            color: "#9A9AB0",
            cursor:"pointer"
          }}
          onClick={() => {
            filterItem("Shorts" );
            ToggleClassShort();
          }}
        >
          Short
        </Typography>

        <Typography
        className={isActiveSkirt ? "active" : null}
          sx={{
            fontFamily: "DM sans",
            fontSize: { xs: "10px", lg: "15px" },
            fontWeight: "bolder",
            color: "#9A9AB0",
            cursor:"pointer"
          }}
          onClick={() => {
            filterItem("Skirts");
            ToggleClassSkirt();
          }}
        >
          Skirt
        </Typography>

        <Typography
          className={isActiveTshirt ? "active" : null}
          sx={{
            fontFamily: "DM sans",
            fontSize: { xs: "10px", lg: "15px" },
            fontWeight: "bolder",
            color: "#9A9AB0",
            cursor:"pointer"
          }}
          onClick={() => {
            filterItem("T-shirt");
            ToggleClassTshirt();
          }}
        >
          T-shirt
        </Typography>
      </Box>
      <Grid container spacing={2} ml={2}>
        {items.map((element) => {
          const { image, category, name } = element;
          return (
            <Grid item xs={12} lg={4}>
              <Box
                width="240px"
                sx={{
                  marginLeft: { xs: "start" },
                }}
              >
                <Card
                  sx={{
                    height: { xs: "360px", lg: "" },
                    width: { xs: "210px", lg: "360px" },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: { lg: "340px", xs: "270px" } }}
                    image={image}
                  />
                  <CardContent>
                    <Box>
                      <Typography
                        variant="span"
                        sx={{
                          fontFamily: "DM sans",
                          fontSize: { lg: "12px", xs: "8px" },
                          display: "flex",
                          marginTop: "-25px",
                          color: "#9A9AB0",
                          textAlign: "left",
                        }}
                      >
                        Category : {category}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#11142D",
                          fontFamily: "DM sans",
                          fontSize: { lg: "24px", xs: "16px" },
                          fontWeight: "bolder",
                          marginTop: "-15px",
                          textAlign: "left",
                        }}
                      >
                        {name}
                      </Typography>
                    </Box>
                  </CardContent>
                  <ArrowCircleRightIcon
                    sx={{
                      display: { lg: "flex", xs: "none" },
                      color: "#F86338",
                      fontSize: "50px",
                      marginLeft: "14px",
                    }}
                  />
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <button role="button" className="findOut">
        Find out more
      </button>
      <Carousel />
      <Newsletter />
    </Box>
  );
}

export default Product;
