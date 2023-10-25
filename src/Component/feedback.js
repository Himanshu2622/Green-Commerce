import React, { Component } from 'react';
import './Feedback.css';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: '',
      rating: 5, // Default rating
      formSubmitted: false, // Track if the form has been submitted
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleRatingChange = (event) => {
    this.setState({ rating: parseInt(event.target.value) });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, feedback } = this.state;

    // Check if all required fields are filled
    if (!name || !email || !feedback) {
      alert("Please fill out all required fields.");
    } else {
      // If all required fields are filled, proceed with the submission
      // You can send the feedback data to your server or perform any other action here
      console.log('Feedback submitted:', this.state);

      // Clear the form and set the formSubmitted flag to true
      this.setState({
        name: '',
        email: '',
        feedback: '',
        rating: 5,
        formSubmitted: true,
      });
    }
  }

  render() {
    // If the form has been submitted, you can show a success message or redirect to another page
    if (this.state.formSubmitted) {
      window.location.href = "/feedbacksubmitted";
    }

    return (
      <div className='whole_feedback'>
        <img src="../images/feedback.png" alt="" className='feed_image' />
        <div className='feedback-container'>
          <h2>Feedback Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                name="feedback"
                value={this.state.feedback}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                name="rating"
                value={this.state.rating}
                onChange={this.handleRatingChange}
              >
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
            <div className='divbut'>
                 <button className="submitbut" type="submit">Submit Feedback</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;