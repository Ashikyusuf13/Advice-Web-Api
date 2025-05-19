import React from "react";
import { useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState(
    "please click the button for the Advice"
  );
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleadvice() {
    setLoading(true);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount(count + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="Advice-container">
      {loading ? <h2>Loading...</h2> : <h2>{advice}</h2>}

      <button type="button" onClick={handleadvice} className="btn">
        Get Advice
      </button>

      <h3>
        you clicked the button <span>{count}</span> times
      </h3>
    </div>
  );
};

export default Advice;
