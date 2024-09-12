import {FC} from "react";

export const TeacherCard: FC<{
    data: {

        picture: string,
        tName: string,
        title: string,
        info: string
    }
}> = (props) => {
    return (
        <div className={"teacher-card w-[340px] h-[318px] shadow-lg"}>
            <div className={"flex flex-row ml-[36px] mb-[10px]"}>
                <img src={props.data.picture}
                     className={"w-[76px] h-[76px] rounded-[38px]"}/>
                <div className={"pl-[20px]"}>
                    <p className={"text-[#222222] text-[24px]"}>{props.data.tName}</p>
                    <p className={"text-[#404040] text-[18px]"}>{props.data.title}</p>
                </div>
            </div>
            <div className={"px-[16px]"}>
                <p className={"font-bold"}>个人介绍:</p>
                <span className={"w-[296px] h-[113px]"}>
                    {props.data.info}
                </span>
            </div>
        </div>
    )
}