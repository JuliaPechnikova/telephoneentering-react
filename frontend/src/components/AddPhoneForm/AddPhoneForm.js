import './AddPhoneForm.css';

const phoneCodes =  [
  {
    id: 7,
    name: '+7'
  },
  {
    id: 3,
    name: '+3',
  },
  {
    id: 4,
    name: '+4',
  }
]


function AddPhoneForm() {  
  return (
  <section className="addphoneform">
    <form className="addphoneform__form">
      <select className="addphoneform__selector">
        { phoneCodes.map((code) => 
          <option key={code.id} value={code.id}>{code.name}</option>) 
        }
      </select>
      <div className="addphoneform__container">
        <label htmlFor="search" className="search-form__search"></label>
        <input type="search" id="search" required minLength="3" maxLength="10" className="addphoneform__input"/>
      </div>
      <div className="addphoneform__container">
        <button type="submit" className="addphoneform__submit-button">Сохранить</button>
      </div>
    </form>
  </section>
  ); 
}

export default AddPhoneForm;