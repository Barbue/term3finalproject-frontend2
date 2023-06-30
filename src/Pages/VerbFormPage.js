import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { VscSaveAs } from "react-icons/vsc";

const VerbFormPage = (props) => {
  //const auth = useAuth()
  //instantiate navigator
  const navigate = useNavigate();

  const { setShouldRefresh, urlEndPoint } = props;
  const [verb, setVerb] = useState("");
  const [tense, setTense] = useState("");
  const [je, setJe] = useState("");
  const [tu, setTu] = useState("");
  const [il, setIl] = useState("");
  const [nous, setNous] = useState("");
  const [vous, setVous] = useState("");
  const [ils, setIls] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [comments, setComments] = useState("");

  const handleCreateVerb = async () => {
    //if we are creating a new entry, let's refresh the page
    setShouldRefresh(true);

    console.log(urlEndPoint);
    const req = {
      verb: verb,
      tense: tense,
      je: je,
      tu: tu,
      il: il,
      nous: nous,
      vous: vous,
      ils: ils,
      createdBy: createdBy,
      comments: comments,
    };

    console.log(req);
    axios
      .post(`${urlEndPoint}/verbs/create-one`, req)
      .then(
        function (response) {
          console.log(response);
          // place set setShouldRefresh(false) after .then
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <h1>
        Verb Entry Creation Form <VscSaveAs />
      </h1>
      <br />
      <Form>
        <FormGroup>
          <Form.Label>Verb: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setVerb(e.target.value);
            }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Tense: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setTense(e.target.value);
            }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Je: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setJe(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Tu: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setTu(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Il/Elle: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setIl(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Nous: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setNous(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Vous: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setVous(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Ils/Elles: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setIls(e.target.value);
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
            onChange={(e) => {
              setCreatedBy(e.target.value);
            }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Comments: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setComments(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
      </Form>
      <br />
      <Button
        variant="success"
        onClick={() => {
          handleCreateVerb();
          navigate("/verbs");
        }}
      >
        Create Verb Entry
      </Button>{" "}
      <Button
        variant="success"
        onClick={() => {
          navigate("/verbs");
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default VerbFormPage;
