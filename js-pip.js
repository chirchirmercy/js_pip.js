//Write a function that takes in a string as input and returns the length of the string

function words(){
    words="Akirachix"
    m=words.length
    console.log(m)
}
words()

//write a function that takes a string as an input and return strings in uppercase letters


function names(){
    let p="success"
   console.log(p.toUpperCase())  
}
names()

//write a function that takes in a string as input and return the first character of string 

function string(){
    let l="mercy"
console.log(l[0])
}
string()

//last character
function string2(){
    let n="javascript"
    let n2=n.slice(-1)
    console.log(n2)
}
string2()

//fourth char
function scchool(){
    let school="Akirachix"
    console.log(school[4])
}
scchool()


// write a function to convert a string to titlecase

function titlecase(){
    let g="mercy"
   let g2=g.split(" ").map(([firstchar,...rest])=>firstchar.toUpperCase("")+rest.join("").toLowerCase(""))
   .join("")
console.log(g2)
}
titlecase()


//write a function that takes two strings as input and concatenate them together

function concatenate(){
   let String1="mercy"
   let String3=" cheptoo"
   let str4=" Marrion"
    console.log(String1.concat(String3,str4))

}
concatenate()


//write a function that takes two strings as input checks length if they are equal


function equal(){
    let a="cup"
    let b= "cat"
    if(a.length===b.length){
        console.log("they are equal")
    }else{
        console.log("they are not equal")
    }
}
equal()


//write a function that takes two strings as an input and return the index of the first 
//occurences of the second string in the first string.
//If the second string does not occur in the first string, the function should return -1
var famous ="unique"
var curious="eunicen"
function occurrence(famous,curious){
    if(famous.includes(curious)){
        console.log(famous.indexOf(curious))
    }else{
       return -1
    }

}
let index=occurrence(famous,curious)
console.log(index)

//write a function that takes in a strin as an input and returns a new 
//string with all the vowels removed


function remove(school){
   
    let g=school.replace(/[a,e,i,o,u]/g, "")
    console.log(g)
}
let school="mercy"
remove(school)
//write a function that takes in a string as an input and 
//return a new string with all consonants removed

function consonants(learning){
    let t=learning.replace(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/g, "")
    console.log(t)
}
let learning="education"
consonants(learning)


