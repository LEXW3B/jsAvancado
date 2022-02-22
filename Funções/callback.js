

function teste (cb) {
    console.log('função teste')
    console.log(cb)

    cb()
}
function fn () {
    console.log('callback fn 02')
}
teste(function cb(){
    console.log('callback cb 01')
})



















