/*https://unminify.com & https://www.toptal.com/developers/javascript-minifier*/"use strict";var configs=function(){var e,t=function(e){for(var n in e=e||t.defaultOptions,t.defaultOptions)this[n]=e[n]||t.defaultOptions[n]};return t.defaultOptions={general_help:"Below there's a list of commands that you can use.\nYou can use autofill by pressing the TAB key, autocompleting if there's only 1 possibility, or showing you a list of possibilities.",ls_help:"List information about the files and folders (the current directory by default).",cat_help:"Read FILE(s) content and print it to the standard output (screen).",whoami_help:"Print the user name associated with the current effective user ID and more info.",_help:"Print the system date and time.",help_help:"Print this menu.",clear_help:"Clear the terminal screen.",reboot_help:"Reboot the system.",exit_help:"Exit the terminal.",welcome:"Welcome to the minimalistic side of me, I love the terminal because it gets the work done efficiently.\n\nTo get started, execute the 'help' command.\n\nCommand autocomplete with 'TAB' works too 😊",internet_explorer_warning:"Hey I see that you're using internet explorer (the old one) it won't work properly here, try the new Microsoft Edge.",welcome_file_name:"root.txt",invalid_command_message:"<value>: command not found.",reboot_message:"Rebooting...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",usage:"Usage",file:"file",file_not_found:"File '<value>' not found.",username:"Username",hostname:"Host",platform:"Platform",accesible_cores:"Accessible cores",language:"Language",value_token:"<value>",host:"th3-gr00t.tk",user:"gr00t",is_root:!1,type_delay:15},{getInstance:function(n){return void 0===e&&(e=new t(n)),e}}}(),files=function(){var e,t=function(e){for(var n in e=e||t.defaultOptions,t.defaultOptions)this[n]=e[n]||t.defaultOptions[n]};return t.defaultOptions={"about.txt":"Hello, I am the name th3_gr00t.\nA vulnerability researcher and I love to tinker, build and break stuff.","interests.txt":"Hobbies and Favs:\n-> Cycling\n-> I love to ride Mortocycles\n-> Playing Online FPS games (Blackshot Global Die Hard Player)\n-> Offroad Motor sports (on YT --\x3e Red Bull Rampage, The Mint 400, Baja 1000 and Extreme Enduro)\n-> Action Movies **Cinema Mode**\n-> Awesome Technology\n-> Travelling\n-> Intellectual conversations plus content (Movies and Youtube Videos)\n-> DIY stuff\n-> Planning to attend Baja 1000 and The Mint 400","twitter.txt":"https://twitter.com/th3_gr00t/","blog.txt":"https://th33gr00t.blogspot.com/","linkedin.txt":"https://www.linkedin.com/in/peter-numi-b14b71145/"},{getInstance:function(n){return void 0===e&&(e=new t(n)),e}}}(),main=function(){var e=window.navigator.userAgent.indexOf("MSIE ")>0||!!navigator.userAgent.match(/Trident.*rv\:11\./),t=function(e){e.preventDefault(),e.stopPropagation()},n=function(){window.scrollTo(0,document.body.scrollHeight)},i=function(e){this.message=e,"captureStackTrace"in Error?Error.captureStackTrace(this,i):this.stack=(new Error).stack};i.prototype=Object.create(Error.prototype),i.prototype.name="InvalidArgumentException",i.prototype.constructor=i;var o={LS:{value:"ls",help:configs.getInstance().ls_help},CAT:{value:"cat",help:configs.getInstance().cat_help},WHOAMI:{value:"whoami",help:configs.getInstance().whoami_help},DATE:{value:"date",help:configs.getInstance().date_help},HELP:{value:"help",help:configs.getInstance().help_help},CLEAR:{value:"clear",help:configs.getInstance().clear_help},EXIT:{value:"exit",help:configs.getInstance().exit_help},REBOOT:{value:"reboot",help:configs.getInstance().reboot_help}},s=function(e,t,n,o,s,r,l,c,h){if(!(e instanceof Node)||"DIV"!==e.nodeName.toUpperCase())throw new i("Invalid value "+e+" for argument 'prompt'.");if(!(t instanceof Node)||"INPUT"!==t.nodeName.toUpperCase())throw new i("Invalid value "+t+" for argument 'cmdLine'.");if(!(n instanceof Node)||"DIV"!==n.nodeName.toUpperCase())throw new i("Invalid value "+n+" for argument 'output'.");if(!(o instanceof Node)||"DIV"!==o.nodeName.toUpperCase())throw new i("Invalid value "+o+" for argument 'sidenav'.");if(!(s instanceof Node)||"IMG"!==s.nodeName.toUpperCase())throw new i("Invalid value "+s+" for argument 'profilePic'.");"string"==typeof r&&"string"==typeof l&&(this.completePrompt=r+"@"+l+":~"+(c?"#":"$")),this.profilePic=s,this.prompt=e,this.cmdLine=t,this.output=n,this.sidenav=o,this.sidenavOpen=!1,this.sidenavElements=[],this.typeSimulator=new a(h,n)};s.prototype.type=function(e,t){this.typeSimulator.type(e,t)},s.prototype.exec=function(){var e=this.cmdLine.value;this.cmdLine.value="",this.prompt.textContent="",this.output.innerHTML+='<span class="prompt-color">'+this.completePrompt+"</span> "+e+"<br/>"},s.prototype.init=function(){this.sidenav.addEventListener("click",t),this.cmdLine.disabled=!0,this.sidenavElements.forEach(function(e){e.disabled=!0}),this.prepareSideNav(),this.lock(),document.body.addEventListener("click",function(e){this.sidenavOpen&&this.handleSidenav(e),this.focus()}.bind(this)),this.cmdLine.addEventListener("keydown",function(e){13===e.which||13===e.keyCode?(this.handleCmd(),t(e)):9!==e.which&&9!==e.keyCode||(this.handleFill(),t(e))}.bind(this)),this.reset()},s.makeElementDisappear=function(e){e.style.opacity=0,e.style.transform="translateX(-300px)"},s.makeElementAppear=function(e){e.style.opacity=1,e.style.transform="translateX(0)"},s.prototype.prepareSideNav=function(){var e=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};for(var t in files.getInstance()){var n=document.createElement("button");s.makeElementDisappear(n),n.onclick=function(e,t){this.handleSidenav(t),this.cmdLine.value="cat "+e+" ",this.handleCmd()}.bind(this,t),n.appendChild(document.createTextNode(e(t.replace(/\.[^\/.]+$/,"").replace(/_/g," ")))),this.sidenav.appendChild(n),this.sidenavElements.push(n)}document.getElementById("sidenavBtn").addEventListener("click",this.handleSidenav.bind(this))},s.prototype.handleSidenav=function(e){this.sidenavOpen?(this.profilePic.style.opacity=0,this.sidenavElements.forEach(s.makeElementDisappear),this.sidenav.style.width="50px",document.getElementById("sidenavBtn").innerHTML="&#9776;",this.sidenavOpen=!1):(this.sidenav.style.width="300px",this.sidenavElements.forEach(s.makeElementAppear),document.getElementById("sidenavBtn").innerHTML="&times;",this.profilePic.style.opacity=1,this.sidenavOpen=!0),document.getElementById("sidenavBtn").blur(),t(e)},s.prototype.lock=function(){this.exec(),this.cmdLine.blur(),this.cmdLine.disabled=!0,this.sidenavElements.forEach(function(e){e.disabled=!0})},s.prototype.unlock=function(){this.cmdLine.disabled=!1,this.prompt.textContent=this.completePrompt,this.sidenavElements.forEach(function(e){e.disabled=!1}),n(),this.focus()},s.prototype.handleFill=function(){var e=this.cmdLine.value.trim().split(" ");if(e.length<=1||2===e.length&&e[0]===o.CAT.value){this.lock();var t=[];if(e[0].toLowerCase()===o.CAT.value)for(var n in 1===e.length&&(e[1]=""),files.getInstance())n.startsWith(e[1].toLowerCase())&&t.push(o.CAT.value+" "+n);else for(var i in o)o[i].value.startsWith(e[0].toLowerCase())&&t.push(o[i].value);1===t.length?(this.cmdLine.value=t[0]+" ",this.unlock()):t.length>1?this.type(t.join("\n"),function(){this.cmdLine.value=e.join(" "),this.unlock()}.bind(this)):(this.cmdLine.value=e.join(" "),this.unlock())}},s.prototype.handleCmd=function(){var e=this.cmdLine.value.trim().split(" ");switch(this.lock(),e[0]){case o.CAT.value:this.cat(e);break;case o.LS.value:this.ls();break;case o.WHOAMI.value:this.whoami();break;case o.DATE.value:this.date();break;case o.HELP.value:this.help();break;case o.CLEAR.value:this.clear();break;case o.EXIT.value:this.exit();break;case o.REBOOT.value:this.reboot();break;default:this.invalidCommand(e)}},s.prototype.cat=function(e){var t;t=e.length<=1?configs.getInstance().usage+": "+o.CAT.value+" <"+configs.getInstance().file+">":e[1]&&!e[1]!==configs.getInstance().welcome_file_name&&files.getInstance().hasOwnProperty(e[1])?e[1]===configs.getInstance().welcome_file_name?configs.getInstance().welcome:files.getInstance()[e[1]]:configs.getInstance().file_not_found.replace(configs.getInstance().value_token,e[1]),this.type(t,this.unlock.bind(this))},s.prototype.ls=function(){var e=".\n..\n";for(var t in files.getInstance())e+=t+"\n";this.type(e.trim(),this.unlock.bind(this))},s.prototype.whoami=function(e){var t=configs.getInstance().username+": "+configs.getInstance().user+"\n"+configs.getInstance().hostname+": "+configs.getInstance().host+"\n"+configs.getInstance().platform+": "+navigator.platform+"\n"+configs.getInstance().accesible_cores+": "+navigator.hardwareConcurrency+"\n"+configs.getInstance().language+": "+navigator.language;this.type(t,this.unlock.bind(this))},s.prototype.date=function(e){this.type((new Date).toString(),this.unlock.bind(this))},s.prototype.help=function(){var e=configs.getInstance().general_help+"\n\n";for(var t in o)e+=o[t].value+" - "+o[t].help+"\n";this.type(e.trim(),this.unlock.bind(this))},s.prototype.clear=function(){this.output.textContent="",this.prompt.textContent="",this.prompt.textContent=this.completePrompt,this.unlock()},s.prototype.exit=function(){location.replace("https://th3-gr00t.tk/")},s.prototype.reboot=function(){this.type(configs.getInstance().reboot_message,this.reset.bind(this))},s.prototype.reset=function(){this.output.textContent="",this.prompt.textContent="",this.typeSimulator&&this.type(configs.getInstance().welcome+(e?"\n"+configs.getInstance().internet_explorer_warning:""),function(){this.unlock()}.bind(this))},s.prototype.invalidCommand=function(e){this.type(configs.getInstance().invalid_command_message.replace(configs.getInstance().value_token,e[0]),this.unlock.bind(this))},s.prototype.focus=function(){this.cmdLine.focus()};var a=function(e,t){if((e=parseInt(e))===Number.NaN||e<0)throw new i("Invalid value "+e+" for argument 'timer'.");if(!(t instanceof Node))throw new i("Invalid value "+t+" for argument 'output'.");this.timer=e,this.output=t};return a.prototype.type=function(e,t){var i;((i=e).startsWith("http")||i.startsWith("www"))&&-1===i.indexOf(" ")&&-1===i.indexOf("\n")&&window.open(e);var o=0,s=this.output,a=this.timer,r=!1,l=function(){r=!0}.bind(this);document.addEventListener("dblclick",l),function i(){if(o<e.length){var c=e.charAt(o),h="\n"===c;s.innerHTML+=h?"<br/>":c,o++,r?(s.innerHTML+=e.substring(o).replace(new RegExp("\n","g"),"<br/>")+"<br/>",document.removeEventListener("dblclick",l),t()):setTimeout(i,h?2*a:a)}else t&&(s.innerHTML+="<br/>",document.removeEventListener("dblclick",l),t());n()}()},{listener:function(){new s(document.getElementById("prompt"),document.getElementById("cmdline"),document.getElementById("output"),document.getElementById("sidenav"),document.getElementById("profilePic"),configs.getInstance().user,configs.getInstance().host,configs.getInstance().is_root,configs.getInstance().type_delay).init()}}}();window.onload=main.listener;
