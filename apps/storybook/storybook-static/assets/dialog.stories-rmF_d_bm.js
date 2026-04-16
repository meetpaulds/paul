import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{An as n,Ar as r,Mn as i,Nn as a,On as o,Pn as s,Pt as c,jn as l,kn as u,t as d,zt as f}from"./src-B3Lk02FA.js";var p,m,h,g,_;e((()=>{d(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Dialog`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},g={render:()=>(0,p.jsxs)(o,{children:[(0,p.jsx)(s,{asChild:!0,children:(0,p.jsx)(r,{variant:`outline`,children:`Edit Profile`})}),(0,p.jsxs)(u,{className:`sm:max-w-[425px]`,children:[(0,p.jsxs)(i,{children:[(0,p.jsx)(a,{children:`Edit profile`}),(0,p.jsx)(n,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,p.jsxs)(`div`,{className:`grid gap-4 py-4`,children:[(0,p.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,p.jsx)(f,{htmlFor:`name`,className:`text-right`,children:`Name`}),(0,p.jsx)(c,{id:`name`,value:`Pedro Duarte`,className:`col-span-3`})]}),(0,p.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,p.jsx)(f,{htmlFor:`username`,className:`text-right`,children:`Username`}),(0,p.jsx)(c,{id:`username`,value:`@peduarte`,className:`col-span-3`})]})]}),(0,p.jsx)(l,{children:(0,p.jsx)(r,{type:`submit`,onClick:m(),children:`Save changes`})})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={fn()}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};