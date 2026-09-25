# Huyền 's Coffee

Bài thực hành React: website một trang hiển thị thực đơn và mô phỏng đặt đồ uống.

## Liên kết

- [Website trực tuyến](https://huyen-coffee.vercel.app/)
- [Mã nguồn GitHub](https://github.com/dg-nghuyn/huyen-coffee)

## Công nghệ

- React 19
- Vite 6
- JavaScript và CSS thuần

## Chức năng

- Hiển thị thực đơn gồm 4 đồ uống.
- Thêm món vào giỏ; tăng số lượng khi thêm lại cùng món.
- Xóa món khỏi giỏ.
- Tính thành tiền và tổng tiền.
- Đặt món mô phỏng, hiển thị thông báo và làm trống giỏ hàng.

Dữ liệu lưu trong bộ nhớ của trang và được đặt lại khi tải lại. Ứng dụng không có backend hoặc thanh toán thật.

## Cài đặt

Yêu cầu Node.js 22.12 trở lên và npm.

```bash
npm ci
npm run dev
```

Truy cập địa chỉ được hiển thị trong terminal.

## Cấu trúc

```text
src/
  App.jsx       Dữ liệu, giao diện và xử lý giỏ hàng
  main.jsx      Điểm khởi chạy React
  style.css     Định dạng giao diện
index.html      Trang HTML gốc
package.json    Thư viện và lệnh chạy dự án
package-lock.json  Phiên bản thư viện được khóa
```

## Build

```bash
npm run build
npm run preview
```

Kết quả build nằm trong `dist/`. Mã nguồn được chỉnh sửa trong `src/`.

## Kiểm tra chức năng

1. Khi mở trang, giỏ trống, tổng bằng 0 và nút đặt món bị vô hiệu hóa.
2. Thêm Cà phê sữa hai lần và Trà đào một lần: tổng 95.000 đ.
3. Xóa Trà đào: tổng còn 60.000 đ.
4. Đặt món: hiển thị thông báo thành công và làm trống giỏ.
5. Thêm món mới: xóa thông báo cũ.
