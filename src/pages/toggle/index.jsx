import React,{ Component } from "react";
import {Dialog} from "antd-mobile";
import {DownFill} from "antd-mobile-icons";
import httpRequest from "@/http";

import "./index.less"
import withNavigation from "../../components/withNavigation";

class ToggleComponent extends Component{
  constructor(props){
    super(props)
    this.state = {currentSubjects: [], exam: {}}
    // 设置默认显示页
    this.setDefaultSubject = this.setDefaultSubject.bind(this)
    // 选择科目
    this.changeSubject = this.changeSubject.bind(this)
  }

  async componentDidMount(){
    const result = await httpRequest('/api/foo/6666', 'GET')
    // console.log(result)
    if (result.status === 200 && result.data.errCode === 0){
      const {data: {exam, exemItems}} = result.data
      this.setState(state => ({exam, currentSubjects: exemItems}))
    }
  }

  // 默认显示学科
  setDefaultSubject(exam) {
    Dialog.confirm({
      content: `是否切换${exam.title}相关为首页默认显示`,
      onConfirm: () => {
        alert(`点击了确定按钮`)
      }
    })
  }

  // 切换科目
  changeSubject(){
    console.log('qiehuan')
  }

  render(){
    const {exam, currentSubjects} = this.state
    return <div className="toggle">
      <section className="toggle-header">
        <header>
          <span>{`首页显示科学-${exam.title}`}</span>
          <span>
            <b className="change-subject" onClick={ () => {this.setDefaultSubject(exam)}}>设置默认学科</b>
            <DownFill className="down-right" color="#2E57FF" fontSize={14} />
          </span>
        </header>
        <section className="current-subject">
          <div>
            <DownFill className="down-left" color="#2E57FF" fontSize={28} />
            <h3 onClick={this.changeSubject}>{exam.title}</h3>
            <DownFill className="down-right" color="#2E57FF" fontSize={28} />
          </div>
        </section>
      </section>
      <section className="pro-subject">
        <header>专业科目</header>
        <ul className="subject-list">
          {
            currentSubjects.map(subject => <li key={subject.id}>{subject.title}</li>)
          }
        </ul>
      </section>
    </div>
  }
}

export default withNavigation(ToggleComponent)
