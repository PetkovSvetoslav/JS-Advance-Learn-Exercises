function solve(arr) {
    function twoCriteriaSort(current, next) {
if (current.length === next.length){
return current.localeCompare(next);
}
        return current.length - next.length;
    }
    arr.sort(twoCriteriaSort);
    return arr.join("\n")
}