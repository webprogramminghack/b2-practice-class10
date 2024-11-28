'use strict';

function formatTanggal(tanggal) {
  let options = { day: '2-digit', month: '2-digit', year: 'numeric' };

  let formattedDate = tanggal.toLocaleDateString('id-ID', options);

  return formattedDate;
}

let sekarang = new Date();
// console.log(sekarang);

let Jan01_1970 = new Date(0);
// console.log('Tanggalnya adalah :>> ', Jan01_1970);

let Jan02_1970 = new Date(24 * 60 * 60 * 1000);
// console.log('Jan02_1970 :>> ', Jan02_1970);

{
  let tanggal1 = new Date('2017-01-26');
  // console.log('tanggal1 :>> ', tanggal1);

  let tanggal2 = new Date(2011, 0, 1);
  // console.log('tanggal2 :>> ', tanggal2);
}

{
  let tanggal = new Date(2011, 0, 1, 2, 3, 4, 567);

  // console.log(tanggal.getFullYear());
  // console.log(tanggal.getMonth());
  // console.log(tanggal.getDate());
  // console.log(tanggal.getHours());
  // console.log(tanggal.getMinutes());
  // console.log(tanggal.getSeconds());
  // console.log(tanggal.getMilliseconds());
}

{
  let today = new Date();

  // console.log('today :>> ', today);
  today.setHours(0, 0, 0, 0);
  // console.log('today :>> ', today);
}

{
  let tanggal = new Date(2013, 0, 32);
  tanggal = formatTanggal(tanggal);

  // console.log('tanggal :>> ', tanggal);
}

{
  let start = Date.now();

  // console.log('start :>> ', start);

  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }

  let end = Date.now();
  let timeDiffer = end - start;
  // console.log(`Looping memakan waktu ${timeDiffer} ms`);
}

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log('ms :>> ', ms);

let date = new Date(ms);
console.log('date', date);

let date2 = new Date('2012-01-26T13:51:50.417-07:00');
console.log('date2 :>> ', date2);
