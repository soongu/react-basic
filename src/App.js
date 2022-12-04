
// 사용할 컴포넌트를 import
import Counter from './components/Counter';

// css로딩
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// 리액트 컴포넌트
function App() {
  return (
    <div className="App">
       <Counter />
    </div>
  );
}

export default App;
