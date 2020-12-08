import React from "react";
import "./styles.css";

var movieDB = {
  Drama: [
    {
      title: "The Shawshank Redemption",
      cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
      rating: 9.5 / 10
    },

    {
      title: "Good Will Hunting (1997)",
      cast: "Robin Williams, Matt Damon, Ben Affleck",
      rating: 9.9 / 10
    },

    {
      title: "Forrest Gump (1994)",
      cast: "Tom Hanks, Robin Wright, Gary Sinise",
      rating: 9.7 / 10
    }
  ],

  Biography: [
    {
      title: "Catch Me If You Can",
      cast: "Leonardo DiCaprio, Tom Hanks, Christopher Walken",
      rating: 9.5 / 10
    },

    {
      title: "The Imitation Game",
      cast: "Benedict Cumberbatch, Keira Knightley, Matthew Goode",
      rating: 8.3 / 10
    },

    {
      title: "Lone Survivor",
      cast: "Mark Wahlberg, Taylor Kitsch, Emile Hirsch",
      rating: 8.6 / 10
    }
  ],

  Mystery: [
    {
      title: "Shutter Island",
      cast: "Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo",
      rating: 8.5 / 10
    },

    {
      title: "The Girl with the Dragon Tattoo",
      cast: "Daniel Craig, Rooney Mara, Christopher Plummer",
      rating: 9.0 / 10
    },

    {
      title: "The Bourne Identity",
      cast: "Franka Potente, Matt Damon, Chris Cooper",
      rating: 8.0 / 10
    }
  ]
};

var genres = Object.keys(movieDB);

export default function App() {
  return (
    <div className="App">
      <h1>🎥My Movie Recommendations</h1>
      <h2>Click on any genre</h2>
      <div className="genreDiv">
        <ul>
          {genres.map((genre) => {
            return <li>{genre}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
