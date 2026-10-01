document.addEventListener('DOMContentLoaded',function(){
  var menuButton=document.querySelector('.c0__module__-components-SiteShell_mobileMenuToggle');
  var nav=document.getElementById('primary-navigation');
  if(menuButton && nav){
    menuButton.addEventListener('click',function(){
      var open=nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded',String(open));
      menuButton.textContent=open?'Close':'Menu';
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded','false');
        menuButton.textContent='Menu';
      });
    });
  }

  var f=document.getElementById('business-inquiry-form');
  if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var fields=Array.from(f.querySelectorAll('input,textarea'));
    var labels=['Name','Company','Email','Commodity / Requirement','Specification','Quantity','Market / Destination','Message'];
    var body=fields.map(function(el,i){return labels[i]+': '+(el.value||'');}).join('\n');
    var subject='Upgrade Bahrain — Business Inquiry';
    window.location.href='mailto:info@upgradebh.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
});