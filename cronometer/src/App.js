
import './App.css';
import MainRoute from './routes/MainRoute';
import {Provider} from "react-redux"
import {store} from "./redux/Store"
import LoginHeader from './components/header/LoginHeader';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <LoginHeader/>
    <MainRoute/>
    </div>
</Provider>);
}

export default App;
