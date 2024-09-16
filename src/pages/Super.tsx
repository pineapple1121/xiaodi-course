import {Carousel, Layout} from "antd";


import {FooterNav} from "../views/Navigation/FooterNav";

import {HeaderNav} from "../components/HeaderNav";

export const Super = () => {
    return (
        <Layout className={"bg-transparent"}>
            {/* 头部 */}
            <HeaderNav/>
            {/* 内容区域 */}
            <Layout.Content className={"flex flex-col pb-[20px] mx-auto w-full  relative"}>
                <img src={"https://front.cdn.xdclass.net/images/vip/vip_bg.webp "}
                     className={"w-full h-[480px] mt-[20px]  absolute top-0 l eft-0 "}/>
                <div className={"w-[1200px]  mx-auto flex flex-col justify-between mt-[40px] relative"}>
                    <div className={"flex flex-col justify-center items-center   "}>

                        <h2 className={"text-[#efd3a2] bg-transparent  text-[120px] tracking-[2px]  z-50 shadow-lg"}>开通超级会员</h2>
                        <h2 className={"text-[#614d28] bg-transparent   text-[120px] tracking-[2px] absolute top-[2px] left-[239px] "}>开通超级会员</h2>


                        <div className={"text-[24px] text-[#ffffff]"}>
                            <h2>
                                可全网免费观看海量在线专题课程：Java基础、数据库、JavaWeb、JavaEE前沿框架、互联网新技术……
                            </h2>
                            <h2>
                                粉丝数以万计，好评如潮！适合自学、代码量大、案例多、实战性强、技术前沿的IT系列课程！
                            </h2>
                        </div>
                    </div>
                    <div
                        className={"mx-auto w-full  shadow-lg rounded-lg border-[1px] flex flex-col  justify-between z-50 mt-[20px] bg-white h-[320px] py-[30px] px-[70px]"}>
                        <div className={" flex flex-row justify-between "}>
                            <div className={"flex flex-col justify-start   "}>
                                <p className={"text-[#dca54f] text-[40px]"}>会员权益</p>
                                <div className={"w-[76px] h-[4px] bg-[#efd3a2] mt-[10px] mb-[16px]"}></div>
                                <p className={"text-[20px] text-[#614d28]"}>加入小滴课堂（年度/永久）会员，可享受以下权益</p>
                            </div>
                            <div className={"flex flex-col  "}>
                                <p>开通会员支持以下支付方式</p>
                                <div className={"flex flex-row items-center justify-between pt-[22px] w-[489px] "}>
                                    <img src="https://front.cdn.xdclass.net/images/pay/wechat_large.webp"
                                         alt="微信支付" className={"border-[1px] p-[2px]"}/>
                                    <img src="https://front.cdn.xdclass.net/images/pay/huabei_large.webp"
                                         alt="花呗支付" className={"border-[1px] p-[2px]"}/>
                                    <img src="https://front.cdn.xdclass.net/images/pay/alipay_large.webp" alt="支付宝"
                                         className={"border-[1px] p-[2px]"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-row items-center justify-start"}>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/hlkc.webp "}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>海量课程</p>
                            </div>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/zxkc.webp "}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>最新课程</p>
                            </div>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/yxnt.webp"}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>优享内推</p>
                            </div>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/zxkc.webp "}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>简历辅导</p>
                            </div>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/sqfw.webp "}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>社群服务</p>
                            </div>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/xshd.webp "}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>现实活动</p>
                            </div>
                            <div className={"mr-[93px] "}>
                                <div
                                    className={"bg-[#efd3a2] w-[68px] h-[68px]  rounded-[68px] overflow-hidden flex flex-row justify-center items-center"}>
                                    <img src={"https://front.cdn.xdclass.net/images/vip/zxyh.webp "}
                                         className={"w-[46px] h-[46px] text-center"}/>
                                </div>
                                <p>专享特惠</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"w-[1200px] my-[70px] mx-auto flex flex-row justify-between "}>
                    <div className={"w-[360px] h-[280px] flex flex-col relative"}>
                        <img src={"https://front.cdn.xdclass.net/images/vip/vip_bg.webp"}
                             className={"rounded-[20px] w-[367px] h-[200px] absolute top-0 left-0 -z-10"}/>
                        <div className={"py-[27px] px-[32px]  flex flex-col relative"}>
                            <span
                                className={"text-[#fbd39f] mb-[5px] text-[25px]"}>永久会员</span>
                            <span
                                className={"mb-[5px] text-[16px]  text-white"}><del>原价：3000</del></span>
                            <span
                                className={"text-[#efd3a2] text-[20px] mb-[5px]"}>现价:￥2199</span>
                            <span className={"text-[20px] text-white"}>有效期：永久</span>
                            <img src={"https://front.cdn.xdclass.net/images/vip/forever_vip.webp"}
                                 className={"absolute w-[100px] h-[120px] right-[15px] -bottom-[15px]"}/>
                        </div>
                        <div
                            className={"mt-[30px] bg-[#eace9d] rounded-[5px]  font-bold h-[50px] p-[1px] leading-[48px] w-[220px] text-center mx-auto"}>
                            立即开通

                        </div>
                    </div>
                    <div className={"w-[360px] h-[280px] flex flex-col relative"}>
                        <img src={"https://front.cdn.xdclass.net/images/vip/vip_bg.webp"}
                             className={"rounded-[20px] w-[367px] h-[200px] absolute top-0 left-0 -z-10"}/>
                        <div className={"py-[27px] px-[32px]  flex flex-col relative"}>
                            <span
                                className={"text-[#fbd39f] mb-[5px] text-[25px]"}>永久会员</span>
                            <span
                                className={"mb-[5px] text-[16px]  text-white"}><del>原价：1299</del></span>
                            <span
                                className={"text-[#efd3a2] text-[20px] mb-[5px]"}>现价:￥1099</span>
                            <span className={"text-[20px] text-white"}>有效期：一年</span>
                            <img src={"https://front.cdn.xdclass.net/images/vip/year_vip.webp"}
                                 className={"absolute w-[100px] h-[120px] right-[15px] -bottom-[15px]"}/>
                        </div>
                        <div
                            className={"mt-[30px] bg-[#797f84] text-white rounded-[5px]  font-bold h-[50px] p-[1px] leading-[48px] w-[220px] text-center mx-auto"}>
                            立即开通

                        </div>
                    </div>
                    <div className={"w-[360px] h-[280px] flex flex-col relative"}>
                        <img src={"https://front.cdn.xdclass.net/images/vip/vip_bg.webp"}
                             className={"rounded-[20px] w-[367px] h-[200px] absolute top-0 left-0 -z-10"}/>
                        <div className={"py-[27px] px-[32px]  flex flex-col relative"}>
                            <span
                                className={"text-[#fbd39f] mb-[5px] text-[25px]"}>永久会员</span>
                            <span
                                className={"mb-[5px] text-[16px]  text-white"}><del>原价：399</del></span>
                            <span
                                className={"text-[#efd3a2] text-[20px] mb-[5px]"}>现价:￥99</span>
                            <span className={"text-[20px] text-white"}>有效期：一月</span>
                            <img src={"https://front.cdn.xdclass.net/images/vip/year_vip.webp"}
                                 className={"absolute w-[100px] h-[120px] right-[15px] -bottom-[15px]"}/>
                        </div>
                        <div
                            className={"mt-[30px] bg-[#797f84] text-white rounded-[5px]  font-bold h-[50px] p-[1px] leading-[48px] w-[220px] text-center mx-auto"}>
                            立即开通

                        </div>
                    </div>
                </div>
                <div
                    className={"w-[1200px] h-[236px] bg-[#302c2b] mx-auto mb-[70px] p-[20px] overflow-hidden] leading-[10px] flex flex-col"}>
                    <Carousel autoplay arrows={false} slidesToShow={4} slidesToScroll={1} dots={false} cssEase="linear"
                              autoplaySpeed={2000} speed={2000} slidesPerRow={3} pauseOnHover={false}>
                        {
                            Array(36).fill(0).map((_, index) => (
                                <UserInfo key={index}/>
                            ))
                        }

                    </Carousel>
                </div>
                <div className={"relative w-[1200px] flex flex-row mx-auto items-center justify-evenly"}>
                    <span className={"w-[200px] h-[2px] bg-[#f38e48] inline-block"}></span>
                    <h4 className={"text-[#f38e48] text-[42px]  text-center"}>谁在用小滴课堂VIP会员</h4>
                    <span className={"w-[200px] h-[2px] bg-[#f38e48] inline-block"}></span>
                </div>
                <div
                    className={"w-[1200px] h-[170px] mt-[63px] mb-[88px] mx-auto  flex flex-row justify-between items-center"}>

                    <div
                        className={"w-[276px] py-[20px] h-[170px] rounded-[10px] bg-[#fff7ef] shadow-lg flex flex-col"}>
                        <span className={"font-bold text-center text-[24px] text-[#614d28] mb-[10px]"}>0基础小白</span>
                        <div className={"text-[#555555] bg-white w-[236px] h-[82px] pt-4 pr-[2px] mx-auto"}>
                            <p className={"text-center text-[16px]"}>前端、后端、测试、运维、大数据的同学</p>
                        </div>
                    </div>
                    <div
                        className={"w-[276px] py-[20px] h-[170px] rounded-[10px] bg-[#fff7ef] shadow-lg flex flex-col"}>
                        <span
                            className={"font-bold text-center text-[24px] text-[#614d28] mb-[10px]"}>IT在校/应届生</span>
                        <div className={"text-[#555555] bg-white w-[236px] h-[82px] pt-4 pr-[2px] mx-auto"}>
                            <p className={"text-center text-[16px]"}>IT在校生/应届生，零基础转行的同学</p>
                        </div>
                    </div>
                    <div
                        className={"w-[276px] py-[20px] h-[170px] rounded-[10px] bg-[#fff7ef] shadow-lg flex flex-col"}>
                        <span
                            className={"font-bold text-center text-[24px] text-[#614d28] mb-[10px]"}>转型互联网企业</span>
                        <div className={"text-[#555555] bg-white w-[236px] h-[82px] pt-4 pr-[2px] mx-auto"}>
                            <p className={"text-center text-[16px]"}>基础不牢固 或 传统IT企业转型互联网企业的同学</p>
                        </div>
                    </div>
                    <div
                        className={"w-[276px] py-[20px] h-[170px] rounded-[10px] bg-[#fff7ef] shadow-lg flex flex-col"}>
                        <span
                            className={"font-bold text-center text-[24px] text-[#614d28] mb-[10px]"}>1-10 年程序员</span>
                        <div className={"text-[#555555] bg-white w-[236px] h-[82px] pt-4 pr-[2px] mx-auto"}>
                            <p className={"text-center text-[15px] "}>工作1~10年的同学，持续充电学习，公司项目需要/提升技术视野/底层原理/跳槽
                                等</p>
                        </div>
                    </div>
                </div>

            </Layout.Content>
            <div className={"w-full h-[90px] bg-[#2d2928] flex flex-row justify-between sticky bottom-0"}>

                <div className={"flex mx-auto justify-between items-center"}>
                        <span
                            className={"text-[#fbd39f] text-[30px] mx-[40px] inline-block"}>解锁海量专题课程免费看特权</span>
                    <span className={" text-[#fbd39f] text-[30px] inline-block ml-[20px] "}>永久有效</span>
                </div>

                <img src={"https://front.cdn.xdclass.net/images/vip/bottom.webp"}
                     className={"float-right h-[90px] overflow-hidden"}/>
            </div>
            <Layout.Footer className={" flex justify-around h-[90px]  !p-2 !bg-[#FFF] border-[1px] flex-col"}>

                <FooterNav/>
            </Layout.Footer>
        </Layout>
    )
}
const UserInfo = () => {
    return (
        <div className={"w-[235px] h-[42px] mr-[50px] mb-[37px] text-xs !flex items-center"}>
            <img
                src={"https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/20.jpeg"}
                className={"w-[40px] h-[40px] rounded-[20px]  inline-block mr-[10px]"}/>
            <span className={"text-[#ff4439]"}>
                                编***
                            </span>
            <span className={"text-[#aaaaaa] mr-2 ml-1 "}>
                                 购买了小滴课堂
                            </span>
            <span className={"text-[#eace9d]"}>
                                    永久会员</span>
        </div>
    )
}