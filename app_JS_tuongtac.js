// --- 1. ĐỊNH NGHĨA HÀM CHO TỪNG BÀI TẬP (LOGIC CƠ BẢN) ---

// Bài 1: Tính tổng hai số
const tinhTong = (a, b) => a + b;

// Bài 2: Kiểm tra số chẵn/lẻ
const kiemTraChanLe = (so) => so % 2 === 0 ? "Số chẵn" : "Số lẻ";

// Bài 3: Vòng lặp for in ra số
const inSoVongLap = (n) => {
    let result = "Các số từ 1 đến " + n + ": ";
    for (let i = 1; i <= n; i++) {
        result += i + " ";
    }
    return result;
};

// Bài 4: Tính tổng các phần tử trong mảng
const tinhTongMang = (arr) => {
    let tong = 0;
    // Đảm bảo chỉ tính toán với các giá trị là số
    for (const item of arr) {
        if (!isNaN(parseFloat(item))) {
            tong += parseFloat(item);
        }
    }
    return tong;
};

// Bài 5 & 6: Object và Arrow Function đã được định nghĩa ở trên (bài 1)
const sinhVien = {
    ten: "Minh",
    maSV: "SV001",
    lop: "Kỹ Thuật Phần Mềm"
};


// --- 2. HÀM DOM CHO CÁC BÀI TẬP TƯƠNG TÁC (7, 8, 9, 10) ---

// Bài 7: Thay đổi tiêu đề bằng DOM
const thucHienBai7 = (noiDungMoi) => {
    const phuDe = document.getElementById('phu-de');
    phuDe.textContent = "Bài 7: " + noiDungMoi;
    return "Đã thay đổi nội dung của thẻ <h2> có ID='phu-de'.";
};

// Bài 8: Thêm Class CSS bằng DOM
const thucHienBai8 = () => {
    const doanVan = document.getElementById('bai8_doanvan');
    doanVan.classList.add('chu-do');
    return "Đã thêm class 'chu-do' vào đoạn văn bản.";
};

// Bài 9: Xử lý sự kiện mouseover
const thucHienBai9 = () => {
    const nutHover = document.getElementById('nut-hover');
    nutHover.textContent = "Di chuột vào đây (Bài 9)"; // Reset text
    
    // Gắn sự kiện (đảm bảo không bị gắn nhiều lần)
    nutHover.onmouseover = function() {
        nutHover.textContent = "Bài 9: Đã di chuột!";
    };
    nutHover.onmouseout = function() {
        nutHover.textContent = "Di chuột vào đây (Bài 9)";
    };
    return "Đã gắn sự kiện 'mouseover' và 'mouseout' cho nút.";
};

// Bài 10: Xóa phần tử bằng DOM
const thucHienBai10 = () => {
    const danhSach = document.getElementById('danh-sach');
    if (danhSach) {
        danhSach.remove();
        return "Bài 10: Đã xóa thành công thẻ <ul> có ID='danh-sach'.";
    }
    return "Thẻ <ul> đã bị xóa trước đó.";
};


// --- 3. HÀM HIỂN THỊ GIAO DIỆN TƯƠNG TÁC CHO TỪNG BÀI ---

