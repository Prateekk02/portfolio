
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