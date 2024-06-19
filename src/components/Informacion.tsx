import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Grid, Paper } from '@mui/material';
import { formatCurrency } from "../components/utils/utils";
import axios from 'axios';

export default function DataGridDemo() {
    const [rows2, setRows2] = useState([]);

    useEffect(() => {
        // Función para obtener datos desde la API    
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const data = response.data.results;
            console.log(data);
            setRows2(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'status',
            headerName: 'Estado',
            width: 150,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'Episodio',
            width: 150,
            editable: true,
        },
        {
            field: 'gender',
            headerName: 'Genero',
            width: 150,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Tipo',
            width: 150,
            editable: true,
        }
    ];

    return (
        <Box>
            <Paper>
                <Grid item xs={12} md={12} lg={12}>
                    <DataGrid
                        rows={rows2}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />
                </Grid>
            </Paper>
        </Box>
    );
}
