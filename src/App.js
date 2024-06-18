import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
