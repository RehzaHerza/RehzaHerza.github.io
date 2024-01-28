document.getElementById('measureButton').addEventListener('click', function () {
    measureSpeed();
});

function measureSpeed() {
    var speedTest = new SpeedTest();

    speedTest.on('downloadprogress', function (progress) {
        // Tampilkan progres pengukuran
        console.log('Download Progress: ' + progress);
    });

    speedTest.on('uploadprogress', function (progress) {
        // Tampilkan progres pengukuran
        console.log('Upload Progress: ' + progress);
    });

    speedTest.on('downloadfinished', function (speed) {
        // Tampilkan hasil kecepatan download
        document.getElementById('result').innerText = 'Kecepatan Download: ' + speed + ' Mbps';
    });

    speedTest.on('uploadfinished', function (speed) {
        // Tampilkan hasil kecepatan upload
        document.getElementById('result').innerText += '\nKecepatan Upload: ' + speed + ' Mbps';
    });

    // Mulai pengukuran
    speedTest.start();
}
