import { Component } from "react";
import {  FeedBackOptions } from "./feedbackOptions/FeedbackOptions";
import { StatisticsFeedBack } from "./statisticsFeedBack/StatisticsFeedBack";
import { Section } from "./section/Section";
import { StatisticIsEmpty } from "./emptyStatistics/StatisticsIsEmpty";

export class App extends Component  {
    state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  
  handleOptionsClick = (options) => {
    this.setState(prevState => ({
         [options]: prevState[options] + 1
    }))

  }

  countTotalFeedback = () => {
  const { good, neutral, bad } = this.state
  
    return good + neutral + bad; 
      
  }  

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad

    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  }


  render() {
    const { good, neutral, bad } = this.state
    const hasFeedBack = good + neutral + bad > 0;
    
    return (
      <div>
        <Section title="Give Feedback">
              <FeedBackOptions
            options={["good","neutral","bad"]}
            onLeaveFeedback={this.handleOptionsClick}
          />
        </Section>
        
        <Section title='Statistics'>
        {hasFeedBack ? (<StatisticsFeedBack
          good={good} neutral={neutral} bad={bad}
          totalFeedback={this.countTotalFeedback()}
          calcPositiveFeedback={this.countPositiveFeedbackPercentage()}
          />) : <StatisticIsEmpty message='There is no feedback'/>
        }
            
      </Section>
    </div>)
  }
};
