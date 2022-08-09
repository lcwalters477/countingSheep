var countSheep = function (num){
    let countSheep = " ";
    for(i = 1; i <= num; i++){
    countSheep = countSheep += (`${i }sheep...`);
  }
  console.log(countSheep);
}

  countSheep(3);