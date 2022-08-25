// == Composant
import { Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

function SearchBar({ queryValue, setChangeValue }) {
  const handleChange = (event) => {
    setChangeValue(event.target.value);
  };
  return (
    <Form className="form">
      <Form.Field>
        <Input
          fluid
          icon="search"
          placeholder="Search..."
          iconPosition="left"
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
};
// == Export
export default SearchBar;
