"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{4710:(e,t,i)=>{let a,r,n;i.d(t,{FJ:()=>s.FJ});var s=i(7318);let o=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],l=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function d(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${h(e)}></audio>
    </slot>
    <slot></slot>
  `}function u(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${h(e)}></video>
    </slot>
    <slot></slot>
  `}function c(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?d:u;static shadowRootOptions={mode:"open"};static Events=o;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...l]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();return e.has(a)?void(!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i)):this.set?void this.set(t,i):void(this.nativeEl&&(this.nativeEl[t]=i))}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){!["id","class"].includes(e)&&(!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i)))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function h(e){let t="";for(let i in e){if(!l.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let m=c(globalThis.HTMLElement??class{},{tag:"video"});c(globalThis.HTMLElement??class{},{tag:"audio"});var p,v,E,b,g,f,y,T,A,k,w,R,S,I,L=e=>{throw TypeError(e)},C=(e,t,i)=>t.has(e)||L("Cannot "+i),D=(e,t,i)=>(C(e,t,"read from private field"),i?i.call(e):t.get(e)),M=(e,t,i)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),O=(e,t,i,a)=>(C(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),x=(e,t,i)=>(C(e,t,"access private method"),i),N=(()=>{try{return"0.31.2"}catch{}return"UNKNOWN"})(),P=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,U={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},W=Object.values(U),B="mux-video",H=class extends m{constructor(){super(),M(this,w),M(this,p),M(this,v),M(this,E,{}),M(this,b,{}),M(this,g),M(this,f),M(this,y),M(this,T),M(this,A,""),M(this,k,e=>{var t;let i=(0,s.yb)(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(O(this,A,"default"),this.updateLogo())}),M(this,S),O(this,v,(0,s.GI)())}static get NAME(){return B}static get VERSION(){return N}static get observedAttributes(){var e;return[...W,...null!=(e=m.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?P:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${m.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[U.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(U.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?s.WG.includes(e)?this.setAttribute(U.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${s.WG.join()}`):this.removeAttribute(U.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(U.PLAYER_INIT_TIME)?+this.getAttribute(U.PLAYER_INIT_TIME):D(this,v)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(U.PLAYER_INIT_TIME):this.setAttribute(U.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=D(this,y))?e:B}set playerSoftwareName(e){O(this,y,e)}get playerSoftwareVersion(){var e;return null!=(e=D(this,f))?e:N}set playerSoftwareVersion(e){O(this,f,e)}get _hls(){var e;return null==(e=D(this,w,R))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=(0,s.vG)(this.nativeEl))?e:null}get errorTranslator(){return D(this,T)}set errorTranslator(e){O(this,T,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(U.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(U.TYPE,e):this.removeAttribute(U.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(U.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(U.DEBUG,""):this.removeAttribute(U.DEBUG))}get disableTracking(){return this.hasAttribute(U.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(U.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(U.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(U.DISABLE_COOKIES,""):this.removeAttribute(U.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(U.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(U.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(U.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(U.MAX_RECONNECT_RETRIES);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(null==e?this.removeAttribute(U.MAX_RECONNECT_RETRIES):this.setAttribute(U.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(U.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(U.START_TIME):this.setAttribute(U.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(U.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(null==e?this.removeAttribute(U.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(U.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(U.INITIAL_ESTIMATE_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(null==e?this.removeAttribute(U.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(U.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(U.MIN_PRELOAD_SEGMENTS);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(null==e?this.removeAttribute(U.MIN_PRELOAD_SEGMENTS):this.setAttribute(U.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(U.PLAYBACK_ID)?this.getAttribute(U.PLAYBACK_ID):null!=(e=(0,s.CL)(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(U.PLAYBACK_ID,e):this.removeAttribute(U.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(U.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(U.MAX_RESOLUTION,e):this.removeAttribute(U.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(U.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(U.MIN_RESOLUTION,e):this.removeAttribute(U.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(U.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(U.MAX_AUTO_RESOLUTION):this.setAttribute(U.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(U.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(U.RENDITION_ORDER,e):this.removeAttribute(U.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(U.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(U.PROGRAM_START_TIME):this.setAttribute(U.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(U.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(U.PROGRAM_END_TIME):this.setAttribute(U.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(U.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(U.ASSET_START_TIME):this.setAttribute(U.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(U.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(U.ASSET_END_TIME):this.setAttribute(U.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(U.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(U.CUSTOM_DOMAIN,e):this.removeAttribute(U.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:D(this,S)}set capRenditionToPlayerSize(e){O(this,S,e)}get drmToken(){var e;return null!=(e=this.getAttribute(U.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(U.DRM_TOKEN,e):this.removeAttribute(U.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(U.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(U.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(U.PLAYBACK_ID)){let[,e]=(0,s._$)(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(U.PLAYBACK_TOKEN,e):this.removeAttribute(U.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(U.PLAYBACK_TOKEN),t=this.getAttribute(U.DRM_TOKEN);return{...D(this,b),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){O(this,b,null!=e?e:{})}get ended(){return(0,s.hu)(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(U.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(U.ENV_KEY,e):this.removeAttribute(U.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(U.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(U.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(U.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(U.STREAM_TYPE))?e:(0,s.Zp)(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(U.STREAM_TYPE,e):this.removeAttribute(U.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(U.TARGET_LIVE_WINDOW)?+this.getAttribute(U.TARGET_LIVE_WINDOW):(0,s.WE)(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(U.TARGET_LIVE_WINDOW):this.setAttribute(U.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(U.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(0,s.Yz)(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(U.LIVE_EDGE_OFFSET))return+this.getAttribute(U.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(U.LIVE_EDGE_OFFSET):this.setAttribute(U.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return(0,s.pD)(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),(0,s.st)(this.nativeEl,e)}get activeCuePoint(){return(0,s.C$)(this.nativeEl)}get cuePoints(){return(0,s.Pv)(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),(0,s.S5)(this.nativeEl,e)}get activeChapter(){return(0,s.IC)(this.nativeEl)}get chapters(){return(0,s.rN)(this.nativeEl)}getStartDate(){return(0,s.tq)(this.nativeEl,this._hls)}get currentPdt(){return(0,s.Ul)(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(U.PREFER_PLAYBACK);if(e===s.Vi.MSE||e===s.Vi.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===s.Vi.MSE||e===s.Vi.NATIVE?this.setAttribute(U.PREFER_PLAYBACK,e):this.removeAttribute(U.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![U.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...D(this,E)}}set metadata(e){O(this,E,null!=e?e:{}),this.mux&&this.mux.emit("hb",D(this,E))}get _hlsConfig(){return D(this,g)}set _hlsConfig(e){O(this,g,e)}get logo(){var e;return null!=(e=this.getAttribute(U.LOGO))?e:D(this,A)}set logo(e){e?this.setAttribute(U.LOGO,e):this.removeAttribute(U.LOGO)}load(){(0,s.n_)(this,this.nativeEl,D(this,w,R))}unload(){(0,s.zN)(this.nativeEl,D(this,w,R),this)}attributeChangedCallback(e,t,i){var a,r;switch(m.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case U.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case U.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?x(this,w,I).call(this):e&&!a?this.unload():e&&a&&(this.unload(),x(this,w,I).call(this));break}case"autoplay":if(i===t)break;null==(a=D(this,w,R))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=D(this,w,R))||r.setPreload(i);break;case U.PLAYBACK_ID:case U.CUSTOM_DOMAIN:case U.MAX_RESOLUTION:case U.MIN_RESOLUTION:case U.RENDITION_ORDER:case U.PROGRAM_START_TIME:case U.PROGRAM_END_TIME:case U.ASSET_START_TIME:case U.ASSET_END_TIME:case U.PLAYBACK_TOKEN:this.src=(0,s.OR)(this);break;case U.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case U.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case U.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case U.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case U.LOGO:(null==i||i!==t)&&this.updateLogo();break;case U.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),x(this,w,I).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case U.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case U.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(D(this,A)||this.logo))}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",D(this,k)),this.nativeEl&&this.src&&!D(this,w,R)&&x(this,w,I).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",D(this,k)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};p=new WeakMap,v=new WeakMap,E=new WeakMap,b=new WeakMap,g=new WeakMap,f=new WeakMap,y=new WeakMap,T=new WeakMap,A=new WeakMap,k=new WeakMap,w=new WeakSet,R=function(){return(0,s.xc)(this.nativeEl)},S=new WeakMap,I=async function(){D(this,p)||(await O(this,p,Promise.resolve()),O(this,p,null),this.load())};let F=new WeakMap;class V extends Error{}class K extends Error{}let $=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function q(){return globalThis.cast?.framework?.CastContext.getInstance()}function Y(){return q()?.getCurrentSession()}function G(){return Y()?.getSessionObj().media[0]}function j(e){return q().setOptions({...z(),...e})}function z(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Q(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function Z(e){let t=e.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return t?.trim()}async function X(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith("blob:"))return!1;try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return $.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function J(e){if(!e||e.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=Z(i),n=Q(r),s=function(e){for(let t of e.split("\n")){let e=t.trim();if(e.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(e)){let t=e.match(/URI="([^"]+)"/i);if(t)return t[1]}}}(t),o=n;if(s)try{let t=new URL(s,e).toString(),i=await (await fetch(t)).text(),a=Z(i);o=Q(a)??n}catch(e){console.error("Error while trying to parse the audio rendition playlist",e)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}let ee=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),et=new WeakSet;!function(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}(()=>{if(!globalThis.chrome?.cast?.isAvailable)return void console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);a||(a=cast.framework,q().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{ee.forEach(t=>F.get(t).onCastStateChanged?.(e))}),q().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{ee.forEach(t=>F.get(t).onSessionStateChanged?.(e))}),ee.forEach(e=>F.get(e).init?.()))});let ei=0;class ea extends EventTarget{#p;#a;#v;#E;#b="disconnected";#g=!1;#f=new Set;#_=new WeakMap;#y=()=>this.#T();constructor(e){super(),this.#p=e,ee.add(this),F.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#A(),onSessionStateChanged:()=>this.#k(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#y),this.#E&&this.#v?.controller&&Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&et.delete(this.#p),this.#a=!1}get #w(){if(et.has(this.#p))return this.#v}get state(){return this.#b}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new V("disableRemotePlayback attribute is present.");return this.#_.set(e,++ei),this.#f.add(e),queueMicrotask(()=>e(this.#R())),ei}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new V("disableRemotePlayback attribute is present.");e?this.#f.delete(e):this.#f.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new V("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new K("The RemotePlayback API is disabled on this platform.");let e=et.has(this.#p);et.add(this.#p),j(this.#p.castOptions),Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await q().requestSession()}catch(t){if(e||et.delete(this.#p),"cancel"===t)return;throw Error(t)}F.get(this.#p)?.loadOnPrompt?.()}#S(){et.has(this.#p)&&(Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),et.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#R(){let e=q()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#A(){let e=q().getCastState();if(et.has(this.#p)&&"CONNECTING"===e&&(this.#b="connecting",this.dispatchEvent(new Event("connecting"))),!this.#g&&e?.includes("CONNECT"))for(let e of(this.#g=!0,this.#f))e(!0);else if(this.#g&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#g=!1,this.#f))e(!1)}async #k(){let{SESSION_RESUMED:e}=a.SessionState;if(q().getSessionState()===e&&this.#p.castSrc===G()?.media.contentId){et.add(this.#p),Object.entries(this.#E).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{G().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#E[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#E[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){a&&!this.#a&&(this.#a=!0,j(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#y),this.#A(),this.#v=new a.RemotePlayer,new a.RemotePlayerController(this.#v),this.#E={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#b="connected",this.dispatchEvent(new Event("connect"))):(this.#S(),this.#b="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#I())}})}#I(){this.#T()}async #T(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=Y()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{G().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let er=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#L={paused:!1};#C=z();#D;#M;get remote(){if(this.#M)return this.#M;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),F.set(this,{loadOnPrompt:()=>this.#O()}),this.#M=new ea(this)}return super.remote}get #w(){return F.get(this.#M)?.getCastPlayer?.()}disconnectedCallback(){this.#M?.destroy(),this.#M=null,F.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#C.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #O(){this.#L.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await X(this.castSrc)){e.contentType||(e.contentType="application/x-mpegURL");let{videoFormat:t,audioFormat:i}=await J(this.castSrc);t?.includes("m4s")||t?.includes("mp4")||t?.includes("m4a")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):i?.includes("aac")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(t?.includes("ts")||i?.includes("ts"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#L.paused,r.activeTrackIds=i,await Y()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#C}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith("blob:")?void 0:e;return this.getAttribute("cast-src")??this.querySelector("source")?.src??t??this.getAttribute("src")??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#D}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t))return void console.error(`castCustomData must be nullish or an object but value was of type ${t}`);this.#D=e}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class en extends Event{track;constructor(e,t){super(e),this.track=t.track}}let es=new WeakMap;function eo(e){var t,i;let a;return es.get(e)??(t=e,i={},(a=es.get(t))||es.set(t,a={}),Object.assign(a,i))}function el(e,t){let i=e.videoTracks;eo(t).media=new WeakRef(e),eo(t).renditionSet||(eo(t).renditionSet=new Set);let a=eo(i).trackSet;a.add(t);let r=a.size-1;r in eu.prototype||Object.defineProperty(eu.prototype,r,{get(){return[...eo(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new en("addtrack",{track:t}))})}function ed(e){let t=eo(e).media?.deref()?.videoTracks;t&&(eo(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new en("removetrack",{track:e}))}))}class eu extends EventTarget{#x;#N;#P;constructor(){super(),eo(this).trackSet=new Set}get #U(){return eo(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#x}set onaddtrack(e){this.#x&&(this.removeEventListener("addtrack",this.#x),this.#x=void 0),"function"==typeof e&&(this.#x=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class ec extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function eh(e){let t=eo(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...eo(e).renditionSet]):[]}class em extends EventTarget{#W;#B;#P;[Symbol.iterator](){return eh(this).values()}get length(){return eh(this).length}getRenditionById(e){return eh(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return eh(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of eh(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class ep{src;id;width;height;bitrate;frameRate;codec;#H=!1;get selected(){return this.#H}set selected(e){if(this.#H!==e){this.#H=e;var t=this;let i=eo(t).media?.deref()?.videoRenditions;i&&!eo(i).changeRequested&&(eo(i).changeRequested=!0,queueMicrotask(()=>{delete eo(i).changeRequested,eo(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class ev{id;kind;label="";language="";sourceBuffer;#H=!1;addRendition(e,t,i,a,r,n){let s=new ep;return s.src=e,s.width=t,s.height=i,s.frameRate=n,s.bitrate=r,s.codec=a,!function(e,t){let i=eo(e).media?.deref()?.videoRenditions;eo(t).media=eo(e).media,eo(t).track=e;let a=eo(e).renditionSet;a.add(t);let r=a.size-1;r in em.prototype||Object.defineProperty(em.prototype,r,{get(){return eh(this)[r]}}),queueMicrotask(()=>{i&&e.selected&&i.dispatchEvent(new ec("addrendition",{rendition:t}))})}(this,s),s}removeRendition(e){let t=eo(e).media?.deref()?.videoRenditions,i=eo(e).track;eo(i).renditionSet.delete(e),queueMicrotask(()=>{let i=eo(e).track;t&&i.selected&&t.dispatchEvent(new ec("removerendition",{rendition:e}))})}get selected(){return this.#H}set selected(e){this.#H!==e&&(this.#H=e,!0===e&&function(e){let t=eo(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(eo(t).changeRequested)return;eo(t).changeRequested=!0,queueMicrotask(()=>{delete eo(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function eE(e){let t=eo(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...eo(e).renditionSet]):[]}class eb extends EventTarget{#W;#B;#P;[Symbol.iterator](){return eE(this).values()}get length(){return eE(this).length}getRenditionById(e){return eE(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return eE(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of eE(this).entries())i.selected=t===e}get onaddrendition(){return this.#W}set onaddrendition(e){this.#W&&(this.removeEventListener("addrendition",this.#W),this.#W=void 0),"function"==typeof e&&(this.#W=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class eg{src;id;bitrate;codec;#H=!1;get selected(){return this.#H}set selected(e){if(this.#H!==e){this.#H=e;var t=this;let i=eo(t).media?.deref()?.audioRenditions;i&&!eo(i).changeRequested&&(eo(i).changeRequested=!0,queueMicrotask(()=>{delete eo(i).changeRequested,eo(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function ef(e,t){let i=e.audioTracks;eo(t).media=new WeakRef(e),eo(t).renditionSet||(eo(t).renditionSet=new Set);let a=eo(i).trackSet;a.add(t);let r=a.size-1;r in ey.prototype||Object.defineProperty(ey.prototype,r,{get(){return[...eo(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new en("addtrack",{track:t}))})}function e_(e){let t=eo(e).media?.deref()?.audioTracks;t&&(eo(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new en("removetrack",{track:e}))}))}class ey extends EventTarget{#x;#N;#P;constructor(){super(),eo(this).trackSet=new Set}get #U(){return eo(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#x}set onaddtrack(e){this.#x&&(this.removeEventListener("addtrack",this.#x),this.#x=void 0),"function"==typeof e&&(this.#x=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class eT{id;kind;label="";language="";sourceBuffer;#F=!1;addRendition(e,t,i){let a=new eg;return a.src=e,a.codec=t,a.bitrate=i,!function(e,t){let i=eo(e).media?.deref()?.audioRenditions;eo(t).media=eo(e).media,eo(t).track=e;let a=eo(e).renditionSet;a.add(t);let r=a.size-1;r in eb.prototype||Object.defineProperty(eb.prototype,r,{get(){return eE(this)[r]}}),queueMicrotask(()=>{i&&e.enabled&&i.dispatchEvent(new ec("addrendition",{rendition:t}))})}(this,a),a}removeRendition(e){let t=eo(e).media?.deref()?.audioRenditions,i=eo(e).track;eo(i).renditionSet.delete(e),queueMicrotask(()=>{let i=eo(e).track;t&&i.enabled&&t.dispatchEvent(new ec("removerendition",{rendition:e}))})}get enabled(){return this.#F}set enabled(e){if(this.#F!==e){this.#F=e;let t=eo(this).media?.deref()?.audioTracks;t&&!eo(t).changeRequested&&(eo(t).changeRequested=!0,queueMicrotask(()=>{delete eo(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let eA=eR(globalThis.HTMLMediaElement,"video"),ek=eR(globalThis.HTMLMediaElement,"audio");function ew(e){if(!e?.prototype)return e;let t=eR(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=eo(e).videoTracks;if(!t&&(t=new eu,eo(e).videoTracks=t,eA)){let i=eA.call(e.nativeEl??e);for(let t of i)el(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof ev)){for(let e of i)ed(e);return}el(e,a.track)}),i.addEventListener("removetrack",e=>{ed(e.track)})}return t}});let i=eR(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=eo(e).audioTracks;if(!t&&(t=new ey,eo(e).audioTracks=t,ek)){let i=ek.call(e.nativeEl??e);for(let t of i)ef(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof eT)){for(let e of i)e_(e);return}ef(e,a.track)}),i.addEventListener("removetrack",e=>{e_(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new ev;return a.kind=e,a.label=t,a.language=i,el(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=ed),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new eT;return a.kind=e,a.label=t,a.language=i,ef(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=e_),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=eo(e).videoRenditions;return t||(eo(t=new em).media=new WeakRef(e),eo(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=eo(e).audioRenditions;return t||(eo(t=new eb).media=new WeakRef(e),eo(e).audioRenditions=t),t};return e}function eR(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var eS=e=>{throw TypeError(e)},eI=(e,t,i)=>t.has(e)||eS("Cannot "+i),eL=(e,t,i)=>(eI(e,t,"read from private field"),i?i.call(e):t.get(e)),eC=(e,t,i)=>t.has(e)?eS("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),eD=(e,t,i,a)=>(eI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eM=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends eM{}globalThis.DocumentFragment=e}var eO,ex=class extends eM{},eN=class{constructor(e,t={}){eC(this,eO),eD(this,eO,null==t?void 0:t.detail)}get detail(){return eL(this,eO)}initCustomEvent(){}};eO=new WeakMap;var eP={document:{createElement:function(e,t){return new ex}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ex)},CustomEvent:eN,EventTarget:eM,HTMLElement:ex,HTMLVideoElement:class extends eM{}},eU="undefined"==typeof window||void 0===globalThis.customElements,eW=eU?eP:globalThis;eU?eP.document:globalThis.document;var eB,eH=class extends er(ew(H)){constructor(){super(...arguments),eC(this,eB)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=eL(this,eB))?e:this.muxCastCustomData}set castCustomData(e){eD(this,eB,e)}};eB=new WeakMap,eW.customElements.get("mux-video")||(eW.customElements.define("mux-video",eH),eW.MuxVideoElement=eH);let eF={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},eV={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},eK={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},e$=Object.entries(eK),eq=e$.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),eY=e$.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(eY).reduce((e,[t,i])=>{let a=eq[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let eG=Object.entries(eq).reduce((e,[t,i])=>{let a=eY[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),ej={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},ez={DISABLED:"disabled",SHOWING:"showing"},eQ={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},eZ={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},eX={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},eJ={FULLSCREEN:"fullscreen"};function e0(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function e1(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function e2(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function e3(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function e4(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function e5(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let e9=e=>new Promise(t=>setTimeout(t,e)),e8={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},e6=(null==(sM=globalThis.navigator)?void 0:sM.language)||"en",e7=(e,t={})=>(e=>{var t,i,a;let[r]=e6.split("-");return(null==(t=e8[e6])?void 0:t[e])||(null==(i=e8[r])?void 0:i[e])||(null==(a=e8.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),te=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],tt=e=>{if(!e4(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&((e,t)=>{let i=1===e?e7(te[t].singular):e7(te[t].plural);return`${e} ${i}`})(e,t)).filter(e=>e).join(", ");return i?e7("{time} remaining",{time:r}):r};function ti(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class ta{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class tr extends ta{}class tn extends tr{constructor(){super(...arguments),this.role=null}}class ts{observe(){}unobserve(){}disconnect(){}}let to={createElement:function(){return new tl.HTMLElement},createElementNS:function(){return new tl.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},tl={ResizeObserver:ts,document:to,Node:tr,Element:tn,HTMLElement:class extends tn{constructor(){super(...arguments),this.innerHTML=""}get content(){return new tl.DocumentFragment}},DocumentFragment:class extends ta{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},td="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,tu=Object.keys(tl).every(e=>e in globalThis),tc=td&&!tu?tl:globalThis,th=td&&!tu?to:globalThis.document,tm=new WeakMap,tp=e=>{let t=tm.get(e);return t||tm.set(e,t=new Set),t},tv=new tc.ResizeObserver(e=>{for(let t of e)for(let e of tp(t.target))e(t)});function tE(e,t){tp(e).add(t),tv.observe(e)}function tb(e,t){let i=tp(e);i.delete(t),i.size||tv.unobserve(e)}function tg(e){let t={};for(let i of e)t[i.name]=i.value;return t}function tf(e){var t;return null!=(t=t_(e))?t:tk(e,"media-controller")}function t_(e){var t;let{MEDIA_CONTROLLER:i}=eV,a=e.getAttribute(i);if(a)return null==(t=tR(e))?void 0:t.getElementById(a)}let ty=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},tT=(e,t)=>((e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]})(e,t)[0],tA=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||tA(e,t.getRootNode().host)),tk=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||tk(e.getRootNode().host,t)};function tw(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=tw(i.shadowRoot))?t:i:null}function tR(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function tS(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function tI(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||tL(e,t)}function tL(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function tC(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function tD(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}tC(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function tM(e,t){return e.hasAttribute(t)}function tO(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}tM(e,t)!=i&&e.toggleAttribute(t,i)}function tx(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function tN(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;tx(e,t,void 0)!==a&&e.setAttribute(t,a)}var tP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tU=(e,t,i)=>(tP(e,t,"read from private field"),i?i.call(e):t.get(e)),tW=(e,t,i,a)=>(tP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class tB extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,sO,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[eV.MEDIA_CONTROLLER,eq.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===eV.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=tU(this,sO))?void 0:a.unassociateElement)||r.call(a,this),tW(this,sO,null)),i&&this.isConnected&&(tW(this,sO,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=tU(this,sO))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),tW(this,sO,function(e){var t;let i=e.getAttribute(eV.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):tk(e,"media-controller")}(this)),this.getAttribute(eV.MEDIA_CONTROLLER)&&(null==(t=null==(e=tU(this,sO))?void 0:e.associateElement)||t.call(e,this)),tU(this,sO)&&(tU(this,sO).addEventListener("pointerdown",this),tU(this,sO).addEventListener("click",this),tU(this,sO).hasAttribute("tabindex")||(tU(this,sO).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(eV.MEDIA_CONTROLLER)&&(null==(t=null==(e=tU(this,sO))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=tU(this,sO))||i.removeEventListener("pointerdown",this),null==(a=tU(this,sO))||a.removeEventListener("click",this),tW(this,sO,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===eQ.TOUCH)return void this.handleTap(e);if(d===eQ.MOUSE||d===eQ.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return tM(this,eq.MEDIA_PAUSED)}set mediaPaused(e){tO(this,eq.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?eF.MEDIA_PLAY_REQUEST:eF.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tc.CustomEvent(t,{composed:!0,bubbles:!0}))}}sO=new WeakMap,tB.shadowRootOptions={mode:"open"},tB.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},tc.customElements.get("media-gesture-receiver")||tc.customElements.define("media-gesture-receiver",tB);var tH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tF=(e,t,i)=>(tH(e,t,"read from private field"),i?i.call(e):t.get(e)),tV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tK=(e,t,i,a)=>(tH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t$=(e,t,i)=>(tH(e,t,"access private method"),i);let tq={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},tY=Object.values(eq);function tG(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(tq.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(eY.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(eY.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class tj extends tc.HTMLElement{constructor(){if(super(),tV(this,sV),tV(this,s$),tV(this,sY),tV(this,sj),tV(this,sQ),tV(this,sx,void 0),tV(this,sN,0),tV(this,sP,null),tV(this,sU,null),tV(this,sW,void 0),this.breakpointsComputed=!1,tV(this,sB,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),tV(this,sH,!1),tV(this,sF,e=>{tF(this,sH)||(setTimeout(()=>{!function(e){tG(e.target,e.contentRect.width)}(e),tK(this,sH,!1)},0),tK(this,sH,!0))}),tV(this,sX,void 0),tV(this,sJ,()=>{if(!tF(this,sX).assignedElements({flatten:!0}).length){tF(this,sP)&&this.mediaUnsetCallback(tF(this,sP));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}tK(this,sx,new MutationObserver(tF(this,sB)))}static get observedAttributes(){return[tq.AUTOHIDE,tq.GESTURES_DISABLED].concat(tY).filter(e=>![eq.MEDIA_RENDITION_LIST,eq.MEDIA_AUDIO_TRACK_LIST,eq.MEDIA_CHAPTERS_CUES,eq.MEDIA_WIDTH,eq.MEDIA_HEIGHT,eq.MEDIA_ERROR,eq.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==tq.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(tK(this,sP,e),e.localName.includes("-")&&await tc.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;tF(this,sx).observe(this,{childList:!0,subtree:!0}),tE(this,tF(this,sF));let t=null!=this.getAttribute(tq.AUDIO)?e7("audio player"):e7("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(tq.USER_INACTIVE,""),tG(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(tK(this,sX,i),tF(this,sX).addEventListener("slotchange",tF(this,sJ))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=tc.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;tb(this,tF(this,sF)),clearTimeout(tF(this,sU)),tF(this,sx).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=tc.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),tF(this,sX)&&(tF(this,sX).removeEventListener("slotchange",tF(this,sJ)),tK(this,sX,null)),tK(this,sH,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){tK(this,sP,null)}handleEvent(e){switch(e.type){case"pointerdown":tK(this,sN,e.timeStamp);break;case"pointermove":t$(this,sV,sK).call(this,e);break;case"pointerup":t$(this,s$,sq).call(this,e);break;case"mouseleave":t$(this,sY,sG).call(this);break;case"mouseup":this.removeAttribute(tq.KEYBOARD_CONTROL);break;case"keyup":t$(this,sQ,sZ).call(this),this.setAttribute(tq.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);tK(this,sW,isNaN(t)?0:t)}get autohide(){return(void 0===tF(this,sW)?2:tF(this,sW)).toString()}get breakpoints(){return tx(this,tq.BREAKPOINTS)}set breakpoints(e){tN(this,tq.BREAKPOINTS,e)}get audio(){return tM(this,tq.AUDIO)}set audio(e){tO(this,tq.AUDIO,e)}get gesturesDisabled(){return tM(this,tq.GESTURES_DISABLED)}set gesturesDisabled(e){tO(this,tq.GESTURES_DISABLED,e)}get keyboardControl(){return tM(this,tq.KEYBOARD_CONTROL)}set keyboardControl(e){tO(this,tq.KEYBOARD_CONTROL,e)}get noAutohide(){return tM(this,tq.NO_AUTOHIDE)}set noAutohide(e){tO(this,tq.NO_AUTOHIDE,e)}get autohideOverControls(){return tM(this,tq.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){tO(this,tq.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return tM(this,tq.USER_INACTIVE)}set userInteractive(e){tO(this,tq.USER_INACTIVE,e)}}sx=new WeakMap,sN=new WeakMap,sP=new WeakMap,sU=new WeakMap,sW=new WeakMap,sB=new WeakMap,sH=new WeakMap,sF=new WeakMap,sV=new WeakSet,sK=function(e){if("mouse"!==e.pointerType&&e.timeStamp-tF(this,sN)<250)return;t$(this,sj,sz).call(this),clearTimeout(tF(this,sU));let t=this.hasAttribute(tq.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&t$(this,sQ,sZ).call(this)},s$=new WeakSet,sq=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(tq.USER_INACTIVE);[this,this.media].includes(e.target)&&t?t$(this,sY,sG).call(this):t$(this,sQ,sZ).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&t$(this,sQ,sZ).call(this)},sY=new WeakSet,sG=function(){if(0>tF(this,sW)||this.hasAttribute(tq.USER_INACTIVE))return;this.setAttribute(tq.USER_INACTIVE,"");let e=new tc.CustomEvent(eY.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},sj=new WeakSet,sz=function(){if(!this.hasAttribute(tq.USER_INACTIVE))return;this.removeAttribute(tq.USER_INACTIVE);let e=new tc.CustomEvent(eY.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},sQ=new WeakSet,sZ=function(){t$(this,sj,sz).call(this),clearTimeout(tF(this,sU));let e=parseInt(this.autohide);e<0||tK(this,sU,setTimeout(()=>{t$(this,sY,sG).call(this)},1e3*e))},sX=new WeakMap,sJ=new WeakMap,tj.shadowRootOptions={mode:"open"},tj.getTemplateHTML=function(e){return`
    <style>
      
      :host([${eq.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${tq.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${tq.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${tq.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${tq.AUDIO}])[${tq.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${tq.AUDIO}])[${tq.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${tq.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${tq.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${tq.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${tq.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${tq.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${tq.USER_INACTIVE}]:not([${eq.MEDIA_PAUSED}]):not([${eq.MEDIA_IS_AIRPLAYING}]):not([${eq.MEDIA_IS_CASTING}]):not([${tq.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${tq.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${tq.USER_INACTIVE}]:not([${tq.NO_AUTOHIDE}]):not([${eq.MEDIA_PAUSED}]):not([${eq.MEDIA_IS_CASTING}]):not([${tq.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${tq.USER_INACTIVE}][${tq.AUTOHIDE_OVER_CONTROLS}]:not([${tq.NO_AUTOHIDE}]):not([${eq.MEDIA_PAUSED}]):not([${eq.MEDIA_IS_CASTING}]):not([${tq.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${tq.AUDIO}])[${eq.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${tB.shadowRootOptions.mode}">
          ${tB.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},tc.customElements.get("media-container")||tc.customElements.define("media-container",tj);var tz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tQ=(e,t,i)=>(tz(e,t,"read from private field"),i?i.call(e):t.get(e)),tZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tX=(e,t,i,a)=>(tz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class tJ{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){tZ(this,s4),tZ(this,s0,void 0),tZ(this,s1,void 0),tZ(this,s2,void 0),tZ(this,s3,new Set),tX(this,s0,e),tX(this,s1,t),tX(this,s2,new Set(i))}[Symbol.iterator](){return tQ(this,s4,s5).values()}get length(){return tQ(this,s4,s5).size}get value(){var e;return null!=(e=[...tQ(this,s4,s5)].join(" "))?e:""}set value(e){var t;e!==this.value&&(tX(this,s3,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...tQ(this,s4,s5)][e]}values(){return tQ(this,s4,s5).values()}forEach(e,t){tQ(this,s4,s5).forEach(e,t)}add(...e){var t,i;e.forEach(e=>tQ(this,s3).add(e)),(""!==this.value||(null==(t=tQ(this,s0))?void 0:t.hasAttribute(`${tQ(this,s1)}`)))&&(null==(i=tQ(this,s0))||i.setAttribute(`${tQ(this,s1)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>tQ(this,s3).delete(e)),null==(t=tQ(this,s0))||t.setAttribute(`${tQ(this,s1)}`,`${this.value}`)}contains(e){return tQ(this,s4,s5).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}s0=new WeakMap,s1=new WeakMap,s2=new WeakMap,s3=new WeakMap,s4=new WeakSet,s5=function(){return tQ(this,s3).size?tQ(this,s3):tQ(this,s2)};let t0=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?ej.CAPTIONS:ej.SUBTITLES,language:i,label:r}},t1=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=t0(e);return{...t,...i}}),t2=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?t0(e):e):"string"==typeof e?t1(e):[e]:[],t3=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,t4=(e=[])=>Array.prototype.map.call(e,t3).join(" "),t5=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},t9=(e,t=[],i=[])=>{let a=t2(i).map(t5);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},t8=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:t5(t);return Array.from(e.textTracks).filter(i)},t6=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(eq.MEDIA_SUBTITLES_SHOWING)},t7="exitFullscreen"in th?"exitFullscreen":"webkitExitFullscreen"in th?"webkitExitFullscreen":"webkitCancelFullScreen"in th?"webkitCancelFullScreen":void 0,ie="fullscreenElement"in th?"fullscreenElement":"webkitFullscreenElement"in th?"webkitFullscreenElement":void 0,it="fullscreenEnabled"in th?"fullscreenEnabled":"webkitFullscreenEnabled"in th?"webkitFullscreenEnabled":void 0,ii=()=>{var e;return r||(r=null==(e=null==th?void 0:th.createElement)?void 0:e.call(th,"video"))},ia=async(e=ii())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([ir(e,i.signal),is(e,t)]);return i.abort(),a},ir=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),is=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await e9(10)}return e.volume!==t},io=/.*Version\/.*Safari\/.*/.test(tc.navigator.userAgent),il=(e=ii())=>(!tc.matchMedia("(display-mode: standalone)").matches||!io)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),id=(e=ii())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[it])||i&&"webkitSupportsFullscreen"in i})({documentElement:th,media:e}),iu=id(),ic=il(),ih=!!tc.WebKitPlaybackTargetAvailabilityEvent,im=!!tc.chrome,ip=e=>t8(e.media,e=>[ej.SUBTITLES,ej.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),iv=e=>t8(e.media,e=>e.mode===ez.SHOWING&&[ej.SUBTITLES,ej.CAPTIONS].includes(e.kind)),iE=(e,t)=>{let i=ip(e),a=iv(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)t9(ez.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=tc.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...tc.navigator.languages]:tc.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;t9(ez.DISABLED,i,a),t9(ez.SHOWING,i,[{language:n,label:s,kind:o}])}}},ib=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?ig(e,t):Object.entries(e).every(([e,i])=>e in t&&ib(i,t[e])))),ig=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>ib(e,t[i])))},i_=Object.values(eX),iy=ia().then(e=>n=e),iT=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof tc.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=tc.customElements.get(t);i&&e instanceof i||(await tc.customElements.whenDefined(t),tc.customElements.upgrade(e))}))},iA=new tc.DOMParser,ik={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==tc.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&tc.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;tc.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===tc.localStorage.getItem("media-chrome-pref-muted");ik.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?tc.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||tc.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=tc.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;ik.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&e4(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[eX.LIVE,eX.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(i_.includes(r))return r===eX.UNKNOWN?a:r;let n=t.duration;return n===1/0?eX.LIVE:Number.isFinite(n)?eX.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=ik.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===eX.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(ik.mediaStreamType.get(e)!==eX.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>ip(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>iv(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![ej.CAPTIONS,ej.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||iE(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=t8(i,{kind:ej.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&iA.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&tA(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!th.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else th.pictureInPictureElement&&th.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[ie];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===eJ.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(ie in e))return tA(n,r);for(;null==e?void 0:e[ie];){if(e[ie]===r)return!0;e=null==(t=e[ie])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,r;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):(e=>{var t;let{documentElement:i}=e;if(t7){let e=null==(t=null==i?void 0:i[t7])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&"connected"===i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&tc.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!iu||!id(t))return eZ.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return ic&&il(t)?(null==t?void 0:t.disablePictureInPicture)?eZ.UNAVAILABLE:void 0:eZ.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return eZ.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&iy.then(t=>e(t?void 0:eZ.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return im&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?eZ.UNAVAILABLE:void 0:eZ.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>ih?(null==t?void 0:t.availability)==="not-available"?eZ.UNAVAILABLE:void 0:eZ.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:eZ.UNAVAILABLE:eZ.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?eZ.UNAVAILABLE:void 0:eZ.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},iw={[eF.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=t8(l,{kind:ej.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[eF.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[eF.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===eX.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[eF.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[eF.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[eF.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[eF.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[eF.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[eF.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[eF.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[eF.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=ip(t),s=t2(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&tc.localStorage.setItem("media-chrome-pref-subtitles-lang",o),t9(ez.SHOWING,n,s)},[eF.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=ip(t);t9(ez.DISABLED,a,null!=i?i:[])},[eF.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){iE(t,i)},[eF.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[eF.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[eF.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[eF.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[eF.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[eF.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[eF.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[eF.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[eF.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var iR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iS=(e,t,i)=>(iR(e,t,"read from private field"),i?i.call(e):t.get(e)),iI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iL=(e,t,i,a)=>(iR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iC=(e,t,i)=>(iR(e,t,"access private method"),i);let iD=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],iM={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class iO extends tj{constructor(){super(),iI(this,or),iI(this,oo),iI(this,od),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,iI(this,s9,new tJ(this,iM.HOTKEYS)),iI(this,s8,void 0),iI(this,s6,void 0),iI(this,s7,null),iI(this,oe,void 0),iI(this,ot,void 0),iI(this,oi,e=>{var t;null==(t=iS(this,s6))||t.dispatch(e)}),iI(this,oa,void 0),iI(this,os,e=>{let{key:t,shiftKey:i}=e;if(!(i&&("/"===t||"?"===t)||iD.includes(t)))return void this.removeEventListener("keyup",iS(this,os));this.keyboardShortcutHandler(e)}),this.associateElement(this);let e={};iL(this,oe,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new tc.CustomEvent(eG[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(iM.NO_HOTKEYS,iM.HOTKEYS,iM.DEFAULT_STREAM_TYPE,iM.DEFAULT_SUBTITLES,iM.DEFAULT_DURATION,iM.NO_MUTED_PREF,iM.NO_VOLUME_PREF,iM.LANG,iM.LOOP,iM.LIVE_EDGE_OFFSET,iM.SEEK_TO_LIVE_OFFSET,iM.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return iS(this,s6)}set mediaStore(e){var t,i;if(iS(this,s6)&&(null==(t=iS(this,ot))||t.call(this),iL(this,ot,void 0)),iL(this,s6,e),!iS(this,s6)&&!this.hasAttribute(iM.NO_DEFAULT_STORE))return void iC(this,or,on).call(this);iL(this,ot,null==(i=iS(this,s6))?void 0:i.subscribe(iS(this,oe)))}get fullscreenElement(){var e;return null!=(e=iS(this,s8))?e:this}set fullscreenElement(e){var t;this.hasAttribute(iM.FULLSCREEN_ELEMENT)&&this.removeAttribute(iM.FULLSCREEN_ELEMENT),iL(this,s8,e),null==(t=iS(this,s6))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return tM(this,iM.DEFAULT_SUBTITLES)}set defaultSubtitles(e){tO(this,iM.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return tx(this,iM.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){tN(this,iM.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return tC(this,iM.DEFAULT_DURATION)}set defaultDuration(e){tD(this,iM.DEFAULT_DURATION,e)}get noHotkeys(){return tM(this,iM.NO_HOTKEYS)}set noHotkeys(e){tO(this,iM.NO_HOTKEYS,e)}get keysUsed(){return tx(this,iM.KEYS_USED)}set keysUsed(e){tN(this,iM.KEYS_USED,e)}get liveEdgeOffset(){return tC(this,iM.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){tD(this,iM.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return tM(this,iM.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){tO(this,iM.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return tM(this,iM.NO_VOLUME_PREF)}set noVolumePref(e){tO(this,iM.NO_VOLUME_PREF,e)}get noMutedPref(){return tM(this,iM.NO_MUTED_PREF)}set noMutedPref(e){tO(this,iM.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return tM(this,iM.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){tO(this,iM.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return tM(this,iM.NO_DEFAULT_STORE)}set noDefaultStore(e){tO(this,iM.NO_DEFAULT_STORE,e)}get resolvedLang(){let[e]=e6.split("-");return e8[e6]?e6:e8[e]?e:"en"}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===iM.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(iM.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===iM.HOTKEYS)iS(this,s9).value=i;else if(e===iM.DEFAULT_SUBTITLES&&i!==t)null==(a=iS(this,s6))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(iM.DEFAULT_SUBTITLES)}});else if(e===iM.DEFAULT_STREAM_TYPE)null==(n=iS(this,s6))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(iM.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===iM.LIVE_EDGE_OFFSET&&i!==t)null==(s=iS(this,s6))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(iM.LIVE_EDGE_OFFSET)?+this.getAttribute(iM.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(iM.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(iM.SEEK_TO_LIVE_OFFSET):this.hasAttribute(iM.LIVE_EDGE_OFFSET)?+this.getAttribute(iM.LIVE_EDGE_OFFSET):void 0}});else if(e===iM.SEEK_TO_LIVE_OFFSET&&i!==t)null==(o=iS(this,s6))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(iM.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(iM.SEEK_TO_LIVE_OFFSET):this.hasAttribute(iM.LIVE_EDGE_OFFSET)?+this.getAttribute(iM.LIVE_EDGE_OFFSET):void 0}});else if(e===iM.NO_AUTO_SEEK_TO_LIVE)null==(l=iS(this,s6))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(iM.NO_AUTO_SEEK_TO_LIVE)}});else if(e===iM.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;iL(this,s8,e),null==(u=iS(this,s6))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===iM.LANG&&i!==t?(e6=i,null==(c=iS(this,s6))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===iM.LOOP&&i!==t?null==(h=iS(this,s6))||h.dispatch({type:eF.MEDIA_LOOP_REQUEST,detail:null!=i}):e===iM.NO_VOLUME_PREF&&i!==t?null==(m=iS(this,s6))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(iM.NO_VOLUME_PREF)}}):e===iM.NO_MUTED_PREF&&i!==t&&(null==(p=iS(this,s6))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(iM.NO_MUTED_PREF)}}))}connectedCallback(){var e,t,i;this.associateElement(this),iS(this,s6)||this.hasAttribute(iM.NO_DEFAULT_STORE)||iC(this,or,on).call(this),null==(e=iS(this,s6))||e.dispatch({type:"documentelementchangerequest",detail:th}),null==(t=iS(this,s6))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),iS(this,s6)&&!iS(this,ot)&&iL(this,ot,null==(i=iS(this,s6))?void 0:i.subscribe(iS(this,oe))),void 0!==iS(this,oa)&&iS(this,s6)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=iS(this,s6))||i.dispatch({type:eF.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:iS(this,oa)}))},0),this.hasAttribute(iM.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),iS(this,s6)){let e=iS(this,s6).getState();iL(this,oa,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=iS(this,s6))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=iS(this,s6))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=iS(this,s6))||r.dispatch({type:eF.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}iS(this,ot)&&(null==(n=iS(this,ot))||n.call(this),iL(this,ot,void 0)),this.unassociateElement(this),iS(this,s7)&&(iS(this,s7).remove(),iL(this,s7,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=iS(this,s6))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=iS(this,s6))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){iV(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=iK(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(eF).forEach(t=>{e.addEventListener(t,iS(this,oi))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(eF).forEach(t=>{e.removeEventListener(t,iS(this,oi))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),iS(this,s6)&&Object.entries(iS(this,s6).getState()).forEach(([t,i])=>{iV([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",iC(this,oo,ol))}disableHotkeys(){this.removeEventListener("keydown",iC(this,oo,ol)),this.removeEventListener("keyup",iS(this,os))}get hotkeys(){return iS(this,s9)}set hotkeys(e){tN(this,iM.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(iM.KEYS_USED))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||iS(this,s9).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&iS(this,s9).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&iS(this,s9).contains("noshift+/")))switch(e.key){case" ":case"k":u=iS(this,s6).getState().mediaPaused?eF.MEDIA_PLAY_REQUEST:eF.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new tc.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?eF.MEDIA_UNMUTE_REQUEST:eF.MEDIA_MUTE_REQUEST,this.dispatchEvent(new tc.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?eF.MEDIA_EXIT_FULLSCREEN_REQUEST:eF.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new tc.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new tc.CustomEvent(eF.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(iM.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(iM.KEYBOARD_BACKWARD_SEEK_OFFSET):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new tc.CustomEvent(eF.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(iM.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(iM.KEYBOARD_FORWARD_SEEK_OFFSET):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new tc.CustomEvent(eF.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(iM.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(iM.KEYBOARD_UP_VOLUME_STEP):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new tc.CustomEvent(eF.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(iM.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(iM.KEYBOARD_DOWN_VOLUME_STEP):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new tc.CustomEvent(eF.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new tc.CustomEvent(eF.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new tc.CustomEvent(eF.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&iC(this,od,ou).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?eF.MEDIA_EXIT_PIP_REQUEST:eF.MEDIA_ENTER_PIP_REQUEST,h=new tc.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}s9=new WeakMap,s8=new WeakMap,s6=new WeakMap,s7=new WeakMap,oe=new WeakMap,ot=new WeakMap,oi=new WeakMap,oa=new WeakMap,or=new WeakSet,on=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=ik,requestMap:r=iw,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0!=e&&(ib(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,E,b,g,f,y,T,A,k,w,R;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await iT(...Object.values(e));let I=l.length>0&&0===t&&s,L=d.media!==o.media,C=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),D=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),O=(null==(E=d.media)?void 0:E.remote)!==(null==(b=o.media)?void 0:b.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(L||I),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(C||I),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(D||I),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||I),B=!!(null==(T=d.media)?void 0:T.remote)&&(O||I),H=!!d.documentElement&&(x||I),F=N||P||U||W||B||H,V=0===l.length&&1===t&&s,K=!!o.media&&(L||V),$=!!(null==(A=o.media)?void 0:A.textTracks)&&(C||V),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(D||V),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||V),G=!!(null==(R=o.media)?void 0:R.remote)&&(O||V),j=!!o.documentElement&&(x||V),z=K||$||q||Y||G||j;if(!(F||z)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),K&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),$&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&H&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&F&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),z){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else F&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode)return void c(r[t](a,d,e));"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(iM.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(iM.DEFAULT_DURATION)?+this.getAttribute(iM.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(iM.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(iM.LIVE_EDGE_OFFSET)?+this.getAttribute(iM.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(iM.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(iM.SEEK_TO_LIVE_OFFSET):this.hasAttribute(iM.LIVE_EDGE_OFFSET)?+this.getAttribute(iM.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(iM.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(iM.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(iM.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(iM.NO_SUBTITLES_LANG_PREF)}})},os=new WeakMap,oo=new WeakSet,ol=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=iS(this,s7))?void 0:t.open)||i||a||!s&&!iD.includes(r))return void this.removeEventListener("keyup",iS(this,os));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||iS(this,s9).contains(`no${r.toLowerCase()}`)||" "===r&&iS(this,s9).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",iS(this,os),{once:!0})},od=new WeakSet,ou=function(){iS(this,s7)||(iL(this,s7,th.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(iS(this,s7))),iS(this,s7).open=!0};let ix=Object.values(eq),iN=Object.values(eK),iP=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(tc.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,eV.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>ix.includes(e)):[]},iU=e=>(e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&tc.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof tc.customElements.get(e.nodeName.toLowerCase()))&&tc.customElements.upgrade(e),iN.some(t=>t in e)})(e)||!!iP(e).length,iW=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},iB={[eq.MEDIA_SUBTITLES_LIST]:t4,[eq.MEDIA_SUBTITLES_SHOWING]:t4,[eq.MEDIA_SEEKABLE]:iW,[eq.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(iW).join(" "),[eq.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[eq.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(e0).join(" ")},[eq.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(e2).join(" ")}},iH=async(e,t,i)=>{var a,r;if(e.isConnected||await e9(0),"boolean"==typeof i||null==i)return tO(e,t,i);if("number"==typeof i)return tD(e,t,i);if("string"==typeof i)return tN(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=iB[t])?void 0:a.call(iB,i))?r:i;return e.setAttribute(t,n)},iF=(e,t)=>{if((e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))})(e))return;let i=(e,t)=>{var i,a;iU(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>iF(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!iU(e))return void tc.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},iV=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=iP(e),r=t.toLowerCase();a.includes(r)&&iH(e,r,i)})},iK=(e,t,i)=>{iF(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(eF.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(eF.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>iF(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>iF(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>iF(e,t)),Array.prototype.forEach.call(r,e=>iF(e,i))):"attributes"===n&&o===eV.MEDIA_CHROME_ATTRIBUTES&&(iU(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{iF(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(eF.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(eF.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};tc.customElements.get("media-controller")||tc.customElements.define("media-controller",iO);let i$={PLACEMENT:"placement",BOUNDS:"bounds"};class iq extends tc.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!tS(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=tk(this,"#"+this.bounds))?e:tf(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;return h<0?void this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[i$.PLACEMENT,i$.BOUNDS]}get placement(){return tx(this,i$.PLACEMENT)}set placement(e){tN(this,i$.PLACEMENT,e)}get bounds(){return tx(this,i$.BOUNDS)}set bounds(e){tN(this,i$.BOUNDS,e)}}iq.shadowRootOptions={mode:"open"},iq.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},tc.customElements.get("media-tooltip")||tc.customElements.define("media-tooltip",iq);var iY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iG=(e,t,i)=>(iY(e,t,"read from private field"),i?i.call(e):t.get(e)),ij=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iz=(e,t,i,a)=>(iY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iQ={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class iZ extends tc.HTMLElement{constructor(){if(super(),ij(this,oE),ij(this,oc,void 0),this.preventClick=!1,this.tooltipEl=null,ij(this,oh,e=>{this.preventClick||this.handleClick(e),setTimeout(iG(this,om),0)}),ij(this,om,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),ij(this,op,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",iG(this,op));this.preventClick||this.handleClick(e)}),ij(this,ov,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",iG(this,op));this.addEventListener("keyup",iG(this,op),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",iQ.TOOLTIP_PLACEMENT,eV.MEDIA_CONTROLLER,eq.MEDIA_LANG]}enable(){this.addEventListener("click",iG(this,oh)),this.addEventListener("keydown",iG(this,ov)),this.tabIndex=0}disable(){this.removeEventListener("click",iG(this,oh)),this.removeEventListener("keydown",iG(this,ov)),this.removeEventListener("keyup",iG(this,op)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===eV.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=iG(this,oc))?void 0:a.unassociateElement)||r.call(a,this),iz(this,oc,null)),i&&this.isConnected&&(iz(this,oc,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=iG(this,oc))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===iQ.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===eq.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),iG(this,om).call(this)}connectedCallback(){var e,t,i;let{style:a}=tI(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(eV.MEDIA_CONTROLLER);r&&(iz(this,oc,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=iG(this,oc))?void 0:t.associateElement)||i.call(t,this)),tc.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=oE,t=ob,iY(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=iG(this,oc))?void 0:e.unassociateElement)||t.call(e,this),iz(this,oc,null),this.removeEventListener("mouseenter",iG(this,om)),this.removeEventListener("focus",iG(this,om)),this.removeEventListener("click",iG(this,oh))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return tx(this,iQ.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){tN(this,iQ.TOOLTIP_PLACEMENT,e)}get mediaController(){return tx(this,eV.MEDIA_CONTROLLER)}set mediaController(e){tN(this,eV.MEDIA_CONTROLLER,e)}get disabled(){return tM(this,iQ.DISABLED)}set disabled(e){tO(this,iQ.DISABLED,e)}get noTooltip(){return tM(this,iQ.NO_TOOLTIP)}set noTooltip(e){tO(this,iQ.NO_TOOLTIP,e)}handleClick(e){}}oc=new WeakMap,oh=new WeakMap,om=new WeakMap,op=new WeakMap,ov=new WeakMap,oE=new WeakSet,ob=function(){this.addEventListener("mouseenter",iG(this,om)),this.addEventListener("focus",iG(this,om)),this.addEventListener("click",iG(this,oh));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},iZ.shadowRootOptions={mode:"open"},iZ.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${iq.shadowRootOptions.mode}">
          ${iq.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},iZ.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},iZ.getTooltipContentHTML=function(){return""},tc.customElements.get("media-chrome-button")||tc.customElements.define("media-chrome-button",iZ);let iX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,iJ=e=>{let t=e.mediaIsAirplaying?e7("stop airplay"):e7("start airplay");e.setAttribute("aria-label",t)};class i0 extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_IS_AIRPLAYING,eq.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),iJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_IS_AIRPLAYING&&iJ(this)}get mediaIsAirplaying(){return tM(this,eq.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){tO(this,eq.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return tx(this,eq.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){tN(this,eq.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new tc.CustomEvent(eF.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}i0.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eq.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eq.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eq.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${eq.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iX}</slot>
      <slot name="exit">${iX}</slot>
    </slot>
  `},i0.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("start airplay")}</slot>
    <slot name="tooltip-exit">${e7("stop airplay")}</slot>
  `},tc.customElements.get("media-airplay-button")||tc.customElements.define("media-airplay-button",i0);let i1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,i2=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,i3=e=>{e.setAttribute("aria-checked",t6(e).toString())};class i4 extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_SUBTITLES_LIST,eq.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",e7("closed captions")),i3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_SUBTITLES_SHOWING&&i3(this)}get mediaSubtitlesList(){return i5(this,eq.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){i9(this,eq.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return i5(this,eq.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){i9(this,eq.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new tc.CustomEvent(eF.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}i4.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${i1}</slot>
      <slot name="off">${i2}</slot>
    </slot>
  `},i4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${e7("Enable captions")}</slot>
    <slot name="tooltip-disable">${e7("Disable captions")}</slot>
  `};let i5=(e,t)=>{let i=e.getAttribute(t);return i?t1(i):[]},i9=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=t4(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tc.customElements.get("media-captions-button")||tc.customElements.define("media-captions-button",i4);let i8=e=>{let t=e.mediaIsCasting?e7("stop casting"):e7("start casting");e.setAttribute("aria-label",t)};class i6 extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_IS_CASTING,eq.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),i8(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_IS_CASTING&&i8(this)}get mediaIsCasting(){return tM(this,eq.MEDIA_IS_CASTING)}set mediaIsCasting(e){tO(this,eq.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return tx(this,eq.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){tN(this,eq.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?eF.MEDIA_EXIT_CAST_REQUEST:eF.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}i6.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eq.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eq.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eq.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${eq.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},i6.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("Start casting")}</slot>
    <slot name="tooltip-exit">${e7("Stop casting")}</slot>
  `},tc.customElements.get("media-cast-button")||tc.customElements.define("media-cast-button",i6);var i7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ae=(e,t,i)=>(i7(e,t,"read from private field"),i?i.call(e):t.get(e)),at=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ai=(e,t,i,a)=>(i7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aa=(e,t,i)=>(i7(e,t,"access private method"),i);let ar={OPEN:"open",ANCHOR:"anchor"};class an extends tc.HTMLElement{constructor(){super(),at(this,oy),at(this,oA),at(this,ow),at(this,oS),at(this,oL),at(this,oD),at(this,og,!1),at(this,of,null),at(this,o_,null)}static get observedAttributes(){return[ar.OPEN,ar.ANCHOR]}get open(){return tM(this,ar.OPEN)}set open(e){tO(this,ar.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":aa(this,oS,oI).call(this,e);break;case"focusout":aa(this,oL,oC).call(this,e);break;case"keydown":aa(this,oD,oM).call(this,e)}}connectedCallback(){aa(this,oy,oT).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){aa(this,oy,oT).call(this),e===ar.OPEN&&i!==t&&(this.open?aa(this,oA,ok).call(this):aa(this,ow,oR).call(this))}focus(){ai(this,of,tw());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}og=new WeakMap,of=new WeakMap,o_=new WeakMap,oy=new WeakSet,oT=function(){if(!ae(this,og)&&(ai(this,og,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=tI(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},oA=new WeakSet,ok=function(){var e;null==(e=ae(this,o_))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ow=new WeakSet,oR=function(){var e;null==(e=ae(this,o_))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},oS=new WeakSet,oI=function(e){ai(this,o_,e.relatedTarget),tA(this,e.relatedTarget)||(this.open=!this.open)},oL=new WeakSet,oC=function(e){var t;!tA(this,e.relatedTarget)&&(null==(t=ae(this,of))||t.focus(),ae(this,o_)&&ae(this,o_)!==e.relatedTarget&&this.open&&(this.open=!1))},oD=new WeakSet,oM=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=ae(this,of))||n.focus(),this.open=!1))},an.shadowRootOptions={mode:"open"},an.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},an.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},tc.customElements.get("media-chrome-dialog")||tc.customElements.define("media-chrome-dialog",an);var as=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ao=(e,t,i)=>(as(e,t,"read from private field"),i?i.call(e):t.get(e)),al=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ad=(e,t,i,a)=>(as(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),au=(e,t,i)=>(as(e,t,"access private method"),i);class ac extends tc.HTMLElement{constructor(){if(super(),al(this,oV),al(this,o$),al(this,oY),al(this,oj),al(this,oQ),al(this,oX),al(this,o0),al(this,o2),al(this,oO,void 0),al(this,ox,void 0),al(this,oN,void 0),al(this,oP,void 0),al(this,oU,{}),al(this,oW,[]),al(this,oB,()=>{if(this.range.matches(":focus-visible")){let{style:e}=tI(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),al(this,oH,()=>{let{style:e}=tI(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),al(this,oF,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),ad(this,oN,this.shadowRoot.querySelector("#startpoint")),ad(this,oP,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",eV.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===eV.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ao(this,oO))?void 0:a.unassociateElement)||r.call(a,this),ad(this,oO,null)),i&&this.isConnected&&(ad(this,oO,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ao(this,oO))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),au(this,o$,oq).call(this)):(this.range.setAttribute(e,i),au(this,oY,oG).call(this)))}connectedCallback(){var e,t,i;let{style:a}=tI(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ao(this,oU).pointer=tI(this.shadowRoot,"#pointer"),ao(this,oU).progress=tI(this.shadowRoot,"#progress"),ao(this,oU).thumb=tI(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ao(this,oU).activeSegment=tI(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(eV.MEDIA_CONTROLLER);r&&(ad(this,oO,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ao(this,oO))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ao(this,oB)),this.shadowRoot.addEventListener("focusout",ao(this,oH)),au(this,o$,oq).call(this),tE(this.container,ao(this,oF))}disconnectedCallback(){var e,t;au(this,oY,oG).call(this),null==(t=null==(e=ao(this,oO))?void 0:e.unassociateElement)||t.call(e,this),ad(this,oO,null),this.shadowRoot.removeEventListener("focusin",ao(this,oB)),this.shadowRoot.removeEventListener("focusout",ao(this,oH)),tb(this.container,ao(this,oF))}updatePointerBar(e){var t;null==(t=ao(this,oU).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ao(this,oU).progress)||e.style.setProperty("width",`${i}%`),null==(t=ao(this,oU).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ad(this,oW,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=th.createElementNS("http://www.w3.org/2000/svg","rect"),c=tL(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,ao(this,oN).getBoundingClientRect(),ao(this,oP).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":au(this,o2,o3).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":au(this,oQ,oZ).call(this,e);break;case"pointerdown":au(this,oj,oz).call(this,e);break;case"pointerup":au(this,oX,oJ).call(this);break;case"pointerleave":au(this,o0,o1).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}oO=new WeakMap,ox=new WeakMap,oN=new WeakMap,oP=new WeakMap,oU=new WeakMap,oW=new WeakMap,oB=new WeakMap,oH=new WeakMap,oF=new WeakMap,oV=new WeakSet,oK=function(e){let t=ao(this,oU).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ao(this,oW).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},o$=new WeakSet,oq=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},oY=new WeakSet,oG=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=tc.window)||e.removeEventListener("pointerup",this),null==(t=tc.window)||t.removeEventListener("pointermove",this)},oj=new WeakSet,oz=function(e){var t;ad(this,ox,e.composedPath().includes(this.range)),null==(t=tc.window)||t.addEventListener("pointerup",this,{once:!0})},oQ=new WeakSet,oZ=function(e){var t;"mouse"!==e.pointerType&&au(this,oj,oz).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=tc.window)||t.addEventListener("pointermove",this)},oX=new WeakSet,oJ=function(){var e;null==(e=tc.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},o0=new WeakSet,o1=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=tc.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ao(this,oU).activeSegment)||t.style.removeProperty("transform")},o2=new WeakSet,o3=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),au(this,oV,oK).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ao(this,ox))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},ac.shadowRootOptions={mode:"open"},ac.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},ac.getContainerTemplateHTML=function(e){return""},tc.customElements.get("media-chrome-range")||tc.customElements.define("media-chrome-range",ac);var ah=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},am=(e,t,i)=>(ah(e,t,"read from private field"),i?i.call(e):t.get(e)),ap=(e,t,i,a)=>(ah(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class av extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,o4,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[eV.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===eV.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=am(this,o4))?void 0:a.unassociateElement)||r.call(a,this),ap(this,o4,null)),i&&this.isConnected&&(ap(this,o4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=am(this,o4))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(eV.MEDIA_CONTROLLER);a&&(ap(this,o4,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=am(this,o4))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=am(this,o4))?void 0:e.unassociateElement)||t.call(e,this),ap(this,o4,null)}}o4=new WeakMap,av.shadowRootOptions={mode:"open"},av.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},tc.customElements.get("media-control-bar")||tc.customElements.define("media-control-bar",av);var aE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ab=(e,t,i)=>(aE(e,t,"read from private field"),i?i.call(e):t.get(e)),ag=(e,t,i,a)=>(aE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class af extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,o5,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[eV.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===eV.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ab(this,o5))?void 0:a.unassociateElement)||r.call(a,this),ag(this,o5,null)),i&&this.isConnected&&(ag(this,o5,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ab(this,o5))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=tI(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(eV.MEDIA_CONTROLLER);r&&(ag(this,o5,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ab(this,o5))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ab(this,o5))?void 0:e.unassociateElement)||t.call(e,this),ag(this,o5,null)}}o5=new WeakMap,af.shadowRootOptions={mode:"open"},af.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},af.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},tc.customElements.get("media-text-display")||tc.customElements.define("media-text-display",af);var a_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ay=(e,t,i)=>(a_(e,t,"read from private field"),i?i.call(e):t.get(e));class aT extends af{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,o9,void 0),((e,t,i,a)=>(a_(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,o9,this.shadowRoot.querySelector("slot")),ay(this,o9).textContent=ti(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===eq.MEDIA_DURATION&&(ay(this,o9).textContent=ti(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return tC(this,eq.MEDIA_DURATION)}set mediaDuration(e){tD(this,eq.MEDIA_DURATION,e)}}o9=new WeakMap,aT.getSlotTemplateHTML=function(e,t){return`
    <slot>${ti(t.mediaDuration)}</slot>
  `},tc.customElements.get("media-duration-display")||tc.customElements.define("media-duration-display",aT);let aA={2:e7("Network Error"),3:e7("Decode Error"),4:e7("Source Not Supported"),5:e7("Encryption Error")},ak={2:e7("A network error caused the media download to fail."),3:e7("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:e7("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:e7("The media is encrypted and there are no keys to decrypt it.")},aw=e=>{var t,i;return 1===e.code?null:{title:null!=(t=aA[e.code])?t:`Error ${e.code}`,message:null!=(i=ak[e.code])?i:e.message}};var aR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function aS(e){var t;let{title:i,message:a}=null!=(t=aw(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let aI=[eq.MEDIA_ERROR_CODE,eq.MEDIA_ERROR_MESSAGE];class aL extends an{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,o8,null)}static get observedAttributes(){return[...super.observedAttributes,...aI]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!aI.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==aw(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=aw(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e,t;return aR(this,e=o8,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;aR(this,t=o8,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return tC(this,"mediaerrorcode")}set mediaErrorCode(e){tD(this,"mediaerrorcode",e)}get mediaErrorMessage(){return tx(this,"mediaerrormessage")}set mediaErrorMessage(e){tN(this,"mediaerrormessage",e)}}o8=new WeakMap,aL.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${aS({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},aL.formatErrorMessage=aS,tc.customElements.get("media-error-dialog")||tc.customElements.define("media-error-dialog",aL);var aC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},aD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class aM extends an{constructor(){super(...arguments),aD(this,o6,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),aD(this,o7,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",aC(this,o6)),document.addEventListener("keydown",aC(this,o7)))}disconnectedCallback(){this.removeEventListener("click",aC(this,o6)),document.removeEventListener("keydown",aC(this,o7))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",aC(this,o6)),document.addEventListener("keydown",aC(this,o7))):(this.removeEventListener("click",aC(this,o6)),document.removeEventListener("keydown",aC(this,o7))))}}o6=new WeakMap,o7=new WeakMap,aM.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${function(){let e=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${e}</table>
  `}()}
    </slot>
  `},tc.customElements.get("media-keyboard-shortcuts-dialog")||tc.customElements.define("media-keyboard-shortcuts-dialog",aM);var aO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let ax=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,aN=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,aP=e=>{let t=e.mediaIsFullscreen?e7("exit fullscreen mode"):e7("enter fullscreen mode");e.setAttribute("aria-label",t)};class aU extends iZ{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,le,null)}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_IS_FULLSCREEN,eq.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aP(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_IS_FULLSCREEN&&aP(this)}get mediaFullscreenUnavailable(){return tx(this,eq.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){tN(this,eq.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return tM(this,eq.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){tO(this,eq.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;aO(this,t=le,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(aO(this,a=le,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new tc.CustomEvent(eF.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new tc.CustomEvent(eF.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}le=new WeakMap,aU.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eq.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${eq.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eq.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${eq.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ax}</slot>
      <slot name="exit">${aN}</slot>
    </slot>
  `},aU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${e7("Exit fullscreen mode")}</slot>
  `},tc.customElements.get("media-fullscreen-button")||tc.customElements.define("media-fullscreen-button",aU);let{MEDIA_TIME_IS_LIVE:aW,MEDIA_PAUSED:aB}=eq,{MEDIA_SEEK_TO_LIVE_REQUEST:aH,MEDIA_PLAY_REQUEST:aF}=eF,aV=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?e7("seek to live"):e7("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=e7("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class aK extends iZ{static get observedAttributes(){return[...super.observedAttributes,aW,aB]}connectedCallback(){super.connectedCallback(),aV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),aV(this)}get mediaPaused(){return tM(this,eq.MEDIA_PAUSED)}set mediaPaused(e){tO(this,eq.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return tM(this,eq.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){tO(this,eq.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new tc.CustomEvent(aH,{composed:!0,bubbles:!0})),this.hasAttribute(aB)&&this.dispatchEvent(new tc.CustomEvent(aF,{composed:!0,bubbles:!0})))}}aK.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${aW}]:not([${aB}])) slot[name=indicator] > *,
      :host([${aW}]:not([${aB}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${aW}]:not([${aB}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${e7("live")}</slot>
  `},tc.customElements.get("media-live-button")||tc.customElements.define("media-live-button",aK);var a$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aq=(e,t,i)=>(a$(e,t,"read from private field"),i?i.call(e):t.get(e)),aY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aG=(e,t,i,a)=>(a$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aj={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},az=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class aQ extends tc.HTMLElement{constructor(){if(super(),aY(this,lt,void 0),aY(this,li,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[eV.MEDIA_CONTROLLER,eq.MEDIA_PAUSED,eq.MEDIA_LOADING,aj.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===aj.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===eV.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aq(this,lt))?void 0:a.unassociateElement)||r.call(a,this),aG(this,lt,null)),i&&this.isConnected&&(aG(this,lt,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aq(this,lt))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(eV.MEDIA_CONTROLLER);a&&(aG(this,lt,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aq(this,lt))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aq(this,lt))?void 0:e.unassociateElement)||t.call(e,this),aG(this,lt,null)}get loadingDelay(){return aq(this,li)}set loadingDelay(e){aG(this,li,e);let{style:t}=tI(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return tM(this,eq.MEDIA_PAUSED)}set mediaPaused(e){tO(this,eq.MEDIA_PAUSED,e)}get mediaLoading(){return tM(this,eq.MEDIA_LOADING)}set mediaLoading(e){tO(this,eq.MEDIA_LOADING,e)}get mediaController(){return tx(this,eV.MEDIA_CONTROLLER)}set mediaController(e){tN(this,eV.MEDIA_CONTROLLER,e)}get noAutohide(){return tM(this,aj.NO_AUTOHIDE)}set noAutohide(e){tO(this,aj.NO_AUTOHIDE,e)}}lt=new WeakMap,li=new WeakMap,aQ.shadowRootOptions={mode:"open"},aQ.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${eq.MEDIA_LOADING}]:not([${eq.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${eq.MEDIA_LOADING}]:not([${eq.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${eq.MEDIA_LOADING}]:not([${eq.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${az}</slot>
    <div id="status" role="status" aria-live="polite">${e7("media loading")}</div>
  `},tc.customElements.get("media-loading-indicator")||tc.customElements.define("media-loading-indicator",aQ);let aZ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,aX=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,aJ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,a0=e=>{let t="off"===e.mediaVolumeLevel?e7("unmute"):e7("mute");e.setAttribute("aria-label",t)};class a1 extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),a0(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_VOLUME_LEVEL&&a0(this)}get mediaVolumeLevel(){return tx(this,eq.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){tN(this,eq.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?eF.MEDIA_UNMUTE_REQUEST:eF.MEDIA_MUTE_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}a1.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${eq.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${eq.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${eq.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${eq.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${eq.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${eq.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${eq.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${aZ}</slot>
      <slot name="low">${aX}</slot>
      <slot name="medium">${aX}</slot>
      <slot name="high">${aJ}</slot>
    </slot>
  `},a1.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${e7("Mute")}</slot>
    <slot name="tooltip-unmute">${e7("Unmute")}</slot>
  `},tc.customElements.get("media-mute-button")||tc.customElements.define("media-mute-button",a1);let a2=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,a3=e=>{let t=e.mediaIsPip?e7("exit picture in picture mode"):e7("enter picture in picture mode");e.setAttribute("aria-label",t)};class a4 extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_IS_PIP,eq.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),a3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_IS_PIP&&a3(this)}get mediaPipUnavailable(){return tx(this,eq.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){tN(this,eq.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return tM(this,eq.MEDIA_IS_PIP)}set mediaIsPip(e){tO(this,eq.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?eF.MEDIA_EXIT_PIP_REQUEST:eF.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}a4.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eq.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${eq.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${eq.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${eq.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${a2}</slot>
      <slot name="exit">${a2}</slot>
    </slot>
  `},a4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${e7("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${e7("Exit picture in picture mode")}</slot>
  `},tc.customElements.get("media-pip-button")||tc.customElements.define("media-pip-button",a4);var a5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let a9={RATES:"rates"},a8=[1,1.2,1.5,1.7,2];function a6(e){return Math.round(100*e)/100}class a7 extends iZ{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,la,new tJ(this,a9.RATES,{defaultValue:a8})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${a6(null!=(e=this.mediaPlaybackRate)?e:1)}x`}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PLAYBACK_RATE,a9.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a9.RATES&&(a5(this,la).value=i),e===eq.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=a6(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",e7("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return a5(this,la)}set rates(e){e?Array.isArray(e)?a5(this,la).value=e.join(" "):"string"==typeof e&&(a5(this,la).value=e):a5(this,la).value=""}get mediaPlaybackRate(){return tC(this,eq.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tD(this,eq.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(a5(this,la).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new tc.CustomEvent(eF.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}la=new WeakMap,a7.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?a6(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},a7.getTooltipContentHTML=function(){return e7("Playback rate")},tc.customElements.get("media-playback-rate-button")||tc.customElements.define("media-playback-rate-button",a7);let re=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rt=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ri=e=>{let t=e.mediaPaused?e7("play"):e7("pause");e.setAttribute("aria-label",t)};class ra extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PAUSED,eq.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ri(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===eq.MEDIA_PAUSED||e===eq.MEDIA_LANG)&&ri(this)}get mediaPaused(){return tM(this,eq.MEDIA_PAUSED)}set mediaPaused(e){tO(this,eq.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?eF.MEDIA_PLAY_REQUEST:eF.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tc.CustomEvent(e,{composed:!0,bubbles:!0}))}}ra.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${eq.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${eq.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${eq.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${eq.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${re}</slot>
      <slot name="pause">${rt}</slot>
    </slot>
  `},ra.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${e7("Play")}</slot>
    <slot name="tooltip-pause">${e7("Pause")}</slot>
  `},tc.customElements.get("media-play-button")||tc.customElements.define("media-play-button",ra);let rr={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class rn extends tc.HTMLElement{static get observedAttributes(){return[rr.PLACEHOLDER_SRC,rr.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if(e===rr.SRC&&(null==i?this.image.removeAttribute(rr.SRC):this.image.setAttribute(rr.SRC,i)),e===rr.PLACEHOLDER_SRC)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return tx(this,rr.PLACEHOLDER_SRC)}set placeholderSrc(e){tN(this,rr.SRC,e)}get src(){return tx(this,rr.SRC)}set src(e){tN(this,rr.SRC,e)}}rn.shadowRootOptions={mode:"open"},rn.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},tc.customElements.get("media-poster-image")||tc.customElements.define("media-poster-image",rn);var rs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class ro extends af{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,lr,void 0),((e,t,i,a)=>(rs(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,lr,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PREVIEW_CHAPTER,eq.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===eq.MEDIA_PREVIEW_CHAPTER||e===eq.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((rs(this,a=lr,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=e7("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return tx(this,eq.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){tN(this,eq.MEDIA_PREVIEW_CHAPTER,e)}}lr=new WeakMap,tc.customElements.get("media-preview-chapter-display")||tc.customElements.define("media-preview-chapter-display",ro);var rl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rd=(e,t,i)=>(rl(e,t,"read from private field"),i?i.call(e):t.get(e)),ru=(e,t,i,a)=>(rl(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rc extends tc.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ln,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[eV.MEDIA_CONTROLLER,eq.MEDIA_PREVIEW_IMAGE,eq.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(eV.MEDIA_CONTROLLER);a&&(ru(this,ln,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rd(this,ln))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rd(this,ln))?void 0:e.unassociateElement)||t.call(e,this),ru(this,ln,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[eq.MEDIA_PREVIEW_IMAGE,eq.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===eV.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rd(this,ln))?void 0:a.unassociateElement)||r.call(a,this),ru(this,ln,null)),i&&this.isConnected&&(ru(this,ln,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=rd(this,ln))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return tx(this,eq.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){tN(this,eq.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(eq.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(eq.MEDIA_PREVIEW_COORDS);this.setAttribute(eq.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=tI(this.shadowRoot,":host"),v=tI(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),b=1>Math.min(e,t)?"min":"max";p.setProperty(`${b}-width`,"initial","important"),p.setProperty(`${b}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let g=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};E.src!==l&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g(),E.onload=null},E.src=l,g()),g(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}ln=new WeakMap,rc.shadowRootOptions={mode:"open"},rc.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},tc.customElements.get("media-preview-thumbnail")||tc.customElements.define("media-preview-thumbnail",rc);var rh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rm=(e,t,i)=>(rh(e,t,"read from private field"),i?i.call(e):t.get(e));class rp extends af{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ls,void 0),((e,t,i,a)=>(rh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ls,this.shadowRoot.querySelector("slot")),rm(this,ls).textContent=ti(0)}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_PREVIEW_TIME&&null!=i&&(rm(this,ls).textContent=ti(parseFloat(i)))}get mediaPreviewTime(){return tC(this,eq.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){tD(this,eq.MEDIA_PREVIEW_TIME,e)}}ls=new WeakMap,tc.customElements.get("media-preview-time-display")||tc.customElements.define("media-preview-time-display",rp);let rv={SEEK_OFFSET:"seekoffset"};class rE extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_CURRENT_TIME,rv.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=tC(this,rv.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",e7("seek back {seekOffset} seconds",{seekOffset:a})),e===rv.SEEK_OFFSET&&(this.seekOffset=tC(this,rv.SEEK_OFFSET,30))}get seekOffset(){return tC(this,rv.SEEK_OFFSET,30)}set seekOffset(e){tD(this,rv.SEEK_OFFSET,e),this.setAttribute("aria-label",e7("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),ty(tT(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return tC(this,eq.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){tD(this,eq.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new tc.CustomEvent(eF.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rE.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},rE.getTooltipContentHTML=function(){return e7("Seek backward")},tc.customElements.get("media-seek-backward-button")||tc.customElements.define("media-seek-backward-button",rE);let rb={SEEK_OFFSET:"seekoffset"};class rg extends iZ{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_CURRENT_TIME,rb.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=tC(this,rb.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",e7("seek forward {seekOffset} seconds",{seekOffset:a})),e===rb.SEEK_OFFSET&&(this.seekOffset=tC(this,rb.SEEK_OFFSET,30))}get seekOffset(){return tC(this,rb.SEEK_OFFSET,30)}set seekOffset(e){tD(this,rb.SEEK_OFFSET,e),this.setAttribute("aria-label",e7("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),ty(tT(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return tC(this,eq.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){tD(this,eq.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new tc.CustomEvent(eF.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rg.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},rg.getTooltipContentHTML=function(){return e7("Seek forward")},tc.customElements.get("media-seek-forward-button")||tc.customElements.define("media-seek-forward-button",rg);var rf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r_=(e,t,i)=>(rf(e,t,"read from private field"),i?i.call(e):t.get(e)),ry=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rT=(e,t,i,a)=>(rf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rA=(e,t,i)=>(rf(e,t,"access private method"),i);let rk={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},rw=[...Object.values(rk),eq.MEDIA_CURRENT_TIME,eq.MEDIA_DURATION,eq.MEDIA_SEEKABLE],rR=["Enter"," "],rS="&nbsp;/&nbsp;",rI=(e,{timesSep:t=rS}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?ti(0-(s-r)):ti(r);return e.showDuration?`${o}${t}${ti(s)}`:o};class rL extends af{constructor(){super(),ry(this,lu),ry(this,lh),ry(this,lp),ry(this,lE),ry(this,lo,void 0),ry(this,ll,null),ry(this,ld,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!rR.includes(a))return void this.removeEventListener("keyup",r_(this,ll));this.addEventListener("keyup",r_(this,ll))}),rT(this,lo,this.shadowRoot.querySelector("slot")),r_(this,lo).innerHTML=`${rI(this)}`}static get observedAttributes(){return[...super.observedAttributes,...rw,"disabled"]}connectedCallback(){let{style:e}=tI(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",e7("playback time")),rA(this,lp,lv).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),rA(this,lh,lm).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",e7("playback time")),rw.includes(e)?this.update():"disabled"===e&&i!==t?null==i?rA(this,lp,lv).call(this):rA(this,lE,lb).call(this):e===rk.NO_TOGGLE&&i!==t&&(this.noToggle?rA(this,lE,lb).call(this):rA(this,lp,lv).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return tM(this,rk.REMAINING)}set remaining(e){tO(this,rk.REMAINING,e)}get showDuration(){return tM(this,rk.SHOW_DURATION)}set showDuration(e){tO(this,rk.SHOW_DURATION,e)}get noToggle(){return tM(this,rk.NO_TOGGLE)}set noToggle(e){tO(this,rk.NO_TOGGLE,e)}get mediaDuration(){return tC(this,eq.MEDIA_DURATION)}set mediaDuration(e){tD(this,eq.MEDIA_DURATION,e)}get mediaCurrentTime(){return tC(this,eq.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){tD(this,eq.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(eq.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(eq.MEDIA_SEEKABLE);this.setAttribute(eq.MEDIA_SEEKABLE,e.join(":"))}update(){let e=rI(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-description",e7("video not loaded, unknown time."));let n=e.remaining?tt(0-(r-i)):tt(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let s=e7("{currentTime} of {totalTime}",{currentTime:n,totalTime:tt(r)});e.setAttribute("aria-description",s)})(this),e!==r_(this,lo).innerHTML&&(r_(this,lo).innerHTML=e)}}lo=new WeakMap,ll=new WeakMap,ld=new WeakMap,lu=new WeakSet,lc=function(){r_(this,ll)||(rT(this,ll,e=>{let{key:t}=e;if(!rR.includes(t))return void this.removeEventListener("keyup",r_(this,ll));this.toggleTimeDisplay()}),this.addEventListener("keydown",r_(this,ld)),this.addEventListener("click",this.toggleTimeDisplay))},lh=new WeakSet,lm=function(){r_(this,ll)&&(this.removeEventListener("keyup",r_(this,ll)),this.removeEventListener("keydown",r_(this,ld)),this.removeEventListener("click",this.toggleTimeDisplay),rT(this,ll,null))},lp=new WeakSet,lv=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),rA(this,lu,lc).call(this))},lE=new WeakSet,lb=function(){this.removeAttribute("role"),this.disable(),rA(this,lh,lm).call(this)},rL.getSlotTemplateHTML=function(e,t){return`
    <slot>${rI(t)}</slot>
  `},tc.customElements.get("media-time-display")||tc.customElements.define("media-time-display",rL);var rC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rD=(e,t,i)=>(rC(e,t,"read from private field"),i?i.call(e):t.get(e)),rM=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rO=(e,t,i,a)=>(rC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rx{constructor(e,t,i){rM(this,lg,void 0),rM(this,lf,void 0),rM(this,l_,void 0),rM(this,ly,void 0),rM(this,lT,void 0),rM(this,lA,void 0),rM(this,lk,void 0),rM(this,lw,void 0),rM(this,lR,0),rM(this,lS,(e=performance.now())=>{rO(this,lR,requestAnimationFrame(rD(this,lS))),rO(this,ly,performance.now()-rD(this,l_));let t=1e3/this.fps;if(rD(this,ly)>t){rO(this,l_,e-rD(this,ly)%t);let i=1e3/((e-rD(this,lf))/++((e,t,i,a)=>({set _(value){rO(e,t,value,i)},get _(){return rD(e,t,a)}}))(this,lT)._),a=(e-rD(this,lA))/1e3/this.duration,r=rD(this,lk)+a*this.playbackRate;r-rD(this,lg).valueAsNumber>0?rO(this,lw,this.playbackRate/this.duration/i):(rO(this,lw,.995*rD(this,lw)),r=rD(this,lg).valueAsNumber+rD(this,lw)),this.callback(r)}}),rO(this,lg,e),this.callback=t,this.fps=i}start(){0===rD(this,lR)&&(rO(this,l_,performance.now()),rO(this,lf,rD(this,l_)),rO(this,lT,0),rD(this,lS).call(this))}stop(){0!==rD(this,lR)&&(cancelAnimationFrame(rD(this,lR)),rO(this,lR,0))}update({start:e,duration:t,playbackRate:i}){let a=e-rD(this,lg).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),rO(this,lk,e),rO(this,lA,performance.now()),this.duration=t,this.playbackRate=i}}lg=new WeakMap,lf=new WeakMap,l_=new WeakMap,ly=new WeakMap,lT=new WeakMap,lA=new WeakMap,lk=new WeakMap,lw=new WeakMap,lR=new WeakMap,lS=new WeakMap;var rN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rP=(e,t,i)=>(rN(e,t,"read from private field"),i?i.call(e):t.get(e)),rU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rW=(e,t,i,a)=>(rN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rB=(e,t,i)=>(rN(e,t,"access private method"),i);let rH=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},rF=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class rV extends ac{constructor(){super(),rU(this,lB),rU(this,lV),rU(this,l$),rU(this,lY),rU(this,lj),rU(this,lQ),rU(this,lX),rU(this,lI,null),rU(this,lL,void 0),rU(this,lC,void 0),rU(this,lD,void 0),rU(this,lM,void 0),rU(this,lO,void 0),rU(this,lx,void 0),rU(this,lN,void 0),rU(this,lP,void 0),rU(this,lU,void 0),rU(this,lW,()=>{rB(this,lB,lH).call(this)?rP(this,lL).start():rP(this,lL).stop()}),rU(this,lF,e=>{!this.dragging&&(e4(e)&&(this.range.valueAsNumber=e),rP(this,lU)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),rW(this,lC,this.shadowRoot.querySelectorAll('[part~="box"]')),rW(this,lM,this.shadowRoot.querySelector('[part~="preview-box"]')),rW(this,lO,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);rW(this,lx,parseInt(e.getPropertyValue("--media-box-padding-left"))),rW(this,lN,parseInt(e.getPropertyValue("--media-box-padding-right"))),rW(this,lL,new rx(this.range,rP(this,lF),60))}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PAUSED,eq.MEDIA_DURATION,eq.MEDIA_SEEKABLE,eq.MEDIA_CURRENT_TIME,eq.MEDIA_PREVIEW_IMAGE,eq.MEDIA_PREVIEW_TIME,eq.MEDIA_PREVIEW_CHAPTER,eq.MEDIA_BUFFERED,eq.MEDIA_PLAYBACK_RATE,eq.MEDIA_LOADING,eq.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",e7("seek")),rP(this,lW).call(this),rW(this,lI,this.getRootNode()),null==(e=rP(this,lI))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),rP(this,lL).stop(),null==(e=rP(this,lI))||e.removeEventListener("transitionstart",this),rW(this,lI,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===eq.MEDIA_CURRENT_TIME||e===eq.MEDIA_PAUSED||e===eq.MEDIA_ENDED||e===eq.MEDIA_LOADING||e===eq.MEDIA_DURATION||e===eq.MEDIA_SEEKABLE?(rP(this,lL).update({start:rH(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),rP(this,lW).call(this),(e=>{let t=e.range,i=tt(+rF(e)),a=tt(+e.mediaSeekableEnd),r=i&&a?e7("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):e7("video not loaded, unknown time.");t.setAttribute("aria-valuetext",r)})(this)):e===eq.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===eq.MEDIA_DURATION||e===eq.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=rP(this,lP),this.updateBar()))}get mediaChaptersCues(){return rP(this,lP)}set mediaChaptersCues(e){var t;rW(this,lP,e),this.updateSegments(null==(t=rP(this,lP))?void 0:t.map(e=>({start:rH(this,e.startTime),end:rH(this,e.endTime)})))}get mediaPaused(){return tM(this,eq.MEDIA_PAUSED)}set mediaPaused(e){tO(this,eq.MEDIA_PAUSED,e)}get mediaLoading(){return tM(this,eq.MEDIA_LOADING)}set mediaLoading(e){tO(this,eq.MEDIA_LOADING,e)}get mediaDuration(){return tC(this,eq.MEDIA_DURATION)}set mediaDuration(e){tD(this,eq.MEDIA_DURATION,e)}get mediaCurrentTime(){return tC(this,eq.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){tD(this,eq.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return tC(this,eq.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tD(this,eq.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(eq.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(eq.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(eq.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(eq.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(eq.MEDIA_SEEKABLE);this.setAttribute(eq.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return tx(this,eq.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){tN(this,eq.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return tC(this,eq.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){tD(this,eq.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return tM(this,eq.MEDIA_ENDED)}set mediaEnded(e){tO(this,eq.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=rH(this,r)}let{style:a}=tI(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=tI(this.shadowRoot,"#current-rail"),t=tI(this.shadowRoot,'[part~="current-box"]'),i=rB(this,lV,lK).call(this,rP(this,lO)),a=rB(this,l$,lq).call(this,i,this.range.valueAsNumber),r=rB(this,lY,lG).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":rB(this,lX,lJ).call(this);break;case"pointermove":rB(this,lj,lz).call(this,e);break;case"pointerup":rP(this,lU)&&rW(this,lU,!1);break;case"pointerdown":rW(this,lU,!0);break;case"pointerleave":rB(this,lQ,lZ).call(this,null);break;case"transitionstart":tA(e.target,this)&&setTimeout(()=>rP(this,lW).call(this),0)}}}lI=new WeakMap,lL=new WeakMap,lC=new WeakMap,lD=new WeakMap,lM=new WeakMap,lO=new WeakMap,lx=new WeakMap,lN=new WeakMap,lP=new WeakMap,lU=new WeakMap,lW=new WeakMap,lB=new WeakSet,lH=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&tS(this)},lF=new WeakMap,lV=new WeakSet,lK=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?tk(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},l$=new WeakSet,lq=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},lY=new WeakSet,lG=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+rP(this,lx)){let t=e.range.left-e.bounds.left-rP(this,lx);return`${n-i/2+t}px`}if(n>r-rP(this,lN)){let t=e.bounds.right-e.range.right-rP(this,lN);return`${n+i/2-t-e.range.width}px`}return 0},lj=new WeakSet,lz=function(e){let t=[...rP(this,lC)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void rB(this,lQ,lZ).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=tI(this.shadowRoot,"#preview-rail"),r=tI(this.shadowRoot,'[part~="preview-box"]'),n=rB(this,lV,lK).call(this,rP(this,lM)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=rB(this,l$,lq).call(this,n,s),l=rB(this,lY,lG).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(rP(this,lD))-Math.round(s*i))&&s>.01&&s<.99||(rW(this,lD,s*i),rB(this,lQ,lZ).call(this,rP(this,lD)))},lQ=new WeakSet,lZ=function(e){this.dispatchEvent(new tc.CustomEvent(eF.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},lX=new WeakSet,lJ=function(){rP(this,lL).stop();let e=rF(this);this.dispatchEvent(new tc.CustomEvent(eF.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},rV.shadowRootOptions={mode:"open"},rV.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${eq.MEDIA_PREVIEW_IMAGE}], [${eq.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${eq.MEDIA_PREVIEW_IMAGE}], [${eq.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${eq.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${eq.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${eq.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${eq.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${eq.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${eq.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${eq.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${eq.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${eq.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${eq.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${eq.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${eq.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${rc.shadowRootOptions.mode}">
            ${rc.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},tc.customElements.get("media-time-range")||tc.customElements.define("media-time-range",rV);var rK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class r$ extends ac{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,l0,()=>{let e=this.range.value,t=new tc.CustomEvent(eF.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_VOLUME,eq.MEDIA_MUTED,eq.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",e7("volume")),this.range.addEventListener("input",rK(this,l0))}disconnectedCallback(){this.range.removeEventListener("input",rK(this,l0)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eq.MEDIA_VOLUME||e===eq.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return tC(this,eq.MEDIA_VOLUME,1)}set mediaVolume(e){tD(this,eq.MEDIA_VOLUME,e)}get mediaMuted(){return tM(this,eq.MEDIA_MUTED)}set mediaMuted(e){tO(this,eq.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return tx(this,eq.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){tN(this,eq.MEDIA_VOLUME_UNAVAILABLE,e)}}l0=new WeakMap,tc.customElements.get("media-volume-range")||tc.customElements.define("media-volume-range",r$);class rq extends iZ{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=e7("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return tM(this,eq.MEDIA_LOOP)}set mediaLoop(e){tO(this,eq.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new tc.CustomEvent(eF.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}rq.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${eq.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},rq.getTooltipContentHTML=function(){return e7("Loop")},tc.customElements.get("media-loop-button")||tc.customElements.define("media-loop-button",rq);var rY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rG=(e,t,i)=>(rY(e,t,"read from private field"),i?i.call(e):t.get(e)),rj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rz=(e,t,i,a)=>(rY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rQ={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof r4&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof r4?a.element[a.attributeName]=t:a.value=t}}}};class rZ extends tc.DocumentFragment{constructor(e,t,i=rQ){var a;super(),rj(this,l1,void 0),rj(this,l2,void 0),this.append(e.content.cloneNode(!0)),rz(this,l1,rX(this)),rz(this,l2,i),null==(a=i.createCallback)||a.call(i,this,rG(this,l1),t),i.processCallback(this,rG(this,l1),t)}update(e){rG(this,l2).processCallback(this,rG(this,l1),e)}}l1=new WeakMap,l2=new WeakMap;let rX=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new r3;for([i,a]of r0(r.value))if(i){let i=new r4(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of r0(n))if(i){let i=new r5(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new r9(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else rX(r,t);return t},rJ={},r0=e=>{let t="",i=0,a=rJ[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),rJ[e]=a};class r1{get value(){return""}set value(e){}toString(){return this.value}}let r2=new WeakMap;class r3{constructor(){rj(this,l3,[])}[Symbol.iterator](){return rG(this,l3).values()}get length(){return rG(this,l3).length}item(e){return rG(this,l3)[e]}append(...e){for(let t of e)t instanceof r4&&r2.set(t,this),rG(this,l3).push(t)}toString(){return rG(this,l3).join("")}}l3=new WeakMap;class r4 extends r1{constructor(e,t,i){super(),rj(this,l6),rj(this,l4,""),rj(this,l5,void 0),rj(this,l9,void 0),rj(this,l8,void 0),rz(this,l5,e),rz(this,l9,t),rz(this,l8,i)}get attributeName(){return rG(this,l9)}get attributeNamespace(){return rG(this,l8)}get element(){return rG(this,l5)}get value(){return rG(this,l4)}set value(e){rG(this,l4)!==e&&(rz(this,l4,e),rG(this,l6,l7)&&1!==rG(this,l6,l7).length?rG(this,l5).setAttributeNS(rG(this,l8),rG(this,l9),rG(this,l6,l7).toString()):null==e?rG(this,l5).removeAttributeNS(rG(this,l8),rG(this,l9)):rG(this,l5).setAttributeNS(rG(this,l8),rG(this,l9),e))}get booleanValue(){return rG(this,l5).hasAttributeNS(rG(this,l8),rG(this,l9))}set booleanValue(e){if(rG(this,l6,l7)&&1!==rG(this,l6,l7).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}l4=new WeakMap,l5=new WeakMap,l9=new WeakMap,l8=new WeakMap,l6=new WeakSet,l7=function(){return r2.get(this)};class r5 extends r1{constructor(e,t){super(),rj(this,de,void 0),rj(this,dt,void 0),rz(this,de,e),rz(this,dt,t?[...t]:[new Text])}get replacementNodes(){return rG(this,dt)}get parentNode(){return rG(this,de)}get nextSibling(){return rG(this,dt)[rG(this,dt).length-1].nextSibling}get previousSibling(){return rG(this,dt)[0].previousSibling}get value(){return rG(this,dt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),rz(this,dt,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(rG(this,dt)[0].parentNode,rG(this,dt),t,this.nextSibling))}}de=new WeakMap,dt=new WeakMap;class r9 extends r5{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let r8={string:e=>String(e)};class r6{constructor(e){this.template=e,this.state=void 0}}let r7=new WeakMap,ne=new WeakMap,nt={partial:(e,t)=>{t[e.expression]=new r6(e.template)},if:(e,t)=>{var i;if(nn(e.expression,t))if(r7.get(e)!==e.template){r7.set(e,e.template);let i=new rZ(e.template,t,na);e.replace(i),ne.set(e,i)}else null==(i=ne.get(e))||i.update(t);else e.replace(""),r7.delete(e),ne.delete(e)}},ni=Object.keys(nt),na={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof r9){if(!n.directive){let e=ni.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=nt[n.directive])||a.call(nt,n,i);continue}let t=nn(e,i);if(t instanceof r6){r7.get(n)!==t.template?(r7.set(n,t.template),n.value=t=new rZ(t.template,t.state,na),ne.set(n,t)):null==(r=ne.get(n))||r.update(t.state);continue}t?(n instanceof r4&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof r4?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,r7.delete(n),ne.delete(n))):n instanceof r4?n.value=void 0:(n.value=void 0,r7.delete(n),ne.delete(n))}}},nr={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=r8[t])?void 0:i.call(r8,e)}};function nn(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return ns(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return ns(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=nl(d,t))}return i}if(1===d.length)return no(d[0])?nl(d[0].token,t):ns(e);if(2===d.length){let i=nr[null==(o=d[0])?void 0:o.token];return i&&no(d[1])?i(nl(d[1].token,t)):ns(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=nr[i];if(!a||!no(d[0])||!no(d[2]))return ns(e);let r=nl(d[0].token,t);return a(r,"|"===i?d[2].token:nl(d[2].token,t))}}function ns(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function no({type:e}){return["number","boolean","string","param"].includes(e)}function nl(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):e5(e)?parseFloat(e):t[e]}var nd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nu=(e,t,i)=>(nd(e,t,"read from private field"),i?i.call(e):t.get(e)),nc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nh=(e,t,i,a)=>(nd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nm=(e,t,i)=>(nd(e,t,"access private method"),i);let np={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},nv=th.createElement("template");nv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class nE extends tc.HTMLElement{constructor(){super(),nc(this,ds),nc(this,dd),nc(this,di,void 0),nc(this,da,void 0),nc(this,dr,void 0),nc(this,dn,void 0),nc(this,dc,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),nh(this,dn,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(np[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),nh(this,dc,this.render.bind(this)),nm(this,ds,dl).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=nu(this,di))?e:this.constructor.template}set template(e){if(null===e)return void this.removeAttribute("template");"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(nh(this,di,e),nh(this,dr,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>np[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=np[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(e5(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&nm(this,dd,du).call(this)}connectedCallback(){this.addEventListener(eY.BREAKPOINTS_COMPUTED,nu(this,dc)),nu(this,dn).observe(this,{attributes:!0}),nu(this,dn).observe(this.renderRoot,{attributes:!0,subtree:!0}),nm(this,dd,du).call(this)}disconnectedCallback(){this.removeEventListener(eY.BREAKPOINTS_COMPUTED,nu(this,dc)),nu(this,dn).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==nu(this,da)&&(nh(this,da,this.template),this.renderer=new rZ(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(nv.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function nb(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function ng(e){return e.split("-")[0]}di=new WeakMap,da=new WeakMap,dr=new WeakMap,dn=new WeakMap,ds=new WeakSet,dl=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},dd=new WeakSet,du=function(){var e;let t=this.getAttribute("template");if(!t||t===nu(this,dr))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){nh(this,dr,t),nh(this,di,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(nh(this,dr,t),nb(t).then(e=>{let t=th.createElement("template");t.innerHTML=e,nh(this,di,t),this.createRenderer()}).catch(console.error))},dc=new WeakMap,nE.observedAttributes=["template"],nE.processor=na,tc.customElements.get("media-theme")||tc.customElements.define("media-theme",nE);class nf extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class n_ extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var ny=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nT=(e,t,i)=>(ny(e,t,"read from private field"),i?i.call(e):t.get(e)),nA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nk=(e,t,i,a)=>(ny(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nw=(e,t,i)=>(ny(e,t,"access private method"),i);function nR({type:e,text:t,value:i,checked:a}){let r=th.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=th.createElement("span");return n.textContent=t,r.append(n),r}function nS(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let nI={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class nL extends tc.HTMLElement{constructor(){if(super(),nA(this,df),nA(this,dy),nA(this,dk),nA(this,dR),nA(this,dI),nA(this,dC),nA(this,dx),nA(this,dP),nA(this,dW),nA(this,dH),nA(this,dV),nA(this,d$),nA(this,dY),nA(this,dj),nA(this,dQ),nA(this,dX),nA(this,d0),nA(this,d2),nA(this,dh,null),nA(this,dm,null),nA(this,dp,null),nA(this,dv,new Set),nA(this,dE,void 0),nA(this,db,!1),nA(this,dg,null),nA(this,dA,()=>{let e=nT(this,dv),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));nk(this,dv,t)}),nA(this,dM,()=>{nw(this,dx,dN).call(this),nw(this,dP,dU).call(this,!1)}),nA(this,dO,()=>{nw(this,dx,dN).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),nk(this,dE,new MutationObserver(nT(this,dA)))}static get observedAttributes(){return[nI.DISABLED,nI.HIDDEN,nI.STYLE,nI.ANCHOR,eV.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":nw(this,df,d_).call(this,e);break;case"invoke":nw(this,dR,dS).call(this,e);break;case"click":nw(this,dW,dB).call(this,e);break;case"toggle":nw(this,dV,dK).call(this,e);break;case"focusout":nw(this,dY,dG).call(this,e);break;case"keydown":nw(this,dj,dz).call(this,e)}}connectedCallback(){var e,t;nT(this,dE).observe(this.defaultSlot,{childList:!0}),nk(this,dg,tL(this.shadowRoot,":host")),nw(this,dk,dw).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),nk(this,dh,t_(this)),null==(t=null==(e=nT(this,dh))?void 0:e.associateElement)||t.call(e,this),this.hidden||(tE(nD(this),nT(this,dM)),tE(this,nT(this,dO))),nw(this,dy,dT).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;nT(this,dE).disconnect(),tb(nD(this),nT(this,dM)),tb(this,nT(this,dO)),this.disable(),null==(t=null==(e=nT(this,dh))?void 0:e.unassociateElement)||t.call(e,this),nk(this,dh,null),nk(this,dm,null),nk(this,dp,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===nI.HIDDEN&&i!==t?(nT(this,db)||nk(this,db,!0),this.hidden?nw(this,dC,dD).call(this):nw(this,dI,dL).call(this),this.dispatchEvent(new n_({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===eV.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nT(this,dh))?void 0:a.unassociateElement)||r.call(a,this),nk(this,dh,null)),i&&this.isConnected&&(nk(this,dh,t_(this)),null==(s=null==(n=nT(this,dh))?void 0:n.associateElement)||s.call(n,this))):e===nI.DISABLED&&i!==t?null==i?this.enable():this.disable():e===nI.STYLE&&i!==t&&nw(this,dk,dw).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=tR(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(nC)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&nw(this,d2,d3).call(this,t)}focus(){if(nk(this,dm,tw()),this.items.length){nw(this,d0,d1).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=nw(this,dQ,dZ).call(this,e);i&&(nw(this,d2,d3).call(this,i,"checkbox"===i.type),nT(this,dp)&&!this.hidden&&(null==(t=nT(this,dm))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=nw(this,dQ,dZ).call(this,e))?t:nw(this,dX,dJ).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),nw(this,d0,d1).call(this,r[s]),r[s].focus()}}function nC(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function nD(e){var t;return null!=(t=e.getAttribute("bounds")?tk(e,`#${e.getAttribute("bounds")}`):tf(e)||e.parentElement)?t:e}dh=new WeakMap,dm=new WeakMap,dp=new WeakMap,dv=new WeakMap,dE=new WeakMap,db=new WeakMap,dg=new WeakMap,df=new WeakSet,d_=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&nw(this,dy,dT).call(this),t.name||nT(this,dA).call(this)},dy=new WeakSet,dT=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},dA=new WeakMap,dk=new WeakSet,dw=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},dR=new WeakSet,dS=function(e){nk(this,dp,e.relatedTarget),tA(this,e.relatedTarget)||(this.hidden=!this.hidden)},dI=new WeakSet,dL=function(){var e;null==(e=nT(this,dp))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),tE(nD(this),nT(this,dM)),tE(this,nT(this,dO))},dC=new WeakSet,dD=function(){var e;null==(e=nT(this,dp))||e.setAttribute("aria-expanded","false"),tb(nD(this),nT(this,dM)),tb(this,nT(this,dO))},dM=new WeakMap,dO=new WeakMap,dx=new WeakSet,dN=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(ng(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=ng(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=nD(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=nT(this,dg);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},dP=new WeakSet,dU=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=nT(this,dg);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),nw(this,dx,dN).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),nw(this,dx,dN).call(this);a.removeProperty("--media-menu-transition-in")},dW=new WeakSet,dB=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(nT(this,dH,dF))){null==(t=nT(this,dm))||t.focus(),this.hidden=!0;return}let i=nw(this,dQ,dZ).call(this,e);!i||i.hasAttribute("disabled")||(nw(this,d0,d1).call(this,i),this.handleSelect(e))},dH=new WeakSet,dF=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},dV=new WeakSet,dK=function(e){if(e.target===this)return;nw(this,d$,dq).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new nf({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);nw(this,dP,dU).call(this,!0)},d$=new WeakSet,dq=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},dY=new WeakSet,dG=function(e){var t;tA(this,e.relatedTarget)||(nT(this,db)&&(null==(t=nT(this,dm))||t.focus()),nT(this,dp)&&nT(this,dp)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},dj=new WeakSet,dz=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(nT(this,db)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=nT(this,dm))||n.focus(),nT(this,db)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},dQ=new WeakSet,dZ=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},dX=new WeakSet,dJ=function(){return this.items.find(e=>0===e.tabIndex)},d0=new WeakSet,d1=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},d2=new WeakSet,d3=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},nL.shadowRootOptions={mode:"open"},nL.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},tc.customElements.get("media-chrome-menu")||tc.customElements.define("media-chrome-menu",nL);var nM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nO=(e,t,i)=>(nM(e,t,"read from private field"),i?i.call(e):t.get(e)),nx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nN=(e,t,i,a)=>(nM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nP=(e,t,i)=>(nM(e,t,"access private method"),i);let nU={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class nW extends tc.HTMLElement{constructor(){if(super(),nx(this,d9),nx(this,d6),nx(this,ue),nx(this,un),nx(this,d4,!1),nx(this,d5,void 0),nx(this,ui,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=th.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),nx(this,ua,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",nO(this,ua));this.handleClick(e)}),nx(this,ur,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",nO(this,ua));this.addEventListener("keyup",nO(this,ua),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=tg(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[nU.TYPE,nU.DISABLED,nU.CHECKED,nU.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),nB(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":nP(this,d9,d8).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":nO(this,ur).call(this,e);break;case"keyup":nO(this,ua).call(this,e)}}attributeChangedCallback(e,t,i){e===nU.CHECKED&&nB(this)&&!nO(this,d4)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===nU.TYPE&&i!==t?this.role="menuitem"+i:e===nU.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(nU.DISABLED)||this.enable(),this.role="menuitem"+this.type,nN(this,d5,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),nP(this,un,us).call(this),this.submenuElement&&nP(this,d6,d7).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),nP(this,un,us).call(this),nN(this,d5,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=tR(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(nU.TYPE))?e:""}set type(e){this.setAttribute(nU.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(nU.VALUE))?e:this.text}set value(e){this.setAttribute(nU.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(nB(this))return"true"===this.getAttribute("aria-checked")}set checked(e){nB(this)&&(nN(this,d4,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!nB(this)&&this.invokeTargetElement&&tA(this,e.target)&&this.invokeTargetElement.dispatchEvent(new nf({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function nB(e){return"radio"===e.type||"checkbox"===e.type}d4=new WeakMap,d5=new WeakMap,d9=new WeakSet,d8=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?nP(this,d6,d7).call(this):nP(this,ue,ut).call(this))},d6=new WeakSet,d7=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",nO(this,ui)),this.submenuElement.addEventListener("addmenuitem",nO(this,ui)),this.submenuElement.addEventListener("removemenuitem",nO(this,ui)),nO(this,ui).call(this)},ue=new WeakSet,ut=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",nO(this,ui)),this.submenuElement.removeEventListener("addmenuitem",nO(this,ui)),this.submenuElement.removeEventListener("removemenuitem",nO(this,ui)),nO(this,ui).call(this)},ui=new WeakMap,ua=new WeakMap,ur=new WeakMap,un=new WeakSet,us=function(){var e;let t=null==(e=nO(this,d5))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},nW.shadowRootOptions={mode:"open"},nW.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},nW.getSuffixSlotInnerHTML=function(e){return""},tc.customElements.get("media-chrome-menu-item")||tc.customElements.define("media-chrome-menu-item",nW);class nH extends nL{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-settings-menu-button")}}nH.getTemplateHTML=function(e){return`
    ${nL.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},tc.customElements.get("media-settings-menu")||tc.customElements.define("media-settings-menu",nH);class nF extends nW{}nF.shadowRootOptions={mode:"open"},nF.getTemplateHTML=function(e){return`
    ${nW.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},nF.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},tc.customElements.get("media-settings-menu-item")||tc.customElements.define("media-settings-menu-item",nF);class nV extends iZ{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=tR(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new nf({relatedTarget:this}))}}tc.customElements.get("media-chrome-menu-button")||tc.customElements.define("media-chrome-menu-button",nV);class nK extends nV{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",e7("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tf(this).querySelector("media-settings-menu")}}nK.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},nK.getTooltipContentHTML=function(){return e7("Settings")},tc.customElements.get("media-settings-menu-button")||tc.customElements.define("media-settings-menu-button",nK);var n$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nq=(e,t,i)=>(n$(e,t,"read from private field"),i?i.call(e):t.get(e)),nY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nG=(e,t,i,a)=>(n$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nj=(e,t,i)=>(n$(e,t,"access private method"),i);class nz extends nL{constructor(){super(...arguments),nY(this,ud),nY(this,uc),nY(this,uo,[]),nY(this,ul,void 0)}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_AUDIO_TRACK_LIST,eq.MEDIA_AUDIO_TRACK_ENABLED,eq.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eq.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===eq.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;nG(this,uo,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(e3)),nj(this,ud,uu).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nj(this,uc,uh))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nj(this,uc,uh))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=tf(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return nq(this,uo)}set mediaAudioTrackList(e){nG(this,uo,e),nj(this,ud,uu).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=tx(this,eq.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){tN(this,eq.MEDIA_AUDIO_TRACK_ENABLED,e)}}uo=new WeakMap,ul=new WeakMap,ud=new WeakSet,uu=function(){if(nq(this,ul)===JSON.stringify(this.mediaAudioTrackList))return;nG(this,ul,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=nR({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(nS(this,"checked-indicator")),this.defaultSlot.append(e)}},uc=new WeakSet,uh=function(){if(null==this.value)return;let e=new tc.CustomEvent(eF.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tc.customElements.get("media-audio-track-menu")||tc.customElements.define("media-audio-track-menu",nz);let nQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nZ=e=>{let t=e7("Audio");e.setAttribute("aria-label",t)};class nX extends nV{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_AUDIO_TRACK_ENABLED,eq.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_LANG&&nZ(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=tf(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=tx(this,eq.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){tN(this,eq.MEDIA_AUDIO_TRACK_ENABLED,e)}}nX.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${nQ}</slot>
  `},nX.getTooltipContentHTML=function(){return e7("Audio")},tc.customElements.get("media-audio-track-menu-button")||tc.customElements.define("media-audio-track-menu-button",nX);var nJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n1=(e,t,i)=>(nJ(e,t,"access private method"),i);let n2=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class n3 extends nL{constructor(){super(...arguments),n0(this,up),n0(this,uE),n0(this,um,void 0)}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_SUBTITLES_LIST,eq.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_SUBTITLES_LIST&&t!==i?n1(this,up,uv).call(this):e===eq.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",n1(this,up,uv).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",n1(this,uE,ub))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",n1(this,uE,ub))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return n4(this,eq.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){n5(this,eq.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return n4(this,eq.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){n5(this,eq.MEDIA_SUBTITLES_SHOWING,e)}}um=new WeakMap,up=new WeakSet,uv=function(){var e,t,i,a,r,n;let s=(nJ(this,t=um,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(eq.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;a=um,r=JSON.stringify(this.mediaSubtitlesList),nJ(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=nR({type:"radio",text:this.formatMenuItemText(e7("Off")),value:"off",checked:l});for(let t of(d.prepend(nS(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=nR({type:"radio",text:this.formatMenuItemText(t.label,t),value:t3(t),checked:this.value==t3(t)});i.prepend(nS(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(nS(this,"captions-indicator")),this.defaultSlot.append(i)}},uE=new WeakSet,ub=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(eq.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new tc.CustomEvent(eF.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new tc.CustomEvent(eF.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},n3.getTemplateHTML=function(e){return`
    ${nL.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${n2}</slot>
  `};let n4=(e,t)=>{let i=e.getAttribute(t);return i?t1(i):[]},n5=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=t4(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tc.customElements.get("media-captions-menu")||tc.customElements.define("media-captions-menu",n3);let n9=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,n8=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,n6=e=>{e.setAttribute("data-captions-enabled",t6(e).toString())},n7=e=>{e.setAttribute("aria-label",e7("closed captions"))};class se extends nV{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_SUBTITLES_LIST,eq.MEDIA_SUBTITLES_SHOWING,eq.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),n7(this),n6(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_SUBTITLES_SHOWING?n6(this):e===eq.MEDIA_LANG&&n7(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=tf(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return st(this,eq.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){si(this,eq.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return st(this,eq.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){si(this,eq.MEDIA_SUBTITLES_SHOWING,e)}}se.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${n9}</slot>
      <slot name="off">${n8}</slot>
    </slot>
  `},se.getTooltipContentHTML=function(){return e7("Captions")};let st=(e,t)=>{let i=e.getAttribute(t);return i?t1(i):[]},si=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=t4(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tc.customElements.get("media-captions-menu-button")||tc.customElements.define("media-captions-menu-button",se);var sa=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sr=(e,t,i)=>(sa(e,t,"read from private field"),i?i.call(e):t.get(e)),sn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ss=(e,t,i)=>(sa(e,t,"access private method"),i);let so={RATES:"rates"};class sl extends nL{constructor(){super(),sn(this,uf),sn(this,uy),sn(this,ug,new tJ(this,so.RATES,{defaultValue:a8})),ss(this,uf,u_).call(this)}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PLAYBACK_RATE,so.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eq.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,ss(this,uf,u_).call(this)):e===so.RATES&&t!=i&&(sr(this,ug).value=i,ss(this,uf,u_).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ss(this,uy,uT))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ss(this,uy,uT))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-playback-rate-menu-button")}get rates(){return sr(this,ug)}set rates(e){e?Array.isArray(e)?sr(this,ug).value=e.join(" "):"string"==typeof e&&(sr(this,ug).value=e):sr(this,ug).value="",ss(this,uf,u_).call(this)}get mediaPlaybackRate(){return tC(this,eq.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tD(this,eq.MEDIA_PLAYBACK_RATE,e)}}ug=new WeakMap,uf=new WeakSet,u_=function(){this.defaultSlot.textContent="";let e=a6(this.mediaPlaybackRate),t=new Set(Array.from(sr(this,ug)).map(e=>a6(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=nR({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(nS(this,"checked-indicator")),this.defaultSlot.append(t)}},uy=new WeakSet,uT=function(){if(!this.value)return;let e=new tc.CustomEvent(eF.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tc.customElements.get("media-playback-rate-menu")||tc.customElements.define("media-playback-rate-menu",sl);class sd extends nV{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${a6(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eq.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=a6(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",e7("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tf(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return tC(this,eq.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){tD(this,eq.MEDIA_PLAYBACK_RATE,e)}}sd.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?a6(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},sd.getTooltipContentHTML=function(){return e7("Playback rate")},tc.customElements.get("media-playback-rate-menu-button")||tc.customElements.define("media-playback-rate-menu-button",sd);var su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sc=(e,t,i)=>(su(e,t,"read from private field"),i?i.call(e):t.get(e)),sh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sm=(e,t,i,a)=>(su(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sp=(e,t,i)=>(su(e,t,"access private method"),i);class sv extends nL{constructor(){super(...arguments),sh(this,uw),sh(this,uS),sh(this,uA,[]),sh(this,uk,{})}static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_RENDITION_LIST,eq.MEDIA_RENDITION_SELECTED,eq.MEDIA_RENDITION_UNAVAILABLE,eq.MEDIA_HEIGHT,eq.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case eq.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",sp(this,uw,uR).call(this);break;case eq.MEDIA_RENDITION_LIST:sm(this,uA,null==i?void 0:i.split(/\s+/).map(e1)),sp(this,uw,uR).call(this);break;case eq.MEDIA_HEIGHT:case eq.MEDIA_WIDTH:sp(this,uw,uR).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",sp(this,uS,uI))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",sp(this,uS,uI))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:tf(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return sc(this,uA)}set mediaRenditionList(e){sm(this,uA,e),sp(this,uw,uR).call(this)}get mediaRenditionSelected(){return tx(this,eq.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){tN(this,eq.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return tC(this,eq.MEDIA_HEIGHT)}set mediaHeight(e){tD(this,eq.MEDIA_HEIGHT,e)}get mediaWidth(){return tC(this,eq.MEDIA_WIDTH)}set mediaWidth(e){tD(this,eq.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}uA=new WeakMap,uk=new WeakMap,uw=new WeakSet,uR=function(){let e,t=!this.mediaRenditionSelected;if(sc(this,uk).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&sc(this,uk).mediaHeight===this.mediaHeight&&sc(this,uk).mediaWidth===this.mediaWidth&&sc(this,uk).isAuto===t)return;sc(this,uk).mediaRenditionList=JSON.stringify(this.mediaRenditionList),sc(this,uk).mediaHeight=this.mediaHeight,sc(this,uk).mediaWidth=this.mediaWidth,sc(this,uk).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=nR({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(nS(this,"checked-indicator")),this.defaultSlot.append(i)}let r=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${e7("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:r})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${e7("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText(e7("Auto")));let n=nR({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(nS(this,"checked-indicator")),this.defaultSlot.append(n)},uS=new WeakSet,uI=function(){if(null==this.value)return;let e=new tc.CustomEvent(eF.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},tc.customElements.get("media-rendition-menu")||tc.customElements.define("media-rendition-menu",sv);let sE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class sb extends nV{static get observedAttributes(){return[...super.observedAttributes,eq.MEDIA_RENDITION_SELECTED,eq.MEDIA_RENDITION_UNAVAILABLE,eq.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",e7("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:tf(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return tx(this,eq.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){tN(this,eq.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return tC(this,eq.MEDIA_HEIGHT)}set mediaHeight(e){tD(this,eq.MEDIA_HEIGHT,e)}}sb.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${sE}</slot>
  `},sb.getTooltipContentHTML=function(){return e7("Quality")},tc.customElements.get("media-rendition-menu-button")||tc.customElements.define("media-rendition-menu-button",sb);var sg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sf=(e,t,i)=>(sg(e,t,"read from private field"),i?i.call(e):t.get(e)),s_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sy=(e,t,i,a)=>(sg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sT=(e,t,i)=>(sg(e,t,"access private method"),i);class sA extends nL{constructor(){super(),s_(this,uC),s_(this,uM),s_(this,ux),s_(this,uP),s_(this,uB),s_(this,uL,!1),s_(this,uW,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=sT(this,uP,uU).call(this,t);(i||a)&&(sf(this,uL)?sT(this,uM,uO).call(this):sT(this,uB,uH).call(this,e))}),s_(this,uF,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=sT(this,uP,uU).call(this,t);!i&&(a&&(r||n)||sT(this,uM,uO).call(this))}),s_(this,uV,e=>{"Escape"===e.key&&sT(this,uM,uO).call(this)}),s_(this,uK,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}sT(this,uM,uO).call(this)}),this.setAttribute("noautohide",""),sT(this,uC,uD).call(this)}connectedCallback(){super.connectedCallback(),tf(this).addEventListener("contextmenu",sf(this,uW)),this.addEventListener("click",sf(this,uK))}disconnectedCallback(){super.disconnectedCallback(),tf(this).removeEventListener("contextmenu",sf(this,uW)),this.removeEventListener("click",sf(this,uK)),document.removeEventListener("mousedown",sf(this,uF)),document.removeEventListener("keydown",sf(this,uV))}}uL=new WeakMap,uC=new WeakSet,uD=function(){this.hidden=!sf(this,uL)},uM=new WeakSet,uO=function(){sy(this,uL,!1),sT(this,uC,uD).call(this)},ux=new WeakSet,uN=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&sT(e,uM,uO).call(e)})},uP=new WeakSet,uU=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},uW=new WeakMap,uB=new WeakSet,uH=function(e){e.preventDefault(),sT(this,ux,uN).call(this),sy(this,uL,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,sT(this,uC,uD).call(this),document.addEventListener("mousedown",sf(this,uF),{once:!0}),document.addEventListener("keydown",sf(this,uV),{once:!0})},uF=new WeakMap,uV=new WeakMap,uK=new WeakMap,sA.getTemplateHTML=function(e){return`
      ${nL.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},tc.customElements.get("media-context-menu")||tc.customElements.define("media-context-menu",sA);class sk extends nW{}sk.shadowRootOptions={mode:"open"},sk.getTemplateHTML=function(e){return`
    ${nW.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},tc.customElements.get("media-context-menu-item")||tc.customElements.define("media-context-menu-item",sk);var sw=e=>{throw TypeError(e)},sR=(e,t,i)=>t.has(e)||sw("Cannot "+i),sS=(e,t,i)=>(sR(e,t,"read from private field"),i?i.call(e):t.get(e)),sI=(e,t,i)=>t.has(e)?sw("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),sL=(e,t,i,a)=>(sR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sC=(e,t,i)=>(sR(e,t,"access private method"),i),sD=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends sD{}globalThis.DocumentFragment=e}var sM,sO,sx,sN,sP,sU,sW,sB,sH,sF,sV,sK,s$,sq,sY,sG,sj,sz,sQ,sZ,sX,sJ,s0,s1,s2,s3,s4,s5,s9,s8,s6,s7,oe,ot,oi,oa,or,on,os,oo,ol,od,ou,oc,oh,om,op,ov,oE,ob,og,of,o_,oy,oT,oA,ok,ow,oR,oS,oI,oL,oC,oD,oM,oO,ox,oN,oP,oU,oW,oB,oH,oF,oV,oK,o$,oq,oY,oG,oj,oz,oQ,oZ,oX,oJ,o0,o1,o2,o3,o4,o5,o9,o8,o6,o7,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lc,lh,lm,lp,lv,lE,lb,lg,lf,l_,ly,lT,lA,lk,lw,lR,lS,lI,lL,lC,lD,lM,lO,lx,lN,lP,lU,lW,lB,lH,lF,lV,lK,l$,lq,lY,lG,lj,lz,lQ,lZ,lX,lJ,l0,l1,l2,l3,l4,l5,l9,l8,l6,l7,de,dt,di,da,dr,dn,ds,dl,dd,du,dc,dh,dm,dp,dv,dE,db,dg,df,d_,dy,dT,dA,dk,dw,dR,dS,dI,dL,dC,dD,dM,dO,dx,dN,dP,dU,dW,dB,dH,dF,dV,dK,d$,dq,dY,dG,dj,dz,dQ,dZ,dX,dJ,d0,d1,d2,d3,d4,d5,d9,d8,d6,d7,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,uE,ub,ug,uf,u_,uy,uT,uA,uk,uw,uR,uS,uI,uL,uC,uD,uM,uO,ux,uN,uP,uU,uW,uB,uH,uF,uV,uK,u$,uq=class extends sD{},uY=class{constructor(e,t={}){sI(this,u$),sL(this,u$,null==t?void 0:t.detail)}get detail(){return sS(this,u$)}initCustomEvent(){}};u$=new WeakMap;var uG={document:{createElement:function(e,t){return new uq}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(uq)},CustomEvent:uY,EventTarget:sD,HTMLElement:uq,HTMLVideoElement:class extends sD{}},uj="undefined"==typeof window||void 0===globalThis.customElements,uz=uj?uG:globalThis,uQ=uj?uG.document:globalThis.document;function uZ(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function uX(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function uJ(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function u0(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var u1,u2,u3,u4=(e,t)=>!!e&&!!t&&(!!e.contains(t)||u4(e,t.getRootNode().host)),u5="mux.com",u9=(()=>{try{return"3.13.2"}catch{}return"UNKNOWN"})(),u8=e=>{if(e){if([s.U4.LIVE,s.U4.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return s.U4.LIVE}},u6={crossorigin:"crossOrigin",playsinline:"playsInline"},u7=class{constructor(e,t){sI(this,u1),sI(this,u2),sI(this,u3,[]),sL(this,u1,e),sL(this,u2,t)}[Symbol.iterator](){return sS(this,u3).values()}get length(){return sS(this,u3).length}get value(){var e;return null!=(e=sS(this,u3).join(" "))?e:""}set value(e){var t;e!==this.value&&(sL(this,u3,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return sS(this,u3)[e]}values(){return sS(this,u3).values()}keys(){return sS(this,u3).keys()}forEach(e){sS(this,u3).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||sS(this,u3).push(e)}),(""!==this.value||null!=(t=sS(this,u1))&&t.hasAttribute(`${sS(this,u2)}`))&&null!=(i=sS(this,u1))&&i.setAttribute(`${sS(this,u2)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{sS(this,u3).splice(sS(this,u3).indexOf(e),1)}),null==(t=sS(this,u1))||t.setAttribute(`${sS(this,u2)}`,`${this.value}`)}contains(e){return sS(this,u3).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};u1=new WeakMap,u2=new WeakMap,u3=new WeakMap;var ce=`[mux-player ${u9}]`;function ct(...e){console.warn(ce,...e)}function ci(...e){console.error(ce,...e)}function ca(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${(0,s.Ru)("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),ct(i)}var cr={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},cn={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},cs=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),co=[...Object.values(cr).filter(e=>cr.PLAYSINLINE!==e),...Object.values(cn)];function cl(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var cd=class extends uz.HTMLElement{static get observedAttributes(){return co}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case cn.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case cn.VOLUME:{let e=null!=(a=uJ(i))?a:1;this.media&&(this.media.volume=e);return}case cn.PLAYBACKRATE:{let e=null!=(r=uJ(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:cs}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:cs}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=uJ(this.getAttribute(cn.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(cn.PLAYBACKRATE,`${e}`):this.removeAttribute(cn.PLAYBACKRATE)}get crossOrigin(){return cl(this,cr.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(cr.CROSSORIGIN,`${e}`)}get autoplay(){return null!=cl(this,cr.AUTOPLAY)}set autoplay(e){e?this.setAttribute(cr.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(cr.AUTOPLAY)}get loop(){return null!=cl(this,cr.LOOP)}set loop(e){e?this.setAttribute(cr.LOOP,""):this.removeAttribute(cr.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=cl(this,cr.MUTED)}set defaultMuted(e){e?this.setAttribute(cr.MUTED,""):this.removeAttribute(cr.MUTED)}get playsInline(){return null!=cl(this,cr.PLAYSINLINE)}set playsInline(e){ci("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(cr.PRELOAD,e):this.removeAttribute(cr.PRELOAD)}},cu=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,cc=new WeakMap,ch=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=cc.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=cc.get(this.element);e&&e.delete(this.type)}}static for(t){cc.has(t.element)||cc.set(t.element,new Map);let i=t.attributeName.slice(2),a=cc.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},cm=new Map,cp=new WeakMap,cv=new WeakMap,cE=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(cm.has(this.stringsKey))return cm.get(this.stringsKey);{let e=uQ.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),cm.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(cp.get(e)!==i){cp.set(e,i);let t=new rZ(i,this.values,this.processor);cv.set(e,t),e instanceof r5?e.replace(...t.children):e.appendChild(t);return}let a=cv.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},cb={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof r4&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof r4){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof r4&&e.attributeName.startsWith("on")&&(ch.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof r5&&(e.replace(""),1)||t instanceof cE&&e instanceof r5&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof r5&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof r4){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function cg(e,...t){return new cE(e,t,cb)}var cf=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),c_=e=>e.charAt(0).toUpperCase()+e.slice(1),cy=(e,t)=>{let i=(e=>{if(e.muxCode){if(e.muxCode===s.Ks.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===s.Ks.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([s.Ks.NETWORK_TOKEN_AUD_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===s.Ks.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===s.Ks.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===s.Ks.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===s.Ks.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===s.FJ.MEDIA_ERR_NETWORK)return"";if(e.code===s.FJ.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===s.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},cT=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,cA=uQ.createElement("template");"innerHTML"in cA&&(cA.innerHTML=cT);var ck,cw,cR=class extends nE{};cR.template=null==(cw=null==(ck=cA.content)?void 0:ck.children)?void 0:cw[0],uz.customElements.get("media-theme-gerwig")||uz.customElements.define("media-theme-gerwig",cR);var cS={SRC:"src",POSTER:"poster"},cI={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},cL=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],cC=aL.formatErrorMessage;function cD(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}aL.formatErrorMessage=e=>{var t,i;if(e instanceof s.FJ){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=c_(null!=(i=e.errorCategory)?i:"video"),n=(0,s.LM)(null!=(a=e.errorCategory)?a:s.dc.VIDEO);if(e.muxCode===s.Ks.NETWORK_OFFLINE)return(0,s.Ru)("Your device appears to be offline",t);if(e.muxCode===s.Ks.NETWORK_RECONNECTING)return(0,s.Ru)("Reconnecting...",t);if(e.muxCode===s.Ks.NETWORK_TOKEN_EXPIRED)return(0,s.Ru)("{category} URL has expired",t).format({category:r});if([s.Ks.NETWORK_TOKEN_SUB_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISSING,s.Ks.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return(0,s.Ru)("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===s.Ks.NETWORK_TOKEN_MISSING)return(0,s.Ru)("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===s.Ks.NETWORK_NOT_FOUND)return(0,s.Ru)("{category} does not exist",t).format({category:r});if(e.muxCode===s.Ks.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return(0,s.Ru)("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===s.FJ.MEDIA_ERR_NETWORK)return(0,s.Ru)("Network Error",t);if(e.code===s.FJ.MEDIA_ERR_DECODE)return(0,s.Ru)("Media Error",t);if(e.code===s.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED)return(0,s.Ru)("Source Not Supported",t)}return(0,s.Ru)("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(e.muxCode){let r=c_(null!=(i=e.errorCategory)?i:"video"),n=(0,s.LM)(null!=(a=e.errorCategory)?a:s.dc.VIDEO);return e.muxCode===s.Ks.NETWORK_OFFLINE?(0,s.Ru)("Check your internet connection and try reloading this video.",t):e.muxCode===s.Ks.NETWORK_RECONNECTING?(0,s.Ru)("Your connection was interrupted. Attempting to resume playback...",t):e.muxCode===s.Ks.NETWORK_TOKEN_EXPIRED?(0,s.Ru)("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===s.Ks.NETWORK_TOKEN_SUB_MISMATCH?(0,s.Ru)("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===s.Ks.NETWORK_TOKEN_MALFORMED?(0,s.Ru)("{category} URL is formatted incorrectly",t).format({category:r}):[s.Ks.NETWORK_TOKEN_AUD_MISMATCH,s.Ks.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?(0,s.Ru)("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[s.Ks.NETWORK_TOKEN_MISSING,s.Ks.NETWORK_INVALID_URL].includes(e.muxCode)?(0,s.Ru)("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===s.Ks.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===s.FJ.MEDIA_ERR_NETWORK||e.code===s.FJ.MEDIA_ERR_DECODE||e.code===s.FJ.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${(0,s.Ru)("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return cC(e)};var cM,cO,cx,cN,cP,cU,cW,cB,cH,cF,cV,cK,c$,cq,cY,cG,cj,cz,cQ,cZ,cX,cJ,c0,c1,c2=Object.values(U),c3=Object.values(cS),c4=Object.values(cI),c5="mux-player",c9={isDialogOpen:!1},c8={redundant_streams:!0},c6=class extends cd{constructor(){super(),sI(this,cG),sI(this,cM),sI(this,cO,!1),sI(this,cx,{}),sI(this,cN,!0),sI(this,cP,new u7(this,"hotkeys")),sI(this,cU),sI(this,cW,()=>sC(this,cG,cZ).call(this)),sI(this,cB,()=>sC(this,cG,cZ).call(this)),sI(this,cH,()=>sC(this,cG,cZ).call(this)),sI(this,cF,e=>{e.composedPath().find(e=>{var t;return null==(t=null==e?void 0:e.hasAttribute)?void 0:t.call(e,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),sI(this,cV,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&sC(this,cG,cQ).call(this,{isDialogOpen:!1})}),sI(this,cK,e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(u4(this,uQ.activeElement)||e.preventDefault())}),sI(this,c$),sI(this,cq,{...c9}),sI(this,cY,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof s.FJ)){let{message:e,code:t}=null!=i?i:{};i=new s.FJ(e,t)}if(!(null!=i&&i.fatal)){ct(i),i.data&&ct(`${i.name} data:`,i.data);return}let a=cy(i,!1);a.message&&ca(a),ci(i),i.data&&ci(`${i.name} data:`,i.data),sC(this,cG,cQ).call(this,{isDialogOpen:!0})}),sL(this,cM,(0,s.GI)()),this.attachShadow({mode:"open"}),sC(this,cG,cz).call(this),this.isConnected&&sC(this,cG,cj).call(this)}static get NAME(){return c5}static get VERSION(){return u9}static get observedAttributes(){var e;return[...null!=(e=cd.observedAttributes)?e:[],...c3,...c2,...c4]}setAttribute(e,t){super.setAttribute(e,t),e.startsWith("metadata-")&&this.media&&(this.media.metadata=cD(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=cD(this))}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){sC(this,cG,cj).call(this);let e=this.media;e&&(e.metadata=cD(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o,l,d;null==(e=sS(this,cU))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",sS(this,cW)),null==(i=this.media)||i.removeEventListener("loadstart",sS(this,cB)),this.removeEventListener("error",sS(this,cY)),this.removeEventListener("click",sS(this,cF)),null==(a=this.mediaTheme)||a.removeEventListener("close",sS(this,cV)),null==(r=this.mediaTheme)||r.removeEventListener("focusin",sS(this,cK)),this.media&&(this.media.errorTranslator=void 0),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("addtrack",sS(this,cH)),null==(l=null==(o=this.media)?void 0:o.textTracks)||l.removeEventListener("removetrack",sS(this,cH)),null==(d=sS(this,c$))||d.call(this),sL(this,c$,void 0),sL(this,cO,!1)}attributeChangedCallback(e,t,i){var a;switch(sC(this,cG,cj).call(this),super.attributeChangedCallback(e,t,i),e){case cI.HOTKEYS:sS(this,cP).value=i;break;case cI.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&ct((0,s.Ru)("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case cI.THUMBNAIL_TOKEN:if(i){let e=(0,s.$n)(i);if(e){let{aud:t}=e,i=s._G.THUMBNAIL;t!==i&&ct((0,s.Ru)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case cI.STORYBOARD_TOKEN:if(i){let e=(0,s.$n)(i);if(e){let{aud:t}=e,i=s._G.STORYBOARD;t!==i&&ct((0,s.Ru)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case cI.DRM_TOKEN:if(i){let e=(0,s.$n)(i);if(e){let{aud:t}=e,i=s._G.DRM;t!==i&&ct((0,s.Ru)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case U.PLAYBACK_ID:null!=i&&i.includes("?token")&&ci((0,s.Ru)("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case U.STREAM_TYPE:i&&![s.U4.LIVE,s.U4.ON_DEMAND,s.U4.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:ca({file:"invalid-stream-type.md",message:(0,s.Ru)("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===s.U4.LIVE?null==this.getAttribute(cI.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case cI.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=uQ.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case U.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0);break;case U.MAX_RECONNECT_RETRIES:(null==i||i!==t)&&(this.maxReconnectRetries=Number(i))}[U.PLAYBACK_ID,cS.SRC,cI.PLAYBACK_TOKEN].includes(e)&&t!==i&&sL(this,cq,{...sS(this,cq),...c9}),sC(this,cG,cZ).call(this,{[null!=(a=u6[e])?a:uX(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(eq.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new uz.CustomEvent(eF.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(eY.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(eq.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new uz.CustomEvent(eF.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(eY.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(U.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?s.WG.includes(e)?this.setAttribute(U.PREFER_CMCD,e):ct(`Invalid value for preferCmcd. Must be one of ${s.WG.join()}`):this.removeAttribute(U.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eq.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(eq.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(cI.THEME))?e:"gerwig"}set theme(e){this.setAttribute(cI.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(cL.includes(i))continue;let a=e.getAttribute(i);t[uX(i)]=""===a||a}return t}set themeProps(e){var t,i;sC(this,cG,cj).call(this);let a={...this.themeProps,...e};for(let r in a){if(cL.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(uZ(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(uZ(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(U.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(U.PLAYBACK_ID,e):this.removeAttribute(U.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=c7(this,cS.SRC))?e:void 0:null!=(t=this.getAttribute(cS.SRC))?t:void 0}set src(e){e?this.setAttribute(cS.SRC,e):this.removeAttribute(cS.SRC)}get poster(){var e;let t=this.getAttribute(cS.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void ct("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=u5,thumbnailTime:a,programTime:r}={})=>{var n;let o=null==t?a:void 0,{aud:l}=null!=(n=(0,s.$n)(t))?n:{};if(!(t&&"t"!==l))return`https://image.${i}/${e}/thumbnail.webp${u0({token:t,time:o,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(cS.POSTER,e):this.removeAttribute(cS.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(cI.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(cI.STORYBOARD_SRC,e):this.removeAttribute(cI.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[s.U4.LIVE,s.U4.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=u5,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:o}=null!=(n=(0,s.$n)(t))?n:{};if(!(t&&"s"!==o))return`https://image.${i}/${e}/storyboard.vtt${u0({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(cI.AUDIO)}set audio(e){if(!e)return void this.removeAttribute(cI.AUDIO);this.setAttribute(cI.AUDIO,"")}get hotkeys(){return sS(this,cP)}get nohotkeys(){return this.hasAttribute(cI.NOHOTKEYS)}set nohotkeys(e){if(!e)return void this.removeAttribute(cI.NOHOTKEYS);this.setAttribute(cI.NOHOTKEYS,"")}get thumbnailTime(){return uJ(this.getAttribute(cI.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(cI.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(cI.VIDEO_TITLE))?e:this.getAttribute(cI.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(cI.VIDEO_TITLE,e):this.removeAttribute(cI.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=c7(this,cI.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(cI.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(cI.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=uz.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(cI.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(cI.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=uz.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(cI.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(cI.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=uz.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(cI.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(cI.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(cI.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(cI.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(cI.PLAYBACK_RATES))return this.getAttribute(cI.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e)return void this.removeAttribute(cI.PLAYBACK_RATES);this.setAttribute(cI.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=uJ(this.getAttribute(cI.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(cI.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=uJ(this.getAttribute(cI.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(cI.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(cI.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(cI.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(cI.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return uJ(this.getAttribute(cI.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(cI.DEFAULT_DURATION):this.setAttribute(cI.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(U.PLAYER_INIT_TIME)?uJ(this.getAttribute(U.PLAYER_INIT_TIME)):sS(this,cM)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(U.PLAYER_INIT_TIME):this.setAttribute(U.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(U.PLAYER_SOFTWARE_NAME))?e:c5}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(U.PLAYER_SOFTWARE_VERSION))?e:u9}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(U.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(U.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(U.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(U.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(U.MAX_RESOLUTION,e):this.removeAttribute(U.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(U.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(U.MIN_RESOLUTION,e):this.removeAttribute(U.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(U.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(U.MAX_AUTO_RESOLUTION):this.setAttribute(U.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(U.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(U.RENDITION_ORDER,e):this.removeAttribute(U.RENDITION_ORDER))}get programStartTime(){return uJ(this.getAttribute(U.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(U.PROGRAM_START_TIME):this.setAttribute(U.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return uJ(this.getAttribute(U.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(U.PROGRAM_END_TIME):this.setAttribute(U.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return uJ(this.getAttribute(U.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(U.ASSET_START_TIME):this.setAttribute(U.ASSET_START_TIME,`${e}`)}get assetEndTime(){return uJ(this.getAttribute(U.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(U.ASSET_END_TIME):this.setAttribute(U.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(cI.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(cI.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):c8}set extraSourceParams(e){null==e?this.removeAttribute(cI.EXTRA_SOURCE_PARAMS):this.setAttribute(cI.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(U.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(U.CUSTOM_DOMAIN,e):this.removeAttribute(U.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=c7(this,U.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(U.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(cI.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(cI.NO_VOLUME_PREF,""):this.removeAttribute(cI.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(cI.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(cI.NO_MUTED_PREF,""):this.removeAttribute(cI.NO_MUTED_PREF)}get debug(){return null!=c7(this,U.DEBUG)}set debug(e){e?this.setAttribute(U.DEBUG,""):this.removeAttribute(U.DEBUG)}get disableTracking(){return null!=c7(this,U.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(U.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=c7(this,U.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(U.DISABLE_COOKIES,""):this.removeAttribute(U.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(U.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:s.U4.UNKNOWN}set streamType(e){this.setAttribute(U.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(cI.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(cI.DEFAULT_STREAM_TYPE))?i:s.U4.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(cI.DEFAULT_STREAM_TYPE,e):this.removeAttribute(cI.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(cI.TARGET_LIVE_WINDOW)?+this.getAttribute(cI.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(cI.TARGET_LIVE_WINDOW):this.setAttribute(cI.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return uJ(c7(this,U.START_TIME))}set startTime(e){this.setAttribute(U.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return uJ(c7(this,U.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){null==e?this.removeAttribute(U.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(U.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return uJ(c7(this,U.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){null==e?this.removeAttribute(U.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(U.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return uJ(c7(this,U.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){null==e?this.removeAttribute(U.MIN_PRELOAD_SEGMENTS):this.setAttribute(U.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(U.PREFER_PLAYBACK);if(e===s.Vi.MSE||e===s.Vi.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===s.Vi.MSE||e===s.Vi.NATIVE?this.setAttribute(U.PREFER_PLAYBACK,e):this.removeAttribute(U.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(sC(this,cG,cj).call(this),!this.media)return void ci("underlying media element missing when trying to set metadata. metadata will not be set.");this.media.metadata={...cD(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(sC(this,cG,cj).call(this),!this.media)return void ci("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");this.media._hlsConfig=e}async addCuePoints(e){var t;return(sC(this,cG,cj).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void ci("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(sC(this,cG,cj).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void ci("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(cI.PLAYBACK_TOKEN),t=this.getAttribute(cI.DRM_TOKEN),i=this.getAttribute(cI.THUMBNAIL_TOKEN),a=this.getAttribute(cI.STORYBOARD_TOKEN);return{...sS(this,cx),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){sL(this,cx,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(cI.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(cI.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(cI.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(cI.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(cI.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(cI.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(cI.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(cI.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return(0,s.KR)(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i)return(0,s.$V)(i,e)}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(cI.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(cI.CAST_RECEIVER,e):this.removeAttribute(cI.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media)return void ci("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(cI.NO_TOOLTIPS)}set noTooltips(e){if(!e)return void this.removeAttribute(cI.NO_TOOLTIPS);this.setAttribute(cI.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(cI.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(cI.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(cI.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media)return void ci("underlying media element missing when trying to set capRenditionToPlayerSize");this.media.capRenditionToPlayerSize=e}get maxReconnectRetries(){var e;return null==(e=this.media)?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){if(!this.media)return void ci("underlying media element missing when trying to set maxReconnectRetries");this.media.maxReconnectRetries=e}};function c7(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}cM=new WeakMap,cO=new WeakMap,cx=new WeakMap,cN=new WeakMap,cP=new WeakMap,cU=new WeakMap,cW=new WeakMap,cB=new WeakMap,cH=new WeakMap,cF=new WeakMap,cV=new WeakMap,cK=new WeakMap,c$=new WeakMap,cq=new WeakMap,cY=new WeakMap,cG=new WeakSet,cj=function(){var e,t,i,a;if(!sS(this,cO)){sL(this,cO,!0),sC(this,cG,cZ).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof uz.HTMLElement))throw""}catch{ci("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{ci("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof iO))throw""}catch{ci("<media-controller> failed to upgrade!")}sC(this,cG,cX).call(this),sC(this,cG,cJ).call(this),sC(this,cG,c0).call(this),sL(this,cN,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tq.USER_INACTIVE))||t),sC(this,cG,c1).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",sS(this,cW)),null==(a=this.media)||a.addEventListener("loadstart",sS(this,cB)),this.media&&(this.media.metadata=cD(this))}},cz=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},cQ=function(e){Object.assign(sS(this,cq),e),sC(this,cG,cZ).call(this)},cZ=function(e={}){var t,i,a,r,n,o,l,d,u,c,h,m,p,v,E,b,g,f,y,T,A,k,w,R,S,I,L,C,D,M,O,x,N,P,W,B,H,F,V,K,$,q,Y,G,j,z,Q,Z,X,J;let ee,et;t={...sS(this,cq),...e},ee={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(cI.STORYBOARD_SRC),fullscreenElement:this.getAttribute(cI.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=uz.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(cI.NOHOTKEYS),hotKeys:this.getAttribute(cI.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,initialBandwidthEstimateKbps:this.initialBandwidthEstimateKbps,initialEstimateSegments:this.initialEstimateSegments,minPreloadSegments:this.minPreloadSegments,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(U.TARGET_LIVE_WINDOW),streamType:u8(this.getAttribute(U.STREAM_TYPE)),primaryColor:this.getAttribute(cI.PRIMARY_COLOR),secondaryColor:this.getAttribute(cI.SECONDARY_COLOR),accentColor:this.getAttribute(cI.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(et=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(et).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(cI.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(U.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(cI.TITLE),videoTitle:null!=(r=this.getAttribute(cI.VIDEO_TITLE))?r:this.getAttribute(cI.TITLE),novolumepref:this.hasAttribute(cI.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(cI.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(cI.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(cI.DISABLE_PSEUDO_ENDED),maxReconnectRetries:this.maxReconnectRetries,capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},o=cg`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(ee)}
    ${cu}
  </style>
  ${d=ee,cg`
  <media-theme
    template="${d.themeTemplate||!1}"
    defaultstreamtype="${null!=(u=d.defaultStreamType)&&u}"
    hotkeys="${(e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===u8(e.streamType)&&(t+=" noarrowleft noarrowright"),t})(d)||!1}"
    nohotkeys="${d.noHotKeys||!d.hasSrc||!1}"
    noautoseektolive="${!!(null!=(c=d.streamType)&&c.includes(s.U4.LIVE))&&0!==d.targetLiveWindow}"
    novolumepref="${d.novolumepref||!1}"
    nomutedpref="${d.nomutedpref||!1}"
    disabled="${!d.hasSrc||d.isDialogOpen}"
    audio="${null!=(h=d.audio)&&h}"
    style="${null!=(m=function(e){let t="";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${uZ(e)}: ${i}; `)}),t?t.trim():void 0}({"--media-primary-color":d.primaryColor,"--media-secondary-color":d.secondaryColor,"--media-accent-color":d.accentColor}))&&m}"
    defaultsubtitles="${!d.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(p=d.forwardSeekOffset)&&p}"
    backwardseekoffset="${null!=(v=d.backwardSeekOffset)&&v}"
    playbackrates="${null!=(E=d.playbackRates)&&E}"
    defaultshowremainingtime="${null!=(b=d.defaultShowRemainingTime)&&b}"
    defaultduration="${null!=(g=d.defaultDuration)&&g}"
    hideduration="${null!=(f=d.hideDuration)&&f}"
    title="${null!=(y=d.title)&&y}"
    videotitle="${null!=(T=d.videoTitle)&&T}"
    proudlydisplaymuxbadge="${null!=(A=d.proudlyDisplayMuxBadge)&&A}"
    exportparts="${cf}"
  >
    <mux-video
      slot="media"
      inert="${null!=(k=d.noHotKeys)&&k}"
      target-live-window="${null!=(w=d.targetLiveWindow)&&w}"
      stream-type="${null!=(R=u8(d.streamType))&&R}"
      crossorigin="${null!=(S=d.crossOrigin)?S:""}"
      playsinline
      autoplay="${null!=(I=d.autoplay)&&I}"
      muted="${null!=(L=d.muted)&&L}"
      loop="${null!=(C=d.loop)&&C}"
      preload="${null!=(D=d.preload)&&D}"
      debug="${null!=(M=d.debug)&&M}"
      prefer-cmcd="${null!=(O=d.preferCmcd)&&O}"
      disable-tracking="${null!=(x=d.disableTracking)&&x}"
      disable-cookies="${null!=(N=d.disableCookies)&&N}"
      prefer-playback="${null!=(P=d.preferPlayback)&&P}"
      start-time="${null!=d.startTime&&d.startTime}"
      initial-bandwidth-estimate-kbps="${null!=d.initialBandwidthEstimateKbps&&d.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${null!=d.initialEstimateSegments&&d.initialEstimateSegments}"
      min-preload-segments="${null!=d.minPreloadSegments&&d.minPreloadSegments}"
      beacon-collection-domain="${null!=(W=d.beaconCollectionDomain)&&W}"
      player-init-time="${null!=(B=d.playerInitTime)&&B}"
      player-software-name="${null!=(H=d.playerSoftwareName)&&H}"
      player-software-version="${null!=(F=d.playerSoftwareVersion)&&F}"
      env-key="${null!=(V=d.envKey)&&V}"
      custom-domain="${null!=(K=d.customDomain)&&K}"
      src="${d.src?d.src:!!d.playbackId&&(0,s.OR)(d)}"
      cast-src="${d.src?d.src:!!d.playbackId&&(0,s.OR)(d)}"
      cast-receiver="${null!=($=d.castReceiver)&&$}"
      drm-token="${null!=(Y=null==(q=d.tokens)?void 0:q.drm)&&Y}"
      playback-token="${null!=(j=null==(G=d.tokens)?void 0:G.playback)&&j}"
      exportparts="video"
      disable-pseudo-ended="${null!=(z=d.disablePseudoEnded)&&z}"
      max-reconnect-retries="${null!=(Q=d.maxReconnectRetries)&&Q}"
      max-auto-resolution="${null!=(Z=d.maxAutoResolution)&&Z}"
      cap-rendition-to-player-size="${null!=(X=d.capRenditionToPlayerSize)&&X}"
    >
      ${d.storyboard?cg`<track label="thumbnails" default kind="metadata" src="${d.storyboard}" />`:cg``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!d.poster&&d.poster}"
        placeholdersrc="${null!=(J=d.placeholder)&&J}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,l=this.shadowRoot,o.renderInto(l)},cX=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(cL.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};sL(this,cU,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),sS(this,cU).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},cJ=function(){var e,t;this.addEventListener("error",sS(this,cY)),this.addEventListener("click",sS(this,cF)),null==(e=this.mediaTheme)||e.addEventListener("close",sS(this,cV)),null==(t=this.mediaTheme)||t.addEventListener("focusin",sS(this,cK)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof s.FJ))return e;let r=cy(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},c0=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",sS(this,cH)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",sS(this,cH))},c1=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===s.U4.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===s.U4.LIVE&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},o=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tq.USER_INACTIVE))&&t)},l=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",o)),null==(i=a)||i.addEventListener("cuechange",o),n(i,sS(this,cN))};l(),null==(e=this.textTracks)||e.addEventListener("change",l),null==(t=this.textTracks)||t.addEventListener("addtrack",l);let d=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(tq.USER_INACTIVE))||t;sS(this,cN)!==a&&(sL(this,cN,a),n(i,sS(this,cN)))};this.addEventListener("userinactivechange",d),sL(this,c$,()=>{var e,t;null==i||i.removeEventListener("cuechange",o),null==(e=this.textTracks)||e.removeEventListener("change",l),null==(t=this.textTracks)||t.removeEventListener("addtrack",l),this.removeEventListener("userinactivechange",d)})};var he=e=>{throw TypeError(e)},ht=(e,t,i)=>t.has(e)||he("Cannot "+i),hi=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends hi{}globalThis.DocumentFragment=e}var ha,hr=class extends hi{},hn=class{constructor(e,t={}){((e,t,i)=>t.has(e)?he("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,ha),((e,t,i,a)=>(ht(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,ha,null==t?void 0:t.detail)}get detail(){let e,t;return ht(this,e=ha,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};ha=new WeakMap;var hs={document:{createElement:function(e,t){return new hr}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(hr)},CustomEvent:hn,EventTarget:hi,HTMLElement:hr,HTMLVideoElement:class extends hi{}},ho="undefined"==typeof window||void 0===globalThis.customElements,hl=ho?hs:globalThis;ho?hs.document:globalThis.document,hl.customElements.get("mux-player")||(hl.customElements.define("mux-player",c6),hl.MuxPlayerElement=c6)},7318:(e,t,i)=>{i.d(t,{WG:()=>tY,D2:()=>tz,FJ:()=>tH,Jk:()=>tQ,dc:()=>tP,Ks:()=>tU,_G:()=>iI,Vi:()=>t$,Hf:()=>tZ,U4:()=>tK,S5:()=>iT,st:()=>im,KR:()=>io,LM:()=>tW,GI:()=>iZ,IC:()=>ik,C$:()=>iE,rN:()=>iA,xc:()=>i6,Pv:()=>iv,Ul:()=>iS,hu:()=>ai,vG:()=>i2,Yz:()=>i8,yb:()=>i3,pD:()=>i9,tq:()=>iR,Zp:()=>i4,WE:()=>i5,Ru:()=>ie,n_:()=>aa,$n:()=>t7,$V:()=>il,zN:()=>ar,OR:()=>iJ,CL:()=>i1,_$:()=>t0});var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=function(e,t){return function(){return e&&(t=e(e=0)),t}},u=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},c=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var o,d=s(t),u=0,c=d.length;u<c;u++)o=d[u],l.call(e,o)||o===i||r(e,o,{get:(function(e){return t[e]}).bind(null,o),enumerable:!(a=n(t,o))||a.enumerable});return e},h=function(e,t,i){return i=null!=e?a(o(e)):{},c(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)},m=u(function(e,t){t.exports="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}});function p(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):p(e,t)}var v=d(function(){v()});function E(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var b=d(function(){}),g=u(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),f=u(function(e,t){function i(e,t){if(!p(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}v(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),y=u(function(e,t){function i(e,t){if(!p(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}v(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),T=u(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),A=u(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),k=u(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),w=u(function(e,t){b(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=E(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),R=u(function(e,t){v();var i=g(),a=T(),r=A(),n=k(),s=w(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!p(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),S=u(function(e,t){v();var i=R();function a(e){if(!p(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),I=u(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),L=u(function(e,t){v();var i=g(),a=f(),r=y(),n=R(),s=S(),o=I(),l=T(),d=A(),u=k();function c(){if(!p(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),C=u(function(e,t){t.exports=new(L())}),D=u(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=C();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function O(e,t){if(e){if("string"==typeof e)return M(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return M(e,t)}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||O(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=h(m()),P=h(m()),U=h(m()),W={now:function(){var e=U.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},B=function(){if("function"==typeof(null==(e=P.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),P.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=W.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},H=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},F=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=H()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},V=function(e){e&&void 0!==e.nodeName?e=F(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function K(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||O(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},q=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,K(o)),d=(i=console.info).bind.apply(i,K(o)),u=(a=console.debug).bind.apply(a,K(o)),c=(r=console.warn).bind.apply(r,K(o)),h=(n=console.error).bind.apply(n,K(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.TRACE))return l.apply(void 0,K(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.DEBUG))return u.apply(void 0,K(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.INFO))return d.apply(void 0,K(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.WARN))return c.apply(void 0,K(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.ERROR))return h.apply(void 0,K(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),Y=h(m());function G(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}function j(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){if(!p(e,t))throw TypeError("Cannot call a class as a function")}function Q(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Z(e,t,i){return t&&Q(e.prototype,t),i&&Q(e,i),e}function X(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t,i){return(ee="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}v(),b();var ei=function(e){return ea(e)[0]},ea=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},er=h(m()),en={exists:function(){var e=er.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=er.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=er.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function es(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function eo(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){X(e,t,i[t])})}return e}function el(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var ed=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eu=["x-cdn","content-type"].concat(ed);function ec(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eu.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eh(e){if(e){var t=ed.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var em=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},ep=function(e){if(!e)return{};var t=en.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ev=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ec(e.getAllResponseHeaders())},eE=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!en.exists())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=ep(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",el(eo({},em(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:ei(r),request_response_headers:ev(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=ep(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:ei(i.url),request_response_headers:ev(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=ep(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:ei(i.url),request_response_headers:ev(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=ep(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ev(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?ei(r.responseURL):void 0,request_id:h?eh(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ev(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:ei(c),request_id:h?eh(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:ei(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eb=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eg=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=ei(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ec(u[u.length-1]._responseHeaders||""));var c=i?eh(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ef=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},e_=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},ey=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=ey(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ei(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eg(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,E=c.requestMediaDuration,b=c.requestHostname,g=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:b,request_id:c.requestId,request_url:g,request_media_duration:E,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eg(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,E=u.requestMediaDuration,b=u.requestHostname,g=u.requestUrl,f=u.requestId,y=ef(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:b,request_id:f,request_url:g,request_media_start_time:l,request_media_duration:E,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:e_(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=el(eo({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:ei(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:ei(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eA=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ek=0,ew=function(){function e(){z(this,e),X(this,"_listeners",void 0)}return Z(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++ek,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++ek;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eR=h(m()),eS=function(){function e(t){var i=this;z(this,e),X(this,"_playbackHeartbeatInterval",void 0),X(this,"_playheadShouldBeProgressing",void 0),X(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eR.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return Z(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eR.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eR.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eI=function e(t){var i=this;z(this,e),X(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eL=function(){function e(t){z(this,e),X(this,"_watchTimeTrackerLastCheckedTime",void 0),X(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Z(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),es(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eC=function(){function e(t){var i=this;z(this,e),X(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),X(this,"_lastTime",void 0),X(this,"_isAdPlaying",void 0),X(this,"_callbackUpdatePlaybackTime",void 0),X(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=W.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=W.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return Z(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=W.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=W.now(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&es(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&es(this.pm.data,"ad_playing_time_ms_cumulative",i),es(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eD=function(){function e(t){z(this,e),X(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return Z(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eM=function e(t){if(z(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;es(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(es(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eO=function(){function e(t){var i=this;z(this,e),X(this,"_lastCheckedTime",void 0),X(this,"_lastPlayheadTime",void 0),X(this,"_lastPlayheadTimeUpdatedTime",void 0),X(this,"_rebuffering",void 0),X(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:W.now()})}))}return Z(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),ex=function(){function e(t){var i=this;z(this,e),X(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||W.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||W.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return Z(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eN=function e(t){var i=this;z(this,e),X(this,"_lastPlayerHeight",void 0),X(this,"_lastPlayerWidth",void 0),X(this,"_lastPlayheadPosition",void 0),X(this,"_lastSourceHeight",void 0),X(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),es(t.data,"view_total_content_playback_time",e),es(t.data,"view_total_upscaling",r*e),es(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eP=function e(t){var i=this;z(this,e),X(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=W.now(),r=(t.data.viewer_time||e)-(a||e);es(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,es(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eU=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eW=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eB=function(){function e(t){var i=this;z(this,e),X(this,"_adHasPlayed",void 0),X(this,"_adRequests",void 0),X(this,"_adResponses",void 0),X(this,"_currentAdRequestNumber",void 0),X(this,"_currentAdResponseNumber",void 0),X(this,"_prerollPlayTime",void 0),X(this,"_wouldBeNewAdPlay",void 0),X(this,"isAdBreak",void 0),X(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eW.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eU(i._adRequests,a),es(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||es(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eU(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&es(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,es(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||es(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||es(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return Z(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=x(ea(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=x(ea(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),eH=function e(t){var i=this;z(this,e),X(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=W.now(),t.on("before*",r)},r=function(e){var a=W.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eF=h(m()),eV=function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=t+"="+r+(n.expires?"; expires="+n.expires.toUTCString():"")+(n.path?"; path="+n.path:"")+(n.domain?"; domain="+n.domain:"")+(n.secure?"; secure":"")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})}(),eK="muxData",e$=function(){var e;try{e=(eV.get(eK)||"").split("&").reduce(function(e,t){var i=x(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eq=function(e){try{eV.set(eK,Object.entries(e).map(function(e){var t=x(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eY=function(){var e=e$();return e.mux_viewer_id=e.mux_viewer_id||B(),e.msn=e.msn||Math.random(),eq(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eG=function(){var e=e$(),t=W.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=B(),e.sst=t),e.sex=t+15e5,eq(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},ej=eQ({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),ez=eQ({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function eQ(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function eZ(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=ej[s];o||(q.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),ez[e]?o+=ez[e]:Number.isInteger(Number(e))?o+=e:(q.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var eX=h(m()),eJ=h(D()),e0={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e1=["hb","requestcompleted","requestfailed","requestcanceled"],e2=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e0,t)};e2.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e2.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length)return void this._eventQueue.pop();this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e2.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),eX.default.clearTimeout(this._sendTimeout)},e2.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],eZ({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);e4(this._beaconUrl,i,!0,function(){})},e2.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=W.now();e4(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,q.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=W.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e2.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e2.prototype._startBeaconSending=function(){var e=this;eX.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=eX.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e2.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(W.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(q.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e1.indexOf(e.e)}),s()),o()||(q.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e3="function"==typeof eJ.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},e4=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(eX.default.fetch)return void eX.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:e3(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(eX.default.XMLHttpRequest){var r=new eX.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},e5=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],e9=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],e8=["ad_id","ad_creative_id","ad_universal_id"],e6=["viewstart","error","ended","viewend"],e7=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,E,b,g,f,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};z(this,e),X(this,"mux",void 0),X(this,"envKey",void 0),X(this,"options",void 0),X(this,"eventQueue",void 0),X(this,"sampleRate",void 0),X(this,"disableCookies",void 0),X(this,"respectDoNotTrack",void 0),X(this,"previousBeaconData",void 0),X(this,"lastEventTime",void 0),X(this,"rateLimited",void 0),X(this,"pageLevelData",void 0),X(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e2((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(f=this.options.sampleRate)?f:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(T=this.options.respectDoNotTrack)&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(v=this.options.platform)||null==(p=v.os)?void 0:p.architecture,viewer_os_version:null==(b=this.options.platform)||null==(E=b.os)?void 0:E.version,page_url:null===eF.default||void 0===eF.default||null==(g=eF.default.location)?void 0:g.href},this.viewerData=this.disableCookies?{}:eY()}return Z(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&G())return q.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return q.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eG(),a=el(eo({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=eZ(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return q.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(q.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(e6.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=eZ(a),this.eventQueue.queueEvent(a.event,s),q.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=eo({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=x(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||e5.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||e8.includes(t)&&e9.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),te=function e(t){z(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tt=function e(t){var i=this;z(this,e),X(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=W.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,X({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function ti(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var ta=function e(t){z(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!ti(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(ti(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tr=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},tn=function e(t){var i=this;z(this,e),X(this,"_emittingAutomaticEvent",!1),X(this,"_hasInitialized",!1),X(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tr(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},ts=function(){function e(t){z(this,e),X(this,"pm",void 0),X(this,"_currentRangeStart",void 0),X(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return Z(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),to=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),tl=function(e){if(!e)return to.UNKNOWN;switch(e){case"cellular":case"wimax":return to.CELLULAR;case"wifi":return to.WIFI;case"ethernet":return to.WIRED;case"none":return to.NO_CONNECTION;case"bluetooth":case"other":default:return to.OTHER;case"unknown":return to.UNKNOWN}},td=h(m()),tu=function(){function e(t){var i=this;z(this,e),X(this,"pm",void 0),X(this,"lastType",void 0),X(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),td.default.addEventListener("online",a),td.default.addEventListener("offline",a),null==(t=e.connection)||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null==(t=e.connection)||t.removeEventListener("change",a),td.default.removeEventListener("online",a),td.default.removeEventListener("offline",a)})})}return Z(e,[{key:"type",get:function(){var t,i;return(null==(t=td.default.navigator)?void 0:t.onLine)===!1?to.NO_CONNECTION:null!=(i=e.connection)&&i.type?tl(e.connection.type):to.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null==(t=e.connection)?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",eo({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=td.default.navigator)&&"connection"in e&&"object"==typeof e.connection?td.default.navigator.connection:null}}]),e}(),tc=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],th=new Set(["requestcompleted","requestfailed","requestcanceled"]),tm=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&et(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=J(a);return e=t?Reflect.construct(i,arguments,J(this).constructor):i.apply(this,arguments),e&&("object"===E(e)||"function"==typeof e)?e:j(this)});function a(e,t,r){z(this,a),X(j(n=i.call(this)),"pageLoadEndTime",void 0),X(j(n),"pageLoadInitTime",void 0),X(j(n),"_destroyed",void 0),X(j(n),"_heartBeatTimeout",void 0),X(j(n),"adTracker",void 0),X(j(n),"dashjs",void 0),X(j(n),"data",void 0),X(j(n),"disablePlayheadRebufferTracking",void 0),X(j(n),"disableRebufferTracking",void 0),X(j(n),"disableAdPlaybackRangeFiltering",void 0),X(j(n),"errorTracker",void 0),X(j(n),"errorTranslator",void 0),X(j(n),"emitTranslator",void 0),X(j(n),"getAdData",void 0),X(j(n),"getPlayheadTime",void 0),X(j(n),"getStateData",void 0),X(j(n),"stateDataTranslator",void 0),X(j(n),"hlsjs",void 0),X(j(n),"id",void 0),X(j(n),"longResumeTracker",void 0),X(j(n),"minimumRebufferDuration",void 0),X(j(n),"mux",void 0),X(j(n),"playbackEventDispatcher",void 0),X(j(n),"playbackHeartbeat",void 0),X(j(n),"playbackHeartbeatTime",void 0),X(j(n),"playheadTime",void 0),X(j(n),"seekingTracker",void 0),X(j(n),"sustainedRebufferThreshold",void 0),X(j(n),"watchTimeTracker",void 0),X(j(n),"currentFragmentPDT",void 0),X(j(n),"currentFragmentStart",void 0),n.pageLoadInitTime=en.navigationStart(),n.pageLoadEndTime=en.domContentLoadedEventEnd(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),q.level=r.debug?$.DEBUG:$.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new e7(e,r.data.env_key,r),n.data={player_instance_id:B(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(j(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tc.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tt(j(n)),n.errorTracker=new eI(j(n)),new eH(j(n)),n.seekingTracker=new eP(j(n)),n.playheadTime=new eD(j(n)),n.playbackHeartbeat=new eS(j(n)),new eN(j(n)),n.watchTimeTracker=new eL(j(n)),new eC(j(n)),new ts(j(n)),n.adTracker=new eB(j(n)),new eO(j(n)),new eM(j(n)),new ex(j(n)),new te(j(n)),new ta(j(n)),new tn(j(n)),new tu(j(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return Z(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=ee(J(a.prototype),"emit",this)).call.apply(i,[this].concat(K(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=x(ea(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,th.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=B(),i=function(){t===e.data.view_id&&es(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){return e.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):void(this.hlsjs=e.hlsjs,eE(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eb(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){return e.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):void(this.dashjs=e.dashjs,eT(this.mux,this.id,e.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eA(this.dashjs),this.dashjs=void 0)}}]),a}(ew),tp=h(D());function tv(){return tp.default&&!!(tp.default.fullscreenElement||tp.default.webkitFullscreenElement||tp.default.mozFullScreenElement||tp.default.msFullscreenElement)}var tE,tb=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tg={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tf=h(m());tf.default&&tf.default.WeakMap&&(tE=new WeakMap);var t_={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},ty=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};ty.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},ty.prototype.processLine=function(e){var t=e.indexOf(":"),i=tI(e,t),a=i[0],r=2===i.length?tk(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case t_.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case t_.PART_INF:tT(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case t_.SERVER_CONTROL:tT(this.manifest,i),this.setHoldBack();break;case t_.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case t_.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case t_.VERSION:tT(this.manifest,i);break;case t_.SESSION_DATA:var s=em(tL(i[1]));Object.assign(this.manifest.sessionData,s)}},ty.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tT=function(e,t){var i,a=tA(t[0].replace("#EXT-X-",""));tS(t[1])?(i={},i=Object.assign(tR(t[1]),i)):i=tk(t[1]),e[a]=i},tA=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tk=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tw=function(e){var t={},i=e.split("=");return i.length>1&&(t[tA(i[0])]=tk(i[1])),t},tR=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tw(t[a]),i);return i},tS=function(e){return e.indexOf("=")>-1},tI=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tL=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tC={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){q.info("safeCall error",e)}return r},safeIncrement:es,getComputedStyle:function(e,t){var i;return e&&t&&tf.default&&"function"==typeof tf.default.getComputedStyle?(tE&&tE.has(e)&&(i=tE.get(e)),i||(i=tf.default.getComputedStyle(e,null),tE&&tE.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ec,cdnHeadersToRequestId:eh,extractHostnameAndDomain:ea,extractHostname:ei,manifestParser:ty,generateShortID:H,generateUUID:B,now:W.now,findMediaElement:V},tD={},tM=function(e){var t=arguments;"string"==typeof e?tM.hasOwnProperty(e)?N.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tM[e].apply(null,t)},0):q.warn("`"+e+"` is an unknown task"):"function"==typeof e?N.default.setTimeout(function(){e(tM)},0):q.warn("`"+e+"` is invalid.")},tO={loaded:W.now(),NAME:"mux-embed",VERSION:"5.18.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=x(V(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tv(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=x(V(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tb.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tg[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tv()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tv(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tM,e,t)},destroyMonitor:function(e){var t=x(V(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():q.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=F(e);tD[i]?tD[i].addHLSJS(t):q.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=F(e);tD[i]?tD[i].addDashJS(t):q.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=F(e);tD[t]?tD[t].removeHLSJS():q.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=F(e);tD[t]?tD[t].removeDashJS():q.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){G()&&t&&t.respectDoNotTrack&&q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=F(e);tD[i]=new tm(tM,i,t)},emit:function(e,t,i){var a=F(e);tD[a]?(tD[a].emit(t,i),"destroy"===t&&delete tD[a]):q.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=F(e);tD[i]?tD[i].emit("hb",t):q.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=F(e);tD[i]?tD[i].emitTranslator=t:q.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=F(e);tD[i]?tD[i].stateDataTranslator=t:q.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=F(e);tD[i]?tD[i].getPlayheadTime=t:q.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:G,log:q,utils:tC,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tM,tO),void 0!==N.default&&"function"==typeof N.default.addEventListener&&N.default.addEventListener("pagehide",function(e){e.persisted||(tM.WINDOW_UNLOADING=!0)},!1);var tx=i(7845),tN=tx.Ay,tP={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},tU={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tW=e=>e===tP.VIDEO?"playback":e,tB=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tB.MEDIA_ERR_ABORTED=1,tB.MEDIA_ERR_NETWORK=2,tB.MEDIA_ERR_DECODE=3,tB.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tB.MEDIA_ERR_ENCRYPTED=5,tB.MEDIA_ERR_CUSTOM=100,tB.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tH=tB,tF=(e,t)=>null!=t&&e in t,tV={ANY:"any",MUTED:"muted"},tK={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},t$={MSE:"mse",NATIVE:"native"},tq={HEADER:"header",QUERY:"query",NONE:"none"},tY=Object.values(tq),tG={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tj={HLS:tG.M3U8},tz=(Object.keys(tj),[...Object.values(tG)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tQ={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tZ={DESCENDING:"desc"},tX={code:"en"},tJ=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},t0=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t1=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tF(e,tj)?tj[e]:t}return t4(e)},t2=e=>"VOD"===e?tK.ON_DEMAND:tK.LIVE,t3=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t4=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=t9(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return t6(e)?tG.M3U8:"";let r=i.slice(a+1).toUpperCase();return tF(r,tG)?tG[r]:""},t5=e=>{try{return new URL(e),!1}catch{return!0}},t9=(e,t)=>{var i;if(!t5(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&t5(t.toString())&&(r=new URL(t,a)),new URL(e,r)},t8="mux.com",t6=({src:e,customDomain:t=t8})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},t7=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function ie(e,t=!0){var i;return new it(t&&null!=(i=null==tX?void 0:tX[e])?i:e,t?tX.code:"en")}var it=class{constructor(e,t=(e=>null!=(e=tX)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ii=Object.values(tV),ia=e=>"boolean"==typeof e||"string"==typeof e&&ii.includes(e),ir=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tV.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tV.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},is=e=>"time"in e?e.time:e.startTime;function io(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function il(e,t){let i=Array.prototype.find.call(e.querySelectorAll("track"),e=>e.track===t);null==i||i.remove()}function id(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function iu(e,t,i,a){let r=id(e,i,a);return r||((r=io(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>is(t)-is(e)).forEach(t=>{var i,n;let s=t.value,o=is(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ic="cuepoints",ih=Object.freeze({label:ic});async function im(e,t,i=ih){return iu(e,t,i.label,"metadata")}var ip=e=>({time:e.startTime,value:JSON.parse(e.text)});function iv(e,t={label:ic}){let i=id(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>ip(e)):[]}function iE(e,t={label:ic}){var i,a;let r=id(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return ip(r.activeCues[0]);let{currentTime:n}=e;return ip(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ib(e,t=ih){return new Promise(i=>{tJ(e,"loadstart",async()=>{let a=await im(e,[],t);tJ(e,"cuechange",()=>{let t=iE(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ig="chapters",i_=Object.freeze({label:ig}),iy=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iT(e,t,i=i_){return iu(e,t,i.label,"chapters")}function iA(e,t={label:ig}){var i;let a=id(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iy(e)):[]}function ik(e,t={label:ig}){var i,a;let r=id(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iy(r.activeCues[0]);let{currentTime:n}=e;return iy(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iw(e,t=i_){return new Promise(i=>{tJ(e,"loadstart",async()=>{let a=await iT(e,[],t);tJ(e,"cuechange",()=>{let t=ik(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}function iR(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}function iS(e,t){return t&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}var iI={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iL=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=ie("Your device appears to be offline",r),a=tH.MEDIA_ERR_NETWORK,n=new tH(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tU.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tH.MEDIA_ERR_NETWORK;if(200===l)return;let c=tW(t),h=((e,t)=>{var i,a;let r=tW(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tF(n,t)?t[n]:void 0})(t,i),m=(e=>e===tP.VIDEO?iI.VIDEO:e===tP.DRM?iI.DRM:void 0)(t),[p]=t0(null!=(s=i.playbackId)?s:"");if(!l||!p)return;let v=t7(h);if(h&&!v){let i=new tH(ie("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,ie("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=tU.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tH("",u,null==a||a);return e.errorCategory=t,e.muxCode=tU.NETWORK_UNKNOWN_ERROR,e}if(403===l)if(v){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(v,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tH(ie("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,ie("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=v.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=tU.NETWORK_TOKEN_EXPIRED,a.data=e,a}if((({sub:e},t)=>e!==t)(v,p)){let i=new tH(ie("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,ie("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:p,tokenPlaybackId:v.sub}));return i.errorCategory=t,i.muxCode=tU.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if((({aud:e},t)=>!e)(v,0)){let i=new tH(ie("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,ie("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=tU.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if((({aud:e},t)=>e!==t)(v,m)){let i=new tH(ie("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,ie("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:v.aud}));return i.errorCategory=t,i.muxCode=tU.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tH(ie("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tU.NETWORK_TOKEN_MISSING,i.data=e,i}if(412===l){let n=new tH(ie("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return n.errorCategory=t,n.muxCode=tU.NETWORK_NOT_READY,n.streamType=i.streamType===tK.LIVE?"live":i.streamType===tK.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tH(ie("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tU.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tH(ie("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,ie("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tU.NETWORK_INVALID_URL,i.data=e,i}let E=new tH("",u,null==a||a);return E.errorCategory=t,E.muxCode=tU.NETWORK_UNKNOWN_ERROR,E.data=e,E},iC=tN.DefaultConfig.capLevelController,iD={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},iM=class e extends iC{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iD[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iC.getMaxLevelByMediaSize(a,16/9*n,n)}};iM.minMaxResolution=720,iM.maxAutoResolution=new WeakMap;var iO,ix,iN,iP,iU,iW,iB=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),iH={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},iF=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,iV=async(e,t)=>{if(t===tG.MP4)return{streamType:tK.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tG.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await ((e,t)=>{let i,a=e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF"));if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(t5(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=t9(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())})(i,t.url);return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iF)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t2(n),o=t3(n),l;if(s===tK.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iK=async(e,t,i=t1({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iV(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&i$(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=ij.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=ij.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=ij.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},i$=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=ij.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},iq=null!=(ix=null==(iO=null==globalThis?void 0:globalThis.navigator)?void 0:iO.userAgent)?ix:"",iY=null!=(iU=null==(iP=null==(iN=null==globalThis?void 0:globalThis.navigator)?void 0:iN.userAgentData)?void 0:iP.platform)?iU:"",iG=iq.toLowerCase().includes("android")||["x11","android"].some(e=>iY.toLowerCase().includes(e)),ij=new WeakMap,iz="mux.com",iQ=null==(iW=tN.isSupported)?void 0:iW.call(tN),iZ=()=>{if("undefined"!=typeof window)return tM.utils.now()},iX=tM.utils.generateUUID,iJ=({playbackId:e,customDomain:t=iz,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=t0(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i0=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},i1=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},i2=e=>{var t;return null==(t=ij.get(e))?void 0:t.error},i3=e=>{var t;return null==(t=ij.get(e))?void 0:t.metadata},i4=e=>{var t,i;return null!=(i=null==(t=ij.get(e))?void 0:t.streamType)?i:tK.UNKNOWN},i5=e=>{var t,i;return null!=(i=null==(t=ij.get(e))?void 0:t.targetLiveWindow)?i:NaN},i9=e=>{var t,i;return null!=(i=null==(t=ij.get(e))?void 0:t.seekable)?i:e.seekable},i8=e=>{var t;let i=null==(t=ij.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=i9(e);return a.length?a.end(a.length-1)-i:NaN},i6=e=>{var t;return null==(t=ij.get(e))?void 0:t.coreReference},i7=.034,ae=(e,t,i=i7)=>e>t||((e,t,i=i7)=>Math.abs(e-t)<=i)(e,t,i),at=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},ai=(e,t)=>e.ended||e.loop?e.ended:!!(t&&at(e,t))||((e,t=i7)=>e.paused&&ae(e.currentTime,e.duration,t))(e),aa=(e,t,i)=>{ar(t,i,e);let{metadata:a={}}=e,{view_session_id:r=iX()}=a,n=(e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:am(e)&&null!=(a=null!=(i=i0(e.playbackId))?i:i1(e.src))?a:e.src})(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=ij.get(t))?void 0:i.coreReference;aa(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},ij.set(t,{retryCount:0});let s=as(e,t),o=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tJ(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,s);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?s&&t.mux.addHLSJS({hlsjs:s,Hls:s?tN:void 0}):av(e,t,s),aE(e,t,s),ib(t),iw(t);let l=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=ia(a)?a:!!a,o=()=>{r||tJ(t,"playing",()=>{r=!0},{once:!0})};if(o(),tJ(t,"loadstart",()=>{r=!1,o(),ir(t,s)},{once:!0}),tJ(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tK.UNKNOWN?e.streamType===tK.LIVE:!Number.isFinite(t.duration)),ir(t,s)},{once:!0}),i&&i.once(tN.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tK.UNKNOWN?e.streamType===tK.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tJ(t,"play",()=>{"metadata"===t.preload?i.once(tN.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||ir(t,s=ia(e)?e:!!e)}})(e,t,s);((e,t,i)=>{let{minPreloadSegments:a}=e;if(null==a||a<=0||!i)return;let r=0,n=!1,s=t.playbackRate||1,o=()=>{0!==t.playbackRate&&(s=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,tJ(t,"ratechange",o);let l=(e,{frag:i})=>{n||"main"!==i.type||++r>=a&&(n=!0,t.removeEventListener("ratechange",o),t.playbackRate=s)};i.on(tN.Events.FRAG_BUFFERED,l),t.addEventListener("teardown",()=>{n||(n=!0,i.off(tN.Events.FRAG_BUFFERED,l),t.playbackRate=s)},{once:!0})})(e,t,s),((e,t,i)=>{let{initialEstimateSegments:a}=e;if(null==a||a<=0||!i)return;let r=0;i.on(tN.Events.FRAG_BUFFERED,(e,{frag:t})=>{"main"===t.type&&++r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate)})})(e,0,s);let d={engine:s,setAutoplay:l,setPreload:o},u=ij.get(t);return u&&(u.coreReference=d),d},ar=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",ag),e.removeEventListener("error",a_),e.removeEventListener("durationchange",ab),ij.delete(e),e.dispatchEvent(new Event("teardown")))};function an(e,t){var i;let a=t1(e);if(a!==tG.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===t$.MSE,o=n===t$.NATIVE,l=iQ&&(s||iG||!(/^((?!chrome|android).)*safari/i.test(iq)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(o||!l)}var as=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=e,u=t1(e)===tG.M3U8,c=an(e,t);if(u&&!c&&iQ){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...null!=d?{abrEwmaDefaultEstimate:1e3*d}:{}},c=ao(a),h=al(e),m=[tq.QUERY,tq.HEADER].includes(s)?{useHeaders:s===tq.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,p=ap(e,o),v=new tN({debug:i,startPosition:r,cmcd:m,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tq.QUERY)return;let r=t9(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},...u,...p,...c,...h,...o});return p.capLevelController===iM&&void 0!==l&&iM.setMaxAutoResolution(v,l),v.on(tN.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&i$(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),v}},ao=e=>e===tK.LIVE?{backBufferLength:8}:{},al=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i0(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ac(e,"fairplay"),serverCertificateUrl:ah(e,"fairplay")},"com.widevine.alpha":{licenseUrl:ac(e,"widevine")},"com.microsoft.playready":{licenseUrl:ac(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=(e=>e.includes("fps")?iH.FAIRPLAY:e.includes("playready")?iH.PLAYREADY:e.includes("widevine")?iH.WIDEVINE:void 0)(e);return null==a||a(i),t}))}:{}},ad=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},au=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},ac=({playbackId:e,tokens:{drm:t}={},customDomain:i=iz},a)=>{let r=i0(e);return`https://license.${i.toLocaleLowerCase().endsWith(iz)?i:iz}/license/${a}/${r}?token=${t}`},ah=({playbackId:e,tokens:{drm:t}={},customDomain:i=iz},a)=>{let r=i0(e);return`https://license.${i.toLocaleLowerCase().endsWith(iz)?i:iz}/appcert/${a}/${r}?token=${t}`},am=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iz)||!!i&&a.includes(i.toLocaleLowerCase())},ap=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=iM,i.capLevelToPlayerSize=!0):i.capLevelController=tx.Rx,i},av=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tM,muxDataSDKOptions:o={}}=e,l=am(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tN:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},aE=(e,t,i)=>{var a,r,n;let s=an(e,t),{src:o,customDomain:l=iz}=e,d=()=>{t.ended||e.disablePseudoEnded||!ai(t,i)||(at(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,c,h=()=>{let e=i9(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(c!==a||u!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=i,c=a};if(tJ(t,"durationchange",h),t&&s){let i=t1(e);if("string"==typeof o){if(o.endsWith(".mp4")&&o.includes(l)){let e=i1(o);i$(new URL(`https://stream.${l}/${e}/metadata.json`).toString(),t)}let n=()=>{if(i4(t)!==tK.LIVE||Number.isFinite(t.duration))return;let e=setInterval(h,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tJ(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},s=async()=>iK(o,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iL(i,tP.VIDEO,e);if(a)return void af(t,a)}});if("none"===t.preload){let e=()=>{s(),t.removeEventListener("loadedmetadata",i)},i=()=>{s(),t.removeEventListener("play",e)};tJ(t,"play",e,{once:!0}),tJ(t,"loadedmetadata",i,{once:!0})}else s();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>ad(ah(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iL(t,tP.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>au(t,ac(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iL(t,tP.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:af,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,iH.FAIRPLAY)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new tH(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tH.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tP.DRM,t.muxCode=tU.ENCRYPTED_CDM_ERROR,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{e.webkitKeys||l();let i=await n;if(null===t.initData||null==i)return;let a=((e,t)=>{let i=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(iB(e)),a=new Uint8Array(e),r=new Uint8Array(i),n=new Uint8Array(t),s=new Uint8Array(a.byteLength+4+n.byteLength+4+r.byteLength),o=0,l=e=>{s.set(e,o),o+=e.byteLength},d=e=>{let t=new DataView(s.buffer),i=e.byteLength;t.setUint32(o,i,!0),o+=4,l(e)};return l(a),d(r),d(n),s})(t.initData,i);d(a)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new tH("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",tH.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=tP.DRM,e.muxCode=tU.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new tH(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),tH.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory=tP.DRM,r.muxCode=tU.ENCRYPTED_CDM_ERROR,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new tH(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tH.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tP.DRM,t.muxCode=tU.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=ie("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tH(e,tH.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tP.DRM,t.muxCode=tU.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new tH(ie("Failed to update DRM license. This may be an issue with the player or your protected content."),tH.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tP.DRM,t.muxCode=tU.ENCRYPTED_UPDATE_LICENSE_FAILED,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>(t=>{let i;"internal-error"===t?((i=new tH(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),tH.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tP.DRM,i.muxCode=tU.ENCRYPTED_CDM_ERROR):("output-restricted"===t||"output-downscaled"===t)&&((i=new tH(ie("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tH.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tP.DRM,i.muxCode=tU.ENCRYPTED_OUTPUT_RESTRICTED),i&&a(e,i)})(t))};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new tH(ie("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tH.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=tP.DRM,e.muxCode=tU.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):tJ(t,"encrypted",()=>{let e=new tH(ie("Attempting to play DRM-protected content without providing a DRM token."),tH.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tP.DRM,e.muxCode=tU.ENCRYPTED_MISSING_TOKEN,af(t,e)},{once:!0}),t.setAttribute("src",o),e.startTime&&((null!=(r=ij.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",ab,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",ag),t.addEventListener("error",a_),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tJ(t,"pause",d),tJ(t,"seeked",d),tJ(t,"play",()=>{t.ended||ae(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else if(i&&o){i.once(tN.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=(e=>{var t;let i=e.type,a=t2(i),r=t3(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tK.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}})(e);if(c===tK.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=ij.get(t))?o:{}).seekable=e}(null!=(l=ij.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=ij.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=ij.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),h(),i4(t)!==tK.LIVE||Number.isFinite(t.duration)||(i.on(tN.Events.LEVEL_UPDATED,h),tJ(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tN.Events.LEVELS_UPDATED,h)}))});let a=null!=(n=e.maxReconnectRetries)?n:0,r=a>0?(({hls:e,mediaEl:t,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,u=!1,c=!1,h=()=>{null!=o&&(clearTimeout(o),o=void 0)},m=e=>(null==e?void 0:e.muxCode)===tU.NETWORK_RECONNECTING,p=()=>{if(!c&&i)return void e.loadSource(i);e.startLoad(t.currentTime)},v=()=>{let e=a.get(t);!(null!=e&&e.networkError)||u||!t.paused&&t.readyState<HTMLMediaElement.HAVE_FUTURE_DATA&&((()=>{let e=a.get(t);if(m(null==e?void 0:e.error))return;let i=new tH(ie("Attempting to reconnect..."),tH.MEDIA_ERR_NETWORK,!1);i.errorCategory=tP.VIDEO,i.muxCode=tU.NETWORK_RECONNECTING,e&&(e.error=i),t.dispatchEvent(new CustomEvent("error",{detail:i}))})(),(()=>{if(null==o&&!d){if(l>=n)return(()=>{d=!1,u=!0,h();let e=new tH(ie("Network error, try reloading."),tH.MEDIA_ERR_NETWORK,!0);e.errorCategory=tP.VIDEO,e.reload=!0,r(t,e)})();d=!0,o=setTimeout(()=>{o=void 0,l+=1,p()},Math.min(1e3*2**l,3e4))}})())},E=()=>{let e=a.get(t);null!=e&&e.networkError&&(l=0,u=!1,h(),d=!0,p())};return null==(s=globalThis.addEventListener)||s.call(globalThis,"online",E),e.on(tN.Events.FRAG_BUFFERED,()=>{let e=a.get(t);e&&(e.networkError||m(e.error))&&(e.networkError=!1,d=!1,l=0,u=!1,h(),e.error&&(e.error=null,t.dispatchEvent(new Event("emptied"))))}),tJ(t,"playing",()=>{let e=a.get(t);null!=e&&e.networkError&&(d=!1,l=0,u=!1,h(),e.error&&(e.error=null))}),tJ(t,"waiting",v),t.addEventListener("teardown",()=>{var e;null==(e=globalThis.removeEventListener)||e.call(globalThis,"online",E),h()},{once:!0}),{handleHlsError:(e,i)=>{var r,n;if(e.type!==tN.ErrorTypes.NETWORK_ERROR)return!1;let s=null!=(n=null==(r=e.response)?void 0:r.code)?n:0;return(i.muxCode===tU.NETWORK_OFFLINE||0===s||s>=500)&&!!e.fatal&&((()=>{let e=a.get(t);e&&(e.networkError=!0),d=!1,v()})(),!0)},onManifestLoaded:()=>{c=!0,d=!1,h()}}})({hls:i,mediaEl:t,src:o,muxMediaState:ij,saveAndDispatchError:af,maxRetries:a}):void 0;i.on(tN.Events.ERROR,(a,n)=>{var s,o;let l=ay(n,e);if(l.muxCode===tU.NETWORK_NOT_READY){let e=null!=(s=ij.get(t))?s:{},a=null!=(o=e.retryCount)?o:0;if(a<6){let r=0===a?5e3:6e4,s=new tH(`Retrying in ${r/1e3} seconds...`,l.code,l.fatal);Object.assign(s,l),af(t,s);let o=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===n.details&&n.url&&i.loadSource(n.url)},r);t.addEventListener("teardown",()=>clearTimeout(o),{once:!0});return}{e.retryCount=0;let i=new tH("Network error, try reloading.",l.code,l.fatal);Object.assign(i,l),i.reload=!0,af(t,i);return}}null!=r&&r.handleHlsError(n,l)||af(t,l)}),i.on(tN.Events.MANIFEST_LOADED,()=>{null==r||r.onManifestLoaded();let e=ij.get(t);null!=e&&e.networkError||e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",a_),tJ(t,"waiting",d),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tN.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tN.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(tN.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),s()};t.once(tN.Events.DESTROYING,()=>{var t,i;o(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),function(e,t){t.on(tN.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;io(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tN.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tN.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tN.Events.MANIFEST_LOADED,a),t.once(tN.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function ab(e){var t;let i=e.target,a=null==(t=ij.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function ag(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tH(i,a);if(t.src&&a===tH.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=i2(t))?e:t.error;(null==i?void 0:i.code)===tH.MEDIA_ERR_SRC_NOT_SUPPORTED&&af(t,r)},500);if(t.src&&(a!==tH.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}af(t,r)}function af(e,t){var i;t.fatal&&((null!=(i=ij.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function a_(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tH))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=ij.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var ay=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tN.ErrorTypes.NETWORK_ERROR]:tH.MEDIA_ERR_NETWORK,[tN.ErrorTypes.MEDIA_ERROR]:tH.MEDIA_ERR_DECODE,[tN.ErrorTypes.KEY_SYSTEM_ERROR]:tH.MEDIA_ERR_ENCRYPTED},s,o=(e=>[tN.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tN.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tH.MEDIA_ERR_NETWORK:n[e.type])(e);if(o===tH.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=(e=>e.type===tN.ErrorTypes.KEY_SYSTEM_ERROR?tP.DRM:e.type===tN.ErrorTypes.NETWORK_ERROR?tP.VIDEO:void 0)(e))?i:tP.VIDEO;s=null!=(a=iL(e.response,r,t,e.fatal))?a:new tH("",o,e.fatal)}else o===tH.MEDIA_ERR_ENCRYPTED?e.details===tN.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tH(ie("Attempting to play DRM-protected content without providing a DRM token."),tH.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_MISSING_TOKEN):e.details===tN.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tH(ie("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tH.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tN.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tH(ie("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tH.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tN.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tH(ie("Failed to update DRM license. This may be an issue with the player or your protected content."),tH.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tN.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tH(ie("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tH.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tN.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tH(ie("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),tH.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_CDM_ERROR):e.details===tN.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tH(ie("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tH.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tH(e.error.message,tH.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tP.DRM,s.muxCode=tU.ENCRYPTED_ERROR):s=new tH("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s}}}]);