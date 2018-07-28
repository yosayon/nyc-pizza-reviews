import React, { Component } from 'react'
import { VoteForm } from './VoteForm'
import { RecommendationsList } from './RecommendationsList'
import { RecommendationShowPage } from '../components/RecommendationShowPage'
import { Route } from 'react-router-dom'


export class VotePage extends Component{
  state = {
    name: '',
    address: '',
    city: '',
    state: 'New York',
    formErrors: {name: '', address: '', city: ''},
    nameValid: false,
    addressValid: false,
    cityValid: false,
    formValid: false,
    active: false,
  }

  // shouldComponentUpdate(nextProps, nextState){
  //  if(nextState.update !== this.state.update){
  //    return false;
  //  }else{
  //    return true;
  //  }
  // }

  validateInput = (name,value) => {
    let formErrors = this.state.formErrors
    let nameValid = this.state.nameValid
    let addressValid = this.state.addressValid
    let cityValid = this.state.cityValid

    switch(name){
      case 'name':
        nameValid = value.trim().length > 0
        formErrors.name = nameValid ? '' : ' cannot be blank'
        break;
      case 'address':
        addressValid = value.trim().length > 0
        formErrors.address = addressValid ? '' : ' cannot be blank'
        break;
      case 'city':
        cityValid = value.trim().length > 0
        formErrors.city = cityValid ? '' : ' cannot be blank'
        break;
      default:
        break;
    }
      this.setState({
        formErrors: formErrors,
        nameValid: nameValid,
        addressValid: addressValid,
        cityValid: cityValid
      }, this.validateForm)

  }

  onVote = id => {
    this.props.upVote(id)
  }

  onChangeText = e => {
    e.persist()
   this.setState({[e.target.name]: e.target.value }, () => this.validateInput(e.target.name, e.target.value))
  }

  onHandleFormSubmit = e => {
    e.preventDefault();
    let recommendation = JSON.stringify({name: this.state.name, address: this.state.address, city: this.state.city, state: 'New York', comments: [], votes: 0})
    if(this.state.formValid){
      this.props.createRecommendation(recommendation)
      this.setState({
        ...this.state,
        name: '',
        address: '',
        city: '',
        nameValid: false,
        addressValid: false,
        cityValid: false,
        formValid: false
      })
    }else{
      console.log("invalid form")
    }
  }

  validateForm = () => {
    this.setState({formValid: this.state.nameValid && this.state.addressValid && this.state.cityValid})
  }

  errorClass = error => {
   return(error.length === 0 ? '' : 'has-error');
}

  render(){
    return(
      <div className="vote-page-container">
      <Route
        exact
        path={`/vote/:recommendationId`}
        render={() => <RecommendationShowPage />}
      />
        <div className="one-bite-message">
          <h4>What did Pete name his pet dough? </h4>
          <p>....pete's dough, get it?. Okay, I'll stop.</p>
        </div>

        <div className="vote-page-banner">
          <div className="vote-message-container-left">
            Add a pizza place you think should be reviewed next!
          </div>
          <div className="vote-form-container">
            <VoteForm
              onHandleFormSubmit={this.onHandleFormSubmit}
              name={this.state.name}
              address={this.state.address}
              city={this.state.city}
              onChangeText={this.onChangeText}
              formErrors={this.state.formErrors}
              errorClass={this.errorClass}
            />
          </div>
          <div className="vote-message-container-right">
            Click on the pizza icon to vote for the next review!
          </div>
        </div>
        {this.props.recommendations ? <RecommendationsList recommendations={this.props.recommendations} onVote={this.onVote}/> : ''}
      </div>

    )
  }
}
