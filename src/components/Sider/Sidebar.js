import React from 'react';
import './Sidebar.css'; // 引入侧边栏的样式

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>侧边栏</h1>
            <ul>
                <li>首页</li>
                <li>关于</li>
                <li>服务</li>
                <li>联系我们</li>
            </ul>
        </div>
    );
};

export default Sidebar;