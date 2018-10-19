module.exports = {
    helloWorld,
    helloNinja,
    addDog,
    getDogs,
    getDog
};

let dogs = [
    'labrador',
    'corgi',
    'golden retriever',
    'beagle',
    'jack russle'
];

function helloWorld(req, res, next) {
    res.send("Hello World!");
}

function helloNinja(req, res, next) {
    res.send(`Hello Ninja ${req.body.name}!`);
}

function addDog(req, res, next) {
    dogs.push(req.body.dog);
    res.status(200).json({dogs});
}

function getDogs(req, res, next) {
    res.status(200).json({dogs});
}

function getDog(req, res, next) {
    const id = req.params.id;
    if(dogs[id] == null) {
        res.status(404).send('Dog not found!');
    } 
    res.status(200).json({dog: dogs[id]});
}   

