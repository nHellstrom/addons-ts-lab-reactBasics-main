interface IName {
    title: string,
    first: string,
    last: string
}

interface ILocation {
    street: IStreet,
    city: string,
    country: string,
    postcode: string,
    coordinates: ICoordinates,
    timezone: ITimeZone
}

interface IStreet {
    number: number,
    name: string
}

interface ICoordinates {
    latitude: string,
    longitude: string
}

interface ITimeZone {
    offset: string,
    description: string
}

interface ILogin {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
}

interface IDate {
    date: string,
    age: number
}

interface IId {
    name: string,
    value: string
}

interface IPicture {
    large: string,
    medium: string,
    thumbnail: string
}

interface IUser {
    gender: string,
    name: IName,
    location: ILocation,
    email: string,
    login: ILogin,
    dob: IDate,
    registered: IDate,
    phone: string,
    cell: string,
    id: IId,
    picture: IPicture,
    nat: string
}

interface IUserMetainfo {
    seed: string,
    results: number,
    page: number,
    version: string
}

export type {
    IName,
    IUser
}