import React, { useEffect, useState } from 'react';
import * as S from '../../../styles/ViewDetailSsul/modal/ComplainModalComponentStyle';
import Close from '../../../assets/Images/Close.svg';
import Checkbox from './Checkbox';
import { postPostReport } from '../../../api/viewDetailSsul/viewDetailContent';
import { useNavigate } from 'react-router-dom';

interface ComplainModalProps {
  setOpenModal: (value: boolean) => void; //
  setAlreadyComplainModal: (value: boolean) => void;
  postId: number;
}

// React.FC를 사용한 ComplainModal 정의
const ReportPostModal: React.FC<ComplainModalProps> = ({
  setOpenModal,
  setAlreadyComplainModal,
  postId,
}) => {
  const [step, setStep] = useState(1);
  const [onConfirm, setOnConfirm] = useState(false);
  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({
    spam: false,
    abuse: false,
    inappropriate: false,
    misleading: false,
    copyright: false,
  });

  const navigate = useNavigate();

  const reasons = [
    { id: 'spam', label: '스팸 또는 광고' },
    { id: 'abuse', label: '욕설 또는 폭언' },
    { id: 'inappropriate', label: '올바르지 않거나 부적절한 내용' },
    { id: 'misleading', label: '허위 정보 및 오해를 유발하는 내용' },
    { id: 'copyright', label: '저작권 또는 개인정보 침해' },
  ];

  const handleCheckboxChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedStates((prevState) => ({
        ...prevState,
        [id]: event.target.checked,
      }));
    };

  const handleConfirmClick = () => {
    setStep(2); // 두 번째 모달로 이동
  };

  const handleCancelClick = () => {
    setOpenModal(false); // 모달 닫기
  };

  const handleSubmitClick = () => {
    if (onConfirm) setOpenModal(false);

    const fetchPostReport = async () => {
      try {
        await postPostReport(postId);
        navigate('/');
      } catch (error) {
        setAlreadyComplainModal(true);
        console.log('fetchPostReport 중 오류 발생', error);
        throw error;
      }
    };
    fetchPostReport();
  };

  useEffect(() => {
    const allChecked = Object.values(checkedStates).some((state) => state);
    setOnConfirm(allChecked);
  }, [checkedStates]);

  return (
    <>
      <S.Overlay>
        <S.Modal>
          {step === 1 ? (
            <>
              <S.CloseBtn src={Close} onClick={handleCancelClick} />
              <S.ModalText>해당 썰을 신고하시겠습니까?</S.ModalText>
              <S.ButtonDiv>
                <S.CancelButton onClick={handleCancelClick}>
                  취소
                </S.CancelButton>
                <S.ConfirmButton onClick={handleConfirmClick}>
                  확인
                </S.ConfirmButton>
              </S.ButtonDiv>
            </>
          ) : (
            <>
              <S.CloseBtn src={Close} onClick={handleCancelClick} />
              <S.ModalText>
                해당 썰을 신고하시는 이유를 선택해주세요.
              </S.ModalText>
              <S.ReasonList>
                {reasons.map((reason) => (
                  <Checkbox
                    key={reason.id}
                    id={reason.id}
                    label={reason.label}
                    checked={checkedStates[reason.id]}
                    handler={handleCheckboxChange(reason.id)}
                  />
                ))}
              </S.ReasonList>
              <S.ButtonDiv>
                <S.CancelButton onClick={handleCancelClick}>
                  취소
                </S.CancelButton>
                <S.ConfirmButton onClick={handleSubmitClick}>
                  확인
                </S.ConfirmButton>
              </S.ButtonDiv>
            </>
          )}
        </S.Modal>
      </S.Overlay>
    </>
  );
};

export default ReportPostModal;
