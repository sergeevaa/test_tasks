let k = 25;
let res = '';
const symbols = ["'", ',', '!', '?', '-', ':', ';', '@', '(', '<', '.', '!', '?', '"'];

function whoIsIt(title) {
    let about = 0;

    if (title.length == 0) about = 0; //title is empty, ExR: ...
    else if (title.length <= k) about = 1; //title length <= count, ExR: title
    else if (title[k-1] == ' ') about = 2; //25 symbol is whitespace, ExR: delete whitespace and add ...
    else if (symbols.includes(title[k])) about = 3; //25+1 symbol is punctuation mark, ExR: delete symbol and add ...
    else if (title[k] == ' ') about = 4; //25+1 symbol is whitespace, ExR: delete ' ' and add ...
    else about = 5; // other

    return about;
}

function delete_symb(res) { //delete all last punctuation marks
    let j = res.length;
    while (symbols.includes(res[j - 1])) j--
    return res.substring(0, j);
}

export function showTitle(title) {
    let about;

    about = whoIsIt(title);
    //console.log(about);

    switch (about) {
        case 0: return '...';
        case 1: return title;
        case 2: return delete_symb(title.substring(0, k - 1)) + '...';
        case 3: return delete_symb(title.substring(0, k - 1)) + '...';
        case 4: return delete_symb(title.substring(0, k)) + '...';
        case 5:
            let i = k-1;
            while (title[i] != ' ' && i > 0) i--;
            if (i !== 0 && !symbols.includes(title[i])) return title.substring(0, i) + '...';
            else return title.substring(0, k) + '...';
        default: return "ERRORS!"
    }
}




