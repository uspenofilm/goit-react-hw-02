import css from "../Feedback/Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
