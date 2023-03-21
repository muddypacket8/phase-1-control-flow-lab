function scuberGreetingForFeet(value){
  if(400>=value){
    return "this one is on me"
  }else if(2001>=value ){
    return "I will gladly take your thirty bucks"
  }else if(2501>=value){
    return"No can do"
  }
}
function ternaryCheckCity(city){

  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}