import React from "react";
import PropTypes from "prop-types";
import { Button, Title, List } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <Title>Please leave feedback</Title>
  
  <List>
  {options.map((option) => (
  <Button key={option} onClick={() => onLeaveFeedback(option)}>
    {option}
  </Button>
))}
  </List>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;


