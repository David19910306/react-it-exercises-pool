import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Toast} from 'antd-mobile'
import {ExclamationTriangleOutline} from "antd-mobile-icons";
import httpRequest from '@/http'
import {setToken} from "@/utils/storage";

import './index.less'
import logo from '@/assets/images/logo.png'

export default function PubComponent(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // 受控组件
  function onChangeHandler(event) {
    event.target.type === 'text'? setUsername(event.target.value): setPassword(event.target.value)
  }

  // 登录或注册
  function onClickHandler(buttonName){
    return async function(){
      if (buttonName === "直接登录") {
        const result = await httpRequest('/api/foo/1024/login', 'POST', null, {username, password})
        const {data} = result
        // token存到localStorage中
        setToken(data.data)
        showToastMessage(data, "登录成功", "/home")
      }else{
        const result = await httpRequest('/api/foo/1024/register', 'POST', null, {phone:username, password})
        const {data} = result
        showToastMessage(data, "注册成功", "/login")
      }
    }
  }

  function showToastMessage(data, message, destination){
    Toast.show({content: data.errCode === 0? message: data.message, icon: data.errCode === 0? "success": <ExclamationTriangleOutline />})
    data.errCode === 0 && navigate(destination)
  }

  return (
    <div className="login-container">
      <section className="image-section">
        <img src={logo} alt="logo"/>
      </section>
      <h2>{props.pageName}</h2>
      <form className="login-form">
        <input className="input-field" type="text" placeholder="请输入手机号" onChange={onChangeHandler} />
        <input className="input-field" type="password" placeholder="请输入密码" onChange={onChangeHandler} />
        <Button
          style={{'--background-color': "#02369D", fontSize: ".18rem", width: "88%", "--text-color": "#fff", height: ".5rem"}}
          onClick={onClickHandler(props.buttonName)}>
          {props.buttonName}
        </Button>
        <div className="form-tail">
          <Link to={props.text === "前往注册"? "/register": "/login"}><span className="register">{props.text}</span></Link>
          {props.children}
        </div>
      </form>
      <section className="copyright">Copyright © 你单排吧</section>
    </div>
  )
}
