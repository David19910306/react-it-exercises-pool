import React, { Component } from "react";
import {Link} from "react-router-dom";
import {DownFill, ExclamationTriangleOutline} from "antd-mobile-icons";
import {Button, Toast} from "antd-mobile";
import httpRequest from "@/http";
import withNavigation from "@/components/withNavigation";

import contentImage from "@/assets/images/home/xiaolang.png"
import examinationImage from "@/assets/images/home/examination.png"
import booksImage from "@/assets/images/home/books.png"
import practiceImage from "@/assets/images/home/practice.png"
import subjectIcon from "@/assets/images/home/subject.png"
import "./index.less"

class HomeComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {exam: {}, exemItems: [], collect: 0, study: 0, wrong: 0}
  }

  // 组件挂载
  async componentDidMount() {
    const result = await httpRequest('/api/foo/6666', 'GET')
    if(result.status === 200) {
      this.setState(state => ({
        exam: result.data.data.exam,
        exemItems: result.data.data.exemItems,
        collect: result.data.data.collect,
        study: result.data.data.study,
        wrong: result.data.data.wrong
      }))
    }else if(result.status === 500 && result.data.errCode === 1002){ // 当返回的是1002则重新登录
      Toast.show({content: result.data.message, icon: <ExclamationTriangleOutline />})
      setTimeout(() => {this.props.navigate("/login")}, 1000)
    }
  }

  render(){
    const {exam, exemItems, collect, study, wrong} = this.state
    return (
      <div className="main-container">
          <header className="header-subject">
            <h2 className="subject">{exam.title}</h2>
            <Link to="/toggle">
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
                  <span>{`已学${study}题`}</span>
                  <span>|</span>
                  <span>{`共${exam.itemCount}题`}</span>
                </div>
                <div className="down">
                  <div className="sub-div">
                    <span>{wrong}</span>
                    <span>错题</span>
                  </div>
                  <div className="sub-div">
                    <span>{collect}</span>
                    <span>收藏</span>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className='class-pages'>
            <div className="image-container">
              <img src={examinationImage} alt=""/>
            </div>
            <div className="image-container">
              <img src={booksImage} alt=""/>
            </div>
            <div className="image-container">
              <img src={practiceImage} alt=""/>
            </div>
          </section>
          <div className="subject-title">
            学科主题
          </div>
          <ul className="list">
            {
              exemItems.map(exam => (<li key={exam.id}>
                <img className="left" src={subjectIcon} alt="" />
                <section className="center">
                  <h3 className="title">{exam.title}</h3>
                  <span className="number">{`${exam.itemCount}题/${exam.itemCount}题`}</span>
                  <div className="line"></div>
                </section>
                <Button size="small" color="primary">练习</Button>
              </li>))
            }
          </ul>
        </div>
    )
  }
}

export default withNavigation(HomeComponent)
