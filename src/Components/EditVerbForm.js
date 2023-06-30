import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

function EditVerbForm(props) {
  const { userId } = useAuth();

  const { verbList, urlEndPoint, setShouldRefresh } = props;
  console.log(verbList);
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

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    const foundVerb = verbList.find((verb) => {
      return verb.createdById === id;
    });
    setVerb(foundVerb.verb);
    setTense(foundVerb.tense);
    setJe(foundVerb.je);
    setTu(foundVerb.tu);
    setIl(foundVerb.il);
    setNous(foundVerb.nous);
    setVous(foundVerb.vous);
    setIls(foundVerb.ils);
    setCreatedBy(foundVerb.createdBy);
    setComments(foundVerb.comments);
  }, [id, verbList]);

  const handleUpdateVerb = () => {
    setShouldRefresh(true);
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
      lastModified: new Date(),
      lastUpdatedById: userId,
    };
    const response = axios
      .put(`${urlEndPoint}/verbs/update-one/${id}`, req)
      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );

    navigate("/verbs");
  };

  return (
    <div>
      <h1> Edit Verb Entry </h1>

      <Form>
        <FormGroup>
          <Form.Label>Verb: </Form.Label>
          <Form.Control
            type="text"
            value={verb}
            name="verb"
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
            value={tense}
            name="tense"
            onChange={(e) => {
              setTense(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Je: </Form.Label>
          <Form.Control
            type="text"
            value={je}
            name="je"
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
            value={tu}
            name="tu"
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
            value={il}
            name="il"
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
            value={nous}
            name="nous"
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
            value={vous}
            name="vous"
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
            value={ils}
            name="ils"
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
          handleUpdateVerb();
        }}
      >
        Update Verb Entry
      </Button>

      <br />
      <br />
    </div>
  );
}

export default EditVerbForm;
