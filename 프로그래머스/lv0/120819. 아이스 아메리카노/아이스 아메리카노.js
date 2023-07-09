const solution = (money) => [parseInt(money / 5500), money % 5500]

/* 속도 측면에서

~~ > Math.floor() > parseInt() 

라고한다.

*/