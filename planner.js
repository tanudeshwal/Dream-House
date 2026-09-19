const form=document.getElementById('plannerForm');
form.addEventListener('submit',function(e){
 e.preventDefault();
 const length=Number(document.getElementById('length').value);
 const width=Number(document.getElementById('width').value);
 const budget=Number(document.getElementById('budget').value);
 const family=Number(document.getElementById('family').value);
 const bedrooms=Number(document.getElementById('bedrooms').value);
 const bathrooms=Number(document.getElementById('bathrooms').value);
 const type=document.getElementById('houseType').value;
 const location=document.getElementById('location').value || 'Not specified';
 const area=length*width;
 const rates={foundation:.14,structure:.20,flooring:.08,doors:.07,electrical:.05,plumbing:.05,paint:.05,kitchen:.06,labour:.18,other:.12};
 const names={foundation:'Foundation',structure:'Walls & Structure',flooring:'Flooring',doors:'Doors & Windows',electrical:'Electrical',plumbing:'Plumbing',paint:'Paint',kitchen:'Kitchen',labour:'Labour',other:'Other & Miscellaneous'};
 let rows='';
 Object.keys(rates).forEach(k=>rows+=`<div class="cost-row"><span>${names[k]}</span><strong>₹${Math.round(budget*rates[k]).toLocaleString('en-IN')}</strong></div>`);
 const roomText=bedrooms===1?'1BHK':bedrooms===2?'2BHK':'3BHK';
 const recommendation=area<700?'Compact plan recommended':area<1100?'Efficient family plan recommended':'Spacious family plan recommended';
 let planImage='../assets/house-plan-1.png';
 let planName='₹5 Lakh Budget Plan';
 if(budget>=700000 && budget<1000000){
   planImage='../assets/house-plan-2.png';
   planName='₹7 Lakh Budget Plan';
 } else if(budget>=1000000){
   planImage='../assets/house-plan-3.png';
   planName='₹10 Lakh Budget Plan';
 }
 document.getElementById('result').innerHTML=`
 <div class="result-card p-4 p-md-5">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
  <div><h2 class="fw-bold mb-1">Your ${roomText} Dream House</h2><p class="text-muted mb-0">${recommendation} • ${type}</p></div>
  <span class="badge text-bg-success fs-6">Preliminary Estimate</span>
 </div>
 <div class="row g-3 mb-4">
  <div class="col-md-3"><div class="stat"><small>Plot Area</small><h4>${area.toLocaleString()} sq.ft.</h4></div></div>
  <div class="col-md-3"><div class="stat"><small>Budget</small><h4>₹${budget.toLocaleString('en-IN')}</h4></div></div>
  <div class="col-md-3"><div class="stat"><small>Family</small><h4>${family} members</h4></div></div>
  <div class="col-md-3"><div class="stat"><small>Location</small><h5>${location}</h5></div></div>
 </div>
 <div class="row g-4">
  <div class="col-lg-7">
   <h4 class="fw-bold mb-3">Suggested House Map</h4>
   <div class="plan-preview">
    <img src="${planImage}" alt="${planName}">
   </div>
   <div class="alert alert-success mt-3 mb-0 py-2">
    <strong>Selected plan:</strong> ${planName}
   </div>
   <p class="plan-caption mt-2 mb-0"><strong>${planName}</strong> — sample reference selected from the project plan library based on plot area.</p>
   <p class="small text-muted mt-2">This is a sample/reference layout, not a construction drawing.</p>
  </div>
  <div class="col-lg-5">
   <h4 class="fw-bold mb-3">Approximate Cost</h4>
   ${rows}
   <div class="cost-row total"><span>Estimated Total</span><strong>₹${budget.toLocaleString('en-IN')}</strong></div>
   <h5 class="fw-bold mt-4">Essential Materials</h5>
   <p class="mb-1">🧱 Bricks/blocks • Cement • Sand • Steel</p>
   <p class="mb-1">🚿 Pipes • Plumbing fittings • Bathroom fittings</p>
   <p class="mb-1">💡 Wires • Switches • Lights • Fans</p>
   <p class="mb-1">🚪 Doors • Windows • Floor tiles • Paint</p>
  </div>
 </div>
 <hr class="my-4">
 <div class="row g-3">
  <div class="col-md-4"><div class="info-card"><h5>🛋️ Living</h5><p class="mb-0">Basic lights, fan, sofa and curtains.</p></div></div>
  <div class="col-md-4"><div class="info-card"><h5>🛏️ Bedroom</h5><p class="mb-0">Bed, wardrobe, fan and lighting.</p></div></div>
  <div class="col-md-4"><div class="info-card"><h5>🍳 Kitchen</h5><p class="mb-0">Platform, sink, storage and exhaust.</p></div></div>
 </div>
 <div class="alert alert-warning mt-4 mb-0"><strong>Important:</strong> Actual construction cost and quantities depend on local rates, soil, structure, labour, materials, design and approvals. Verify everything with a qualified architect/engineer before construction.</div>
 </div>`;
 window.scrollTo({top:document.getElementById('result').offsetTop-70,behavior:'smooth'});
});