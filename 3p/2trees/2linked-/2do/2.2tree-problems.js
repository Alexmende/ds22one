/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */
function Node(o){
      this.d=o
      this.l=null
      this.r=null
  }
  
  function inorder(n){
    if (n!==null){
      inorder(n.l)
      console.log(n.d)
      inorder(n.r)
    }
	}
  
  function posorder(n){
    if (n!==null){
      posorder(n.l)
      posorder(n.r)
      console.log(n.d)
    }
	}
  
  let r = new Node('A')
  let o1 = new Node('B')
  let o2 = new Node('C')
  
  r.l = o1
  r.r = o2
  
  console.log('Inorden')
  inorder(r)
  console.log('Posorden')
  posorder(r)