// Mảng chứa thông tin chi tiết của 10 bài tập
const danhSachBaiTap = [
    {
        deBai: "Viết hàm nhận vào hai số nguyên a và b và trả về tổng của chúng.",
        giaoDien: `
            <div class="input-group">
                <label>Số a:</label> <input type="number" id="input_a1" value="5">
            </div>
            <div class="input-group">
                <label>Số b:</label> <input type="number" id="input_b1" value="10">
            </div>
            <button onclick="thucHienBai1()">Thực hiện Bài 1</button>
        `,
        thucHien: () => {
            const a = parseFloat(document.getElementById('input_a1').value || 0);
            const b = parseFloat(document.getElementById('input_b1').value || 0);
            return `Tổng của ${a} và ${b} là: **${tinhTong(a, b)}**`;
        }
    },
    {
        deBai: "Viết hàm kiểm tra xem một số là chẵn hay lẻ.",
        giaoDien: `
            <div class="input-group">
                <label>Nhập số:</label> <input type="number" id="input_so2" value="7">
            </div>
            <button onclick="thucHienBai2()">Thực hiện Bài 2</button>
        `,
        thucHien: () => {
            const so = parseInt(document.getElementById('input_so2').value || 0);
            return `Số ${so} là: **${kiemTraChanLe(so)}**`;
        }
    },
    {
        deBai: "Sử dụng vòng lặp `for` để in ra các số từ 1 đến N. (Mặc định N=5)",
        giaoDien: `
            <div class="input-group">
                <label>Nhập N:</label> <input type="number" id="input_n3" value="5">
            </div>
            <button onclick="thucHienBai3()">Thực hiện Bài 3</button>
        `,
        thucHien: () => {
            const n = parseInt(document.getElementById('input_n3').value || 0);
            return inSoVongLap(n);
        }
    },
    {
        deBai: "Tính tổng các phần tử trong một mảng số. Nhập các số cách nhau bởi dấu phẩy.",
        giaoDien: `
            <div class="input-group">
                <label>Nhập mảng (VD: 10,20,30):</label> <input type="text" id="input_mang4" value="10, 20, 30, 40">
            </div>
            <button onclick="thucHienBai4()">Thực hiện Bài 4</button>
        `,
        thucHien: () => {
            const input = document.getElementById('input_mang4').value;
            const mang = input.split(',').map(item => item.trim());
            return `Mảng [${mang.join(', ')}] có tổng là: **${tinhTongMang(mang)}**`;
        }
    },
    {
        deBai: "Thao tác với Object: In ra thông tin của đối tượng sinhVien đã được định nghĩa.",
        giaoDien: `
            <button onclick="thucHienBai5()">Thực hiện Bài 5</button>
        `,
        thucHien: () => {
            return `**Bài 5: Thông tin Object** - Tên: ${sinhVien.ten}, Mã SV: ${sinhVien.maSV}, Lớp: ${sinhVien.lop}`;
        }
    },
    {
        deBai: "Viết lại Bài tập 1 (`tinhTong`) bằng cú pháp Arrow Function. Chức năng tương tự Bài 1.",
        giaoDien: `
            <div class="input-group">
                <label>Số x:</label> <input type="number" id="input_a6" value="3">
            </div>
            <div class="input-group">
                <label>Số y:</label> <input type="number" id="input_b6" value="4">
            </div>
            <button onclick="thucHienBai6()">Thực hiện Bài 6</button>
        `,
        thucHien: () => {
            const a = parseFloat(document.getElementById('input_a6').value || 0);
            const b = parseFloat(document.getElementById('input_b6').value || 0);
            return `Tổng của ${a} và ${b} bằng Arrow Function là: **${tinhTong(a, b)}**`;
        }
    },
    {
        deBai: "Sử dụng `document.getElementById` để truy cập thẻ `<h2>` có id là **'phu-de'** và thay đổi nội dung của nó.",
        giaoDien: `
            <div class="input-group">
                <label>Nội dung mới:</label> <input type="text" id="input_text7" value="Nội dung mới từ JS">
            </div>
            <button onclick="thucHienBai7vaHienThi()">Thực hiện Bài 7</button>
        `,
        thucHien: () => {
            const noiDungMoi = document.getElementById('input_text7').value;
            return thucHienBai7(noiDungMoi);
        }
    },
    {
        deBai: "Sử dụng `element.classList.add()` để thêm class CSS **'chu-do'** vào đoạn văn bản có ID='bai8_doanvan'.",
        giaoDien: `
            <p>Kiểm tra đoạn văn bản bên dưới khu vực đối tượng DOM để thấy sự thay đổi!</p>
            <button onclick="thucHienBai8vaHienThi()">Thực hiện Bài 8</button>
        `,
        thucHien: thucHienBai8 // Không cần input, gọi hàm DOM trực tiếp
    },
    {
        deBai: "Sử dụng `addEventListener('mouseover', ...)` để gắn sự kiện khi di chuột (hover) vào nút **'nut-hover'** bên dưới.",
        giaoDien: `
            <p>Di chuột vào nút 'Di chuột vào đây (Bài 9)' bên dưới để xem sự kiện!</p>
            <button onclick="thucHienBai9vaHienThi()">Thực hiện Bài 9 (Gắn Event)</button>
        `,
        thucHien: thucHienBai9 // Gọi hàm DOM trực tiếp
    },
    {
        deBai: "Sử dụng `element.remove()` để xóa thẻ `<ul>` có id là **'danh-sach'** khỏi trang web.",
        giaoDien: `
            <p>Nhấn nút để xóa danh sách ul bên dưới khu vực đối tượng DOM.</p>
            <button onclick="thucHienBai10vaHienThi()">Thực hiện Bài 10 (Xóa Element)</button>
        `,
        thucHien: thucHienBai10 // Gọi hàm DOM trực tiếp
    }
];

