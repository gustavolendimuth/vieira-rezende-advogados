const biosList = document.querySelector('.flex-bios');
const posicao = document.querySelectorAll('#posicao');
const positions = ['Consultant', 'Associate', 'Partiner'];

const sortOrder = (positions) => {
  for (let position of positions) {
    for (let index = 0; index < posicao.length; index += 1) {
      if (posicao[index].innerText === position) {
        const posicaoNode = posicao[index].parentNode.parentNode;
        biosList.prepend(posicaoNode);
      }
    }
  }

}
sortOrder(positions);