// Function to find the sum of distinct elements in two sets
function findDistinctSum(set1, set2) {
    let sum = 0;

    // Check each element in set1
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            sum += set1[i];
        }
    }

    // Check each element in set2
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            sum += set2[i];
        }
    }

    return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = findDistinctSum(set1, set2);
console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)



// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }
    return product;
}

// Function to check if two vectors are orthogonal using dot product
function areOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
}

// Example usage:
const vector1 = [1, 2, 3];
const vector2 = [4, -2, 1];

const areVectorsOrthogonal = areOrthogonal(vector1, vector2);
console.log("Are vectors orthogonal?", areVectorsOrthogonal);
