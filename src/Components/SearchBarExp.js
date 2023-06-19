import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import Reset from "../Components/Reset";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { VscSearch } from "react-icons/vsc";

function SearchBarExp(props){

    // setting up the state 
    const [input, setInput] = useState("");
    const [field, setField] = useState("");
    //const navigate = useNavigate();

    

    
    const handleOnSubmit1 = e => {
        e.preventDefault();
        
        //show filtered results, call to function in App.js 
        props.filterExpressions(input, field);
        
} 

const handleReset1 = () => {

    setField("")
    setInput("")

    props.filterExpressions("","")



}

return (

    <>
         
         
        <Form onSubmit={handleOnSubmit1}> 
        <FormGroup >
        <Form.Label htmlFor="search"><VscSearch/>Search: </Form.Label>
        <Form.Control  type="text" id="search" name="search" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </FormGroup>  
        <Form.Check
            inline
            label="Theme"
            id="custom-switch"
            type="switch"
            value="theme"
            checked={field === "theme"}
            onChange={e => setField(e.target.value)}
            /> 
            <Form.Check
            inline
            label="Expression"
            id="custom-switch"
            type="switch"
            value="expression"
            checked={field === "expression"}
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
        <Button   variant="primary" size="sm" type="submit">
            Search
        </Button> {"  "}
       
         <Button className='bsbutton2' variant="success" size="sm" onClick={handleReset1}>Reset</Button>  
        </Form> 
        <br/>
    </> 
  );
}

export default SearchBarExp;