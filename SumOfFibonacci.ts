function fibonacci(n: number): number {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n: number = 20;
let sum: number = 0;
for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Sum: " + sum);
