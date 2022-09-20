/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //base case
    let result = true;
    if(ransomNote.length === 0 || magazine.length === 0){
        return false;
    }
    
    if(ransomNote.length > magazine.length){
        return false;
    }
    
    //create hashmap
    let hash = {};
    for (let m = 0; m < magazine.length; m++){
        const magChar = magazine[m];
        if(hash[magChar] !== undefined){
            hash[magChar] += 1;
        } else{
            hash[magChar] = 1;
        }
    }
    
    
    for(let i = 0; i < ransomNote.length; i++){
        const ransomChar = ransomNote[i];
        if(hash[ransomChar]){
            hash[ransomChar] -= 1;
            if(hash[ransomChar] < 0){
                result = false;
                break;
            }
        } else{
            result = false;
            break;
        }
    }
    return result;
};