import {FC} from "react";
import {Col, Divider, Modal, ModalProps, Row, Typography} from "antd";


export const RegisterModel: FC<ModalProps> = (props) => {
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
                <Col span={15}>hh</Col>
            </Row>
        </Modal>

    )
}