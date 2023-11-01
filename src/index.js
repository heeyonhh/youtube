import React from 'react';
import ReactDOM from 'react-dom/client';
//React의 DOM 조작 메서드를 가져오기 위해 react-dom 라이브러리에서 ReactDOM을 가져옵니다. 특히, "react-dom/client"로부터 가져오는 것은 React 18 이상의 Concurrent Mode와 같이 사용되는 새로운 렌더링 API입니다.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);