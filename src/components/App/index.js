// == Composant
import { Header, Icon } from 'semantic-ui-react';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import './style.scss';
import { useState } from 'react';

function App() {
  const [queryValue, setQueyValue] = useState('');
  const [result, setResult] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      title: 'DataTitre',
      subtitle: 'DataSoutitre',
      description: 'DataDescription',
      image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    },

    {
      id: 2,
      title: 'DataTitre2',
      subtitle: 'DataSoutitre2',
      description: 'DataDescription2',
      image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    },
  ]);

  const setChangeValue = (value) => {
    setQueyValue(value);
  };

  return (
    <div className="app">
      <Header className="app-header" as="h1" textAlign="center">
        <Icon name="github" /> GitHub
      </Header>
      <SearchBar queryValue={queryValue} setChangeValue={setChangeValue} />
      <Message result={result} />
      <ReposResults data={data} />
    </div>
  );
}

// == Export
export default App;
