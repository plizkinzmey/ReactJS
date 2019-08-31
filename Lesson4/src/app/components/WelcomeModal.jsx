import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class WelcomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }
  render() {

    return (
      <Modal show={this.state.modal}>
        <Modal.Header>
          <Modal.Title>Привет всем</Modal.Title>
        </Modal.Header>
        <Modal.Body>Классно! Вы можете прочитать данный текст в модальном окне! Чтобы закрыть его нажмите кнопку «Закрыть»!</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
            this.setState({
              modal: !this.state.modal
            });
          }}
            variant="secondary">
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  componentDidMount() {
    this.setState({
      modal: !this.state.modal
    });
  }
}

export default WelcomeModal