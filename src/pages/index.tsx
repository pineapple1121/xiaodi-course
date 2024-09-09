import {Button, Dropdown, Input, Layout, Menu, MenuProps, Space} from "antd";
import {ItemType} from "antd/es/menu/interface";
import {DownOutlined} from "@ant-design/icons";
import {useState} from "react";
import {LoginModel} from "../components/LoginModel";
import {RegisterModel} from "../components/RegisterModel";
import {Navigation} from "../components/views/Navigation";
import {NavList} from "../components/views/NavList";
import {InfoMenu} from "../components/views/InfoMenu";


const selfItems: MenuProps = {
    items: [
        {key: "front", label: "前端自学路线"},
        {key: "back", label: "后端"}
    ]

}
const oneItems: MenuProps = {
    items: [

        {key: "front", label: "前端一对一"},
        {key: "back", label: "后端一对一"},
    ]
}
const menuItems: ItemType[] = [
    {key: "index", label: <span>首页</span>},
    {key: "course", label: <span>课程中心</span>},
    {
        key: "svip",
        label: <div className={"flex items-center "}>
            <img src="https://front.cdn.xdclass.net/images/vip_icon.webp" width={20} height={20}/>
            <span>超级会员</span>
        </div>
    },
    {key: "tool", label: <span>工具</span>},
    {
        key: "selfStudy",
        label: <Dropdown menu={selfItems}>
            <span>自学路线<DownOutlined/></span>
        </Dropdown>
    },
    {
        key: "oneToOne",
        label: <Dropdown menu={oneItems}>
            <span>一对一辅导<DownOutlined/></span>
        </Dropdown>
    },
    {
        key: "search",
        label: <Input.Search className={"w-36 translate-y-1/2"} placeholder="请输入搜索内容"/>
    },
    {
        key: "active",
        label: <Button type="primary">激活</Button>
    },
    {
        key: "cloud",
        label: <span>云服务器</span>
    },


]


export const Index = () => {
    const [isRegister, setIsRegister] = useState(false)
    const toRegister = () => {
        setIsRegister(!isRegister)
    }
    const [isLogin, setIsLogin] = useState(false)
    const toLogin = () => {
        setIsLogin(!isLogin);

    }

    return (
        <Layout className={"w-full bg-transparent"}>
            {/*海报图*/}
            <img src="https://file.xdclass.net/xdclass/20240701/sfTop.gif" alt="小滴课堂"
                 className={"w-full  h-full"}/>
            {/*头部导航*/}
            <Layout.Header className={"bg-transparent shadow"}>
                <div className={"w-[1200px] h-[67px] mx-auto flex justify-between items-center space-x-4"}>
                    {/*logo*/}
                    <img src="https://front.cdn.xdclass.net/images/logo.webp" className="w-[138px] h-[63px]"/>
                    {/* 导航*/}
                    {/*<div className={"flex justify-between items-center "}>*/}

                    {/*</div>*/}
                    <Menu mode="horizontal" items={menuItems} className={"flex-1 flex  justify-between items-center"}/>
                    {/*登录注册*/}
                    <Space size="large">
                        <div>
                            {isLogin && <LoginModel/>}
                            <a onClick={toLogin}> 登录</a>

                        </div>
                        <Button type="primary" className={"hover:!bg-[#4D555D] bg-[#4D555D] "}
                                onClick={toRegister}>注册</Button>
                    </Space>
                </div>
            </Layout.Header>
            {/*主体内容区域*/}
            <Layout.Content
                className={"w-[1200px]  mx-auto  mt-[20px] "}>
                {/*主体内容区域*/}
                <Navigation/>
                {/*    详情展示区*/}
            </Layout.Content>
            <Layout.Content
                className={"w-[1200px] h-[70px] mx-auto py-[10px] my-[20px] shadow-lg rounded-[10px]  shadow-[#e5e5e5]"}>
                <NavList/>
            </Layout.Content>
            <Layout.Content className={"w-[1200px] h-[20px] mx-auto my-[20px] flex flex-row "}>
                <div className={"flex flex-row items-center"}>
                    <img src={"https://front.cdn.xdclass.net/images/icon_hot.webp"}
                         className={"w-[29px] h-[29px] mr-[5px]"}/>
                    <h2 className={"text-[16px] text-[#4f555d]"}>热门课程</h2>
                </div>
                <div className={"text-[14px] ml-[48px] mr-[40px] flex flex-col h-[20px] leading-[20px]"}>
                    最强王者课程, 冲刺金九银十
                </div>
            </Layout.Content>
            <Layout
                className={"w-[1200px] h-[694px] mx-auto *:!bg-transparent bg-transparent "}>
                <Layout.Sider width={"916px"} className={"mr-[2px]  "}>
                    <InfoMenu/>
                </Layout.Sider>
                <Layout.Sider width={"282px"}>F</Layout.Sider>
            </Layout>
            <RegisterModel open={isRegister} onCancel={() => setIsRegister(false)}/>
            <LoginModel open={isLogin} onCancel={() => setIsLogin(false)}/>
        </Layout>

    )
}