// == Composant
import { Message as Msg } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Message({ result, isError }) {
  return (
    <Msg negative={isError}> {result} </Msg>
  );
}

Message.propTypes = {
  result: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};
// == Export
export default Message;
