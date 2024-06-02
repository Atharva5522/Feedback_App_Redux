import {  Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuote } from "../features/feedback/QuoteSlice"

const Quote = () => {

    const { allQuotes,isLoading,isError,data} = useSelector((state)=> state.Quote)
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(fetchQuote())
    },[])
   
    if(isLoading)
    {
      <Typography variant="h5">Loading...</Typography>
    }

    if(isError)
    {
      <Typography variant="h5" align="center">Somethingwent wrong!</Typography>
    }


  return (
    <marquee>

    <Typography variant="h5" sx={{marginTop:"50px"}}>
    {allQuotes.content} - {allQuotes.author}
    
    </Typography>

    
      
    </marquee>
  )
}

export default Quote;
