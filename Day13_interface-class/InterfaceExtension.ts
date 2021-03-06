/* 介面的擴展 Interface Extension */
// 前面的例子有定義過，因此這裡做註解
enum Gender { Male, Female, Other };

interface AccountSystem {
    email: string;
    password: string;
    subscribed: boolean;
}

interface AccountPersonalInfo {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
}

// UserAccount 是 AccountSystem 與 AccountPersonalInfo 的結合
interface UserAccount extends AccountSystem, AccountPersonalInfo { }

/* 使用擴展過後的 Interface */
// 正常使用方法
let accountMaxwell: UserAccount = {
    email: 'max@example.com',
    password: '<hashed-password>',
    subscribed: false,
    nickname: 'Maxwell',
    gender: Gender.Male,
    // birth 可以被省略是因為，該屬性為選用屬性 Optional Property
};

// 少一鍵，且該鍵非選用屬性，則會發出警告
// let accountMartin: UserAccount = {
//   email: 'martin@example.com',
//   password: '<hashed-password>',
//   nickname: 'Mars',
//   birth: new Date(2000, 1, 1),
//   gender: Gender.Male,
// };

// 多一鍵也會發生警告
// let accountLeo: UserAccount = {
//   email: 'leo@example.com',
//   password: '<hashed-password>',
//   subscribed: true,
//   nickname: 'Leonard',
//   birth: new Date(2000, 1, 1),
//   gender: Gender.Male,
//   hasPet: false,
// };

/* 介面的交集 */
// 定義 I1, I2, I3 三種不同介面：
interface I1 { a: string; b: number; }
interface I2 { b: number; c: boolean; }
interface I3 { a: string; c: string; }

// I1 和 I2 同時有 b 屬性且對應型別相同 => STRIKE！
interface I12 extends I1, I2 { }

// I2 和 I3 同時有 c 屬性但對應型別不同 => BALL！
// interface I23 extends I2, I3 {}

// I1 和 I3 同時有 a 屬性且對應型別相同 => STRIKE！
interface I13 extends I1, I3 { }

// 想當然三種型別因為 I2, I3 關係而造成衝突 => BALL！
// interface I123 extends I1, I2, I3 {}


/* 函式之參數可以接受各種至少符合介面的格式 */
interface Duck {
    noise: string;
    makeNoise(): void;
}

function pokeTheDuck(something: Duck) {
    something.makeNoise();
}

let maxwellCanBeDuck = {
    name: 'Maxwell',
    age: 20,
    noise: 'He~He~He~He~He~~~', // 有病
    makeNoise() { console.log(this.noise); },
};

let kittyCanBeDuck = {
    color: 'black and white',
    eyes: 'cute',
    noise: 'Meow~meow~meow~meow~meowwwwwwwwwww',
    makeNoise() { console.log(this.noise); },
};

let vehicleCanBeDuck = {
    brand: 'BMW',
    type: 'motorcycle',
    noise: 'Vroom! Vroom! Vroooooooooooom!',
    makeNoise() { console.log('Vrooooooom!!!'); },
};

let duckIsLiterallyDuck = {
    noise: 'Quack~quack~quack~quack~quack~',
    makeNoise() { console.log('Quack!'); },
};

// pokeTheDuck(maxwellCanBeDuck);
// pokeTheDuck(kittyCanBeDuck);
// pokeTheDuck(vehicleCanBeDuck);
// pokeTheDuck(duckIsLiterallyDuck);


/* 用型別去實作跟 UserAccount 同等效果的型別表示 */
type TAccountSystem = {
    email: string;
    password: string;
    subscribed: boolean;
};

type TAccountPersonalInfo = {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
};

/* 用介面去實作跟 UserAccount 同等效果的介面表示 */
interface IAccountSystem {
    email: string;
    password: string;
    subscribed: boolean;
}

interface IAccountPersonalInfo {
    nickname?: string;
    birth?: Date;
    gender?: Gender;
}

// TUserAccount 型別是 TAccountSystem 與 TAccountPersonalInfo 的 Intersection
type TUserAccount = AccountSystem & AccountPersonalInfo;

// IUserAccount 是 IAccountSystem 與 IAccountPersonalInfo 的結合
interface IUserAccount extends IAccountSystem, IAccountPersonalInfo { }