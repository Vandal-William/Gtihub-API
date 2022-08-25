// == Composant
import Result from 'src/components/Result';
import PropTypes from 'prop-types';

function ReposResults({ data }) {
  return (
    <ul className="ReposResults">
      {data.map((result) => (
        <Result
          key={result.id}
          title={result.title}
          subtitle={result.subtitle}
          description={result.description}
          image={result.image}
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
