// == Composant

import { Segment } from 'semantic-ui-react';
import './style.scss';

function PageError() {
  return (
    <Segment className="error">
      <span className="error-number">404</span>
      <span className="error-message">Page Not Found</span>
    </Segment>
  );
}

// == Export
export default PageError;
