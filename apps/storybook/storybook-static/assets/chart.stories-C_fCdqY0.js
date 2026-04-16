import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{Bn as n,Gn as r,Hn as i,Jn as a,Kn as o,Un as s,Vn as c,Wn as l,Xn as u,Yn as d,qn as f,t as p,zn as m}from"./src-B3Lk02FA.js";var h,g,_,v,y,b;e((()=>{c(),p(),h=t(),g=[{name:`Jan`,value:400},{name:`Feb`,value:300},{name:`Mar`,value:200},{name:`Apr`,value:278},{name:`May`,value:189}],_={title:`Components/Chart`,parameters:{layout:`centered`},tags:[`autodocs`]},v={render:()=>(0,h.jsx)(m,{config:{value:{label:`Sales`,color:`hsl(var(--chart-1))`}},className:`h-[300px] w-[400px]`,children:(0,h.jsx)(d,{width:`100%`,height:`100%`,children:(0,h.jsxs)(i,{data:g,children:[(0,h.jsx)(f,{strokeDasharray:`3 3`}),(0,h.jsx)(r,{dataKey:`name`}),(0,h.jsx)(l,{}),(0,h.jsx)(u,{content:(0,h.jsx)(n,{})}),(0,h.jsx)(a,{dataKey:`value`,fill:`hsl(var(--chart-1))`})]})})})},y={render:()=>(0,h.jsx)(m,{config:{value:{label:`Revenue`,color:`hsl(var(--chart-2))`}},className:`h-[300px] w-[400px]`,children:(0,h.jsx)(d,{width:`100%`,height:`100%`,children:(0,h.jsxs)(s,{data:g,children:[(0,h.jsx)(f,{strokeDasharray:`3 3`}),(0,h.jsx)(r,{dataKey:`name`}),(0,h.jsx)(l,{}),(0,h.jsx)(u,{content:(0,h.jsx)(n,{})}),(0,h.jsx)(o,{type:`monotone`,dataKey:`value`,stroke:`hsl(var(--chart-2))`})]})})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer config={{
    value: {
      label: 'Sales',
      color: 'hsl(var(--chart-1))'
    }
  }} className="h-[300px] w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="hsl(var(--chart-1))" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer config={{
    value: {
      label: 'Revenue',
      color: 'hsl(var(--chart-2))'
    }
  }} className="h-[300px] w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="value" stroke="hsl(var(--chart-2))" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
}`,...y.parameters?.docs?.source}}},b=[`BarChartStory`,`LineChartStory`]}))();export{v as BarChartStory,y as LineChartStory,b as __namedExportsOrder,_ as default};