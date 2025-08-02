const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

function selectQuality(q) {
  dropdownBtn.textContent = `${q} ▼`;
  dropdownMenu.classList.add('hidden');
  // Thay alert bằng animation hoặc interaction thực tế nếu muốn:
  alert(`Bạn đã chọn ${q}`);
}
