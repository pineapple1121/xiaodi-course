import {TeacherCard} from "../../../components/TeacherCard";
import {Carousel} from "antd";


const teachers = [
    {
        picture: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJoC7iczcqvp78u1f0HrJicdrs5KXX81udJU4339X5Q2YKJwlWJUiavOSex0trNqOy7TduHrXgbCTzMQ/132",
        tName: "小D",
        title: "现任讲师",
        info: "前荔枝FM架构师、阿里资深工程师||曾任职于阿里巴巴担任多个项目负责人，阿里云栖社区技术专家，现任小滴科技CTO||CSDN、极客学院、小滴课堂金牌讲师，累计观看用户100万+||8年开发架构经验，精通java,擅长分布式高并发架构,自动化压力测试，微服务容器化k8s等"
    },
    {
        picture: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/18.jpeg",
        tName: "Daniel",
        title: "现任讲师",
        info: "前欢聚时代资深工程师||任职于阿里巴巴和欢聚时代，直播间装载等多项专利||独立架构千万级别日活动态系统，是多个项目的第一负责人||CSDN、小滴课堂金牌讲师擅长高并发、高可用项目搭建，并在高并发场景选择合适解决方案，拥有亿级高并发服务应用搭建经验。是“直播间装载解决方案”等多项技术专利第一发明人。"
    },
    {
        picture: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/13.jpeg",
        tName: "Louis",
        title: "现任讲师",
        info: "蚂蚁金服资深工程师||曾任职于阿里巴巴，多个项目负责人，多个开源项目的代码贡献者||在阿里巴巴负责多个高并发高负载的项目，参与过多次双11大促||CSDN，小滴课堂金牌讲师；9年开发经验，精通java，c语言，熟悉大数据处理与挖掘，擅长微服务分布式系统设计"
    },
    {
        picture: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/14.jpeg",
        tName: "Nick",
        title: "现任讲师",
        info: "BAT大厂资深前端工程师||曾任某知名互联网公司资深前端工程师，团队负责人，现小滴课堂资深全栈工程师||CSDN、小滴课堂金牌讲师、开源社区布道师||拥有8年前端开发经验，擅长前端自动化、工程化、模块化、数据可视化开发，熟悉MVVM模式，精通vue.js、nodejs、angular、react等技术栈的开发使用"
    },
    {
        picture: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/15.jpeg",
        tName: "Tim",
        title: "现任讲师",
        info: "美的集团资深前端工程师||曾任职于美的集团担任多个项目负责人||CSDN、小滴课堂金牌讲师，累计观看用户100万+||8年前端+架构经验，精通vue、react，擅长node等技术。历经jQuery时代到模块化，到大前端，再到现在小程序、混合app开发的多元化时代"
    },
    {
        picture: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg",
        tName: "小C",
        title: "现任讲师",
        info: "中国移动资深运维工程师||曾任某知名互联网公司高级运维工程师、DBA||CSDN、极客学院、小D课堂金牌讲师，累计观看用户30万+||拥有6年系统运维经验，擅长Docker虚拟化、nginx，tomcat，keepalived，LVS，Mysql、HAProxy、等服务集群部署、优化维护，shell，python自动化运维"
    }
]
export const TeaInfo = () => {
    return (
        <div className={"teacher-info w-[1200px]  h-[401px] flex flex-col mt-[10px] shadow-lg"}>
            <div className={"flex flex-row "}>
                <img src={"https://front.cdn.xdclass.net/images/svg/jsjs.webp"} alt={"讲师介绍"}
                     className={"w-[29px] h-[29px] mr-[5px]"}/>
                <p className={"text-[16px] text-[#4f555d]"}>讲师介绍</p>
            </div>

            <Carousel autoplaySpeed={2000} autoplay centerMode
                      pauseOnHover={true}
                      slidesToShow={3}
                      className={"mt-[22px]"}
            >
                {teachers.map((item, index) => (<TeacherCard data={item} key={index}/>))}
            </Carousel>


        </div>
    )
}