import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

function QuickEdit(props) {
  const { userId } = useAuth();

  const { wordList, urlEndPoint, setShouldRefresh, wordEntry } = props;

  const [word, setWord] = useState(wordEntry.word);
  const [partOfSpeech, setPartOfSpeech] = useState(wordEntry.partOfSpeech);
  const [translation, setTranslation] = useState(wordEntry.translation);
  const [exampleSentence, setExampleSentence] = useState(
    wordEntry.exampleSentence
  );
  const [createdBy, setCreatedBy] = useState(wordEntry.createdBy);
  const [comments, setComments] = useState(wordEntry.comments);

  const navigate = useNavigate();

  const handleUpdateWord1 = () => {
    setShouldRefresh(true);
    const req = {
      word: word,
      partOfSpeech: partOfSpeech,
      translation: translation,
      exampleSentence: exampleSentence,
      createdBy: createdBy,
      comments: comments,
      lastModified: new Date(),
      lastUpdatedById: userId,
    };

    const response = axios
      .put(`${urlEndPoint}/words/update-one/${wordEntry.createdById}`, req)
      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );

    navigate("/");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card.Link
        style={{ fontSize: "30px", fontWeight: 1000, color: "blue" }}
        onClick={handleShow}
      >
        Word: {wordEntry.word}
      </Card.Link>
      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title>Quick Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h1> Edit Word Entry </h1>

          <Form>
            <FormGroup>
              <Form.Label>Word: </Form.Label>
              <Form.Control
                type="text"
                value={word}
                name="word"
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Part Of Speech: </Form.Label>
              <Form.Control
                type="text"
                value={partOfSpeech}
                name="partOfSpeech"
                onChange={(e) => {
                  setPartOfSpeech(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Translation: </Form.Label>
              <Form.Control
                type="text"
                value={translation}
                name="translation"
                onChange={(e) => {
                  setTranslation(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Example Sentence: </Form.Label>
              <Form.Control
                type="text"
                value={exampleSentence}
                name="exampleSentence"
                onChange={(e) => {
                  setExampleSentence(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Created By: </Form.Label>
              <Form.Control
                type="text"
                value={createdBy}
                name="createdBy"
                onChange={(e) => {
                  setCreatedBy(e.target.value);
                }}
                placeholder="Normal text"
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Comments: </Form.Label>
              <Form.Control
                value={comments}
                name="comments"
                onChange={(e) => {
                  setComments(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </FormGroup>

            {/* <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Multiple files input example</Form.Label>
      <Form.Control type="file" multiple />
    </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="dark"
            onClick={() => {
              handleUpdateWord1();
            }}
          >
            Update Word Entry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QuickEdit;

// function QuickEdit(props) {
//   const { userId } = useAuth();

//   const { wordList, urlEndPoint, setShouldRefresh, wordEntry } = props;

//   const [word, setWord] = useState(wordEntry.word);
//   const [partOfSpeech, setPartOfSpeech] = useState(wordEntry.partOfSpeech);
//   const [translation, setTranslation] = useState(wordEntry.translation);
//   const [exampleSentence, setExampleSentence] = useState(
//     wordEntry.exampleSentence
//   );
//   const [createdBy, setCreatedBy] = useState(wordEntry.createdBy);
//   const [comments, setComments] = useState(wordEntry.comments);

//   const navigate = useNavigate();

//   const handleUpdateWord1 = () => {
//     setShouldRefresh(true);
//     const req = {
//       word: word,
//       partOfSpeech: partOfSpeech,
//       translation: translation,
//       exampleSentence: exampleSentence,
//       createdBy: createdBy,
//       comments: comments,
//       lastModified: new Date(),
//       lastUpdatedById: userId,
//     };

//     const response = axios
//       .put(`${urlEndPoint}/words/update-one/${word.createdById}`, req)
//       .then(
//         function (response) {
//           console.log(response);
//           setShouldRefresh(false);
//         },
//         {
//           "Content-Type": "application/json",
//         }
//       );

//     navigate("/");
//   };

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <Card.Link
//         style={{ fontSize: "30px", fontWeight: 1000, color: "blue" }}
//         onClick={handleShow}
//       >
//         Word: {wordEntry.word}
//       </Card.Link>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Quick Edit</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h1> Edit Word Entry </h1>

//           <Form>
//             <FormGroup>
//               <Form.Label>Word: </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={word}
//                 name="word"
//                 onChange={(e) => {
//                   setWord(e.target.value);
//                 }}
//               />
//             </FormGroup>
//             <br />
//             <FormGroup>
//               <Form.Label>Part Of Speech: </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={partOfSpeech}
//                 name="partOfSpeech"
//                 onChange={(e) => {
//                   setPartOfSpeech(e.target.value);
//                 }}
//                 as="textarea"
//                 rows={3}
//               />
//             </FormGroup>
//             <br />
//             <FormGroup>
//               <Form.Label>Translation: </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={translation}
//                 name="translation"
//                 onChange={(e) => {
//                   setTranslation(e.target.value);
//                 }}
//                 as="textarea"
//                 rows={3}
//               />
//             </FormGroup>
//             <br />
//             <FormGroup>
//               <Form.Label>Example Sentence: </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={exampleSentence}
//                 name="exampleSentence"
//                 onChange={(e) => {
//                   setExampleSentence(e.target.value);
//                 }}
//                 as="textarea"
//                 rows={3}
//               />
//             </FormGroup>
//             <br />
//             <FormGroup>
//               <Form.Label>Created By: </Form.Label>
//               <Form.Control
//                 type="text"
//                 value={createdBy}
//                 name="createdBy"
//                 onChange={(e) => {
//                   setCreatedBy(e.target.value);
//                 }}
//                 placeholder="Normal text"
//               />
//             </FormGroup>
//             <br />
//             <FormGroup>
//               <Form.Label>Comments: </Form.Label>
//               <Form.Control
//                 value={comments}
//                 name="comments"
//                 onChange={(e) => {
//                   setComments(e.target.value);
//                 }}
//                 as="textarea"
//                 rows={3}
//               />
//             </FormGroup>

//             {/* <Form.Group controlId="formFileMultiple" className="mb-3">
//       <Form.Label>Multiple files input example</Form.Label>
//       <Form.Control type="file" multiple />
//     </Form.Group> */}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>

//           <Button
//             variant="success"
//             onClick={() => {
//               handleUpdateWord1();
//             }}
//           >
//             Update Word Entry
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default QuickEdit;
