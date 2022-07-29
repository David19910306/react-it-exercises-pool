import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'antd-mobile'

import './index.less'
import logo from '@/assets/images/logo.png'

export default class LoginComponent extends Component {

  render() {
    return (
      <div className="login-container">
        <section className="image-section">
          <img src={logo} alt="logo"/>
        </section>
        <h2>Login Page</h2>
        <form className="login-form">
          <input className="input-field" type="text" placeholder="请输入手机号" />
          <input className="input-field" type="password" placeholder="请输入密码" />
          <Button style={{'--background-color': "#02369D", fontSize: ".18rem", width: "88%", "--text-color": "#fff", height: ".5rem"}}>直接登录</Button>
          <div className="form-tail">
            <Link to=""><span className="register">前往注册</span></Link>
            <Link to=""><span className="toHome">返回首页</span></Link>
          </div>
        </form>
        <section className="copyright">Copyright © 你单排吧</section>
      </div>
    )
  }
}
