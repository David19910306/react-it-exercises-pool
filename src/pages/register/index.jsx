import React, {Component} from "react";
import RegisterLogin from "@/components/registerlogin"

export default class LoginComponent extends Component {
  render() {
    return (
      <RegisterLogin pageName="Register Page" buttonName="立即注册" text="前往登录"></RegisterLogin>
    )
  }
}
