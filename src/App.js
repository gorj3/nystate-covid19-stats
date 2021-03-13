import './App.css';

import ChartsPanel from './containers/ChartsPanel/ChartsPanel.js';
import GlobalNavBar from './components/GlobalNavBar/GlobalNavBar.js';


function App() {
  return (
    <div>
      <GlobalNavBar/>
        <ChartsPanel/>
    </div>
  );
}

export default App;
