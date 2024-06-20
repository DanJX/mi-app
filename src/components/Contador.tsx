import React, { useReducer } from 'react';
import { Button, Typography, Box, Card, CardContent } from '@mui/material';

type State = {
    count: number;
};

type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Acción desconocida');
    }
}

export default function Contador() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Card sx={{ maxWidth: 300, margin: 'auto', mt: 5, textAlign: 'center', background:'#282c34' }}>
            <CardContent>
                <Typography variant="h6" component="div" color={'#863b8d'} fontWeight={'bold'}>
                    Contador
                </Typography>
                <Typography variant="h2" component="div" sx={{ my: 2 }} color={'#fff'}>
                    {state.count}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Button
                        variant="contained"
                        sx={{ background: '#26ed03'}}
                        onClick={() => dispatch({ type: 'increment' })}
                    >
                        Incrementar
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dispatch({ type: 'decrement' })}
                    >
                        Decrementar
                    </Button>
                </Box>
                <Button
                    variant="outlined"
                    onClick={() => dispatch({ type: 'reset' })}
                    sx={{ mt: 2, color: '#fff', borderColor: '#fff' }}
                >
                    Reiniciar
                </Button>
            </CardContent>
        </Card>
    );
}
