
import './App.css';
import MainRoute from './routes/MainRoute';
import {Provider} from "react-redux"
import {store} from "./redux/Store"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <MainRoute/>
    </div>
</Provider>);
}

export default App;
