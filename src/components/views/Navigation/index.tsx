import {FC} from "react";
import {Layout} from "antd";
import {NavMenu} from "./NavMenu";


export const Navigation: FC = () => {
    return (
        // *表示所有直接子元素
        <Layout className="h-[400px] *:!bg-transparent bg-transparent">
            <Layout.Sider className=" shadow" width={"160px"}>
                <NavMenu/>
            </Layout.Sider>
            <Layout.Content>g</Layout.Content>
            <Layout.Sider width={"180px"}>g</Layout.Sider>

        </Layout>
    )
}