/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
function Node(data) {//constructor
     this.data = data
     this.next = null
  }
  
    //first
  let n1 = new Node(3)
  let n2 = new Node(-2)
  let n3 = new Node(1)

  //then
  n1.next=n2
  n2.next=n3

  
  const traverse=(n)=>{//es6
    let c=n//iterator 
    while(c){//exists
      console.log(c.data)
      c=c.next
    }
	}
  
  function contains(n,v){
     let a;
     let c=n//iterator 
    while(c){//exists
     if(c.data == v){
       a = "true"
       c = "*"
     }
     else{
         c = c.next
      }
    }
    
    if(a=="true"){
      console.log("true")
    }
    else{
      console.log("false")
    }
  }
  
  contains(n1,0)
