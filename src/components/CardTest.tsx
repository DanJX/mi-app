import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import pop1 from '../assets/nov1.jpg';
import logopop1 from '../assets/logonov1.webp';
import Chip from '@mui/material/Chip';

export default function ImgMediaCard() {
    return (
        <Box>
            <Grid container>
                <Grid item xs={8}>
                    <Card>
                        <CardMedia
                            sx={{ height: '450px', objectFit: 'cover' }}
                            component="img"
                            image={pop1}
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} sx={{ background: '#1d1d22' }}>
                    <Card sx={{ background: '#1d1d22', color: 'white' }}>
                        <CardHeader sx={{ color: 'white' }}
                            avatar={
                                <Avatar sx={{ height: '60px', width: '60px' }} src={logopop1} aria-label="Logopop1"></Avatar>
                            }
                            action={
                                <IconButton aria-label="settings" sx={{ color:'white', display:'flex', gap:'10px'}}>
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
                            <Typography sx={{ textAlign:'justify', padding:'0 10px'}}>
                                Genshin Impact es un videojuego de rol de acción de mundo abierto y gratuito, con una mecánica de monetización de gacha para conseguir elementos adicionales como personajes especiales y armas.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
