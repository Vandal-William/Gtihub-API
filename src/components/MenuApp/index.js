// == Composant
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function MenuApp() {
  return (
    <Menu as="nav">
      <Menu.Item as={NavLink} to="/">
        Recherche
      </Menu.Item>
      <Menu.Item as={NavLink} to="/faq">
        FAQ
      </Menu.Item>
    </Menu>
  );
}
// == Export
export default MenuApp;
