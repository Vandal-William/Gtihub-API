// == Composant
import { Input, Form, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

function SearchBar({ queryValue, setChangeValue, queryReposApi }) {
  const handleChange = (event) => {
    setChangeValue(event.target.value);
  };
  const handleSubmit = () => {
    queryReposApi(queryValue);
  };
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Field>
        <Input
          fluid
          label={{ as: 'a', tag: false, content: 'Recherche', basic: true }}
          placeholder="Search..."
          value={queryValue}
          onChange={handleChange}
        >
        </Input>
      </Form.Field>
    </Form>
  );
}

SearchBar.propTypes = {
  queryValue: PropTypes.string.isRequired,
  setChangeValue: PropTypes.func.isRequired,
  queryReposApi: PropTypes.func.isRequired,
};
// == Export
export default SearchBar;
