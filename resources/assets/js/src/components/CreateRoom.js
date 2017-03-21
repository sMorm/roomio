import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { authPOST } from '../shared/utils/authAxios';
import MakeForm from './HOCs/MakeForm';
import FormError from './reusable/FormError';

class CreateRoom extends Component {
  state = { error: null, loading: null };

  onSubmit = (e) => {
    e.preventDefault();
    authPOST(`/api/room`, { ...this.props.fields })
      .then((res) => {
        const { room } = res.data;
        browserHistory.push(`/room/${room.name}`);
      })
      .catch((err) => {
        console.log(err.response)
        if (err.response.data) {
          this.props.createErrorsFromResponse(err.response.data.messages);
        }
        this.setState({ error: 'An error has occured' });
      });
  }

  render() {
    const { fields, errors } = this.props;
    document.title = "Create Room"
    return (
      <div className="outerFormContainer">
        <div className="formContainer">
          <form onSubmit={this.onSubmit} className="form">
            <h1>Create a Room</h1>
            <label htmlFor="title">Room Name: </label>
            <input
              name="name"
              type="text"
              onChange={this.props.onChange}
              onBlur={this.props.validateFieldOnBlur}
              value={fields.name}
              className="formInput"
            />
            <FormError error={errors.name} />
            <label htmlFor="title">Room Title: </label>
            <input
              name="title"
              type="text"
              onChange={this.props.onChange}
              onBlur={this.props.validateFieldOnBlur}
              value={fields.title}
              className="formInput"
            />
            <FormError error={errors.title} />
            <label htmlFor="description">Room Description: </label>
            <textarea
              name="description"
              type="text"
              onChange={this.props.onChange}
              value={fields.description}
              className="formInput"
            />
            <FormError error={errors.description} />
            <div className="buttonContainer">
                <button className="formButton" >Create!</button>
            </div>
            <FormError error={this.state.error} />
          </form>
        </div>
      </div>
    ); 
  }
}

const fields = ['title', 'description', 'name'];
const rules = {
  name: 'isLower|required',
  title: 'required',
  description: 'required',
};

export default MakeForm(fields, rules)(CreateRoom);