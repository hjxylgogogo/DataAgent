import PropTypes from "prop-types";
import StyledSeperator from "./style";

function Seperator({
  children,
  ...rest
}) {
  return (
    <StyledSeperator {...rest}>
     {children}
    </StyledSeperator>
  );
}

Seperator.propTypes = {
 children:PropTypes.any
};

export default Seperator;
