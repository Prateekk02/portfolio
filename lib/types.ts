
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