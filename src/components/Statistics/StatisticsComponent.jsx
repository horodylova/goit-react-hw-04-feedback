import React from "react";
import PropTypes from "prop-types";
import { Result, StatisticsList, Title } from "./Statistics.styled";

const StatisticsComponent = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <StatisticsList>
    <Title>Statistics</Title>
    <Result>Total: <span>{totalFeedback}</span></Result>
    <Result>Good: <span>{good}</span></Result>
    <Result>Neutral: <span>{neutral}</span></Result>
    <Result>Bad: <span>{bad}</span></Result>
    <Result>Positive Feedback: <span>{positiveFeedbackPercentage}%</span></Result>
  </StatisticsList>
);

StatisticsComponent.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default StatisticsComponent;