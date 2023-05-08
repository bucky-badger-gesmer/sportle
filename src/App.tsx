import './App.css';
import { useQuery, gql } from "@apollo/client";

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
  const { loading, data } = useQuery(GET_PLAYER_INDEX);

  console.log('poop', data)

  if (loading) {
    return (<>loading...</>)
  }

  return (
    <div className="App">
      <h1>There have been {data.nba.playerIndex.length} players to play in the NBA!</h1>
    </div>
  );
}

export default App;
