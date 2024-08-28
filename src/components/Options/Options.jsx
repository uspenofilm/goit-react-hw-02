import css from "../Options/Options.module.css";

export default function Options({ onUpdate, totalFeedback, setClicks }) {
  return (
    <div className={css.optionsContainer}>
      <button
        onClick={() => {
          onUpdate("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onUpdate("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onUpdate("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={() => setClicks({ good: 0, neutral: 0, bad: 0 })}>
          Reset
        </button>
      )}
    </div>
  );
}
