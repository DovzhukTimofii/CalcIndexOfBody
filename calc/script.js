


function calcIndexOfBody() {
  let waightInput = document.getElementById('waight');
  let haightInput = document.getElementById('haight');
  let res = document.getElementById('resoult-screen');

  

  waightInput.addEventListener('input', updouteOutput);
  haightInput.addEventListener('input', updouteOutput);

  function updouteOutput()  {
    const value1 = waightInput.value;
    const value2 = haightInput.value / 100;
    const sum = Number(value1) + Number(value2);

    let calc = value1 / (value2 * value2);

    
    res.textContent = calc;
  }

  updouteOutput()

  res.innerHTM = `
    <p>Ваш Індекс масси тіла:<span id="resoult-screen">${res}</span></p>
  `;
  return res
}


calcIndexOfBody()
