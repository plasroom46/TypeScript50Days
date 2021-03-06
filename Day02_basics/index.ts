// index.ts

/* ------------------------------- Day 02 ----------------------------------- */
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

// 我們先定義好我們的變數，但是不要去帶入任何值
let messageToSend;

// 帶入我們想要寫的值
messageToSend = 'Cat is afraid of cucumbers...';
messageToSend = 1011011011100100011111010110;

let absoluteNothing: undefined = undefined;
let literallyAbsoluteNothing: null = null;

// 以下這兩行會出現警告！
// absoluteNothing = 123;
// literallyAbsoluteNothing = "I can't live in this variable now...";

let canBeNullableString: string;

// TDZ 暫時性死區的錯誤！
// let myString = canBeNullableString;

canBeNullableString = 'hello';

// canBeNullableString = undefined;
// canBeNullableString = null;

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = 'Assigned with string...';
absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'Assigned with string, again...';