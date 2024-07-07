import React, { useCallback, useState, useMemo } from 'react';
import { Button, Typography, Box, Card, CardContent, TextField, styled } from '@mui/material';


const InputIncremento = styled(TextField)({
    width: '100%',
    maxWidth: '200px',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    background: '#fff',
    borderRadius: '5px',
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
});

export default function ExamenContador() {

    const [contador, setContador] = useState(0);
    const [valorIncremento, setValorIncremento] = useState();

    const incrementar = useCallback(() => {
        setContador((c) => c + valorIncremento);
    }, [valorIncremento]);

    const valorContador = useMemo(() => contador, [contador]);


    return (
        <Card sx={{ maxWidth: 300, margin: 'auto', mt: 5, textAlign: 'center', background: '#282c34', marginTop:'150px' }}>
            <CardContent>
                <Typography variant="h6" component="div" color={'green'} fontWeight={'bold'}>
                    Contador
                </Typography>
                <Typography variant="h2" component="div" sx={{ my: 2 }} color={'#fff'}>
                    {valorContador}
                </Typography>

                <Box sx={{ marginBottom: '20px' }}>
                    <InputIncremento 
                    hiddenLabel 
                    type="number"
                    value={valorIncremento}
                    onChange={(e) => setValorIncremento(parseInt(e.target.value) || 0)}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Button
                        variant="contained"
                        sx={{ background: '#26ed03' }}
                        onClick={incrementar}
                    >
                        Incrementar
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
