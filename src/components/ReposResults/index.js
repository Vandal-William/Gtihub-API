// == Composant
import Result from 'src/components/Result';
import PropTypes from 'prop-types';
import './style.scss';
import { Button, Segment } from 'semantic-ui-react';

function ReposResults({ data }) {
  return (
    <ul className="ReposResults">
      {data.map((result) => (
        <Result
          key={result.id}
          title={result.name}
          subtitle={result.language}
          description={result.description}
          image={result.owner.avatar_url}
          link={result.svn_url}
          auther={result.homepage}
        />
      ))}
      {data.lenght > 0 && <Segment> <Button> Voire plus </Button> </Segment>}
    </ul>
  );
}

ReposResults.propTypes = {
  data: PropTypes.array.isRequired,
};
// == Export
export default ReposResults;
