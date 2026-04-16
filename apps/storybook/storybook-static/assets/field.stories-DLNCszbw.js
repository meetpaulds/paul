import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{Pt as n,Rt as r,t as i}from"./src-B3Lk02FA.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),o={title:`Components/Field`,parameters:{layout:`centered`},tags:[`autodocs`]},s={render:()=>(0,a.jsx)(r,{label:`Email`,hint:`We will never share your email.`,children:(0,a.jsx)(n,{type:`email`,placeholder:`Enter your email`})})},c={render:()=>(0,a.jsx)(r,{label:`Username`,required:!0,children:(0,a.jsx)(n,{placeholder:`Enter username`})})},l={render:()=>(0,a.jsx)(r,{label:`Password`,error:`Password must be at least 8 characters.`,children:(0,a.jsx)(n,{type:`password`,value:`123`})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Field label="Email" hint="We will never share your email.">
      <Input type="email" placeholder="Enter your email" />
    </Field>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Field label="Username" required>
      <Input placeholder="Enter username" />
    </Field>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Field label="Password" error="Password must be at least 8 characters.">
      <Input type="password" value="123" />
    </Field>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Required`,`WithError`]}))();export{s as Default,c as Required,l as WithError,u as __namedExportsOrder,o as default};