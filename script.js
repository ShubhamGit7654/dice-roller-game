function diceRoll(){
    const enterNum = document.getElementById("enterNum").value;
    const diceNum = document.getElementById("diceNum");
    const diceImg = document.getElementById("diceImg");

    const values = [];
    const images = [];

    for(let i=0; i<enterNum; i++){
        
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);
        images.push(`<img src="images/dice_${value}.png">`);
    }

    diceNum.textContent = `dice-->${values.join(",")}`;
    diceImg.innerHTML = images.join(" ");
}
