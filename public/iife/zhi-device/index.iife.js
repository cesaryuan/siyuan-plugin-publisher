var zhiDevice=function(u){"use strict";var v=Object.defineProperty;var T=(u,t,a)=>t in u?v(u,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[t]=a;var r=(u,t,a)=>(T(u,typeof t!="symbol"?t+"":t,a),a);const p=class{static isInChromeExtension(){return p.isInBrowser?window.location.href.indexOf("chrome-extension://")>-1:!1}};let t=p;r(t,"isNode",typeof process<"u"),r(t,"isInBrowser",typeof window<"u"),r(t,"BrowserSeperator","/"),r(t,"isElectron",()=>!p.isInBrowser||!window.navigator||!window.navigator.userAgent?!1:/Electron/.test(window.navigator.userAgent)),r(t,"hasNodeEnv",()=>p.isElectron()||p.isNode),r(t,"getQueryString",e=>{if(!p.isInBrowser)return"";const n=window.location.search.substring(1).split("&");for(let s=0;s<n.length;s++){const c=n[s].split("=");if(c[0]===e)return c[1]}return""}),r(t,"replaceUrlParam",(e,i,n)=>{n==null&&(n="");const s=new RegExp("\\b("+i+"=).*?(&|#|$)");if(e.search(s)>=0)return e.replace(s,"$1"+n+"$2");const[c,l]=e.split("#"),[g,P]=c.split("?"),m=new URLSearchParams(P);m.set(i,n);const f=m.toString(),y=g+(f?"?"+f:"");return l?y+"#"+l:y}),r(t,"setUrlParameter",(e,i,n)=>{if(e.includes(i))return p.replaceUrlParam(e,i,n);const s=e.split("#");let c=s[0];const l=s[1];return c.includes("?")?c+=`&${i}=${n}`:c+=`?${i}=${n}`,l&&(c+="#"+l),c}),r(t,"reloadTabPage",(e,i=200)=>{setTimeout(function(){if(p.isInBrowser){const n=window.location.href;window.location.href=p.setUrlParameter(n,"tab",e)}},i)}),r(t,"reloadPage",()=>{setTimeout(function(){p.isInBrowser&&window.location.reload()},200)}),r(t,"reloadPageWithMessageCallback",(e,i)=>{i&&i(e),setTimeout(function(){p.isInBrowser&&window.location.reload()},200)});var a=(o=>(o.BasePathType_Appearance="Appearance",o.BasePathType_Data="Data",o.BasePathType_Themes="Themes",o.BasePathType_ZhiTheme="ZhiTheme",o.BasePathType_None="None",o))(a||{});const h=class{static isInSiyuanBrowser(){return t.isInBrowser?typeof window.siyuan<"u"&&typeof window.Lute<"u":!1}static siyuanWindow(){let e;return this.isInSiyuanWidget()?e=parent.window:this.isInSiyuanNewWin()||this.isInSiyuanBrowser()||typeof window<"u"?e=window:e=void 0,e}static async importJs(e,i){let n=e;switch(i){case a.BasePathType_Appearance:n=this.browserJoinPath(this.siyuanAppearanceRelativePath(),e);break;case a.BasePathType_Data:n=this.browserJoinPath(this.siyuanDataRelativePath(),e);break;case a.BasePathType_Themes:n=this.browserJoinPath(this.siyuanThemeRelativePath(),e);break;case a.BasePathType_ZhiTheme:n=this.browserJoinPath(this.zhiThemeRelativePath(),e);break;default:throw new Error("type must be provided")}const{default:s}=await import(n);return s}static async importZhiThemeJs(e){return await this.importJs(e,a.BasePathType_ZhiTheme)}static joinPath(...e){if(t.hasNodeEnv()){const i=this.requireLib("path");if(i)return i.join(...e)}return this.browserJoinPath(...e)}static browserJoinPath(...e){return e.join(t.BrowserSeperator)}static siyuanConfPath(){const e=this.siyuanWindow();if(!e)throw new Error("Not in siyuan env");return e.siyuan.config.system.confDir}static siyuanDataPath(){const e=this.siyuanWindow();if(!e)throw new Error("Not in siyuan env");return e.siyuan.config.system.dataDir}static siyuanDataRelativePath(){if(!this.siyuanWindow())throw new Error("Not in siyuan env");return""}static siyuanAppearancePath(){return this.joinPath(this.siyuanConfPath(),"appearance")}static siyuanAppearanceRelativePath(){if(!this.siyuanWindow())throw new Error("Not in siyuan env");return this.browserJoinPath("","appearance")}static siyuanThemePath(){if(t.hasNodeEnv())return this.joinPath(this.siyuanAppearancePath(),"themes");{const e=this.siyuanWindow();if(!e)throw new Error("Not in siyuan env");return this.joinPath(e.location.origin,"appearance","themes")}}static siyuanThemeRelativePath(){if(!this.siyuanWindow())throw new Error("Not in siyuan env");return this.browserJoinPath("","appearance","themes")}static zhiThemePath(){return this.joinPath(this.siyuanThemePath(),"zhi")}static zhiThemeRelativePath(){return this.browserJoinPath(this.siyuanThemeRelativePath(),"zhi")}};let w=h;r(w,"isInSiyuanWidget",()=>t.isInBrowser?window.frameElement!=null&&window.frameElement.parentElement!=null&&window.frameElement.parentElement.parentElement!=null&&window.frameElement.parentElement.parentElement.getAttribute("data-node-id")!=="":!1),r(w,"isInSiyuanNewWin",()=>!t.isInBrowser||!t.isElectron()?!1:typeof window.terwer<"u"||typeof window.siyuanNewWin<"u"),r(w,"requireLib",(e,i=!0,n=a.BasePathType_None)=>{if(!t.hasNodeEnv())throw new Error("require ony works on node env");let s=e;if(!i)switch(n){case a.BasePathType_Appearance:s=h.joinPath(h.siyuanAppearancePath(),e);break;case a.BasePathType_Data:s=h.joinPath(h.siyuanDataPath(),e);break;case a.BasePathType_Themes:s=h.joinPath(h.siyuanAppearancePath(),"themes",e);break;case a.BasePathType_ZhiTheme:s=h.joinPath(h.siyuanAppearancePath(),"themes","zhi",e);break;default:throw new Error("type must be provided when not use absolute path")}const c=h.siyuanWindow();if(!c)return require(s);if(typeof c.require<"u")return c.require(s)}),r(w,"requireAppearanceLib",e=>h.requireLib(e,!1,a.BasePathType_Appearance)),r(w,"requireDataLib",e=>h.requireLib(e,!1,a.BasePathType_Data)),r(w,"requireThemesLib",e=>h.requireLib(e,!1,a.BasePathType_Themes)),r(w,"requireZhiThemeLib",e=>h.requireLib(e,!1,a.BasePathType_ZhiTheme));var d=(o=>(o.DeviceType_Mobile_Device="Mobile",o.DeviceType_Siyuan_Widget="Siyuan_Widget",o.DeviceType_Siyuan_NewWin="Siyuan_NewWindow",o.DeviceType_Siyuan_MainWin="Siyuan_MainWindow",o.DeviceType_Siyuan_Browser="Siyuan_Browser",o.DeviceType_Chrome_Extension="Chrome_Extension",o.DeviceType_Chrome_Browser="Chrome_Browser",o.DeviceType_Node="Node",o))(d||{});class b{static getDevice(){return this.detectMobileDevice()?d.DeviceType_Mobile_Device:w.isInSiyuanWidget()?d.DeviceType_Siyuan_Widget:w.isInSiyuanNewWin()?d.DeviceType_Siyuan_NewWin:t.isElectron()?d.DeviceType_Siyuan_MainWin:w.isInSiyuanBrowser()?d.DeviceType_Siyuan_Browser:t.isInChromeExtension()?d.DeviceType_Chrome_Extension:t.isNode?d.DeviceType_Node:d.DeviceType_Chrome_Browser}static detectMobileDevice(){let e=!1;return t.isInBrowser&&function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(i.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}}return u.BasePathTypeEnum=a,u.BrowserUtil=t,u.DeviceDetection=b,u.DeviceTypeEnum=d,u.SiyuanDevice=w,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),u}({});
