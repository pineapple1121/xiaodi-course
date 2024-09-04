import {Button, Input, Modal, Tabs, TabsProps} from "antd";
import {RedoOutlined} from "@ant-design/icons";


export const LoginModel: React.FC = (props) => {

    const onChange = (key: string) => {
        console.log(key)

    };
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '密码登录',
            children:
                <div>

                    <form className="text-[#FFF] ">
                        <Input type="text" placeholder="账号" className="mt-[20px]"/>
                        <Input.Password placeholder="密码" className="my-[20px] "/>
                    </form>
                    <div className="mt-[15px] flex justify-between">
                        <span className="text-[#000000D9]  font-bold text-xs pt-1.5 ">登录即同意小滴课堂</span>
                        <a className="text-[#169BD5] pt-1">《隐私策略》</a>
                        <Button type="link" className="text-black text-xs"> 忘记密码</Button>
                    </div>
                    <Button type="primary"
                            className="w-full rounded-[17.5px] bg-[#4D555D] mt-[20px] text-[#FFF] hover:cursor-pointer hover:!bg-[#4D555D]">
                        立即登录
                    </Button>
                    <div className="w-full flex justify-center items-center flex-col mt-[20px]">
                        <a className="text-[#AAAAAA]">--更多登陆方式--</a>
                        <img src="	https://front.cdn.xdclass.net/images/wechat_icon.webp "
                             className="w-[70px] h-[70px] p-[8px] my-[10px] text-center"/>
                    </div>

                </div>


        },
        {
            key: '2',
            label: '验证码登录',
            children:
                <div className="flex flex-col ">

                    <form className="text-[#FFF] ">
                        <Input type="text" placeholder="账号" className="mt-[13px]"/>
                        <div className="my-[13px] flex justify-between ">
                            <div className="flex justify-between ">
                                {/*<Input type="text" placeholder="请输入图形验证码" className=" border-none "/>*/}
                                <Input addonAfter={<RedoOutlined/>} placeholder="请输入图形验证码"
                                       className="  border-none"/>
                            </div>
                            <img className="w-[80px] h-[30px]"
                                 src="	https://api-v2.xdclass.net/api/notify/v1/captcha?type=user_login&time=1725440540557"/>
                        </div>
                        <div
                            className="flex justify-between  h-[32px] mb-[13px]">
                            <div className="flex flex-row border border-solid border-[#d9d9d9] rounded-md">
                                <Input type="text" placeholder="请输入验证码"/>

                            </div>
                            <Button type="link" className=" text-xs "> 获取验证码</Button>
                        </div>
                    </form>
                    <div className="mt-[15px] flex justify-between">
                            <span
                                className="text-[#000000D9]  font-bold text-xs pt-1.5 ">登录即同意小滴课堂</span>
                        <a className="text-[#169BD5] pt-1">《隐私策略》</a>
                        <Button type="link" className="text-black text-xs"> 忘记密码</Button>
                    </div>
                    <Button type="primary"
                            className="w-full rounded-[17.5px] bg-[#4D555D] mt-[20px] text-[#FFF] hover:cursor-pointer hover:!bg-[#4D555D]">
                        立即登录
                    </Button>
                    <div className="w-full flex justify-center items-center flex-col mt-[15px]">
                        <a className="text-[#AAAAAA]">--更多登陆方式--</a>
                        <img src="	https://front.cdn.xdclass.net/images/wechat_icon.webp "
                             className="w-[70px] h-[70px] p-[8px] my-[10px] text-center"/>
                    </div>

                </div>
        },

    ];

    return (

        <Modal {...props} footer={null} closable={true} classNames={{content: "!p-0 w-[400px]   "}}>
            <div className=" flex flex-col justify-center items-center ">
                <div className="w-[400px] h-[455px] pt-[32px] px-[50px]  flex justify-between ">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
                </div>
                <div
                    className=" text-center bg-[#4D555D1A] h-[48px] leading-[48px] w-full">
                    <span>还没有账号？</span>
                    <a className="text-[#169BD5]">注册</a>
                </div>

                {/*<div>*/}
                {/*<form className="text-[#FFF] mt-[20px]">*/}
                {/*<Input type="text" placeholder="账号" className="mt-[20px]"/>*/}
                {/*<Input.Password placeholder="密码" className="mt-[20px]"/>*/}
                {/*<div*/}
                {/*    className="flex flex-row w-full border rounded-md border-solid border-[#e5e7eb] mb-[20px]">*/}
                {/*    <div className=" border-none">*/}
                {/*        <Input placeholder="请输入手机号或邮箱验证码" type="text"*/}
                {/*               className=" border-none"/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <Button type="link">获取验证码</Button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*</form>*/}
                {/*    <div>*/}
                {/*        <Checkbox className="mr-[20px] text-[15px]"/>*/}
                {/*        <span className="text-[#000000D9] ">同意小滴课堂</span><a*/}
                {/*        className="text-[#169BD5]">《隐私策略》</a>*/}
                {/*    </div>*/}
                {/*    <Button type="primary"*/}
                {/*            className="w-full rounded-[17.5px] bg-[#4D555D] mt-[20px] text-[#FFF] hover:cursor-pointer hover:!bg-[#4D555D]">*/}
                {/*        立即注册*/}
                {/*    </Button>*/}
                {/*    <div className="w-full flex justify-center items-center flex-col mt-[20px]">*/}
                {/*        <a>--更多登陆方式--</a>*/}
                {/*        <img src="	https://front.cdn.xdclass.net/images/wechat_icon.webp "*/}
                {/*             className="w-[70px] h-[70px] p-[8px] my-[10px] text-center"/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*</div>*/}
                {/*<div className="w-full text-center bg-[#4D555D1A] h-[48px] leading-[48px]">*/}
                {/*    <span>已有账号？</span>*/}
                {/*    <a className="text-[#169BD5]" onClick={toLogin}>登录</a>*/}
                {/*</div>*/}

            </div>
        </Modal>

    )
}