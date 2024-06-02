import {  Box, Button, Divider, ListItem, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { edit, remove } from "../features/feedback/FeedbackSlice"
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ListDetail = ({item}) => {

    const dispatch = useDispatch()
   

    const handleDelete = (id) => {
        dispatch(remove(id))
    }

    const handleEdit = (item) => {
        dispatch(edit(item))

    }


    return (
        

        <ListItem>

        <Box sx={{flexGrow:"1"}}>

        <Typography variant="h5">Name : {item.title}</Typography>
        <Typography variant="h6">Review : {item.description} </Typography>

       <Divider/>

        </Box>

        <Box>
            <Button variant="outlined" size="small" color="warning" sx={{marginRight:"5px"}} endIcon={<EditIcon/>} onClick={()=>handleEdit(item)} >Edit</Button>
            <Button variant="outlined" size="small" color="error" endIcon={<DeleteIcon/>} onClick={()=>handleDelete(item.id)} >Delete</Button>
        </Box>
        </ListItem>

        

       
    )
}
export default ListDetail
 