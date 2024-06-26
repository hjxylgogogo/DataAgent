import PropTypes from "prop-types";
import StyledInputText, { InputUnderline } from "./style";
import LabelContainer from "@/components/LabelContainer";

function InputText({ label, placeholder = "请输入内容" }) {
  const input = <InputUnderline type="text" placeholder={placeholder} />;
  return (
    <StyledInputText>
      {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
    </StyledInputText>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
