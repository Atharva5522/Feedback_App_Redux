import { List } from "@mui/material"
import ListDetail from "./ListDetail"
import { useSelector } from "react-redux"

const Listgroup = () => {

    const {allfeedbacks} = useSelector((state) => state.feedback)


    return (
        <List sx={{marginTop:"50px"}}>

        {
            allfeedbacks.map(item =>  <ListDetail  key={item.id} item={item} /> )
        }



       

        </List>
    )
}

export default Listgroup