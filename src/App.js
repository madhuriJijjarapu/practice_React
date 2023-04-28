import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionCllick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/myStyles.css';
import styles from './components/myStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';
import { UserProvider } from './components/UserContext';
import ComponentC from './components/ComponentC';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello Madhuri Jyostna</h1> */}
      {/* <Greet /> */}

      {/* functonal props */}

      {/* <Greet name="jyostna" nickname="jyo" > this is children prop</Greet>
      <Greet name="madhuri" nickname="lmnop" />
      <Greet name="jijjarapu" nickname="abcd" /> */}

      {/* class props */}

      {/* <Welcome name="akshauhini" nickname="akshu" />
      <Welcome name="bigboss" nickname="bb" /> */}

      {/* class state example */}

      {/* <Message /> */}

      {/* setState example */}

      {/* <Counter /> */}
      {/* destructuring the props and state */}

      {/* <Greet name="destrusture" nickname="destruct" />
      <Welcome name="destrusture" nickname="dist" /> */}
      {/* event hanlers for function and class */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent /> */}
      {/* <UserGreetings /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true} />
      <Inline />
      <h1 className={styles.success}>Success</h1>
      <h1 className='error'>Error</h1> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name='Madhuri' />
      <HoverCounter name='Jyostna' /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Madhuri' : 'Guest'} /> */}
      {/* <CounterRenderProps render={(count, clickHandler) => <ClickCounterTwo count={count} clickHandler={clickHandler} />} />
      <CounterRenderProps render={(count, clickHandler) => <HoverCounterTwo count={count} clickHandler={clickHandler} />} /> */}

      {/* <UserProvider value='Madhuri'>
        <ComponentC />
      </UserProvider> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      <IntervalHookCounter />
    </div>
  );
}

export default App;
