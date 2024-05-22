import TotalScore from "./TotalScore";
import NumberSelecter from "./NumberSelecter";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRule, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    setCurrentDice(randomNumber);

    if (selectedNumber === currentDice) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(null);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelecter
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        generateRandomNumber={generateRandomNumber}
      />
      <div className="buttons">
        <OutlineButton
          onClick={() => {
            setScore(0);
          }}
        >
          Reset
        </OutlineButton>
        <Button
          onClick={() => {
            setShowRules((prev) => !prev);
          }}
        >
          {showRule ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      {showRule && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 20px;
  }
`;
