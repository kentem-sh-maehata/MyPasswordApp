{
  const slider = document.getElementById('slider') as HTMLInputElement
  const btn = document.getElementById('btn')

  slider!.addEventListener('input',() => {
    const passlen:HTMLElement = document.getElementById('password-length')!
    if(passlen){
      passlen.textContent = slider!.value
    }
  })

  btn?.addEventListener('click',() => {
    const result = document.getElementById('result') as HTMLElement
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let seed = letters + letters.toUpperCase()

    if((document.getElementById('num')as HTMLInputElement).checked){
      seed += "1234567890"
    }
    if((document.getElementById('symbol')as HTMLInputElement).checked){
      seed += "-_.!+?*/"
    }


    let pass = "";
    console.log(seed.length)
    for(let i=0;i<Number(slider!.value);i++){
      let idx = Math.floor(Math.random() * seed.length)
      pass += seed[idx]
    }
    result.textContent = pass
  })
}