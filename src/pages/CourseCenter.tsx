import {Button, ConfigProvider, Layout, Pagination, PaginationProps,} from "antd";

import {SecondaryNav} from "../views/Navigation/SecondaryNav";
import {FooterNav} from "../views/Navigation/FooterNav";
import {CSMainContent} from "../views/CSMainContent";
import {HeaderNav} from "../components/HeaderNav";


export const CourseCenter = () => {

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
        <Layout className={" w-full bg-transparent"}>
            {/* 头部区域 */}
            <HeaderNav/>
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
                    <CSMainContent/>
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
                <FooterNav/>
            </Layout.Footer>
        </Layout>
    )
}
