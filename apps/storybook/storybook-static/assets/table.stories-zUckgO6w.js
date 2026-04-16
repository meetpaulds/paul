import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{an as n,cn as r,in as i,ln as a,on as o,rn as s,sn as c,t as l}from"./src-B3Lk02FA.js";var u,d,f,p,m;e((()=>{l(),u=t(),d={title:`Components/Table`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},f=[{invoice:`INV001`,status:`Paid`,method:`Credit Card`,amount:`$250.00`},{invoice:`INV002`,status:`Pending`,method:`PayPal`,amount:`$150.00`},{invoice:`INV003`,status:`Unpaid`,method:`Bank Transfer`,amount:`$350.00`}],p={render:()=>(0,u.jsxs)(s,{children:[(0,u.jsx)(n,{children:`A list of your recent invoices.`}),(0,u.jsx)(r,{children:(0,u.jsxs)(a,{children:[(0,u.jsx)(c,{className:`w-[100px]`,children:`Invoice`}),(0,u.jsx)(c,{children:`Status`}),(0,u.jsx)(c,{children:`Method`}),(0,u.jsx)(c,{className:`text-right`,children:`Amount`})]})}),(0,u.jsx)(i,{children:f.map(e=>(0,u.jsxs)(a,{children:[(0,u.jsx)(o,{className:`font-medium`,children:e.invoice}),(0,u.jsx)(o,{children:e.status}),(0,u.jsx)(o,{children:e.method}),(0,u.jsx)(o,{className:`text-right`,children:e.amount})]},e.invoice))})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,d as default};