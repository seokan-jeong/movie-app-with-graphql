import { useApolloClient, gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          query allMovies {
            movies {
              title
            }
          }
        `,
      })
      .then((result) => setMovies(result.data.movies));
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.title}>{movie.title}</li>
      ))}
    </div>
  );
}
