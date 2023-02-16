(function(){"use strict";var e={862:function(e,t,n){var s=n(9242),a=n(3396);function i(e,t,n,s,i,r){const o=(0,a.up)("MainMenu"),l=(0,a.up)("HowTo"),u=(0,a.up)("Game");return(0,a.wg)(),(0,a.iD)(a.HY,null,["menu"==i.state||"menu"==i.lingerState?((0,a.wg)(),(0,a.j4)(o,{key:0,onButtonSelected:r.handleSelect},null,8,["onButtonSelected"])):(0,a.kq)("",!0),"howto"==i.state||"howto"==i.lingerState?((0,a.wg)(),(0,a.j4)(l,{key:1,onBack:r.setTabMenu},null,8,["onBack"])):(0,a.kq)("",!0),"game"==i.state||"game"==i.lingerState?((0,a.wg)(),(0,a.j4)(u,{key:2,gameVars:i.gameVars,settingsData:i.settingsData,onBack:r.setTabMenu},null,8,["gameVars","settingsData","onBack"])):(0,a.kq)("",!0)],64)}var r=n(7139);const o=(0,a._)("h1",{class:"text-5xl text-center text-white select-none"},"Mancala",-1),l={class:"absolute w-1/2 left-1/4 grid",style:{height:"60%",top:"20%"}},u=(0,a._)("p",{class:"m-auto text-white gameAnimRight select-none",style:{"animation-delay":"1s","animation-fill-mode":"backwards"}},"Kristaps Štāls, Rīgas Valsts 1. ģimnāzija",-1),c=[u];function h(e,t,n,s,i,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:(0,r.C_)(["absolute w-1/2 h-3/4 fromup",{todown:i.downAnimation}]),style:{top:"12.5%",left:"25%"}},[o,(0,a._)("div",l,[(0,a._)("button",{class:"btn-green main-menu-button",onClick:t[0]||(t[0]=e=>u.buttonClicked("singleplayer"))},"1 player"),(0,a._)("button",{class:"btn-green mt-6 main-menu-button",onClick:t[1]||(t[1]=e=>u.buttonClicked("singleplayerp2"))},"1 player (cpu starts)"),(0,a._)("button",{class:"btn-green mt-6 main-menu-button",onClick:t[2]||(t[2]=e=>u.buttonClicked("multiplayer"))},"2 Players"),(0,a._)("button",{class:"btn-blue mt-6 main-menu-button",onClick:t[3]||(t[3]=e=>u.buttonClicked("howto"))},"How-to"),(0,a._)("button",{class:"btn-blue mt-6 main-menu-button",onClick:t[4]||(t[4]=e=>u.buttonClicked("statistics"))},"Statistics"),(0,a._)("button",{class:"btn-blue mt-6 main-menu-button",onClick:t[5]||(t[5]=e=>u.buttonClicked("settings"))},"Settings")])],2),(0,a._)("div",{class:(0,r.C_)(["absolute flex",{todownfast:i.downAnimation}]),style:{height:"10%",width:"20%",top:"90%",left:"80%"}},c,2)],64)}var m={data(){return{downAnimation:!1}},methods:{buttonClicked(e){this.disappearAnimation(),this.$emit("buttonSelected",e)},disappearAnimation(){this.downAnimation=!0}}},d=n(89);const p=(0,d.Z)(m,[["render",h]]);var g=p;const f={class:"absolute w-3/4 h-1/2",style:{top:"25%",left:"12.5%"}},b={class:"absolute w-4/6 h-1/2 bg-blue-500 border-2 gameAnimDown grid grid-cols-6 p-5 gap-5",style:{left:"16.66666%",top:"50%"}},k={class:"absolute w-1/6 h-full bg-blue-500 border-2 gameAnimRight p-5",style:{left:"83.33333%"}},v={class:"absolute w-4/6 h-1/2 bg-red-500 border-2 gameAnimUp grid grid-cols-6 p-5 gap-5",style:{left:"16.66666%"}},w={class:"absolute w-1/6 h-full bg-red-500 border-2 gameAnimLeft p-5"},S={class:"absolute flex gameAnimNameUp select-none",style:{width:"12.5%",height:"25%"}},P={class:"m-auto text-4xl text-red-500"},y={class:"absolute flex gameAnimNameUp select-none",style:{width:"12.5%",height:"25%",left:"12.5%"}},x={key:0,class:"m-auto text-xl"},T={class:"absolute flex gameAnimNameDown select-none",style:{width:"12.5%",height:"25%",top:"75%",left:"87.5%"}},G={class:"m-auto text-4xl text-blue-500"},C={class:"absolute flex gameAnimCloseButton",style:{width:"12.5%",height:"25%",left:"87.5%"}},V={key:0,class:"absolute flex gameAnimNameDown select-none",style:{width:"25%",height:"25%",top:"75%",left:"37.5%","animation-delay":"1.33s"}},_={key:0,class:"m-auto text-6xl"},N={key:1,class:"m-auto text-6xl"},A={key:1,class:"absolute flex select-none",style:{width:"25%",height:"25%",top:"75%",left:"37.5%"}},M={class:"m-auto text-6xl"},B={key:2,class:"absolute flex gameAnimNameUp select-none",style:{width:"25%",height:"25%",left:"37.5%","animation-delay":"0s"}},I={class:"m-auto text-4xl"},D={key:3,class:"absolute flex gameAnimNameDown select-none",style:{width:"12.5%",height:"25%",top:"75%","animation-delay":"0s"}},E={class:"m-auto text-4xl"};function O(e,t,n,s,i,o){const l=(0,a.up)("Pocket"),u=(0,a.up)("popup");return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["absolute text-white w-full h-full",{todown100:i.close}])},[(0,a._)("div",f,[(0,a._)("div",b,[(0,a.Wm)(l,{Value:i.currentGameState[0],id:0,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[1],id:1,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[2],id:2,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[3],id:3,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[4],id:4,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[5],id:5,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"])]),(0,a._)("div",k,[(0,a.Wm)(l,{Value:i.currentGameState[6],id:6,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"])]),(0,a._)("div",v,[(0,a.Wm)(l,{Value:i.currentGameState[12],id:12,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[11],id:11,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[10],id:10,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[9],id:9,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[8],id:8,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"]),(0,a.Wm)(l,{Value:i.currentGameState[7],id:7,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"])]),(0,a._)("div",w,[(0,a.Wm)(l,{Value:i.currentGameState[13],id:13,isSelected:i.pocketSelected,onButtonPressed:o.handlePress},null,8,["Value","isSelected","onButtonPressed"])])]),(0,a._)("div",S,[(0,a._)("p",P,(0,r.zw)(i.p2Name),1)]),(0,a._)("div",y,[i.aiThinking?((0,a.wg)(),(0,a.iD)("p",x,"Thinking...")):(0,a.kq)("",!0)]),(0,a._)("div",T,[(0,a._)("p",G,(0,r.zw)(i.p1Name),1)]),(0,a._)("div",C,[(0,a._)("button",{class:"btn-red m-auto w-1/2 h-1/4 text-4xl",onClick:t[0]||(t[0]=(...e)=>o.backToMenu&&o.backToMenu(...e))},"EXIT")]),i.gameEnded?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("p",M," Winner: "+(0,r.zw)(i.winner),1)])):((0,a.wg)(),(0,a.iD)("div",V,[i.p1turn?((0,a.wg)(),(0,a.iD)("p",_,(0,r.zw)(i.p1Name)+"'s turn",1)):((0,a.wg)(),(0,a.iD)("p",N,(0,r.zw)(i.p2Name)+"'s turn",1))])),i.round>=2?((0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("p",I,"Turn "+(0,r.zw)(Math.floor(i.round)),1)])):(0,a.kq)("",!0),i.timePassed>60?((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("p",E,(0,r.zw)(o.formatTime),1)])):(0,a.kq)("",!0),i.popup?((0,a.wg)(),(0,a.j4)(u,{key:4,message:i.popupMessage,player1:i.popupTurnP1},null,8,["message","player1"])):(0,a.kq)("",!0)],2)}n(7658);var U={bestMove(e,t){var n=this.copyToNewArray(e),s=this.getTotalUncapturedGems(n);s<15?t+=3:s<20?t+=2:s<30?t+=1:s>45&&(t-=1),console.log("searching at depth "+t+"...");var a=this.minimax(n,t,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,!0,!0);return console.log("best move: "+a),a},minimax(e,t,n,s,a,i){var r=this.findPossibleMoves(e,!a);if(t<=0&&a||0==r.length)return 0==r.length&&(e=this.getEndGame(e)),e[13]-e[6];var o=null,l=null;if(a){l=Number.NEGATIVE_INFINITY;for(let a=0;a<r.length;a++){var[u,c]=this.makeMove(e,r[a]+7);if(h=c?this.minimax(u,t-1,n,s,!0,!1):this.minimax(u,t-1,n,s,!1,!1),h>l&&(o=r[a]),l=Math.max(l,h),n=Math.max(n,l),l>=s)break}}else{l=Number.POSITIVE_INFINITY;for(let a=0;a<r.length;a++){var h,[u,c]=this.makeMove(e,r[a]);if(h=c?this.minimax(u,t-1,n,s,!1,!1):this.minimax(u,t-1,n,s,!0,!1),l=Math.min(l,h),s=Math.min(s,l),l<=n)break}}return i?(console.log("Value for move: "+l),o):l},copyToNewArray(e){var t=[];for(let n=0;n<e.length;n++)t.push(e[n]);return t},makeMove(e,t){var n=this.copyToNewArray(e),s=!1,a=null;a=t<6;var i=n[t],r=t;n[r]=0;for(let o=0;o<i;o++)r=this.getNextPocket(r,a),n[r]++;return n=this.checkCapture(n,r,a),this.checkBonusTurn(r)&&(s=!0),[n,s]},checkBonusTurn(e,t){return 6==e||13==e},getNextPocket(e,t){return e++,t?13==e&&(e=0):6==e&&(e=7),e%=14,e},checkCapture(e,t,n){var s=12-t,a=this.copyToNewArray(e);return 1==e[t]&&0!=e[s]&&(n?t<6&&(a=this.performCapture(a,t,n)):t>6&&t<13&&(a=this.performCapture(a,t,n))),a},performCapture(e,t,n){var s=this.copyToNewArray(e),a=12-t,i=s[a]+1;return n?s[6]+=i:s[13]+=i,s[t]=0,s[a]=0,s},findPossibleMoves(e,t){var n=[],s=0;t||(s=7);for(let a=0;a<6;a++)0!=e[a+s]&&n.push(a);return n},getTotalUncapturedGems(e){var t=0;for(let n=0;n<6;n++)t+=e[n];for(let n=7;n<13;n++)t+=e[n];return t},getEndGame(e){for(let t=0;t<6;t++)e[6]+=e[t],e[t]=0;for(let t=7;t<13;t++)e[13]+=e[t],e[t]=0;return e}},W=U;const j={class:"text-4xl"};function z(e,t,n,s,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["h-full rounded-3xl",{player1pocketbg:o.p1,player2pocketbg:!o.p1,highlightPocket:o.highlight,bumpAnim:i.bumpAnim}])},[(0,a._)("button",{class:"w-full h-full enlarge",onClick:t[0]||(t[0]=(...e)=>o.buttonClick&&o.buttonClick(...e))},[(0,a._)("span",j,(0,r.zw)(n.Value),1)])],2)}var q={data(){return{bumpAnim:!1}},props:["Value","id","isSelected"],methods:{buttonClick(){this.$emit("buttonPressed",this.id)}},watch:{Value(e,t){0==this.bumpAnim&&(this.bumpAnim=!0,setTimeout((()=>{this.bumpAnim=!1}),100))}},computed:{p1(){return!(this.id>=7)},highlight(){return this.id==this.isSelected}}};const H=(0,d.Z)(q,[["render",z]]);var R=H;const Y={class:"absolute flex h-full w-full popupAnim select-none"};function Z(e,t,n,s,i,o){return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("p",{class:(0,r.C_)(["m-auto text-9xl",{player1popup:n.player1,player2popup:!n.player1}])},(0,r.zw)(n.message),3)])}var F={props:["message","player1"]};const L=(0,d.Z)(F,[["render",Z]]);var $=L,X={components:{Pocket:R,Popup:$},props:["gameVars","settingsData"],data(){return{close:!1,currentGameState:[4,4,4,4,4,4,0,4,4,4,4,4,4,0],p1turn:!0,round:1,timeCreated:0,timePassed:0,timeInterval:null,moveInProgress:!1,gameEnded:!1,p1Name:null,p2Name:null,aiThinking:!1,popup:!1,popupMessage:null,popupTurnP1:!0,pocketSelected:null,winner:null}},mounted(){1==this.gameVars.CPU?(this.p1Name="Player",this.p2Name="CPU"):(this.p1Name="Player 1",this.p2Name="Player 2"),0==this.gameVars.P1Start&&(this.p1turn=!1,this.round=.5);var e=new Date;this.timeCreated=e.getTime(),this.timeInterval=setInterval((()=>{this.updateTime(),"CPU"!=this.p2Name||0!=this.p1turn||this.gameEnded||this.moveInProgress||this.aiThinking||this.makeAiMove()}),100)},unmounted(){clearInterval(this.timeInterval)},methods:{handlePress(e){this.isMoveLegal(e,!0)&&this.makeMove(e)},makeMove(e){var t=this.settingsData.animationDelay,n=this.currentGameState[e],s=e,a=0;for(this.moveInProgress=!0,this.pocketSelected=e,a=0;a<n;a++)setTimeout((()=>{this.currentGameState[e]-=1,s=this.getNextPocket(s),this.currentGameState[s]++}),t*(a+1));setTimeout((()=>{this.checkCapture(s,this.p1turn),this.checkEndOfGame(),this.checkBonusTurn(s)?this.showPopup("BONUS TURN",this.p1turn):this.p1turn=!this.p1turn,this.moveInProgress=!1,this.pocketSelected=null}),t*(n+1))},getNextPocket(e){return e++,this.p1turn?13==e&&(e=0):6==e&&(e=7),e%=14,e},checkCapture(e,t){var n=12-e;1==this.currentGameState[e]&&0!=this.currentGameState[n]&&(t?e<6&&(this.performCapture(e),this.showPopup("CAPTURE",t)):e>6&&e<13&&(this.performCapture(e),this.showPopup("CAPTURE",t)))},performCapture(e){var t=12-e,n=this.currentGameState[t]+1;this.p1turn?this.currentGameState[6]+=n:this.currentGameState[13]+=n,this.currentGameState[e]=0,this.currentGameState[t]=0},checkBonusTurn(e){return!!(this.p1turn&&6==e||!this.p1turn&&13==e)},checkEndOfGame(){var e=0,t=0;for(e=0;e<6;e++)t+=this.currentGameState[e];if(0==t)this.endGame();else{for(t=0,e=7;e<13;e++)t+=this.currentGameState[e];0==t&&this.endGame()}},endGame(){var e=0,t=0;for(e=0;e<6;e++)t+=this.currentGameState[e],this.currentGameState[e]=0;for(this.currentGameState[6]+=t,t=0,e=7;e<13;e++)t+=this.currentGameState[e],this.currentGameState[e]=0;this.currentGameState[13]+=t,this.currentGameState[6]>this.currentGameState[13]?this.winner=this.p1Name:this.currentGameState[6]<this.currentGameState[13]?this.winner=this.p2Name:this.winner="Draw",this.gameEnded=!0},makeAiMove(){this.moveInProgress||(this.aiThinking=!0,setTimeout((()=>{var e=!1,t=0;while(!e)t=W.bestMove(this.currentGameState,this.settingsData.baseDepth)+7,this.isMoveLegal(t,!1)&&(e=!0);this.makeMove(t),this.aiThinking=!1}),20))},isMoveLegal(e,t){if(0!=this.currentGameState[e]&&!this.moveInProgress)if(this.p1turn){if(e<6)return!0}else if(e>6&&e<13&&(0==this.gameVars.CPU||!t))return!0;return!1},showPopup(e,t){this.popupMessage=e,this.popupTurnP1=t,this.popup=!0,setTimeout((()=>{this.popup=!1}),800)},backToMenu(){this.close=!0,this.$emit("back")},updateTime(){var e=new Date;this.timePassed=Math.round((e.getTime()-this.timeCreated)/1e3)}},watch:{p1turn(e,t){this.round+=.5}},computed:{formatTime(){var e="";return this.timePassed>=3600&&(e=e.concat(Math.floor(this.timePassed/3600).toString()),e=e.concat(":"),Math.floor(this.timePassed/60)%60<10&&(e=e.concat("0"))),this.timePassed>=60&&(e=e.concat((Math.floor(this.timePassed/60)%60).toString()),e=e.concat(":"),this.timePassed%60<10&&(e=e.concat("0"))),e=e.concat((this.timePassed%60).toString()),e}}};const K=(0,d.Z)(X,[["render",O]]);var J=K;const Q=(0,a.uE)('<div class="absolute w-full h-3/4 text-center" style="top:12.5%;"><h1 class="text-5xl text-center text-white select-none">How-to</h1><p class="text-white text-3xl p-20" style="line-height:1.8;">Objective:<br> Collect as many pieces as possible into your mancala (big pocket)<br><br> Gameplay:<br> 1) Each turn the player must pick up the pieces from 1 of their pocket and deposit them one by one into pockets moving clockwise<br> (If you run into the opponents mancala, instead of depositing a piece into it, skip it instead)<br> 2) If the last piece you deposit is into your mancala, take another turn<br> 3) If the last piece you deposit is into an empty pocket on your side, capture all the pieces in this and the opposing pocket<br> 4) If there is no legal move, the game ends and the pieces left on ether side of the board are collected into that sides mancala<br></p></div>',1),ee={class:"absolute flex",style:{width:"12.5%",height:"25%",left:"87.5%","animation-delay":"0s"}};function te(e,t,n,s,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(["absolute w-full h-full fromup100",{todown100:i.downAnimation}])},[Q,(0,a._)("div",ee,[(0,a._)("button",{class:"btn-red m-auto w-1/2 h-1/4 text-4xl",onClick:t[0]||(t[0]=(...e)=>o.backToMenu&&o.backToMenu(...e))},"EXIT")])],2)}var ne={data(){return{downAnimation:!1}},methods:{backToMenu(){this.disappearAnimation(),this.$emit("back")},disappearAnimation(){this.downAnimation=!0}}};const se=(0,d.Z)(ne,[["render",te]]);var ae=se,ie={name:"App",components:{MainMenu:g,Game:J,HowTo:ae},data(){return{state:"menu",lingerState:null,settingsData:{animationDelay:300,baseDepth:11,evalBar:!1},gameVars:{}}},methods:{handleSelect(e){switch(e){case"singleplayer":this.gameVars={P1Start:!0,CPU:1},this.state="game";break;case"singleplayerp2":this.gameVars={P1Start:!1,CPU:1},this.state="game";break;case"multiplayer":this.gameVars={P1Start:!0,CPU:0},this.state="game";break;default:this.state=e}},setTabMenu(){this.state="menu"}},watch:{state(e,t){this.lingerState=t,setTimeout((()=>{this.lingerState=null}),500)}}};const re=(0,d.Z)(ie,[["render",i]]);var oe=re;(0,s.ri)(oe).mount("#app")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,i){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],a=e[c][1],i=e[c][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,r=s[0],o=s[1],l=s[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var c=l(n)}for(t&&t(s);u<r.length;u++)i=r[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},s=self["webpackChunkmancala_game"]=self["webpackChunkmancala_game"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(862)}));s=n.O(s)})();
//# sourceMappingURL=app.7d4ada41.js.map