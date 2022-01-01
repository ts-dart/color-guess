window.onload = () => {
  rgbColor();
  colorsOption();
  clickInColor()
  resetGame();
}

function rgbColor() {
  let rgb = [];
  for (let index = 0; index < 3; index += 1) {
    rgb.push(parseInt(Math.random() * 255));
  }

  const rgbText = `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  const h1Rgb = document.querySelector("#rgb-color");
  
  h1Rgb.innerText = rgbText;
}

function colorsOption() {
  const colorsContainer = document.querySelector("#colorsContainer");
  let rgb = [];

  for (let index = 0; index < 6; index += 1) {
    let array = [];

    for (let index2 = 0; index2 < 3; index2 += 1) {
      array.push(String(parseInt(Math.random() * 255)));
      rgb[index] = array;
    }
  }
  
  for (let index = 0; index < rgb.length; index += 1) {
    let div = document.createElement("div");
    div.classList.add("ball");
    div.style.backgroundColor = `rgb(${rgb[index][0]}, ${rgb[index][1]}
    ,${rgb[index][2]})`;
    
    colorsContainer.appendChild(div);
  }

  let correctRgb = document.querySelector("#rgb-color").innerText;

  let num = parseInt(Math.random() * 6);
  colorsContainer.children[num].style.backgroundColor = "rgb" + correctRgb;  
} 

function clickInColor() {
  const colorsContainer = document.querySelector("#colorsContainer");
  const answer = document.querySelector("#answer");
  const score = document.querySelector("#score");
  
  for (let index = 0; index < colorsContainer.children.length; index += 1) {
    colorsContainer.children[index].addEventListener("click", (clickElement) => {
      let rgbColor = document.querySelector("#rgb-color").innerText;
      rgbColor = "rgb"+rgbColor;
      
      if (rgbColor == clickElement.target.style.backgroundColor) {
        answer.innerText = "Acertou!";
        score();
      }
      else {
        answer.innerText = "Errou! Tente novamente!";
      }

    })
  }
}

function resetGame() {
  const btn = document.querySelector("#reset-game");
  btn.addEventListener("click", () => {
    document.location.reload(true);
  })
}

function score() {
  let incremento = localStorage.getItem("score") + 3;
  localStorage.setItem("score", incremento);
  score.innerText = "Pontos: "+ localStorage.getItem("score");
}