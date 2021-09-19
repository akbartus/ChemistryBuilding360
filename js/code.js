// Video background
document.querySelector('video').playbackRate = 1;

// Overlay on
function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("main").style.background = "rgba(0, 105, 78, 0)";
    document.getElementById("intro").style.opacity = "0";
    document.querySelector("html").style.overflowY = "hidden";
}

// Overlay off
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("main").style.background = "rgba(0, 105, 78, 0.8)";
    document.getElementById("intro").style.opacity = "1";
    document.querySelector("html").style.overflowY = "auto";
}

// Declare variables 
let photoBackground = document.getElementById('photoBackground');
let videoBackground = document.getElementById('videoBackground');

let videoSphere = document.getElementById('videoSphere')
let scene = document.getElementById('mainScene');
let backgroundvideo = document.getElementById('background-video');
let main = document.getElementById('main');
let overlay = document.getElementById('overlay');
let closeInnerButton = document.getElementById('closeInner');
let textOverlay = document.getElementById("textOverlay");
let informationOverlay = document.getElementById("informationOverlay");
let closeTextWindow = document.getElementById("closeText");

function informationOpen() {
    textOverlay.setAttribute("style", "display:block;");
    closeTextWindow.setAttribute("style", "display:block;");
}

function closeText() {
    textOverlay.setAttribute("style", "display:none;");
    closeTextWindow.setAttribute("style", "display:none;");
}

// Room 1
document.getElementById("room1").addEventListener("click", function () {
    main.setAttribute("style", "display:none");
    scene.setAttribute('style', "visibility: visible");
    overlay.setAttribute("style", "display:none");
    videoSphere.setAttribute("opacity", "0");
    photoBackground.setAttribute('opacity', "1");
    photoBackground.setAttribute('src', "img/1.jpg");
    closeInnerButton.setAttribute('style', "display: block");
    informationOverlay.setAttribute("style", "display:block;");
    textInner.innerHTML = "The Nuclear Magnetic Resonance (NMR) and Mass Spectroscopy Lab serves as the focal point of the Chemistry Building’s entrance/lobby area. This chemical instrumentation lab is used for both teaching and research and houses two NMR instruments and two mass spectrometers, including a MALDI-TOF mass spectrometer, acquired through a 2020 grant from the National Science Foundation."
    addZoom();
})

// Room 2
document.getElementById("room2").addEventListener("click", function () {
    main.setAttribute("style", "display:none");
    scene.setAttribute('style', "visibility: visible");
    overlay.setAttribute("style", "display:none");
    videoSphere.setAttribute("opacity", "0");
    photoBackground.setAttribute('opacity', "1");
    photoBackground.setAttribute('src', "img/2.jpg");
    closeInnerButton.setAttribute('style', "display: block");
    informationOverlay.setAttribute("style", "display:block;");
    textInner.innerHTML = "The first floor of the Chemistry Building is lined with various configurations of student study and collaboration spaces, bathed in light from floor-to-ceiling windows. Lockers are provided as well, allowing students to store their personal belongings outside of the floor’s labs and creating a safer laboratory environment."
    addZoom();
})

// Room 3
document.getElementById("room3").addEventListener("click", function () {
    main.setAttribute("style", "display:none");
    scene.setAttribute('style', "visibility: visible");
    overlay.setAttribute("style", "display:none");
    videoSphere.setAttribute("opacity", "0");
    photoBackground.setAttribute('opacity', "1");
    photoBackground.setAttribute('src', "img/3.jpg");
    closeInnerButton.setAttribute('style', "display: block");
    informationOverlay.setAttribute("style", "display:block;");
    textInner.innerHTML = "The first-floor Organic Chemistry Teaching Lab is equipped with 16 fume hoods, serving two students each, that line the perimeter of the room and allow students to conduct experiments involving chemical reactions. An adjacent Analytical Chemistry Teaching Lab, double the size of similar space in Clippinger Laboratories, gives students access to various instrumentation, which they learn how to use and maintain."
    addZoom();
})

