import {FC} from "react";
import {CourseModule} from "./SecondaryContent";
import {Button, Carousel} from "antd";
import {ListItem} from "../../components/ListItem";
import {FirstRedHotLogo, ForthRedHotLogo, SecondaryRedHotLogo, ThirdRedHotLogo} from "../../components/CourseCard";

const rankData = [
    {
        key: 1,
        src: "https://file.xdclass.net/user_file/2022/default/41.jpeg",
        title: "滴滴6462",
        time: "97小时21分"
    },
    {
        key: 2,
        src: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/20.jpeg",
        title: "编程小白8673",
        time: "72小时3分"
    },
    {
        key: 3,
        src: "https://file.xdclass.net/user_file/2022/default/27.jpeg",
        title: "编程小白2884",
        time: "30小时13分"
    },
    {
        key: 4,
        src: "https://file.xdclass.net/user_file/2024/09/67688ca67dd2113f9dced224686108f9.jpg",
        title: "编程小白884",
        time: "29小时13分"
    },
    {
        key: 5,
        src: "https://thirdwx.qlogo.cn/mmopen/vi_32/1CmUAeAs2qr9bfHECDP4D1YuSMWE0GdUt6Va2N273icB02SKGThAwvPGuaB4wxibz9N7WbibN3AXKQbn8bbdfzHUw/132",
        title: "编程小白8844",
        time: "28小时13分"
    },
    {
        key: 6,
        src: "https://file.xdclass.net/user_file/2022/default/18.jpeg",
        title: "编程小白8556",
        time: "26小时13分"
    },
    {
        key: 7,
        src: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/21.jpeg",
        title: "编程小白67578",
        time: "20小时13分"
    },
    {
        key: 8,
        src: "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/20.jpeg",
        title: "编程小白853",
        time: "19小时13分"
    },
    {
        key: 9,
        src: "https://file.xdclass.net/user_file/2022/default/24.jpeg",
        title: "编程小白8111",
        time: "5小时13分"
    },
    {
        key: 10,
        src: "https://file.xdclass.net/user_file/2022/default/24.jpeg",
        title: "编程小白8111",
        time: "5小时13分"
    }, {
        key: 11,
        src: "https://file.xdclass.net/user_file/2022/default/24.jpeg",
        title: "编程小白8111",
        time: "5小时13分"
    }, {
        key: 12,
        src: "https://file.xdclass.net/user_file/2022/default/24.jpeg",
        title: "编程小白8111",
        time: "5小时13分"
    }, {
        key: 13,
        src: "https://file.xdclass.net/user_file/2022/default/24.jpeg",
        title: "编程小白8111",
        time: "5小时13分"
    }, {
        key: 14,
        src: "https://file.xdclass.net/user_file/2022/default/24.jpeg",
        title: "编程小白8111",
        time: "5小时13分"
    }

]
const PopularRankData = [
    {
        key: "1",
        titie: "手撕大厂算法-算法刷题大课训练营",
        popular: <FirstRedHotLogo/>
    },
    {
        key: "2",
        titie: "永久会员",
        popular: <SecondaryRedHotLogo number={2}/>
    }, {
        key: "3",
        titie: "全栈-商业级大型前端项目大课-小滴云在线教育平台",
        popular: <ThirdRedHotLogo/>
    }, {
        key: "4",
        titie: "年度会员",
        popular: <ForthRedHotLogo/>
    }, {
        key: "5",
        titie: "年度会员",
        popular: ""
    }, {
        key: "6",
        titie: "年度会员",
        popular: ""
    }, {
        key: "7",
        titie: "独孤求败-小滴云架构大课十八式-最强面试大课...",
        popular: ""
    },


]
const Images = [
    "https://file.xdclass.net/xdclass/%E4%B8%AD%E7%A7%8B/hd.png",
    "https://file.xdclass.net/xdclass/%E4%B8%AD%E7%A7%8B/xd.png",
    "https://file.xdclass.net/video/2022/75-Vue3/banner.jpeg",
    "https://file.xdclass.net/xdclass/%E4%B8%AD%E7%A7%8B/xd.png"
]
export const FirstSiderModule = () => {
    return (
        <div className={"w-284px mt-[16px] shadow-[0_0_10px_0_rgb(213,213,213)] rounded-lg flex flex-col "}>
            <div className={" h-[78px] mt-[10px] ]"}>
                <div
                    className={"flex flex-row justify-between px-[24px] pt-[10px] border-b-[1px]  border-solid h-[35px] "}>
                    <h2> 卷王排行榜</h2>
                    <Button type={"link"} className={"bg-[#a6aaae]  text-white w-[70px ] h-[24px]"}>近七天</Button>
                </div>
                <div className={"flex flex-row  p-[8px] text-[14px] border-b-[1px]  border-solid  h-[44px]"}>
                    <span className={"pl-[16px]"}>排行</span><span className={"pl-[64px]"}>名称</span><span
                    className={"pl-[64px]"}>学习时长</span>
                </div>
            </div>
            <div className={"overflow-y-scroll w-full h-[482px] pt-[5px]"}>
                {
                    rankData.map((item, index) => (
                        <ListItem data={item} key={index}/>
                    ))
                }

            </div>
            <div
                className={"w-full bg-[#F2F2F2] rounded-lg h-[46px] leading-[36px] text-center p-[8px] text-[14px] shadow-lg"}>
                <span>查看更多</span>
            </div>
        </div>
    )
}
export const SecondaryModule = () => {
    return (
        <div className={" shadow-lg "}>
            <div className={" top-0  left-0 h-[618px] pt-[27px] rounded-[10px] relative w-[285px] z-2 "}>
                <img src={"https://front.cdn.xdclass.net/images/svg/hot_list.webp"}
                     className={"w-full h-[137px] rounded-t-lg absolute top-0  z-1"}/>
                <img src={"https://front.cdn.xdclass.net/images/hot_top.webp"}
                     className={"w-[120px] h-[130px] absolute right-2 top-6 z-1 "}/>
                <button
                    className={"bg-[#f2f2f2] text-center text-[#555555] hover:bg-gray-100 hover:text-gray-6 text-[14px] absolute bottom-0 cursor-pointer w-full h-12 z-20"}>查看更多
                </button>
                <span
                    className={"text-[24px]  absolute z-100 float-left font-bold pl-[15px] text-white"}> 热门排行榜</span>
                <div
                    className={"w-[266px] h-[502px] rounded-[10px] absolute bg-white ml-[10px] mt-[70px]  flex flex-col  z-2"}>
                    {PopularRankData.map((item, index) => (
                        <div key={index} className={"w-full h-[54px] flex flex-col cursor-pointer"}>
                            <div className={"h-[54px]"}>
                            <span
                                className={"text-[#ffc132] pt-[6px] pr-[6px] pl-[9px] text-[20px] font-bold"}><em>{item.key}</em></span>
                                <span
                                    className={"text-[14px]    text-ellipsis overflow-hidden  "}>{item.titie}</span>
                            </div>
                            <div className={"w-full h-[14px] flex flex-row justify-end"}>
                                <span className={"h-[18px]"}>{item.popular ? "人气值" : ""}</span>
                                {item.popular}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export const ThirdModule = () => {
    return (
        <div className={"w-full  shadow-lg "}>
            <div className={" h-[136px]"}>
                <Carousel arrows={true} infinite={true} autoplay={true} autoplaySpeed={2000}>
                    {
                        Images.map((item, index) => (
                            <div key={index} className={"w-[284] "}>
                                <img src={item} className={"rounded-t-xl"}/>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className={"h-[485px] mt-[20px] shadow-lg rounded-t-lg overflow-hidden"}>
                <img src={"https://file.xdclass.net/video/2022/22-aliyun/07.png"}/>
            </div>
        </div>
    )
}
export const ForthSiderModule = () => {
    return (
        <div className={"w-full  shadow-lg "}>
            <div className={" h-[136px]  !bg-transparent"}>
                <Carousel arrows={true} infinite={true} autoplay={true} autoplaySpeed={2000}
                          className={"mb-[30px]"}>
                    {
                        Images.map((item, index) => (
                            <div key={index} className={"w-[284] "}>
                                <img src={item} className={"rounded-t-xl"}/>
                            </div>
                        ))
                    }
                </Carousel>
                <SecondaryModule/>
            </div>

        </div>
    )
}
export const FifthSiderModule = () => {
    function getDayOfWeek() {
        const days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        return days[new Date().getDay()];
    }

    return (
        <div className={"shadow-lg mt-[20px]"}>
            <div className={"py-[10px] px-[20px] font-bold text-[16px] h-12 leading-12 "}>
                <p>老黄历</p>
            </div>
            <div className={"p-6 text-center flex flex-col justify-evenly h-[424px] w-[284px] "}>
                <div className={"mb-[20px] "}>
                    {new Date().getFullYear()}年 {new Date().getMonth() + 1}月 {new Date().getDate()}日
                </div>
                <div className={"text-[#ff5353] font-bold"}><em>
                    {
                        getDayOfWeek()
                    }
                </em></div>
                <div className={"bg-[#4d555d] mt-[24px] text-[20px] text-white w-[200px] mx-auto"}>朝向</div>
                <div className={"mt-[9px]"}>坐北朝南</div>
                <div className={"bg-[#f6742e] mt-[24px] text-[20px] text-white w-[200px]  mx-auto"}>宜</div>
                <div>今天可以给女同事买奶茶<br/>有希望</div>
                <div className={"bg-[#ff5353] mt-[24px] text-[20px] text-white w-[200px]  mx-auto"}>忌</div>
                <div>预防前男友复合<br/>
                    预防割韭菜
                </div>
            </div>
        </div>
    )
}
const data = [
    {
        title: "热门课程",
        secondary: "最强王者课程, 冲刺金九银十",
        courses: [
            {
                key: "1",
                src: "https://file.xdclass.net/video/2024/%E7%AE%97%E6%B3%95.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "手撕大厂算法-算法刷题大课训练营",
                level: "高级",
                person: 12897,
                prePrice: 3199,
                curPrice: 2599

            },
            {
                key: "2",
                src: "https://file.xdclass.net/video/2024/CD/zt-cd.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "中间件项目大课-自动化云测平台/Spingboot3.X/微服务/Kafka3.x",
                level: "高级",
                person: 2897,
                prePrice: 399,
                curPrice: 259

            },
            {
                key: "3",
                src: "https://file.xdclass.net/video/2023/cover/qd2.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈多端低代码平台项目大课-系统化掌握React生态体系",
                level: "高级",
                person: 12097,
                prePrice: 3499,
                curPrice: 599

            },
            {
                key: "",
                src: "https://file.xdclass.net/video/2022/85-%E6%9E%B6%E6%9E%84%E5%A4%A7%E8%AF%BE/cover.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "独孤求败-小滴云架构大课十八式-最强面试大课",
                level: "高级",
                person: 12297,
                prePrice: 399,
                curPrice: 299

            },
            {
                key: "4",
                src: "https://file.xdclass.net/video/2022/%E5%89%8D%E7%AB%AF%E5%A4%A7%E8%AF%BE/%E4%B8%BB%E5%9B%BE.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈-商业级大型前端项目大课-小滴云在线教育平台",
                level: "高级",
                person: 1497,
                prePrice: 5199,
                curPrice: 1599

            },
            {
                key: "5",
                src: "https://file.xdclass.net/video/2021/71-HLSJCL/cover.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "微服务架构-海量数据商用短链平台项目大课【完结】",
                level: "高级",
                person: 12797,
                prePrice: 3169,
                curPrice: 2399

            }
        ],
        extra: <FirstSiderModule/>
    },
    {
        title: "新课上线",
        secondary: "主流技术, 持续充电",
        courses: [
            {
                key: "1",
                src: "https://file.xdclass.net/video/2024/Python3.12/zhutu.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "手撕大厂算法-算法刷题大课训练营",
                level: "高级",
                person: 12897,
                prePrice: 3199,
                curPrice: 2599
            },
            {
                key: "2",
                src: "https://file.xdclass.net/video/2024/selenium/zhutu2.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "中间件项目大课-自动化云测平台/Spingboot3.X/微服务/Kafka3.x",
                level: "高级",
                person: 2897,
                prePrice: 399,
                curPrice: 259

            },
            {
                key: "3",
                src: "https://file.xdclass.net/video/2024/javase/Javazhutu.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈多端低代码平台项目大课-系统化掌握React生态体系",
                level: "高级",
                person: 12097,
                prePrice: 3499,
                curPrice: 599

            },
            {
                key: "4",
                src: "https://file.xdclass.net/video/2024/yxcx/zt.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "独孤求败-小滴云架构大课十八式-最强面试大课",
                level: "高级",
                person: 12297,
                prePrice: 399,
                curPrice: 299

            },
            {
                key: "5",
                src: "https://file.xdclass.net/video/2024/vue3/zhutu.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈-商业级大型前端项目大课-小滴云在线教育平台",
                level: "高级",
                person: 1497,
                prePrice: 5199,
                curPrice: 1599

            },
            {
                key: "6",
                src: "https://file.xdclass.net/video/2023/cover/nestjs.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "微服务架构-海量数据商用短链平台项目大课【完结】",
                level: "高级",
                person: 12797,
                prePrice: 3169,
                curPrice: 2399

            }
        ],
        extra: <SecondaryModule/>
    },
    {
        title: "20K面试必备",
        secondary: "分布式应用+数据库底层+设计模式",
        courses: [
            {
                key: "1",
                src: "https://file.xdclass.net/video/2022/62-PaaS/cover.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "手撕大厂算法-算法刷题大课训练营",
                level: "高级",
                person: 12897,
                prePrice: 3199,
                curPrice: 2599

            },
            {
                key: "2",
                src: "https://file.xdclass.net/video/2020-12%20%E5%AE%98%E7%BD%91%E8%B6%85100k%E4%B8%BB%E5%9B%BE%E6%9B%B4%E6%96%B0/%E4%B8%BB%E5%9B%BE/57-alibabacloud.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "中间件项目大课-自动化云测平台/Spingboot3.X/微服务/Kafka3.x",
                level: "高级",
                person: 2897,
                prePrice: 399,
                curPrice: 259

            },
            {
                key: "3",
                src: "https://file.xdclass.net/video/2020-12%20%E5%AE%98%E7%BD%91%E8%B6%85100k%E4%B8%BB%E5%9B%BE%E6%9B%B4%E6%96%B0/%E4%B8%BB%E5%9B%BE/58-sjms.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈多端低代码平台项目大课-系统化掌握React生态体系",
                level: "高级",
                person: 12097,
                prePrice: 3499,
                curPrice: 599

            },
            {
                key: "4",
                src: "https://file.xdclass.net/video/2021/64-redis6/cover.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "独孤求败-小滴云架构大课十八式-最强面试大课",
                level: "高级",
                person: 12297,
                prePrice: 399,
                curPrice: 299

            },
            {
                key: "5",
                src: "https://file.xdclass.net/video/2021/65-kafka/xzt.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈-商业级大型前端项目大课-小滴云在线教育平台",
                level: "高级",
                person: 1497,
                prePrice: 5199,
                curPrice: 1599

            },
            {
                key: "6",
                src: "https://file.xdclass.net/video/2022/72-ShardingJDBC/cover.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "微服务架构-海量数据商用短链平台项目大课【完结】",
                level: "高级",
                person: 12797,
                prePrice: 3169,
                curPrice: 2399

            }
        ],
        extra: <ThirdModule/>
    },
    {
        title: "20K面试必备",
        secondary: "分布式应用+数据库底层+设计模式",
        courses: [
            {
                key: "1",
                src: "https://file.xdclass.net/video/2024/vue3/zhutu.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "新版Vue3.4+ElementPlus全家桶开发视频项目实战",
                level: "",
                person: "",
                prePrice: "",
                curPrice: "",

            },
            {
                key: "2",
                src: "https://file.xdclass.net/video/2023/cover/qd2.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "中间件项目大课-自动化云测平台/Spingboot3.X/微服务/Kafka3.x",
                level: "",
                person: "",
                prePrice: "",
                curPrice: "",

            },
            {
                key: "3",
                src: "https://file.xdclass.net/video/2022/%E5%89%8D%E7%AB%AF%E5%A4%A7%E8%AF%BE/%E4%B8%BB%E5%9B%BE.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈多端低代码平台项目大课-系统化掌握React生态体系",
                level: "",
                person: "",
                prePrice: "",
                curPrice: "",

            },
            {
                key: "4",
                src: "https://file.xdclass.net/video/2022/79-vue%2Bnode%2Bmysql/cover.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈-商业级大型前端项目大课-小滴云在线教育平台",
                level: "",
                person: "",
                prePrice: "",
                curPrice: "",

            },

        ],
        extra: ""
    },
    {
        title: "三大消息中间件+分布式调度",
        secondary: "掌握业界主流三大消息队列",
        courses: [
            {
                key: "1",
                src: "https://file.xdclass.net/video/2020-12%20%E5%AE%98%E7%BD%91%E8%B6%85100k%E4%B8%BB%E5%9B%BE%E6%9B%B4%E6%96%B0/%E4%B8%BB%E5%9B%BE/24-RocketMQ4.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "手撕大厂算法-算法刷题大课训练营",
                level: "高级",
                person: 12897,
                prePrice: 3199,
                curPrice: 2599

            },
            {
                key: "2",
                src: "https://file.xdclass.net/video/2024/kc/1.jpg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "中间件项目大课-自动化云测平台/Spingboot3.X/微服务/Kafka3.x",
                level: "高级",
                person: 2897,
                prePrice: 399,
                curPrice: 259

            },
            {
                key: "3",
                src: "https://file.xdclass.net/video/2021/65-kafka/xzt.png?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "全栈多端低代码平台项目大课-系统化掌握React生态体系",
                level: "高级",
                person: 12097,
                prePrice: 3499,
                curPrice: 599

            },
            {
                key: "4",
                src: "https://file.xdclass.net/video/2022/81-XXL-JOB/cover.jpeg?x-oss-process=image/resize,m_lfit,w_1920,h_1920/format,webp",
                title: "独孤求败-小滴云架构大课十八式-最强面试大课",
                level: "高级",
                person: 12297,
                prePrice: 399,
                curPrice: 299

            },

        ],
        extra: ""
    },


]
export const MainContent: FC = () => {
    return (
        <div>

            {
                data.map((datum, index) => (
                    <CourseModule key={index} title={datum.title} secondary={datum.secondary}
                                  courses={datum.courses}
                                  extra={datum.extra}/>
                ))
            }
        </div>
    )
}

