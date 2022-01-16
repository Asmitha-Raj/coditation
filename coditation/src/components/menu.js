import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { appStateContext } from '../App';

export default function AccountMenu() {
    const setCurrentState = React.useContext(appStateContext).setCurrentState;
    
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: 'primary.dark'
            }}>
                <Typography sx={{ minWidth: 100, margin: 2 }}><Button onClick={()=>{
                    if(setCurrentState!==undefined)
                    {
                        setCurrentState("Category");
                    }
                }} variant="contained">Categories</Button></Typography>
                <Typography sx={{ minWidth: 100, margin: 2 }}><Button onClick={()=>{
                    if(setCurrentState!==undefined)
                    {
                        setCurrentState("Product");
                    }
                }} variant="contained">Products</Button></Typography>
            </Box>
        </React.Fragment>
    );
}