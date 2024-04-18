/*! For license information please see 2bc14e22.82c56fb8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9502],{1242:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var t=s(4848),r=s(8453),l=s(8215),c=s(2467);const a={},o="Using MySQL2 with TypeScript",i={id:"documentation/typescript-examples",title:"Using MySQL2 with TypeScript",description:"Installation",source:"@site/docs/documentation/typescript-examples.mdx",sourceDirName:"documentation",slug:"/documentation/typescript-examples",permalink:"/node-mysql2/zh-CN/docs/documentation/typescript-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/documentation/typescript-examples.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Promise Wrappers",permalink:"/node-mysql2/zh-CN/docs/documentation/promise-wrapper"},next:{title:"API\u914d\u7f6e\u9879",permalink:"/node-mysql2/zh-CN/docs/api-and-configurations"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Connection",id:"connection",level:3},{value:"Pool Connection",id:"pool-connection",level:3},{value:"Query and Execute",id:"query-and-execute",level:3},{value:"A simple query",id:"a-simple-query",level:4},{value:"Type Specification",id:"type-specification",level:2},{value:"RowDataPacket[]",id:"rowdatapacket",level:3},{value:"RowDataPacket[][]",id:"rowdatapacket-1",level:3},{value:"ResultSetHeader",id:"resultsetheader",level:3},{value:"ResultSetHeader[]",id:"resultsetheader-1",level:3},{value:"ProcedureCallPacket",id:"procedurecallpacket",level:3},{value:"OkPacket",id:"okpacket",level:3},{value:"Examples",id:"examples",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-mysql2-with-typescript",children:"Using MySQL2 with TypeScript"}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save mysql2\nnpm install --save-dev @types/node\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@types/node"})," ensure the proper interaction between ",(0,t.jsx)(n.strong,{children:"TypeScript"})," and the ",(0,t.jsx)(n.strong,{children:"Node.js"})," modules used by ",(0,t.jsx)(n.strong,{children:"MySQL2"})," (",(0,t.jsx)(n.em,{children:"net"}),", ",(0,t.jsx)(n.em,{children:"events"}),", ",(0,t.jsx)(n.em,{children:"stream"}),", ",(0,t.jsx)(n.em,{children:"tls"}),", etc.)."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Requires ",(0,t.jsx)(n.strong,{children:"TypeScript"})," ",(0,t.jsx)(n.code,{children:">=4.5.2"}),"."]})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["You can import ",(0,t.jsx)(n.strong,{children:"MySQL2"})," in two ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By setting the ",(0,t.jsx)(n.code,{children:"esModuleInterop"})," option to ",(0,t.jsx)(n.code,{children:"true"})," in ",(0,t.jsx)(n.code,{children:"tsconfig.json"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql from 'mysql2';\nimport mysql from 'mysql2/promise';\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By setting the ",(0,t.jsx)(n.code,{children:"esModuleInterop"})," option to ",(0,t.jsx)(n.code,{children:"false"})," in ",(0,t.jsx)(n.code,{children:"tsconfig.json"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import * as mysql from 'mysql2';\nimport * as mysql from 'mysql2/promise';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"connection",children:"Connection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { ConnectionOptions } from 'mysql2';\n\nconst access: ConnectionOptions = {\n  user: 'test',\n  database: 'test',\n};\n\nconst conn = mysql.createConnection(access);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"pool-connection",children:"Pool Connection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { PoolOptions } from 'mysql2';\n\nconst access: PoolOptions = {\n  user: 'test',\n  database: 'test',\n};\n\nconst conn = mysql.createPool(access);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"query-and-execute",children:"Query and Execute"}),"\n",(0,t.jsx)(n.h4,{id:"a-simple-query",children:"A simple query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"conn.query('SELECT 1 + 1 AS `test`;', (_err, rows) => {\n  /**\n   * @rows: [ { test: 2 } ]\n   */\n});\n\nconn.execute('SELECT 1 + 1 AS `test`;', (_err, rows) => {\n  /**\n   * @rows: [ { test: 2 } ]\n   */\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"rows"})," output will be these possible types:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RowDataPacket[]"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RowDataPacket[][]"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ResultSetHeader"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ResultSetHeader[]"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ProcedureCallPacket"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this example, you need to manually check the output types"}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"type-specification",children:"Type Specification"}),"\n",(0,t.jsx)(n.h3,{id:"rowdatapacket",children:"RowDataPacket[]"}),"\n",(0,t.jsx)(c.k,{level:2}),"\n",(0,t.jsx)(n.p,{children:"An array with the returned rows, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { RowDataPacket } from 'mysql2';\n\nconst conn = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\n// SELECT\nconn.query<RowDataPacket[]>('SELECT 1 + 1 AS `test`;', (_err, rows) => {\n  console.log(rows);\n  /**\n   * @rows: [ { test: 2 } ]\n   */\n});\n\n// SHOW\nconn.query<RowDataPacket[]>('SHOW TABLES FROM `test`;', (_err, rows) => {\n  console.log(rows);\n  /**\n   * @rows: [ { Tables_in_test: 'test' } ]\n   */\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"rowsAsArray"})," option as ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { RowDataPacket } from 'mysql2';\n\nconst conn = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n  rowsAsArray: true,\n});\n\n// SELECT\nconn.query<RowDataPacket[]>(\n  'SELECT 1 + 1 AS test, 2 + 2 AS test;',\n  (_err, rows) => {\n    console.log(rows);\n    /**\n     * @rows: [ [ 2, 4 ] ]\n     */\n  }\n);\n\n// SHOW\nconn.query<RowDataPacket[]>('SHOW TABLES FROM `test`;', (_err, rows) => {\n  console.log(rows);\n  /**\n   * @rows: [ [ 'test' ] ]\n   */\n});\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"rowdatapacket-1",children:"RowDataPacket[][]"}),"\n",(0,t.jsx)(c.k,{level:2}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"multipleStatements"})," option as ",(0,t.jsx)(n.code,{children:"true"})," with multiple queries:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { RowDataPacket } from 'mysql2';\n\nconst conn = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n  multipleStatements: true,\n});\n\nconst sql = `\n  SELECT 1 + 1 AS test;\n  SELECT 2 + 2 AS test;\n`;\n\nconn.query<RowDataPacket[][]>(sql, (_err, rows) => {\n  console.log(rows);\n  /**\n   * @rows: [ [ { test: 2 } ], [ { test: 4 } ] ]\n   */\n});\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"resultsetheader",children:"ResultSetHeader"}),"\n",(0,t.jsx)(c.k,{level:2}),"\n",(0,t.jsx)(l.B,{records:[{version:"3.5.1",changes:[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.strong,{children:"OkPacket"})," is deprecated and might be removed in the future major release.",(0,t.jsx)(n.br,{}),"Please use ",(0,t.jsx)(n.strong,{children:"ResultSetHeader"})," instead."]}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.strong,{children:"changedRows"})," option is deprecated and might be removed in the future major release.",(0,t.jsx)(n.br,{}),"Please use ",(0,t.jsx)(n.strong,{children:"affectedRows"})," instead."]})]}]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", ",(0,t.jsx)(n.code,{children:"DELETE"}),", ",(0,t.jsx)(n.code,{children:"TRUNCATE"}),", etc.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { ResultSetHeader } from 'mysql2';\n\nconst conn = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\nconst sql = `\n  SET @1 = 1;\n`;\n\nconn.query<ResultSetHeader>(sql, (_err, result) => {\n  console.log(result);\n  /**\n   * @result: ResultSetHeader {\n      fieldCount: 0,\n      affectedRows: 0,\n      insertId: 0,\n      info: '',\n      serverStatus: 2,\n      warningStatus: 0,\n      changedRows: 0\n    }\n   */\n});\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"resultsetheader-1",children:"ResultSetHeader[]"}),"\n",(0,t.jsx)(c.k,{level:2}),"\n",(0,t.jsx)(l.B,{records:[{version:"3.5.1",changes:[(0,t.jsxs)(t.Fragment,{children:["Introduce ",(0,t.jsx)(n.strong,{children:"ResultSetHeader[]"})]})]}]}),"\n",(0,t.jsxs)(n.p,{children:["For multiples ",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", ",(0,t.jsx)(n.code,{children:"DELETE"}),", ",(0,t.jsx)(n.code,{children:"TRUNCATE"}),", etc. when using ",(0,t.jsx)(n.code,{children:"multipleStatements"})," as ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { ResultSetHeader } from 'mysql2';\n\nconst conn = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n  multipleStatements: true,\n});\n\nconst sql = `\n  SET @1 = 1;\n  SET @2 = 2;\n`;\n\nconn.query<ResultSetHeader[]>(sql, (_err, results) => {\n  console.log(results);\n  /**\n   * @results: [\n      ResultSetHeader {\n        fieldCount: 0,\n        affectedRows: 0,\n        insertId: 0,\n        info: '',\n        serverStatus: 10,\n        warningStatus: 0,\n        changedRows: 0\n      },\n      ResultSetHeader {\n        fieldCount: 0,\n        affectedRows: 0,\n        insertId: 0,\n        info: '',\n        serverStatus: 2,\n        warningStatus: 0,\n        changedRows: 0\n      }\n    ]\n   */\n});\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"procedurecallpacket",children:"ProcedureCallPacket"}),"\n",(0,t.jsx)(c.k,{level:2}),"\n",(0,t.jsx)(l.B,{records:[{version:"3.5.1",changes:[(0,t.jsxs)(t.Fragment,{children:["Introduce ",(0,t.jsx)(n.strong,{children:"ProcedureCallPacket"})]})]}]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["By performing a ",(0,t.jsx)(n.strong,{children:"Call Procedure"})," using ",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", etc., the return will be a ",(0,t.jsx)(n.code,{children:"ProcedureCallPacket<ResultSetHeader>"})," (even if you perform multiples queries and set ",(0,t.jsx)(n.code,{children:"multipleStatements"})," to ",(0,t.jsx)(n.code,{children:"true"}),"):"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import mysql, { ProcedureCallPacket, ResultSetHeader } from 'mysql2';\n\nconst conn = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\n/** ResultSetHeader */\nconn.query('DROP PROCEDURE IF EXISTS myProcedure');\n\n/** ResultSetHeader */\nconn.query(`\n    CREATE PROCEDURE myProcedure()\n    BEGIN\n      SET @1 = 1;\n      SET @2 = 2;\n    END\n  `);\n\n/** ProcedureCallPacket */\nconst sql = 'CALL myProcedure()';\n\nconn.query<ProcedureCallPacket<ResultSetHeader>>(sql, (_err, result) => {\n  console.log(result);\n  /**\n   * @result: ResultSetHeader {\n      fieldCount: 0,\n      affectedRows: 0,\n      insertId: 0,\n      info: '',\n      serverStatus: 2,\n      warningStatus: 0,\n      changedRows: 0\n    }\n   */\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"CREATE PROCEDURE"})," and ",(0,t.jsx)(n.code,{children:"DROP PROCEDURE"}),", these returns will be the ",(0,t.jsx)(n.em,{children:"default"})," ",(0,t.jsx)(n.code,{children:"ResultSetHeader"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By using ",(0,t.jsx)(n.code,{children:"SELECT"})," and ",(0,t.jsx)(n.code,{children:"SHOW"})," queries in a ",(0,t.jsx)(n.strong,{children:"Procedure Call"}),", it groups the results as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"/** ProcedureCallPacket<RowDataPacket[]> */\n[RowDataPacket[], ResultSetHeader]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"ProcedureCallPacket<RowDataPacket[]>"}),", please see the following examples."]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"okpacket",children:"OkPacket"}),"\n",(0,t.jsx)(c.k,{level:0,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.strong,{children:"OkPacket"})," is deprecated and might be removed in the future major release.",(0,t.jsx)(n.br,{}),"Please use ",(0,t.jsx)(n.strong,{children:"ResultSetHeader"})," instead."]})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["You can also check some code examples using ",(0,t.jsx)(n.strong,{children:"MySQL2"})," and ",(0,t.jsx)(n.strong,{children:"TypeScript"})," to understand advanced concepts:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/row-data/index",children:["Extending and using ",(0,t.jsx)(n.strong,{children:"Interfaces"})," with ",(0,t.jsx)(n.code,{children:"RowDataPacket"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/row-data/row-as-array",children:["Extending and using ",(0,t.jsx)(n.strong,{children:"Interfaces"})," with ",(0,t.jsx)(n.code,{children:"RowDataPacket"})," and ",(0,t.jsx)(n.code,{children:"rowAsArray"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/row-data/multi-statements",children:["Extending and using ",(0,t.jsx)(n.strong,{children:"Interfaces"})," with ",(0,t.jsx)(n.code,{children:"RowDataPacket"})," and ",(0,t.jsx)(n.code,{children:"multipleStatements"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/row-data/row-as-array-multi-statements",children:["Extending and using ",(0,t.jsx)(n.strong,{children:"Interfaces"})," with ",(0,t.jsx)(n.code,{children:"RowDataPacket"}),", ",(0,t.jsx)(n.code,{children:"rowAsArray"})," and ",(0,t.jsx)(n.code,{children:"multipleStatements"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/procedure-call/index",children:["Checking for ",(0,t.jsx)(n.code,{children:"ResultSetHeader"}),", extending and using ",(0,t.jsx)(n.strong,{children:"Interfaces"})," with ",(0,t.jsx)(n.code,{children:"RowDataPacket"})," from ",(0,t.jsx)(n.code,{children:"ProcedureCallPacket"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/procedure-call/row-as-array",children:["Checking for ",(0,t.jsx)(n.code,{children:"ResultSetHeader"}),", extending and using ",(0,t.jsx)(n.strong,{children:"Interfaces"})," with ",(0,t.jsx)(n.code,{children:"RowDataPacket"})," and ",(0,t.jsx)(n.code,{children:"rowAsArray"})," from ",(0,t.jsx)(n.code,{children:"ProcedureCallPacket"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/examples/typescript/basic-custom-class",children:["Creating a basic custom ",(0,t.jsx)(n.strong,{children:"MySQL2"})," ",(0,t.jsx)(n.strong,{children:"Class"})]})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1622:(e,n,s)=>{s.d(n,{A:()=>j});var t=s(6540),r=s(4164),l=s(3427),c=s(2303),a=s(1422);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var i=s(4848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function u(e){let{summary:n,children:s,...u}=e;(0,l.A)().collectAnchor(u.id);const x=(0,c.A)(),p=(0,t.useRef)(null),{collapsed:j,setCollapsed:m}=(0,a.u)({initialState:!u.open}),[y,g]=(0,t.useState)(u.open),k=t.isValidElement(n)?n:(0,i.jsx)("summary",{children:n??"Details"});return(0,i.jsxs)("details",{...u,ref:p,open:y,"data-collapsed":j,className:(0,r.A)(o.details,x&&o.isBrowser,u.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;d(n)&&h(n,p.current)&&(e.preventDefault(),j?(m(!1),g(!0)):m(!0))},children:[k,(0,i.jsx)(a.N,{lazy:!1,collapsed:j,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),g(!e)},children:(0,i.jsx)("div",{className:o.collapsibleContent,children:s})})]})}const x={details:"details_b_Ee"},p="alert alert--info";function j(e){let{...n}=e;return(0,i.jsx)(u,{...n,className:(0,r.A)(p,x.details,n.className)})}},8215:(e,n,s)=>{s.d(n,{B:()=>c});var t=s(1622);const r=(0,s(5065).A)("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);var l=s(4848);const c=e=>{let{records:n,open:s}=e;return(0,l.jsx)(t.A,{open:s,summary:(0,l.jsxs)("summary",{children:[(0,l.jsx)(r,{})," History"]}),className:"history",children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Version"}),(0,l.jsx)("th",{children:"Changes"})]})}),(0,l.jsx)("tbody",{children:n.map(((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsxs)("strong",{children:["v",e.version.replace(/[^0-9.]/g,"")]})}),(0,l.jsx)("td",{children:(0,l.jsx)("div",{className:"changes",children:e.changes.map(((e,n)=>(0,l.jsx)("section",{children:e},`change:${n}`)))})})]},`record:${n}`)))})]})})}},2467:(e,n,s)=>{s.d(n,{k:()=>u});var t=s(8774),r=s(5065);const l=(0,r.A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),c=(0,r.A)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),a=(0,r.A)("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),o=(0,r.A)("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]),i=(0,r.A)("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),d=(0,r.A)("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var h=s(4848);const u=e=>{let{level:n,message:s}=e;const r={0:{title:"Deprecated",icon:(0,h.jsx)(l,{})},1:{title:"Experimental",icon:(0,h.jsx)(c,{})},1.1:{title:"Early Development",icon:(0,h.jsx)(a,{})},1.2:{title:"Release Candidate",icon:(0,h.jsx)(o,{})},2:{title:"Stable",icon:(0,h.jsx)(i,{})},3:{title:"Legacy",icon:(0,h.jsx)(d,{})}};return(0,h.jsxs)("section",{className:"stability","data-level":n,children:[(0,h.jsx)(t.A,{to:"/docs/stability-badges",children:(0,h.jsxs)("header",{children:[(0,h.jsx)("strong",{children:n}),(0,h.jsx)("span",{children:r[n].title}),r[n].icon]})}),s?(0,h.jsx)("p",{children:s}):null]})}},5065:(e,n,s)=>{s.d(n,{A:()=>l});var t=s(6540),r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const l=(e,n)=>{const s=(0,t.forwardRef)((({color:s="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:a,className:o="",children:i,...d},h)=>{return(0,t.createElement)("svg",{ref:h,...r,width:l,height:l,stroke:s,strokeWidth:a?24*Number(c)/Number(l):c,className:["lucide",`lucide-${u=e,u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o].join(" "),...d},[...n.map((([e,n])=>(0,t.createElement)(e,n))),...Array.isArray(i)?i:[i]]);var u}));return s.displayName=`${e}`,s}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(6540);const r={},l=t.createContext(r);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);