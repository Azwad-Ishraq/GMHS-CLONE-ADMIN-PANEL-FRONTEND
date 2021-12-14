import { Alert, Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const Notices = () => {
    const [notices,setNotices] = useState([])
    const [notice,setNotice] = useState({})
    const [refresh,setRefresh] = useState(false)
    const [openSnack, setOpenSnack] = useState(false);
    const handleOnBlur = (e) => {
        const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...notice}
      newInfo[field] = value;
     
      setNotice(newInfo)
    }
    useEffect(()=>{
        fetch('http://localhost:8000/notices')
        .then(res => res.json())
        .then(data => setNotices(data))
    },[refresh])

    const handleSubmit = (e) => {
        e.preventDefault()
        

        if(notice.title === '' || notice.des ===''){
            
            setOpenSnack(true)
        }
        else{
            fetch(`http://localhost:8000/notices`,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(notice)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRefresh(true)
        })
        }
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/notices/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                const remaining = notices.filter(notice => notice._id !== id)
                setNotices(remaining)
            }
        }) 
        
    } 
    return (
        <Box  sx={{p:5,borderRadius:3}} style={{backgroundColor:'white',width:'100%',margin:'0 auto',boxShadow:'2px 2px 10px #80808061',height:'70vh'}}>


     
    {
        openSnack ? 
        <Snackbar open={openSnack} autoHideDuration={6000} onClose={() => setOpenSnack(false)}>
        <Alert onClose={()=> setOpenSnack(false)} severity="error" sx={{ width: '100%' }}>
          Please Add Title and Description
        </Alert>
    </Snackbar>
    :
    <span></span>
    }

            <Typography color='primary' variant='h4'>
                Notices
            </Typography>



            <Grid container spacing={2}>
                <Grid  item xs={12} md={6}>
                <List style={{height:'80%',overflowY:'scroll'}}>
          {
              notices.map(item => 
                <ListItem >
            <ListItemButton>
              
              <ListItemText primary={item.title} />
              <Divider orientation="vertical" flexItem />
              <ListItemIcon onClick={()=>handleDelete(item._id)}>
              <DeleteIcon color='error'/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
                )
          }
          
        </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h4'>
                        Post Notice
                        
                    </Typography>

                    <form style={{marginTop:'20px'}} onSubmit={handleSubmit}>
                    <TextField sx={{mb:3}} onBlur={handleOnBlur}  style={{width:'100%'}} name='title' id="filled-basic" label="Title" variant="filled" />
                    <TextField sx={{mb:3}} onBlur={handleOnBlur} style={{width:'100%'}} name='des' id="filled-basic" label="Des" variant="filled" />
                    <Button type='submit' variant="outlined">Post</Button>
                    </form>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Notices;