import { gql, useQuery } from "@apollo/client";
import { PlayerIndexQuery } from "../graphql/globalTypes";
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

const NbaPlayers = () => {
  const { loading, data } = useQuery<PlayerIndexQuery>(GET_PLAYER_INDEX);

  if (loading) {
    return (
      <div
        // style={{
        //   position: "absolute",
        //   top: 0,
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   margin: "auto",
        // }}
        style={{
          marginTop: '40%',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }


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

  const playerIndex = data?.nba?.playerIndex || [];
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

  return (
    <Table dataSource={players} columns={columns} />
  );
};

export default NbaPlayers;