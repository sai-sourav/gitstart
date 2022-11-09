this.a = "global"
let x = {
    a : "local",
    b : () => {
        return this.a
    },
    c : function() {
        return this.a
    }
}
console.log(x.b()); // global / one step behind
console.log(x.c()); // local/ in lexical

function xyz() {
    function abc(){
        return this.a;
    }
    return abc();
}

console.log(xyz.call(x)); // undefined
console.log(xyz.call(this)); // undefined

function xyz1() {
    abc1 = () => {
        return this.a;
    }
    return abc1();
}

console.log(xyz1.call(x)); // local
console.log(xyz1.call(this)); // global


function xyz2() {
    abc2= ()=>{
        abc1 = () => {
            return this.a;
        }
        return abc1();
    }
    return abc2();
}

console.log(xyz2.call(this)); //global
console.log(xyz2.call(x)); // local