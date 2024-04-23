import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token'); // 从localStorage中获取token
  const location = useLocation(); // 获取当前的location对象

  if (!token) {
    // 如果没有token，则重定向到登录页面，并传递当前位置，以便登录后可以返回
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // 如果有token，则渲染子组件
};

export default RequireAuth;  // 使用默认导出