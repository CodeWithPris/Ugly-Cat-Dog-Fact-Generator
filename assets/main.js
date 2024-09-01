function getCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-fact').textContent = data.data[0];
        })
        .catch(error => console.error('Error fetching the cat fact:', error));
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-pic').src = data[0].url;
        })
        .catch(error => console.error('Error fetching the cat picture:', error));

    const buttonTexts = ["Show Me a Cat!", "More Cats, Please!", "Next Cat!", "Give Me a Cat!", "Here, kitty-kitty!", "Meow?", "Meowza!"];
    document.querySelector("button").textContent = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    playRandomCatAudio();
    playRandomDogAudio();
}

const catAudioClips = [
    'assets/audio/kitten-meow.mp3',
    'assets/audio/cat-purr-meow.mp3',
    'assets/audio/cat-whine.wav'
];

function playRandomCatAudio() {
    const audioElement = document.getElementById('cat-audio');
    const randomIndex = Math.floor(Math.random() * catAudioClips.length);
    const randomClip = catAudioClips[randomIndex];
    audioElement.src = randomClip;
    audioElement.play();
}

function getDogFact() {
    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/?number=1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dog-fact').textContent = data.data[0];
        })
        .catch(error => console.error('Ruh-roh! Error fetching the dog fact:', error));
    
    fetch('api.thedogapi.com')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dog-pic').src = data[0].url;
        })
        .catch(error => console.error('Ruh-roh! Error fetching the dog picture:', error));

    const buttonTexts = ["Show Me a Cat!", "More Cats, Please!", "Next Cat!", "Give Me a Cat!", "Here, kitty-kitty!", "Meow?", "Meowza!"];
    document.querySelector("button").textContent = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    playRandomCatAudio();
    playRandomDogAudio();
}

const dogAudioClips = [
    'assets/audio/dog-bark1.mp3',
    'assets/audio/dog-bark2.mp3',
    'assets/audio/dog-bark3.wav'
];

function playRandomDogAudio() {
    const audioElement = document.getElementById('dog-audio');
    const randomIndex = Math.floor(Math.random() * dogAudioClips.length);
    const randomClip = dogAudioClips[randomIndex];
    audioElement.src = randomClip;
    audioElement.play();
}


function switchAnimal() {
    const titleElement = document.getElementById('dog-title');
    const imageElement = document.getElementById('dog-image');
    const factElement = document.getElementById('dog-fact');

    // Update title
    titleElement.textContent = "Random dog fact:";

    // Update fact
    const randomFactIndex = getRandomIndex(catFacts);
    factElement.textContent = catFacts[randomFactIndex];

    // Update image
    const randomImageIndex = getRandomIndex(catImages);
    imageElement.src = catImages[randomImageIndex];
}