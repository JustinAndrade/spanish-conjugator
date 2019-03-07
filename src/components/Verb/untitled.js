import React, { Component } from 'react';

import '../../app.css';
import miniData from '../../miniData';

import VerbInfo from './VerbInfo';
import Settings from './Settings/Settings';
import { spainSpanish, latamSpanish } from '../NumPersonFilters';
import { Beginner, Intermediate } from '../VerbTensesFilters';
import VerbInput from './VerbInput';
// import VerbStreak from './VerbStreak';
import Reward from 'react-rewards';

const initialState = {
  value: '',
  helperText: null,
  correct: false,
  randomVerb: {},
  randomPerson: []
};
class Verb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      count: 0,
      bestStreak: 0,
      // beginner: true,
      // data: latamSpanish(Beginner),
      // NumberPerson: 'Latam',
      // VerbTenses: 'Beginner',
      answered: false,
      percentage: 0,
      corrects: 0,
      answers: 0
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     hint: false
  //   });
  //   this.randomize();
  // }

  // randomize = () => {
  //   const randomVerb = this.state.data[
  //     Math.floor(Math.random() * this.state.data.length)
  //   ];
  //   const randomPerson = Object.entries(randomVerb)[
  //     Math.floor(Math.random() * 5) + 7
  //   ];
  //   this.setState({
  //     randomVerb,
  //     randomPerson
  //   });
  // };

  // handleChange = event => {
  //   this.setState({
  //     value: event.target.value
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
    const userInput = this.state.value.toLowerCase();
    if (this.state.answered === true) {
      this.handleRefresh();
      this.setState({
        answered: false
      });
    } else if (this.state.randomPerson[1] === userInput) {
      this.addCounter();
      alert('Correct!');
      this.handleRefresh();
      this.setState(prevState => {
        return {
          correct: true,
          corrects: prevState.corrects + 1
        }
      });
      this.addStreak();
    } else if (this.state.randomPerson[1] !== userInput) {
      this.setState({
        helperText: `False, the correct answer is ${
          this.state.randomPerson[1].toUpperCase()
        }.`,
        answered: true
      });
      this.resetCounter();
    }
  };

  handlePercentage = () => {
    if(this.state.correctAnswers && this.state.totalAnswers) {
    const division = ((this.state.correctAnswers/this.state.totalAnswers) * 100)
    const percentage = division === 100 ? 100 : division.toFixed(2)
      this.setState({
        percentage
      })
    }
  }

  // handleRefresh = () => {
  //   this.setState({
  //     ...initialState
  //   });
  //   this.randomize();
  // };

  // handleExample = event => {
  //   const hablar = this.state.data.filter(verb => (verb.infinitive === 'hablar'))
  //   const hablarTense = hablar.filter(verb => (verb.tense_english === this.state.randomVerb.tense_english))
  //   const hablarMood = hablarTense.filter(verb => (verb.mood_english === this.state.randomVerb.mood_english))
  //   const hablarExample = hablarMood[0]
  //   event.preventDefault();
  //   this.setState({
  //     hint: true,
  //     helperText: `Yo + Hablar + ${this.state.randomVerb.tense_english} = YO ${hablarExample.form_1s.toUpperCase()}`
  //   });
  // };

  addStreak = () => {
    if (this.state.count >= this.state.bestStreak) {
      this.setState(prevState => {
        return {
          bestStreak: prevState.bestStreak + 1
        };
      })
      if (this.state.bestStreak % 5 === 0) {
        this.reward.rewardMe();
      }
      
    }
  };

  addCounter = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  // resetCounter = () => {
  //   this.setState({
  //     count: 0
  //   });
  // };

  // handleLevelChange = () => {
  //   this.setState(prevState => {
  //     return {
  //       beginner: !prevState.beginner
  //     };
  //   });
  //   this.handleRefresh();
  //   if (!this.state.beginner) {
  //     alert(
  //       "If you don't know the first verb tense/conjugation, you can click the 'Next verb' button."
  //     );
  //   }
  // };

  // updateNumPerson = event => {
  //   console.log("In update NUM person")
  //   this.setState({
  //     NumberPerson: event.target.value
  //   });
  // };

  // updateVerbTenses = event => {
  //   this.setState({
  //     VerbTenses: event.target.value
  //   });
  //   this.handleRefresh();
  //   console.log("In update verb tense")
  // };

  // filterData = event => {
  //   event.preventDefault();
  //   console.log('Event', event)
  //   if (
  //     this.state.NumberPerson === 'Spain' &&
  //     this.state.VerbTenses === 'Beginner'
  //   ) {
  //     const spainBeg = spainSpanish(Beginner);
  //     this.setState({
  //       data: spainBeg
  //     });
  //   }
  //   if (
  //     this.state.NumberPerson === 'Spain' &&
  //     this.state.VerbTenses === 'Intermediate'
  //   ) {
  //     const spainInter = spainSpanish(Intermediate);
  //     this.setState({
  //       data: spainInter
  //     });
  //   }
  //   if (
  //     this.state.NumberPerson === 'Spain' &&
  //     this.state.VerbTenses === 'Advanced'
  //   ) {
  //     const spainAdv = spainSpanish(miniData);
  //     this.setState({
  //       data: spainAdv
  //     });
  //   }

  //   if (
  //     this.state.NumberPerson === 'Latam' &&
  //     this.state.VerbTenses === 'Beginner'
  //   ) {
  //     const latamBeg = latamSpanish(Beginner);
  //     this.setState({
  //       data: latamBeg
  //     });
  //   }
  //   if (
  //     this.state.NumberPerson === 'Latam' &&
  //     this.state.VerbTenses === 'Intermediate'
  //   ) {
  //     const latamInter = latamSpanish(Intermediate);
  //     this.setState({
  //       data: latamInter
  //     });
  //   }
  //   if (
  //     this.state.NumberPerson === 'Latam' &&
  //     this.state.VerbTenses === 'Advanced'
  //   ) {
  //     const latamAdv = latamSpanish(miniData);
  //     this.setState({
  //       data: latamAdv
  //     });
  //   }
  //   this.handleRefresh()
  // };

  // addAccent = event => {
  //   event.preventDefault();
  //   const accent = event.target.value;
  //   this.setState({
  //     value: this.state.value + accent
  //   });
  // };

  render() {
    console.log("Answer:", this.state.randomPerson[1])
    console.log("corrects", this.state.corrects)
    console.log("amswers", this.state.answers)
    console.log("percentage", this.state.percentage)
    const { count, bestStreak, randomVerb, randomPerson, percentage } = this.state;
    const {
      infinitive,
      tense_english,
      mood_english
    } = randomVerb;
    const buttonText = this.state.randomPerson[1] !== this.state.value.toLowerCase() && this.state.answered ? 'Next verb' : 'Submit'
    return (
      <div>
        <div className="verb-info-wrapper">
          <div className='verb-streak'>
            <div className='current-best-streak'>
              <div className='streak'>current streak:</div>
              <div className='twenty-four'>{count}</div>
            </div>
            <Reward
              ref={(ref) => { this.reward = ref }}
              type='emoji'
            >
              <div className='current-best-streak'>
                <div className='streak'>best streak:</div>
                <div className='twenty-four'>{bestStreak} <span role='img' aria-label='salsa dancer'>💃</span></div>
              </div>
            </Reward>
            <div className='current-best-streak'>
                <div className='streak'>percentage:</div>
                <div className='twenty-four'>{percentage}%</div>
              </div>
          </div>
          <VerbInfo
            randomPerson={randomPerson[0]}
            infinitive={infinitive}
            tense_english={tense_english}
            mood_english={mood_english}
          />
        </div>
        <VerbInput
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          addAccent={this.addAccent}
          handleExample={this.handleExample}
          buttonText={buttonText}
        />
        <Settings handleRefresh={this.handleRefresh}
        filterData={this.filterData}
        updateVerbTenses={this.updateVerbTenses}
        updateNumPerson={this.updateNumPerson}
        />
      </div>
    );
  }
}

export default Verb;