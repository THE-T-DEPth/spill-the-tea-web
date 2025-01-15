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

const ViewDetailSsulPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [commentId, setCommentId] = useState<number>(0);
  const [blcokEmail, setBlockEmail] = useState<string>('');
  const [isRemoveModal, setIsRemoveModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isReportModal, setIsReportModal] = useState<boolean>(false);
  const [isBlockModal, setIsBlockModal] = useState<boolean>(false);
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
          <DetailSsulContent
            setIsRemoveModal={setIsRemoveModal}
            setIsEditModal={setIsEditModal}
            setIsReportModal={setIsReportModal}
            setIsBlockModal={setIsBlockModal}
            postId={Number(postId)}
            setBlockEmail={setBlockEmail}
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
          setOpenModal={setIsReportModal}
          postId={Number(postId)}
        />
      )}
      {isBlockModal && (
        <BlockUserModal
          setOpenModal={setIsBlockModal}
          postId={Number(postId)}
          blockEmail={blcokEmail}
        />
      )}
      {/* 모달 렌더링 */}
    </>
  );
};

export default ViewDetailSsulPage;
