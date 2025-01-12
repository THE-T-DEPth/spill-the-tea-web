import { useEffect, useState } from 'react';
import styled from 'styled-components';

const YellowNav = () => {
  const [text, setText] = useState<string>('');

  const isWritePage = location.pathname === '/write';
  const isVeiwDetailSsulPage = location.pathname === '/viewDetailSsul';

  useEffect(() => {
    if (isWritePage) setText('나만의 뜨거운 티를 만들어보세요🥵');
    else if (isVeiwDetailSsulPage) setText('오늘도 썰 한 잔, 짤 한 스푼 🍵');
  }, []);

  return <>{text ? <YellowWholeDiv>"{text}"</YellowWholeDiv> : <></>}</>;
};

export default YellowNav;

const YellowWholeDiv = styled.div`
  display: flex;
  background-color: #fffce5;
  width: 100%;
  height: 42px;
  justify-content: center;
  align-items: center;
  font: var(--labelSmall);
  color: black;
  font-size: 16px;
  border-top: 1px solid var(--G3);
  border-bottom: 1px solid var(--G3);
`;
