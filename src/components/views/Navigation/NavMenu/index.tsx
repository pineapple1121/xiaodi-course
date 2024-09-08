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
        title: "前端端 | 全栈",
        base: ["必备基础"],
        advanced: ["热门框架化", "全栈工程师"]
    }

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
        title: "24年爬虫WebUI 自动化测试 Selenium4.X+TestNG【Java版本】",
        level: "高级",
        price: 67

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
                        <CourseItem key={index} data={item} className={"w-[268px] "}/>
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
                    <span>￥<span>{props.data.price}</span></span>
                </div>
            </div>
        </div>
    )
}