import React, {Component} from 'react';
import axios from 'axios';
import UserProfile from '../components/User';

export class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    };
  }
  render() {
    return (
      <div>
        {this.state.user
          ? <UserProfile {...this.state.user}/>
          : null}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
      .then(response => {
        const user = response.data;
        this.setState({user})
      })
  }
}

export default User;
