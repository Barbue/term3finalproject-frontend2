//import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickEditExpFavorite from "./ExpresFavoriteModal";
import { GiFleurDeLys } from "react-icons/gi";

const FavoriteExpressionsCard = (props) => {
  const navigate = useNavigate();

  const {
    favoriteExpressionEntry,
    urlEndPoint,
    setShouldRefresh,
    favoriteExpressionList,
  } = props;
  console.log(favoriteExpressionEntry);

  const handleDeleteFavoriteExpression = (id) => {
    setShouldRefresh(true);

    axios
      .delete(`${urlEndPoint}/favoriteexpressions/delete-one/${id}`)

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
                <Card.Header style={{ color: "goldenrod" }}>
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                </Card.Header>
                <Card.Body>
                  <QuickEditExpFavorite
                    favoriteExpressionEntry={favoriteExpressionEntry}
                    favoriteExpressionList={favoriteExpressionList}
                    setShouldRefresh={setShouldRefresh}
                    urlEndPoint={urlEndPoint}
                  />
                  <br />

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Figure of Speech:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteExpressionEntry.expression} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Literal Translation:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small>
                      {" "}
                      {favoriteExpressionEntry.literaltranslation}{" "}
                    </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Metaphorical Translation:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small>
                      {" "}
                      {favoriteExpressionEntry.metaphoricaltranslation}{" "}
                    </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created by:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteExpressionEntry.createdBy} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Context:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteExpressionEntry.context} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created On:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteExpressionEntry.createdAt} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteExpressionEntry.createdById} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Last Updated By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small>
                      {" "}
                      {favoriteExpressionEntry.lastUpdatedById}{" "}
                    </small>{" "}
                  </Card.Text>

                  <Card.Footer>
                    <Card.Subtitle
                      style={{ fontSize: "25px", fontWeight: 1000 }}
                    >
                      {" "}
                      Last Modified:{" "}
                    </Card.Subtitle>
                    <small className="text-muted">
                      <p>{favoriteExpressionEntry.lastModified}</p>{" "}
                    </small>
                  </Card.Footer>

                  <div className="d-grid gap-2">
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeleteFavoriteExpression(
                          favoriteExpressionEntry.createdById
                        );
                      }}
                    >
                      Delete Favorite Expression
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

export default FavoriteExpressionsCard;
