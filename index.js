let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom ='250px'
document.body.append(pineTree)

let newImage = (src, left, bottom) => {
    gameObject.src = src
    gameObject.style.position = left
    gameObject.style.left = bottom
    gameObject.style.bottom
    document.body.append(gameObject)
}

