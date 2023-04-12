let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
   console.log(visitsCountMap);
}, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/


const { inspect } = require('util');

let visitsCountMap1 = new WeakMap(); // Menyimpan daftar user

function countUser1(user) {
    let count = visitsCountMap1.get(user) || 0;
    visitsCountMap1.set(user, count + 1);
}

let jonas1 = { name: "Jonas" };
countUser(jonas1);                // Menambahkan user "Jonas"

jonas1 = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log("WITH WEAKMAP")
  console.log(inspect(visitsCountMap1, { showHidden: true }));
}, 10000);

/* 
WeakMap tidak dapat dilihat secara langsung menggunakan console.log. 
Ini merupakan issue yang terjadi pada Node.js 
(lihat: https://github.com/nodejs/node/issues/19001). 
Itulah mengapa kami menggunakan fungsi inspect untuk melihat data yang ada di dalam WeakMap.
*/