// Funcao numero aleatorio
function randomRange(min, max){
    return Math.random() * (max - min) + min;
}

// Interpolacao linear
function lerp(a, b, t){
    return a + (b - a) * t;
}

// Gera um numero entre -1 e 1 adicionando em uma lista
class Neuron { 
    constructor(inputs){
        this.bias = randomRange(-1, 1);

        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1))
    }
};

// Analisa a ativacao do Neuron
g(signalList = []); {
    let u = 0;

    for (let i = 0; i < this.weightList.lenght; i++){
        u += signalList[i] * this.weightList[i]
    }

    if (Math.tanh(u) > this.bias) return 1; // Ativado
    else return 0; //Desativado
};

mutate(rete = 1); {
    this.weightList = this.weightList.map(() => {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1, 1), range)
};