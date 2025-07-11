let form = document.getElementById(`FormConverter`)
let Quantidade = document.getElementById('Quantidade')
let From_Currency = document.getElementById('From_Currency')
let Convertido = document.getElementById('Convertido')
let toCurrency = document.getElementById('toCurrency')
let Loading = document.querySelector('.Loading')
let Result = document.querySelector('.Result')
let error = document.querySelector('.error')
let Converter_btn = document.querySelector('.Converter_btn')

let API_URL = 'https://api.exchangerate-api.com/v4/latest/'



 async function ConverterMoeda(){

    Loading.style.display = 'block'
    Result.style.display = 'none'
    error.style.display = 'none'



     try{
        let Responsavel = await fetch(API_URL + From_Currency.value)
        const Dados =  await Responsavel.json()

        //Pega o valor do RATE selecionado e Converte
        let Rate = Dados.rates[toCurrency.value]
        let RateConvertido = (Quantidade.value * Rate).toFixed(2)
        

       Convertido.value =  RateConvertido
       Result.style.display = 'block'
    

       Result.innerHTML = `
        <div class="Result_Edit" >
            ${Quantidade.value} ${From_Currency.value}  = ${Convertido.value} ${toCurrency.value} 
        </div>
        <div class="taxa_Edit" >
        Taxa: 1 ${From_Currency.value} = ${Rate} ${toCurrency.value}
        </div>
       
       `

       


     }
     catch(error1){
        error.style.display = 'block'
        error.innerHTML = `<div class="error_edit" >Falha ao Converter Moeda.Tente novamente</div>`
        let 
     }
     Loading.style.display = 'none'
}


form.addEventListener(`submit`, function(event){
    event.preventDefault()
    ConverterMoeda()

})