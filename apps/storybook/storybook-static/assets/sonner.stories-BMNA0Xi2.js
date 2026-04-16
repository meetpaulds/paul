import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{Ar as n,S as r,b as i,t as a,x as o}from"./src-B3Lk02FA.js";var s,c,l,u;e((()=>{o(),a(),s=t(),c={title:`Components/Sonner`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},l={render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{}),(0,s.jsxs)(`div`,{className:`space-x-2`,children:[(0,s.jsx)(n,{onClick:()=>r(`Event has been created`),children:`Show Toast`}),(0,s.jsx)(n,{variant:`outline`,onClick:()=>r.success(`Event has been created`,{description:`Sunday, December 03, 2023 at 9:00 AM`}),children:`Success`}),(0,s.jsx)(n,{variant:`destructive`,onClick:()=>r.error(`Failed to create event`),children:`Error`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Toaster />
      <div className="space-x-2">
        <Button onClick={() => toast('Event has been created')}>Show Toast</Button>
        <Button variant="outline" onClick={() => toast.success('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM'
      })}>
          Success
        </Button>
        <Button variant="destructive" onClick={() => toast.error('Failed to create event')}>
          Error
        </Button>
      </div>
    </>
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};