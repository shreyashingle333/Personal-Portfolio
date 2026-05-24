# 🚀 Shreyas Ingle — Personal Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-00f5d4?style=for-the-badge&logo=vercel&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

**A stunning 3D animated personal portfolio built with Three.js + GSAP**

[🌐 Live Demo](#) &nbsp;·&nbsp; [📧 Contact](mailto:ingle4529@gmail.com) &nbsp;·&nbsp; [💼 LinkedIn](https://www.linkedin.com/in/shreyash-ingle-xr7)

</div>

---

## ✨ Features

- 🌌 **3D Particle Universe** — 2,400 animated particles with Three.js, rotating wireframe geometries, and mouse parallax
- 🖼️ **Holographic Photo Frame** — Static photo with scanning beam, CRT scanlines, RGB glitch text, and pulsing glow rings
- ⚡ **GSAP Scroll Animations** — Smooth reveal animations triggered on scroll for every section
- 🎯 **Animated Skill Bars** — Progress bars that fill on scroll with proficiency levels
- 🏷️ **Certification Marquee** — Infinite scrolling ticker with all certifications
- 🌀 **Custom Loader** — Animated progress ring with percentage counter
- 🖱️ **Cursor Glow** — Soft teal radial follows mouse on desktop
- 📱 **Fully Responsive** — Mobile hamburger menu, adaptive layouts
- 🎨 **No frameworks** — Pure HTML, CSS, JavaScript (no build tools needed)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 3D Graphics | [Three.js r128](https://threejs.org/) |
| Animations | [GSAP 3.12 + ScrollTrigger](https://greensock.com/gsap/) |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| Markup | HTML5, CSS3 (custom properties, keyframes) |
| Scripting | Vanilla JavaScript (ES6+) |

---

## 📁 Project Structure

```
shreyas-portfolio/
├── index.html       # Main HTML — all sections & structure
├── style.css        # All styles, animations, responsive design
├── main.js          # Three.js 3D background + GSAP logic
├── photo.jpg        # Your photo (add this yourself)
└── README.md        # This file
```

---

## 🚀 Getting Started

### Option 1 — Just open it (no setup needed)

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio.git

# Open in browser
# Simply double-click index.html
```

> ⚠️ Requires an internet connection for CDN assets (Three.js, GSAP, Google Fonts)

### Option 2 — Local dev server (recommended)

```bash
# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server

# OR using Python
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 🖼️ Adding Your Photo

1. Name your photo file `photo.jpg`
2. Place it in the `shreyas-portfolio/` folder
3. Refresh your browser

The photo will appear inside the holographic frame with animated effects. If no photo is found, the initials **SI** are shown as fallback.

> **Tip:** Use a clear, front-facing photo. Portrait orientation (taller than wide) works best.

---

## 🎨 Customization

### Change accent colors
Open `style.css` and edit the `:root` variables:
```css
:root {
  --accent:  #00f5d4;   /* teal — primary glow */
  --accent2: #7b61ff;   /* purple — secondary */
  --accent3: #ff6b6b;   /* coral — tertiary */
}
```

### Update content
All text content is in `index.html`. Sections are clearly commented:
- `<!-- HERO -->` — name, tagline, stats
- `<!-- ABOUT -->` — bio, education, contact
- `<!-- SKILLS -->` — domain cards + skill bars
- `<!-- EXPERIENCE -->` — timeline entries
- `<!-- PROJECTS -->` — project cards
- `<!-- CERTIFICATIONS -->` — marquee + achievement cards
- `<!-- CONTACT -->` — links + form

### Change particle count / colors
In `main.js`, find `const particleCount = 2400;` and adjust. Colors are in the `palette` array below it.

---

## 📊 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **About** | Bio, education (B.E. E&TC + Diploma Mechanical), location |
| 02 | **Skills** | Java, Python, Power BI, Tableau, Arduino, React.js, Flask, SQL + more |
| 03 | **Experience** | Anvistar ITS (Java Dev, 2025) · SEDEMAC Mechatronics (Associate Eng, 2024) |
| 04 | **Projects** | AITS CRM, FinanceFlow, Credential Manager, Supply Chain Dashboard, Patrol Rover, Obstacle Robot |
| 05 | **Certifications** | 10+ certs from Google, AWS, SimpliLearn, Udemy, HackerRank |
| 06 | **Contact** | Email, phone, LinkedIn, HackerRank + contact form |

---

## 🏆 Achievements

- ⭐ **5★ Gold Badge** in Java & Python on HackerRank
- 📜 **10+ Certifications** from Google, AWS, SimpliLearn, Udemy
- 🤖 Built **autonomous robotics** projects (surveillance robot, obstacle-avoiding vehicle)
- 🔬 Inspected **10,000+ electronic components** at SEDEMAC Mechatronics

---

## 📬 Contact

| Platform | Link |
|----------|------|
| 📧 Email | [ingle4529@gmail.com](mailto:ingle4529@gmail.com) |
| 📞 Phone | +91 8698673632 |
| 💼 LinkedIn | [shreyash-ingle-xr7](https://www.linkedin.com/in/shreyash-ingle-xr7) |
| 🏅 HackerRank | [ingle4529](https://hackerrank.com/profile/ingle4529) |
| 📍 Location | Pune, Maharashtra, India |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Designed & built by **Shreyas Dnyandeo Ingle** · Pune, Maharashtra · 2025

⭐ Star this repo if you found it helpful!

</div>
