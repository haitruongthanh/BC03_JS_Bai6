// var numberArray = [1, -3, 11, 6, 8, -1, -4, 5, 2, 3, 7, 9, 13]; //array test
var numberArray = [
  -3, -11, 6, -1, -4, 1, 5, 2, 3, 7, 9, 13, -3.3, 5.5, 1.5, -1.7, 1.8, -1.9, -1,
  8,
]; //array test
// var numberArray = [];

var nhapVaoMang = function () {
  var number = document.getElementById("number").value * 1;
  numberArray.push(number);
  console.log(numberArray);
  document.getElementById("in_mang").innerHTML = `Mảng: [ ${numberArray.join(
    ", "
  )}]`;
  document.getElementById("number").value = "";
};

var xoaMang = function () {
  numberArray = [];
  document.getElementById("in_mang").innerHTML = "";
  document.getElementById("in_tong_so_duong").innerHTML = "";
  document.getElementById("in_so_duong").innerHTML = "";
  document.getElementById("in_so_nho_nhat").innerHTML = "";
  document.getElementById("in_so_chan_cuoi").innerHTML = "";
  document.getElementById("in_mang_hoan_doi").innerHTML = "";
  console.log(numberArray);
};
/* 1. Tính tổng số dương trong mảng */
var tinhTongSoDuong = function () {
  var sum = 0;
  numberArray.forEach(function (item) {
    if (item > 0) {
      sum += item;
    }
  });

  console.log({ sum });
  document.getElementById(
    "in_tong_so_duong"
  ).innerHTML = `Tổng số dương: ${sum}`;
};

/* 2. Đếm có bao nhiêu số dương trong mảng */
var demSoDuong = function () {
  var soSoDuong = locMangSoDuong().length;
  console.log({ soSoDuong });
  console.log(locMangSoDuong());
  document.getElementById(
    "in_so_duong"
  ).innerHTML = `Có ${soSoDuong} số dương trong mảng`;
};

/* 3. Tìm số nhỏ nhất trong mảng */
var timSoNhoNhat = function () {
  var min;

  // var min = Math.min(...numberArray); cách 1

  //cách 2
  min = numberArray[0];
  for (let i = 1; i < numberArray.length; i++) {
    min = Math.min(min, numberArray[i]);
  }
  console.log({ min });
  document.getElementById(
    "in_so_nho_nhat"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
};

/* 4. Tìm số dương nhỏ nhất trong mảng */
var timSoDuongNhoNhat = function () {
  var soDuongNhoNhat;
  var mangPhu = [];
  mangPhu = locMangSoDuong().sort(function (a, b) {
    return a - b;
  });
  console.log("mang phu", mangPhu);
  soDuongNhoNhat = mangPhu[0];
  console.log({ soDuongNhoNhat });
  document.getElementById(
    "in_so_duong_nho_nhat"
  ).innerHTML = `Số dương nhỏ nhất trong mảng ${soDuongNhoNhat} `;
};

/* 5. Tìm số chẵn cuối cùng trong mảng */
var timSoChan = function () {
  var evenValue;
  var mangSoChan = [];
  numberArray.forEach(function (item) {
    if (item % 2 == 0) {
      mangSoChan.push(item);
    }
  });
  console.log("mangSoChan", mangSoChan);
  if (mangSoChan.length > 0) {
    evenValue = mangSoChan[mangSoChan.length - 1];
  } else {
    evenValue = -1;
  }
  document.getElementById(
    "in_so_chan_cuoi"
  ).innerHTML = `Số chẵn cuối cùng: ${evenValue}`;
};

/* 6. Đổi chỗ 2 giá trị trong mảng theo vị trí */
var doiViTri = function () {
  var viTri1 = document.getElementById("vi_tri_1").value * 1;
  var viTri2 = document.getElementById("vi_tri_2").value * 1;

  var mangHoanDoi = saoChepMang();
  var viTriTamThoi;
  viTriTamThoi = mangHoanDoi[viTri1];
  mangHoanDoi[viTri1] = mangHoanDoi[viTri2];
  mangHoanDoi[viTri2] = viTriTamThoi;

  console.log({ mangHoanDoi });
  document.getElementById(
    "in_mang_hoan_doi"
  ).innerHTML = `Mảng sau khi hoán đổi: [${mangHoanDoi.join(", ")}]`;
};

/* 7. Sắp xếp mảng tăng dần */
var sapXepMang = function () {
  var mangDuocSapXep = saoChepMang();

  mangDuocSapXep.sort(function (a, b) {
    return a - b;
  });

  console.log("Mảng sắp xếp tăng", mangDuocSapXep);
  document.getElementById(
    "in_mang_tang_dan"
  ).innerHTML = `Mảng sắp xếp tăng: [${mangDuocSapXep.join(", ")}]`;
};

/* 8. Tìm sồ nguyên tố đầu tiên trong mảng */
var timSoNguyenTo = function () {
  var soNguyenTo = 0;
  var mangPhu = [];
  numberArray.forEach(function (item) {
    mangPhu = kiemTraSoNguyenTo(mangPhu, item);
  });
  console.log(mangPhu);
  if (mangPhu.length == 0) {
    soNguyenTo = -1;
  } else {
    soNguyenTo = mangPhu[0];
  }
  console.log({ soNguyenTo });
  document.getElementById(
    "in_so_nguyen_to"
  ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${soNguyenTo}`;
};

/* 9. Nhập thêm 1 mảng số thực, tìm số số nguyên trong mảng */
var nhapSoThuc = function () {
  var number = document.getElementById("so_thuc").value * 1;
  numberArray.push(number);
  console.log(numberArray);
  document.getElementById(
    "in_mang_so_thuc"
  ).innerHTML = `Mảng: [ ${numberArray.join(", ")}]`;
  document.getElementById("so_thuc").value = "";
};

var demSoNguyen = function () {
  var mangSoNguyen = [];
  numberArray.forEach(function (item) {
    if (Number.isInteger(item)) mangSoNguyen.push(item);
  });
  console.log(mangSoNguyen);
  document.getElementById(
    "in_so_nguyen"
  ).innerHTML = `Số lượng số nguyên trong mảng là: ${mangSoNguyen.length}`;
};

/* 10. So sánh số lượng số âm và số dương */
var soSanhAmDuong = function () {
  var soSanh;
  var ketQua = "";
  var soSoDuong = locMangSoDuong().length;
  var soSoAm = numberArray.length - soSoDuong;
  if (soSoDuong > soSoAm) {
    soSanh = soSoDuong - soSoAm;
    ketQua = `Số lượng số dương nhiều hơn ${soSanh} số so với số âm`;
  } else {
    soSanh = soSoAm - soSoDuong;
    ketQua = `Số lượng số âm nhiều hơn ${soSanh} số so với số dương`;
  }
  document.getElementById("in_so_am_duong").innerHTML = ketQua;
};

/* Hàm hỗ trợ */
var kiemTraSoNguyenTo = function (array, num) {
  var flag = true;
  if (num < 2) {
    flag = false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    array.push(num);
  }
  return array;
};

var saoChepMang = function () {
  var mangSaoChep = [];
  numberArray.forEach((item) => {
    mangSaoChep.push(item);
  });
  return mangSaoChep;
};

var locMangSoDuong = function () {
  var mangSoDuong = [];
  numberArray.forEach(function (item) {
    if (item > 0) mangSoDuong.push(item);
  });
  return mangSoDuong;
};
