import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      id: id,
    },
  });
  if (loading) {
    return <h1>Fetching movie...</h1>;
  }
  return <div>{data.movie.title}</div>;
}
