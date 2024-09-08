import {Button, Carousel, Col, Dropdown, Input, Layout, Menu, MenuProps, Row, Space, Switch} from "antd";
import {ItemType} from "antd/es/menu/interface";
import {DownOutlined, PayCircleOutlined} from "@ant-design/icons";
import {useState} from "react";
import {LoginModel} from "../components/LoginModel";
import {RegisterModel} from "../components/RegisterModel";


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
            <span>超级会员</span>,
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


const items: ItemType[] = [
    {

        key: 'sub1',
        label: `后端|架构`,
        popupClassName: " *:h-full [&_.ant-menu-item]:!h-[317px]  [&_.ant-menu-item]:!w-[600px] [&_.ant-menu-item]:!p-0",
        children: [
            {
                key: '1-1',
                label: (
                    <div>
                        <div>
                            <h2>基础课程</h2>
                            <div>
                                <a>java</a><a>spring</a><a>springBoot</a><a>必备基础</a>
                            </div>
                            <h2>进阶课程</h2>
                            <div>
                                <a>分布式|中间件</a><a>容器化</a><a>项目综合实战</a><a>必备基础</a>
                            </div>
                        </div>
                        <div className="w-full">
                            <Row>
                                <Col span={12}>
                                    <div className="flex flex-row">
                                        <img
                                            src={"https://file.xdclass.net/video/2024/selenium/zhutu2.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp"}
                                            className="w-[75px] "/>
                                        <div className="flex flex-row ">
                                            <p className="text-ellipsis">24年爬虫webUi自动化</p><br/>
                                            <div><a>中级</a>
                                                <PayCircleOutlined className={"bg-red"}/><span>39</span>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col span={12}>col-12</Col>
                            </Row>
                            <Row>
                                <Col span={12}>col-12</Col>
                                <Col span={12}>col-12</Col>
                            </Row>


                        </div>
                    </div>
                ),
            }
        ],
    },

];

const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};


export const Index = () => {
    const {Header, Footer, Sider, Content} = Layout;
    const [isRegister, setIsRegister] = useState(false)
    const toRegister = () => {
        setIsRegister(!isRegister)
    }
    const [isLogin, setIsLogin] = useState(false)
    const toLogin = () => {
        setIsLogin(!isLogin);

    }
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <Layout className={"w-full bg-transparent"}>
            {/*海报图*/}
            <img src="https://file.xdclass.net/xdclass/20240701/sfTop.gif" alt="小滴课堂"
                 className={"w-full  h-full"}/>
            {/*头部导航*/}
            <Header className={"bg-transparent shadow"}>
                <div className={"w-[1200px] h-[67px] mx-auto flex justify-between items-center space-x-4"}>
                    {/*logo*/}
                    <img src="https://front.cdn.xdclass.net/images/logo.webp" className="w-[138px] h-[63px]"/>
                    {/* 导航*/}
                    {/*<div className={"flex justify-between items-center "}>*/}

                    {/*</div>*/}
                    <Menu mode="vertical" items={menuItems} className={"flex-1 flex  justify-between items-center"}/>
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
            </Header>
            {/*主体内容区域*/}
            <Layout className={"w-[1200px]  mx-auto flex justify-between items-center mt-[20px]"}>
                {/*主体内容区域*/}
                <Layout className="w-full h-[400px]">
                    <Layout>
                        <Sider width="25% " style={{backgroundColor: "white"}}>
                            <Menu onClick={onClick} mode="vertical" items={items} openKeys={["sub1"]}
                                  className="w-[300px] h-[268px]"/>
                        </Sider>
                        <Content style={{backgroundColor: "white", overflow: "hidden"}}>
                            {/*轮播图*/}
                            <Carousel arrows autoplay={true} autoplaySpeed={2000}
                                      adaptiveHeight={true} infinite={true}>
                                <div className="h-[400px] w-full">
                                    <a>
                                        <img
                                            src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/VIP.png"}/>
                                    </a>
                                </div>
                                <div className="h-[400px] w-full">
                                    <a>
                                        <img
                                            src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/YC.jpg"}/>
                                    </a>
                                </div>
                                <div className="h-[400px] w-full">

                                    <a>
                                        <img
                                            src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/JD.jpg"}/>
                                    </a>
                                </div>
                                <div className="h-[400px] w-full">
                                    <a>
                                        <img
                                            src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/ALI.jpg"}/>
                                    </a>
                                </div>

                            </Carousel>

                        </Content>
                        <Sider className="w-[180px] h-full " style={{backgroundColor: "white"}}>
                            <img src={"https://front.cdn.xdclass.net/images/new.webp"}
                                 className="bg-white w-full h-[176px] mt-[10px] mb-[1px]"/>
                            <div className="text-center w-full px-[10px]">
                                <Button type="link"
                                        className="bg-orange-500 text-center text-white w-full">登录/注册</Button>
                            </div>
                            <div className="bg-white text-black text-center my-[20px]">
                                <span>弹窗 </span>
                                <Switch defaultChecked onChange={onChange}/>
                            </div>
                        </Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                {/*    详情展示区*/}
            </Layout>
            <RegisterModel open={isRegister} onCancel={() => setIsRegister(false)}/>
            <LoginModel open={isLogin} onCancel={() => setIsLogin(false)}/>
        </Layout>

    )
}