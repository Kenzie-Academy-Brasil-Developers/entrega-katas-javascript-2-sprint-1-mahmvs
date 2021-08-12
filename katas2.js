// comece a criar a sua função add na linha abaixo
function add(n, m) {
    return n+m
        
    }

// descomente a linha seguinte para testar sua função

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(n, m) {
    let resultado = 0
    for(let i = 0; i < n; i++){
        resultado = add(resultado, m)
    }
    return resultado
}

    
// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo 

function power(x, n) {
    let resultado = 1
    for(let i = 1; i <= n; i++){
        resultado = multiply(resultado, x)
    }
    return resultado
}


// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(f) {
    let resultado = 1
    for(let i = 1; i <= f; i++){
        resultado = multiply(resultado, i)
    }
    return resultado
}



// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(num) {
    let ultimo = 1
    let penultimo = 0
    let resultado
        for(let i = 1; i < num; i++){
            resultado = add(ultimo, penultimo) 
            penultimo = ultimo
            ultimo = resultado


        }
        return resultado
    }



// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
