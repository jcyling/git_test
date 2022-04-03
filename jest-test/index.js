function capitalize(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}
  
function reverseString(str) {
let reversed = str.split("").reverse().join("");
return reversed;
}
  
  // Calculator module
const calculate = {
    "add": function(a,b) {
        if (!a || !b) throw "Error";
        return a + b;
    },
    "sub": function(a,b) {
        if (!a || !b) throw "Error";
        return a - b
    },
    "mul": function(a,b) {
        if (!a || !b) throw "Error";
        return a * b
    },
    "div": function(a,b) {
        if (!a || !b) throw "Error";
        return a / b
    },
};
  
function caesar(str, num) {
    // convert to ascii num
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/)) {
            let current = str.charCodeAt(i);
            let char = current + num;
            if (char > 122 || (char > 90 && char < 97)) {
                char -= 26;
            }
            arr.push(String.fromCharCode(char));
        }
        else {
            arr.push(str[i]);
        }
    }
    return arr.join("");
}

function analyzeArray(arr) {
    let stat = {};
    stat.length = arr.length;
    let sorted = arr.sort();
    stat.min = sorted[0];
    stat.max = sorted[stat.length - 1];

    let total = arr.reduce((prev, curr) => prev + curr, 0);
    stat.average = total / stat.length;
    return stat;
}

export {
    capitalize,
    reverseString,
    calculate,
    caesar,
    analyzeArray
}
  