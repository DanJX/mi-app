import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {Container, Card, CardContent, CardHeader, CardMedia, Typography, Box, Grid, Chip, Avatar} from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import pop1 from '../assets/nov1.jpg';
import logopop1 from '../assets/logonov1.webp';
import pop2 from '../assets/pop2.webp';
import logopop2 from '../assets/logopop2.jpg';
import pop3 from '../assets/pop3.webp';
import logopop3 from '../assets/logopop3.jpg';
import pop4 from '../assets/pop4.jpg';
import logopop4 from '../assets/logonov4.jpg';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App() {
  return (
    <Container sx={{ marginBottom: '80px' }}>
      <Typography sx={{ margin: '80px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('../assets/fondotxt.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Populares
      </Typography>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        slidesPerView={"auto"}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {/* Genshin Impact */}
        <SwiperSlide>
          <Grid container sx={{ height: '450px' }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card sx={{ height: { xs: '100%', sm: '100%', md: '450px' }, objectFit: 'cover' }}>
                <CardMedia sx={{ height: 'inherit' }}
                  component="img"
                  image={pop1}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: '#1d1d22' }}>
              <Card sx={{ background: '#1d1d22', color: 'white' }}>
                <CardHeader sx={{ color: 'white' }}
                  avatar={
                    <Avatar sx={{ height: '60px', width: '60px' }} src={logopop1} aria-label="Logopop1"></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings" sx={{ color: 'white', display: 'flex', gap: '10px' }}>
                      <ShoppingCartOutlinedIcon />
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography sx={{ color: '#a747af', fontWeight: 'bold', fontSize: '20px' }}>
                      Genshin Impact
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: '#a747af' }}>
                      Hoyoverse
                      <Typography sx={{ color: 'white', fontSize: '14px' }}>
                        1.5 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Acción" />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Móvil" />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: 'justify', padding: '0 10px' }}>
                    Genshin Impact es un videojuego de rol de acción de mundo abierto y gratuito, con una mecánica de monetización de gacha para conseguir elementos adicionales como personajes especiales y armas.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
        {/* Call of dutty */}
        <SwiperSlide>
          <Grid container sx={{ height: '450px' }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card sx={{ height: { xs: '100%', sm: '100%', md: '450px' }, objectFit: 'cover' }}>
                <CardMedia sx={{ height: 'inherit' }}
                  component="img"
                  image={pop2}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: '#1d1d22' }}>
              <Card sx={{ background: '#1d1d22', color: 'white' }}>
                <CardHeader sx={{ color: 'white' }}
                  avatar={
                    <Avatar sx={{ height: '60px', width: '60px' }} src={logopop2} aria-label="Logopop1"></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings" sx={{ color: 'white', display: 'flex', gap: '10px' }}>
                      <ShoppingCartOutlinedIcon />
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography sx={{ color: '#a747af', fontWeight: 'bold', fontSize: '20px' }}>
                      Call of dutty
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: '#a747af' }}>
                      ActiVision
                      <Typography sx={{ color: 'white', fontSize: '14px' }}>
                        12.5 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Acción" />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Móvil" />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: 'justify', padding: '0 10px' }}>
                    Adéntrate en la acción real de Call of Duty con Call of Duty: Warzone Mobile. ¡Ya disponible!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
        {/* Fornite */}
        <SwiperSlide>
          <Grid container sx={{ minHeight: '450px' }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card sx={{ height: { xs: '100%', sm: '100%', md: '450px' }, objectFit: 'cover' }}>
                <CardMedia sx={{ height: 'inherit' }}
                  component="img"
                  image={pop3}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: '#1d1d22' }}>
              <Card sx={{ background: '#1d1d22', color: 'white' }}>
                <CardHeader sx={{ color: 'white' }}
                  avatar={
                    <Avatar sx={{ height: '60px', width: '60px' }} src={logopop3} aria-label="Logopop1"></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings" sx={{ color: 'white', display: 'flex', gap: '10px' }}>
                      <ShoppingCartOutlinedIcon />
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography sx={{ color: '#a747af', fontWeight: 'bold', fontSize: '20px' }}>
                      Fornite
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: '#a747af' }}>
                      Epic Games
                      <Typography sx={{ color: 'white', fontSize: '14px' }}>
                        7.5 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Acción" />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Móvil" />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: 'justify', padding: '0 10px' }}>
                    Crea y juega gratis con amigos en Fortnite. Explora juegos, conciertos, eventos en vivo y mucho más o sé la última persona en pie en Batalla campal.                </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
        {/* Mortal Kombat */}
        <SwiperSlide>
          <Grid container sx={{ minHeight: '450px' }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card sx={{ height: { xs: '100%', sm: '100%', md: '450px' }, objectFit: 'cover' }}>
                <CardMedia sx={{ height: 'inherit' }}
                  component="img"
                  image={pop4}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ background: '#1d1d22' }}>
              <Card sx={{ background: '#1d1d22', color: 'white' }}>
                <CardHeader sx={{ color: 'white' }}
                  avatar={
                    <Avatar sx={{ height: '60px', width: '60px' }} src={logopop4} aria-label="Logopop1"></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings" sx={{ color: 'white', display: 'flex', gap: '10px' }}>
                      <ShoppingCartOutlinedIcon />
                      <FavoriteBorderIcon />
                    </IconButton>
                  }
                  title={
                    <Typography sx={{ color: '#a747af', fontWeight: 'bold', fontSize: '20px' }}>
                      Mortal Kombat 11
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ color: '#a747af' }}>
                      Warner Bros
                      <Typography sx={{ color: 'white', fontSize: '14px' }}>
                        17.5 K de personas le gusta
                      </Typography>
                      <br />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Acción" />
                      <Chip sx={{ background: '#383838', color: 'white', fontWeight: 'bold' }} label="Móvil" />
                    </Box>
                  }
                />
                <CardContent>
                  <Typography sx={{ textAlign: 'justify', padding: '0 10px' }}>
                    Mortal Kombat está de vuelta mejor que nunca con la siguiente evolución de la emblemática franquicia. Con las nuevas variaciones de personaje tendrás un control inimaginable.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
