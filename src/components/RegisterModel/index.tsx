import {FC, useState} from "react";
import {Button, Checkbox, Col, Divider, Input, Modal, ModalProps, Row, Typography} from "antd";
import {CloseOutlined} from "@ant-design/icons";


export const RegisterModel: FC<ModalProps> = (props) => {
    const [isOk, setIsOk] = useState(false);
    const handleRegister = () => {
        setIsOk(!isOk)


    }
    return (

        <Modal {...props} footer={null} closable={false} classNames={{content: "!p-0 w-[640px]   "}}>
            <Row className="w-full h-[500px] ">
                <Col span={9} className={[
                    "bg-[url(https://front.cdn.xdclass.net/images/svg/log_reg_bg.webp)]  relative",
                    "after:z-0 after:bg-[#222222a8]-700 after:opacity-30 after:w-full after:h-full after:block after:absolute after:top-0"
                ].join(" ")}>
                    <div
                        className="absolute z-50  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[90%] space-y-4">
                        <img src="https://front.cdn.xdclass.net/images/logo_footer.webp"
                             className="w-[140px] h-[55px] mx-auto"
                             alt="logo"/>
                        <Divider className="bg-white my-0"/>
                        <Typography.Text
                            className="block mx-auto text-white tracking-[10px] font-bold text-xl ">让技术不在难学</Typography.Text>
                    </div>
                </Col>
                <Col span={15}>
                    <div className="px-[50px] pt-[36px] box-border ">
                        <div className=" w-full h-[32px] flex justify-between ">
                            <span className="abtext-[#404040] font-bold text-xl ">快速注册</span>
                            <CloseOutlined className=" w-[20px] h-[20px]" onClick={handleRegister}/>
                        </div>
                        <div>
                            <form className="text-[#FFF]">
                                <Input type="text" placeholder="请输入手机号或邮箱" className="mt-[20px]"/>
                                <Input type="text" placeholder="请输入图片验证码" className="my-[20px]"/>
                                <div
                                    className="flex flex-row w-full border rounded-md border-solid border-[#e5e7eb] mb-[20px]">
                                    <div className=" border-none">
                                        <Input placeholder="请输入手机号或邮箱验证码" type="text"
                                               className=" border-none"/>
                                    </div>
                                    <div>
                                        <Button type="link">获取验证码</Button>
                                    </div>
                                </div>
                                {/*<span*/}
                                {/*    className="flex flex-row  justify-between border-[1px] border-solid border-[#d9d9d9] rounded-[5px] mb-[20px] w-full px-[5px]">*/}
                                {/*    <Input type="text" placeholder="请输入手机号或邮箱验证码"*/}
                                {/*           className=" text-[#FFFFFF]"/>*/}
                                {/*    <span> <Button type="link">获取验证码</Button></span>*/}
                                {/*</span>*/}

                            </form>
                            <div>
                                <Checkbox className="mr-[20px] text-[15px]"/>
                                <span className="text-[#000000D9] ">同意小滴课堂</span><a
                                className="text-[#169BD5]">《隐私策略》</a>
                            </div>
                            <Button type="primary"
                                    className="w-full rounded-[17.5px] bg-[#4D555D] mt-[20px] text-[#FFF] hover:cursor-pointer hover:!bg-[#4D555D]">
                                立即注册
                            </Button>
                            <div className="w-full flex justify-center items-center flex-col mt-[20px]">
                                <a>--更多登陆方式--</a>
                                <img src="	https://front.cdn.xdclass.net/images/wechat_icon.webp "
                                     className="w-[70px] h-[70px] p-[8px] my-[10px] text-center"/>
                            </div>
                        </div>

                    </div>
                    <div className="w-full text-center bg-[#4D555D1A] h-[48px] leading-[48px]">
                        <span>已有账号？</span>
                        <a className="text-[#169BD5]">登录</a>
                    </div>


                </Col>

            </Row>
        </Modal>

    )
}