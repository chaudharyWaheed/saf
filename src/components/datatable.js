import React,{useState,useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import json from './data.json'
import Button from '@mui/material/Button';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import { Typography } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';



console.log(json)
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'NAME', width: 180},
    { field: 'Age', headerName: 'Age', width: 80 },
    { field: 'city',headerName: 'city',width: 280},
    
  ];
function DataTable(){
  const [posts, setPosts]= useState([])

useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(DataSet => DataSet.json())
  .then(json => setPosts(json))

},[])
const rows = 
    posts.map((values)=>{
      return (
        { id : values.id, name: values.name, Age: values.Age, city: values.city}
        )
    })


  
  return(
      <div >
      
     

        <div style={{ height: 400, width: '100%', marginTop:'30px' }}>
      <DataGrid sx={{ ml: 30 }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>
    </div>
    )
    }



export default DataTable;
