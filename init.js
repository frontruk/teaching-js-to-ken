const getFullName = (a, b) =>{

    return(a+ ' ' + b)
} 

const kenObj = {
    name : 'Ken',
    surname : 'H',
}

console.dir(kenObj)

const ken = getFullName(kenObj.name, kenObj.surname);
const chris = getFullName('Chris', 'T');

console.log(document.getElementById('name').offsetWidth)
console.log('my name is', ken, chris)


function callmeBaby(){
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    console.log('sending', name, surname)
}