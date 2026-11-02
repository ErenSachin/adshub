const stepsEl=document.querySelector(".steps"),sts=[...stepsEl.querySelectorAll(".st")];
function prog(){
 const t=innerHeight*0.55,top=stepsEl.getBoundingClientRect().top,last=sts[sts.length-1].offsetTop+12;
 sts.forEach((s,i)=>s.classList.toggle("on",i===0||top+s.offsetTop+12<=t));
 stepsEl.style.setProperty("--p",Math.max(0,Math.min(t-top-8,last-8))+"px");
}
addEventListener("scroll",prog,{passive:true});addEventListener("resize",prog);prog();
const svc=["Real estate","Doctors & clinics","Salons & spas","E-commerce sales","Coaching & education","Restaurants","Gyms & fitness","Dental clinics","Interior design","Jewellery","Travel","Any local business"];
document.getElementById("trk").innerHTML=[...svc,...svc].map(s=>"<span>"+s+"</span>").join("");
const D=[
{n:"Real estate",h:"Site visits, not just clicks.",p:"Buyers scroll past brochures. The ad leads with one number, the price or the location, and one action: book a site visit. Instant lead forms capture name, number, and budget so your team can call back within minutes.",
 cr:"<div><small>2 BHK · Sector 150</small><div class='big' style='font-size:44px'>From ₹89 L</div><div class='t' style='font-size:22px'>Book a site visit this weekend</div></div>",
 cap:"2 BHK homes from ₹89 lakh. Book a free site visit this weekend."},
{n:"Clinic / Doctor",h:"Fill the appointment book.",p:"Patients want a clear next step: who, where, and how soon. The ad names the specialist, the concern, and the earliest slot, and the form collects the problem and a call-back time.",
 cr:"<div><div class='t' style='font-size:26px'>Back pain?</div><div class='big' style='font-size:40px'>Book a consult</div><small>Dr. Sharma · Mon to Sat · Noida</small></div>",
 cap:"Back pain? Book a consultation with Dr. Sharma this week. Limited slots."},
{n:"Salon",h:"Offers that fill empty chairs.",p:"Weekday slots are the easiest to fill. A clear package price, a strong look, and a one-tap booking form turn followers into first-time customers.",
 cr:"<div><div class='t' style='font-size:24px'>Hair colour + cut</div><div class='big'>₹1,999</div><small>New customers · This month</small></div>",
 cap:"Hair colour and cut for ₹1,999. New customers, this month only."},
{n:"E-commerce",h:"From scroll to checkout.",p:"Product ads with one clear offer and a reason to buy now. We test creatives every week and push spend behind the ones that bring orders, not just clicks.",
 cr:"<div><div class='t' style='font-size:24px'>Summer sale</div><div class='big'>40% off</div><small>Free delivery · Today only</small></div>",
 cap:"Summer sale: 40% off bestsellers with free delivery. Today only."}];
const tabs=document.getElementById("tabs");
function show(i){
 [...tabs.children].forEach((b,j)=>b.classList.toggle("on",i===j));
 cr.innerHTML=D[i].cr;cap.textContent=D[i].cap;h3.textContent=D[i].h;pp.textContent=D[i].p;
}
D.forEach((d,i)=>{const b=document.createElement("button");b.textContent=d.n;b.onclick=()=>show(i);tabs.appendChild(b)});
show(0);

