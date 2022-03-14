
document.addEventListener("DOMContentLoaded", function () {

    
    { // region "GIF as a favicon"
        var favicon_images = ["./exploded-gif/frame_00_delay-0.03s.gif", "./exploded-gif/frame_01_delay-0.04s.gif", "./exploded-gif/frame_02_delay-0.03s.gif", "./exploded-gif/frame_03_delay-0.03s.gif", "./exploded-gif/frame_04_delay-0.04s.gif", "./exploded-gif/frame_05_delay-0.03s.gif", "./exploded-gif/frame_06_delay-0.03s.gif", "./exploded-gif/frame_07_delay-0.04s.gif", "./exploded-gif/frame_08_delay-0.03s.gif", "./exploded-gif/frame_09_delay-0.03s.gif", "./exploded-gif/frame_10_delay-0.04s.gif", "./exploded-gif/frame_11_delay-0.03s.gif", "./exploded-gif/frame_12_delay-0.03s.gif", "./exploded-gif/frame_13_delay-0.04s.gif", "./exploded-gif/frame_14_delay-0.03s.gif", "./exploded-gif/frame_15_delay-0.03s.gif", "./exploded-gif/frame_16_delay-0.04s.gif", "./exploded-gif/frame_17_delay-0.03s.gif", "./exploded-gif/frame_18_delay-0.03s.gif", "./exploded-gif/frame_19_delay-0.04s.gif", "./exploded-gif/frame_20_delay-0.03s.gif", "./exploded-gif/frame_21_delay-0.03s.gif", "./exploded-gif/frame_22_delay-0.04s.gif", "./exploded-gif/frame_23_delay-0.03s.gif", "./exploded-gif/frame_24_delay-0.03s.gif", "./exploded-gif/frame_25_delay-0.04s.gif", "./exploded-gif/frame_26_delay-0.03s.gif", "./exploded-gif/frame_27_delay-0.03s.gif", "./exploded-gif/frame_28_delay-0.04s.gif", "./exploded-gif/frame_29_delay-0.03s.gif", "./exploded-gif/frame_30_delay-0.03s.gif", "./exploded-gif/frame_31_delay-0.04s.gif", "./exploded-gif/frame_32_delay-0.03s.gif", "./exploded-gif/frame_33_delay-0.03s.gif", "./exploded-gif/frame_34_delay-0.04s.gif", "./exploded-gif/frame_35_delay-0.03s.gif", "./exploded-gif/frame_36_delay-0.03s.gif", "./exploded-gif/frame_37_delay-0.04s.gif", "./exploded-gif/frame_38_delay-0.03s.gif", "./exploded-gif/frame_39_delay-0.03s.gif", "./exploded-gif/frame_40_delay-0.04s.gif", "./exploded-gif/frame_41_delay-0.03s.gif", "./exploded-gif/frame_42_delay-0.03s.gif", "./exploded-gif/frame_43_delay-0.04s.gif", "./exploded-gif/frame_44_delay-0.03s.gif", "./exploded-gif/frame_45_delay-0.03s.gif", "./exploded-gif/frame_46_delay-0.04s.gif", "./exploded-gif/frame_47_delay-0.03s.gif", "./exploded-gif/frame_48_delay-0.03s.gif", "./exploded-gif/frame_49_delay-0.04s.gif", "./exploded-gif/frame_50_delay-0.03s.gif", "./exploded-gif/frame_51_delay-0.03s.gif", "./exploded-gif/frame_52_delay-0.04s.gif", "./exploded-gif/frame_53_delay-0.03s.gif", "./exploded-gif/frame_54_delay-0.03s.gif", "./exploded-gif/frame_55_delay-0.04s.gif", "./exploded-gif/frame_56_delay-0.03s.gif", "./exploded-gif/frame_57_delay-0.03s.gif", "./exploded-gif/frame_58_delay-0.04s.gif", "./exploded-gif/frame_59_delay-0.03s.gif", "./exploded-gif/frame_60_delay-0.03s.gif", "./exploded-gif/frame_61_delay-0.04s.gif", "./exploded-gif/frame_62_delay-0.03s.gif", "./exploded-gif/frame_63_delay-0.03s.gif", "./exploded-gif/frame_64_delay-0.04s.gif", "./exploded-gif/frame_65_delay-0.03s.gif", "./exploded-gif/frame_66_delay-0.03s.gif", "./exploded-gif/frame_67_delay-0.04s.gif", "./exploded-gif/frame_68_delay-0.03s.gif", "./exploded-gif/frame_69_delay-0.03s.gif", "./exploded-gif/frame_70_delay-0.04s.gif", "./exploded-gif/frame_71_delay-0.03s.gif", "./exploded-gif/frame_72_delay-0.03s.gif", "./exploded-gif/frame_73_delay-0.04s.gif", "./exploded-gif/frame_74_delay-0.03s.gif", "./exploded-gif/frame_75_delay-0.03s.gif", "./exploded-gif/frame_76_delay-0.04s.gif", "./exploded-gif/frame_77_delay-0.03s.gif", "./exploded-gif/frame_78_delay-0.03s.gif", "./exploded-gif/frame_79_delay-0.04s.gif", "./exploded-gif/frame_80_delay-0.03s.gif", "./exploded-gif/frame_81_delay-0.03s.gif", "./exploded-gif/frame_82_delay-0.04s.gif", "./exploded-gif/frame_83_delay-0.03s.gif", "./exploded-gif/frame_84_delay-0.03s.gif", "./exploded-gif/frame_85_delay-0.04s.gif", "./exploded-gif/frame_86_delay-0.03s.gif", "./exploded-gif/frame_87_delay-0.03s.gif", "./exploded-gif/frame_88_delay-0.03s.gif"],
            image_counter = 0; // To keep track of the current image

        setInterval(function () {
            // remove current favicon
            if (document.querySelector("link[rel='icon']") !== null)
                document.querySelector("link[rel='icon']").remove();
            if (document.querySelector("link[rel='shortcut icon']") !== null)
                document.querySelector("link[rel='shortcut icon']").remove();

            // add new favicon image
            document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

            // If last image then goto first image
            // Else go to next image    
            if (image_counter == favicon_images.length - 1)
                image_counter = 0;
            else
                image_counter++;
        }, 20);
    } //endregion "GIF as a favicon"
   


    var logElement = document.getElementById('log');

    function log(msg) {
        logElement.innerHTML += ('<p>' + msg + '</p>');
    }

    function capture() {
        log('capture: ' + this.firstChild.nodeValue.trim());
    }

    function bubble() {
        log('bubble: ' + this.firstChild.nodeValue.trim());
    }

    function clearOutput() {
        logElement.innerHTML = "";
    }

    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', capture, true); // -> capture set truw
        //divs[i].addEventListener('click', bubble, false);
    }
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clearOutput);

});