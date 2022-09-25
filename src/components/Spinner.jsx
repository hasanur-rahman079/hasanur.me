// import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: gray;
  text-align: center;
`;

function Loading() {
  return (
    <SpinnerStyles className="visually-hidden">
      <div>Loading...</div>
    </SpinnerStyles>
  );
}

export default Loading;
