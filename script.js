const numb = document.querySelectorAll(".numberbtn");
const operator = document.querySelectorAll(".operatorbtn");
const dec = document.getElementById("btndec");
const clear = document.getElementById("btnclear");
const ddelete = document.getElementById("btndelete");
dec.addEventListener("click", adddec);
clear.addEventListener("click", funcclear);
ddelete.addEventListener("click", funcdelete);

numb.forEach(element => {
    element.addEventListener("click", addtoup);
})

operator.forEach(element => {
    element.addEventListener("click", addtoup);
})

function presentoperator() {
    var x = document.getElementById("upscreen").textContent;
    for (var i = 0; i < x.length; i++) {
        if (x[i] === "*" || x[i] === "/" || x[i] === "+" || x[i] === "-") {
            return true;
        }
    }
    return false;
}

function hasequal() {
    var x = document.getElementById("upscreen").textContent;
    for (var i = 0; i < x.length; i++) {
        if (x[i] === "=") {
            return true;
        }
    }
    return false;
}

function addtoup(e) {
    var x = e.target.textContent;
    if (x === "*" || x === "/" || x === "+" || x === "-") {
        var lowsc = document.getElementById("downscreen").textContent;
        document.getElementById("upscreen").textContent += lowsc;
        document.getElementById("downscreen").textContent = '';
        if (presentoperator() === true) {
            if (lastele()) {
                console.log("yes");
                var x1 = document.getElementById("upscreen").textContent;
                var arr = x1.split(" ");
                var y = (arr[0] + " " + x + " ");
                document.getElementById("upscreen").textContent = y;
                return;
            }
            var res = operate();
            document.getElementById("upscreen").textContent = res;

        }
        document.getElementById("downscreen").textContent = "";
        document.getElementById('upscreen').textContent += " " + x + " ";
    }
    else if (x === "=") {
        var lowsc = document.getElementById("downscreen").textContent;
        document.getElementById("upscreen").textContent += lowsc;
        document.getElementById("downscreen").textContent = '';
        operate();
        // document.getElementById("upscreen").textContent = " ";
    }

    else {
        var y = document.getElementById('downscreen').textContent;
        if (y == 0) {
            document.getElementById('downscreen').textContent = x;
            return;
        }
        document.getElementById('downscreen').textContent += x;
    }

    // document.getElementById("upscreen").textContent += (" " + e.target.textContent);
}

function operate() {
    var x = document.getElementById('upscreen').textContent;
    var arr = x.split(" ");
    console.log(arr);
    if (arr.length === 1) { return; }
    num1 = Number(arr[0]);
    num2 = Number(arr[2]);
    if (arr[0] === '') {
        num1 = 0;
    }
    if (arr[2] === '') {
        document.getElementById("upscreen").textContent = num1;
        return;
    }
    if (arr[1] === "*") {
        var result = num1 * num2;
    }
    if (arr[1] === "+") {
        var result = num1 + num2;
    }
    if (arr[1] === "-") {
        var result = num1 - num2;
    }
    if (arr[1] === "/") {
        if (num2 === 0) {
            alert("Division by 0 is not possible!");
            return;
        }
        var result = num1 / num2;
    }

    document.getElementById("downscreen").textContent = result;
    return result;
}

function containdot(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '.') {
            return false;
        }
    }
    return true;
}

function adddec() {
    var x = document.getElementById("downscreen").textContent;
    if (containdot(x)) {
        document.getElementById("downscreen").textContent += '.';
    }
}

function funcclear(e) {
    document.getElementById("downscreen").textContent = '0';
    document.getElementById("upscreen").textContent = '';
}

function funcdelete(e) {
    var x = document.getElementById("downscreen").textContent;
    var y = x.length - 1;
    document.getElementById("downscreen").textContent = x.slice(0, y);
}

function lastele() {
    var x = document.getElementById("upscreen").textContent;
    var arr = x.split(" ");
    var y = arr[arr.length - 2];
    if (y == "*" || y == "/" || y == "-" || y == "+") {
        return true;
    }
    return false;

}