const genBtn = document.getElementById('btn');
const passwordContainer = document.querySelector('.password_container');
const pwdLenghtEl = document.getElementById('pwdLenght');

// FUNCTION PARAMETERS
//create array of number starting @ 48  array length 75 
const characterNumberArray = Array.from(Array(75)).map((e, i) => i + 48); 
//create array of character from charcode array length 75 
const characterValueArray = characterNumberArray.map((x) => String.fromCharCode(x));
// set amount of characters in password array 10
let charAmount = '';
pwdLenghtEl.addEventListener('input', (e) => {
        return charAmount = e.target.value - 1;  
})
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
        // push the value of charset of the random number to random password array
        randomPasswordArray.push(String.fromCharCode(characterCodes));          
        }
        return randomPasswordArray.join('');
}
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
        const emptyMsg = "Please enter password length!"
        const lenghtMsg = "10 min & 15 max characters!"
        const emptyErrorEl = () => {
                return errorEl.textContent = ''
        }
        const errorEl = document.querySelector('.errorMsg')
        if(charAmount === '') {
                setTimeout(emptyErrorEl, 2000)
                errorEl.textContent = emptyMsg
        }else if (charAmount < 9 || charAmount >= 15) {
                errorEl.textContent = lenghtMsg;
                pwdLenghtEl.value = ''
                setTimeout(emptyErrorEl, 2000)
        }else {
                renderHtml()
                pwdLenghtEl.value = ''
                charAmount = ''
        }
        
}
genBtn.addEventListener ('click', genPwd)






