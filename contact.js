var cursor = document.querySelector('.blobC');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('hi');
})
