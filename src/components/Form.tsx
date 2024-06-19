import React, { useState } from 'react';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    FormGroup,
    FormControl,
    FormLabel,
    Typography,
    Container,
} from '@mui/material';

interface FormData {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
    direccion: string;
    hobies: string[];
}

const hobiesOptions = ['Deporte', 'Lectura', 'Música', 'Viajes', 'Cine'];

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        edad: 0,
        esEstudiante: false,
        direccion: '',
        hobies: [],
    });

    const handleChange = (
        e: any
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'edad' ? parseInt(value, 10) : value,
        });
    };

    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleHobiesChange = (e: any) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            const newHobies = checked
                ? [...prevState.hobies, value]
                : prevState.hobies.filter((hobby) => hobby !== value);
            return {
                ...prevState,
                hobies: newHobies,
            };
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };

    return (
        <Container sx={{ margin: '50px auto', background: 'white', borderRadius: '20px', padding: '20px' }}>
            <Typography sx={{ margin: '20px 0', fontWeight: 'bold', fontSize: '2rem', background: `url(${require('../assets/fondotxt.jpg')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Formulario
            </Typography>
            {/* Formulario */}
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        label="Nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <TextField
                        label="Edad"
                        name="edad"
                        type="number"
                        value={formData.edad}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl margin="normal">
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="esEstudiante"
                                checked={formData.esEstudiante}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="¿Es estudiante?"
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <TextField
                        label="Dirección"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Hobies</FormLabel>
                    <FormGroup>
                        {hobiesOptions.map((hobby) => (
                            <FormControlLabel
                                key={hobby}
                                control={
                                    <Checkbox
                                        value={hobby}
                                        checked={formData.hobies.includes(hobby)}
                                        onChange={handleHobiesChange}
                                    />
                                }
                                label={hobby}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>
        </Container>
    );
}