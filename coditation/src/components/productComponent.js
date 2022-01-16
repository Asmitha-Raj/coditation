import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ProductComponent = (props) => {
    const [productAction, setProductAction] = useState(undefined);
    const [actionDOM, setActionDOM] = useState(undefined);
    //const [selectedStateDOM, setSelectedStateDOM] = useState(undefined);
    useEffect(() => {
        switch (productAction) {
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
                            <TextField id="outlined-basic" label="Product Name" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Categories" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Description" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Price ($)" variant="outlined" style={{ margin: 10 }} /><br />
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
                            <TextField id="outlined-basic" label="Product ID" variant="outlined" style={{ margin: 10 }} /><br />
                            <TextField id="outlined-basic" label="Product Name" variant="outlined" style={{ margin: 10 }} /><br />
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
                            <TextField id="outlined-basic" label="Product ID" variant="outlined" style={{ margin: 10 }} /><br />
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
    }, [productAction])
    return (
        <div>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {["Get", "Create", "Update", "Delete"].map((value) => (
                        <Grid key={value} item>
                            <Button variant="contained" onClick={() => {
                                setProductAction(value);
                            }}>{value}</Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <div style={{ margin: 10 }}>
                {
                    actionDOM !== undefined ? actionDOM : void (0)
                }
            </div>
        </div>
    );
}

export default ProductComponent;