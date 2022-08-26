// == Composant
import { Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

function SearchBar({
  queryValue,
  setChangeValue,
  queryReposApi,
  isLoading,
}) {
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
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          loading={isLoading}
          value={queryValue}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}

SearchBar.propTypes = {
  queryValue: PropTypes.string.isRequired,
  setChangeValue: PropTypes.func.isRequired,
  queryReposApi: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
// == Export
export default SearchBar;
