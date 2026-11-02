(()=>{
const f=$('#cf'),res=$('#res');
const B=['Under ₹50,000','₹50,000 – ₹1,50,000','₹1,50,000 – ₹3,00,000','₹3,00,000 – ₹10,00,000','₹10,00,000+','Not sure yet'];
$('#f-budget').innerHTML='<option value="">Select a range</option>'+B.map(b=>`<option>${esc(b)}</option>`).join('');
const ci=[];
if(PHONE)ci.push(`<a href="tel:${esc(PHONE)}">📞 ${esc(PHONE)}</a>`);
if(MAIL)ci.push(`<a href="mailto:${esc(MAIL)}">✉️ ${esc(MAIL)}</a>`);
if(ADDRESS)ci.push(`<span>📍 ${esc(ADDRESS)}</span>`);
if(WA)ci.push(`<a class="btn blue" target="_blank" rel="noopener" href="https://wa.me/${esc(WA)}?text=${encodeURIComponent('Hi ADS HUB, I would like to discuss advertising for my business.')}">Chat on WhatsApp</a>`);
$('#ci-list').innerHTML=ci.length?ci.join(''):'<span>Use the form and we will reply to you.</span>';
const M2={name:'Please enter your full name.',email:'Please enter a valid email address.',phone:'Please enter a valid phone or WhatsApp number.',service:'Please choose a service.',budget:'Please choose a budget range.',message:'Please tell us about your requirements.'};
function val(){let ok=true;const d={};
for(const k of ['name','email','phone','business','service','budget','message']){const el=f.elements[k];d[k]=el.value.trim();let m='';
if(k!=='business'){if(!d[k])m=M2[k];
else if(k==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d[k]))m=M2.email;
else if(k==='phone'&&(!/^[+]?[0-9\s()-]+$/.test(d[k])||d[k].replace(/[^0-9]/g,'').length<7))m=M2.phone}
f.querySelector(`[data-e="${k}"]`).textContent=m;el.setAttribute('aria-invalid',m?'true':'false');if(m)ok=false}
return[ok,d]}
f.addEventListener('submit',async e=>{e.preventDefault();const[ok,d]=val();
if(!ok){res.className='res bad';res.textContent='Please fix the highlighted fields.';return}
const btn=f.querySelector('button[type=submit]');btn.disabled=true;btn.textContent='Sending…';
let sent=false;
sent=await postLead({type:'contact',currency:cur,...d,sent:new Date().toISOString()});
btn.disabled=false;btn.textContent='Send enquiry';
const t=encodeURIComponent(`New enquiry\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nBusiness: ${d.business||'-'}\nService: ${d.service}\nBudget: ${d.budget}\nMessage: ${d.message}`);
if(sent){res.className='res good';res.innerHTML='<b>Thank you!</b> Your enquiry has been received. We will get back to you shortly.';f.reset()}
else if(WA||MAIL){res.className='res warn';res.innerHTML='<b>Your enquiry has not been sent yet.</b> Please send it using one of the options below so it reaches our team.<div class="nav2">'+(WA?`<a class="btn blue" target="_blank" rel="noopener" href="https://wa.me/${esc(WA)}?text=${t}">Send on WhatsApp</a>`:'')+(MAIL?`<a class="btn" href="mailto:${esc(MAIL)}?subject=${encodeURIComponent('ADS HUB enquiry')}&body=${t}">Send by email</a>`:'')+'</div>'}
else{res.className='res bad';res.textContent='We could not send your enquiry right now. Please try again later.'}
res.scrollIntoView({behavior:'smooth',block:'nearest'})});
})();