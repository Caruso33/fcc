$( document ).ready(function() {



});

var result = [];
function display(x){ $('input').val(x); }
function displayEqu(){ $('input').val(result.join('')); }

function reset(){ result = []; displayEqu(); }

function number(x){ result.push(x); displayEqu(); }

function operate(x){result.push(x); displayEqu();  }

function showRes(){ display(eval(result.join(''))); }

function deleteLast() { result.pop(); displayEqu(); }
