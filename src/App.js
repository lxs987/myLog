import logo from './logo.svg';
import './App.css';
// html이 아닌 JSX임
// 자바스크립트 안에서 HTML을 작성할 수 있도록 함
function App() {
  let post = "블로그 글 제목";
  return (
    <div className="App">
      <div className = "black-nav">
        <h4>myLog</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
