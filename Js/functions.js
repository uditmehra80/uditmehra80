(function f1(a) {
    return function f2(b) {
        (function f3(c) {
            console.log(a)
            console.log(b)
            console.log(c)
        }("CCCCCCCC"))
    }("BBBBBBBB")
}("AAAAAAAAAA"))