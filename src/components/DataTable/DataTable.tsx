import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { WineForm } from '../WineForm';

//Applies to our grid table
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'brand', headerName: 'Brand', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'origin', headerName: 'Origin', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
];

interface gridData {
    data: {
        id?:string // The ? is like an if statement
    }
}

export  const DataTable =() => {

    let { wineData, getData } = useGetData();
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>({data:{}})  // Property that stores the data to be displayed in a table.
    const [ selectionModel, setSelectionModel ] = useState<any>([]); // It stores the selected rows or cells in a table or grid.

    let handleOpen = () => {
        setOpen(true);
    };

    let handleClose = () => {
        setOpen(false);
    };

    let deleteData = () => {
        server_calls.delete(selectionModel); // Deletes selected row or cell from table
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    };

  return (
    <div style={{ height: 400, width: '100%' }}>
                <h2>My Wines</h2>

            <DataGrid rows={ wineData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
            onSelectionModelChange={ (item) => {
                setSelectionModel(item)
                            // console.log(item)
            }}
            />

            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/* Dialog pop-up */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Wine {selectionModel}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update Wine</DialogContentText>
                        <WineForm id={selectionModel!}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Done</Button>
                </DialogActions>
            </Dialog>
                
    </div>
  )
}