const M=$('#md'),MB=$('#mb'),MP=$('#mp');
const SL=['10:00 AM','11:00 AM','12:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];
const inr=n=>'₹'+n.toLocaleString('en-IN'),usd=n=>'$'+n.toLocaleString('en-US');
const BI=[10000,20000,30000,40000,50000,75000,100000,150000,200000,300000,400000,500000,750000,1000000].map(inr),BU=[250,500,750,1000,1500,2000,3000,4000,5000,7500,10000,15000,20000].map(usd);
const BUD=BI.concat(['₹15,00,000','₹25,00,000+']);
const GL={'E-commerce':{q:'How many sales (orders) a month would you like?',u:'orders / month',v:['100','250','500','1,000','2,000','3,000','5,000','7,500','10,000+']},
'Real estate':{q:'How many buyer enquiries a month would you like?',u:'enquiries / month',v:['10','25','50','100','200','300','500+']},
'Doctor / Clinic':{q:'How many new patient enquiries a month would you like?',u:'patient enquiries / month',v:['10','25','50','100','200','300','500+']},
'Salon & Beauty':{q:'How many new bookings a month would you like?',u:'bookings / month',v:['10','25','50','100','200','300','500+']},
'Coaching & Education':{q:'How many new student enquiries a month would you like?',u:'student enquiries / month',v:['10','25','50','100','250','500','1,000+']},
'Mobile app':{q:'How many app installs a month would you like?',u:'installs / month',v:['500','1,000','2,500','5,000','10,000','25,000','50,000','1,00,000+']},
'Other':{q:'How many new customers a month would you like?',u:'new customers / month',v:['5','10','25','50','100','250','500+']}};
const GOAL=a=>{const g=GL[a.ind]||GL.Other;return{i:'🎯',q:g.q,d:'A rough target is fine. Slide to the number you have in mind.',f:[{k:'goal',t:'range',vals:g.v,u:g.u}]}};
const YR=['Fresher','1 year','2 years','3 years','4 years','5 years','6 years','7 years','8 years','9 years','10+ years'];
const days=()=>{const r=[],d=new Date();while(r.length<14){d.setDate(d.getDate()+1);if(d.getDay())r.push(d.toLocaleDateString('en-IN',{weekday:'short'})+', '+d.toLocaleDateString('en-IN',{day:'numeric',month:'short'}))}return r};
const who=[{k:'name',t:'text',l:'Full name',ic:'👤'},{k:'phone',t:'tel',l:'Phone / WhatsApp',ic:'📞'},{k:'email',t:'email',l:'Email',ic:'✉️'}];
const applyFn=a=>[
{i:'📣',q:'Which ads do you need?',d:'Pick the platform where you want more customers.',f:[{k:'svc',t:'tiles',o:[['📸','Instagram & Facebook ads'],['🔍','Google ads'],['⚡','Both']]}]},
{i:'🏢',q:'Tell us about your business.',d:'So we can look at what you already have online.',f:[{k:'biz',t:'text',l:'Business name',ic:'🏢'},{k:'web',t:'text',l:'Website or Instagram handle',ic:'🔗'}]},
{i:'🏷️',q:'What kind of business do you run?',d:'We build the ads around how your customers buy.',f:[{k:'ind',t:'tiles',o:[['🏠','Real estate'],['🩺','Doctor / Clinic'],['💇','Salon & Beauty'],['🛍️','E-commerce'],['🎓','Coaching & Education'],['📱','Mobile app'],['✨','Other']]},{k:'srv',t:'text',l:'What do you want more customers for?',opt:1,ic:'✏️'}]},
{i:'🌍',q:'Which countries do your customers live in?',d:'Select every country you want to reach.',f:[{k:'country',t:'mchips',l:'Countries',o:['India','United Arab Emirates','United States','United Kingdom','Canada','Australia','Singapore','Saudi Arabia','Qatar','Germany','New Zealand','Worldwide','Other']},{k:'city',t:'text',l:'Cities or areas, or any other country',opt:1,ic:'📍'}]},
{i:'💰',q:'What is your monthly ad budget?',d:'Your ad spend is separate from our fee. Amounts are in Indian rupees (₹). Slide to a comfortable monthly amount.',f:[{k:'bud',t:'range',vals:BUD,u:'per month'}]},
GOAL(a),
{i:'👤',q:'Book your call: who are we talking to?',d:'We use these to confirm your slot.',f:who},
{i:'📅',q:'Pick a time that suits you.',d:'Times are in IST (UTC+5:30).',f:[{k:'date',t:'date',l:'Date'},{k:'time',t:'chips',l:'Time (IST)',o:SL}]}];
const careerFn=a=>{const r=a.role||'',s=[{i:'💼',q:'Which role are you applying for?',d:'Pick the one that fits you best.',f:[{k:'role',t:'tiles',o:[['🤝','Business Developer (Sales)'],['📈','Ads Expert']]}]}];
if(r.startsWith('Business'))s.push({i:'⏱️',q:'How much sales experience do you have?',d:'Slide to your years of experience.',f:[{k:'exp',t:'range',vals:YR}]},{i:'🗣️',q:'What have you sold before?',d:'Services or products, deal size, and who you sold to.',f:[{k:'sold',t:'area',opt:1}]});
else if(r)s.push({i:'🧩',q:'Which platforms have you run ads on?',d:'Select all that apply.',f:[{k:'plat',t:'tiles',m:1,o:[['📘','Meta (Facebook & Instagram)'],['🔍','Google Ads'],['🎵','TikTok'],['👻','Snapchat'],['➕','Other']]}]},{i:'⏱️',q:'How much ads experience do you have?',d:'Slide to your years of experience.',f:[{k:'exp',t:'range',vals:YR}]},{i:'💸',q:'Largest monthly ad budget you have managed?',d:'Your best estimate is fine.',f:[{k:'bud',t:'range',vals:BI.concat(['₹20,00,000','₹50,00,000']),u:'per month'}]});
s.push({i:'👤',q:'Your contact details.',d:'So we can reach you.',f:[...who,{k:'link',t:'text',l:'LinkedIn or portfolio link',ic:'🔗',opt:1}]});return s};
let F,ans,idx;
function openF(t,fn,svc){F={t,fn};ans=svc?{svc:svc}:{};idx=0;M.hidden=false;document.body.style.overflow='hidden';draw()}
function shut(){M.hidden=true;document.body.style.overflow=''}
function draw(){const st=F.fn(ans),s=st[idx],ap=F.t==='apply';
let sp='';st.forEach((x,j)=>{if(j)sp+=`<i class='sl${j<=idx?' dn':''}'></i>`;sp+=`<b class='sc${j<idx?' dn':j===idx?' ac':''}'>${j<idx?'✓':x.i}</b>`});
let h=`<div class='stp'>${sp}</div><div class='mono'>${ap?(idx<6?'Question '+(idx+1)+' of 6':'Book your call'):'Step '+(idx+1)}</div><h3>${s.q}</h3><p class='sd'>${s.d||''}</p>`;
s.f.forEach(f=>{const v=ans[f.k]||'';if(f.l)h+=`<label>${f.l}${f.opt?' (optional)':''}</label>`;
if(f.t==='tiles')h+=`<div class='tls' data-k='${f.k}' data-m='${f.m?1:0}'>${f.o.map(([ic,o])=>`<button type='button' class='tl${v.split(', ').includes(o)?' on':''}' data-v='${esc(o)}'><span>${ic}</span>${o}</button>`).join('')}</div>`;
else if(f.t==='chips'||f.t==='mchips')h+=`<div class='chs' data-k='${f.k}' data-m='${f.t==='mchips'?1:0}'>${f.o.map(o=>`<button type='button' class='ch${v.split(', ').includes(o)?' on':''}' data-v='${esc(o)}'>${o}</button>`).join('')}</div>`;
else if(f.t==='date')h+=`<div class='dr' data-k='${f.k}' data-m='0'>${days().map(d=>{const q=d.split(', ');return `<button type='button' class='dy${v===d?' on':''}' data-v='${esc(d)}'><small>${q[0]}</small>${q[1]}</button>`}).join('')}</div>`;
else if(f.t==='range'){const u=f.u?' '+f.u:'',i=f.vals.findIndex(x=>x+u===v),j=i>=0?i:Math.floor((f.vals.length-1)/2);h+=`<div class='rg'><div class='rd' id='rd_${f.k}'>${f.vals[j]}</div><div class='ru'>${f.u||''}</div><input type='range' min='0' max='${f.vals.length-1}' step='1' value='${j}' data-k='${f.k}' style='--n:${f.vals.length-1}'><div class='mm'><span>${f.vals[0]}</span><span>${f.vals[f.vals.length-1]}</span></div></div>`}
else if(f.t==='area')h+=`<textarea rows='4' data-k='${f.k}'>${esc(v)}</textarea>`;
else h+=`<div class='ip'>${f.ic?`<span>${f.ic}</span>`:''}<input type='${f.t}' data-k='${f.k}' value='${esc(v)}' autocomplete='off'></div>`+(f.sug?`<div class='chs sg'>${f.sug.map(o=>`<button type='button' class='ch' data-s='${f.k}' data-v='${esc(o)}'>${o}</button>`).join('')}</div>`:'')});
h+=`<div class='err' id='er'></div><div class='nav2'>${idx?`<button class='btn' id='bk'>← Back</button>`:''}<button class='btn blue' id='nx'>${idx===st.length-1?(ap?'Request my call':'Submit application'):'Continue'}</button></div>`;MB.innerHTML=h;MB.parentNode.scrollTop=0}
function grab(s){const o={};let bad='';s.f.forEach(f=>{const el=MB.querySelector(`[data-k='${f.k}']`);let v;
if(f.t==='range')v=f.vals[+el.value]+(f.u?' '+f.u:'');
else if(['tiles','chips','mchips','date'].includes(f.t))v=[...el.querySelectorAll('.on')].map(b=>b.dataset.v).join(', ');
else v=el.value.trim();
o[f.k]=v;
if(!v&&!f.opt)bad='Please fill this in.';else if(v&&f.t==='email'&&!(v.includes('@')&&v.includes('.')))bad='Enter a valid email.';else if(v&&f.t==='tel'&&v.replace(/[^0-9]/g,'').length<7)bad='Enter a valid phone number.'});return[o,bad]}
function next(){const[o,bad]=grab(F.fn(ans)[idx]);if(bad){MB.querySelector('#er').textContent=bad;return}Object.assign(ans,o);if(idx<F.fn(ans).length-1){idx++;draw()}else fin()}
async function fin(){const st=F.fn(ans),p={type:F.t,currency:cur},L=[],ap=F.t==='apply';st.forEach(s=>s.f.forEach(f=>{p[f.k]=ans[f.k]||'';if(ans[f.k])L.push((f.l||s.q)+': '+ans[f.k])}));
MP.style.width='100%';MB.innerHTML='<h3>Sending…</h3>';let ok=false;
ok=await postLead(p);
const b=encodeURIComponent((ap?'New campaign request':'New job application')+'\n'+L.join('\n'));
const nm=esc((ans.name||'').split(' ')[0]);
const mk=(WA?`<a class='btn blue' target='_blank' rel='noopener' href='https://wa.me/${WA}?text=${b}'>Send on WhatsApp</a>`:'')+(MAIL?`<a class='btn' href='mailto:${MAIL}?subject=${encodeURIComponent(ap?'ADS HUB campaign request':'ADS HUB application')}&body=${b}'>Send by email</a>`:'');
MB.innerHTML=`<div class='ty'><div class='tick'>✓</div><h3>Thank you${nm?', '+nm:''}!</h3><p class='note'>${ok?(ap?'Your campaign request and call time are in. We’ll confirm your slot by WhatsApp or email shortly.':'Your application is in. We’ll reach out if there’s a fit.'):'You’re almost done. Tap below to send these details to our team, and we’ll confirm your slot.'}</p>${ok?'':`<div class='nav2'>${mk}</div>`}<div class='nav2'><button class='btn' id='dn'>Close</button></div></div>`}
MB.onclick=e=>{const b=e.target.closest('button');if(!b)return;
if(b.id==='dn')shut();else if(b.id==='bk'){idx--;draw()}else if(b.id==='nx')next();
else if(b.dataset.s){MB.querySelector(`input[data-k='${b.dataset.s}']`).value=b.dataset.v}
else if(b.classList.contains('tl')||b.classList.contains('ch')||b.classList.contains('dy')){const g=b.parentNode;if(g.dataset.m==='1')b.classList.toggle('on');else{g.querySelectorAll('.on').forEach(x=>x.classList.remove('on'));b.classList.add('on')}}};
MB.oninput=e=>{const t=e.target;if(t.type==='range'){const f=F.fn(ans)[idx].f.find(x=>x.k===t.dataset.k);$('#rd_'+f.k).textContent=f.vals[+t.value]}};
$('#mx').onclick=shut;M.onclick=e=>{if(e.target===M)shut()};addEventListener('keydown',e=>{if(e.key==='Escape')shut()});
document.querySelectorAll('a.cta').forEach(a=>a.onclick=e=>{e.preventDefault();openF('apply',applyFn,{meta:'Instagram & Facebook ads',google:'Google ads'}[a.dataset.svc])});
$('a.careers').onclick=e=>{e.preventDefault();openF('career',careerFn)};
if(location.hash==='#start')openF('apply',applyFn);else if(location.hash==='#careers')openF('career',careerFn);
