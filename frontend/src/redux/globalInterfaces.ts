export interface hobbyInfo{
    user: string,
    _id: string,
    passionLevel: string,
    name: string,
    year: number
}

export interface userInfo {
_id: string,
name: string
hobbies: hobbyInfo[]
}

export interface Ihobby {
    user: string
     name: string,
     year: number | null,
     passionLevel: string
}


