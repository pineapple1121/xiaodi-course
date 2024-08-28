import {Layout} from "antd";

const navigationOptions = ["首页", "课程中心", "超级会员", "工具", "自学路线", ""]
export const Index = () => {
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
                    <div className={"flex justify-between items-center"}>

                    </div>
                    {/*登录注册*/}
                    <div></div>
                </div>
            </Layout.Header>

        </Layout>
    )
}