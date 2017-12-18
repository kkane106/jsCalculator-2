var total = 0;
var opArray = new Array();
var numArray = new Array();

function currNum(){
  return parseInt($('#display').text());
}

function curr(){
  return $('#display').text();
}

function clear(){
  clearDisplay();
  total = 0;
  opArray = new Array();
  numArray = new Array();
}

function clearDisplay(){
  $('#display').text('');
}

function add(){
  if(isNaN(currNum())){
      numArray.push('0');
  }else{
  numArray.push(currNum());
  }
  clearDisplay();
  opArray.push('+');
  console.log(numArray);
  console.log(opArray);
}

function multiply(){
  if(isNaN(currNum())){
      numArray.push('0');
  }else{
  numArray.push(currNum());
  }
  clearDisplay();
  opArray.push('*');
  console.log(numArray);
  console.log(opArray);
}

function divide(){
  if(isNaN(currNum())){
      numArray.push('0');
  }else{
  numArray.push(currNum());
  }
  clearDisplay();
  opArray.push('/');
  console.log(numArray);
  console.log(opArray);
}

function subtract(){
  if(isNaN(currNum())){
      numArray.push('0');
  }else{
  numArray.push(currNum());
  }
  clearDisplay();
  opArray.push('-');
  console.log(numArray);
  console.log(opArray);
}

function equals(){
  numArray.push(currNum());
  total = numArray[0];
  for(var i=0; i< opArray.length; i++){
      switch (opArray[i]) {
        case '+':
            total+= numArray[i+1];
            break;
        case '-':
            total-= numArray[i+1];
            break;
        case '*':
            total = total * numArray[i+1];
            break;
        case '/':
            total = total / numArray[i+1];
            break;
      }
  }
  console.log(numArray);
  console.log(opArray);
  console.log(total);
  $('#display').text('' + total);
  opArray = new Array();
  numArray = new Array();
}


//********Operator Buttons Event Listner**********************************
$('#clear').on('click', function(e){
	clear();
});
$('#divide').on('click', function(e){
  divide();
});
$('#multiply').on('click', function(e){
	multiply();
});
$('#subtract').on('click', function(e){
	subtract();
});
$('#add').on('click', function(e){
	add();
});
$('#equals').on('click', function(e){
  equals();
});
//************************************************************************
//********Number Buttons Event Listner************************************
$('#0').on('click',function(e){
    $('#display').text( curr() + '0');
});
$('#1').on('click',function(e){
    $('#display').text(curr() + '1');
});
$('#2').on('click',function(e){
    $('#display').text(curr() + '2');
});
$('#3').on('click',function(e){
    $('#display').text(curr() + '3');
});
$('#4').on('click',function(e){
    $('#display').text(curr() + '4');
});
$('#5').on('click',function(e){
    $('#display').text(curr() + '5');
});
$('#6').on('click',function(e){
    $('#display').text(curr() + '6');
});
$('#7').on('click',function(e){
    $('#display').text(curr() + '7');
});
$('#8').on('click',function(e){
    $('#display').text(curr() + '8');
});
$('#9').on('click',function(e){
    $('#display').text(curr() + '9');
});
//*******************************************
