#!/usr/bin/env node
var i=new(await import("commander")).Command().name("Build").version("0.1.1").description("\u{1F300}\u2001Build\u2001\u2014").argument("<File...>","\u{1F4DD}\u2001File\u2001\u2014").option("-ES, --ESBuild <File>","\u{1F4DC}\u2001ESBuild\u2001\u2014").option("-TS, --TypeScript <File>","\u{1F4DC}\u2001TypeScript\u2001\u2014","tsconfig.json").option("-W --Watch","\u{1F441}\uFE0F\u2001Watch\u2001\u2014").action((await import("../Function/Build.js")).default).parse();export{i as default};
