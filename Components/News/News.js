import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const [news,setNews] = useState([])
    const [singleNews,setSingleNews] = useState({})
    const [refresh,setRefresh] = useState(false)
    const [openSnack, setOpenSnack] = useState(false);
    const handleOnBlur = (e) => {
        const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...singleNews}
      newInfo[field] = value;
     
      setSingleNews(newInfo)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        

        if(singleNews.title === '' || singleNews.img ===''){
            
            setOpenSnack(true)
        }
        else{
            fetch(`http://localhost:8000/news`,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(singleNews)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRefresh(true)
        })
        }
    }
    useEffect(()=>{
        fetch('http://localhost:8000/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[refresh])
    return (
        <Box sx={{ p: 5, borderRadius: 3 }} style={{ backgroundColor: 'white', width: '100%', margin: '0 auto', boxShadow: '2px 2px 10px #80808061', height: '70vh', marginTop: '40px' }}>
            <Typography color='primary' variant='h4'>
                News
                        </Typography>
            <Grid style={{height:'100%'}} container spacing={2}>
                <Grid style={{height:'100%'}} item xs={12} md={6}>
                    <List style={{height:'80%',overflowY:'scroll'}}>
                        
                        {
                            news.map(item => 
                                <ListItem style={{justifyContent:'center'}} disablePadding>
                             <NewsCard news={item}></NewsCard>
                        </ListItem>
                                )
                        }
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                        <Typography variant='h4'>
                            Post News
                        </Typography>

                        <form style={{marginTop:'20px'}} onSubmit={handleSubmit}>
                    <TextField sx={{mb:3}} onBlur={handleOnBlur}  style={{width:'100%'}} name='title' id="filled-basic" label="Title" variant="filled" />
                    <TextField sx={{mb:3}} onBlur={handleOnBlur} style={{width:'100%'}} name='img' id="filled-basic" label="Image" variant="filled" />
                    <Button type='submit' variant="outlined">Post</Button>
                    </form>
                </Grid>


            </Grid>
        </Box>
    );
};

export default News;