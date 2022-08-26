// == Composant
import { Header, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import SearchBar from 'src/components/SearchBar';
import MenuApp from 'src/components/MenuApp';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Faq from 'src/components/Faq';
import PageError from 'src/components/PageError';
import './style.scss';

function App() {
  const [queryValue, setQueyValue] = useState('');
  const [result, setResult] = useState('Veuillez faire une recherche');
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const setChangeValue = (value) => {
    setQueyValue(value);
  };

  const queryReposApi = async (value) => {
    try {
      setError(false);
      setResult('Patientez...');
      setLoading(true);
      const response = await axios.get(`https://api.github.com/search/repositories?q=${value}
      &sort=stars&order=desc&page=1&per_page=9`);
      setData(response.data.items);
      setResult(`${response.data.total_count} Résultats`);
      setLoading(false);
    }
    catch (error) {
      setError(true);
      setResult('Recherche incorrecte');
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header className="app-header" as="h1" textAlign="center">
        <Icon name="github" /> GitHub
      </Header>
      <MenuApp />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <SearchBar
                queryValue={queryValue}
                setChangeValue={setChangeValue}
                queryReposApi={queryReposApi}
                isLoading={isLoading}
              />
              <Message result={result} isError={isError} />
              <ReposResults data={data} />
            </>
        )}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
