import * as S from '../styles/ViewDetailSsul/ViewDetailSsulPageComponentStyle';

import { useEffect, useState } from 'react';
import ComplainModal from '../components/viewDetailSsul/ComplainModal';
import RemoveModal from '../components/viewDetailSsul/RemoveModal';
import DetailSsulReview from '../components/viewDetailSsul/DetailSsulReview';
import DetailSsulContent from '../components/viewDetailSsul/DetailSsulContent';

const ViewDetailSsulPage = () => {
  const [isRemoveModal, setIsRemoveModal] = useState<boolean>(false);
  const [isComplainModalOpen, setIsComplainModalOpen] =
    useState<boolean>(false); // 모달 상태 관리

  useEffect(() => {
    if (!isRemoveModal && !isComplainModalOpen)
      document.body.style.overflow = 'unset';
  }, [isRemoveModal, isComplainModalOpen]);

  return (
    <>
      <S.DSDiv>
        {/*detail ssul div*/}
        <S.DSCDiv>
          {/*detail ssul content div*/}
          <DetailSsulContent setIsRemoveModal={setIsRemoveModal} />
          <DetailSsulReview setIsComplainModalOpen={setIsComplainModalOpen} />
        </S.DSCDiv>
      </S.DSDiv>
      {isComplainModalOpen && (
        <ComplainModal setComplainModal={setIsComplainModalOpen} />
      )}
      {isRemoveModal && <RemoveModal setOpenModal={setIsRemoveModal} />}
      {/* 모달 렌더링 */}
    </>
  );
};

export default ViewDetailSsulPage;
