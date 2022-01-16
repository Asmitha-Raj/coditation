import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CategoryComponent = (props) => {
    const [categoryAction, setCategoryAction] = useState(undefined);
    const [actionDOM, setActionDOM] = useState(undefined);
    //const [selectedStateDOM, setSelectedStateDOM] = useState(undefined);
    useEffect(() => {
        switch (categoryAction) {
            case "Get":
                setActionDOM(
                    <>
                        Get
                    </>
                );
                break;
            case "Create":
                setActionDOM(
                    <>
                        Create
                        <div>
                            <TextField id="outlined-basic" label="Category Name" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Sub Categories" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Description" variant="outlined" style={{ margin: 10 }} /><br />
                            <Button variant="contained" onClick={() => {
                                console.log("To Do Submit Form");
                            }}>Submit</Button>
                        </div>
                    </>
                );
                break;
            case "Update":
                setActionDOM(
                    <>
                        Update
                        <div>
                            <TextField id="outlined-basic" label="Category ID" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Category Name" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Sub Categories" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Description" variant="outlined" style={{ margin: 10 }} /><br />
                            <Button variant="contained" onClick={() => {
                                console.log("To Do Submit Form");
                            }}>Submit</Button>
                        </div>
                    </>
                );
                break;
            case "Delete":
                setActionDOM(
                    <>
                        Delete
                        <div>
                            <TextField id="outlined-basic" label="Category ID" variant="outlined" style={{ margin: 10 }} /><br />
                            <Button variant="contained" onClick={() => {
                                console.log("To Do Submit Form");
                            }}>Submit</Button>
                        </div>
                    </>
                );
                break;
            default:
                break;
        }
    }, [categoryAction])
    return (
        <div>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {["Get", "Create", "Update", "Delete"].map((value) => (
                        <Grid key={value} item>
                            <Button variant="contained" onClick={() => {
                                setCategoryAction(value);
                            }}>{value}</Button>
                        </Grid>
                    ))}
                </Grid>
                {
                    actionDOM !== undefined ?
                        <div style={{ margin: 10 }}>{actionDOM}</div>
                        :
                        void (0)
                }
            </Grid>
        </div>
    );
}

export default CategoryComponent;