import styled from "styled-components";

const RollDice = ({ currentDice, generateRandomNumber }) => {
  return (
    <DiceContainer>
      <div>
        <button
          className="dice"
          onClick={() => {
            generateRandomNumber(1, 7);
          }}
        >
          <img
            src={`/images/dice/dice_${currentDice}.png`}
            alt={`dice ${currentDice}`}
          />
        </button>
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  p {
    font-size: 24px;
  }
`;
