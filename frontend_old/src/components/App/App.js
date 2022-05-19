import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import telephoneApi from '../../utils/TelephoneApi';

import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const {
  badRequestCode,
  conflictCode,
  forbiddenCode,
  notFoundCode,
  unathorizedCode
} = require('../../utils/error-codes');

function App() {

  const [telephones, setTelephones] = React.useState([]);
  const [blockForm, setBlockForm] = React.useState(false);
  const [telephone, setTelephone] = React.useState(null);
  const [apiError, setApiError] = React.useState("");

  React.useEffect(() => {
    handleListUpdate();
  }, [])

  function handleListUpdate() {
    telephoneApi.getTelephones()
    .then((telephones) => {
      setTelephones(telephones);
    })
    .catch( err => { console.log(`Ошибка инициализации списка телефонов: ${err}`) });
  }

  function handleCreateTelephone() {
    setBlockForm(true);
    telephoneApi.createTelephone(telephone)
    .then((res) => {
      if(res){
        setApiError("");
      }
    })
    .catch(err => {
      if (err === conflictCode){
        setApiError("Данный номер уже существует в списке");
      } else if (err === badRequestCode) {
        setApiError("Переданы некорретные данные");
      }
      else {
        setApiError("Внутренняя ошибка сервера");
      }
    })
    .finally(() => setBlockForm(false));
  }
  
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />        
    </div>
  );
}

export default App;
