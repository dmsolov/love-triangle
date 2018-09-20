/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var k=0, a, b, c;
  var arr = [];
  for(var i = 0; i<preferences.length; i++)
  {
     a = preferences[i];
     b = preferences[a-1];
     c = preferences[b-1];
     if (i == (c-1) && arr.indexOf(a) === -1 && b !=c)
     {
        k++;
        arr.push(a, b, c);
     }  
  }
  return k;
};
