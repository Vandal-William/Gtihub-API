// == Composant
import { Input, Form } from 'semantic-ui-react';
import './style.scss';

function SearchBar() {
  return (
    <Form className="form">
      <Form.Field>
        <Input fluid icon="search" placeholder="Search..." iconPosition="left" />
      </Form.Field>
    </Form>
  );
}

// == Export
export default SearchBar;
