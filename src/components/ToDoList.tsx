import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Container, Modal, TextField, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { useReducer, useMemo, useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';

interface Task {
    id: number;
    tarea: string;
    completed: boolean;
}

type ActionType =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'DELETE_TASK'; payload: number }
    | { type: 'TOGGLE_TASK'; payload: number };

const taskReducer = (state: Task[], action: ActionType): Task[] => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        default:
            return state;
    }
};

const columns = (toggleTask: (id: number) => void, deleteTask: (id: number) => void): GridColDef[] => [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'tarea',
        headerName: 'Tarea',
        width: 150,
        editable: true,
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 200,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => (
            <strong>
                {!params.row.completed && (
                    <Button
                        variant="contained"
                        size="small"
                        style={{ marginRight: 8, borderRadius: '20px', background: 'green' }}
                        onClick={() => toggleTask(params.row.id)}
                    >
                        <CheckIcon />
                    </Button>
                )}
                <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    style={{ borderRadius: '20px' }}
                    onClick={() => deleteTask(params.row.id)}
                >
                    <DeleteIcon />
                </Button>
            </strong>
        ),
    },
];

const CustomTextField = styled(TextField)({
    '& label': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: '#1B4965',
        },
        '& input': {
            color: '#1B4965',
        }
    }
});

export default function ToDoList() {
    const [tasks, dispatch] = useReducer(taskReducer, [
        { id: 1, tarea: 'LazyLoading', completed: false },
        { id: 2, tarea: 'Cuadro comparativo', completed: false },
        { id: 3, tarea: 'UseState', completed: false },
    ]);

    const [open, setOpen] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    const completedTasksCount = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);

    const handleAddTask = useCallback(() => {
        setOpen(true);
    }, []);

    const handleSaveTask = useCallback(() => {
        dispatch({
            type: 'ADD_TASK',
            payload: { id: tasks.length + 1, tarea: newTaskName, completed: false }
        });
        setNewTaskName('');
        setOpen(false);
    }, [newTaskName, tasks.length]);

    const handleToggleTask = useCallback((id: number) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    }, []);

    const handleDeleteTask = useCallback((id: number) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    }, []);

    const handleCloseModal = () => setOpen(false);

    return (
        <Container>
            <Box sx={{ height: '100%', width: '100%', background: 'white' }}>
                <Box sx={{ padding: '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Typography><strong>Tareas</strong></Typography>
                    <Typography><strong>Completadas: {completedTasksCount}</strong></Typography>
                    <Button variant="contained" sx={{ background: 'green' }} onClick={handleAddTask}>
                        Nueva Tarea
                    </Button>
                </Box>
                <DataGrid
                    rows={tasks.map(task => ({ ...task, toggleTask: handleToggleTask, deleteTask: handleDeleteTask }))}
                    columns={columns(handleToggleTask, handleDeleteTask)}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
            <Modal open={open} onClose={handleCloseModal}>
                <Box
                    component="form"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        background: 'white',
                        border: '2px solid #FFF',
                        borderRadius: '20px',
                        boxShadow: 24
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        backgroundColor: '#1B4965',
                        padding: '20px',
                        borderRadius: '20px',
                        marginBottom: '5px',
                    }}>
                        <Typography variant="h6" component="h2" sx={{
                            color: '#FFF',
                            fontWeight: 'bold',
                        }}>
                            Crear Nueva Tarea
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '20px' }}>
                        <CustomTextField
                            label="Nombre"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                        />
                        <Box sx={{ marginTop: '20px' }}>
                            <Button onClick={handleSaveTask} variant="contained" sx={{ background: '#1B4965', fontWeight: 'bold', width: '100%' }}>
                                Guardar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
}
