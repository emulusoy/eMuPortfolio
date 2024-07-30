function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
//DARK AND LİGHT MODE
// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}


/*Burada yeni sayfada açmanın kodunu yazdık tıkladığında! */
function openNewTab(url){
    window.open(url,'_blank').focus();
}

/*Şimdi TR Eng geçişini yapmak için yazacağız!*/
/*
const languageFlag=document.getElementById('language-flag');
let currentLang='en';
languageFlag.addEventListener('click', function() {
  currentLang = (currentLang === 'en') ? 'tr' : 'en';
  loadLanguage(currentLang);
});

function loadLanguage(lang) {
  fetch(lang + '.json')
      .then(response => response.json())
      .then(data => {
          document.documentElement.lang = lang;
          document.querySelector('title').textContent = data.title;
          document.querySelectorAll('.text_about').forEach(el => el.textContent = data.nav.about);
          document.querySelectorAll('.text_experience').forEach(el => el.textContent = data.nav.experience);
          document.querySelectorAll('.text_projects').forEach(el => el.textContent = data.nav.projects);
          document.querySelectorAll('.text_contact').forEach(el => el.textContent = data.nav.contact);
          document.querySelectorAll('.text_p_experienced').forEach(el => el.textContent = data.content.pexp);
          
          document.getElementById('text_p_1').textContent = data.content.p1;
          document.getElementById('text_p_2').textContent = data.content.p2;
          document.getElementById('text_button_1').textContent = data.buttons.b1;
          document.getElementById('text_button_2').textContent = data.buttons.b2;
          document.getElementById('text_p_3').textContent = data.content.p3;
          document.getElementById('text_h_2').textContent = data.content.h2;
          document.getElementById('text_h_3').textContent = data.content.h3;
          document.getElementById('text_p_4').textContent = data.content.p4;
          document.getElementById('text_h_4').textContent = data.content.h4;
          document.getElementById('text_p_5').textContent = data.content.p5;
          document.getElementById('text_p_6').textContent = data.content.p6;
          document.getElementById('text_p_7').textContent = data.content.p7;
          document.getElementById('text_h_5').textContent = data.content.h5;
          document.getElementById('text_h_6').textContent = data.content.h6;
          document.getElementById('text_h_11').textContent = data.content.h11;
          document.getElementById('text_p_basic').textContent = data.content.pb;
          document.getElementById('text_p_8').textContent = data.content.p8;
          document.getElementById('text_h_16').textContent = data.content.h16;
          document.getElementById('text_h_17').textContent = data.content.h17;
          document.getElementById('text_p_9').textContent = data.content.p9;
          document.getElementById('text_h_18').textContent = data.content.h18;
          document.getElementById('text_p_10').textContent = data.content.p10;
          document.getElementById('text_h_19').textContent = data.content.h19;
          document.getElementById('text_p_11').textContent = data.content.p11;
          document.getElementById('text_h_10').textContent = data.content.h20;
          languageFlag.src = languageFlag.getAttribute('data-src-' + lang);
        }).catch(error => console.error('Error loading language file:', error));
        }
        */
       const languageFlag = document.getElementById('language-flag');
       let currentLang = 'en';
       languageFlag.addEventListener('click', function() {
    currentLang = (currentLang === 'en') ? 'tr' : 'en';
    loadLanguage(currentLang);
});

function loadLanguage(lang) {
    fetch(lang + '.json')
        .then(response => response.json())
        .then(data => {
            document.documentElement.lang = lang;
            document.querySelector('title').textContent = data.title;
            
            // Menü bağlantıları
            document.querySelectorAll('.text_about').forEach(el => el.textContent = data.nav.about);
            document.querySelectorAll('.text_experience').forEach(el => el.textContent = data.nav.experience);
            document.querySelectorAll('.text_projects').forEach(el => el.textContent = data.nav.projects);
            document.querySelectorAll('.text_contact').forEach(el => el.textContent = data.nav.contact);
            
            // Diğer metinler
            document.getElementById('text_p_1').textContent = data.content.p1;
            document.getElementById('text_p_2').textContent = data.content.p2;
            document.getElementById('text_p_3').textContent = data.content.p3;
            document.getElementById('text_p_4').textContent = data.content.p4;
            document.getElementById('text_p_5').textContent = data.content.p5;
            document.getElementById('text_p_6').textContent = data.content.p6;
            document.getElementById('text_p_7').textContent = data.content.p7;
            document.getElementById('text_p_8').textContent = data.content.p8;
            document.getElementById('text_p_9').textContent = data.content.p9;
            document.getElementById('text_p_10').textContent = data.content.p10;
            document.getElementById('text_p_11').textContent = data.content.p11;
            
            // Başlıklar
            document.getElementById('text_h_2').textContent = data.content.h2;
            document.getElementById('text_h_3').textContent = data.content.h3;
            document.getElementById('text_h_4').textContent = data.content.h4;
            document.getElementById('text_h_5').textContent = data.content.h5;
            document.getElementById('text_h_6').textContent = data.content.h6;
            document.getElementById('text_h_10').textContent = data.content.h10;
            document.getElementById('text_h_11').textContent = data.content.h11;
            document.getElementById('text_h_16').textContent = data.content.h16;
            document.getElementById('text_h_17').textContent = data.content.h17;
            document.getElementById('text_h_18').textContent = data.content.h18;
            document.getElementById('text_h_19').textContent = data.content.h19;
            document.getElementById('text_h_20').textContent = data.content.h20;
            //Butonlar
            document.getElementById('text_button_1').textContent = data.buttons.b1;
            document.getElementById('text_button_2').textContent = data.buttons.b2;
            
            // Deneyim seviyeleri
            document.querySelectorAll('.text_p_experienced').forEach(el => el.textContent = data.content.pexp);
            document.querySelectorAll('.text_p_intermediate').forEach(el => el.textContent = data.content.pint);
            document.querySelectorAll('.text_p_basic').forEach(el => el.textContent = data.content.pb);

            // Bayrak görseli
            languageFlag.src = data.flagSrc;

            // Hata durumu
        }).catch(error => console.error('hata oluştu:', error));
}
document.addEventListener('DOMContentLoaded', function() {
  // Tarayıcı dil ayarını kontrol ederek varsayılan dil belirleme
  const userLang = navigator.language || navigator.userLanguage;
  currentLang = (userLang.startsWith('tr')) ? 'tr' : 'en';
  loadLanguage(currentLang);
});

/*hhamburger için */
const languageFlagHamburger = document.getElementById('language-flag-hamburger');
function changeLanguage() {
  currentLang = (currentLang === 'en') ? 'tr' : 'en';
  loadLanguage(currentLang);
}
languageFlag.src = languageFlag.getAttribute('data-src-' + lang);
languageFlag.addEventListener('click', changeLanguage);
languageFlagHamburger.addEventListener('click', changeLanguage);
languageFlagHamburger.src = languageFlagHamburger.getAttribute('data-src-' + lang);


  //slider


