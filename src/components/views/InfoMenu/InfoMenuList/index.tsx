import {UserOutlined} from "@ant-design/icons";
import {FC} from "react";

export const InfoMenuList: FC<{
    date: {
        key: string,
        src: string,
        title: string,
        level: string,
        person: number,
        prePrice: number,
        curPrice: number
    },

}> = (props) => {
    return (
        <div
            className={"w-[280px] h-[329px] pt-[12px] pb-[17px] shadow-xl rounded-[10px]  shadow-[#e5e5e5] flex flex-col mb-[10px] mr-[10px]"}>
            <div className={"overflow-hidden relative"}>
                <p className={"absolute top-0 right-0 z-100 py-[2px] px-[8px] bg-[#F59A23] text-white rounded-bl-lg"}>会员特惠</p>
                <img
                    src={props.date.src}
                    className={"w-full h-[190px] rounded-t-[10px]"}/>
            </div>
            <div className={"p-[10px] flex flex-col w-full"}>
                <div className={"h-[32px]"}>
                    <p className={"text-[#404040] leading-[16px] text-[14px]"}>{props.date.title}</p>
                </div>
                <div className={"flex flex-row text-[#7F7F7F] h-[22px] mt-[5px] text-[14px]"}>
                    级别：<span className={"ml-[12px]"}>{props.date.level}</span>
                    <div className={"flex flex-row items-center justify-center"}>
                        <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
                        <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
                        <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
                        <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
                        <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
                    </div>
                </div>
                <div className={"flex flex-row justify-between mt-[5px] h-[25px]"}>
                    <div><UserOutlined className={"text-[#7F7F7F] "}/> <span
                        className={"text-[#7F7F7F] "}>{props.date.person}</span>
                    </div>
                    <div className={"flex flex-row"}>
                        <div className={" text-[#7F7F7F] flex flex-row"}>￥<span className={""}><del>{props.date.prePrice}</del></span>
                        </div>
                        <div className={" text-red-700 flex flex-row"}>￥<span
                            className={""}>{props.date.curPrice}</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}