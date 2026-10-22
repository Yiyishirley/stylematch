
(function(){
var H=document.documentElement;H.classList.add('site','nocall');
var cfg=window.PROTO||{};
function go(p){location.href=p+'.html';}
var cands=[].slice.call(document.querySelectorAll('.btn,.chip,.iconbtn,.nav>div,.input,.card,div[style*="dashed"]'));
(cfg.hot||[]).forEach(function(h){
  var txt=h[0],tgt=h[1],el=null;
  if(txt.charAt(0)=='@'){var ic=document.querySelectorAll('.ti-'+txt.slice(1));if(ic.length){el=ic[0].closest('.iconbtn')||ic[0].parentElement;}}
  else{
    var best=null;cands.forEach(function(c){var t=(c.innerText||'').trim();if(t.indexOf(txt)===0||t===txt){if(!best||c.innerText.length<best.innerText.length)best=c;}});
    if(!best){[].slice.call(document.querySelectorAll('span,b,div')).forEach(function(c){if((c.innerText||'').trim()===txt&&!best)best=c;});}
    el=best;
  }
  if(el){el.classList.add('hot');el.addEventListener('click',function(e){e.stopPropagation();go(tgt);});}
});
var cb=document.getElementById('callouts');if(cb)cb.addEventListener('change',function(){H.classList.toggle('nocall',!cb.checked);});
var hb=document.getElementById('hints');if(hb)hb.addEventListener('change',function(){H.classList.toggle('hints',hb.checked);});
})();
