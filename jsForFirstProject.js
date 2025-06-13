const newBody = document.querySelector('body')
const allBlocks = document.querySelectorAll('.blocks')
const button1 = document.querySelector('.firstButton')

allBlocks.forEach( function (block) {
    block.addEventListener('click', (newBlock) => {
        if (newBlock.target.id === 'blue') {
        newBody.style.backgroundColor = newBlock.target.id
        }

        if (newBlock.target.id === 'green') {
        newBody.style.backgroundColor = newBlock.target.id
        }

        if (newBlock.target.id === 'yellow') {
        newBody.style.backgroundColor = newBlock.target.id
        }

        if (newBlock.target.id === 'orange') {
        newBody.style.backgroundColor = newBlock.target.id
        }
})

})

button1.addEventListener('click', () =>{
    if (newBody.style.backgroundColor = 'white') {
    newBody.style.backgroundColor = 'white'
    }
})

