___________TypeScript BlogPost____________



1. What are some differences between interfaces and types in TypeScript?

Ans: In typescript both interface and types helps us describe the shape of objects like what properties on object should have. But there are some differences between them.Let's look it in a simple way
         1. Basic Syntax

 Both 'interface' and 'type' can be used to define objects:  

<!-- interface -->

interface Person {
    name: string;
    age:  number;
}

<!-- Type -->
type PersonType = {
    name: string;
    age: number;
}
        2. Extending/Reusing
   
   <!--using Interface  -->  
we can use extends to add more properties
interface Animal{
    name:string;
}
interface Dog extends Animal {
    breed:string
}

 <!--using Type  -->  
we can use & instead of extend in types it's called intersection

type Animal = {
    name:string;
}

type Dog = Animal & {
    breed:string
}

        3. Interface is Only for Objects

interface can only be used with objects but types can work with primitves,unions and more:

type Id = string | number;  <!--works with type only  -->           

         4. Declaration Merging   

With interface you can defire it multiple times and TypeScript will merge them:

interface User {
    name:string
}

interface User {
    age:number
}

<!-- Now User has Both name and age -->

this doesn't work with Types

--------------------------------------------------------------

1. What is the use of the keyof keyword in TypeScript? Provide an example.
   
Ans: TypeScript is a powerful language that helps us write codes better than javascript by adding different types.

The 'keyof' keyword is used to get the keys of an object as a type it helps when we want our code more flexible and useable

like...

type Person = {
    name:string;
    age:number;
}

type PersonKeys = keyof Person;
<!-- Output = "name" | "age" -->

Here PersonKeys is a type that can only be "name" or "age".This is useful when we want to create a function that only acceps valid keys of object.

function getProperty<T,K extents keyof T>(obj:T,key:K){
    return obj[key]
}
const user = {name:'zidan',age:20};

const userName = getProperty(user,"name"); <!--working  -->  
<!-- const wrongKey = getProperty(user,"email") Error   -->

because the key is not on Object this way typescript will catch errors more easily.