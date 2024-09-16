export const FooterNav = () => {
    return (

        <div className={" flex flex-col  mx-auto  !bg-transparent w-[1200px] h-[80px]"}>
            <div className={"flex flex-row justify-between pb-2"}>
                <div>
                    <img src={"https://front.cdn.xdclass.net/images/logo.webp"} className={"w-[163px] h-[80px]"}/>
                </div>
                <div className={"flex flex-col items-center w-[534px] h-[60px]"}>
                    <p className={"space-x-1 text-[16px] text-[#333333] leading-[50px]"}>
                        <span className={"cursor-pointer"}>关于我i们</span>
                        <span className={"cursor-pointer"}>网站地图</span>
                        <span className={"cursor-pointer"}>每日福利</span>
                        <span className={"cursor-pointer"}>安卓APP下载</span>
                        <span className={"cursor-pointer"}>IOSAPP下载</span>
                    </p>
                    <p className={"space-x-1 text-[16px] text-[#333333] mt-[1px]"}>
                        <span className={"cursor-pointer"}>友情链接：</span>
                        <span className={"cursor-pointer"}>天猫旗舰店</span>
                        <span>|</span>
                        <span className={"cursor-pointer"}>OPen1024技术导航站</span>
                        <span>|</span>
                        <span className={"cursor-pointer"}>阿里云</span>
                        <span>|</span>
                        <span className={"cursor-pointer"}>腾讯课堂</span>
                    </p>
                </div>
                <div className={"flex flex-row"}>
                    <img src={"https://front.cdn.xdclass.net/images/xdclass_gzh.webp"} alt={"二维码"}
                         className={"w-[80px] h-[80px] mr-[18px]"}/>
                    <div className={"text-[#4f555d] text-[16px] flex flex-col justify-center font-light"}>
                        <p>扫码关注</p>
                        <p>微信服务号</p>
                    </div>
                </div>
            </div>

            <div className={"flex flex-row justify-center items-center mt-2"}>
                <p> Copyright © 2018 Xdclass,lnc. </p><a href="#">粤ICP备15092968号 </a>
            </div>

        </div>

    )
}
