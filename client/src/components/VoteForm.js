import React from 'react';

export const VoteForm = ({onHandleFormSubmit}) => {
  return(
    <form onSubmit={onHandleFormSubmit}>
      <div>Name: </div>
      <input name="name" type='text' value/>
      <br/>
      <div>Address: </div>
      <input name='address' type='text'/>
      <br />
      <div>City: </div>
      <input name='city' type='text'/>
      <br />
      <div>State: </div>
      <select>
        <option name='new york' value='new york'>New York</option>
      </select>
      <br />
      <input type="submit" value='Submit'/>
    </form>
  )
}

VoteForm.propTypes={

}
