<!-- ======================= js/script.js ======================= -->
<script>
// smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
 anchor.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
 });
});

// reveal on scroll animation
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('show');}
 });
},{threshold:.15});
document.querySelectorAll('.card,.hero-text').forEach(el=>observer.observe(el));

// navbar shadow on scroll
window.addEventListener('scroll',()=>{
 document.querySelector('.navbar').style.boxShadow=window.scrollY>40?'0 6px 20px rgba(0,0,0,.15)':'0 3px 10px rgba(0,0,0,.1)';
});
</script>
