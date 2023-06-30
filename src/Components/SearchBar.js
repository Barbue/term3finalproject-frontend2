import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import Reset from "../Components/Reset";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { VscSearch } from "react-icons/vsc";

function SearchBar(props){

    // setting up the state 
    const [input, setInput] = useState("");
    const [field, setField] = useState("");
    //const navigate = useNavigate();

    

    
    const handleOnSubmit = e => {
        e.preventDefault();
        
        //show filtered results, call to function in App.js 
        props.filterWords(input, field);
        
} 

const handleReset = () => {

    setField("")
    setInput("")

    props.filterWords("","")



}

return (

    <>
         
         
        <Form className="switchBarFont" onSubmit={handleOnSubmit}> 
        <FormGroup >
        <Form.Label htmlFor="search"><VscSearch/>Search: </Form.Label>
        <Form.Control  type="text" id="search" name="search" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </FormGroup>  
        <Form.Check
            inline
            label="Word"
            id="custom-switch"
            type="switch"
            value="word"
            checked={field === "word"}
            onChange={e => setField(e.target.value)}
            /> 
            <Form.Check
            inline
            label="Part Of Speech"
            id="custom-switch"
            type="switch"
            value="partOfSpeech"
            checked={field === "partOfSpeech"}
            onChange={e => setField(e.target.value)}
            /> 
            
            <Form.Check
            inline
            label="Created By"
            id="custom-switch"
            type="switch"
            value="createdBy"
            checked={field === "createdBy"}
            onChange={e => setField(e.target.value)}
            /> 
        <Button className="bsbutton1" variant="primary" size="sm" type="submit">
            Search
        </Button> {"  "}
       
         <Button className='bsbutton2' variant="success" size="sm" onClick={handleReset}>Reset</Button>  
        </Form> 
        <br/>
    </> 
  );
}

export default SearchBar;




            
       





