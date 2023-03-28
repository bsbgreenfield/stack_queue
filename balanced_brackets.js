
class BracketedString {
    constructor(word) {
        this.size = word.length;
        this.neededChars = []
        console.log(this.evaluate(word))
    }

    evaluate(word) {
        for (let letter of word) {
            if (this.neededChars.includes(letter)) {
                let index = this.neededChars.indexOf(letter)
                if (index !== -1) {
                this.neededChars.splice(index, 1);
                }
            }
            else{
                console.log(letter)
                switch (letter) {
                    case '(':
                        console.log('here')
                        this.neededChars.push(')')
                        break;
                    case ')':
                        this.neededChars.push('(')
                        break;
                    case '[':
                        this.neededChars.push(']')
                        break;
                    case ']':
                        this.neededChars.push('[')
                        break;
                    case '{':
                        this.neededChars.push('}')
                        break;
                    case '}':
                        this.neededChars.push('{')
                        break;
                }
            }
    }
    console.log(this.neededChars)
    if (this.neededChars.length > 0){
        return 'unbalanced'
    }
    else{
        return 'balanced'
    }
}
}
let b = new BracketedString('(nope]')