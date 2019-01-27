import React, { Component } from 'react';
import '../../app.css';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      answer: false,
      hint: false,
      helperText: ''
    };
  }

  randomVerb = this.props.data[
    Math.floor(Math.random() * this.props.data.length)
  ];
  randomPerson = Object.entries(this.randomVerb)[
    Math.floor(Math.random() * 2) + 7
  ];

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.randomPerson[1] === this.state.value) {
      alert('Correct!');
      this.handleRefresh();
    }
    this.setState({
      answer: true,
      helperText: `False, the correct answer is ${this.randomPerson[1]}.`
    });
  };

  handleRefresh = () => {
    window.location.reload();
  };

  handleHint = event => {
    event.preventDefault();
    this.setState({
      hint: true,
      helperText: `The answer starts with ${this.randomPerson[1].substring(
        0,
        3
      )}...`
    });
  };

  render() {
    const { infinitive, infinitive_english, tense_english } = this.randomVerb;
    return (
      <div>
        <p>
          <b>Verb: </b>
          {infinitive}
        </p>
        <p>
          <b>Translation: </b>
          {infinitive_english}
        </p>
        <p>
          <b>Tense: </b>
          {tense_english}
        </p>
        <p>
          <b>Pronoun:</b>
          {this.randomPerson[0] === 'form_1s' && (
            <span> Yo (Singular, 1st person)</span>
          )}
          {this.randomPerson[0] === 'form_2s' && (
            <span> Tu (Singular, 2nd person)</span>
          )}
        </p>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="input"
          />
          <span style={{ fontSize: '12px' }}>En Español</span>
        </label>
        {(this.state.hint || this.state.answer) && (
          <p>{this.state.helperText}</p>
        )}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <button className="button" onClick={this.handleSubmit}>
            Check
          </button>
          <button className="button" onClick={this.handleHint}>
            Hint
          </button>
          <button className="button" onClick={this.handleRefresh}>
            Next verb
          </button>
        </div>
      </div>
    );
  }
}

export default Random;
