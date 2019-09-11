import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class commentStore extends EventEmitter {
  constructor() {
    super();
    this.comments = [];

    this.change = this.change.bind(this);
    this.getPosts = this.getComments.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  change() {
    this.emit('change')
  }

  getComments(comments) {
    this.comments = comments;
    this.change();
  }

  handleAction(action) {
    this.getComments(action.data);
  }
}

const store = new commentStore();
dispatcher.register(store.handleAction)

export default store;
