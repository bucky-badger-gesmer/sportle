import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { PlayerIndexQuery } from "./graphql/globalTypes";
import { AutoComplete, Avatar, Input, Spin } from "antd";
import { useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [guess, setGuess] = useState();
  const { loading, data, error } = useQuery<PlayerIndexQuery>(GET_PLAYER_INDEX);

  if (error) throw error;

  const playerIndex = data?.nba?.playerIndex;

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          width: "100px",
          height: "100px",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const players = playerIndex?.length
    ? playerIndex?.map((player) => {
        return {
          label: (
            <>
              <Avatar
                size="large"
                src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player?.id}.png`}
              />{" "}
              {player?.firstName} {player?.lastName}
            </>
          ),
          value: `${player?.firstName} ${player?.lastName}`,
          foo: { ...player },
        };
      })
    : [];

  const randomPlayerIndex = Math.floor(
    Math.random() * (players.length - 1) + 1
  );
  console.log("randomPlayerIndex", randomPlayerIndex);
  console.log("randomPlayer", players[randomPlayerIndex]);
  return (
    <div className="App">
      {/* <Title level={2}>
        Guess a player out of the {players.length} players to ever play in the
        NBA!
      </Title> */}
      <AutoComplete
        options={players.filter((player) =>
          player.value.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        style={{ marginTop: 36 }}
        onSelect={(player) => setGuess(player)}
        onChange={(text) => {
          setSearchTerm(text);
        }}
      >
        <Input.Search
          allowClear
          size="large"
          placeholder="Guess a random NBA player"
          enterButton="Guess!"
          onSearch={() => {
            console.log("pressing guess...", guess);
          }}
          disabled={true}
        />
      </AutoComplete>
    </div>
  );
}

export default App;
