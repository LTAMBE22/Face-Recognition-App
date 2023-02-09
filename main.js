https://teachablemachine.withgoogle.com/models/XHKjpWdNh/
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90,
)};


camera = document.getElementById("camera");

Webcam.attach( '#camera' )


function take_snapshot()
{
    Webcam.snap(function(data_uri)) {
        document.getElementById("result").innerHTML = "'<ing id="captured_image" src="'+data_uri+'"/>'; 
    }
}


console.log('ml5 version:', ml5.version)

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/XHKjpWdNh/', modelLoaded);

