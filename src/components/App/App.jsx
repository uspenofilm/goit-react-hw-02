import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";
import css from "./App.module.css";

export default function App() {
  // const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <Description></Description>
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        setClicks={setClicks}
      ></Options>
      {totalFeedback === 0 && <Notification></Notification>}
      {totalFeedback > 0 && (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        ></Feedback>
      )}
    </>
  );
}
