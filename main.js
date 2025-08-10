
document.getElementById('menuBtn')?.addEventListener('click', function(){
  var m = document.getElementById('navMenu');
  if(!m) return;
  m.style.display = (m.style.display === 'block') ? 'none' : 'block';
});
document.querySelectorAll('.faq-question').forEach(function(q){ q.addEventListener('click', function(){ var a=this.nextElementSibling; a.style.display = (a.style.display==='block')?'none':'block'; }); });
function drawDonut(){
  var cv = document.getElementById('donut');
  if(!cv) return;
  var ctx = cv.getContext('2d');
  ctx.clearRect(0,0,cv.width,cv.height);
  var data = [10,10,15,15,5,45];
  var colors = ['#3459b8','#2b4aa6','#6d9bf1','#d4af37','#9fb1d9','#274690'];
  var total = data.reduce((a,b)=>a+b,0);
  var start = -0.5*Math.PI;
  var cx = cv.width/2, cy = cv.height/2, r = Math.min(cx,cy)-10;
  for(var i=0;i<data.length;i++){
    var slice = data[i]/total*2*Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.fillStyle = colors[i%colors.length];
    ctx.arc(cx,cy,r,start,start+slice);
    ctx.fill();
    start += slice;
  }
  ctx.beginPath();
  ctx.fillStyle = '#f0f5fb';
  ctx.arc(cx,cy,r*0.6,0,2*Math.PI);
  ctx.fill();
}
window.addEventListener('load', drawDonut);
