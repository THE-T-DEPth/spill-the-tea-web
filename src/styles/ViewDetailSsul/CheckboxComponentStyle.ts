import styled from 'styled-components';
import Check from '../../assets/images/Check.svg';
import NonCheck from '../../assets/images/NonCheck.svg';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxStyle = styled.input.attrs({ type: 'checkbox' })`
  width: 30px;
  height: 30px;
  appearance: none;
  cursor: pointer;
  background-image: url(${NonCheck});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &:checked {
    background-image: url(${Check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-color: transparent;
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font: var(--labelLarge);
  margin-left: 10px;
`;
