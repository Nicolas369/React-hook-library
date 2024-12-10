import { Container } from './useImperativeHandle/container';
import DemoLayoutEffect from "./useLayoutEffect"
import Paginator from "./useReducer"
import DemoUseEffect from "./useEffect"
import DemoUseContext from "./useContext";
import DemoUseTransition from "./useTransition";
import LazyLoading from "./lazy";
import DemoSuspense from "./suspense";
import DemoMemoComponent from "./memo";
import TestErrorBoundary from "./errorBoundary";
import DependencyCheckerTestComponent from "./custom/useDependencyChecker/implementation"

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
      hook: "useLayoutEffect",
      component: <DemoLayoutEffect />
    },
    {
      hook: "useTransition",
      component: <DemoUseTransition />
    },
    {
      hook: "useContext",
      component: <DemoUseContext />
    },
    {
      hook: "Suspense",
      component: <DemoSuspense />
    },
    {
      hook: "ErrorBoundary",
      component: <TestErrorBoundary />
    },
    {
      hook: "useImperativeHandle + forwardRef",
      component: <Container />
    },
    {
      hook: "lazy(load)",
      component: <LazyLoading />
    },
    {
      hook: "memo(Component)",
      component: <DemoMemoComponent />
    }, 
    {
      hook: "custom hook: useDependencyChecker",
      component: <DependencyCheckerTestComponent />
    }
  ];

  return (
    <div className="App">
      <Paginator pages={pages} />
    </div>
  );
}

export default App;
