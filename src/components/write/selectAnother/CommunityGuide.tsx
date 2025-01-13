import * as S from '../../../styles/Write/CommunityGuideComponentStyle';
import ReactMarkdown from 'react-markdown';

const CommunityGuide = () => {
  const commynityGuide = `스필더티는 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해
                커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 
                위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수
                있습니다.\n\n ※ 정치·사회 관련 행위 금지\n- 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와
                관련된 행위 \n- 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념,
                가치관을 드러내는 행위\n- 성별, 종교, 인종, 출신, 지역, 직업, 이념 등
                사회적 이슈에 대한 언급 혹은 이와 관련한 행위\n\n※ 홍보 및 판매 관련 행위 금지\n- 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로
                영향을 줄 수 있는 게시물 작성 행위\n- 위와 관련된 것으로 의심되거나
                예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위\n\n※ 불법촬영물 유통 금지\n- 불법촬영물을 게재할 경우 전기통신사업법에 따라 삭제 조치 및
                서비스 이용이 영구적으로 제한될 수 있으며 관련 법률에 따라 처벌받을
                수 있습니다.\n\n※ 그 밖의 규칙 위반\n- 타인의 권리를 침해하거나 불쾌감을 주는 행위\n- 범죄, 불법 행위 등 법령을 위반하는 행위\n- 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위\n- 음란물, 성적 수치심을 유발하는 행위\n- 스포일러, 공포, 속임, 놀라게 하는 행위`;
  return (
    <>
      <S.CommunityGuide>
        <ReactMarkdown>{commynityGuide}</ReactMarkdown>
      </S.CommunityGuide>
    </>
  );
};

export default CommunityGuide;
