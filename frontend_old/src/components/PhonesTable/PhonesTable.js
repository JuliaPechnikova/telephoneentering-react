import './PhonesTable.css';
import {connect} from 'react-redux';

function PhonesTable({syncPhones}) {  
  return (
  <section className="phonetable">
    <h2 className="phonetable__header">Cписок добавленных номеров:</h2>
    <ul className="phonetable__list">
    { syncPhones.length === 0 ? <p>Список номеров пока пуст</p> : syncPhones.map((number) => 
        <li key={number.id}>{number.value}</li>) }
    </ul>
  </section>
  ); 
}

const mapStateToProps = state => {
  return {
    syncPhones: state.telephones.telephones
  }
}

export default connect(mapStateToProps, null)(PhonesTable);