// Room 4
document.getElementById("room4").addEventListener("click", function () {
    main.setAttribute("style", "display:none");
    overlay.setAttribute("style", "display:none");
    scene.setAttribute('style', "visibility: visible");
    closeInnerButton.setAttribute('style', "display: block");
    photoBackground.setAttribute("opacity", "0");
    // setting attribute on the element is greater than setting html attribute.
    videoSphere.setAttribute("opacity", "1");
    videoBackground.play();
    videoBackground.setAttribute('style', "visibility: visible");
    informationOverlay.setAttribute("style", "display:block;");
    textInner.innerHTML = "Working inside the Chemistry Building’s second-floor Synthetic Research Lab, doctoral students Md Nazimuddin and Nathan Thompson synthesize building blocks for future incorporation into Cucurbituril-based supramolecular assemblies. Cucurbiturils are pumpkin-shaped, hollow molecules that can encapsulate other molecules in their cavities and being investigated for applications that range from drug development to material science. Nazimuddin and Thompson conduct research in the lab of Dr. Eric Masson, Roenigk Chair of Chemistry, professor of chemistry, and graduate chair of OHIO’s Department of Chemistry and Biochemistry."
    addZoom();
})

// Room 5
document.getElementById("room5").addEventListener("click", function () {
    main.setAttribute("style", "display:none");
    scene.setAttribute('style', "visibility: visible");
    overlay.setAttribute("style", "display:none");
    videoSphere.setAttribute("opacity", "0");
    photoBackground.setAttribute('opacity', "1");
    photoBackground.setAttribute('src', "img/5.jpg");
    closeInnerButton.setAttribute('style', "display: block");
    informationOverlay.setAttribute("style", "display:block;");
    textInner.innerHTML = "The Chemistry Building’s third-floor Instrumentation-Based Research Lab houses this femtosecond laser system, which allows for single-molecule microscopy. The laser system was acquired through a grant from the National Science Foundation."
    addZoom();
})

// Room 6
document.getElementById("room6").addEventListener("click", function () {
    main.setAttribute("style", "display:none");
    scene.setAttribute('style', "visibility: visible");
    overlay.setAttribute("style", "display:none");
    videoSphere.setAttribute("opacity", "0");
    photoBackground.setAttribute('opacity', "1");
    photoBackground.setAttribute('src', "img/6.jpg");
    closeInnerButton.setAttribute('style', "display: block");
    informationOverlay.setAttribute("style", "display:block;");
    textInner.innerHTML = "The third-floor Instrumentation-Based Research Lab is equipped with an Atomic Force Microscope, which can image at the nanometer level nearly every type of surface, including polymers, ceramics and biological samples. Dr. Katherine Cimatu, associate professor of chemistry, has been using the Atomic Force Microscope and other instruments in the lab in her research on polymers and how the material may allow improvements in artificial corneas."
    addZoom();
})

// Close 360 experience
function closeInner() {
    photoBackground.setAttribute('src', "");
    scene.setAttribute('style', "visibility: hidden");
    closeInnerButton.setAttribute('style', "display:none;");
    informationOverlay.setAttribute("style", "display:none;");
    textOverlay.setAttribute("style", "display:none")
    main.setAttribute("style", "display:block");
    overlay.setAttribute("style", "display:block;");
}

// Camera zoom inside the function
function addZoom() {
    window.addEventListener("wheel", (event) => {
        // small increments for smoother zooming
        const delta = event.wheelDelta / 120 / 10;
        var mycam = document.getElementById("cameraZoom").getAttribute("camera");
        var finalZoom =
            document.getElementById("cameraZoom").getAttribute("camera").zoom + delta;
        // limiting the zoom
        if (finalZoom < 1) finalZoom = 1;
        if (finalZoom > 2) finalZoom = 2;
        mycam.zoom = finalZoom;

        document.getElementById("cameraZoom").setAttribute("camera", mycam);
    });
}
