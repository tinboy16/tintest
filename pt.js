function giaiPhuongTrinhBac2(a, b, c) { const delta = b * b - 4 * 
    a * c; if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a); const x2 = 
        (-b - Math.sqrt(delta)) / (2 * a); return `Phương trình có 
        hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
        const x = -b / (2 * a); return `Phương trình có nghiệm 
        kép: x = ${x}`;
    } else {
        return "Phương trình không có nghiệm thực.";
    }
}
// Thay đổi giá trị của a, b, c tùy thuộc vào phương trình bạn 
// muốn giải
const a = 1; const b = -3; const c = 2; 
console.log(giaiPhuongTrinhBac2(a, b, c));
