let chuoiKyTu = document.querySelector('.heading').innerHTML.split('');
let chuoiMoi = [...chuoiKyTu];
let html = '';
for(let kyTu of chuoiMoi){
   html += `
              <span>${kyTu}</span>
           `
    document.querySelector('.heading').innerHTML= html;
}

