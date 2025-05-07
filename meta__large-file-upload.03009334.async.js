"use strict";(self.webpackChunkwonder=self.webpackChunkwonder||[]).push([[863],{99160:function(_,n,e){var u;e.r(n),e.d(n,{demos:function(){return v}});var d=e(90228),m=e.n(d),g=e(87999),p=e.n(g),o=e(75271),a=e(91263),s=e(63120),t=e(34847),r=e.n(t),v={"src-large-file-upload-demo-demo":{component:o.memo(o.lazy(function(){return Promise.all([e.e(847),e.e(433)]).then(e.bind(e,30048))})),asset:{type:"BLOCK",id:"src-large-file-upload-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27486).Z},react:{type:"NPM",value:"18.3.1"},"./utils.ts":{type:"FILE",value:e(71397).Z},"spark-md5":{type:"NPM",value:"3.0.2"}},entry:"index.tsx"},context:{"./utils.ts":s,react:u||(u=e.t(o,2)),"/Users/chenwande/test/wonder/src/large-file-upload/utils.ts":s,"spark-md5":t},renderOpts:{compile:function(){var i=p()(m()().mark(function f(){var h,c=arguments;return m()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(223).then(e.bind(e,61223));case 2:return l.abrupt("return",(h=l.sent).default.apply(h,c));case 3:case"end":return l.stop()}},f)}));function E(){return i.apply(this,arguments)}return E}()}}}},63120:function(_,n,e){e.r(n),e.d(n,{createFileChunks:function(){return m},getFileHash:function(){return g},getFileHashByWebWorker:function(){return p}});var u=e(34847),d=e.n(u),m=function(a){for(var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10485760,t=[],r=0;r<a.size;r+=s)t.push(a.slice(r,r+s));return t},g=function(a){return new Promise(function(s){var t=new(d()),r=function v(i){if(i>=a.length){s(t.end());return}var E=a[i],f=new FileReader;f.onload=function(h){var c;if((c=h.target)!==null&&c!==void 0&&c.result){var k=h.target.result;t.append(k),v(i+1)}},f.readAsArrayBuffer(E)};r(0)})},p=function(a){return new Promise(function(s){var t=new Worker(new URL(e.p+e.u(27),e.b),{type:void 0});t.postMessage({chunks:a}),t.onmessage=function(r){s(r.data)}})}},2274:function(_,n,e){e.r(n),e.d(n,{texts:function(){return d}});var u=e(91263);const d=[]},27486:function(_,n){n.Z=`import React, { useState } from 'react';
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
`},71397:function(_,n){n.Z=`import SparkMd5 from 'spark-md5';

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
    // @ts-ignore
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
