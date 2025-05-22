
export interface LongCardContent{
    title: string, 
    views?: string,
    link?: string
}
export interface LongCardProps{
    itemList: LongCardContent[]
    
}

export interface BookCardsProps {
    title: string,
}

export interface BookSectionProps{
    title: string,
    bookItems: BookCardsProps[]
}

interface socialMediaHandle{
    title: string,
    href: string
} 
export interface FooterProps{
    itemList: socialMediaHandle[]
}

export interface SnippetsCardProps {
    logoLink: string,
    title: string,
    content: string,
    href?: string
}

export interface HeaderProps{
    title: string,
    content: string
}

interface ListItems {
    title: string, 
    content: string, 
    href: string
}

export interface ResourcesSectionProps {
    header: string,
    listItems: ListItems[] 
}

export interface MoreOptionProps{
    title: string,    
}

export interface ProjectCardProps {
    logoLink: string;
    title: string;
    content: string;
    techList?: string[];
    href?: string,
    githubLink?: string
    showBlinker?: boolean
}

export interface BlinkerProps{
    color: string
}

export interface ProjectListerProps{
    count: number
}