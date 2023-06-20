import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

function EditExpressionForm(props) {
  const { userId } = useAuth();

  const { expressionList, urlEndPoint, setShouldRefresh } = props;
  console.log(expressionList);
  const [theme, setTheme] = useState("");
  const [expression, setExpression] = useState("");
  const [literaltranslation, setLiteralTranslation] = useState("");
  const [metaphoricaltranslation, setMetaphoricalTranslation] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [context, setContext] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    const foundExpression = expressionList.find((expression) => {
      return expression.createdById === id;
    });
    setTheme(foundExpression.theme)
    setExpression(foundExpression.expression);
    setLiteralTranslation(foundExpression.literaltranslation);
    setMetaphoricalTranslation(foundExpression.metaphoricaltranslation);
    setCreatedBy(foundExpression.createdBy);
    setContext(foundExpression.context);
  }, [id, expressionList]);

  const handleUpdateExpression = () => {
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
      .put(`${urlEndPoint}/expressions/update-one/${id}`, req)
      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );

    navigate("/expressions");
  };

  return (
    <div>
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
          <Form.Label>Literal Translation: </Form.Label>
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
      <br />

      <Button
        variant="success"
        onClick={() => {
          handleUpdateExpression();
        }}
      >
        Update Expression Entry
      </Button>

      <br />
      <br />
    </div>
  );
}

export default EditExpressionForm;