// --- 4. HÀM CHUNG ĐIỀU KHIỂN GIAO DIỆN (DOM CONTROL) ---

// Hàm hiển thị giao diện của bài tập đã chọn
function hienThiBaiTap(index) {
    const container = document.getElementById('bai-tap-container');
    const baiTap = danhSachBaiTap[index - 1];

    // Cập nhật trạng thái nút menu
    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn_bai${index}`).classList.add('active');

    // Tạo nội dung cho container
    let htmlContent = `
        <h2>Bài Tập ${index}: ${document.getElementById(`btn_bai${index}`).textContent.split(': ')[1]}</h2>
        <p><strong>Đề bài:</strong> ${baiTap.deBai}</p>
        <hr>
        <p><strong>Thao tác:</strong></p>
        ${baiTap.giaoDien}
        <div id="ket-qua-hien-thi" class="ket-qua">Chưa thực hiện.</div>
    `;

    container.innerHTML = htmlContent;
}

// Hàm thực hiện bài tập và hiển thị kết quả (Dùng cho các bài 1-6)
function thucHienVaHienThi(baiTapFunc) {
    const ketQuaText = baiTapFunc();
    document.getElementById('ket-qua-hien-thi').innerHTML = `**Kết quả:** ${ketQuaText}`;
}

// Các hàm wrapper gọi hàm thực thi và hiển thị kết quả
const thucHienBai1 = () => thucHienVaHienThi(danhSachBaiTap[0].thucHien);
const thucHienBai2 = () => thucHienVaHienThi(danhSachBaiTap[1].thucHien);
const thucHienBai3 = () => thucHienVaHienThi(danhSachBaiTap[2].thucHien);
const thucHienBai4 = () => thucHienVaHienThi(danhSachBaiTap[3].thucHien);
const thucHienBai5 = () => thucHienVaHienThi(danhSachBaiTap[4].thucHien);
const thucHienBai6 = () => thucHienVaHienThi(danhSachBaiTap[5].thucHien);

// Các hàm wrapper cho bài tập DOM (7-10)
// Các bài này thay đổi DOM bên ngoài nên cần xử lý kết quả trả về
const thucHienBai7vaHienThi = () => thucHienVaHienThi(danhSachBaiTap[6].thucHien);
const thucHienBai8vaHienThi = () => thucHienVaHienThi(danhSachBaiTap[7].thucHien);
const thucHienBai9vaHienThi = () => thucHienVaHienThi(danhSachBaiTap[8].thucHien);
const thucHienBai10vaHienThi = () => thucHienVaHienThi(danhSachBaiTap[9].thucHien);
