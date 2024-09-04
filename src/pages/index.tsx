import {Button, Dropdown, Input, Layout, Menu, MenuProps, Space} from "antd";
import {ItemType} from "antd/es/menu/interface";
import {DownOutlined} from "@ant-design/icons";
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

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

        ],
    }, {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

        ],
    }, {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

        ],
    }, {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

        ],
    }, {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

        ],
    },
    {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

        ],
    },
    {
        key: 'sub1',
        label: `后端|架构`,
        children: [
            {
                key: '1-1',
                type: "group",
                children: [
                    {key: '1', label: '基础课程'},
                    {key: '2', label: '进阶课程'},
                ],
            },

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
            </Header>
            {/*主体内容区域*/}
            <Layout className={"w-[1200px]  mx-auto flex justify-between items-center mt-[20px]"}>
                {/*主体内容区域*/}
                <Layout className="w-full h-[400px]">
                    <Layout>
                        <Sider width="25%">
                            <Menu onClick={onClick} mode="vertical" items={items} className="w-[300px] h-[268px]"/>
                        </Sider>
                        <Content>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/SF.jpg"}/>
                        </Content>
                        <Sider className="w-[180px] h-full">
                            Sider
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