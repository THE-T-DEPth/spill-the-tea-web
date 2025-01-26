import * as S from '../styles/ViewDetailSsul/ViewDetailSsulPageComponentStyle';

import { useState } from 'react';
import ComplainModal from '../components/viewDetailSsul/modal/ComplainModal';
import RemoveModal from '../components/viewDetailSsul/modal/RemoveModal';
import DetailSsulReview from '../components/viewDetailSsul/review/DetailSsulReview';
import DetailSsulContent from '../components/viewDetailSsul/centent/DetailSsulContent';
import { useParams } from 'react-router-dom';
import EditModal from '../components/viewDetailSsul/modal/EditModal';
import ReportPostModal from '../components/viewDetailSsul/modal/ReportPostModal';
import BlockUserModal from '../components/viewDetailSsul/modal/BlockUserModal';
import AlreadyComplainModal from '../components/viewDetailSsul/modal/AlreadyComplainModal';

const ViewDetailSsulPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [commentId, setCommentId] = useState<number>(0);
  const [memberId, setMemberId] = useState<number>(0);
  const [isRemoveModal, setIsRemoveModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isReportModal, setIsReportModal] = useState<boolean>(false);
  const [isBlockModal, setIsBlockModal] = useState<boolean>(false);
  const [isComplainModalOpen, setIsComplainModalOpen] =
    useState<boolean>(false);
  const [isAlreadyComaplainModalOpen, setiIsAlreadyComaplainModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <S.DSDiv
        $isRemoveModal={isRemoveModal}
        $isComplainModalOpen={isComplainModalOpen}>
        {/*detail ssul div*/}
        <S.DSCDiv>
          {/*detail ssul content div*/}
          <DetailSsulContent
            setIsRemoveModal={setIsRemoveModal}
            setIsEditModal={setIsEditModal}
            setIsReportModal={setIsReportModal}
            setIsBlockModal={setIsBlockModal}
            postId={Number(postId)}
            setMemberId={setMemberId}
          />
          {/*content 내용*/}
          <DetailSsulReview
            setIsComplainModalOpen={setIsComplainModalOpen}
            postId={Number(Number(postId))}
            setCommentId={setCommentId}
          />
          {/*content 밑 댓글*/}
        </S.DSCDiv>
      </S.DSDiv>
      {isComplainModalOpen && (
        <ComplainModal
          setAlreadyComplainModal={setiIsAlreadyComaplainModalOpen}
          setComplainModal={setIsComplainModalOpen}
          commentId={commentId}
        />
      )}
      {isEditModal && (
        <EditModal setOpenModal={setIsEditModal} postId={Number(postId)} />
      )}
      {isRemoveModal && (
        <RemoveModal setOpenModal={setIsRemoveModal} postId={Number(postId)} />
      )}
      {isReportModal && (
        <ReportPostModal
          setAlreadyComplainModal={setiIsAlreadyComaplainModalOpen}
          setOpenModal={setIsReportModal}
          postId={Number(postId)}
        />
      )}
      {isBlockModal && (
        <BlockUserModal setOpenModal={setIsBlockModal} memberId={memberId} />
      )}
      {isAlreadyComaplainModalOpen && (
        <AlreadyComplainModal setOpenModal={setiIsAlreadyComaplainModalOpen} />
      )}
    </>
  );
};

export default ViewDetailSsulPage;
