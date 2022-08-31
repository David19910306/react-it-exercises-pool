import React, {Component} from "react";
import {Link} from "react-router-dom";
import RegisterLogin from '@/components/registerlogin'

export default class LoginComponent extends Component {

  render() {
    return (
      <RegisterLogin pageName="Login Page" buttonName="直接登录" text="前往注册">
        <Link to="/home"><span className="toHome">返回首页</span></Link>
      </RegisterLogin>
    )
  }
}