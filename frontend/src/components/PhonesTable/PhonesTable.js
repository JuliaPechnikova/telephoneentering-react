import './PhonesTable.css';

const phoneNumber =  [
  {
    id: 1,
    name: '+35345345',
  },
  {
    id: 2,
    name: '+76543',
  },
  {
    id: 5,
    name: '+8911083045',
  }
]


function PhonesTable() {  
  return (
  <section className="phonetable">
    <h2 className="phonetable__header">Cписок добавленных номеров:</h2>
    <ul className="phonetable__list">
    { phoneNumber.map((number) => 
        <li key={number.id}>{number.name}</li>) }
    </ul>
  </section>
  ); 
}

export default PhonesTable;