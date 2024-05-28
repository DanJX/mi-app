import * as React from 'react';
import {Container, Avatar, Stack, Box, Typography } from '@mui/material';

import iconAccion from '../assets/accion.png';
import iconAvent from '../assets/aventura.png';
import iconFps from '../assets/fps.png';
import iconRpg from '../assets/rpg.png';
import iconIndie from '../assets/indie.png';
import iconSim from '../assets/simulacion.png';
import iconEstra from '../assets/estrategia.png';

export default function IconAvatars() {
    return (
        <Container sx={{ marginBottom: '80px' }}>
            <Typography sx={{ margin: '20px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('../assets/fondotxt.jpg')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Categorías
            </Typography>
            <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Accion */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconAccion} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> Acción</Typography>
                    </Box>
                </Avatar>
                {/* Aventura */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconAvent} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> Aventura</Typography>
                    </Box>
                </Avatar>
                {/* FPS */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconFps} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> FPS/TPS</Typography>
                    </Box>
                </Avatar>
                {/* RPG */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconRpg} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> RPG</Typography>
                    </Box>
                </Avatar>
                {/* Indie */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconIndie} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> Indie</Typography>
                    </Box>
                </Avatar>
                {/* Simulador */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconSim} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> Simulación</Typography>
                    </Box>
                </Avatar>
                {/* Estrategia */}
                <Avatar sx={{ height: '140px', width: '140px', background: '#1d1d22' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={iconEstra} style={{ width: '60%' }} />
                        <Typography sx={{ fontWeight: 'bold' }}> Estrategía</Typography>
                    </Box>
                </Avatar>
            </Stack >
        </Container>
    );
}
