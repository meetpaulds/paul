import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-D1sJ83FZ.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i,tn as a}from"./src-B3Lk02FA.js";var o,s,c,l,u,d;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Components/DatePicker`,parameters:{layout:`centered`},tags:[`autodocs`]},l={render:()=>{let[e,t]=o.useState(new Date);return(0,s.jsx)(a,{date:e,onSelect:t})}},u={render:()=>{let[e,t]=o.useState();return(0,s.jsx)(a,{date:e,onSelect:t,placeholder:`Pick a date`})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker date={date} onSelect={setDate} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <DatePicker date={date} onSelect={setDate} placeholder="Pick a date" />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithPlaceholder`]}))();export{l as Default,u as WithPlaceholder,d as __namedExportsOrder,c as default};