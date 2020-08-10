let main = document.querySelector('main')
let photo = document.querySelector('.photo')
console.log(photo)
// idk work it at notepad or not
document.addEventListener('mousemove', (event) => {
    let x = event.x
    let y = event.y
    // photo.style.backgroundColor = 'red'
    photo.style.boxShadow = `${x} ${y} 15px black`
    console.log(x, y)
})