let gradients = [];
const before = "{background: linear-gradient(to bottom, ";
const after = ");}";

let h1 = 180, s1 = 100, l1 = 50, 
    h2 = 180, s2 = 100, l2 = 50,  
    h3 = 180, s3 = 100, l3 = 50;

const convertOneHsl = (h, s, l) => {
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
};

const createOneLine = (gradient, index) => {
    const numberOfSpaces = 4 - String(index).length;
    const spaces = new Array(numberOfSpaces).fill(" ").join("");
    return index + "%" + spaces + 
        before +
        convertOneHsl(gradient[0], gradient[1], gradient[2]) + ", " +
        convertOneHsl(gradient[3], gradient[4], gradient[5]) + ", " +
        convertOneHsl(gradient[6], gradient[7], gradient[8]) +
        after;
}

const mapArrayToCSS = gradients => {
    return gradients.map((gradient, index) => createOneLine(gradient, index));
};

let counter = 0;
const calculateH1 = (h1, i) => {
    if (i < 70) {
        return h1 += 1;
    }         
    return h1 += 2;
};

const calculatel1 = (l1, i) => {
    if (i < 76) {
        const addBy = i % 5 === 1 ? 1 : 0;
        return l1 += addBy;
    }
    return l1;
}

const calculateH2 = (h2, i) => {
    if (i < 60) {
        return h2 += i % 2 === 1 ? 2 : 1;
    }         
    return h2 += 2;
};

const calculatel2 = (l2, i) => {
    if (i < 60) {
        return l2 += i % 2 === 1 ? 1 : 0;
    } else {
        return l2 += i % 4 === 1 ? 1 : 0;
    }
}

const calculateH3 = (h3, i) => {
    const addBy = i % 2 === 1 ? 2 : 3;
    if (h3 < 30) {
        h3 +=4;
    } else if (h3 < 360) {
        h3 += addBy;
    } else if (h3 === 360) {
        h3 = 2;
    }
    return h3;
};

const calculatel3 = (l3, i) => {
    if (i <= 16) {
        l3 = 49;
    } else if (i <= 32) {
        l3 = 48;
    } else if (i <= 48) {
        l3 = 47;
    } else if (i <= 64) {
        l3 = 46;
    } else {
        l3 = 45;
    }
    return l3;
};

for (let i = 0; i < 81; i++) {    
    gradients.push([h1, s1, l1, h2, s2, l2, h3, s3, l3]);
    h1 = calculateH1(h1, i);
    l1 = calculatel1(l1, i);
    h2 = calculateH2(h2, i);
    l2 = calculatel2(l2, i);
    h3 = calculateH3(h3, i);
    l3 = calculatel3(l3, i);
}

console.log(mapArrayToCSS(gradients));

