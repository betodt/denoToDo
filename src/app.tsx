import { React } from "es-react";

const { useEffect, useState } = React;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
    }
  }
}

type Props = {};

type State = {
  time: Date;
};

export function App() {
  const [state, setState] = useState({
    time: new Date(),
  });

  const tick = () => {
    //@ts-ignore
    setState({
      time: new Date(),
    });
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  //@ts-ignore
  return <p>The current time is {state.time.toLocaleTimeString()}</p>;
}