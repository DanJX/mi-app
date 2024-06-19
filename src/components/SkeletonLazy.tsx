import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';

export default function SkeletonLazy() {
    return (
        <Container>
            <Stack spacing={1} sx={{ width:'200px' }}>
                <Box display={'flex'} justifyContent={'center'} gap={4} alignItems={'center'}>
                    <Skeleton sx={{ background:'#f4f4f4'}} variant="circular" width={40} height={40} />
                    <Skeleton sx={{ background:'#f4f4f4'}} variant="rectangular" width={100} height={10} />
                </Box>
                <Skeleton sx={{ background:'#f4f4f4'}} variant="rectangular" width={300} height={10} />
                <Skeleton sx={{ background:'#f4f4f4'}} variant="rectangular" width={300} height={150} />
            </Stack>
        </Container>
    );
}
