
import React from "react";

import { Container, Row, Col, Alert, Figure, Button } from "react-bootstrap";

import { gql, useQuery } from "@apollo/client";


const ARTICLES = gql`
 query Articles {
  articles {
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
        icon {
         data {
          attributes {
           url
          }
         }
        }
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
    }
   }
  }
 }
`;


export const ArticlesGrid = () => {


 const { loading, error, data } = useQuery(ARTICLES);

 if (loading) return <p>Probíhá načítání stránky...</p>;

 if (error) return (
  <Container>
   <Alert variant="danger">Došlo k chybě: {JSON.stringify(error)}</Alert>
  </Container>
 );

 if (data.articles.data.length > 0)
  return (
   <Container fluid>
    <Row sm={1} md={2} lg={3}>

     {data.articles.data.map((article) => (

      <Col key={article.id}>
       <div className="border p-2 m-2">

        <h3>{article.attributes.title}</h3>

        {article.attributes.image.data && (
         <Figure>

          <Figure.Image
           alt={article.attributes.title}
           src={`${process.env.REACT_APP_BACKEND_URL}${article.attributes.image.data.attributes.url}`}
           rounded
          />
          <Figure.Caption>
            Picture: {article.attributes.title}
          </Figure.Caption>
         </Figure>
        )}

        {!article.attributes.image.data && (
         <Figure>

          <Figure.Image
           alt={article.attributes.title}
           src="/skola-logo.png"
           rounded
          />
          <Figure.Caption>Picture: Not available</Figure.Caption>
         </Figure>
        )}

        <p>{article.attributes.content.substring(0, 100)}...</p>

        <Button
         variant="outline-primary"
         href={`/articles/${article.id}`}
        >
         Podrobnosti
        </Button>
       </div>
      </Col>
     ))}
    </Row>
   </Container>
  );
   else
  return (
   <Container>
    <Alert variant="warning">Nebyl nalezen žádný článek</Alert>
   </Container>
  );
};