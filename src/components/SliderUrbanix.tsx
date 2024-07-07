import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Card, CardContent, CardMedia, Typography, Avatar, Grid, IconButton } from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/nov6.jpg";
import img2 from "../assets/pop2.webp";
import img3 from "../assets/pop3.webp";
import img4 from "../assets/pop4.jpg";

const dataSlider = [
    {
        img: img1,
        title: "What's new?",
        description: "Commerce is a global online marketplace, where people come together to make, sell, buy, and collect unique items.",
    },
    {
        img: img2,
        title: "Titulo 2",
        description: "Descripcion del slider 2.",
    },
    {
        img: img3,
        title: "Titulo 3",
        description: "Descripcion del slider 3.",
    },
    {
        img: img4,
        title: "Titulo 4",
        description: "Descripcion del slider 4.",
    },
    {
        img: img3,
        title: "Titulo 5",
        description: "Descripcion del slider 5",
    }
];



export default function SliderUrbanix() {
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
        }
    }, []);

    const settingsMain = {
        asNavFor: nav2,
        ref: sliderRef1,
        arrows: false,
    };

    const settingsThumbs = {
        asNavFor: nav1,
        ref: sliderRef2,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        vertical: true,
    };

    return (
        <Container>
            <Box sx={{ marginTop: "100px", marginBottom: "200px" }}>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={3} lg={3}>
                                {/* Thumbs */}
                                <Slider {...settingsThumbs}>
                                    {dataSlider.map((data2, index) => (
                                        <Card key={index} variant="outlined" sx={{ height: "150px", backgroundColor: "#F5F6F8" }}>
                                            <CardContent
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Box>
                                                    <Typography sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
                                                        {data2.title}
                                                    </Typography>
                                                    <Typography>
                                                        {data2.description}
                                                    </Typography>
                                                </Box>
                                                <Avatar alt={data2.title} src={data2.img} sx={{ width: 56, height: 56 }} />
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Slider>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={9}>
                                {/* Main Slider */}
                                <Slider {...settingsMain}>
                                    {dataSlider.map((data, index) => (
                                        <Card key={index} sx={{ width: "100%", height: "500px", position: "relative" }}>
                                            <CardMedia
                                                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                image={data.img}
                                                title={data.title}
                                            />
                                            <Box sx={{ position: "absolute", top: "35%", left: "6%" }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: "bold",
                                                        color: "white",
                                                        margin: "50px 0",
                                                        fontSize: "25px",
                                                        fontFamily: "Poppins, sans-serif",
                                                    }}
                                                >
                                                    {data.title}
                                                </Typography>
                                            </Box>
                                        </Card>
                                    ))}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Box sx={{ background: 'white', padding: '20px' }}>
                            FORMULARIO
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
