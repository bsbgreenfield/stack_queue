# Browser Back/Forward

```js

class urlNode{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
  }
}
class SiteStack{
    constuctor(){
        this.first = null;
        this.last = null;
        this.size = 0;
        this.currUrl = null
    }

    newPage(windowUrl){
        this.currUrl = new Node(windowUrl)
        if (this.size == 0){
            this.first = this.currUrl;
            this.last = this.currUrl;
        }
        else{
            this.currUrl.next = this.first
            this.first = this.currUrl
        }
        this.size ++;
    }

    forward(){
        if (this.currUrl == null){
            throw new Error('Cannot go forward; not currently on a page')
        }
        else if (this.currUrl.prev == null){
            throw new Error('Cannot go forward; no next page')
        }
        else{
            this.newPage(this.currUrl.prev)
        }
    }

     back(){
        if (this.currUrl == null){
            throw new Error('Cannot go back; not currently on a page')
        }
        else if (this.currUrl.next == null){
            throw new Error('Cannot go forward; no prev page')
        }
        else{
            this.newPage(this.currUrl.next)
        }
    }
}

```

# String Reversal

```js
class letterNode{
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
        this.size = word.length
        for (let i = 0; i < word.length; i++){
            this.buildWord(word[i])
        }
    }
    buildWord(letterVal){
        if (this.size == 0){
            this.first = new Node(letterVal)
            this.last = new Node(letterVal)
        }
        else{
            newLetter = new Node(letterVal)
            newLetter.prev = this.last
            this.last.next = newLetter
            this.last = newLetter
        }
    }
    reverse(){
        let currNode = this.last
        let result = ''
        while (currNode.prev){
            result += currNode
            currNode = currnode.prev
            
        }
    }
}
```