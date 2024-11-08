import './App.css';
import { Container } from './useImperativeHandle/container';
import DemoLayoutEffect from "./useLayoutEffect"
import Paginator from "./useReducer"
import DemoUseEffect from "./useEffect"
import DemoUseContext from "./useContext";

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
      component: <DemoUseContext/>
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
       <Paginator pages={pages} />
      </header>
    </div>
  );
}

export default App;
