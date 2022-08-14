import React,{ Component } from "react";
import {DownFill} from "antd-mobile-icons";
import httpRequest from "@/http";

import "./index.less"

export default class ToggleComponent extends Component{
  constructor(props){
    super(props)
    this.state = {currentSubjects: []}
  }

  async componentDidMount(){
    const result = await httpRequest('/api/foo/6666', 'GET')
    console.log(result)
  }

  render(){
    return <div className="toggle">
      <section className="toggle-header">
        <header>
          <span>首页显示科学-H5面试题</span>
          <span>
            <b className="change-subject">设置默认学科</b>
            <DownFill className="down-right" color="#2E57FF" fontSize={14} />
          </span>
        </header>
        <section className="current-subject">
          <div>
            <DownFill className="down-left" color="#2E57FF" fontSize={28} />
            <h3>H5面试题</h3>
            <DownFill className="down-right" color="#2E57FF" fontSize={28} />
          </div>
        </section>
      </section>
      <section className="pro-subject">
        <header>专业科目</header>
        <ul className="subject-list">
          <li>
            <span>Webpack面试题</span>
          </li>
          <li>
            <span>ES6</span>
          </li>
          <li>
            <span>移动端</span>
          </li>
          <li>
            <span>小程序</span>
          </li>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>React</span>
          </li>
          <li>
            <span>Vue</span>
          </li>
          <li>
            <span>Anglur</span>
          </li>
          <li>
            <span>Nodejs</span>
          </li>
        </ul>
      </section>
    </div>
  }
}