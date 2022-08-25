// == Composant
import { Header, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import './style.scss';

function App() {
  const [queryValue, setQueyValue] = useState('');
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const setChangeValue = (value) => {
    setQueyValue(value);
  };

  const queryReposApi = async (value) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${value}`);
    setData(response.data.items);
    console.log(response.data.items);
    setResult(response.data.items.length);
  };

  return (
    <div className="app">
      <Header className="app-header" as="h1" textAlign="center">
        <Icon name="github" /> GitHub
      </Header>
      <SearchBar
        queryValue={queryValue}
        setChangeValue={setChangeValue}
        queryReposApi={queryReposApi}
      />
      <Message result={result} />
      <ReposResults data={data} />
    </div>
  );
}

// == Export
export default App;
