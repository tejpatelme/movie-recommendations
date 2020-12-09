import React, { useState } from "react";
import "./styles.css";

var movieDB = {
  drama: [
    {
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
      rating: "9.5 / 10"
    },

    {
      title: "Good Will Hunting (1997)",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Robin Williams, Matt Damon, Ben Affleck",
      rating: "9.9 / 10"
    },

    {
      title: "Forrest Gump (1994)",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL__QL50.jpg",
      cast: "Tom Hanks, Robin Wright, Gary Sinise",
      rating: "9.7 / 10"
    },
    {
      title: "Dead Poets Society",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Robin Williams, Robert Sean Leonard, Ethan Hawke",
      rating: "8.5 / 10"
    }
  ],

  biography: [
    {
      title: "Catch Me If You Can",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Leonardo DiCaprio, Tom Hanks, Christopher Walken",
      rating: "9.5 / 10"
    },

    {
      title: "The Imitation Game",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Benedict Cumberbatch, Keira Knightley, Matthew Goode",
      rating: "8.3 / 10"
    },

    {
      title: "Lone Survivor",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Mark Wahlberg, Taylor Kitsch, Emile Hirsch",
      rating: "8.6 / 10"
    }
  ],

  mystery: [
    {
      title: "Shutter Island",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo",
      rating: "8.5 / 10"
    },

    {
      title: "The Girl with the Dragon Tattoo",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Daniel Craig, Rooney Mara, Christopher Plummer",
      rating: "9.0 / 10"
    },

    {
      title: "The Bourne Identity",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
      cast: "Franka Potente, Matt Damon, Chris Cooper",
      rating: "8.0 / 10"
    }
  ]
};

var genres = Object.keys(movieDB);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("drama");

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        🍿<span>My</span> Movie Recommendations🍿
      </h1>
      <div className="hr"></div>
      <h2>Click on any genre👇</h2>
      <div className="genreDiv">
        {genres.map((genre) => {
          return (
            <button key={genre} onClick={() => genreClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div className="hr"></div>
      <br />
      <div className="listDiv">
        <ul>
          {movieDB[selectedGenre].map((details) => (
            <li className="movieItem" key={details.title}>
              <div className="poster">
                <img alt="thumbnail" src={details.image} />
              </div>
              <div className="movieInfo">
                <div className="title">{details.title}</div>
                <div className="cast">{details.cast}</div>
                <div className="rating">{details.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
