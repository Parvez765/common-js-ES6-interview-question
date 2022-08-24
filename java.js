// document.getElementById("apply-btn").addEventListener("click", function () {
//     const heading = document.getElementById("heading");
//     heading.innerText = "Welocme to JavaScript"
// })

function myNumber(first = 0, second = 0) {
    return first + second;
}
console.log(myNumber(10));

function myName(name ,age) {
    const myName = `my name is ${name} and my age is ${age}`;
    return myName;
}
console.log(myName("Parvez", 24));

const arr1 = [2, 3, 4, 5];
const arr2 = [...arr1];
arr2.push(6);
console.log(arr1);
console.log(Math.max(...arr2));

const fish = {
    name: "Hilsha",
    address: "Chadpur",
    color: "Silver",
    price: 500
}

const { price, address } = fish;
console.log(price, address);

const arr = [2, 5, 8, 10, 12];

const [arr4] = arr
console.log(arr4);