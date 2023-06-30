import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickEditVerb from "./VerbModal";
import { GiFleurDeLys } from "react-icons/gi";

const VerbCard = (props) => {
  const navigate = useNavigate();

  const { verbEntry, urlEndPoint, setShouldRefresh, verbList } = props;
  console.log(verbEntry);

  const handleDeleteVerb = (id) => {
    setShouldRefresh(true);

    axios
      .delete(`${urlEndPoint}/verbs/delete-one/${id}`)

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


  useEffect(() => {
    setVerb(verbEntry.verb);
    setTense(verbEntry.tense);
    setJe(verbEntry.je);
    setTu(verbEntry.tu);
    setIl(verbEntry.il);
    setNous(verbEntry.nous);
    setVous(verbEntry.vous);
    setIls(verbEntry.ils);
    setCreatedBy(verbEntry.createdBy);
    setComments(verbEntry.comments);
  }, [verbList]);

  const handleFavoriteVerb = (id) => {
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
      
    };
    
    axios
      .post(`${urlEndPoint}/favoriteverbs/create-one`, req) //${id}
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
                  <QuickEditVerb
                    verbEntry={verbEntry}
                    verbList={verbList}
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
                    <small> {verbEntry.tense} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Je:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.je} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Tu:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.tu} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Il/Elle:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.il} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Nous:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.nous} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Vous:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.vous} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Ils/Elles:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.ils} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created by:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.createdBy} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Comments:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.comments} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created On:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.createdAt} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.createdById} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Last Updated By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {verbEntry.lastUpdatedById} </small>{" "}
                  </Card.Text>

                  <Card.Footer>
                    <Card.Subtitle
                      style={{ fontSize: "25px", fontWeight: 1000 }}
                    >
                      {" "}
                      Last Modified:{" "}
                    </Card.Subtitle>
                    <small className="text-muted">
                      <p>{verbEntry.lastModified}</p>{" "}
                    </small>
                  </Card.Footer>

                  <div className="d-grid gap-2">
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeleteVerb(verbEntry.createdById);
                      }}
                    >
                      Delete Verb
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => {
                        handleFavoriteVerb(verbEntry.createdById)
                      }}
                    >
                      Add To Favorite Verbs
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

export default VerbCard;
