import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';

import ofert1 from '../assets/ofert1.jpg'
import ofert2 from '../assets/ofert2.jpg'
import ofert3 from '../assets/ofert3.webp'
import ofert4 from '../assets/ofert4.jpg'

export default function MediaCard() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' ,gap: '20px', flexWrap: 'wrap'}}>
            {/* Cyberpunk */}
            <Card sx={{ width: {xs: '100%',sm: '40%', md: '23%'}, color: 'white' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image={ofert1}
                    title="Cyberpunk"
                />
                <CardContent sx={{ background: '#1d1d22' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        Cyberpunk 2077
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#1f817d' }}>
                        Global
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#72708b' }}>
                        Por
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        MX$1109.00
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#5bb832' }}>
                        10% de descuento
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <FavoriteBorderIcon></FavoriteBorderIcon> 22
                    </Box>
                </CardContent>
                <CardActions sx={{ background: '#1d1d22', display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ background: '#383838' }} variant="contained">Ver más</Button>
                </CardActions>
            </Card>
            {/* Halo */}
            <Card sx={{ width: {xs: '100%',sm: '40%', md: '23%'}, color: 'white' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image={ofert2}
                    title="Cyberpunk"
                />
                <CardContent sx={{ background: '#1d1d22' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        Cyberpunk 2077
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#1f817d' }}>
                        Global
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#72708b' }}>
                        Por
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        MX$1109.00
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#5bb832' }}>
                        10% de descuento
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <FavoriteBorderIcon></FavoriteBorderIcon> 22
                    </Box>
                </CardContent>
                <CardActions sx={{ background: '#1d1d22', display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ background: '#383838' }} variant="contained">Ver más</Button>
                </CardActions>
            </Card>
            {/* The last of us */}
            <Card sx={{ width: {xs: '100%',sm: '40%', md: '23%'}, color: 'white' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image={ofert3}
                    title="Cyberpunk"
                />
                <CardContent sx={{ background: '#1d1d22' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        Cyberpunk 2077
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#1f817d' }}>
                        Global
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#72708b' }}>
                        Por
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        MX$1109.00
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#5bb832' }}>
                        10% de descuento
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <FavoriteBorderIcon></FavoriteBorderIcon> 22
                    </Box>
                </CardContent>
                <CardActions sx={{ background: '#1d1d22', display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ background: '#383838' }} variant="contained">Ver más</Button>
                </CardActions>
            </Card>
            {/* Rocket League */}
            <Card sx={{ width: {xs: '100%',sm: '40%', md: '23%'}, color: 'white' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image={ofert4}
                    title="Cyberpunk"
                />
                <CardContent sx={{ background: '#1d1d22' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        Cyberpunk 2077
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#1f817d' }}>
                        Global
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#72708b' }}>
                        Por
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>
                        MX$1109.00
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#5bb832' }}>
                        10% de descuento
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <FavoriteBorderIcon></FavoriteBorderIcon> 22
                    </Box>
                </CardContent>
                <CardActions sx={{ background: '#1d1d22', display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ background: '#383838' }} variant="contained">Ver más</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
