const cursor=document.querySelector('.cursor');
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
document.addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});
function cursorLoop(){cx+=(mx-cx)*.12;cy+=(my-cy)*.12;if(cursor){cursor.style.left=cx+'px';cursor.style.top=cy+'px'}requestAnimationFrame(cursorLoop)}cursorLoop();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
document.querySelectorAll('.planet').forEach(p=>{p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform=`perspective(900px) rotateY(${x*16}deg) rotateX(${-y*16}deg) scale(1.035)`});p.addEventListener('pointerleave',()=>p.style.transform='')});
const form=document.querySelector('#crewForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const code='M-2040-'+Math.random().toString(36).slice(2,7).toUpperCase();document.querySelector('.success').classList.add('show');document.querySelector('.code').textContent=code;form.style.display='none';setTimeout(()=>document.querySelector('.success').scrollIntoView({behavior:'smooth',block:'center'}),80)})}
