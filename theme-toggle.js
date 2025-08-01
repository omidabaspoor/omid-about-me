document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");
  const body = document.body;

  // بارگذاری تم ذخیره‌شده
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("dark", "light");
    body.classList.add(savedTheme);
    icon.classList.toggle("fa-sun", savedTheme === "light");
    icon.classList.toggle("fa-moon", savedTheme === "dark");
  } else {
    body.classList.add("dark"); // پیش‌فرض تیره
  }

  // دکمه تغییر تم
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");

    const isLight = body.classList.contains("light");
    icon.classList.toggle("fa-sun", isLight);
    icon.classList.toggle("fa-moon", !isLight);

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
