import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{_ as n,g as r,h as i,ir as a,m as o,nr as s,or as c,rr as l,sr as u,t as d}from"./src-B3Lk02FA.js";var f,p,m,h;e((()=>{d(),f=t(),p={title:`Components/Tabs`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},m={render:()=>(0,f.jsxs)(o,{defaultValue:`account`,className:`w-[400px]`,children:[(0,f.jsxs)(r,{className:`grid w-full grid-cols-2`,children:[(0,f.jsx)(n,{value:`account`,children:`Account`}),(0,f.jsx)(n,{value:`password`,children:`Password`})]}),(0,f.jsx)(i,{value:`account`,children:(0,f.jsxs)(s,{children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Account`}),(0,f.jsx)(a,{children:`Make changes to your account here.`})]}),(0,f.jsx)(l,{className:`space-y-2`,children:(0,f.jsx)(`p`,{children:`Account settings content`})})]})}),(0,f.jsx)(i,{value:`password`,children:(0,f.jsxs)(s,{children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Password`}),(0,f.jsx)(a,{children:`Change your password here.`})]}),(0,f.jsx)(l,{className:`space-y-2`,children:(0,f.jsx)(`p`,{children:`Password settings content`})})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Account settings content</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Password settings content</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};