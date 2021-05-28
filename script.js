
window.onload = function()
{
  let formGroups = document.querySelectorAll(".form-group");

  console.log(formGroups);

  formGroups.forEach((item, i) => {
    let input = item.getElementsByTagName("INPUT")[0];

    input.onkeyup = function (event) {
      console.log(event);
      let regex = new RegExp(event.target.getAttribute("data-pattern"));

      let value = event.target.value;

      console.log(regex);

      if(regex.test(value))
      {
        event.target.parentElement.classList.remove("error");
      }
      else {
        console.log("orice");
        event.target.parentElement.classList.add("error");
      }
    }
  });

  let formGroups2 = document.querySelectorAll(".form-group2");

  console.log(formGroups2);

  formGroups2.forEach((item, i) => {
    let input = item.getElementsByTagName("INPUT")[0];

    console.log(input);

    input.onkeyup = function (event) {
      console.log(event);
      let regex = new RegExp(event.target.getAttribute("data-pattern")); 

      let value = event.target.value;

      console.log(regex);

      if(regex.test(value))
      {
        event.target.parentElement.classList.remove("error");
      }
      else {
        console.log("orice");
        event.target.parentElement.classList.add("error");
      }
    }
  });
}


var x = document.getElementsByTagName("h2");
for(var i = 0; i < x.length; i++){
    x[i].style.color = 'Grey';
}

document.getElementById("js").style.color = "red";



var y = document.getElementsByClassName("item1");
for(var i = 0; i < y.length; i++){
    y[i].style.backgroundColor = 'red';
}
var btn = document.createElement("BUTTON");

btn.remove();
