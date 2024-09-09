import {FC, useState} from "react";
import {Carousel, Layout} from "antd";
import {NavMenu} from "./NavMenu";


export const Navigation: FC = () => {
    const [openButton, setOpenButton] = useState(false)
    const handleButtonState = () => {
        setOpenButton(!openButton)
    }
    return (
        // *表示所有直接子元素
        <Layout className="h-[400px] *:!bg-transparent bg-transparent">
            <Layout.Sider className=" shadow-lg  shadow-[#e5e5e5] rounded-[10px]" width={"160px"}>
                <NavMenu/>
            </Layout.Sider>
            <Layout.Content style={{width: "860px", height: "400px", padding: " 0 10px"}}
            >
                <div className={"w-[840px] h-full rounded-xl overflow-hidden"}>
                    <Carousel arrows={true} infinite={true} autoplay={true} autoplaySpeed={2000}>
                        <div>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/VIP.png"}
                                className={"w-full"}/>
                        </div>
                        <div>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/YC.jpg"}
                                className={"w-full"}/>
                        </div>
                        <div>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/JD.jpg"}
                                className={"w-full"}/>
                        </div>
                        <div>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/SF.jpg"}
                                className={"w-full"}/>
                        </div>
                        <div>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/DD.jpg"}
                                className={"w-full"}/>
                        </div>
                        <div>
                            <img
                                src={"https://file.xdclass.net/video/2024/24%E9%87%91%E4%B9%9D%E9%93%B6%E5%8D%81/ALI.jpg"}
                                className={"w-full"}/>
                        </div>


                    </Carousel>
                </div>
            </Layout.Content>
            <Layout.Sider width={"180px"} className={"shadow-lg  shadow-[#e5e5e5] rounded-[10px]"}>
                <div className={"w-full h-[305px] p-[10px] flex flex-col justify-center items-center"}>
                    <img src={"https://front.cdn.xdclass.net/images/new.webp"}/>
                    <div className={"mt-[20px] flex flex-row w-[91px] h-[25px] justify-center items-center"}>
                        <span className={"text-[14px] pr-[10px] "}>弹幕</span>
                        <div className={"w-[41px] h-full"} onClick={handleButtonState}>
                            {openButton ? <img src={"https://front.cdn.xdclass.net/images/danmu/global_open.webp"}/> :
                                <img src={"https://front.cdn.xdclass.net/images/danmu/global_close.webp"}/>}
                        </div>
                    </div>
                </div>
            </Layout.Sider>

        </Layout>
    )
}