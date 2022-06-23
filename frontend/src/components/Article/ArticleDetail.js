
import React from "react";

import { useParams } from "react-router-dom";

import { Row, Col, Figure, ListGroup } from "react-bootstrap";

import { gql, useQuery } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";


const ARTICLE = gql`
 query Article($id: ID!) {
  article(id: $id) {
   data {
    id
    attributes {
     title
     content
     releasedAt
     categories {
      data {
       id
       attributes {
        name
       }
      }
     }
     image {
      data {
       attributes {
        url
       }
      }
     }
     users_permissions_user {
      data {
       attributes {
        username
        email
       }
      }
     }
    }
   }
  }
 }
`;


export default function Articles() {

 const { id } = useParams();

 const { loading, error, data } = useQuery(ARTICLE, { variables: { id: id } });

 if (loading) return <p>Probíhá načítání stránky...</p>;

 if (error) return <p>Došlo k chybě: {JSON.stringify(error)}</p>;

 const article = data.article.data;
 
 const releasedDate = new Date(article.attributes.releasedAt.split("-")).toLocaleDateString();
 return (
  <Row>
   
   <h2 className="text-primary bg-light p-3 m-3 text-center">
    {article.attributes.title}
   </h2>
  
   <p className="small text-center text-secondary mb-4">
    Autor:{" "}
      <b>
     {article.attributes.users_permissions_user.data.attributes.username}
      </b>{" "}
    ({article.attributes.users_permissions_user.data.attributes.email}),
    publikováno: <b>{releasedDate}</b>
   </p>
   <Col>
    <ReactMarkdown
     children={article.attributes.content}
     remarkPlugins={[remarkGfm]}
    />
   </Col>
   <Col>
    {article.attributes.image.data && (
     <Figure>
      <Figure.Image
       alt={article.attributes.title}
       src={`${process.env.REACT_APP_BACKEND_URL}${article.attributes.image.data.attributes.url}`}
       rounded
      />
      <Figure.Caption>Picture: {article.attributes.title}</Figure.Caption>
     </Figure>
    )}
    <h4 className="bg-primary text-white p-3">Components</h4>
    <ListGroup variant="flush">
     { article.attributes.categories.data.map(category => (
       <ListGroup.Item>{category.attributes.name}</ListGroup.Item>
      ))
     }
    </ListGroup>
   </Col>
  </Row>
 );
}