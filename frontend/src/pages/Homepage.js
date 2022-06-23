import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { CategoriesList } from "../components/Category/CategoriesList";
import { BlockHeading } from "../components/BlockHeading";
import { HOMEPAGE } from "./../utils/queries";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Homepage() {
  const { loading, error, data } = useQuery(HOMEPAGE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const homepage = data.homepage.data.attributes;

  return (
    <Container fluid>
      <Row xs={1} sm={1} md={2} lg={2}>
        <Col>
          <BlockHeading title="Components" />
          <CategoriesList />
        </Col>
        <Col>
          <BlockHeading title="What is this page about?" />
          <ReactMarkdown>{homepage.info}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}
