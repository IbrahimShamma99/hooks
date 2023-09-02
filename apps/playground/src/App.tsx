import { useListener } from "react-typed-use-listener";

function App() {
  useListener({
    eventName: "resize",
    callback: (event) => {
      // NOTE: here event is typed as EventsMap['resize']
    },
  });
  return <></>;
}

export default App;
