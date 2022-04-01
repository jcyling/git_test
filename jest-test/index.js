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
  
  export {
    capitalize,
    reverseString,
    calculate
  }
  