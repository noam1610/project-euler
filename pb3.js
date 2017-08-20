function solution(A, B) {
    var start = Math.sqrt(A);
    var end = Math.floor(Math.sqrt(B));

    if (start % 1 == 0) {
        var effectiveStart = start;
    } else {
        effectiveStart = Math.floor(start) + 1;
    }

    return end - effectiveStart + 1;

}

console.log(solution(6, 7))



