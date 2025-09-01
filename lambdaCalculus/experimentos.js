Number.prototype.log = function(){console.log(+this)}
Function.prototype.log = function(){console.log(this.toString())}
let r
const I = a => a
 I(3).log()


 I(I).log()


const SELF = f => f(f)

 SELF(I).log()


const PRI = a => b => a

 PRI(7)(11).log()


const ULT = _ => b => b

 ULT(7)(11).log()


const TROCA = f => a => b => f(b)(a) 

 TROCA(PRI)(11)(7).log()

 TROCA(ULT)(11)(7).log()


const ULT2 = a => b => TROCA(PRI)(a)(b)

 ULT2(13)(20).log()



const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro (PRI)'
F.toString = () => 'Falso (ULT)'
T.log()
F.log()
// NOT
const NOT = a => a(F)(T)

 NOT(F).log()


// AND

const AND = a => b => a(b)(F)

 AND(F)(T).log()



// Or

const OR =  a => b => a(T)(b)

 OR(T)(F).log()


// EQ

const EQ = a => b => a(b)(NOT(b))
 EQ(F)(T).log()


 EQ(T)(T).log()


 EQ(F)(F).log()


 EQ(T)(F).log()


// OU exclusivo

const XOR = a => b => NOT(EQ(a)(b))
XOR(F)(T).log()


XOR(F)(F).log()


XOR(T)(T).log()


XOR(T)(F).log()


