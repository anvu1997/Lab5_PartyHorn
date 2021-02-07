function changeInput(number)
{
    if (number = 0)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    else if (number < 34)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    else if (number < 67)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    else if (number < 101)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    
    document.getElementById("volume-number").value = volume;
    document.getElementById("volume-slider").value = volume;
    document.getElementById('horn-sound').volume = volume / 100;
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
            document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
        }
        if (selected == "radio-car-horn"){
            document.getElementById("sound-image").src = "./assets/media/images/car.svg";
            document.getElementById("sound-image").alt = "Car Horn";
            document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3";
        }
        if (selected == "radio-party-horn"){
            document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
            document.getElementById("sound-image").alt = "Party Horn";
            document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3";
        }
    }
}
