import * as S from '../../../styles/ViewDetailSsul/modal/CheckboxComponentStyle';

interface Input {
  id: string;
  label: string;
  checked: boolean;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Input> = ({ id, label, checked, handler }) => {
  return (
    <S.CheckboxWrapper>
      <S.CheckboxStyle id={id} name={id} checked={checked} onChange={handler} />
      <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>
    </S.CheckboxWrapper>
  );
};

export default Checkbox;
