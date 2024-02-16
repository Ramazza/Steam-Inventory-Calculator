import './App.css';
import React, {useState} from 'react';
import FirstPage from './components/first page/first_page';
import MainPage from './components/main page/main_page';


function App() {

  const [newPage, setNewPage] = useState(true);

  const calcular = () => {
    setNewPage(!newPage);
  }

  return (
    <>
      <div>
        {newPage ? <FirstPage onButtonClick={calcular}/> : <MainPage />}
      </div>
    </>
  );
}

export default App;
