const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
if(window.lucide)lucide.createIcons();
const slides=[
 {image:'./assets/hero-1.jpg',eyebrow:'WELCOME TO',title:'St. Paul’s<br/>Jesuit School',description:'The official site of St. Paul\'s Jesuit School (Belgaum). A Catholic institution committed to holistic education, character formation and service to society.'},
 {image:'./assets/hero-2.jpg',eyebrow:'INDUAMUR ARMA LUCIS',title:'Inspiring Young<br/>Minds to Excel',description:'A legacy of learning, character building and meaningful opportunities for every student.'},
 {image:'./assets/hero-3.jpg',eyebrow:'DISCOVER THE DIFFERENCE',title:'A Place to Learn,<br/>Grow & Thrive',description:'Nurturing curiosity, courage and compassion within a caring school community.'}
];
slides.forEach(s=>{const img=new Image();img.src=s.image;});
let current=0;let carouselTimer;
function showSlide(index){
 current=(index+slides.length)%slides.length;
 const slide=slides[current];
 const heroPhoto=$('#heroPhoto')||$('.hero-photo');
 if(heroPhoto&&slide.image){heroPhoto.style.backgroundImage=`url('${slide.image}')`;}
 $('#heroEyebrow').textContent=slide.eyebrow;
 $('#heroTitle').innerHTML=slide.title;
 $('#heroDescription').textContent=slide.description;
 $$('#slideDots button').forEach((dot,i)=>dot.classList.toggle('active',i===current));
}
function startCarousel(){clearInterval(carouselTimer);carouselTimer=setInterval(()=>showSlide(current+1),6000)};
$$('#slideDots button').forEach((dot,i)=>dot.addEventListener('click',()=>{showSlide(i);startCarousel()}));startCarousel();
$('#menuToggle').addEventListener('click',()=>{const open=$('#navItems').classList.toggle('mobile-open');$('#menuToggle').setAttribute('aria-expanded',String(open))});$$('.nav-link').forEach(link=>link.addEventListener('click',()=>{$$('.nav-link').forEach(l=>l.classList.remove('active'));link.classList.add('active');$('#navItems').classList.remove('mobile-open')}));$('#searchToggle').addEventListener('click',()=>{$('#searchPanel').classList.toggle('hidden')});$('#searchButton').addEventListener('click',()=>{const query=$('#searchPanel input').value.trim();if(query)window.alert('Search integration placeholder: '+query)});
