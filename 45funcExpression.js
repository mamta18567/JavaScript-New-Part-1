const hbd = function() {
    console.log("HAPPY BIRTHDAY !!!");
}
hbd();

const add = function () {
    return (2 + 4);
}
const value = add();
console.log("value", value)

const sum = function (n1, n2) {
    console.log(n1 + n2);
}
sum(5, 5);

const IsEvenCheck = function (n1) {
    if (n1 % 2 == 0) {
        console.log("true");
    } else {
        console.log("false")
    }
}

IsEvenCheck(11);

const getFirstCharacter = function (string){
    console.log(string[0]);
}

getFirstCharacter("mamta");

const findTarget = function (array,target){
    for(let i=0; i<array.length; i++){
        if(target == array[i]){
            console.log(i)
        }
    }
}
findTarget([1,5,9,0],9);
