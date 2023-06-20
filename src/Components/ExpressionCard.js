//import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickEditExp from "./ExpresModal";
import { GiFleurDeLys } from "react-icons/gi";

const ExpressionCard = (props) => {
  const navigate = useNavigate();

  const { expressionEntry, urlEndPoint, setShouldRefresh, expressionList } = props;
  console.log(expressionEntry);

  const handleDeleteExpression = (id) => {
    setShouldRefresh(true);

    axios
      .delete(`${urlEndPoint}/expressions/delete-one/${id}`)

      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );
  };

  return (
    <div className="expressionCard">
      {["Dark"].map((variant) => (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card
                border="primary"
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "blue"}
                style={{ width: "27rem" }}
                className="mb-2"
              >
                <Card.Header>
                  <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/>
                  <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/>
                  <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/>
                  <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/>
                  <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/>
                  <GiFleurDeLys/><GiFleurDeLys/><GiFleurDeLys/>
                  <GiFleurDeLys/><GiFleurDeLys/>
                </Card.Header>
                <Card.Body>
                  <QuickEditExp
                    expressionEntry={expressionEntry}
                    expressionList={expressionList}
                    setShouldRefresh={setShouldRefresh}
                    urlEndPoint={urlEndPoint}
                  />
                  <br />

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Theme:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.theme} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Figure of Speech:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.expression} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Literal Translation:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.literaltranslation} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Metaphorical Translation:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.metaphoricaltranslation} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created by:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.createdBy} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Context:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.context} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{fontSize: "25px", fontWeight: 1000}}> Created By Id: </Card.Subtitle>
      <Card.Text> <small>  {expressionEntry.createdById} </small> </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Last Updated By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {expressionEntry.lastUpdatedById} </small>{" "}
                  </Card.Text>

                  <Card.Footer>
                    <Card.Subtitle
                      style={{ fontSize: "25px", fontWeight: 1000 }}
                    >
                      {" "}
                      Last Modified:{" "}
                    </Card.Subtitle>
                    <small className="text-muted">
                      <p>{expressionEntry.lastModified}</p>{" "}
                    </small>
                  </Card.Footer>

                  <div className="d-grid gap-2">
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeleteExpression(expressionEntry.createdById);
                      }}
                    >
                      Delete Expression
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate(`/edit-expression/${expressionEntry.createdById}`);
                      }}
                    >
                      Edit Expression 
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default ExpressionCard;