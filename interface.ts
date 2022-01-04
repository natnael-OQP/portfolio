import { IconType } from "react-icons";

export interface IAbout {
    name: string,
    title1: string,
    title2: string,
    description: string,
    buttonText: string,
}
export interface ISkill{
    name: string,
    Icon: IconType,
    level?:string,
}

export interface IProject{
    name:string,
    description:string,
    image_path?:string,
    deployed_url:string,
    github_url:string,
    category:string[],
    key_techs:string[],
}