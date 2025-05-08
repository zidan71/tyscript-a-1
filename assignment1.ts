


function formatString   (input:string,toUpper?:boolean) : string | undefined  {
    if(toUpper === true || toUpper === undefined  )  {
        return input.toUpperCase()
    }
    else if(toUpper === false){
        return input.toLowerCase()
    }
}

const heloo = formatString("Hello",false)
//console.log(heloo)

 const filterByRating =(items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    return items.filter(item => item.rating >= 4)

 }

 const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

  const filter = filterByRating(books); 
  //console.log(filter);

function concatenateArrays<T>(...arrays: T[][]): T[]  {

    const res = arrays.flat()
    return res;
}

const array1  =  concatenateArrays(["a", "b"], ["c"]);       
const array2 =  concatenateArrays([1, 2], [3, 4], [5]);     

//console.log(array1)
//console.log(array2)


class Vehicle {
    constructor(private make: string, private year: number) {

    }

    getInfo() {
        //console.log(`Make:${this.make}, Year: ${this.year}`);
    }
}


class Car extends Vehicle {
    constructor( make: string, year: number,private model:string ) {
        super(make, year)
    }
    getModel() {
        //console.log(`Model: ${this.model}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
const car1 = myCar.getInfo();  
const car2 = myCar.getModel();




function processValue(value: string | number): number  {
    if(typeof value === 'string') {
        return value.length
    }
    else{
        return value * 2
    }
}

const valueRes = processValue("hello"); 
const valueRes1 =processValue(10);      
//console.log(valueRes)

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
   
    if(products.length === 0) {
        return null
    }

    else{
        return products.reduce((max,product)=>
            product.price > max.price ? product : max
        )
    }
 
    
  }


  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
const expensive=  getMostExpensiveProduct(products);  
//console.log(expensive)
  


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    else{return "Weekday"}
  }


const day =getDayType(Day.Monday);  
const day1 =getDayType(Day.Sunday);  

//console.log(day);


async function squareAsync(n: number): Promise<number> {
   return new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(n>=0){
            resolve(n*n)
            return 
        }
        else{
            reject(new Error('Negative number not allowed'))
        }
    },1000)
   })

}


// const res=squareAsync(4).then(console.log);        
// const res1 =squareAsync(-3).catch(console.error);
