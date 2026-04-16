import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{Fr as n,Ir as r,Lr as i,Pr as a,t as o}from"./src-B3Lk02FA.js";var s,c,l,u,d;e((()=>{o(),s=t(),c={title:`Components/Accordion`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`single`,`multiple`]},collapsible:{control:`boolean`}}},l={args:{type:`single`,collapsible:!0,className:`w-full max-w-md`},render:e=>(0,s.jsxs)(a,{...e,children:[(0,s.jsxs)(r,{value:`item-1`,children:[(0,s.jsx)(i,{children:`Is it accessible?`}),(0,s.jsx)(n,{children:`Yes. It adheres to the WAI-ARIA design pattern.`})]}),(0,s.jsxs)(r,{value:`item-2`,children:[(0,s.jsx)(i,{children:`Is it styled?`}),(0,s.jsx)(n,{children:`Yes. It comes with default styles that match the other components.`})]}),(0,s.jsxs)(r,{value:`item-3`,children:[(0,s.jsx)(i,{children:`Is it animated?`}),(0,s.jsx)(n,{children:`Yes. It's animated by default, but you can disable it if you prefer.`})]})]})},u={args:{type:`multiple`,className:`w-full max-w-md`},render:e=>(0,s.jsxs)(a,{...e,children:[(0,s.jsxs)(r,{value:`item-1`,children:[(0,s.jsx)(i,{children:`Item 1`}),(0,s.jsx)(n,{children:`Content for item 1`})]}),(0,s.jsxs)(r,{value:`item-2`,children:[(0,s.jsx)(i,{children:`Item 2`}),(0,s.jsx)(n,{children:`Content for item 2`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-full max-w-md'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    className: 'w-full max-w-md'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for item 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content for item 2</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Multiple`]}))();export{l as Default,u as Multiple,d as __namedExportsOrder,c as default};