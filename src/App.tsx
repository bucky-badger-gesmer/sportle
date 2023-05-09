import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { PlayerIndexQuery } from "./graphql/globalTypes";
import { Spin, Table } from "antd";

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

  const players = playerIndex?.length
    ? playerIndex?.map((player) => {
        return {
          id: player?.id,
          firstName: player?.firstName,
          lastName: player?.lastName,
          position: player?.position,
          jerseyNumber: player?.jerseyNumber,
        };
      })
    : [];

  const columns = [
    {
      title: "Player ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Jersey Number",
      dataIndex: "jerseyNumber",
      key: "jerseyNumber",
    },
  ];

  return (
    <div className="App">
      <Table dataSource={players} columns={columns} />
    </div>
  );
}

export default App;
