import * as S from '../styles/ViewDetailSsul/ViewDetailSsulPageComponentStyle';

import { useState } from 'react';
import ComplainModal from '../components/viewDetailSsul/modal/ComplainModal';
import RemoveModal from '../components/viewDetailSsul/modal/RemoveModal';
import DetailSsulReview from '../components/viewDetailSsul/review/DetailSsulReview';
import DetailSsulContent from '../components/viewDetailSsul/centent/DetailSsulContent';

const ViewDetailSsulPage = () => {
  const [isRemoveModal, setIsRemoveModal] = useState<boolean>(false);
  const [isComplainModalOpen, setIsComplainModalOpen] =
    useState<boolean>(false); // 모달 상태 관리

  return (
    <>
      <S.DSDiv
        $isRemoveModal={isRemoveModal}
        $isComplainModalOpen={isComplainModalOpen}>
        {/*detail ssul div*/}
        <S.DSCDiv>
          {/*detail ssul content div*/}
          <DetailSsulContent setIsRemoveModal={setIsRemoveModal} />
          {/*content 내용*/}
          <DetailSsulReview setIsComplainModalOpen={setIsComplainModalOpen} />
          {/*content 밑 댓글*/}
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
