import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
};

export default TotalScore;

const Container = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 80px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
