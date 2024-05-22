import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = (props) => {
  const { toggleGamePlay } = props;
  return (
    <Container>
      <img src="/images/dices.png" alt="dices" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  .content {
    h1 {
      font-size: 80px;
      white-space: nowrap;
    }
  }
`;
