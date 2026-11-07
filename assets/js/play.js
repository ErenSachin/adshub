(()=>{
const cv=$('#cv'),g=cv.getContext('2d'),W=320,H=180;g.imageSmoothingEnabled=false;
const Q=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x,y,w,h)};
function draw(){const n=eff()==='dark';
const C=n?{wall:'#1d2b4d',w2:'#17233f',ceil:'#101a31',fl:'#16202f',f2:'#101927',base:'#0c131f',sky:'#0b1230',wd:'#6b4a35',wd2:'#4f3626',wdl:'#85604a',ink:'#0a0f1a'}:{wall:'#8fdad5',w2:'#72c4bf',ceil:'#5aa9a9',fl:'#3a7f87',f2:'#32717a',base:'#1f4f57',sky:'#aee6f2',wd:'#c98a5b',wd2:'#a86d43',wdl:'#e0a876',ink:'#13232b'};
Q(0,0,W,H,C.wall);Q(0,0,W,24,C.ceil);Q(0,98,W,32,C.w2);Q(0,96,W,2,C.ink);for(let x=0;x<W;x+=40)Q(x,98,1,32,C.wall);
Q(0,130,W,50,C.fl);for(let x=0;x<W;x+=24)Q(x,130,1,50,C.f2);Q(0,126,W,4,C.base);
// window
Q(98,22,54,50,'#e9f6f5');Q(101,25,48,44,C.sky);
[[103,50,10,19],[115,44,9,25],[126,52,8,17],[136,46,11,23]].forEach(([x,y,w,h])=>{Q(x,y,w,h,n?'#18244a':'#6faab3');for(let yy=y+3;yy<y+h-2;yy+=5)for(let xx=x+2;xx<x+w-1;xx+=4)Q(xx,yy,2,2,n?((xx+yy)%3?'#ffd96b':'#2b3a66'):'#d6f1f4')});
if(n){Q(138,30,7,7,'#f5f2d0');Q(141,30,4,6,C.sky);[[108,30],[120,36],[130,28],[112,40]].forEach(([x,y])=>Q(x,y,1,1,'#fff'))}else Q(136,30,8,8,'#ffd34d');
Q(124,25,2,44,'#e9f6f5');Q(101,46,48,2,'#e9f6f5');
// pendant lamps
[[60],[170],[250]].forEach(([x])=>{Q(x,24,2,10,C.ink);Q(x-8,34,18,5,'#ffd34d')});
// whiteboard
Q(12,26,76,60,'#cfd9d9');Q(14,28,72,56,'#fff');Q(18,32,30,3,'#e8514a');Q(60,32,22,2,'#bbb');Q(60,37,16,2,'#bbb');
[[20,70,8,10,'#2f9e9a'],[32,62,8,18,'#2f9e9a'],[44,54,8,26,'#2f9e9a'],[56,46,8,34,'#e8514a'],[68,40,8,40,'#e8514a']].forEach(a=>Q(...a));Q(18,80,64,1,'#999');Q(30,86,28,2,'#999');
// poster
Q(184,36,18,26,'#fff');Q(186,38,14,5,'#e8514a');Q(186,46,14,2,'#bbb');Q(186,50,10,2,'#bbb');Q(186,54,12,2,'#bbb');
// phone
Q(158,50,18,26,'#26323a');Q(160,52,14,18,'#d8d2c4');Q(163,55,8,8,'#9a948a');Q(166,58,2,2,'#26323a');Q(156,48,22,5,'#e8514a');Q(162,72,10,2,'#444');
// mailbox
Q(208,54,26,24,'#c0463b');Q(210,52,22,3,'#c0463b');Q(214,62,14,3,'#1b1f26');Q(216,59,10,4,'#fff');Q(232,56,3,12,'#ffd34d');Q(214,78,3,4,C.ink);Q(226,78,3,4,C.ink);
// door
Q(260,34,48,96,C.ink);Q(263,37,42,93,C.wd);Q(266,40,36,30,C.wd2);Q(270,44,28,22,'#bfe9ee');Q(274,76,20,7,'#e8514a');Q(276,78,16,1,'#fff');Q(296,92,3,4,'#ffd34d');
// plant
Q(246,114,12,12,'#b5523b');Q(244,98,16,16,'#2f9e5a');Q(248,92,8,8,'#3fbf70');
// shadows
g.globalAlpha=.25;Q(96,130,96,3,'#000');Q(184,130,62,3,'#000');Q(2,130,68,3,'#000');g.globalAlpha=1;
// centre desk + monitor
Q(98,108,90,4,C.wdl);Q(100,112,86,16,C.wd);Q(150,114,32,12,C.wd2);Q(164,119,4,2,'#ffd34d');
Q(116,80,40,28,'#1b1f26');Q(118,82,36,22,n?'#0d2a3a':'#0f4c5c');Q(120,84,16,2,'#7ef0d6');Q(120,88,26,2,'#e8514a');Q(120,92,20,2,'#7ef0d6');Q(120,96,24,2,'#7ef0d6');Q(132,104,8,4,'#1b1f26');Q(122,106,28,3,'#cfd6d6');Q(164,102,6,6,'#fff');Q(170,103,2,3,'#fff');
// counter + register
Q(186,108,58,4,C.wdl);Q(188,112,54,16,C.wd);Q(196,94,26,14,'#cfd6d6');Q(199,96,13,6,'#202833');Q(201,97,9,1,'#7ef0d6');Q(199,103,20,3,'#8a939a');Q(226,103,8,5,'#ffd34d');Q(228,101,4,2,'#ffd34d');
// founder desk
Q(4,108,64,4,C.wdl);Q(6,112,60,16,C.wd);Q(10,98,22,10,'#2a3139');Q(12,100,18,6,'#0f4c5c');Q(44,90,18,18,'#ffd34d');Q(46,92,14,14,'#ff8a73');Q(51,94,4,4,'#f3c9a0');Q(48,99,10,6,'#555');Q(36,102,5,6,'#fff');
if(n){g.globalAlpha=.13;Q(70,30,130,100,'#ffd27a');g.globalAlpha=1}}
const HS=[{k:'board',l:'RESULTS',a:[12,26,76,60],x:50},{k:'pc',l:'SERVICES',a:[98,78,92,50],x:138},{k:'phone',l:'CONTACT',a:[156,48,22,30],x:167},{k:'mail',l:'LEADS',a:[206,50,32,34],x:222},{k:'reg',l:'PRICING',a:[190,92,54,36],x:218},{k:'door',l:'START',a:[260,34,48,96],x:276},{k:'about',l:'ABOUT',a:[4,88,66,40],x:36}];
const sc=$('#scene'),me=$('#me');
HS.forEach(h=>{const b=document.createElement('button');b.className='hs';b.dataset.k=h.k;b.setAttribute('aria-label',h.l);b.style.cssText=`left:${h.a[0]/W*100}%;top:${h.a[1]/H*100}%;width:${h.a[2]/W*100}%;height:${h.a[3]/H*100}%`;b.innerHTML=`<i>${h.l}</i>`;b.onclick=()=>go(h.k,b);sc.appendChild(b)});
$('#leg').innerHTML=HS.map(h=>`<button class="pxb" data-k="${h.k}">${h.l}</button>`).join('');$('#leg').onclick=e=>{const b=e.target.closest('button');if(b)go(b.dataset.k,b)};
// character
function spr(f){const c=document.createElement('canvas');c.width=14;c.height=30;const x=c.getContext('2d'),r=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h)};
r(3,0,8,4,'#171717');r(2,2,1,3,'#171717');r(3,4,8,7,'#e7b48c');r(3,6,8,2,'#111');r(5,9,4,1,'#9c5b44');r(2,11,10,10,'#7b7b86');r(0,12,2,8,'#7b7b86');r(12,12,2,8,'#7b7b86');r(0,20,2,2,'#e7b48c');r(12,20,2,2,'#e7b48c');
if(f){r(3,21,3,7,'#2c3556');r(8,21,3,9,'#2c3556');r(8,29,4,1,'#111')}else{r(3,21,3,9,'#2c3556');r(8,21,3,7,'#2c3556');r(2,29,4,1,'#111')}return c.toDataURL()}
const F=[spr(0),spr(1)];let mx=236,busy=false,walk,fr=0;me.src=F[0];me.style.left=(mx/W*100)+'%';me.style.top=((166-30)/H*100)+'%';
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function go(k,btn){if(busy)return;const h=HS.find(x=>x.k===k),dx=h.x-mx,t=reduce?0:Math.min(2200,Math.abs(dx)*11);busy=true;
me.style.transition=`left ${t}ms linear`;me.style.transform=`translateX(-50%) scaleX(${dx<0?-1:1})`;me.style.left=(h.x/W*100)+'%';mx=h.x;
if(t)walk=setInterval(()=>{fr=1-fr;me.src=F[fr];window.sfx&&sfx.step()},140);
setTimeout(()=>{clearInterval(walk);me.src=F[0];busy=false;openW(k,btn)},t+60)}
// dialogs
const PW=$('#pw');let last,key;const L=[['Rohit S.','2BHK site visit · Sat after 3pm'],['Priya K.','Hair colour booking · This week'],['Amit V.','Bulk order enquiry · Today'],['Neha R.','Free consultation · Mon morning']];let li=0;
const lnk=(h,t,c)=>`<a class="pxb ${c||''}" href="${h}">${t}</a>`;
const CT={
board:()=>({t:'RESULTS.BOARD',h:`<p>Real campaign results, as reported by Meta Ads Manager and Google Ads.</p><div class="g2"><div><b>3,364</b>lead form submissions (Meta)</div><div><b>16.47x</b>ROAS, 238 purchases (Meta)</div><div><b>21.47x</b>ROAS, 244 purchases (Meta)</div><div><b>4,090</b>clicks (Google Search)</div></div><p>These are examples from specific campaigns, not promises. Results depend on budget, market, offer and follow-up.</p>${lnk('case-studies.html','READ THE CASE STUDIES','k')}`}),
pc:()=>({t:'SERVICES.EXE',h:`<p>What we run for you:</p><div class="chs2">${['Meta Ads','Google Search Ads','Google Display Ads','Google App Install','Lead Generation','E-commerce Ads','Retargeting','Tracking & Analytics','Landing Page Optimization'].map(s=>`<span>${s}</span>`).join('')}</div><p>20 new ad creatives every week. Every ad is shared for your approval before it goes live.</p>${lnk('index.html#services','SEE ALL SERVICES','k')}`}),
phone:()=>({t:'CONTACT.TEL',h:`<p>Tell us about your business and what you want to achieve. We will get back to you with the right next step.</p>${lnk('contact.html','CONTACT PAGE','k')}${WA?`<a class="pxb" target="_blank" rel="noopener" href="https://wa.me/${esc(WA)}">WHATSAPP</a>`:''}${MAIL?`<a class="pxb" href="mailto:${esc(MAIL)}">EMAIL</a>`:''}${PHONE?`<a class="pxb" href="tel:${esc(PHONE)}">CALL</a>`:''}`}),
mail:()=>({t:'LEAD.INBOX',h:`<span class="demo">DEMO DATA</span><p>When someone fills the form on your ad, you get a text and an email as soon as they submit.</p><div id="lds"></div><button class="pxb" data-act="sim">SIMULATE A NEW LEAD</button>`}),
reg:()=>{const p=P[cur];return{t:'PRICING.TXT',h:`<div class="cur2"><button class="pxb ${cur==='in'?'on':''}" data-c="in">INDIA ₹</button><button class="pxb ${cur==='intl'?'on':''}" data-c="intl">INTERNATIONAL $</button></div><div class="g2"><div><b>${p.meta}</b>Meta ads management /month${p.gst}</div><div><b>${p.google}</b>Google ads management /month${p.gst}</div></div><p>This is our management fee. Your ad budget is paid separately. Final pricing is negotiable according to your project needs. Cancel anytime.</p>${lnk('index.html#pricing','FULL PRICING','k')}`}},
door:()=>({t:'START.DOOR',h:`<p>Answer six quick questions, then book a time. No access to your existing ad account required.</p><button class="pxb k" data-act="start">START MY CAMPAIGN</button>`}),
about:()=>({t:'ABOUT.TXT',h:`<img class="pf" src="assets/images/founder.jpg" alt="Sachin Tiwari, Founder of ADS HUB"><p><b>Sachin Tiwari</b>, Founder of ADS HUB. ADS HUB is a performance-driven digital marketing agency, powered by SS Enterprises.</p><div class="chs2" style="clear:both">${['Performance Marketing','Meta Advertising','Google Advertising','Lead Generation','Campaign Strategy','Conversion Optimization','E-commerce Marketing'].map(s=>`<span>${s}</span>`).join('')}</div>${lnk('index.html#about','MORE ABOUT US','k')}`})};
function openW(k,btn){window.sfx&&sfx.open();const c=CT[k]();key=k;$('#pt').textContent=c.t;$('#pb').innerHTML=c.h;PW.hidden=false;document.body.style.overflow='hidden';last=btn;$('#px').focus()}
function shut(){if(!PW.hidden&&window.sfx)sfx.close();PW.hidden=true;document.body.style.overflow='';if(last)last.focus()}
$('#px').onclick=shut;PW.onclick=e=>{if(e.target===PW)shut()};addEventListener('keydown',e=>{if(e.key==='Escape'&&!PW.hidden)shut()});
$('#pb').onclick=e=>{if(e.target.closest('a'))shut();const b=e.target.closest('button');if(!b)return;if(b.dataset.act==='start'){window.sfx&&sfx.door();shut();if(typeof openF==='function')openF('apply',applyFn);else location.href='index.html#start';return}
if(b.dataset.c){cur=b.dataset.c;try{localStorage.setItem('cur',cur)}catch(x){}const c=CT[key]();$('#pb').innerHTML=c.h;price()}
else if(b.dataset.act==='sim'){window.sfx&&sfx.coin();const d=L[li++%L.length];$('#lds').insertAdjacentHTML('afterbegin',`<div class="lead2">📱 <b>Text:</b> New lead: ${d[0]}<br>${d[1]}</div><div class="lead2">✉️ <b>Email:</b> New lead: ${d[0]}, with answers and a one-tap reply.</div>`)}};
new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});matchMedia('(prefers-color-scheme:dark)').addEventListener('change',draw);
draw();
})();
