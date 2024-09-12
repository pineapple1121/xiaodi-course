export interface Course {
    key: string,
    src: string,
    title: string,
    level?: string,
    person?: number | string,
    prePrice?: number | string,
    curPrice?: number | string,

    [key: string]: unknown
}