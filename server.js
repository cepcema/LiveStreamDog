const video = document.getElementById("remoteVideo");

navigator.mediaDevices
    .getUserMedia({
        video: {
            mediaSource: "screen",
            width: { max: window.screen.width },
            height: { max: window.screen.height },
        },
    })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error accessing media devices.", error);
    });