import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { Route, Redirect } from "react-router-dom";



const Login = ({find_or_create_user, location, loginStatus}) =>{

  const responseFacebook = response => {
    const userData = JSON.stringify({id: response.id, name: response.name, email: response.email, imageUrl:response.picture.data.url })
    if(response){
      find_or_create_user(response, userData)
    }else{
      console.log("not signed in")
    }
  }
  return (

  <Route
    exact
    path='/login'
    render={() => (
      loginStatus === 'connected' ?
      (<Redirect to={{ pathname:'/reviews' }}/>)
      :
        (<div className='homepage-container'>
          <div className='homepage-content-image'>
            <div className='homepage-content-container'>
              <div className='homepage-content'>
                <div className='homepage-content-image'>
                  <FacebookLogin
                    appId="2117404221846949"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    version="3.1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    )}
    />
  )
}

export default Login
