import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{et as n,nt as r,t as i,tt as a}from"./src-B3Lk02FA.js";var o,s,c,l,u,d;e((()=>{i(),o=t(),s={title:`Components/Resizable`,parameters:{layout:`centered`},tags:[`autodocs`]},c={render:()=>(0,o.jsxs)(r,{direction:`horizontal`,className:`max-w-md rounded-lg border`,children:[(0,o.jsx)(a,{defaultSize:50,children:(0,o.jsx)(`div`,{className:`flex h-40 items-center justify-center p-6`,children:(0,o.jsx)(`span`,{className:`font-semibold`,children:`One`})})}),(0,o.jsx)(n,{}),(0,o.jsx)(a,{defaultSize:50,children:(0,o.jsx)(`div`,{className:`flex h-40 items-center justify-center p-6`,children:(0,o.jsx)(`span`,{className:`font-semibold`,children:`Two`})})})]})},l={render:()=>(0,o.jsxs)(r,{direction:`vertical`,className:`max-w-md rounded-lg border h-60`,children:[(0,o.jsx)(a,{defaultSize:50,children:(0,o.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,o.jsx)(`span`,{className:`font-semibold`,children:`Top`})})}),(0,o.jsx)(n,{}),(0,o.jsx)(a,{defaultSize:50,children:(0,o.jsx)(`div`,{className:`flex items-center justify-center p-6`,children:(0,o.jsx)(`span`,{className:`font-semibold`,children:`Bottom`})})})]})},u={render:()=>(0,o.jsxs)(r,{direction:`horizontal`,className:`max-w-md rounded-lg border`,children:[(0,o.jsx)(a,{defaultSize:50,children:(0,o.jsx)(`div`,{className:`flex h-40 items-center justify-center p-6`,children:(0,o.jsx)(`span`,{className:`font-semibold`,children:`Sidebar`})})}),(0,o.jsx)(n,{withHandle:!0}),(0,o.jsx)(a,{defaultSize:50,children:(0,o.jsx)(`div`,{className:`flex h-40 items-center justify-center p-6`,children:(0,o.jsx)(`span`,{className:`font-semibold`,children:`Main`})})})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-40 items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-40 items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ResizablePanelGroup direction="vertical" className="max-w-md rounded-lg border h-60">
      <ResizablePanel defaultSize={50}>
        <div className="flex items-center justify-center p-6">
          <span className="font-semibold">Top</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex items-center justify-center p-6">
          <span className="font-semibold">Bottom</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-40 items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-40 items-center justify-center p-6">
          <span className="font-semibold">Main</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
}`,...u.parameters?.docs?.source}}},d=[`Horizontal`,`Vertical`,`WithHandle`]}))();export{c as Horizontal,l as Vertical,u as WithHandle,d as __namedExportsOrder,s as default};