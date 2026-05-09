"use strict";var V=function(t,a){return function(){return a||t((a={exports:{}}).exports,a),a.exports}};var T=V(function(Z,R){
var S=require('@stdlib/array-base-broadcast-array/dist');function W(t,a,U){var b,q,A,g,l,B,C,D,E,x,s,u,i,e,o,z,f,n,y,c,m,j,k,w,F,G,H,I,J,K,d,r,L,M,v,N,O,P,Q;if(d=a[3],x=d[2],s=d[1],u=d[0],!(x<=0||s<=0||u<=0))for(v=S(t[0],a[0],d),N=v.data,r=v.strides,b=r[2],q=r[1],A=r[0],v=S(t[1],a[1],d),O=v.data,r=v.strides,g=r[2],l=r[1],B=r[0],v=S(t[2],a[2],d),P=v.data,r=v.strides,C=r[2],D=r[1],E=r[0],Q=t[3],n=0,m=0,w=0,o=0;o<u;o++){for(f=0,c=0,k=0,G=N[n],I=O[m],K=P[w],M=Q[o],e=0;e<s;e++){for(z=0,y=0,j=0,F=G[f],H=I[c],J=K[k],L=M[e],i=0;i<x;i++)L[i]=U(F[z],H[y],J[j]),z+=b,y+=g,j+=C;f+=q,c+=l,k+=D}n+=A,m+=B,w+=E}}R.exports=W
});var X=T();module.exports=X;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
