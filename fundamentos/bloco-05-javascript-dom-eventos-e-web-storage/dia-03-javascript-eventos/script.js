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
  function buttonHoliday() {

  }