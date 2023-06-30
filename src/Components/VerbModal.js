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

function QuickEditVerb(props) {
  const { userId } = useAuth();

  const { verbList, urlEndPoint, setShouldRefresh, verbEntry } = props;

  const [verb, setVerb] = useState(verbEntry.verb);
  const [tense, setTense] = useState(verbEntry.tense);
  const [je, setJe] = useState(verbEntry.je);
  const [tu, setTu] = useState(verbEntry.tu);
  const [il, setIl] = useState(verbEntry.il);
  const [nous, setNous] = useState(verbEntry.nous);
  const [vous, setVous] = useState(verbEntry.vous);
  const [ils, setIls] = useState(verbEntry.ils);
  const [createdBy, setCreatedBy] = useState(verbEntry.createdBy);
  const [comments, setComments] = useState(verbEntry.comments);

  const navigate = useNavigate();

  const handleUpdateVerb1 = () => {
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
      .put(`${urlEndPoint}/verbs/update-one/${verbEntry.createdById}`, req)
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card.Link
        style={{ fontSize: "30px", fontWeight: 1000, color: "blue" }}
        onClick={handleShow}
      >
        Verb: {verbEntry.verb}
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
                name="translation"
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
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="dark"
            onClick={() => {
              handleUpdateVerb1();
            }}
          >
            Update Verb Entry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QuickEditVerb;
