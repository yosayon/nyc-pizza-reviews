import React, { Component } from 'react';
import { Recommendation } from './Recommendation'
import CommentsPage  from './CommentsPage'


export default class RecommendationShowPage extends Component{
 state = {
   comment: ''
 }
  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  onClickComment = (e) => {
    e.preventDefault();
    this.props.createComment(this.props.match.params.recommendationId, this.props.currentUser, this.state.comment)
  }


  render(){
    const id = Number(this.props.match.params.recommendationId)
    const recommendation = this.props.recommendations.find(rec => rec.id === id)
    return(
      <div className='recommendations-list-container'>
        <Recommendation
          recommendation={recommendation}
          onVote={this.props.onVote}
        />
        <CommentsPage
          currentUser={this.props.currentUser}
          recommendation={recommendation}
          commentText={this.state.comment}
          onChangeComment={this.onChangeComment}
          onClickComment={this.onClickComment}
        />
      </div>
      )
    }
  }
