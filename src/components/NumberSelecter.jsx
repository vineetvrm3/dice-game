import styled from "styled-components";
const array = [1, 2, 3, 4, 5, 6];

const NumberSelecter = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  return (
    <NumberSelectedContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((value, index) => (
          <Box
            isSelected={value === selectedNumber}
            key={index}
            onClick={() => {
              setSelectedNumber(value);
              setError("");
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select a Number</p>
    </NumberSelectedContainer>
  );
};

export default NumberSelecter;

const NumberSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  cursor: pointer;
`;
