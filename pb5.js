function solution(A) {
    //console.log(A.length);
    //console.log(A[0].length);
    return PoidsCheminMatrix(A, 0, 0, A.length, A[0].length)
}


function PoidsCheminMatrix(A, n, m, N, M) {
    if (n == N - 1 && m == M - 1) {
        return parseInt(A[n][m]);
    } else if (n == N - 1) {
        var horizontalChemin = parseInt(A[n, m]) + parseInt(PoidsCheminMatrix(A, n, m + 1, N, M));
        return horizontalChemin;
    } else if (m == M - 1) {
        var verticalChemin = parseInt(A[n, m]) + parseInt(PoidsCheminMatrix(A, n + 1, m, N, M));
        return verticalChemin;
    } else if (n < N - 1 && m < M - 1) {
        var horizontalChemin = parseInt(A[n, m]) + parseInt(PoidsCheminMatrix(A, n, m + 1, N, M));
        var verticalChemin = parseInt(A[n, m]) + parseInt(PoidsCheminMatrix(A, n + 1, m, N, M));
        console.log(n, m, Math.max(verticalChemin, horizontalChemin))
        return Math.max(verticalChemin, horizontalChemin);
    }
}


console.log(solution([
    [2, 2, 4, 2],
    [0, 3, 0, 1],
    [1, 2, 2, 1],
    [4, 1, 2, 2]
]))
