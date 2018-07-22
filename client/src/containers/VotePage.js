import React, { Component } from 'react'
import { VoteForm } from '../components/VoteForm'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createRecommendation } from '../actions/index'

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
    active: false
  }

  // componentDidMount(){
  //   console.log(this.props)
  // }
  //
  // componentDidUpdate(prevProps, prevState){
  //  if(this.state.active === false){
  //     this.setState({
  //       ...this.state,
  //       active: true
  //     })
  //   }
  // }

  onHandleFormSubmit = e => {
    debugger;
    console.log(this.props)
    e.preventDefault();
    let recommendation = {name: this.state.name, address: this.state.address, city: this.state.city}
    if(this.state.formValid){
      this.props.createRecommendation(recommendation)
    }else {
      console.log("not a valid form")
    }
  }

  onChangeText = e => {
    e.persist()
   this.setState({[e.target.name]: e.target.value }, () => this.validateInput(e.target.name, e.target.value))
  }

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

  validateForm = () => {
    this.setState({formValid: this.state.nameValid && this.state.addressValid && this.state.cityValid})
  }

  errorClass = error => {
   return(error.length === 0 ? '' : 'has-error');
}


  render(){
    return(
      <div className="vote-page-container">
        <div className="one-bite-message">
          <h4>What did Pete name his pet dough? </h4>
          <p>....pete's dough, get it?. Okay, I'll stop.</p>
        </div>

        <div className="vote-page-banner">
          <div className="vote-message-container">
            Add and vote on which NY pizza place you think should be next!
          </div>
          <div className="vote-form-container">
            <VoteForm
              onHandleFormSubmit={this.onHandleFormSubmit.bind(this)}
              name={this.state.name}
              address={this.state.address}
              city={this.state.city}
              onChangeText={this.onChangeText}
              formErrors={this.state.formErrors}
              errorClass={this.errorClass}
            />
          </div>
        </div>
      </div>

    )
  }
}

// const mapStateToProps = state => {
//   return({
//     all: state.recommendations.all
//   })
// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators({createRecommendation}, dispatch);
}

export default connect(null, mapDispatchToProps)(VotePage)
