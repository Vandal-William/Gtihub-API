// == Composant
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Message({ result }) {
  return (
    <Segment> La recherche a donné {result} résultats </Segment>
  );
}

Message.propTypes = {
  result: PropTypes.number.isRequired,
};
// == Export
export default Message;
