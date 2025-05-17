function climbStairs(n) {
    if (n <= 2) return n;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }

    return second;
}

console.log(climbStairs(3));
// output: 3;
