precision highp float;
uniform float T;
mat2 r(float p){
  return mat2(cos(p),-sin(p),sin(p),cos(p));
}
float n(vec2 p){
  return sin(1.5*p.x)*sin(1.5*p.y);
}
const mat2 m2 = mat2(0.8,-0.6,0.6,0.8);
float b(vec2 p){
  float f=0.;
  f+=0.5*n(p);
  p=m2*p*2.02;
  f+=.25*n(p);
  p=m2*p*2.03;
  f+=.125*n(p);
  p=m2*p*2.01;
  f+=.0625*n(p);
  return f/.9375;
}
float c(in vec2 d) {
    return b(d+4.*vec2(b(d),b(d+vec2(5.2,1.3))));
}
void main(void) {
  vec2 p = 2.*gl_FragCoord.xy/512.-1.;
  p.x -=.3*cos(T)*(1.-length(p));
  p.y -=.3*sin(T)*(1.-length(p));
  p*=r(sin(T*.1+c(p)*.04)/length(p*.1)) + r(cos((T*2.)*.1+c(p)*.04)/length(p*.1));
  p += c(p)*.3;
  vec3 f = vec3(1);
  f -= vec3(.6,0,0)*length(p+.5*sin(T));
  f -= vec3(0,.6,0)*length(p+vec2(-.5,.5)*sin(T));
  f -= vec3(0,0,.6)*length(p+vec2(0,-.5*sin(T)));
  gl_FragColor = vec4(vec3(f),1.);
}
