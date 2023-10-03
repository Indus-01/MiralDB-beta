const input = document.querySelector('.text-input-indus-default');
const btn = document.querySelector('.indus-post-button');
const textarea = document.querySelector('.text-area-indus-default');
const cardBody = document.querySelector('.container-cards');

const users = [
       {
              name1: 'El Abdullo Abi Shalmurad',
              age: 23,
       },
       {
              name1: 'El Alex',
              age: 23,
       }
];

const postTodo = () => {
       document.querySelector('#modal').style.display = 'block';
}

document.getElementById('close').onclick = function(){
       document.querySelector('#modal').style.display = 'none';
}

const promise = new Promise((resolve, reject) => {
       setTimeout(()=>resolve(Math.random()), 2000);
});

console.log(promise);
promise.then(x=> console.log(x));

