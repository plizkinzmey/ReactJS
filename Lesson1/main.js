// Урок 1

// Задание 1

function loop(times = 0, callback = null) {

    for (i = 0; i < times; i++) {
        callback();
    }
}
loop(3, function () {
    console.log('callback вызван');
});

// Задание 2 - Площадь треугольника

function calculateAria (a, h) {
    // a - основание треугольника
    // h - высота треугольника
    // s - площадь треугольника
    const f = 'triangle';
    let s = (a*0.5)*h;
    const obj = {area:s,figure: f, input: {osnovanie:a, visota: h}};
    console.log(obj);
}

calculateAria(5,6);

