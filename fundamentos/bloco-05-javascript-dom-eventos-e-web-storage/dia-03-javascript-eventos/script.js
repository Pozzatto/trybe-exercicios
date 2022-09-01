function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercicio 1

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function addDays() {
    let ul = document.getElementById('days');
    
    for (let index = 0; index < decemberDaysList.length; index++) {
      let day = decemberDaysList[index];
      let li = document.createElement('li');
      li.innerHTML = day;

      if (day === 24 || day === 31) {
        li.className = 'day holiday';
        ul.appendChild(li)
      } else if (day === 4 || day === 11 || day === 18) {
        li.className = 'day friday';
        ul.appendChild(li);
      } else if (day === 25) {
        li.className = 'day holiday friday';
        ul.appendChild(li);
      } else {
        li.className = 'day'
        ul.appendChild(li)
      }
    }
  }
  addDays()
  
  //--------------------------------
  //Exercicio 2

  function buttonHoliday(name) {
    let button = document.createElement('button');
    button.id = "btn-holiday";
    button.innerHTML = name;
    let div = document.querySelector('.buttons-container');
    div.appendChild(button);
  }
  buttonHoliday('Feriado');

  //--------------------------------
  //Exercicio 3
  function backColorHoliday() {
    let buttonFeriado = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let oldColor = "rgb(238,238,238)";
    let newColor = 'white';

    buttonFeriado.addEventListener('click', function() {
      for (let index = 0; index < holidays.length; index++) {
        if (holidays[index].style.backgroundColor === newColor) {
          holidays[index].style.backgroundColor = oldColor;
        } else {
          holidays[index].style.backgroundColor = newColor;
        }
      }
    })
  }
  backColorHoliday();

  //---------------------------------
  //exercicio 4

  function buttonFriday() {
    let friday = document.createElement('button');
    friday.id = 'btn-friday';
    friday.innerHTML = 'Sexta-feira';
    let div = document.querySelector('.buttons-container');
    div.appendChild(friday);


  }
  buttonFriday();

  //----------------------------------
  //exercicio 5
  
  function funcButtonFriday(fridays) {
    let buttonFriday = document.querySelector('#btn-friday');
    let friday = document.querySelectorAll('.friday');
    let sextou = 'Sextou BB';

    buttonFriday.addEventListener('click', function() {
      for (let index = 0; index < friday.length; index++) {
        if (friday[index].innerHTML !== sextou) {
          friday[index].innerHTML = sextou;
        } else {
          friday[index].innerHTML = fridays[index];
        }
        
      }
    })
  }
  funcButtonFriday([4, 11, 18, 25]);

  //----------------------------------
  //exercicio 6

  function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'
    })
  }

  function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  }
  dayMouseOver();
  dayMouseOut();
  
  //----------------------------------
  //exercicio 7

  function mytasks(task) {
    let tasksContainer = document.querySelector('.my-tasks');
    let span = document.createElement('span');
    span.innerHTML = task;

    tasksContainer.appendChild(span);
  }
  mytasks('Projeto da Trybe');

  //----------------------------------
  //exercicio 8

  function legendColor(cor) {
    let div = document.createElement('div');
    div.style.backgroundColor = cor;
    div.className = 'task'
    let divFather = document.querySelector('.my-tasks');
    divFather.appendChild(div);

  }
  legendColor('blue');

  //----------------------------------
  //exercicio 9