import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{Ar as i,Fn as a,In as o,Ln as s,Qr as c,Rr as l,t as u}from"./src-B3Lk02FA.js";var d,f,p,m,h;t((()=>{d=e(n(),1),u(),l(),f=r(),p={title:`Components/Collapsible`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},m={render:()=>{let[e,t]=d.useState(!1);return(0,f.jsxs)(a,{open:e,onOpenChange:t,className:`w-[350px] space-y-2`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between space-x-4 px-4`,children:[(0,f.jsx)(`h4`,{className:`text-sm font-semibold`,children:`@peduarte starred 3 repositories`}),(0,f.jsx)(s,{asChild:!0,children:(0,f.jsxs)(i,{variant:`ghost`,size:`sm`,children:[(0,f.jsx)(c,{className:`h-4 w-4 transition-transform ${e?`rotate-180`:``}`}),(0,f.jsx)(`span`,{className:`sr-only`,children:`Toggle`})]})})]}),(0,f.jsx)(`div`,{className:`rounded-md border px-4 py-2 font-mono text-sm`,children:`@radix-ui/primitives`}),(0,f.jsxs)(o,{className:`space-y-2`,children:[(0,f.jsx)(`div`,{className:`rounded-md border px-4 py-2 font-mono text-sm`,children:`@radix-ui/colors`}),(0,f.jsx)(`div`,{className:`rounded-md border px-4 py-2 font-mono text-sm`,children:`@stitches/react`})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};