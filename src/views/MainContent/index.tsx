import {FC} from "react";
import {CourseModule} from "./SecondaryContent";

const JwRank: FC = () => {
    return (
        <div>卷王排行</div>
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
        extra: <JwRank/>
    },
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
        extra: "F"
    }
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

