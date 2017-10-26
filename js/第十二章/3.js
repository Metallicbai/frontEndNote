/*
 *
 *  DOM 获取最深的子节点
 * 
 */

 var getEndNode = function end(node) {
     var result;
     if (node.children.length) {
         result = end(node.children[0]);
     } else {
         result = node;
     }
     return result;
 }