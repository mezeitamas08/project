
let params = {
  count: false,
  letters: false,
  numbers: false,
  special: false,
};

function trigger() {
  params.letters = /[A-Za-z]+/.test(password.value) ? true : false;
  params.numbers = /[0-9]+/.test(password.value) ? true : false;
  params.special = /[!?*+^'"()]+/.test(password.value) ? true : false;
  params.count = password.value.length > 5 ? true : false;
  let paramsLength = Object.values(params).filter((value) => value);
  if(paramsLength.length==0){
    weak.classList.remove("active")
    medium.classList.remove("active")
    strong.classList.remove("active")
    strongest.classList.remove("active")
  }
  if (paramsLength.length == 1) {
    weak.classList.add("active")
    medium.classList.remove("active")
    strong.classList.remove("active")
    strongest.classList.remove("active")
  }
  if(paramsLength.length==2){
    weak.classList.add("active")
    medium.classList.add("active")
    strong.classList.remove("active")
    strongest.classList.remove("active")
  }
  if(paramsLength.length==3){
    weak.classList.add("active")
    medium.classList.add("active")
    strong.classList.add("active")
    strongest.classList.remove("active")
  }
  if(paramsLength.length==4){
    weak.classList.add("active")
    medium.classList.add("active")
    strong.classList.add("active")
    strongest.classList.add("active")
  }
}
