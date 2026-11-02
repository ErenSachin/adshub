const $=s=>document.querySelector(s),R=document.documentElement;
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/'/g,'&#39;');
const eff=()=>R.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
try{const t=localStorage.getItem('th');if(t)R.dataset.theme=t}catch(e){}
$('#tg').onclick=()=>{const t=eff()==='dark'?'light':'dark';R.dataset.theme=t;try{localStorage.setItem('th',t)}catch(e){}};
let cur=(()=>{try{const s=localStorage.getItem('cur');if(s)return s}catch(e){}let z='';try{z=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}return ['Asia/Kolkata','Asia/Calcutta'].includes(z)||/-IN$/i.test(navigator.language||'')?'in':'intl'})();
const P={in:{meta:'₹40,000',google:'₹60,000',gst:' + 18% GST'},intl:{meta:'$800',google:'$1,000',gst:''}};
function price(){document.querySelectorAll('[data-a]').forEach(e=>e.innerHTML=P[cur][e.dataset.a]+'<small> /month'+P[cur].gst+'</small>');document.querySelectorAll('.pr').forEach(e=>e.textContent=P[cur][e.dataset.p]+'/mo'+P[cur].gst+'. Cancel anytime.');document.querySelectorAll('#curb button').forEach(b=>b.classList.toggle('on',b.dataset.c===cur))}
document.querySelectorAll('#curb button').forEach(b=>b.onclick=()=>{cur=b.dataset.c;try{localStorage.setItem('cur',cur)}catch(e){}price()});
price();

async function postLead(p){if(!WEBHOOK_URL)return false;
try{const g=WEBHOOK_URL.includes('script.google.com');
const r=await fetch(WEBHOOK_URL,{method:'POST',headers:{'Content-Type':g?'text/plain;charset=utf-8':'application/json'},body:JSON.stringify(p)});
if(!r.ok)return false;if(!g)return true;const j=await r.json();return j.ok===true}catch(e){return false}}
const mn=$('#mn'),lk=$('#lk');if(mn){mn.onclick=()=>lk.classList.toggle('open');lk.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>lk.classList.remove('open')))}
