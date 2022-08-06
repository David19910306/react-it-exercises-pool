import React from "react"
import {useNavigate} from "react-router-dom";

import './index.less'

export default function TabBarItem(props){
  const navigate = useNavigate()
  function clickTabbarHandler(name){
    // console.log(props)
    props.clickCurrentTabBar(name)
    navigate(`/${props.name}`)
  }

  return (
    <div className="tabbar-item" style={{color: props.color}} onClick={() => {clickTabbarHandler(props.name)}}>
      <img src={props.imgUrl} alt={props.name} />
      <span>{props.title}</span>
    </div>
  )
}
