/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true;
    
    const getheight = (node,height) => {
        if(!node){
            return 0;
        }
        
        const lefth = getheight(node.left, height+1);
        const righth = getheight(node.right, height+1);
        
        if(Math.abs(righth-lefth) > 1){
            flag = false;
        }
        return Math.max(lefth, righth) + 1;
    }   
    
    getheight(root, 0);
    
    return flag;
};