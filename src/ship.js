export default function Ship(size){
  const length = size;
  let hits = 0;
  function hit(){
    hits++
  }
  function isSunk(){
    if (hits>=length){
      return true;
    }
    return false;
  }
  return {hit, isSunk};
}