import { Container } from './useImperativeHandle/container';
import DemoLayoutEffect from "./useLayoutEffect"
import Paginator from "./useReducer"
import DemoUseEffect from "./useEffect"
import DemoUseContext from "./useContext";
import DemoUseTransition from "./useTransition";

function App() {

  const pages = [
    /*{
      hook: "useReducer",
      component: (component use as paginator)
    }*/
    {
      hook: "useEffect",
      component: <DemoUseEffect />
    },
    {
      hook: "useImperativeHandle",
      component: <Container />
    },
    {
      hook: "useLayoutEffect",
      component: <DemoLayoutEffect />
    },
    {
      hook: "useContext",
      component: <DemoUseContext />
    },
    {
      hook: "useTransition",
      component: <DemoUseTransition />
    }
  ];

  return (
    <div className="App">
      <Paginator pages={pages} />
    </div>
  );
}

export default App;
