import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { VscSaveAs } from "react-icons/vsc";

const ExpressionFormPage = (props) => {
  //const auth = useAuth()
  //instantiate navigator
  const navigate = useNavigate();

  const { setShouldRefresh, urlEndPoint } = props;
  const [theme, setTheme] = useState("");
  const [expression, setExpression] = useState("");
  const [literaltranslation, setLiteralTranslation] = useState("");
  const [metaphoricaltranslation, setMetaphoricalTranslation] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [context, setContext] = useState("");

  const handleCreateExpression = async () => {
    //if we are creating a new entry, let's refresh the page
    setShouldRefresh(true);

    console.log(urlEndPoint);
    const req = {
      theme: theme,
      expression: expression,
      literaltranslation: literaltranslation,
      metaphoricaltranslation: metaphoricaltranslation,
      createdBy: createdBy,
      context: context,
    };

    console.log(req);
    axios
      .post(`${urlEndPoint}/expressions/create-one`, req)
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
        Expression Entry Creation Form <VscSaveAs />
      </h1>
      <br />
      <Form>
        <FormGroup>
          <Form.Label>Theme: </Form.Label>
          <Form.Control
            type="text"
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
            onChange={(e) => {
              setCreatedBy(e.target.value);
            }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Form.Label>Context: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setContext(e.target.value);
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
          handleCreateExpression();
          navigate("/expressions");
        }}
      >
        Create Expression 
      </Button>{" "}
      <Button
        variant="success"
        onClick={() => {
          navigate("/expressions");
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default ExpressionFormPage;
