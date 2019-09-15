// object of resolutions
var resolutions = {
    mobile   : '0225x0048',
    tablet   : '0364x0077',
    desktop  : '0550x0115',
    _4k       : '1100x0230'
}

//resize window 
window.addEventListener('resize', function() {
    window.location.reload();
});

// img link : http://vitolas.vbrqx.com/photos/1100x0230/MARUXINA_sa006_Anastasio_Mavera_1100x0230.jpg
//json information : RESOLUTION/MARUXINA_sa006_Anastasio_Mavera_RESOLUTION.jpg

// suppose we have an image name: RESOLUTION/MARUXINA_sa006_Anastasio_Mavera_RESOLUTION.jpg
// we have to change RESOLUTION with 0225x0048 by example

function getImage() {
    var imageName = 'RESOLUTION/MARUXINA_sa006_Anastasio_Mavera_RESOLUTION.jpg';
    var replacedImgName;
    if(window.innerWidth <= 3840) {
        replacedImgName = imageName.replace(/RESOLUTION/gi, resolutions._4k);
    }
    if(window.innerWidth <= 1920) {
        replacedImgName = imageName.replace(/RESOLUTION/gi, resolutions.desktop);
    }
    if(window.innerWidth <= 991) {
        replacedImgName = imageName.replace(/RESOLUTION/gi, resolutions.tablet);
    }
    if(window.innerWidth <= 570) {
        replacedImgName = imageName.replace(/RESOLUTION/gi, resolutions.mobile);
    }
    return replacedImgName;
}

// show img
var img_box = document.querySelector('.imgBox');
var reso_span = document.querySelector('#resolution');

var get_domain = window.location.protocol + '//' + window.location.hostname;
if(get_domain !== 'http://vitolas.vbrqx.com') {
    console.log('http://vitolas.vbrqx.com' + '/photos/' + getImage());
    img_box.querySelector('img').src = 'http://vitolas.vbrqx.com' + '/photos/' + getImage();
}else {
    console.log(get_domain + '/photos/' + getImage());
    img_box.querySelector('img').src = get_domain + '/photos/' + getImage();
}


