import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{c as n,d as r,f as i,l as a,o,s,t as c,u as l}from"./src-B3Lk02FA.js";var u,d,f,p,m,h;e((()=>{c(),u=t(),d={title:`Components/Toast`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},f={render:()=>(0,u.jsxs)(l,{children:[(0,u.jsxs)(o,{children:[(0,u.jsxs)(`div`,{className:`grid gap-1`,children:[(0,u.jsx)(r,{children:`Scheduled: Catch up`}),(0,u.jsx)(a,{children:`Friday, February 10, 2023 at 5:57 PM`})]}),(0,u.jsx)(n,{})]}),(0,u.jsx)(i,{})]})},p={render:()=>(0,u.jsxs)(l,{children:[(0,u.jsxs)(o,{children:[(0,u.jsxs)(`div`,{className:`grid gap-1`,children:[(0,u.jsx)(r,{children:`Uh oh! Something went wrong.`}),(0,u.jsx)(a,{children:`There was a problem with your request.`})]}),(0,u.jsx)(s,{altText:`Try again`,children:`Try again`}),(0,u.jsx)(n,{})]}),(0,u.jsx)(i,{})]})},m={render:()=>(0,u.jsxs)(l,{children:[(0,u.jsxs)(o,{variant:`destructive`,children:[(0,u.jsxs)(`div`,{className:`grid gap-1`,children:[(0,u.jsx)(r,{children:`Uh oh! Something went wrong.`}),(0,u.jsx)(a,{children:`There was a problem with your request.`})]}),(0,u.jsx)(n,{})]}),(0,u.jsx)(i,{})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider>
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Scheduled: Catch up</ToastTitle>
          <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider>
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
          <ToastDescription>There was a problem with your request.</ToastDescription>
        </div>
        <ToastAction altText="Try again">Try again</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider>
      <Toast variant="destructive">
        <div className="grid gap-1">
          <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
          <ToastDescription>There was a problem with your request.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithAction`,`Destructive`]}))();export{f as Default,m as Destructive,p as WithAction,h as __namedExportsOrder,d as default};