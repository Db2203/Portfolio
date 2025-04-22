import { HashRouter as Router } from 'react-router-dom';  // Use HashRouter for GitHub Pages
import Navbar from './components/Navbar';
import Pages from './pages/Pages';
import styled from 'styled-components';

function App() {
  return (
    <Main className="App">
      <Router>  {/* Changed BrowserRouter to HashRouter */}
        <Navbar />
        <Pages />
      </Router>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

export default App;
