// var numberArray = [1, 3, -3, 5, 6, 8, 2, -1, -4]; //array test
var numberArray = [];

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

var demSoDuong = function () {
  var count = 0;
  numberArray.forEach(function (item) {
    if (item > 0) {
      count++;
    }
  });
  console.log({ count });
  document.getElementById(
    "in_so_duong"
  ).innerHTML = `Có ${count} số dương trong mảng`;
};

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

var timSoChan = function () {
  var evenValue = 0;
  console.log(numberArray.length);
  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 2 == 0) {
      evenValue = numberArray[i];
      console.log("Vị trí của số chẵn: " + i);
      break;
    } else {
      evenValue = -1;
    }
  }
  document.getElementById(
    "in_so_chan_cuoi"
  ).innerHTML = `Số chẵn cuối cùng: ${evenValue}`;
};

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

var sapXepMang = function () {
  var mangDuocSapXep = saoChepMang();

  mangDuocSapXep.sort(function (a, b) {
    return a - b;
  });

  console.log({ mangDuocSapXep });
  document.getElementById(
    "in_mang_tang_dan"
  ).innerHTML = `Mảng sắp xếp tăng: [${mangDuocSapXep.join(", ")}]`;
};

var saoChepMang = function () {
  var mangSaoChep = [];
  numberArray.forEach((item) => {
    mangSaoChep.push(item);
  });
  return mangSaoChep;
};
