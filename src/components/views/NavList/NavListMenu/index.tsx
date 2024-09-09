import {FC} from "react";

export const NavListMenu: FC<{
    date: {
        key: string, src: string, name: string, info: string
    }
}> = (props) => {

    return (
        <div className={"w-[153px] h-[50x] flex flex-row mx-[43.5px] cursor-pointer"}>
            <img src={props.date.src} className={"mr-[7px] w-[50px] h-[50px]"}/>
            <div className={"w-[96px] h-[39px] pt-[8px]"}>
                <h3 className={"text-[#404040] text-[12px] "}>{props.date.name}</h3>
                <p className={"text-[#555555] text-[10px]"}>{props.date.info}</p>
            </div>
        </div>
    )
}