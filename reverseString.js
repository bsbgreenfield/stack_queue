class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}
class letterList{
    constructor(word){
        this.first = null
        this.last = null
        this.size = 0
        for (let i = 0; i < word.length; i++){
            this.buildWord(word[i])
            this.size ++
        }
    }
    buildWord(letterVal){
        if (this.size == 0){
            this.first = new Node(letterVal)
            this.last = new Node(letterVal)
        }
        else{
            let newLetter = new Node(letterVal)
            newLetter.prev = this.last
            this.last.next = newLetter
            this.last = newLetter
        }
    }
    reverse(){
        let currNode = this.last
        let result = ''
        while (currNode.prev){
            result += currNode.val
            currNode = currNode.prev
        }
        result += currNode.val
        console.log(result)
    }
}

let l = new letterList('hello')
l.reverse()
