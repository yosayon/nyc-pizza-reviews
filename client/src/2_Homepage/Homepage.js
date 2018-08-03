import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import oneBiteLogo from './images/one-bite.png'
import suggestion from './images/suggestion.png'
import forumImage from './images/forum-img.png'
import socialMedia from './images/socialmedia.png'
import listPic from './images/list-pic.png'
import FacebookLogin from 'react-facebook-login';



export default class Homepage extends Component{

  responseFacebook = response => {
    const userData = JSON.stringify({id: response.id, name: response.name, email: response.email, imageUrl: response.picture.data.url })
    if(response){
      this.props.find_or_create_user(response, userData)
    }else{
      console.log("not signed in")
    }
  }


  render(){
    return(
      <div className='homepage-container'>
        <div className='one-bite-message'>ONE BITE EVERYBODY KNOWS THE RULES - Dave Portnoy, El Presidente</div>
        <div className='one-bite-message'>Visit <NavLink to='http://www.barstoolsports.com'>barstoolsports</NavLink></div>
        <div className='homepage-content-container'>
          <div className='homepage-content'>
            <div className='homepage-content-image'>
            {this.props.loginStatus === 'connected' ?
              (<div>Welcome, {this.props.name}!
                <button onClick={this.props.logout}>Logout</button>
              </div>) :
              (<FacebookLogin
                appId="2117404221846949"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                version="3.1"
              />)
            }
            </div>
          </div>

          <div className='homepage-content'>
            <div className='homepage-content-text'>El Presidente Reviews</div>
            <div className='homepage-content-image'>
              <NavLink className='nav-link' to='/reviews'>
                <img id='one-bite-img' alt='one-bite' src={oneBiteLogo}/>
              </NavLink>
            </div>
          </div>

          <div className='homepage-content'>
            <div className='homepage-content-text'>Recommend the next Review</div>
            <div className='homepage-content-image'>
              <NavLink className='nav-link' to='/recommendations'>
                <img id='suggestion-img' alt='suggestion' src={suggestion} />
              </NavLink>
            </div>
          </div>

          <div className='homepage-content'>
            <div className='homepage-content-text'>Forums</div>
            <div className='homepage-content-image'>
              <NavLink className='nav-link' to='/forums'>
                <img id='forum-img' alt='forum-pic' src={forumImage}/>
              </NavLink>
            </div>
          </div>

          <div className='homepage-content'>
            <div className='homepage-content-text'>Connect!</div>
            <div className='homepage-content-image'>
              <NavLink className='nav-link' to='/social-media'>
                <img id='social-media-img' alt='social-media' src={socialMedia}/>
              </NavLink>
            </div>
          </div>

          <div className='homepage-content'>
            <div className='homepage-content-text'>Create a list</div>
            <div className='homepage-content-image'>
              <NavLink className='nav-link' to='/lists'>
                <img id='list-pic' alt='list' src={listPic}/>
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
