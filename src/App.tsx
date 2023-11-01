import { RouteComponentProps, Router } from '@reach/router';
import './App.css';
import Index from './pages/index';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" pageComponent={<Index />} />
        <Route path="/profile" pageComponent={<Profile />} />
      </Router>
    </div>
  );
}

export default App;

const Route = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
