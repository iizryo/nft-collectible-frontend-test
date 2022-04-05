import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// エラーが出た為変更（参考：https://dev.to/osmanforhad/react-js-warning-reactdomrender-is-no-longer-supported-in-react-18-use-createroot-instead-until-you-switch-to-the-new-api-1jhh）
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// 以前のデフォルトコード
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
