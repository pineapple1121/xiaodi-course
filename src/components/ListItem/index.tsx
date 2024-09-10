import {FC} from "react";

export const ListItem: FC<{ data: { key: number, src: string, title: string, time: string } }> = (props) => {
    return (
        <div className={"w-full py-[10px] flex flex-row h-[38px] mt-[15px]"}>
            <span className={"text-[24px] w-[69px] block text-center"}>{props.data.key}</span>
            <div className={"flex flex-row w-[118px] h-[36px] pr-[2px] "}>
                <div className={" rounded-[18px] bg-blue-400 w-[36px] h-full relative overflow-hidden"}>
                    <img src={"https://front.cdn.xdclass.net/images/vip_icon.webp"}
                         className={"w-[20px] h-[20px] absolute bottom-0 right-0"}/>
                    <img src={props.data.src}
                         className={"w-[36px] h-[36px]"}/>
                </div>
                <span
                    className={"text-[12px] text-[#000000D9] whitespace-nowrap w-[52px] ml-[9px]  overflow-hidden leading-[36px] text-ellipsis"}>
                    {props.data.title}
                </span>
            </div>
            <span className={"text-[12px] text-[#000000D9] text-center leading-[36px] inline-block"}>
                {props.data.time}
            </span>
        </div>
    )
}