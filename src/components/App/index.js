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
  const [page, setPage] = useState(1);

  const setChangeValue = (value) => {
    setQueyValue(value);
  };

  const queryReposApi = async (value) => {
    try {
      setPage(1);
      setError(false);
      setResult('Patientez...');
      setLoading(true);
      const response = await axios.get(`https://api.github.com/search/repositories?q=${value}
      &sort=stars&order=desc&page=1&per_page=9`);
      setPage(2);
      setData(response.data.items);
      if (response.data.total_count > 1) {
        setResult(`${response.data.total_count} résultats`);
      }
      else {
        setResult(`${response.data.total_count} résultat`);
      }
    }
    catch (error) {
      setError(true);
      setResult('Recherche incorrecte');
    }
    finally {
      setLoading(false);
    }
  };

  const loadMore = async (value) => {
    try {
      setError(false);
      setLoading(true);
      setResult('Patientez...');
      const response = await axios.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc&page=${page}&per_page=9`);
      setPage(page + 1);
      // plus dépots c'est tous les dépots déjà chargés + ceux de la nouvelle page
      setData([
        ...data,
        ...response.data.items,
      ]);
      if (response.data.total_count > 1) {
        setResult(`${response.data.total_count} résultats`);
      }
      else {
        setResult(`${response.data.total_count} résultat`);
      }
    }
    catch (error) {
      setResult('Recherche incorrecte');
      setError(true);
    }
    finally {
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
              <ReposResults data={data} isLoading={isLoading} loadMore={loadMore} />
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
