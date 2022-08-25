// == Composant
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Result({
  title,
  subtitle,
  description,
  image,
}) {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{subtitle}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Result.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
// == Export
export default Result;
