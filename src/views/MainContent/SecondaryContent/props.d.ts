import {Course} from "../../../components/CourseCard/props";
import {ReactNode} from "react";

interface SecondaryContentProps {
    title?: string,
    secondary?: string,
    courses: Course[],
    extra?: ReactNode
}
