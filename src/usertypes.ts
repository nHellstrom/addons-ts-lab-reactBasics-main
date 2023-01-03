type Name = {
    title: string,
    first: string,
    last: string
}

type Location = {
    street: Street,
    city: string,
    country: string,
    postcode: string,
    coordinates: Coordinates,
    timezone: TimeZone
}

type Street = {
    number: number,
    name: string
}

type Coordinates = {
    latitude: string,
    longitude: string
}

type TimeZone = {
    offset: string,
    description: string
}

type Login = {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
}

type Date = {
    date: string,
    age: number
}

type Id = {
    name: string,
    value: string
}

type Picture = {
    large: string,
    medium: string,
    thumbnail: string
}

type User = {
    gender: string,
    name: Name,
    location: Location,
    email: string,
    login: Login,
    dob: Date,
    registered: Date,
    phone: string,
    cell: string,
    id: Id,
    picture: Picture,
    nat: string
}

type UserMetainfo = {
    seed: string,
    results: number,
    page: number,
    version: string
}

export type {
    Name,
    User
}