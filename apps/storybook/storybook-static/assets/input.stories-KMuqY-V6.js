import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{Pt as n,t as r,zt as i}from"./src-B3Lk02FA.js";var a,o,s,c,l,u,d,f;e((()=>{r(),a=t(),o={title:`Components/Input`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`]},disabled:{control:`boolean`}}},s={args:{placeholder:`Enter text...`}},c={render:e=>(0,a.jsxs)(`div`,{className:`grid w-full max-w-sm items-center gap-1.5`,children:[(0,a.jsx)(i,{htmlFor:`email`,children:`Email`}),(0,a.jsx)(n,{...e,id:`email`,type:`email`,placeholder:`Email`})]})},l={args:{disabled:!0,placeholder:`Disabled input`,value:`Disabled value`}},u={args:{type:`password`,placeholder:`Enter password...`}},d={args:{type:`file`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" type="email" placeholder="Email" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Disabled value'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file'
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithLabel`,`Disabled`,`Password`,`File`]}))();export{s as Default,l as Disabled,d as File,u as Password,c as WithLabel,f as __namedExportsOrder,o as default};