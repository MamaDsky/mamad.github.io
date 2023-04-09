let musik = document.getElementById("myAudio");

function playAudio() {
  musik.play();
}

function pauseAudio() {
  musik.pause();
}

function lagu() {
    Swal.fire(
        'Judul Lagunya?',
        'Kuingin Kau Tahu - Overtunes',
        'question'
      )
}


function ai(){
    Swal.fire({
        title: 'Info Penting',
        text: "Jangan kasih lihat website ini ke siapapun oke????",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'oke, lanjut'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Infonya',
            'Anak loyola yang mau aku tembak itu kamu',
            'warning'
          )
        }
      })
}

function aai2(){
    Swal.fire({
        title: 'Gimana??????????????',
        text: "Diterima apa kagak nih?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<a href="https://api.whatsapp.com/send?phone=6287877248950&text=Hallo%20Farrel%20Ini%20Josephine%20Emmanuella%2C%20aku%20mau%20jadi%20pacar%20kamu%20%3A)%20%F0%9F%98%8D%F0%9F%98%8D%F0%9F%A4%A9%F0%9F%A4%A9%F0%9F%A4%A9"><h1>TERIMA</h1></a>',
        cancelButtonText: '<a href="https://api.whatsapp.com/send?phone=6287877248950&text=maaf%20farrel%20kamu%20aku%20tolak%20%3A)"><h3>NGAAA</h3></a>',
      })
}