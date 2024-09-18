// 1 задание

zad1.onclick = function () {

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let sum = 0;

    for (let key in salaries) {
        sum += salaries[key];
    }

    alert(sum);

}

// 2 задание

zad2.onclick = function () {

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                obj[key] *= 2;
            }
        }
    }

    multiplyNumeric(menu);

    console.log(menu);

}

// 3 задание

zad3.onclick = function () {

    let calculator = {
        a: 0,
        b: 0,
        read() {
            this.a = +prompt('Введите a');
            this.b = +prompt('Введите b');
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());

}

// 4 задание

zad4.onclick = function () {

    let value = '$120'

    function extractCurrencyValue(str) {
        return +str.slice(1);
    }

    alert(extractCurrencyValue(value));

}

// 5 задание

zad5.onclick = function () {

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map(item => item.name);

    alert(names);

}

// 6 задание

zad6.onclick = function () {

    function getAverageAge(users) {
        if (users.length === 0) {
            return 0;
        }

        const totalAge = users.reduce((sum, user) => sum + user.age, 0);
        return totalAge / users.length;
    }

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let averageAge = getAverageAge(users);
    alert(averageAge);
}