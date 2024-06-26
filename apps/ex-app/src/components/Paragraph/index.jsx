import PropTypes from "prop-types";
import StyledParagraph from "./style";

function Paragraph({ children, elipsis, ...rest }) {
  return (
    <StyledParagraph {...rest} elipsis={elipsis} as="p">
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  elipsis: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
};

export default Paragraph;
