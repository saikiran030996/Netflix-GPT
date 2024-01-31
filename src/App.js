import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utilis/appStore';
function App() {
  return (
    <Provider store={appStore}>
    <Body></Body>
    </Provider>
  );
}

export default App;
