"use strict";var V=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(x){throw (a=0, x)}};};var U=V(function(Z,T){
var b=require('@stdlib/array-base-broadcast-array/dist');function W(t,a,x){var q,A,g,l,B,C,D,E,F,s,u,z,i,e,o,f,n,y,c,m,j,k,w,S,G,H,I,J,K,L,d,r,M,N,v,O,P,Q,R;if(d=a[3],s=d[2],u=d[1],z=d[0],!(s<=0||u<=0||z<=0))for(v=b(t[0],a[0],d),O=v.data,r=v.strides,q=r[2],A=r[1],g=r[0],v=b(t[1],a[1],d),P=v.data,r=v.strides,l=r[2],B=r[1],C=r[0],v=b(t[2],a[2],d),Q=v.data,r=v.strides,D=r[2],E=r[1],F=r[0],R=t[3],y=0,j=0,S=0,o=0;o<z;o++){for(n=0,m=0,w=0,H=O[y],J=P[j],L=Q[S],N=R[o],e=0;e<u;e++){for(f=0,c=0,k=0,G=H[n],I=J[m],K=L[w],M=N[e],i=0;i<s;i++)M[i]=x(G[f],I[c],K[k]),f+=q,c+=l,k+=D;n+=A,m+=B,w+=E}y+=g,j+=C,S+=F}}T.exports=W
});var X=U();module.exports=X;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
