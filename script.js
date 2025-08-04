 // Плавная прокрутка для навигационных ссылок
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Обработка формы
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });

        // Анимация при прокрутке
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
            observer.observe(el);
        });

        
  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

  // (опционально) скрываем при клике вне меню:
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobile-menu');
    const button = document.querySelector('.mobile-menu-icon');
    if (!menu.contains(e.target) && !button.contains(e.target)) {
      menu.style.display = 'none';
    }
  });

  // (опционально) скрываем при клике по ссылке
  document.querySelectorAll('#mobile-menu a').forEach(link =>
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').style.display = 'none';
    })
  );

function toggleMenu(){
  const m = document.getElementById('mobile-menu');
  m.style.display = m.style.display==='flex'? 'none':'flex';
}
document.addEventListener('click', e=>{
  const m=document.getElementById('mobile-menu'),
        b=document.querySelector('.mobile-menu-icon');
  if(!m.contains(e.target)&&!b.contains(e.target)) m.style.display='none';
});
document.querySelectorAll('#mobile-menu a').forEach(a=>
  a.addEventListener('click',()=>document.getElementById('mobile-menu').style.display='none')
);

        
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const token = "6616513009:AAFJIzJ2neM2INXlGHmH6HMsm3vR5cEyrAo";
    const chat_id = "5011101456";

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value || "не указан";
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value || "Сообщение не оставлено";

    const text = `
<b>📩 Новая заявка с сайта IZOMUN</b>\n
👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
📧 <b>Email:</b> ${email}
🛠 <b>Услуга:</b> ${service}
💬 <b>Сообщение:</b> ${message}
    `;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: text,
            parse_mode: "HTML"
        })
    })
    .then(res => {
        if (res.ok) {
            alert("✅ Заявка успешно отправлена!");
            document.getElementById("contactForm").reset();
        } else {
            throw new Error("Ошибка при отправке");
        }
    })
    .catch(err => {
        alert("❌ Не удалось отправить. Попробуйте позже.");
        console.error(err);
    });
});
