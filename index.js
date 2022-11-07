// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(record){
  function isWin(record){
     return record.result === "W"
  }
  const found = record.find(isWin)
  if(found)
    return found.year
  else
    return undefined
}