"use strict";(self.webpackChunkwonder=self.webpackChunkwonder||[]).push([[863],{10889:function(_,n,e){var u;e.r(n),e.d(n,{demos:function(){return v}});var d=e(90228),m=e.n(d),p=e(87999),g=e.n(p),o=e(75271),a=e(31383),s=e(77880),t=e(34847),r=e.n(t),v={"src-large-file-upload-demo-demo":{component:o.memo(o.lazy(function(){return Promise.all([e.e(847),e.e(433)]).then(e.bind(e,16840))})),asset:{type:"BLOCK",id:"src-large-file-upload-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96447).Z},react:{type:"NPM",value:"18.3.1"},"./utils.ts":{type:"FILE",value:e(39868).Z},"spark-md5":{type:"NPM",value:"3.0.2"}},entry:"index.tsx"},context:{"./utils.ts":s,react:u||(u=e.t(o,2)),"/Users/chenwande/project/wonder/src/large-file-upload/utils.ts":s,"spark-md5":t},renderOpts:{compile:function(){var i=g()(m()().mark(function f(){var c,h=arguments;return m()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(147).then(e.bind(e,14147));case 2:return l.abrupt("return",(c=l.sent).default.apply(c,h));case 3:case"end":return l.stop()}},f)}));function E(){return i.apply(this,arguments)}return E}()}}}},77880:function(_,n,e){e.r(n),e.d(n,{createFileChunks:function(){return m},getFileHash:function(){return p},getFileHashByWebWorker:function(){return g}});var u=e(34847),d=e.n(u),m=function(a){for(var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10485760,t=[],r=0;r<a.size;r+=s)t.push(a.slice(r,r+s));return t},p=function(a){return new Promise(function(s){var t=new(d()),r=function v(i){if(i>=a.length){s(t.end());return}var E=a[i],f=new FileReader;f.onload=function(c){var h;if((h=c.target)!==null&&h!==void 0&&h.result){var k=c.target.result;t.append(k),v(i+1)}},f.readAsArrayBuffer(E)};r(0)})},g=function(a){return new Promise(function(s){var t=new Worker(new URL(e.p+e.u(16),e.b),{type:void 0});t.postMessage({chunks:a}),t.onmessage=function(r){s(r.data)}})}},3813:function(_,n,e){e.r(n),e.d(n,{texts:function(){return d}});var u=e(31383);const d=[]},96447:function(_,n){n.Z=`// @ts-nocheck
import React, { useState } from 'react';
import { createFileChunks, getFileHash, getFileHashByWebWorker } from './utils';

const Demo = () => {
  const [createHashLoading, setCreateHashLoading] = useState(false);
  const [fileChunks, setFileChunks] = useState<Blob[]>([]);
  const [fileHash, setFileHash] = useState<string>();

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    if (!event.target.files) return;

    setCreateHashLoading(true);
    const chunks = createFileChunks(event.target.files[0]);
    const fileHash = window.Worker
      ? await getFileHashByWebWorker(chunks).finally(() =>
          setCreateHashLoading(false),
        )
      : await getFileHash(chunks).finally(() => setCreateHashLoading(false));

    setFileChunks(chunks);
    setFileHash(fileHash);
  };
  console.log('fileHash', fileHash);
  console.log('fileChunks', fileChunks);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        {createHashLoading ? '\u6B63\u5728\u8BA1\u7B97\u6587\u4EF6hash' : 'hash\uFF1A' + (fileHash || '-')}
      </div>
    </div>
  );
};

export default Demo;
`},39868:function(_,n){n.Z=`// @ts-nocheck
import SparkMd5 from 'spark-md5';

export const createFileChunks = (file: File, chunkSize = 10 * 1024 * 1024) => {
  const chunks: Blob[] = [];
  for (let i = 0; i < file.size; i += chunkSize) {
    chunks.push(file.slice(i, i + chunkSize));
  }
  return chunks;
};

export const getFileHash = (chunks: Blob[]): Promise<string> =>
  new Promise((resolve) => {
    const spark = new SparkMd5();

    const _read = (chunkIndex: number) => {
      if (chunkIndex >= chunks.length) {
        resolve(spark.end());
        return;
      }
      const blob = chunks[chunkIndex];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e.target?.result) return;
        const bytes = e.target.result;
        spark.append(bytes);
        _read(chunkIndex + 1);
      };
      reader.readAsArrayBuffer(blob);
    };

    _read(0);
  });

export const getFileHashByWebWorker = (chunks: Blob[]): Promise<string> => {
  return new Promise((resolve) => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url), {
      type: 'module',
    });
    worker.postMessage({ chunks });
    worker.onmessage = function (e) {
      resolve(e.data);
    };
  });
};
`}}]);
