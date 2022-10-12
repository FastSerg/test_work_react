export const FormErrors = ({formErrors}) =>
  <div className=''>
    {Object.keys(formErrors).map((fieldName, i) => {
      console.log(formErrors)
      if(formErrors[fieldName].length > 0) {
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }

    })}
  </div>