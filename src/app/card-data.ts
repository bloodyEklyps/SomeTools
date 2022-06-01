export interface CardData {
    title: string;
    subtitle: string;
    logo: string;
    blocks: CardBlock[];
    tags: string[];
}

export interface CardBlock {
    type: CardBlockType;
    position: Position,
    content: string
}

export enum CardBlockType {
   TEXT = 1,
   IMAGE,
   PROGRESS_BAR
}

export interface Position {
    x : number;
    y : number;
    width : number;
    length : number;
}