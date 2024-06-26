import { ReactElement } from "react"

// Heading Type
export type HeadingType = {
    title: string
    link: string
    href: string
}

// Stack Type
type Stack = {
    name: string
    link: string
    logo: string
}

export type StackItem = {
    item: Stack
}

// Project Type
type Project = {
    name: string;
    link: string;
    img: string;
    lang: {
        img: string;
    }[];
}

export type ProjectsDataType = {
    item: Project;
};

export type TitleType = {
    title: string
    icon: ReactElement
}
