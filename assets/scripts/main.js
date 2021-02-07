function getVolume(number)
{
    changeInput(number.target.value);
}

function changeInput(num)
{
    document.getElementById("volume-number").value = num;
    document.getElementById("volume-slider").value = num;
    document.getElementById('horn-sound').volume = num / 100;
    if (num > 0)
        document.getElementById("honk-btn").disabled = false;
    else 
        document.getElementById("honk-btn").disabled = true;
    if (num == 0)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    else if (num < 34)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    else if (num < 67)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    else if (num < 101)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
}

function changeRadio()
{
    const allSounds = document.querySelectorAll('input[name="radio-sound"]');
    var selected;
    for (const sound of allSounds)
    {
        if (sound.checked)
        {
            selected = sound.id;
        }
        if (selected == "radio-air-horn"){
            document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
            document.getElementById("sound-image").alt = "Air Horn";
            document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
        }
        if (selected == "radio-car-horn"){
            document.getElementById("sound-image").src = "./assets/media/images/car.svg";
            document.getElementById("sound-image").alt = "Car Horn";
            document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        }
        if (selected == "radio-party-horn"){
            document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
            document.getElementById("sound-image").alt = "Party Horn";
            document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
        }
    }
}
document.getElementById("volume-slider").addEventListener("input", getVolume);
document.getElementById("volume-number").addEventListener("input", getVolume);
document.getElementById("audio-selection").addEventListener("change", changeRadio);
document.getElementById("party-horn-form").addEventListener("submit", function(event) { event.preventDefault();
    document.getElementById("horn-sound").play();
});
