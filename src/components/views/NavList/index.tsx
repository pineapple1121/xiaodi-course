import {NavListMenu} from "./NavListMenu";

export const NavList = () => {
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
    return (
        <div className={"rounded-xl flex flex-row w-full h-full"}>

            {
                listMenus.map((item, index) => (
                    <NavListMenu date={item} key={index}/>
                ))
            }


        </div>
    )
}