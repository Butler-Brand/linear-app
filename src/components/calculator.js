export default class Calculator {
  constructor() {}

  addOrSubtract(matrix1, matrix2, operation) {
    var calculatedMatrix = [];
    for (var i = 0; i < matrix1.length; i++) {
      calculatedMatrix.push([]); //new row
      for (var j = 0; j < matrix1[i].length; j++) {
        if (operation === "add") {
          calculatedMatrix[i].push(
            parseInt(matrix1[i][j]) + parseInt(matrix2[i][j])
          );
        } else {
          calculatedMatrix[i].push(
            parseInt(matrix1[i][j]) - parseInt(matrix2[i][j])
          );
        }
      }
    }
    return calculatedMatrix;
  }

  multiply(matrix1, matrix2) {
    var calculatedMatrix = [];
    var entryAnswer = 0;
    for (var i = 0; i < matrix1.length; i++) {
      calculatedMatrix.push([]); //new row
      for (var j = 0; j < matrix2[0].length; j++) {
        for (var k = 0; k < matrix2.length; k++) {
          entryAnswer += parseFloat(matrix1[i][k]) * parseFloat(matrix2[k][j]);
        }
        calculatedMatrix[i].push(entryAnswer);
        entryAnswer = 0;
      }
    }

    return calculatedMatrix;
  }

  divide(matrix1, matrix2) {
    var calculatedMatrix = [];
    //First we must find the inverse of matrix 2.
    //To do that, we must discover its determinant
    var det = this.getDeterminant(matrix2, matrix2.length);

    if (det == 0) {
      return false; //cannot progress if det = 0
    }

    //Now we must get the inverted version of matrix 2
    var invertedMatrix = this.inverse(matrix2, det);

    calculatedMatrix = this.multiply(matrix1, invertedMatrix);

    return calculatedMatrix;
  }

  inverse(matrix, det) {
    //create inverse and adjoint matricies
    var inverseMatrix = this.buildEmptyMatrix(matrix.length, matrix[0].length);

    // Find adjoint
    var adjointMatrix = this.adjoint(matrix);

    // Find Inverse using formula "inverse(A) = adj(A)/det(A)"
    for (var i = 0; i < matrix.length; i++)
      for (var j = 0; j < matrix[0].length; j++)
        inverseMatrix[i][j] = adjointMatrix[i][j] / det;

    return inverseMatrix;
  }

  adjoint(matrix) {
    var adjointMatrix = this.buildEmptyMatrix(matrix.length, matrix[0].length);

    if (matrix.length == 1) {
      adjointMatrix[0][0] = 1;
      return adjointMatrix;
    }

    var coFactors = this.buildEmptyMatrix(matrix.length, matrix[0].length); //build Cofactor matrix
    var sign = 1; // To store sign multiplier

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[0].length; j++) {
        // Get cofactor of A[i][j]
        this.getCofactor(matrix, coFactors, i, j, matrix.length);

        sign = (i + j) % 2 == 0 ? 1 : -1;

        adjointMatrix[j][i] =
          sign * this.getDeterminant(coFactors, matrix.length - 1);
      }
    }
    return adjointMatrix;
  }

  getDeterminant(matrix, rowCols) {
    var determinant = 0; // Initialize result

    //  Base case : if matrix contains single element
    if (rowCols == 1) return matrix[0][0];

    var coFactors = this.buildEmptyMatrix(rowCols, rowCols); //build Cofactor matrix
    var sign = 1;

    // Iterate for each element of first row
    for (var i = 0; i < rowCols; i++) {
      this.getCofactor(matrix, coFactors, 0, i, rowCols);
      determinant +=
        sign * matrix[0][i] * this.getDeterminant(coFactors, rowCols - 1);

      sign = -sign;
    }
    return determinant;
  }

  getCofactor(matrix, coFactors, p, q, n) {
    var i = 0,
      j = 0;

    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        if (row != p && col != q) {
          coFactors[i][j++] = matrix[row][col];

          if (j == n - 1) {
            j = 0;
            i++;
          }
        }
      }
    }
  }

  buildEmptyMatrix(rows, columns) {
    var newMatrix = [];
    for (var j = 0; j < rows; j++) {
      var currentRow1 = [];
      for (var k = 0; k < columns; k++) {
        currentRow1.push([0]);
      }
      newMatrix.push(currentRow1);
    }
    return newMatrix;
  }
}
