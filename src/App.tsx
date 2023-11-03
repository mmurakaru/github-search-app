import { RouteComponentProps, Router } from '@reach/router';
import Index from './pages/index';
import Profile from './pages/profile';

let IndexPage = (props: RouteComponentProps) => <Index />
let ProfilePage = (props: RouteComponentProps) => <Profile />

function App() {
  return (
    <Router>
      <IndexPage path="/" />
      <ProfilePage path="profile/:username" />
    </Router>
  );
}

export default App;
