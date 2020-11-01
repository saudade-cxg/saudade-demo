import React from 'react';
import styles from './index.less';
import { Menu, Dropdown, Button,Avatar } from 'antd';
import {
  SearchOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  UserOutlined
} from '@ant-design/icons';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <span> 注销 </span>
    </Menu.Item>
  </Menu>
);
export default function Tab() {
  const {TabWrap,TabIcon,TabAvatarWrap} = styles
  return (
    <div className={TabWrap}>
      <SearchOutlined className={TabIcon}/>
      <QuestionCircleOutlined className={TabIcon}/>
      <BellOutlined className={TabIcon}/>
      <Dropdown overlay={menu} placement="bottomCenter">
        <div className={TabAvatarWrap}>
          <Avatar size={30} icon={<UserOutlined/>} /> 
          <span> Lakers </span>
        </div>
      </Dropdown>
      <GlobalOutlined className={TabIcon}/>
    </div>
  );
}
