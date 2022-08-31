// == Composant
import Result from 'src/components/Result';
import PropTypes from 'prop-types';
import './style.scss';
import { Button, Segment } from 'semantic-ui-react';

function ReposResults({ data, isLoading, loadMore }) {
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
      {data.length > 0 && (
        <Segment textAlign="center">
          <Button loading={isLoading} onClick={loadMore}> Voir plus de résultats </Button>
        </Segment>
      )}
    </ul>
  );
}

ReposResults.propTypes = {
  data: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
// == Export
export default ReposResults;
