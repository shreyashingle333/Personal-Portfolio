/* ============================================================
   main.js — Shreyas Ingle Portfolio
   Three.js 3D background + GSAP scroll animations
   ============================================================ */

// ---- LOADER ----
(function () {
  let pct = 0;
  const bar = document.getElementById('loader-bar');
  const pctEl = document.getElementById('loader-pct');
  const loader = document.getElementById('loader');

  const tick = setInterval(() => {
    pct += Math.random() * 18;
    if (pct > 100) pct = 100;
    bar.style.width = pct + '%';
    pctEl.textContent = Math.floor(pct) + '%';
    if (pct >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        loader.classList.add('done');
        startAnimations();
      }, 300);
    }
  }, 60);
})();

// ---- THREE.JS 3D BACKGROUND ----
(function initThree() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  // Particle field
  const particleCount = 2400;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  const palette = [
    new THREE.Color('#00f5d4'),
    new THREE.Color('#7b61ff'),
    new THREE.Color('#ff6b6b'),
    new THREE.Color('#ffffff'),
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 120;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    sizes[i] = Math.random() * 0.8 + 0.1;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.PointsMaterial({
    size: 0.18, vertexColors: true, transparent: true, opacity: 0.7,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  // Wireframe icosahedron 1
  const icoGeo = new THREE.IcosahedronGeometry(8, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00f5d4, wireframe: true, transparent: true, opacity: 0.06,
  });
  const ico1 = new THREE.Mesh(icoGeo, icoMat);
  ico1.position.set(-18, 6, -10);
  scene.add(ico1);

  // Wireframe torus
  const torusGeo = new THREE.TorusGeometry(9, 2.5, 12, 48);
  const torusMat = new THREE.MeshBasicMaterial({
    color: 0x7b61ff, wireframe: true, transparent: true, opacity: 0.05,
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.position.set(20, -8, -15);
  scene.add(torus);

  // Wireframe octahedron
  const octaGeo = new THREE.OctahedronGeometry(6, 0);
  const octaMat = new THREE.MeshBasicMaterial({
    color: 0xff6b6b, wireframe: true, transparent: true, opacity: 0.07,
  });
  const octa = new THREE.Mesh(octaGeo, octaMat);
  octa.position.set(5, 14, -5);
  scene.add(octa);

  // Connection lines between random particles (sparse)
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00f5d4, transparent: true, opacity: 0.04 });
  for (let i = 0; i < 60; i++) {
    const a = Math.floor(Math.random() * particleCount);
    const b = Math.floor(Math.random() * particleCount);
    const pts = [
      new THREE.Vector3(positions[a*3], positions[a*3+1], positions[a*3+2]),
      new THREE.Vector3(positions[b*3], positions[b*3+1], positions[b*3+2]),
    ];
    const lg = new THREE.BufferGeometry().setFromPoints(pts);
    scene.add(new THREE.Line(lg, lineMat));
  }

  // Mouse parallax
  let mx = 0, my = 0;
  document.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  // Animate
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    particles.rotation.y = t * 0.018;
    particles.rotation.x = t * 0.008;

    ico1.rotation.x = t * 0.25;
    ico1.rotation.y = t * 0.18;

    torus.rotation.x = t * 0.15;
    torus.rotation.z = t * 0.1;

    octa.rotation.y = t * 0.22;
    octa.rotation.x = t * 0.14;

    // Camera parallax
    camera.position.x += (mx * 2 - camera.position.x) * 0.04;
    camera.position.y += (-my * 2 - camera.position.y) * 0.04;
    camera.position.z = 30 - scrollY * 0.008;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();

// ---- MAIN ANIMATIONS (after loader) ----
function startAnimations() {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Hero stagger
  gsap.fromTo('.hero-content .reveal-up',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
  );

  // Counter animation
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) { el.textContent = target; clearInterval(timer); }
    }, 40);
  });

  // Scroll-triggered reveals
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
    // Skip hero (already animated)
    if (el.closest('#hero')) return;

    const delay = el.dataset.delay ? parseInt(el.dataset.delay) / 1000 : 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => {
        setTimeout(() => el.classList.add('in'), delay * 1000);
      }
    });
  });

  // Skill bar fills
  document.querySelectorAll('.sb-fill').forEach(bar => {
    const w = bar.dataset.w;
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 90%',
      onEnter: () => { bar.style.width = w + '%'; }
    });
  });

  // Nav scroll effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(5,8,16,0.92)'
      : 'rgba(5,8,16,0.7)';
  });

  // Domain card hover glow follow
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const glow = card.querySelector('.proj-glow');
      if (glow) {
        glow.style.left = x - glow.offsetWidth / 2 + 'px';
        glow.style.top  = y - glow.offsetHeight / 2 + 'px';
      }
    });
  });

  // Hamburger menu (mobile)
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '72px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(5,8,16,0.97)';
      navLinks.style.padding = '20px 24px';
      navLinks.style.gap = '20px';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { navLinks.style.display = 'none'; });
    });
  }

  // Section active nav link
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) cur = s.id;
    });
    navAs.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
    });
  });

  // Floating cards GSAP
  gsap.to('.card-1', { y: -16, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  gsap.to('.card-2', { y: -12, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.8 });
  gsap.to('.card-3', { y: -18, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.6 });
}

// ---- CONTACT FORM ----
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Message Sent! ✓';
  btn.style.background = 'linear-gradient(135deg, #00f5d4, #00c4a8)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ---- SMOOTH ANCHOR SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---- CURSOR GLOW (desktop only) ----
if (window.innerWidth > 768) {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position:fixed;width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(0,245,212,0.04),transparent 70%);
    pointer-events:none;z-index:9998;transform:translate(-50%,-50%);
    transition:left 0.12s ease,top 0.12s ease;
  `;
  document.body.appendChild(cursor);
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}
