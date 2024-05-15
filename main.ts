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
    const seed = letters + letters.toUpperCase()

    let pass = "";
    for(let i=0;i<Number(slider!.value);i++){
      let idx = Math.floor(Math.random() * seed.length)
      pass += seed[idx]
    }
    result.textContent = pass
  })
}