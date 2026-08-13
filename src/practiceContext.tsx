// this is normal type annotation
const data:string = "10";

// when we use angle brackets <> its is called generics
// we use this because some typescript types are container and they need to know what they are returning
type User = {
    id: number;
    name: string;
    position: string;
}

const numbers:Array<User> = [
    {
        id: 1,
        name: "aashihs",
        position: "dev"
    },
    {
        id: 2,
        name: "aashihs",
        position: "dev"
    },
]