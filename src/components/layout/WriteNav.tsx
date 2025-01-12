import styled from 'styled-components';

const WriteNav = () => {
  return (
    <>
      <WriteNavDiv>티 제작소</WriteNavDiv>
    </>
  );
};

export default WriteNav;

const WriteNavDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: var(--Green2);
  color: white;
  font: var(--headingLarge);
  justify-content: center;
  align-items: center;
`;
