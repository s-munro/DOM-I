const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])







//***************** MENU BAR **********************/
const header = document.querySelector('header');
const menuBar = header.querySelector('nav');
const services = menuBar.children[0].textContent = 'Services'
const product = menuBar.children[1].textContent = 'Product'
const vision = menuBar.children[2].textContent = 'Vision'
const features = menuBar.children[3].textContent = 'Features'
const about = menuBar.children[4].textContent = 'About'
const contact = menuBar.children[5].textContent = 'Contact'

//LOGO IMAGE
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.nav['img-src']

//******* HERO SECTION ***********/
const heroImg = document.querySelector('#cta-img');
heroImg.src = siteContent.cta['img-src'];
const ctaText = document.querySelector('.cta-text');
ctaText.querySelector('h1').textContent = siteContent.cta.h1;
ctaText.querySelector('button').textContent = siteContent.cta.button;

//************* FEATURES SECTION ***************/
//SECTION 1
const sectionText1 = document.querySelector('.top-content').querySelector('.text-content');
sectionText1.querySelector('h4').textContent = siteContent['main-content']['features-h4']
sectionText1.querySelector('p').textContent = siteContent['main-content']['features-content'];
//SECTION 2
const sectionText2 = document.querySelector('.top-content').children[1];
sectionText2.querySelector('h4').textContent = siteContent['main-content']['about-h4']
sectionText2.querySelector('p').textContent = siteContent['main-content']['about-content']

//IMAGE
const midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

//BOTTOM SECTION 1
const botSectionText1 = document.querySelector('.bottom-content').querySelector('.text-content');
botSectionText1.querySelector('h4').textContent = siteContent['main-content']['services-h4']
botSectionText1.querySelector('p').textContent = siteContent['main-content']['services-content']

//BOTTOM SECTION 2
const botSectionText2 = document.querySelector('.bottom-content').children[1];
botSectionText2.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
botSectionText2.querySelector('p').textContent = siteContent['main-content']['product-content']

//BOTTOM SECTION 3
const botSectionText3 = document.querySelector('.bottom-content').children[2];
botSectionText3.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
botSectionText3.querySelector('p').textContent = siteContent['main-content']['vision-content'];

//**************** FOOTER SECTION ******************/

//CONTACT
const footerSection = document.querySelector('.contact');
footerSection.querySelector('h4').textContent = siteContent.contact['contact-h4'];
footerSection.children[1].textContent = siteContent.contact.address;
footerSection.children[2].textContent = siteContent.contact.phone;
footerSection.children[3].textContent = siteContent.contact.email;

//FOOTER
const footerTrademark = document.querySelector('footer');
footerTrademark.querySelector('p').textContent = siteContent.footer.copyright;