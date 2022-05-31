import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// html이 아닌 JSX임
// 자바스크립트 안에서 HTML을 작성할 수 있도록 함
function App() {
  // {임시데이터}라고 하면 'temp data' 나옴
  // State쓰는 이유: 일반 변수와 다르게 state쓰던 html은 자동으로 재렌더링됨
  // 따라서 자주 변경될 것 같은 html부분은 State로 만들어놓기
  let [글제목, updateTitle] = useState(['Title 3', 'Title 2', 'Title 1']);
  let date = "2022-05-31"
  // state값 변경하고 싶을 땐 state변경함수 사용하기!
  // 변경함수 특징: 기존 state == 신규 state의 경우 변경하지 않음.
  let [like, update] = useState(0);

  // function likeNum(){
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>React myLog</h4>
      </div>

      {/* state가 array/object면 독립적 카피본(shallow copy)를 만들어서 수정해야 함
      */}
      <button onClick={()=>{
        let copy = [...글제목]; 
        // let copy = 글제목; 이라고 할 경우 copy==글제목
        // [...글 제목]; 이라고 할 경우 완전히 새로운 값으로 됨
        // 
        copy[0] = 'New Title 1';
        updateTitle(copy);
      }}>Update title</button>

      <button onClick={()=>{
        let copy2 = [...글제목];
        copy2.sort();
        updateTitle(copy2)
      }}>가나다순정렬</button>

      <div className='list'>
        <h4>{글제목[0]}<span onClick={ ()=>{update(like+1)} }>❤️</span> {like} </h4>
        <p>{date}</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{date}</p>
      </div>

      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{date}</p>
      </div>

      
{/* HTML은 너무 더러움 (div 백만개나옴)
컴포넌트 만드는 법
1. function 만들고
2. return()안에 html담기
3. <함수명></함수명> 쓰기 

컴포넌트로 만들면 좋은 것
1. 반복적인 HTML 축약할 때
2. 큰 페이지들
3. 자주 변경되는 것들

컴포넌트의 단점: state 가져다 쓸 때 문제생김
(A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음)



**참고: 의미없는 <div>대신 <></> 가능
*/}

      <Modal></Modal>
      <Modal/>

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      
  )
}
export default App;
