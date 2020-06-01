var i = 0;
var images = [];
var time = 3000;

images[0] = 'https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1585130656649/img/202003/20200310-homepage/20200310_hp_c04_banner_v2.jpg';
images[1] = 'https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1585130656649/img/202003/20200310-homepage/20200310_hp_c05_banner_v2.jpg';
images[2] = 'https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dwe61d9bef/rlmag/images/Magazine-Issues/2020/03-Mar/iwd-hero_crop_articlehero_large.jpg';
images[3] = 'https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dw3124be44/img/201911/20191112-rl50-about-ralph-hero-nav-mb/20191112_about_ralph_lp_c01_hero.jpg';

function changeImg () {
    document.getElementById('slide').src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg

