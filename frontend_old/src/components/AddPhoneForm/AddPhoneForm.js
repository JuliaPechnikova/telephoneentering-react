import './AddPhoneForm.css';
import React from 'react';
import { useFormWithValidation } from '../../utils/Validation.js';
import { connect } from 'react-redux';
import { createTelephone } from '../../redux/actions';

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

function AddPhoneForm(props) {  
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.createTelephone(values.telephone)
    // props.onUpdateCreateTelephone({
    //   value: values.telephone,
    // });
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
  <section className="addphoneform">
    <form className="addphoneform__form" onSubmit={handleSubmit} noValidate>
    <div className="addphoneform__forminput" >      
      <select className="addphoneform__selector">
        { phoneCodes.map((code) => 
          <option key={code.id} value={code.id}>{code.name}</option>) 
        }
      </select>
      <div className="addphoneform__container">
        <input type="text" name="telephone" id="telephone" value={values.telephone} required minLength="3" maxLength="10" className="addphoneform__input" onChange={handleChange}/>
      </div>
      <div className="addphoneform__container">
        <button type="submit" className="addphoneform__submit-button">Сохранить</button>
      </div>
    </div>
    {errors.telephone ? <span>{errors.telephone}</span> : <></>}
    </form>
  </section>
  ); 
}

const mapDispatchToProps = {
  createTelephone
}

export default connect(null, mapDispatchToProps)(AddPhoneForm);