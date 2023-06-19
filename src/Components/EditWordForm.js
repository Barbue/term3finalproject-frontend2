import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

function EditWordForm(props) {
  const { userId } = useAuth();

  const { wordList, urlEndPoint, setShouldRefresh } = props;
  console.log(wordList);
  const [word, setWord] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [translation, setTranslation] = useState("");
  const [exampleSentence, setExampleSentence] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [comments, setComments] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    const foundWord = wordList.find((word) => {
      return word.createdById === id;
    });

    setWord(foundWord.word);
    setPartOfSpeech(foundWord.partOfSpeech);
    setTranslation(foundWord.translation);
    setExampleSentence(foundWord.exampleSentence);
    setCreatedBy(foundWord.createdBy);
    setComments(foundWord.comments);
  }, [id, wordList]);

  const handleUpdateWord = () => {
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
      .put(`${urlEndPoint}/words/update-one/${id}`, req)
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

  return (
    <div>
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
      <br />

      <Button
        variant="success"
        onClick={() => {
          handleUpdateWord();
        }}
      >
        Update Word Entry
      </Button>

      <br />
      <br />
    </div>
  );
}

export default EditWordForm;
