import React from "react";
import PropTypes from "prop-types";

import { FcFeedback } from "react-icons/fc";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import StatisticsComponent from './Statistics/StatisticsComponent';
import { Notification } from "./Notification.styled";

class App extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = (feedbackType) => {
    this.setState((prevState) => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
  });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();

      return (
        <>

          <Section title="Please leave feedback">
          <FcFeedback />
          <FeedbackOptions
           options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>

        {totalFeedback > 0 ? (
          <Section title="Statistics">
            <StatisticsComponent
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
          </Section>
        ) : (
          <Notification>No feedback given</Notification>
        )}
              </>

      );
    }
  }

export default App;



