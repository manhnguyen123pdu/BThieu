import logo from './logo.svg';
import './App.css';
import Home from './component/mainComponent/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer/rootReducer';
const store = createStore(rootReducer)
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Home />
    </Provider>
    </div >
  );
}

export default App;
