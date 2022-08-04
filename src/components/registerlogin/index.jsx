import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'antd-mobile'

import './index.less'
import logo from '@/assets/images/logo.png'

export default class PubComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  // 受控组件
  onChangeHandler(event) {
    event.target.type === 'text'? this.setState({username: event.target.value}): this.setState({password: event.target.value})
  }

  // 登录或注册
  onClickHandler(buttonName){
    const {username, password} = this.state
    console.log(/^[1][3,4,5,6,7,8,9][0-9]{9}/.test(username))
    if (buttonName === "直接登录"){

    }else {
      console.log(buttonName, 'p')
    }
  }

  render() {
    const {pageName, buttonName, text, children} = this.props
    return (
      <div className="login-container">
        <section className="image-section">
          <img src={logo} alt="logo"/>
        </section>
        <h2>{pageName}</h2>
        <form className="login-form">
          <input className="input-field" type="text" placeholder="请输入手机号" onChange={this.onChangeHandler} />
          <input className="input-field" type="password" placeholder="请输入密码" onChange={this.onChangeHandler} />
          <Button
            style={{'--background-color': "#02369D", fontSize: ".18rem", width: "88%", "--text-color": "#fff", height: ".5rem"}}
            onClick={() => {this.onClickHandler(buttonName)}}>
            {buttonName}
          </Button>
          <div className="form-tail">
            <Link to={text === "前往注册"? "/register": "/login"}><span className="register">{text}</span></Link>
            {children}
          </div>
        </form>
        <section className="copyright">Copyright © 你单排吧</section>
      </div>
    )
  }
}
