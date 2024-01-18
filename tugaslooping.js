// ini for
for(let i = 0;i<50;i++){
    if (i % 2 === 0) {
        console.log(`angka adalah angka genap ${i}`);
      } else {
        console.log(`angka adalag ganjil ${i}`);
      }
}



// ini while
let count = 1;
while(count <= 10){
    if(count % 2 === 0){
        console.log(`${count} genap`)
    }else {
        console.log(`${count} ganjil`)
    }
    count++;
}

// ini do while
let hitung = 0;
do {
    if(hitung % 2 === 0){
        console.log(`${hitung} genap`);
    }else {
        console.log(`${hitung} ganjil`)
    }
    hitung++;
}while(hitung <= 50)

