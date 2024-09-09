import {FC, useState} from "react";
import {List, Popover, Space} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";

const menuItems = [
    {
        key: "1",
        title: "后端 | 架构",
        base: ["java", "Python", "SpringBoot"],
        advanced: ["分布式中间件", "高并发"]
    },
    {
        key: "2",
        title: "前端 | 全栈",
        base: ["必备基础"],
        advanced: ["热门框架化", "全栈工程师"]
    },
    {
        key: "3",
        title: "测试  | 测开",
        base: ["语言&工具"],
        advanced: ["接口&自动化功能测试"]
    },
    {
        key: "4",
        title: "运维 | 容器",
        base: ["开发和服务器基础"],
        advanced: ["运维和容器"]
    }, {
        key: "5",
        title: "架构 | 管理",
        base: ["必备基础"],
        advanced: ["架构和项目管理", "全栈工程师"]
    }, {
        key: "6",
        title: "算法 | 人工智能",
        base: ["必备基础"],
        advanced: ["热门框架化", "全栈工程师"]
    }, {
        key: "7",
        title: "大数据 ",
        base: ["必备基础"],
        advanced: ["热门框架化", "全栈工程师"]
    },

]

export const NavMenu: FC = () => {
    const [course, setCourse] = useState({base: [] as string[], advance: [] as string[]})
    return (
        <Popover content={<NavPopoverContent base={course.base} advance={course.advance}/>}
                 placement={"rightTop"} arrow={false} overlayClassName={"[&_.ant-popover-inner]:p-0"}>
            <div className="py-2.5 h-[400px] ">
                <List split={false}>
                    {
                        menuItems.map(item => (
                            <List.Item key={item.key} extra={<CaretRightOutlined className={"mr-2 cursor-pointer"}/>}
                                       className={"!pl-5 h-[54px] hover:bg-[#434b52] hover:text-white cursor-pointer"}
                                       onMouseEnter={() => {
                                           setCourse({base: item.base, advance: item.advanced})
                                       }}
                            >
                                {item.title}
                            </List.Item>
                        ))
                    }
                </List>
            </div>
        </Popover>
    )
}

const courseImageItems = [
    {
        key: "1",
        src: "https://file.xdclass.net/video/2024/selenium/zhutu2.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
        title: "24年爬虫WebUI 自动化测试 Selenium4.X+TestNG【Java版本】",
        level: "高级",
        price: 67

    },
    {
        key: "2",
        src: "https://file.xdclass.net/video/2024/javase/Javazhutu.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
        title: "24年新版JavaSE-自学从入门到多案例项目教程JDK21 + IDEA 旗舰版 ",
        level: "中级",
        price: 29

    },
    {
        key: "3",
        src: "https://file.xdclass.net/video/2023/cover/nestjs.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
        title: "新一代Node框架NestJS入门到项目实战-低代码大课必备技术",
        level: "高级",
        price: 69

    },
    {
        key: "4",
        src: "https://file.xdclass.net/video/2023/cover/74.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
        title: "新版-玩转Git零基础到进阶实战 git视频急速入门",
        level: "高级",
        price: 39

    }
]
const NavPopoverContent: FC<{ base: string[], advance: string[] }> = (props) => {
    return (
        <div className="h-[400px] p-6  flex flex-col space-y-6 w-[586px]">
            <Space direction={"vertical"}>
                <span>基础课程</span>
                <div>
                    {
                        props.base.map((item, index) => (
                            <span key={index} className={"ml-4  text-xs"}>{item}</span>
                        ))
                    }
                </div>
            </Space>
            <Space direction={"vertical"}>
                <span>进阶课程</span>
                <div>
                    {
                        props.advance.map((item, index) => (
                            <span key={index} className={"ml-4 text-xs cursor-pointer"}>{item}</span>
                        ))
                    }
                </div>
            </Space>

            <div className={"flex flex-row flex-wrap"}>
                {
                    courseImageItems.map((item, index) => (
                        <CourseItem key={index} data={item} className={"w-[268px] mb-[20px]  "}/>
                    ))
                }
            </div>

        </div>
    )
}
const CourseItem: FC<{
    data: { src: string, title: string, level: string, price: number },
    className?: string
}> = (props) => {
    return (
        <div className={"h-[70px] flex-row flex".concat(" ", props.className || "")}>
            <img src={props.data.src} className="w-[110px] h-[70px]"/>
            <div className={"ml-[8px]  w-[170px] h-[70px]"}>
                    <span
                        className="text-ellipsis whitespace-nowrap overflow-hidden w-[150px] block">{props.data.title}</span>
                <div className={"flex flex-row"}>
                    <span>{props.data.level}</span>
                    <span>￥<span className={"text-red-700 font-bold"}>{props.data.price}</span></span>
                </div>
            </div>
        </div>
    )
}