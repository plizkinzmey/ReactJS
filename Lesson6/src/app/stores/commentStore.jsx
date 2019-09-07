import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';
import {GET_COMMENTS} from '../actions/actions'

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
    switch (action.type) {
      case GET_COMMENTS:
        this.getComments(action.data);
        break;
    }
  }
}

const store = new commentStore();
dispatcher.register(store.handleAction)

export default store;
