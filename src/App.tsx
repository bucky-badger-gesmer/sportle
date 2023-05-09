import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { PlayerIndexQuery } from "./graphql/globalTypes";
import { Spin } from "antd";

const GET_PLAYER_INDEX = gql`
  query PlayerIndex {
    nba {
      playerIndex {
        id
        lastName
        firstName
        playerSlug
        team {
          id
          slug
          city
          name
          abbreviation
        }
        jerseyNumber
        position
        height
        weight
        college
        country
        draft {
          year
          round
          pick
        }
        active
        headlineStats {
          points
          rebounds
          assists
          timeFrame
        }
        career {
          fromYear
          toYear
        }
      }
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery<PlayerIndexQuery>(GET_PLAYER_INDEX);

  if (error) throw error;

  const playerIndex = data?.nba?.playerIndex;

  if (loading) {
    return (
      <>
        <Spin size="large" />
      </>
    );
  }

  return (
    <div className="App">
      <h1>There have been {playerIndex?.length} players to play in the NBA!</h1>

      {playerIndex?.map((player, i) => {
        return (
          <ul>
            <li key={i}>
              {player?.firstName} {player?.lastName}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
