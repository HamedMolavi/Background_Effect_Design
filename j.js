document.getElementsByClassName('circle')[0].addEventListener('click', () => {
    document.documentElement.scrollTop = 0
});

document.getElementsByClassName('circle')[1].addEventListener('click', () => {
    document.documentElement.scrollTop = parseFloat(
        window.getComputedStyle(
            document.getElementsByClassName('container')[0])
            ['height']);
});

document.getElementsByClassName('circle')[2].addEventListener('click', () => {
    document.documentElement.scrollTop = 2*parseFloat(
        window.getComputedStyle(
            document.getElementsByClassName('container')[0])
            ['height']);
});

document.getElementsByClassName('circle')[3].addEventListener('click', () => {
    document.documentElement.scrollTop = 3*parseFloat(
        window.getComputedStyle(
            document.getElementsByClassName('container')[0])
            ['height']);
});

document.getElementsByClassName('circle')[4].addEventListener('click', () => {
    document.documentElement.scrollTop = 4*parseFloat(
        window.getComputedStyle(
            document.getElementsByClassName('container')[0])
            ['height']);
});


//====================================================================================== Hoisting
