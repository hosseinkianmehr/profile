import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Serche() {
    return (
        <>
            <Stack 
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
            >


                <IconButton
                    
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <SearchIcon />
                </IconButton>
            </Stack>


        </>
    )
}
