import {Layout} from "antd";

import {Navigation} from "../views/Navigation";
import {NavList} from "../views/NavList";
import {MainContent} from "../views/MainContent";
import {TeaInfo} from "../views/Navigation/TeaInfo";
import {FooterNav} from "../views/Navigation/FooterNav";
import {HeaderNav} from "../components/HeaderNav";


export const Index = () => {
    return (
        <Layout className={"w-full bg-transparent"}>
            <HeaderNav/>
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
                <FooterNav/>
            </Layout.Footer>
        </Layout>

    )
}