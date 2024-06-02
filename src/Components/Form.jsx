import { Button, TextField } from "@mui/material"


import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/feedback/FeedbackSlice";



const Form = () => {

    const {edit} = useSelector((state)=>state.feedback);

    const dispatch = useDispatch()

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
       const newfeedback = {
            id :crypto.randomUUID(),
            title,
            description,
        }
        dispatch(add(newfeedback));

        setTitle("")
        setDescription("")


    };

    useEffect(() => {
        setTitle(edit.feedback.title);
        setDescription(edit.feedback.description);
    },[edit]);

    
    

    return (
        <form onSubmit={handlesubmit}>

        <TextField variant="outlined" label="Enter Title..." fullWidth sx={{marginTop:"50px"}} onChange={(e)=>setTitle(e.target.value)} value={title} required />
        <TextField variant="outlined" label="Enter Discription..." fullWidth sx={{marginTop:"30px"}} onChange={(e)=>setDescription(e.target.value)} value={description}   required/>

        <Button color="success" variant="contained" fullWidth sx={{marginTop:"30px"}} type="submit" >Save</Button>

        </form>
    )
};

export default Form