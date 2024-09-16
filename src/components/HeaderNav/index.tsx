import {useState} from "react";
import {Button, Carousel, Dropdown, Input, Menu, MenuProps, Space} from "antd";
import {LoginModel} from "../LoginModel";
import {RegisterModel} from "../RegisterModel";
import {ItemType} from "antd/es/menu/interface";
import {DownOutlined} from "@ant-design/icons";

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
    {
        key: "index", label: <span>首页</span>
    },
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
        label: <Input.Search className={"w-36 mt-2 border-0"} placeholder="请输入搜索内容"/>
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
const Images: string[] = [
    "https://file.xdclass.net/xdclass/20240701/sfTop.gif",
    "https://file.xdclass.net/video/2023/banner/%E5%8F%8C%E5%8D%81%E4%B8%80/vip1.gif"

]

export const HeaderNav = () => {
    const [isRegister, setIsRegister] = useState(false)
    const toRegister = () => {
        setIsRegister(!isRegister)
    }
    const [isLogin, setIsLogin] = useState(false)
    const toLogin = () => {
        setIsLogin(!isLogin);

    }
    return (
        <div>
            <Carousel arrows={false} infinite={true} dotPosition={"left"} dots={false} autoplay={true}
                      autoplaySpeed={2000}>
                {
                    Images.map((_, index) => (
                        <div>
                            <img src={Images[index]} alt="小滴课堂"
                                 className={"w-full h-[70px] "}/>
                        </div>
                    ))
                }
            </Carousel>
            {/* 头部导航 */}
            <div className={"w-[1200px] h-[67px] mx-auto flex justify-between  items-center space-x-4"}>
                {/*logo*/}
                <img src="https://front.cdn.xdclass.net/images/logo.webp" className="w-[138px] h-[63px]"/>
                {/* 导航*/}
                {/*<div className={"flex justify-between items-center "}>*/}

                {/*</div>*/}
                <Menu mode="horizontal" items={menuItems}
                      className={"flex-1 flex  flex-row justify-between items-center border-0"}/>
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
        </div>


    )
}