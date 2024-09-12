import {FC} from "react";
import {UserOutlined} from "@ant-design/icons";
import {Course} from "./props";

export const CourseCard: FC<{
    data: Course,
}> = (props) => {
    return (
        <div
            className={"w-[280px]  pt-[12px] pb-[15px] shadow-xl rounded-[10px]  shadow-[#e5e5e5] flex flex-col "}>
            <div className={"overflow-hidden relative"}>
                <p className={"absolute top-0 right-0 z-100 py-[2px] px-[8px] bg-[#F59A23] text-white rounded-bl-lg"}>会员特惠</p>
                <img
                    src={props.data.src}
                    className={"w-full h-[190px] rounded-t-[10px]"}/>
            </div>
            <div className={"p-[10px] flex flex-col w-full"}>
                <div className={"h-[32px]"}>
                    <p className={"text-[#404040] leading-[16px] text-[14px]"}>{props.data.title}</p>
                </div>
                {
                    props.data.person && props.data.level && props.data.curPrice && props.data.prePrice ? <div>
                        <div className={"flex flex-row text-[#7F7F7F] h-[22px] mt-[5px] text-[14px]"}>
                            级别：<span className={"ml-[6px]"}>{props.data.level}</span>
                            <div className={"pl-[12px] pt-[2px]"}>
                                <GrayHotLogo/>
                            </div>
                        </div>

                        <div className={"flex flex-row justify-between mt-[5px] h-[25px]"}>
                            <div><UserOutlined className={"text-[#7F7F7F] "}/> <span
                                className={"text-[#7F7F7F] "}>{props.data.person}</span>
                            </div>
                            <div className={"flex flex-row"}>
                                <div className={" text-[#7F7F7F] flex flex-row"}>￥<span className={""}><del>{props.data.prePrice}</del></span>
                                </div>
                                <div className={" text-red-700 flex flex-row"}>￥<span
                                    className={""}>{props.data.curPrice}</span>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                }
            </div>

        </div>
    )
}
export const GrayHotLogo: FC<{ classname?: string }> = () => {
    return (
        <div className={"flex flex-row items-center justify-center pl-[4px] pt-[2px]"}>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
        </div>
    )


}
export const FirstRedHotLogo: FC<{ classname?: string }> = () => {
    return (
        <div className={"flex flex-row items-center justify-center pl-[4px] pt-[2px]"}>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
        </div>
    )
}
export const SecondaryRedHotLogo: FC<{ number: 1 | 2 | 3 | 4 | 5 }> = (props) => {
    return (
        <div className={"flex flex-row items-center justify-center pl-[4px] pt-[2px]"}>
            {

                Array(props.number).fill(0).map((_, index) => (
                    <img key={index} src={"https://front.cdn.xdclass.net/images/fire_active.webp"}
                         className={"w-[14px] h-[14px]"}/>))
            }
            {

                Array(5 - props.number).fill(0).map((_, index) => (
                    <img key={index} src={"https://front.cdn.xdclass.net/images/fire.webp"}
                         className={"w-[14px] h-[14px]"}/>))
            }
        </div>
    )
}
export const ThirdRedHotLogo = () => {
    return (
        <div className={"flex flex-row items-center justify-center pl-[4px] pt-[2px]"}>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
        </div>
    )
}
export const ForthRedHotLogo = () => {
    return (
        <div className={"flex flex-row items-center justify-center pl-[4px] pt-[2px]"}>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire_active.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
            <img src={"https://front.cdn.xdclass.net/images/fire.webp"} className={"w-[14px] h-[14px]"}/>
        </div>
    )
}