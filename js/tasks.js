'use strict';

function triangle() {
    let str = "";
    for (let i = 0; i <= 7; i++) {
        for (let y = 0; y < i; y++) {
            //console.log("#");
            str += "#"
        }
        str += "\n"
        //console.log("\n");
    }
    return str
}



function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log("FizzBuzz")
            continue;
        }
        console.log(i);
    }
}


function chess() {
    let str = "\n"
    for (let i = 0; i < 8; i++) {
        let ev = " ";
        let nev = "#";
        if (i % 2 === 0) {
            ev = "#"
            nev = " "
        }
        for (let y = 0; y < 8; y++) {
            if (y % 2 === 0) {
                str += ev
            } else {
                str += nev
            }
        }
        str += "\n"
    }
    return str
}

function minimum(x, y) {
    return x > y ? y : x;
}


function isEven(num) {
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else if (num < 0) {
        return isEven(num + 2);
    }
    else {
        return isEven(num - 2);
    }
}

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") count++;
    }
    return count;
}


function countChar(str, sym) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === sym) count++;
    }
    return count;
}


function range(start, end, step = 1) {
    if (start > end && step > 0) return "Error1"
    if (end > start && step < 0) return "Error2"
    let mas = [];
    if (start > end) {
        for (let i = start; i >= end; i += step) {
            mas.push(i);
        }
    }
    else {
        for (let i = start; i <= end; i += step) {
            mas.push(i);
        }
    }
    return mas;
}


function sum(mas) {
    let sum = 0;
    for (let el in mas) {
        sum += mas[Number(el)];
    }
    return sum;
}



function reverseArray(mas) {
    let mas_tmp = [];
    for (let i = mas.length - 1; i >= 0; i--) {
        mas_tmp.push(mas[i]);
    }
    return mas_tmp;
}

function reverseArrayInPlace(mas) {
    let middle = mas.length / 2;
    for (let i = 0; i < middle; i++) {
        let tmp = mas[i];
        mas[i] = mas[mas.length - 1 - i];
        mas[mas.length - 1 - i] = tmp;

    }
}

function arrayToList(mas) {
    if (mas.length > 1) {
        return { value: mas.shift(), rest: arrayToList(mas) };
    } else {
        return { value: mas.shift(), rest: null };
    }
}

function listToArray(list) {
    let tmp = list;
    let mas = [];
    while (tmp) {
        mas.push(tmp.value);
        tmp = tmp.rest;
    }
    return mas;
}

function prepend(element, list) {
    return { value: element, rest: list };
}

function nth(list, index) {
    let tmp = list;
    for (let i = 0; i < index; i++) {
        if (tmp.rest == null) {
            return undefined;
        }
        tmp = tmp.rest;
    }
    return tmp.value;
}

function nthRecursive(list, index) {
    let arr = listToArray(list);
    if (index === 0) {
        return arr[index];
    } else {
        return nthRecursive(arrayToList(arr.slice(1)), --index);
    }
}

function deepEqual(obj1, obj2) {
    if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
        if (Object.keys(obj1).length != Object.keys(obj1).length) {
            return false;
        }
        for (let prop in obj1) {
            if (obj2.hasOwnProperty(prop)) {
                if (!deepEqual(obj1[prop], obj2[prop]))
                    return false;
            }
            else {
                return false;
            }
        }
        return true;
    }
    else if (obj1 !== obj2) {
        return false;
    }
    else {
        return true;
    }
}

