import { useEffect } from 'react';
import * as S from '../../../styles/ViewDetailSsul/modal/CopyUrlModalComponentStyle';

interface CopyProps {
  setOpenUrl: (value: boolean) => void;
}

// React.FC를 사용한 ComplainModal 정의
const CopyUrlModal: React.FC<CopyProps> = ({ setOpenUrl }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenUrl(false);
    }, 3000); // 3초 후 실행

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [setOpenUrl]);

  return (
    <>
      <S.Overlay>
        <S.Modal>
          <S.ModalText>해당 게시물의 주소가 복사되었습니다.</S.ModalText>
        </S.Modal>
      </S.Overlay>
    </>
  );
};

export default CopyUrlModal;
