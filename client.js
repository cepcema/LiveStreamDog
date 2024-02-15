const videosContainer = document.getElementById("videosContainer");

navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
        const screenDevices = devices.filter(
            (device) => device.kind === "videoinput"
        );
        return Promise.all(
            screenDevices.map((device) =>
                navigator.mediaDevices.getUserMedia({
                    video: { deviceId: device.deviceId },
                })
            )
        );
    })
    .then((streams) => {
        streams.forEach((stream) => {
            const video = document.createElement("video");
            video.srcObject = stream;
            video.autoplay = true;
            videosContainer.appendChild(video);
        });
    })
    .catch((error) => {
        console.error("Error accessing media devices.", error);
    });