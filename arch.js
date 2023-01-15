//answer no.1)
let obj={nums:7}
function add(n){
    console.log(this.nums+n)
}
add.call(obj,8)

//answer No.2)==>

let obj1={nums:7}
function add(n){
    console.log(this.nums+n)
}
add.apply(obj1,[8])
//answer3)

let obj3={nums:7}
function add(n){
    console.log(this.nums+n)

}
let abc=(add.bind(obj3,7))
console.log(abc)
abc()

//answer No.4))=>

let student={age:20}
function age(){
    console.log(this.age)
}
var add= age.bind(student)
add()
