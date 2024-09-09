import {FC} from "react";

const listMenus = [
    {
        key: "1",
        src: "https://file.xdclass.net/new_website/icon/h5.png",
        name: "前端一对一",
        info: "零基础到就业培训"
    },
    {
        key: "2",
        src: "https://file.xdclass.net/new_website/icon/java.png",
        name: "后端一对一",
        info: "零基础到就业培训"
    },
    {
        key: "3",
        src: "https://file.xdclass.net/new_website/icon/hd.png",
        name: "海量数据处理",
        info: "商用短链平台大课"
    },
    {
        key: "4",
        src: "https://file.xdclass.net/new_website/icon/jd.png",
        name: "云架构大课十八式",
        info: "系统化架构能力提升"
    },
    {
        key: "5",
        src: "https://file.xdclass.net/video/2022/VIP/vip_icon.png",
        name: "永久会员",
        info: "全网专题课程免费学"
    }
]

export const NavList: FC<{ className?: string }> = (props) => {
    return (
        <div className={"rounded-xl flex flex-row w-full h-full".concat(" ", props.className || "")}>
            {
                listMenus.map((item) => (
                    <div key={item.key} className={"w-[153px] h-[50x] flex flex-row mx-[43.5px] cursor-pointer"}>
                        <img src={item.src} className={"mr-[7px] w-[50px] h-[50px]"}/>
                        <div className={"w-[96px] h-[39px] pt-[8px]"}>
                            <h3 className={"text-[#404040] text-[12px] "}>{item.name}</h3>
                            <p className={"text-[#555555] text-[10px]"}>{item.info}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}