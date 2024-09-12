import {Button} from "antd";

const Items = [
    {
        title: "方向",
        info: ["后端&架构", "前端&全栈"],
    },
    {
        title: "分类",
        info: ["Java", "Python", "SpringBoot", "分布式&中间件&高并发", "Cloud微服务&容器化", "综合项目实战", "必备基础", "热门框架/工程化", "全栈工程师", "综合项目实战", "接口&功能自动化测试"]
    },
    {
        title: "类型",
        info: ["免费", "付费"]
    }
]
export const SecondaryNav = () => {
    return (

        <div className={"w-full mx-auto bg-[#F9F9F9]"}>
            <div className={"w-[1200px]  mx-auto mt-[20px] h-[150px] text-center space-y-2 "}>
                {Items.map((item, index) => (
                    <div className={"flex flex-row justify-start space-x-6 my-[14px]]"} key={index}>
                        <span className={"items-center flex font-bold text-[16px]"}>{item.title}：</span>
                        <Button className={"bg-[#F38E48] text-white"}> 全部</Button>
                        <div className={"flex flex-row flex-wrap  justify-start space-x-4 items-center  "}>
                            {item.info.map((_, index) => (
                                <span>
                                    {item.info[index]}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}