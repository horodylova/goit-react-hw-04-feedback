import React, { useState } from "react";
import PropTypes from "prop-types";
import { FcFeedback } from "react-icons/fc";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import StatisticsComponent from './Statistics/StatisticsComponent';
import { Notification } from "./Notification.styled";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;
  };

  const totalFeedbackValue = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FcFeedback />
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>

      {totalFeedbackValue > 0 ? (
        <Section title="Statistics">
          <StatisticsComponent
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedbackValue}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification>No feedback given</Notification>
      )}
    </>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;



