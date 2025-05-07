"use strict";(self.webpackChunkwonder=self.webpackChunkwonder||[]).push([[392],{86698:function(u,a,t){var m;t.r(a),t.d(a,{demos:function(){return r}});var d=t(90228),p=t.n(d),x=t(87999),c=t.n(x),_=t(75271),v=t(55626),h=t(28020),r={"src-canvas-demo-demo":{component:_.memo(_.lazy(function(){return Promise.all([t.e(847),t.e(433)]).then(t.bind(t,79805))})),asset:{type:"BLOCK",id:"src-canvas-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(23583).Z},react:{type:"NPM",value:"18.3.1"},"./utils.ts":{type:"FILE",value:t(23514).Z}},entry:"index.tsx"},context:{"./utils.ts":h,react:m||(m=t.t(_,2)),"/Users/chenwande/project/wonder/src/canvas/utils.ts":h},renderOpts:{compile:function(){var e=c()(p()().mark(function n(){var s,l=arguments;return p()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.e(147).then(t.bind(t,14147));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,l));case 3:case"end":return o.stop()}},n)}));function i(){return e.apply(this,arguments)}return i}()}}}},28020:function(u,a,t){t.r(a),t.d(a,{Graph:function(){return v},Point:function(){return _},getRandom:function(){return c}});var m=t(25298),d=t.n(m),p=t(17069),x=t.n(p),c=function(r,e){return Math.random()*(e-r)+r},_=function(){function h(r,e){d()(this,h),this.ctx=r,this.canvas=e,this.r=4,this.x=c(0,e.width-this.r/2),this.y=c(0,e.height-this.r/2),this.xSpeed=c(-50,50),this.ySpeed=c(-50,50),this.lastDrawTime=null}return x()(h,[{key:"draw",value:function(){if(!this.lastDrawTime)this.lastDrawTime=Date.now();else{var e=Date.now(),i=(e-this.lastDrawTime)/1e3,n=this.x+this.xSpeed*i,s=this.y+this.ySpeed*i;n<0?(n=0,this.xSpeed=-this.xSpeed):n>this.canvas.width-this.r/2&&(n=this.canvas.width-this.r/2,this.xSpeed=-this.xSpeed),s<0?(s=0,this.ySpeed=-this.ySpeed):s>this.canvas.height-this.r/2&&(s=this.canvas.height-this.r/2,this.ySpeed=-this.ySpeed),this.x=n,this.y=s,this.lastDrawTime=e}this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2),this.ctx.fillStyle="rgb(200, 200, 200)",this.ctx.fill()}}]),h}(),v=function(){function h(r,e){var i=this,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:40,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:300;d()(this,h),this.canvas=e,this.ctx=r,this.points=Array(n).fill(0).map(function(){return new _(i.ctx,i.canvas)}),this.maxDistance=s,this.draw()}return x()(h,[{key:"draw",value:function(){var e=this;requestAnimationFrame(function(){e.draw()}),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var i=0;i<this.points.length;i++){var n=this.points[i];n.draw();for(var s=i+1;s<this.points.length;s++){var l=this.points[s],f=Math.sqrt(Math.pow(n.x-l.x,2)+Math.pow(n.y-l.y,2)),o=1-f/this.maxDistance;this.ctx.beginPath(),this.ctx.moveTo(n.x,n.y),this.ctx.lineTo(l.x,l.y),this.ctx.strokeStyle="rgba(200, 200, 200, ".concat(o,")"),this.ctx.stroke()}}}}]),h}()},13006:function(u,a,t){t.r(a),t.d(a,{texts:function(){return d}});var m=t(55626);const d=[]},23583:function(u,a){a.Z=`import React, { useEffect } from 'react';
import { Graph } from './utils';

const Demo = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas-demo') as HTMLCanvasElement;
    canvas.width = devicePixelRatio * canvas.clientWidth;
    canvas.height = devicePixelRatio * 500;
    const ctx = canvas.getContext('2d')!;

    new Graph(ctx, canvas);
  }, []);

  return (
    <canvas
      id="canvas-demo"
      style={{ width: '100%', height: '100%', backgroundColor: '#222' }}
    ></canvas>
  );
};

export default Demo;
`},23514:function(u,a){a.Z=`// @ts-nocheck
export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

export class Point {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.r = 4; // \u5706\u7684\u534A\u5F84
    this.x = getRandom(0, canvas.width - this.r / 2); // \u5706\u5FC3\u7684x\u5750\u6807
    this.y = getRandom(0, canvas.height - this.r / 2); // \u5706\u5FC3\u7684y\u5750\u6807
    this.xSpeed = getRandom(-50, 50); // \u5706\u5FC3x\u8F74\u7684\u901F\u5EA6
    this.ySpeed = getRandom(-50, 50); // \u5706\u5FC3x\u8F74\u7684\u901F\u5EA6
    this.lastDrawTime = null;
  }
  draw() {
    if (!this.lastDrawTime) {
      this.lastDrawTime = Date.now();
    } else {
      const now = Date.now();
      const delta = (now - this.lastDrawTime) / 1000;
      let x = this.x + this.xSpeed * delta;
      let y = this.y + this.ySpeed * delta;
      if (x < 0) {
        x = 0;
        this.xSpeed = -this.xSpeed;
      } else if (x > this.canvas.width - this.r / 2) {
        x = this.canvas.width - this.r / 2;
        this.xSpeed = -this.xSpeed;
      }
      if (y < 0) {
        y = 0;
        this.ySpeed = -this.ySpeed;
      } else if (y > this.canvas.height - this.r / 2) {
        y = this.canvas.height - this.r / 2;
        this.ySpeed = -this.ySpeed;
      }
      this.x = x;
      this.y = y;
      this.lastDrawTime = now;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgb(200, 200, 200)';
    this.ctx.fill();
  }
}

export class Graph {
  constructor(ctx, canvas, pointNumber = 40, maxDistance = 300) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.points = Array(pointNumber)
      .fill(0)
      .map(() => new Point(this.ctx, this.canvas));
    this.maxDistance = maxDistance;
    this.draw();
  }
  draw() {
    requestAnimationFrame(() => {
      this.draw();
    });
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.points.length; i++) {
      const p1 = this.points[i];
      p1.draw();
      for (let j = i + 1; j < this.points.length; j++) {
        const p2 = this.points[j];
        const distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
        );
        const opacity = 1 - distance / this.maxDistance;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.strokeStyle = \`rgba(200, 200, 200, \${opacity})\`;
        this.ctx.stroke();
      }
    }
  }
}
`}}]);
