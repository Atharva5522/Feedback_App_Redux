import { Container } from "@mui/material"
import Form from "./Components/Form"
import Listgroup from "./Components/Listgroup"
import Navbar from "./Components/Navbar"
import Quote from "./Components/Quote"

const App = () => {
  return (
    <div>

    <Navbar/>
    <Quote/>

    <Container>
    <Form/>
    <Listgroup/>

    </Container>
      
    </div>
  )
}

export default App
