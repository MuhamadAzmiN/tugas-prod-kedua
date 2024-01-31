
// let tahunAwal = prompt("masukan tahun awal");
// let tahunAkhir = prompt("masukan tahun akhir");

// while(tahunAwal <= tahunAkhir){
//     if(tahunAwal % 4 === 0 && (tahunAwal % 100 !== 0 || tahunAwal % 400 === 0)){
//         console.log(`ini adalah tahun kabisat ${tahunAwal}`)
//     }else {
//         console.log(`ini bukan tahun kabisat ${tahunAwal}`)
//     }
//     tahunAwal++

//     }

    let tahunPertama = prompt("masukan awal");
    let tahunKedua = prompt("   masukan kedua ")
    
    for(let tahun = tahunPertama; tahun <= tahunKedua;){
        if(tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)){
            console.log(`ini adalah tahun kabisat ${tahun}`)
        }else {
            console.log(`ini bukan tahuh kabisat ${tahun}`)
        }
        tahun++;
        

    }
    // let tahunSekarang = prompt("masukan awal");
    // let tahunKemaren = prompt("masukan akhir");

    // do {
    //     if(tahunSekarang % 4 === 0 && (tahunSekarang % 100 !== 0 || tahunSekarang % 400 === 0)){
    //         console.log(`ini adalah tahun kabisat ${tahunSekarang}`)
    //     }else {
    //         console.log(`ini bukan tahuh kabisat ${tahunSekarang}`)
    //     }
    //     tahunSekarang++

    // }while(tahunSekarang <= tahunKemaren );



