import fetch from 'isomorphic-fetch'

export function find_or_create_user(response, userData){
    return function(dispatch){
      dispatch({ type: 'LOADING'})
      return fetch(`/api/users/${response.id}`)
      .then(resp => {
        if(resp.ok){
          return resp
        }else{
          throw Error("user not found")
        }
      })
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: 'USER_FOUND', user: user })
      })
      .catch(error => {
        fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: userData
        })
        .then(resp => resp.json())
        .then(user => {
          dispatch({ type: 'ADD_USER', user: user})
        })
      })
    }
  }

  export const logout = () => {
    return{
      type: 'LOG_OUT'
    }
  }
