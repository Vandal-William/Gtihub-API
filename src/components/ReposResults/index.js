// == Composant
import Result from 'src/components/Result';
import PropTypes from 'prop-types';
import './style.scss';

function ReposResults({ data }) {
  return (
    <ul className="ReposResults">
      {data.map((result) => (
        <Result
          key={result.id}
          title={result.name}
          subtitle={result.language}
          description={result.description}
          image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          link={result.svn_url}
        />

      ))}
    </ul>
  );
}

ReposResults.propTypes = {
  data: PropTypes.array.isRequired,
};
// == Export
export default ReposResults;
