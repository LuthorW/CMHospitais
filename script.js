const root = document.documentElement;
const savedTheme = localStorage.getItem('cm-theme');
const preferredDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

root.dataset.theme = savedTheme || (preferredDark ? 'dark' : 'light');

const themeToggle = document.getElementById('theme-toggle');

const updateThemeLabel = () => {
  if (!themeToggle) return;

  const label =
    root.dataset.theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro';

  themeToggle.setAttribute('aria-label', label);
};

updateThemeLabel();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cm-theme', root.dataset.theme);
    updateThemeLabel();
  });
}

const header = document.getElementById('header');
const menuButton = document.getElementById('mobile-menu');
const nav = document.getElementById('main-nav');

const updateHeader = () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -45px 0px',
    },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];

const highlightNav = () => {
  const scrollPosition = window.scrollY + 135;
  let activeSection = '';

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      activeSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeSection}`;
    link.classList.toggle('active', isActive);
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

const appointmentForm = document.getElementById('appointment-form');
const formStatus = document.getElementById('form-status');

if (appointmentForm) {
  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(appointmentForm);
    const subject = encodeURIComponent(
      `Solicitação de agendamento — ${data.get('specialty')}`,
    );
    const body = encodeURIComponent(
      `Nome: ${data.get('name')}\n` +
        `Telefone: ${data.get('phone')}\n` +
        `E-mail: ${data.get('email')}\n` +
        `Especialidade: ${data.get('specialty')}\n\n` +
        `Observações:\n${data.get('message') || 'Não informado.'}`,
    );

    if (formStatus) {
      formStatus.textContent =
        'Abrindo seu aplicativo de e-mail para concluir a solicitação.';
    }

    window.location.href =
      `mailto:contato@contimoretti.com.br?subject=${subject}&body=${body}`;
  });
}
