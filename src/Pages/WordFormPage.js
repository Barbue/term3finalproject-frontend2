import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { VscSaveAs } from 'react-icons/vsc';

const WordFormPage = (props) => {

	//const auth = useAuth()
	//instantiate navigator 
	const navigate = useNavigate();
	
   const { setShouldRefresh, urlEndPoint } = props;
   const [word, setWord] = useState("")
	const [partOfSpeech, setPartOfSpeech] = useState("")
	const [translation, setTranslation] = useState("")
	const [exampleSentence, setExampleSentence] = useState("")
	const [createdBy, setCreatedBy] = useState("")
   const [comments, setComments] = useState("")
   
    

const handleCreateWord = async () => {

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)

		console.log(urlEndPoint)
		const req =  {
            word: word,
            partOfSpeech: partOfSpeech,
			      translation: translation,
			      exampleSentence: exampleSentence,
            createdBy: createdBy,
            comments: comments,
		}
		
        console.log(req);
        axios.post(`${urlEndPoint}/words/create-one`, req)
          .then(function (response) {
            console.log(response);
			// place set setShouldRefresh(false) after .then
			setShouldRefresh(false);
          },{
			'Content-Type': 'application/json'
		  })
          .catch(function (error) {
            console.log(error);
          }); 

	}

return (

<div>
          <br/>
		   <h1>Word Entry Creation Form <VscSaveAs /></h1>
			 <br/>

		   <Form>
		   <FormGroup>
         <Form.Label>Word: </Form.Label>
         <Form.Control type="text" onChange={(e) => { setWord(e.target.value) }} />
         </FormGroup>
          <br/> 
          <FormGroup>
          <Form.Label>Part Of Speech: </Form.Label>
          <Form.Control type="text" onChange={(e) => { setPartOfSpeech(e.target.value) }} as="textarea" rows={3} />
          </FormGroup>
          <br/>
		   <FormGroup>
          <Form.Label>Translation: </Form.Label>
          <Form.Control type="text" onChange={(e) => {
               setTranslation(e.target.value);
             }} as="textarea" rows={3} />
         </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>Example Sentence: </Form.Label>
          <Form.Control type="text" onChange={(e) => {
               setExampleSentence(e.target.value);
             }} as="textarea" rows={3} />
          </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>Created By: </Form.Label>
          <Form.Control type="text" onChange={(e) => { setCreatedBy(e.target.value) }}  />
          </FormGroup>
          <br/>
          <FormGroup>
          <Form.Label>Comments: </Form.Label>
          <Form.Control onChange={(e) => { setComments(e.target.value) }} as="textarea" rows={3} />
          </FormGroup>
		    </Form>
		    <br/>
<Button variant="success" onClick={() => { handleCreateWord(); 
   navigate("/") } }>Create Word Entry</Button>
{" "}
<Button variant="success" onClick={() => { navigate("/")} }>Cancel</Button>

</div>
)
};

export default WordFormPage



























