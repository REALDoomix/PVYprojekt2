import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ClickLikes } from "./ClickLikes";
import { ClickDislikes } from "./ClickDislikes";

export const ArticleCard = (props) => {
  return (
    <Card>
      <Card.Header as="h5">
        {props.categories.map((category) => (
          <Link key={category.id} to={"/categories/" + category.id}>
            {category.attributes.icon && (
              <Image
                src={`http://localhost:1337${category.attributes.icon.data.attributes.url}`}
                style={{
                  height: "40px",
                  margin: "3px",
                  backgroundColor: "#888",
                  borderRadius: "20px",
                }}
                title={category.attributes.name}
              />
            )}
          </Link>
        ))}
      </Card.Header>
      <Card.Img variant="top" src={`http://localhost:1337${props.imageURL}`} />
      <Card.Body>
        <Card.Title>
          <Link to={`/articles/${props.id}`}>{props.title}</Link>
        </Card.Title>
        <Card.Text>{props.content.substring(0, 150)}...</Card.Text>
        <Card.Footer className="text-muted">
          {props.releasedAt} |{" "}
          <ClickLikes
            icon={solid("thumbs-up")}
            id={props.id}
            initial={props.likes}
          />{" "}
          <ClickDislikes
            icon={solid("thumbs-down")}
            id={props.id}
            initial={props.dislikes}
          />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
