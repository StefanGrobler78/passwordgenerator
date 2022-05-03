const genBtn = document.getElementById('btn');
const passwordContainer = document.querySelector('.password_container');

// FUNCTION PARAMETERS
//create array of number starting @ 48  array length 75 
const characterNumberArray = Array.from(Array(75)).map((e, i) => i + 48); 
//create array of character from charcode array length 75 
const characterValueArray = characterNumberArray.map((x) => String.fromCharCode(x));
// set amount of characters in password array 10
let charAmount = 10;


// create generatePassword password functions PARAMETERS
function generatePassword(charAmount, characterNumberArray, characterValueArray) {
// create an empty array for password
        let randomPasswordArray = [];
// create variable to characterNumberArray
        let charCodes = characterNumberArray;
// create loop to create password array the length of character amout the password should be
        for (let index = 0; index <= charAmount; index++) {
// create variable to store the random array index values the length of 75 between 48 and 122
            const characterCodes = charCodes[Math.floor(Math.random() * characterValueArray.length)];
            console.log(characterCodes);
// push the value of charset of the random number to random password array
            randomPasswordArray.push(String.fromCharCode(characterCodes));
        }
        return randomPasswordArray.join('');
}
generatePassword(charAmount, characterNumberArray, characterValueArray)

function renderHtml() {
    let pwdHtml = '';
    pwdHtml += `
                <p id="pwd-el1" class="password">${generatePassword(charAmount, characterNumberArray, characterValueArray)}</p>
                <p id="pwd-el2" class="password">${generatePassword(charAmount, characterNumberArray, characterValueArray)}</p>
                <p id="pwd-el3" class="password">${generatePassword(charAmount, characterNumberArray, characterValueArray)}</p>
                <p id="pwd-el4" class="password">${generatePassword(charAmount, characterNumberArray, characterValueArray)}</p>
    `
    passwordContainer.innerHTML = pwdHtml;
}

const genPwd = () => {
    renderHtml()
}
genBtn.addEventListener ('click', genPwd)