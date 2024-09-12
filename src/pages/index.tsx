import {Button, Dropdown, Input, Layout, Menu, MenuProps, Space} from "antd";
import {ItemType} from "antd/es/menu/interface";
import {DownOutlined} from "@ant-design/icons";
import {useState} from "react";
import {LoginModel} from "../components/LoginModel";
import {RegisterModel} from "../components/RegisterModel";
import {Navigation} from "../views/Navigation";
import {NavList} from "../views/NavList";
import {MainContent} from "../views/MainContent";
import {TeaInfo} from "../views/Navigation/TeaInfo";
import {FooterNav} from "../views/Navigation/FooterNav";


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
                <RegisterModel open={isRegister} onCancel={() => setIsRegister(false)}/>
                <LoginModel open={isLogin} onCancel={() => setIsLogin(false)}/>
            </Layout.Header>
            {/*主体内容区域*/}
            <Layout.Content
                className={"w-[1200px]  mx-auto  mt-[20px] "}>
                {/*主要导航*/}
                <Navigation/>
                {/*次要导航*/}
                <NavList
                    className={"w-[1200px] h-[70px] mx-auto py-[10px] my-[20px] shadow-lg rounded-[10px]  shadow-[#e5e5e5]"}/>
                {/* 主要内容 */}
                <MainContent/>
                < TeaInfo/>
            </Layout.Content>
            <Layout.Footer className={" flex justify-around h-[90px]  !p-2 !bg-[#FFF] border-[1px]"}>
                <div className={" mx-auto  !bg-transparent w-[1200px] h-[80px] "}><FooterNav/></div>
            </Layout.Footer>

        </Layout>

    )
}