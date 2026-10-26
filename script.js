const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'فتح القائمة'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
document.querySelectorAll('[data-plan]').forEach(link => { link.href = 'https://wa.me/212660866055?text=' + encodeURIComponent('السلام عليكم، أود الاستفسار وحجز خدمة تنظيف الزجاج لخطة ' + link.dataset.plan + '. يمكنني إرسال الموقع وصور الزجاج لتحديد تفاصيل الخدمة.'); });
document.querySelectorAll('.comparison input').forEach(input => { input.addEventListener('input', () => input.closest('.comparison').style.setProperty('--position', input.value + '%')); });
if ('IntersectionObserver' in window) { document.documentElement.classList.add('js-motion'); const revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.08 }); document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element)); const sectionObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { navigation.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id)); } }); }, { rootMargin: '-15% 0px -60% 0px' }); document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section)); }
document.querySelector('#year').textContent = new Date().getFullYear();
