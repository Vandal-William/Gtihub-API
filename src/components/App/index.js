// == Composant
import { Header, Icon } from 'semantic-ui-react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Header className="app-header" as="h1" textAlign="center">
        <Icon name="github" /> GitHub
      </Header>
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

// == Export
export default App;
