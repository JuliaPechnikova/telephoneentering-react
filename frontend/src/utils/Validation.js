import React, { useCallback } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);  

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});

    if (name === 'telephone') {
      const regex = /^[0-9]{3,10}$/;
      if (!regex.test(value)) {
        setIsValid(false);
        setErrors({...errors, [name]: 'Поле должно содержать номер длиной от 3 до 10 цифр' })}
      else {
        setIsValid(target.closest('form').checkValidity());
        setErrors({...errors, [name]: '' });
      }
    }
    else {
      setIsValid(target.closest('form').checkValidity());
      setErrors({...errors, [name]: target.validationMessage });
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}