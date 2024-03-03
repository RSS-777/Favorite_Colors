const root = document.querySelector('.root');
const h1 = document.createElement('h1');
const header = document.createElement('div');
const main = document.createElement('main');
const button = document.createElement('button');
const arrElements = [];

h1.innerText = 'Favorite Colors';
button.innerText = 'Change colors';
button.addEventListener('click', handleColors)
h1.classList.add('h1');
header.classList.add('header');
main.classList.add('main');
button.classList.add('button')

root.append(header);
header.append(h1);
header.append(button);
root.append(main)

const randomColor = () => {
   const color = Math.floor(Math.random() * 16777215).toString(16)
   return '#' + '0'.repeat(6 - color.length) + color
}

for (let i = 0; i < 50; i++) {
   const element = document.createElement('div');
   const input = document.createElement('input');
   const codeColor = document.createElement('p');
   const massage = document.createElement('p');
   massage.innerText = 'Сlick to lock color';
   massage.classList.add('massage')
   input.type = 'checkbox';
   input.classList.add('input');
   codeColor.classList.add('code-color');
   element.append(input)
   element.append(codeColor)
   element.append(massage)
   element.classList.add('element');
   arrElements.push({ element, input, codeColor });
}

function handleColors() {
   arrElements.forEach(({ element, input, codeColor }) => {
      main.append(element)
      element.classList.add('element')
      const color = randomColor();

      if (!input.checked) {
         element.style.background = color
         codeColor.innerText = color
      }
   })
}
handleColors()