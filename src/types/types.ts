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

// Title
export type TitleType = {
    title: string
    icon: ReactElement
}

// Info
export type InfoType = {
    icon: ReactElement
    title: string
    desc?: ReactElement
    company: string
    companyIcon: ReactElement
    date: string
}

// Modal
export type ModalType = {
    toggle: () => void
    modal: boolean
}

export type EmailType = {
    name: string
    email: string
    message: string
}