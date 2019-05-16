import React, { Component } from 'react';
import axios from 'axios';

class BlogDetail extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then( results => {
      this.setState({
        studentInfo: results.data
      });
    });
  }

  back() {
    window.history.back();
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{ this.state.studentInfo.first_name } { this.state.studentInfo.last_name }</h1>
        <h3>Grade: { this.state.studentInfo.grade }</h3>
        <h3>Email: { this.state.studentInfo.email }</h3>
        <button className='back_btn'  onClick={this.back}>Back</button>
      </div>
    )
  }
}

BlogDetail.propTypes = {
};

export default BlogDetail;