
function newImage(link, left, bottom){
    let gameObject = document.createElement('img')
    gameObject.src = link
    gameObject.style.position = 'fixed'
    gameObject.style.left = left + 'px'
    gameObject.style.bottom = bottom + 'px'
    document.body.append(gameObject)
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)