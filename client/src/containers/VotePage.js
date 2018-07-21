import React, {Component} from 'react'
import { VoteForm } from '../components/VoteForm'
import { connect } from 'react-redux';

export class VotePage extends Component{
  onHandleFormSubmit = e => {
    e.preventDefault();
    console.log(e)
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
            <VoteForm onHandleFormSubmit={this.onHandleFormSubmit}/>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return({
    all: state.restaurants.all
  })
}

export default connect(mapStateToProps, null)(VotePage)
