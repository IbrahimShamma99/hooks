import React, { useCallback, useRef } from "react";
import { useStateWithHistory } from "use-state-with-history";

function App() {
  const [value, setValue, { history, forward, backward, go }] =
    useStateWithHistory<number>(0);

  console.log(history);

  return (
    <div className="App">
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
      <h1>{value} timees</h1>

      <br />

      <button onClick={forward}>forward</button>

      <br />

      <button onClick={backward}>backward</button>

      <br />

      <button onClick={() => go(2)}>Go</button>
    </div>
  );
}

export default App;
