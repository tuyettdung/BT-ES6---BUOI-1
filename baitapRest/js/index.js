tinhDiemTB = (...restParam) => {
    let tong = 0;
    for (let i = 0; i < restParam.length; i++) {
        tong += restParam[i];
    }
    let diemTb = tong / restParam.length;
    return diemTb;
}



document.querySelector('#btnKhoi1').onclick = function () {
    let diemToan = Number(document.querySelector('#inpToan').value);
    let diemLy = Number(document.querySelector('#inpLy').value);
    let diemHoa = Number(document.querySelector('#inpHoa').value);
    document.querySelector('#tbKhoi1').innerHTML = tinhDiemTB(diemToan,diemLy,diemHoa);
}

document.querySelector('#btnKhoi2').onclick = function () {
    let diemVan = Number(document.querySelector('#inpVan').value);
    let diemSu = Number(document.querySelector('#inpSu').value);
    let diemDia = Number(document.querySelector('#inpDia').value);
    let diemAV = Number(document.querySelector('#inpEnglish').value);
    document.querySelector('#tbKhoi2').innerHTML = tinhDiemTB(diemVan,diemSu,diemDia,diemAV);
}




