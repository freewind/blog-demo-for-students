import React, {Component} from 'react';
import request from 'superagent';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return <form onSubmit={this._onSubmit.bind(this)}>
      <FormGroup>
        <FormControl type="text" placeholder="title"
                     value={this.state.title}
                     onChange={this._onTitleChange.bind(this)}/>
      </FormGroup>
      <FormGroup>
        <FormControl componentClass="textarea" placeholder="content"
                     value={this.state.content}
                     onChange={this._onContentChange.bind(this)}/>
      </FormGroup>
      <FormGroup>
        <Button type="submit" onClick={this._onSubmit.bind(this)}>提交</Button>
      </FormGroup>
    </form>
  }

  _onTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  _onContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  _onSubmit(event) {
    event.preventDefault();
    request.post('/api/articles')
      .send({
        title: this.state.title,
        content: this.state.content
      })
      .end((err, res) => {
        if (err) return console.error(err);
        console.log(res.statusCode);
      })
  }

}
