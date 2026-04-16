import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{$ as n,q as r,t as i}from"./src-B3Lk02FA.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),o={title:`Components/ScrollArea`,component:n,parameters:{layout:`centered`},tags:[`autodocs`]},s=Array.from({length:50}).map((e,t,n)=>`v1.2.0-beta.${n.length-t}`),c={render:()=>(0,a.jsx)(n,{className:`h-72 w-48 rounded-md border`,children:(0,a.jsxs)(`div`,{className:`p-4`,children:[(0,a.jsx)(`h4`,{className:`mb-4 text-sm font-medium leading-none`,children:`Tags`}),s.map(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`div`,{className:`text-sm`,children:e},e),(0,a.jsx)(r,{className:`my-2`})]}))]})})},l={render:()=>(0,a.jsx)(n,{className:`w-96 whitespace-nowrap rounded-md border`,children:(0,a.jsx)(`div`,{className:`flex w-max space-x-4 p-4`,children:Array.from({length:20}).map((e,t)=>(0,a.jsxs)(`div`,{className:`w-24 h-24 rounded-md bg-muted flex items-center justify-center`,children:[`Item `,t+1]},t))})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map(tag => <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>)}
      </div>
    </ScrollArea>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className="w-24 h-24 rounded-md bg-muted flex items-center justify-center">
            Item {i + 1}
          </div>)}
      </div>
    </ScrollArea>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Horizontal`]}))();export{c as Default,l as Horizontal,u as __namedExportsOrder,o as default};