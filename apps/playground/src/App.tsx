import { useState } from "react";
import { useListener } from "react-typed-use-listener";

function App() {
  const [value, setValue] = useState<number>(0);

  useListener({
    eventName: "resize",
    callback: (event) => {
      // NOTE: here event is typed as EventsMap['resize']
    },
  });
  return <></>;
}

export default App;
