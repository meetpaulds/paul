import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{Ar as n,B as r,G as i,H as a,K as o,Pt as s,U as c,V as l,W as u,t as d,z as f,zt as p}from"./src-B3Lk02FA.js";var m,h,g,_,v,y,b;e((()=>{d(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Sheet`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},_={render:()=>(0,m.jsxs)(f,{children:[(0,m.jsx)(o,{asChild:!0,children:(0,m.jsx)(n,{variant:`outline`,children:`Open`})}),(0,m.jsxs)(l,{children:[(0,m.jsxs)(u,{children:[(0,m.jsx)(i,{children:`Edit profile`}),(0,m.jsx)(a,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,m.jsxs)(`div`,{className:`grid gap-4 py-4`,children:[(0,m.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,m.jsx)(p,{htmlFor:`name`,className:`text-right`,children:`Name`}),(0,m.jsx)(s,{id:`name`,value:`Pedro Duarte`,className:`col-span-3`})]}),(0,m.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,m.jsx)(p,{htmlFor:`username`,className:`text-right`,children:`Username`}),(0,m.jsx)(s,{id:`username`,value:`@peduarte`,className:`col-span-3`})]})]}),(0,m.jsx)(c,{children:(0,m.jsx)(r,{asChild:!0,children:(0,m.jsx)(n,{type:`submit`,onClick:h(),children:`Save changes`})})})]})]})},v={render:()=>(0,m.jsxs)(f,{children:[(0,m.jsx)(o,{asChild:!0,children:(0,m.jsx)(n,{variant:`outline`,children:`Open Left`})}),(0,m.jsx)(l,{side:`left`,children:(0,m.jsxs)(u,{children:[(0,m.jsx)(i,{children:`Sheet from left`}),(0,m.jsx)(a,{children:`This sheet slides in from the left side.`})]})})]})},y={render:()=>(0,m.jsxs)(f,{children:[(0,m.jsx)(o,{asChild:!0,children:(0,m.jsx)(n,{variant:`outline`,children:`Open Bottom`})}),(0,m.jsx)(l,{side:`bottom`,children:(0,m.jsxs)(u,{children:[(0,m.jsx)(i,{children:`Sheet from bottom`}),(0,m.jsx)(a,{children:`This sheet slides in from the bottom.`})]})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Username</Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={fn()}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Sheet from left</SheetTitle>
          <SheetDescription>This sheet slides in from the left side.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Sheet from bottom</SheetTitle>
          <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Left`,`Bottom`]}))();export{y as Bottom,_ as Default,v as Left,b as __namedExportsOrder,g as default};