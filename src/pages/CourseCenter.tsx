import {
    Button,
    ConfigProvider,
    Dropdown,
    Input,
    Layout,
    Menu,
    MenuProps,
    Pagination,
    PaginationProps,
    Space
} from "antd";
import {ItemType} from "antd/es/menu/interface";
import {DownOutlined} from "@ant-design/icons";
import {LoginModel} from "../components/LoginModel";
import {RegisterModel} from "../components/RegisterModel";
import {useState} from "react";
import {SecondaryNav} from "../views/Navigation/SecondaryNav";
import {MainContent} from "../views/MainContent";
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
export const CourseCenter = () => {
    const [isRegister, setIsRegister] = useState(false)
    const toRegister = () => {
        setIsRegister(!isRegister)
    }
    const [isLogin, setIsLogin] = useState(false)
    const toLogin = () => {
        setIsLogin(!isLogin);

    }
    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>上一页</a>;
        }
        if (type === 'next') {
            return <a>下一页</a>;
        }

        return originalElement;
    };

    const onChange = (page: number) => {
        console.log('Page: ', page);
    };

    return (
        <Layout className={"bg-transparent"}>
            <img src="https://file.xdclass.net/xdclass/20240701/sfTop.gif" alt="小滴课堂"
                 className={"w-full  h-full"}/>
            {/*头部导航*/}
            <Layout.Header className={"!bg-transparent shadow"}>
                <div className={"w-[1200px] h-[67px] mx-auto flex justify-between  items-center space-x-4"}>
                    {/*logo*/}
                    <img src="https://front.cdn.xdclass.net/images/logo.webp" className="w-[138px] h-[63px]"/>
                    {/* 导航*/}
                    {/*<div className={"flex justify-between items-center "}>*/}

                    {/*</div>*/}
                    <Menu mode="horizontal" items={menuItems}
                          className={"flex-1 flex  justify-between items-center"}/>
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
            {/* 内容区域 */}
            <Layout.Content className={"flex flex-col pb-[20px] "}>
                {/*     次要导航 */}
                <SecondaryNav/>
                <Layout.Content className={"flex flex-col mx-auto w-[1200px]"}>
                    <div className={"flex flex-row space-x-4 mt-[20px] "}>
                        <Button
                            className={"bg-[#F38E48] text-white mr-[30px] border-[1px] border-solid border-[#F38E48]"}>最新</Button>
                        <Button
                            className={"text-[#F38E48] bg-white border-[1px] border-solid border-[#F38E48]"}>最热</Button>
                    </div>
                    <MainContent/>
                    <div className={"flex flex-row  justify-center items-center space-x-4 mx-auto mt-4"}>
                        <a>首页</a>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Pagination: {
                                        itemActiveBg: "#555",
                                        itemBg: "#d9d9d9",
                                        colorPrimary: "#fff",
                                        colorPrimaryHover: "#fff",
                                    },
                                },
                            }}
                        >
                            <Pagination total={500} showQuickJumper onChange={onChange} itemRender={itemRender}/>
                        </ConfigProvider>
                        <a>尾页</a>
                    </div>

                </Layout.Content>
            </Layout.Content>
            <Layout.Footer className={" flex justify-around h-[90px]  !p-2 !bg-[#FFF] border-[1px]"}>
                <div className={" mx-auto  !bg-transparent w-[1200px] h-[80px] "}><FooterNav/></div>
            </Layout.Footer>
        </Layout>
    )
}
