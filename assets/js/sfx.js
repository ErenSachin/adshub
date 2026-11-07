/* 8-bit sound effects, synthesized in the browser (no audio files). Plays only after user actions. */
(()=>{
let ctx,on=true;try{on=localStorage.getItem('sfx')!=='off'}catch(e){}
const AC=window.AudioContext||window.webkitAudioContext;
function ac(){if(!AC)return null;if(!ctx)ctx=new AC();if(ctx.state==='suspended')ctx.resume();return ctx}
function tone(f,t0,d,type,v,to){const a=on&&ac();if(!a)return;const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+t0;
o.type=type||'square';o.frequency.setValueAtTime(f,t);if(to)o.frequency.exponentialRampToValueAtTime(to,t+d);
g.gain.setValueAtTime(v||.05,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.02)}
const seq=(fs,gap,d,type,v)=>fs.forEach((f,i)=>tone(f,i*gap,d,type,v));
const sfx=window.sfx={
click:()=>tone(660,0,.07),
select:()=>seq([523,784],.06,.08),
step:()=>tone(110+Math.random()*40,0,.05,'triangle',.08),
open:()=>seq([523,659,784,1047],.06,.1),
close:()=>seq([440,294],.07,.1),
coin:()=>{tone(988,0,.07);tone(1319,.07,.28)},
win:()=>seq([523,659,784,659,784,1047],.09,.15,'square',.055),
err:()=>tone(160,0,.22,'sawtooth',.05,80),
door:()=>{tone(220,0,.3,'sawtooth',.04,90);tone(330,.2,.12)}};
const b=document.createElement('button');b.className='sfxb';b.type='button';
function paint(){b.textContent=on?'♪':'×';b.setAttribute('aria-label',on?'Sound on, click to mute':'Sound off, click to unmute');b.setAttribute('aria-pressed',on?'true':'false')}
b.onclick=e=>{e.stopPropagation();on=!on;try{localStorage.setItem('sfx',on?'on':'off')}catch(x){}paint();if(on)sfx.coin()};
paint();document.body.appendChild(b);
document.addEventListener('click',e=>{if(e.target.closest('.sfxb'))return;const t=e.target.closest('.hs,.tl,.ch,.dy,.tabs button,.cur button,button,a.btn,.pxb,.links a');if(!t)return;
if(t.matches('#px,#mx,.x'))return;
if(t.matches('.hs,.tl,.ch,.dy,.tabs button,.cur button'))sfx.select();else sfx.click()},true);
})();
