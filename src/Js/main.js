const inSoChanLe = () => {
  let soChan = "";
  let soLe = "";

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      soChan += i + " ";
    } else {
      soLe += i + " ";
    }
  }
  document.querySelector("#result").innerHTML = `<p>Số chẵn ${soChan}</p>
  <p>Số lẻ ${soLe}</p>`;
};
/*
Tính tổng các số chẵn từ 1 đến n. Với n nhập từ người dùng 

input: lấy thông tin từ người dùng ( số n).
Xử lý: lấy thông tin từ người dùng, tính tổng các số nguyên từ 1 đến số n.
output: xuất ra kết quả tổng các số chẵn từ 1 dến n.
*/

const tonhTongChan = () => {
  let n = document.querySelector("#number").value;
  let Tong = 0;

  for (let i = 2; i <= n; i += 2) {
    Tong += i;
  }

  document.querySelector(
    "#result2"
  ).innerHTML = `Tổng các số chẵn từ 1 đến ${n} là: ${Tong}`;
};

/*
Có bao nhiêu số chia hết cho 3 từ 0-1000

*/

const soChiaHetCho3 = () => {
  let soChia3 = 0;

  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      soChia3++;
    }
  }
  document.querySelector(
    "#result3"
  ).innerHTML = `Có tất cả ${soChia3} số chia hết cho 3 từ 0 - 1000`;
};

/*
Tạo 10 thẻ div và đổi backgroud cho các thẻ

*/

const taoTheDiv = () => {
  let theDiv = document.querySelector("#theDiv");

  for (i = 1; i <= 10; i++) {
    let taoDiv = document.createElement("div");
    taoDiv.textContent = `Div ${i}`;

    if (i % 2 === 0) {
      taoDiv.style.background = "red";
    } else {
      taoDiv.style.background = "blue";
    }
    theDiv.appendChild(taoDiv);
  }
};
