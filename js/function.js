const $container = document.querySelector('.sect-container');
const $a = document.querySelectorAll('a');
const $arrowBtn = document.querySelectorAll('.arrow-btn');
const $groupName = document.querySelectorAll('.group-list > li');
const $friendGroup = document.querySelector('#friend-group');
const $groupInner = document.querySelectorAll('#friend-group div.group-inner');
// const $search = document.querySelector('#chat_list > form > input');

let nowIdx = 0;
let bforeIdx = nowIdx; 


window.addEventListener("DOMContentLoaded", () => {

  $container.setAttribute('style', `height:${window.innerHeight - 70}px`);

});

$groupName.forEach(function (groupName, index) {

  groupName.addEventListener('click', (evt) => {

    evt.preventDefault();

    beforeIdx = nowIdx;
    nowIdx = index;

    if (groupName.getAttribute('class') === 'on') {

      $friendGroup.style.paddingBottom = '0px';
      $groupName[beforeIdx].classList.remove('on');
      $groupInner[beforeIdx].style.display = 'none';

    } else {

      for(let i = 0; i < $groupName.length; i++){   
                
        $groupName[i].classList.remove('on');
        $groupInner[i].style.display = 'none';

      }

      $friendGroup.style.paddingBottom = '100px';
      $groupName[nowIdx].classList.add('on');
      $groupInner[nowIdx].style.display = 'block';

    };

  });
});

for (let i = 1; i < $arrowBtn.length; i++) {

  $arrowBtn[i].addEventListener('click', (evt) => {

    evt.preventDefault();

    $arrowBtn[i].previousElementSibling.classList.toggle('off');

  });
};
