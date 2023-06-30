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

function QuickEditExpFavorite(props) {
  const { userId } = useAuth();

  const {
    favoriteExpressionList,
    urlEndPoint,
    setShouldRefresh,
    favoriteExpressionEntry,
  } = props;

  const [theme, setTheme] = useState(favoriteExpressionEntry.theme);
  const [expression, setExpression] = useState(
    favoriteExpressionEntry.expression
  );
  const [literaltranslation, setLiteralTranslation] = useState(
    favoriteExpressionEntry.literaltranslation
  );
  const [metaphoricaltranslation, setMetaphoricalTranslation] = useState(
    favoriteExpressionEntry.metaphoricaltranslation
  );
  const [createdBy, setCreatedBy] = useState(favoriteExpressionEntry.createdBy);
  const [context, setContext] = useState(favoriteExpressionEntry.context);

  const navigate = useNavigate();

  const handleUpdateFavoriteExpression = () => {
    setShouldRefresh(true);
    const req = {
      theme: theme,
      expression: expression,
      literaltranslation: literaltranslation,
      metaphoricaltranslation: metaphoricaltranslation,
      createdBy: createdBy,
      context: context,
      lastModified: new Date(),
      lastUpdatedById: userId,
    };

    const response = axios
      .put(
        `${urlEndPoint}/favoriteexpressions/update-one/${favoriteExpressionEntry.createdById}`,
        req
      )
      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );

    navigate("/favoriteexpressions");
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
        Theme: {favoriteExpressionEntry.theme}
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
          <h1> Edit Expression Entry </h1>

          <Form>
            <FormGroup>
              <Form.Label>Theme: </Form.Label>
              <Form.Control
                type="text"
                value={theme}
                name="theme"
                onChange={(e) => {
                  setTheme(e.target.value);
                }}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Figure Of Speech: </Form.Label>
              <Form.Control
                type="text"
                value={expression}
                name="expression"
                onChange={(e) => {
                  setExpression(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label> Literal Translation: </Form.Label>
              <Form.Control
                type="text"
                value={literaltranslation}
                name="literaltranslation"
                onChange={(e) => {
                  setLiteralTranslation(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Metaphorical Translation: </Form.Label>
              <Form.Control
                type="text"
                value={metaphoricaltranslation}
                name="metaphoricaltranslation"
                onChange={(e) => {
                  setMetaphoricalTranslation(e.target.value);
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
              <Form.Label>Context: </Form.Label>
              <Form.Control
                value={context}
                name="context"
                onChange={(e) => {
                  setContext(e.target.value);
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
              handleUpdateFavoriteExpression();
            }}
          >
            Update Favorite Expression Entry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default QuickEditExpFavorite;
