import React from 'react'
import { Redirect } from 'umi'
import useAuth from '@/hooks/useAuth'
export default (props) => {
  const {status,root,username} = useAuth();
  // console.log('result',result)
  // return <div>123</div>
  if (!status) return <div> 数据渲染中... </div>
  if (status == 1) {
    return <div>
      <p>用户名： {username}</p>
      <p> 角色： {root} </p>
      {props.children}
    </div>;
  } else {
    return <Redirect to="/login" />;
  }
}
