// == Composant
import { Card, Image } from 'semantic-ui-react';

function Result() {
  return (
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Daniel</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

// == Export
export default Result;
