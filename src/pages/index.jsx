import React, {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom"
import TabBarItem from "@/components/tabBarItem"

import Home from "@/assets/images/tabbar/home_2.png"
import activeHome from "@/assets/images/tabbar/home_1.png"
import Mine from "@/assets/images/tabbar/my_2.png"
import activeMine from "@/assets/images/tabbar/my_1.png"
import Fast from "@/assets/images/tabbar/fast.png"
import "./index.less"

export default function MainComponent(){
  const [currentTabName, setTabName] = useState("home")
  const navigate = useNavigate()

  // 一挂载完就直接重定向到/home界面
  useEffect(() => {navigate("/home")}, [])

  function onClickCurrentTab(tabBarName){
    setTabName(tabBarName)
  }

  return (
    <div className="home-component">
      <section className="main-body">
        <Outlet/>
      </section>
      <footer className="footer">
        <TabBarItem
          imgUrl={currentTabName === "home"? activeHome: Home}
          title="首页"
          name="home"
          color={currentTabName === "home"? "#3F51BF": ""}
          clickCurrentTabBar={onClickCurrentTab}
        />
        <TabBarItem
          imgUrl={Fast}
          title="快速刷题"
          name="fast"
          color={currentTabName === "fast"? "#3F51BF": ""}
          clickCurrentTabBar={onClickCurrentTab}
        />
        <TabBarItem
          imgUrl={currentTabName === "profile"? activeMine: Mine}
          title="我的"
          name="profile"
          color={currentTabName === "profile"? "#3F51BF": ""}
          clickCurrentTabBar={onClickCurrentTab}
        />
      </footer>
    </div>
  )
}
