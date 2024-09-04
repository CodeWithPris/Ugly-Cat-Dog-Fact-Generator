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

    const catButtonTexts = ["Show Me a Cat!", "More Cats, Please!", "Next Cat!", "Give Me a Cat!", "Here, kitty-kitty!", "Meow?", "Meowza!"];
    document.querySelector(".cat-button").textContent = catButtonTexts[Math.floor(Math.random() * catButtonTexts.length)];

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

    playRandomCatAudio();
}

//

function getDogFact() {
    fetch('https://dogapi.dog/api/v2/facts')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dog-fact').textContent = data.data[0].attributes.body;
    })
    .catch(error => console.error('Ruh-roh! Error fetching the dog fact:', error));

    
    fetch('https://api.thedogapi.com/v1/images/search/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dog-pic').src = data[0].url;
        })
        .catch(error => console.error('Ruh-roh! Error fetching the dog picture:', error));

    const dogButtonTexts = ["Fetch Another Fact!", "Next Dog, Please!", "Next Dog!", "Puppy Time!", "Woof! Tell Me More!", "Bork Bork!", "Wow much doge!"];
    document.querySelector(".dog-button").textContent = dogButtonTexts[Math.floor(Math.random() * dogButtonTexts.length)];

    const dogAudioClips = [
        'assets/audio/dog-bark1.mp3',
        'assets/audio/dog-bark2.mp3',
        'assets/audio/dog-bark3.mp3'
    ];
    
    function playRandomDogAudio() {
        const audioElement = document.getElementById('dog-audio');
        const randomIndex = Math.floor(Math.random() * dogAudioClips.length);
        const randomClip = dogAudioClips[randomIndex];
        audioElement.src = randomClip;
        audioElement.play();
    }

    playRandomDogAudio();
}

function showCatContent() {
    document.getElementById('cat-container').classList.remove('hidden');
    document.getElementById('dog-container').classList.add('hidden');
    
    getCatFact();
}

function showDogContent() {
    document.getElementById('dog-container').classList.remove('hidden');
    document.getElementById('cat-container').classList.add('hidden');

    getDogFact();
}
