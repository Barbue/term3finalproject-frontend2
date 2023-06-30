import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickEditFavoriteVerbs from "./FavoriteVerbModal";
import { GiFleurDeLys } from "react-icons/gi";

const FavoriteVerbCard = (props) => {
  const navigate = useNavigate();

  const { favoriteVerbEntry, urlEndPoint, setShouldRefresh, favoriteVerbList } =
    props;
  console.log(favoriteVerbEntry);

  const handleDeleteFavoriteVerb = (id) => {
    setShouldRefresh(true);

    axios
      .delete(`${urlEndPoint}/favoriteverbs/delete-one/${id}`)

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
    <div className="verbCard">
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
                  <QuickEditFavoriteVerbs
                    favoriteVerbEntry={favoriteVerbEntry}
                    favoriteVerbList={favoriteVerbList}
                    setShouldRefresh={setShouldRefresh}
                    urlEndPoint={urlEndPoint}
                  />
                  <br />

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Tense:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.tense} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Je:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.je} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Tu:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.tu} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Il/Elle:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.il} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Nous:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.nous} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Vous:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.vous} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Ils/Elles:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.ils} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created by:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.createdBy} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Comments:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.comments} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created On:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.createdAt} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.createdById} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Last Updated By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {favoriteVerbEntry.lastUpdatedById} </small>{" "}
                  </Card.Text>

                  <Card.Footer>
                    <Card.Subtitle
                      style={{ fontSize: "25px", fontWeight: 1000 }}
                    >
                      {" "}
                      Last Modified:{" "}
                    </Card.Subtitle>
                    <small className="text-muted">
                      <p>{favoriteVerbEntry.lastModified}</p>{" "}
                    </small>
                  </Card.Footer>

                  <div className="d-grid gap-2">
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeleteFavoriteVerb(favoriteVerbEntry.createdById);
                      }}
                    >
                      Delete Favorite Verb
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

export default FavoriteVerbCard;
