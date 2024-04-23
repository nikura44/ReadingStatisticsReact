import React from 'react';
import { createRoot } from 'react-dom/client'; // 导入 createRoot
import './index.css';
import App from './App';

const container = document.getElementById('root'); // 获取挂载点
const root = createRoot(container); // 创建根实例

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);