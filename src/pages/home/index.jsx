import React, { Component } from "react";
import {Link} from "react-router-dom";
import {DownFill} from "antd-mobile-icons";

import contentImage from "../../assets/images/home/xiaolang.png"
import "./index.less"

export default class HomeComponent extends Component{

  render(){
    return (
      <div className="main-container">
        <header className="header-subject">
          <h2 className="subject">Java面试题</h2>
          <Link to="/">
            <b className="change-subject">切换考试科目</b>
            <span><DownFill className="down-right" color="#2E57FF" /></span>
          </Link>
        </header>
        <section className="banner">
          <h4 className="welcome">欢迎使用IT程序猿题库</h4>
          <section className="content">
            <div className="image-left">
              <img src={contentImage} alt=""/>
            </div>
            <div className="message-right">
              <div className="up">
                <span>已学0题</span>
                <span>|</span>
                <span>共299题</span>
              </div>
              <div className="down">
                <div className="sub-div">
                  <span>0</span>
                  <span>错题</span>
                </div>
                <div className="sub-div">
                  <span>0</span>
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    )
  }
}
