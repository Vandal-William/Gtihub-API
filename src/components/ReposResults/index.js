// == Composant
import Result from 'src/components/Result';

function ReposResults() {
  return (
    <ul className="ReposResults">
      <Result
        title="Mon Titre"
        subtitle="Mon sous-titre"
        description="Description"
        image="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
      />
    </ul>
  );
}

// == Export
export default ReposResults;
