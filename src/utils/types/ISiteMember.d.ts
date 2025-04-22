export interface ISiteMember {
    id: string
    statusAt: string
    updatedAt: string
    member: IMember
}

export interface IMember {
    fullname: string
    img: string
    number: string
    adress: string
    fonction: IFonction
}

export interface IFonction {
    name: string
    description: string
}
