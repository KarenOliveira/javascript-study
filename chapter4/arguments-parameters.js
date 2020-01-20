console.log('Arguments and Parameters');

const speak = function(name = 'luigi',time = 'night'){
    console.log(`good ${time} ${name}`)
};

speak('Karen','morning');