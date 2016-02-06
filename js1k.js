// p01 style glsl function name reduction
with (g) {
  for(k in g) g[k.match(/^..|[A-Z]|1f$/g).join('')] = g[k];

  S=0,a.style.cssText=a.width=a.height=s=512;

  for (p = crP(t=2); t; coS(S), (atS(p, S)  || console.log( getShaderInfoLog(S) ) )) {
      shS(S = crS(35634 - t), --t ?
      'include "fragment.glsl"'
      : 'attribute vec4 p;void main(){gl_Position=p;}');
  }
  D=function(){requestAnimationFrame(D);drA(4,un1f(geUL(p,"T"),t+=.005),3)}
  D(veAP(enVAA(biB(k=34962,crB())),2,5126,liP(p),usP(p),buD(k, new Float32Array([1,1,1, -3, -3, 1]), k+82)));
}
