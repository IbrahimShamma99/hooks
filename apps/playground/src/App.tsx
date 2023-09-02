import React, { useCallback, useRef } from "react";
import { useListener } from "react-typed-use-listener";

function App() {
  useListener({
    eventName: "resize",
    callback: (event) => {
      // NOTE: here event is typed as EventsMap['resize']
    },
  });
  return (
    <div className="App">
      <button onClick={() => {}}>click me</button>

      <br />
    </div>
  );
}

export default App;
