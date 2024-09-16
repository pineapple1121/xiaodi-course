import {CourseModule} from "../MainContent/SecondaryContent";
import {FifthSiderModule, ForthSiderModule} from "../MainContent";


const data = [
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
        extra: <ForthSiderModule/>
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
        extra: <FifthSiderModule/>
    },


]
export const CSMainContent = () => {
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