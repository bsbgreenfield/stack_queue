// working right to left, build a new node Operation
// the node has four attributes: firstVal, secondVal, operator, and eval
// if symbol != +, -, *, /, set attribute firstVal, or if secondVal != null set attribute secondVal
// if it is one of those symbols, set attribute operator
// set eval attribute to the result of the operator of firstVal and secondVal
// add the now completed node to the linked list Expression
// then create a fresh node with firstVal set to the 'eval' attribute of the last
// fill in that node with the remaining secondVal and operator, then set eval attribute
// if we reach index 0 of the expression, break loop and evaluate eval attribute of the current node, that is the final answer

class OperationNode {
    constructor(secondVal, firstVal, operand) {
        this.firstVal = firstVal
        this.secondVal = secondVal
        this.operand = operand
        this.eval = 0;
    }

}

class Expression {
    constructor(expressionString) {
        this.expString =[...expressionString.replaceAll(" ", '')]
        this.size = this.expString.length
        this.nodes = []
    }

    readExpression() {
        let nodeContents = []
        let final;
        for (let i = this.size - 1; i >= 0; i--) {
            nodeContents.push(this.expString[i])
            // if operand is reached, create a new node
            if ('*/+-'.includes(this.expString[i])) {
                let newNode = new OperationNode(...nodeContents)
                newNode.eval = this.evaluate(nodeContents)
                console.log(newNode)
                this.nodes.push(newNode)
                nodeContents = [newNode.eval]
                final = newNode.eval
            }
        }
        console.log(final)
        return final
    }

    evaluate(arr) {
        let result;
        try{
            switch(arr[2]){
                case '+': 
                    result = parseInt(arr[1]) + parseInt(arr[0])
                    break
                case '-': 
                    result = parseInt(arr[1]) - parseInt(arr[0])
                    break
                case '*': 
                    result = parseInt(arr[1]) * parseInt(arr[0])
                    break
                case'/':
                    result = (parseInt(arr[1])/parseInt(arr[0]))
                    break
                default: throw new Error
               }
               return result
        }
        catch{
            throw new Error('invalid input')
        }
       
    }
}

let e = new Expression("+ 9 y 2 3")
e.readExpression()
