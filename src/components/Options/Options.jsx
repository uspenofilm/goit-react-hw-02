export default function Options({ onUpdate, totalFeedback, setClicks }) {
  return (
    <div>
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
