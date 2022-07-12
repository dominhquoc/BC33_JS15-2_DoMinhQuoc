/**
 * Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số
 *người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau:
 * Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 */

/**
 * Input: ten, tongThuNhap, soNguoiPhuThuoc.
 * Progress: ThuNhapChiuThue = tongThuNhap - 4tr - soNguoiPhuThuoc * 1.6tr.
 * neu Thu nhap duoi 60tr => thueXuatPhaiDong = ThuNhapChiuThue * (5/100)
 *
 * Output: Tinh va xuat tien Thue phai tra.
 */

function ex4() {
  var userName = "Quoc";
  var total = 41000000;
  var dependent = 2;

  var income = total - 4000000 - dependent * 1600000;
  console.log(income);
  result = "";

  if (income < 60000000) {
    result = income * (5 / 100);
  } else if (income > 60000000 && income < 120000000) {
    result = income * (10 / 100);
  } else if (income > 120000000 && income < 210000000) {
    result = income * (15 / 100);
  } else if (income > 210000000 && income < 384000000) {
    result = income * (20 / 100);
  } else if (income > 384000000 && income < 624000000) {
    result = income * (25 / 100);
  } else if (income > 624000000 && income < 960000000) {
    result = income * (30 / 100);
  } else if (income > 960000000) {
    result = income * (35 / 100);
  }
  console.log("Ten khach hang :", userName, ".So % thue phai dong =", result);
}
ex4();

/**
 * Bai tap nop: Tinh tien Cap
 * Input: MaKhachHang, LoaiKhachHang, SoKetNoi, SoKenhCaoCap
 * Progress: neu Nha dan => TongHoaDon = PhiXuLy1 + PhiCoBan1 + KenhCaoCap1
 * neu Doanh nghiep => KetNoiThem < 10 => PhiCoBan. 
 * Nguoc lai KetNoiThem > 10 => PhiCoBan = PhiCoBan2 + (KetNoiThem - 10)*5 
 * => TongHoaDon = PhiXuLy2 + PhiCoBan + KenhCaoCap2
 * Output: TongHoaDon
 */
//OPTION
//Neu la nha dan
var MaKhachHang1 = 'Quoc';
var LoaiKhachHang1 = 'NhaDan';
var PhiXuLyHoaDon1 = 4.5;
var PhiDichVuCoBan1 = 20.5;
var ThueKenhCaoCap1 = 7.5;
var SoKenhCaoCap1 = 2


var TongHoaDon1 = '';


  TongHoaDon1 = PhiXuLyHoaDon1 + PhiDichVuCoBan1 + ThueKenhCaoCap1*SoKenhCaoCap1;
  console.log('MaKhachHang : ',MaKhachHang1,'| Loai Khach Hang:',LoaiKhachHang1,'|',' SoTienPhaiTra = ',TongHoaDon1);

//Neu la doanh nghiep
var MaKhachHang = 'Quoc';
var LoaiKhachHang = 'DoanhNghiep';
var PhiXuLyHoaDon = 15;
var PhiDichVuCoBan = 75;
var ThueKenhCaoCap = 50;
var SoKenhCaoCap = 2;
var PhiDichVuCoBanKetNoiThem= '';
var KetNoiThem = 11;
var TongHoaDon = '';

if(KetNoiThem <= 10){
  TongHoaDon = PhiXuLyHoaDon + PhiDichVuCoBan + ThueKenhCaoCap*SoKenhCaoCap;
  console.log(TongHoaDon);
}else if(KetNoiThem > 10){
  PhiDichVuCoBanKetNoiThem = 75 + (KetNoiThem - 10)*5;
  TongHoaDon = PhiXuLyHoaDon + PhiDichVuCoBanKetNoiThem + ThueKenhCaoCap*SoKenhCaoCap
  console.log('MaKhachHang : ',MaKhachHang,'| Loai Khach Hang:',LoaiKhachHang,'|',' SoTienPhaiTra = ',TongHoaDon);
}

