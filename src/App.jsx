import { Link, Route, Switch } from "wouter";
import './App.css'
import useBearStore from './lib/Store'
import Signup from './Signup'
import HomePage from './HomePage'
import Dashboard from "./Dashboard";
function App() {
  const bears = useBearStore((state) => state.bears)
  

  return (
    <>
  


    <Switch>
    <Route path="/" component={HomePage} />
    <Route path="/Signup" component={Signup} />
    <Route path="/Dashboard" component={Dashboard} />

      

      
    </Switch>
    </>
  )
}

export default App
