const form = document.querySelector('form')

form.addEventListener( 'submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');

  if(isNaN(height) || height<0){
    result.textContent="Please enter valild Height";
  }else if(isNaN(weight) || weight<0){
    result.textContent="Please enter valild Weight";
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6){
        result.innerHTML=`<span>${bmi} is Under Weight</span>`
    }else if(bmi>=18.6 && bmi <24.9){
        result.innerHTML=`<span>${bmi} is Normal Weight</span>`
    }else{
        result.innerHTML=`<span>${bmi} is Overweight</span>`
    }
  }
})