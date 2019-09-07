import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';
import {GET_USERS} from '../actions/actions'

class userStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];

    this.change = this.change.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  change() {
    this.emit('change')
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  handleAction(action) {
    this.getUsers(action.data);
  }
}

const store = new userStore();
dispatcher.register(store.handleAction)

export default store;
