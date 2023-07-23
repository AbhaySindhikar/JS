
const MySym = Symbol("key1")

const JsUser = {
    name: "Nakul",
    age: 21,
    [MySym]: "myKey1",
    lastLoggedinDays: ["Monday","Friday"]

}
console.log(JsUser.age);
console.log(JsUser[MySym]);
JsUser.greetings = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetings());