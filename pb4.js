function solution(A) {
    var maxA = maxInt(A);

    var doubleArray = new Array(maxA + 1).join('0').split('').map(parseFloat);
    var positionArray = new Array(maxA + 1).join('0').split('').map(parseFloat);
    positionArray = positionArray.map(function(el) {
        return -1;
    })

    for (var i = 0; i < A.length; i++) {
        doubleArray[A[i] - 1] += 1;
        if (positionArray[A[i] - 1] == -1) {
            positionArray[A[i] - 1] = i;
        }
    }

    var minInt = A.length;
    var returnNumber = -1;
    for (var i = 0; i < A.length; i++) {
        if (doubleArray[i] == 1) {
            if (positionArray[i] < minInt) {
                minInt = positionArray[i]
                returnNumber = i + 1;
            }
        }
    }
    return returnNumber;
}

function maxInt(A) {
    var maxA = A[0];
    for (var i = 0; i < A.length; i++) {
        if (A[i] > maxA) {
            maxA = A[i]
        }
    }
    return maxA;
}

