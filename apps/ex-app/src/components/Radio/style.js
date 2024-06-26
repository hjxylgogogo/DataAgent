import styled from "styled-components";
const StyledRadio = styled.label`
  position: relative;
  padding-left: 22px;
  cursor: pointer;
  display: inline-block;
  line-height: 16px;
  font-size: ${({ theme }) => theme.normal};
`;
const Circle = styled.span`
  position: absolute;
  line-height: 16px;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  left: 0;
  top: 0;
  &::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    position: absolute;
    left: 3.5px;
    top: 3px;
    opacity: 0;
    transform: scale(0);
    transition: 0.2s ease;


  }
`;
const RadioButton = styled.input.attrs({ type: "radio" })`
//原生的单选按钮设置为不可见。
  width: 0;
  height: 0;
  opacity: 0;
  &:checked + ${Circle}::after {
    opacity: 1;
    transform: scale(1);
  }
  &:not(:checked)+${Circle}::after{
    opacity: 0;
    transform: scale(0);
  }
`;
const StyledRadioGroup = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 24px;
  }
`;

export default StyledRadio;
export { Circle, RadioButton, StyledRadioGroup };
