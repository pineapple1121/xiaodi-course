import {FC} from "react";
import {Layout} from "antd";
import {SecondaryContentProps} from "./props";
import {CourseCard} from "../../../components/CourseCard";


export const CourseModule: FC<SecondaryContentProps> = (props) => {
    return (

        <Layout className={"bg-transparent "}>
            <Layout.Header className={"bg-transparent w-[1200px] h-[20px] mx-auto my-[20px] p-0 flex flex-row"}>
                <div className={"flex flex-row items-center"}>
                    <img src={"https://front.cdn.xdclass.net/images/icon_hot.webp"}
                         className={"w-[29px] h-[29px] mr-[5px]"}/>
                    <h2 className={"text-[16px] text-[#4f555d]"}>{props.title}</h2>
                </div>
                <div className={"text-[14px] ml-[48px] mr-[40px] flex flex-col h-[20px] leading-[20px]"}>
                    {props.secondary}
                </div>
            </Layout.Header>

            <Layout className={"!bg-transparent "}>
                <Layout.Content className={"w-[916px] flex  flex-row flex-wrap  justify-between"}>
                    {
                        props.courses.map((item, index) => (
                            <CourseCard data={item} key={index}/>
                        ))
                    }
                </Layout.Content>
                <Layout.Sider width={props.extra ? 285 : 0} theme={"light"} className={"pt-[20px] ml-[14px] "}>
                    {props.extra}
                </Layout.Sider>
            </Layout>
        </Layout>


    )
}