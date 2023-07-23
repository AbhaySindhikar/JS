const regularUser = {
    email: "naakul.com",
    fullname: {
        userfullname: {
            firstname: "Nakul",
            lastname: "Sindhikar"
        }
    }
}
//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);