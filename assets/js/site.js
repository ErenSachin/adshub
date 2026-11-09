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
