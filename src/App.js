import { Container } from './native/useImperativeHandle/container';
import DemoLayoutEffect from "./native/useLayoutEffect"
import Paginator from "./native/useReducer"
import DemoUseEffect from "./native/useEffect"
import DemoUseContext from "./native/useContext";
import DemoUseTransition from "./native/useTransition";
import LazyLoading from "./native/lazy";
import DemoSuspense from "./native/suspense";
import DemoMemoComponent from "./native/memo";
import TestErrorBoundary from "./native/errorBoundary";
import DependencyCheckerTestComponent from "./custom-hooks/useDependencyChecker/implementation"

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
