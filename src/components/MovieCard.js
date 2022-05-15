import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.posterurl}
          style={{ maxHeight: 161, minHeight: 161 }}
        />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
        <span style={{ marginLeft: "70px" }}>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={movie.rating}
          />
        </span>
      </Card>
    </div>
  );
}

export default MovieCard;