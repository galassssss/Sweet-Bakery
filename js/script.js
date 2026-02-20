// DARK MODE
const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Thêm vào giỏ (demo)
const addButtons = document.querySelectorAll(".addBtn");

addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Đã thêm sản phẩm vào giỏ hàng 🛒");
    });
});

// Form liên hệ
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! 🎉");
    this.reset();
});