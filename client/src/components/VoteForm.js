import React from 'react';
import PropTypes from 'prop-types'

export const VoteForm = ({onHandleFormSubmit, name, address, city, onChangeText, formErrors, errorClass}) => {
  return(
    <form onSubmit={onHandleFormSubmit}>
      <div>Name: {formErrors.name} </div>
      <input
        name="name"
        type='text'
        value={name}
        onChange={onChangeText}
        className={`form-group ${errorClass(formErrors.name)}`}
      />
      <br/>
      <div>Address: {formErrors.address} </div>
      <input
        name='address'
        type='text'
        value={address}
        onChange={onChangeText}
        className={`form-group ${errorClass(formErrors.name)}`}
      />
      <br />
      <div>City: {formErrors.city}</div>
      <input
        name='city'
        type='text'
        value={city}
        onChange={onChangeText}
        className={`form-group ${errorClass(formErrors.name)}`}
      />
      <br />
      <div>State: </div>
      <select>
        <option
          name='new york'
          value='new york'>
            New York
        </option>
      </select>
      <br />
      <input
        type="submit"
        value='Submit'
      />
    </form>
  )
}

VoteForm.propTypes={
  onHandleFormSubmit: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  onChangeText: PropTypes.func
}
