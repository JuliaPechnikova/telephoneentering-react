import PhoneForm from '../PhoneForm/PhoneForm';
import PhoneTable from '../PhoneTable/PhoneTable';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <PhoneForm/>
      </div>
      <div>
        <h2 className="app__tablename">Таблица номеров</h2>
        <PhoneTable/>
      </div>
    </div>
  );
}

export default App;
