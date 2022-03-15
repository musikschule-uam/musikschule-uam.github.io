import "./chunk-BMTV3EA2.js";

// src/components/mua-header.ts
var template = document.createElement("template");
template.innerHTML = `
<style>
    header {
        padding: 8px 16px 8px 16px;
        color: var(--app-on-primary);
        background-color: var(--app-primary);

        font: var(--app-font);

        display: flex;
        flex-direction: column; 
        gap: 8px;
    }

    @media(min-width: 1000px) {
        header {
            padding-left: 64px;
        }
    }

    #title {
        font: var(--app-font-title);
    }

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
    }

    nav a {
        color: var(--app-on-secondary);
        background-color: var(--app-secondary);
        text-decoration: none;

        font-size: 20px;
        border-radius: 2px;
        padding: 2px 4px;
    }

    nav a:hover {
        text-decoration: underline;
    }

    nav a.accent {
        background-color: var(--app-ternary);
        color: var(--app-on-ternary);
    }

</style>

<header>
    <div id="title">Musikschule UAM</div>

    <nav id="nav">
        <a href="/">Home</a>
        <!-- Aneldung Wichtig machen gelb !!! -->
        <a class="accent" href="/anmeldungen.html">Anmeldung</a>
        <a href="/vorstand.html">Vorstand</a>
        <a href="/faq.html">H\xE4ufige Fragen</a>

        <a href="/impressum.html">Impressum</a>
    </nav>
</header>
`;
var MuaHeader = class extends HTMLElement {
  constructor() {
    super();
    let root = this.attachShadow({ mode: "open" });
    root.append(template.content.cloneNode(true));
  }
};
customElements.define("mua-header", MuaHeader);

// src/components/mua-image-banner.ts
var template2 = document.createElement("template");
template2.innerHTML = `
<style>

#banner {
    background-size: cover;
    background-position: 50% top;
    padding: 148px 16px 16px 16px;
    backdrop-filter: blur(1000px); 
}

#text {
    color: var(--app-on-surface-variant);
    background-color: var(--app-surface-variant-transparent);
    padding: 4px 16px;
    backdrop-filter: blur(6px);

    box-sizing: border-box;
    max-width: 768px;
    margin: 0 auto;
}


</style>

<div id="banner">
        <div id="text">
        <slot></slot>
        </div>
</div>
`;
var MuaImageBanner = class extends HTMLElement {
  connectedCallback() {
    let root = this.attachShadow({ mode: "open" });
    root.append(template2.content.cloneNode(true));
    let banner = root.getElementById("banner");
    banner.style.backgroundImage = `url(${this.getAttribute("src")})`;
  }
};
customElements.define("mua-image-banner", MuaImageBanner);

// src/components/mua-card.ts
var template3 = document.createElement("template");
template3.innerHTML = `
<style>
#card {
    padding: 8px 16px;
    max-width: 768px;
    margin: 0 auto;
}

</style>
<div id="card">
    <slot></slot>
</div>
`;
var MuaCard = class extends HTMLElement {
  constructor() {
    super();
    let root = this.attachShadow({ mode: "open" });
    root.append(template3.content.cloneNode(true));
  }
};
customElements.define("mua-card", MuaCard);

// src/components/contact-info.ts
var template4 = document.createElement("template");
template4.innerHTML = `
<style>
#container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
}

#avatar {
    height: calc(2 * 32px);
    width: calc(2 * 32px) ;
    border-radius: 2px;
    object-fit: cover;
}


#info {
    width: calc(6 * 32px) ;
    display: flex;
    flex-direction: column;
}

#name {
    font-weight: 600;
}

</style>
<div id="container">
    <img id="avatar">
    <div id="info">
        <div id="name"></div>
        <div id="role"></div>
    </div>
</div>
`;
var ContactInfo = class extends HTMLElement {
  connectedCallback() {
    let root = this.attachShadow({ mode: "open" });
    root.append(template4.content.cloneNode(true));
    const avatar = root.getElementById("avatar");
    avatar.src = this.getAttribute("avatarsrc");
    const name = root.getElementById("name");
    name.innerText = this.getAttribute("name");
    const role = root.getElementById("role");
    role.innerText = this.getAttribute("role");
    if (this.hasAttribute("flipped")) {
      const container = root.getElementById("container");
      const info = root.getElementById("info");
      container.prepend(info);
      container.append(avatar);
    }
  }
};
customElements.define("contact-info", ContactInfo);

// libs/openlayers/v6.13.0-dist/ol.css
var ol_default = '.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid #b3c5db;background-color:rgba(255,255,255,.4)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:rgba(0,60,136,.3);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid #eee;border-top:none;color:#eee;font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-step-marker{width:1px;height:15px;background-color:#000;float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:12px;z-index:11;color:#000;text-shadow:-2px 0 #fff,0 2px #fff,2px 0 #fff,0 -2px #fff}.ol-scale-text{position:absolute;font-size:14px;text-align:center;bottom:25px;color:#000;text-shadow:-2px 0 #fff,0 2px #fff,2px 0 #fff,0 -2px #fff}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid #000}.ol-unsupported{display:none}.ol-unselectable,.ol-viewport{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:rgba(255,255,255,.4);border-radius:4px;padding:2px}.ol-control:hover{background-color:rgba(255,255,255,.6)}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:#fff;font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:rgba(0,60,136,.5);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;font-size:1.2em;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:focus,.ol-control button:hover{text-decoration:none;background-color:rgba(0,60,136,.7)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:rgba(0,60,136,.7);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:#000;text-shadow:0 0 2px #fff;font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:rgba(255,255,255,.8)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid #7b98bc;height:150px;margin:2px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:2px;left:2px;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:rgba(255,255,255,.8)}.ol-overviewmap-box{border:2px dotted rgba(0,60,136,.7)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}\n/*# sourceMappingURL=ol.css.map */';

// src/components/mua-map.ts
var template5 = document.createElement("template");
template5.innerHTML = `
<style>
#map {
    height: 400px;
    width: 100%;
}

${ol_default}

</style>

<div id="map">
</div>
`;
var BorderErkheim = { "Header": ["lat", "lon"], "Values": [[48.0933669560995, 10.3352397701214], [48.0878576855618, 10.3445837646966], [48.0933639110569, 10.3473165979668], [48.0980765483379, 10.3545912193553], [48.0978072868953, 10.3559671938857], [48.091083519073, 10.3543079540074], [48.0866919126382, 10.3565165539551], [48.0816759476437, 10.3549186098595], [48.0766399333802, 10.3587531023716], [48.0779531000129, 10.3631730822401], [48.0751791065741, 10.3660944719938], [48.0708385629345, 10.3598734818823], [48.0652984919417, 10.3595419454436], [48.060579931977, 10.3621825052694], [48.0622118033709, 10.3742838396542], [48.0595287002208, 10.375588815392], [48.0587033971752, 10.3815638544509], [48.0533683026179, 10.3803036208768], [48.0457497776848, 10.3832573983281], [48.0450875225398, 10.3855823870851], [48.0451050099114, 10.3804800077749], [48.040550637357, 10.3768358252558], [48.0381875672864, 10.3778910693787], [48.0385034741532, 10.3857476427059], [48.0371770408279, 10.3857528770499], [48.0365408550194, 10.393930351058], [48.0345677856799, 10.3960418908117], [48.0316193086069, 10.3866823556373], [48.0259032548415, 10.3825101870147], [48.0228754294181, 10.3663461952075], [48.0165292053156, 10.3497306581032], [48.0190663870473, 10.3466291577598], [48.0149584253771, 10.3352739136054], [48.0150977278778, 10.3298610282291], [48.0181277355228, 10.3302399654928], [48.0184043670175, 10.3276365808492], [48.0250640448311, 10.3203617511294], [48.0313463658909, 10.318142330712], [48.0320573417886, 10.3198698788318], [48.0329637051701, 10.3163105515077], [48.0352119879095, 10.3151567059207], [48.0365129368805, 10.3166034878644], [48.0355340130237, 10.3126844016993], [48.0369128452616, 10.31075535132], [48.0400752296407, 10.3133355136933], [48.0417892604511, 10.3108916195628], [48.0462686322854, 10.3123717085539], [48.0463563129458, 10.3145568483259], [48.0495864966993, 10.3176027837177], [48.050917680734, 10.3147806142354], [48.0502730915169, 10.3116441683658], [48.0548456205943, 10.3005702705838], [48.0625443976624, 10.3013920732452], [48.06330099012, 10.3039092489596], [48.0618092782447, 10.3069441310611], [48.0632518008371, 10.3070139267846], [48.0669972842132, 10.3257524321877], [48.0657197908971, 10.3279809774887], [48.0707122633092, 10.3312970584077], [48.0733521677515, 10.3363230393215], [48.0780564977751, 10.3296674810576], [48.0841847262029, 10.3291127993483], [48.0842971522239, 10.3276719948406], [48.0863503235814, 10.3288266611619], [48.0913716431862, 10.3269181466332], [48.0917985188295, 10.3305911311884], [48.0933669560995, 10.3352397701214]] };
var BorderSontheim = { "Header": ["lat", "lon"], "Values": [[47.9738985670051, 10.3261261620148], [47.9755267136305, 10.3208310947203], [47.9792523489996, 10.31814106007], [47.981074829689, 10.3199296048806], [47.9814470673508, 10.315265295257], [47.988572080135, 10.3127825491035], [47.9925496843458, 10.3137948459872], [47.9981464616014, 10.3208369381014], [48.0053305108945, 10.3235049364754], [48.0081588589268, 10.3224067683162], [48.0149584253771, 10.3352739136054], [48.0190663870473, 10.3466291577598], [48.0165292053156, 10.3497306581032], [48.0228754294181, 10.3663461952075], [48.0259032548415, 10.3825101870147], [48.0203788035525, 10.3843006224876], [48.0192114533236, 10.3865658018262], [48.0207963673462, 10.3932986449772], [48.019652998023, 10.4013582635268], [48.0183044010952, 10.4021300184568], [48.0175122224149, 10.4002041643957], [48.0161881794872, 10.4017117739076], [48.0204495957234, 10.41637817903], [48.0188528155249, 10.4174280823316], [48.0170894926186, 10.4141940389309], [48.0162083716173, 10.4119093717451], [48.0102590660007, 10.409806645739], [48.0090648214026, 10.4046215236429], [48.0058743008673, 10.4022634219741], [48.0033962879421, 10.4034269755923], [48.0021509576694, 10.3998755916631], [47.9983117461804, 10.4030471702865], [47.9957043016836, 10.4019423282877], [47.9930768574429, 10.3974264142046], [47.9895212387308, 10.3987254502057], [47.9863123162818, 10.3893104196061], [47.9874685637397, 10.3873864709736], [47.9856069907328, 10.3855995534978], [47.9844342801096, 10.3804888292884], [47.9862000108968, 10.3736811412453], [47.983575625775, 10.3661873159574], [47.9871636197367, 10.3642375449461], [47.9867618801605, 10.3580702599328], [47.9841566978181, 10.3524112332854], [47.9790552785856, 10.3487552493295], [47.9781103092408, 10.3439907426945], [47.9709850725593, 10.3439950614229], [47.9676553399776, 10.3412980872769], [47.9661093983901, 10.3363503523651], [47.9725202608436, 10.3298773919433], [47.9752834329188, 10.3371571841022], [47.9759199288413, 10.3333593489435], [47.9738985670051, 10.3261261620148]] };
var BorderBreitenbrunn = { "Header": ["lat", "lon"], "Values": [[48.1620926693823, 10.3632728808761], [48.1652123718826, 10.3672739721646], [48.1651873850796, 10.3723483442244], [48.1667921066934, 10.3746161472439], [48.1714071434091, 10.3727920797789], [48.1712475776885, 10.3835141478697], [48.1725416778565, 10.3881704654815], [48.1788539834407, 10.3899916740276], [48.1793632839575, 10.393381738562], [48.1762190341019, 10.3963788356079], [48.175718474709, 10.4054652334227], [48.1694381792217, 10.4097222200397], [48.1706943646391, 10.4136312903238], [48.1691125789082, 10.4143671754646], [48.1692565007929, 10.4219282138794], [48.1674001227635, 10.426366544571], [48.1696144449187, 10.4336642555889], [48.169513446469, 10.4400012259766], [48.163762746748, 10.4497218026259], [48.1627467996086, 10.4462495718264], [48.1588135580991, 10.4481162108353], [48.1570618794684, 10.4373785740626], [48.1595916202985, 10.437573981785], [48.1593530660256, 10.429505788197], [48.1565642254848, 10.4243864810189], [48.1551006037391, 10.4256275692543], [48.1501033510941, 10.4112338211345], [48.1491387044478, 10.4114211821257], [48.1498168368775, 10.4169265983481], [48.1425226874676, 10.4151327795501], [48.1405879015914, 10.4190388533848], [48.1380773987213, 10.4120837161288], [48.1353063683456, 10.4152583794457], [48.1358461513514, 10.4222105938943], [48.1353820858846, 10.4237076887326], [48.1332192683258, 10.427697496816], [48.1337492441119, 10.4238694762805], [48.1348131909477, 10.4245503362952], [48.1337622738263, 10.4167158310687], [48.1283019719844, 10.4177588403302], [48.1218849428406, 10.4143355895596], [48.1185962523343, 10.415167921205], [48.1126748960015, 10.4077504056004], [48.1063387979774, 10.4073322673191], [48.1065716540922, 10.4048621930214], [48.1052903129189, 10.4053410161476], [48.1046348718697, 10.4027511482966], [48.0987065103817, 10.3994533598689], [48.0989280099928, 10.3956473183437], [48.0955204034413, 10.3940856211254], [48.0908334717554, 10.3864702616287], [48.0892454424925, 10.3774590206828], [48.088238014469, 10.3777814817979], [48.0892377609146, 10.3672529984607], [48.0883097334673, 10.3641767961244], [48.0835430316787, 10.3602209539317], [48.0816759476437, 10.3549186098595], [48.0866919126382, 10.3565165539551], [48.091083519073, 10.3543079540074], [48.0978072868953, 10.3559671938857], [48.0980765483379, 10.3545912193553], [48.0993955385369, 10.3559021299641], [48.1061232534719, 10.3532953913462], [48.1084324741448, 10.3551478273379], [48.1121623481691, 10.3534045922137], [48.1182091992035, 10.3520160538913], [48.1224878840795, 10.3481045125574], [48.128787053949, 10.3483329746462], [48.1326121907668, 10.3445118725964], [48.1355202154177, 10.3468223782369], [48.1428788951786, 10.344256478386], [48.1456251245257, 10.3517705627349], [48.1440888087046, 10.3525545726684], [48.1447835877148, 10.3565509813198], [48.1413515321578, 10.3621678285242], [48.1433765492426, 10.3635054019853], [48.1473346017969, 10.3618894053005], [48.1528328905039, 10.3546390267713], [48.154198070693, 10.3593597437615], [48.1589746742628, 10.3631615719325], [48.1620926693823, 10.3632728808761]] };
var BorderSalgen = { "Header": ["lat", "lon"], "Values": [[48.1512682742661, 10.4849732234364], [48.1484991850474, 10.4865220306808], [48.1490881928749, 10.4901406395533], [48.1432149968472, 10.4922720280856], [48.1461937266909, 10.4958859642595], [48.1384316781936, 10.4983617679482], [48.1329889145634, 10.5098713172654], [48.1196950822366, 10.5171374506271], [48.118834097862, 10.5148381067977], [48.1124079894126, 10.5202381131454], [48.1119833992884, 10.5235526766943], [48.1056011069367, 10.515767761188], [48.1015161112862, 10.5240758951117], [48.0988197569642, 10.5196665437648], [48.0954319279446, 10.5185263146785], [48.0937227868528, 10.5153070847222], [48.0943826451064, 10.5119278915642], [48.0982892688177, 10.5121602128778], [48.0989781623564, 10.5073343043885], [48.0973344431248, 10.5082461091587], [48.0977291750924, 10.5053290626504], [48.095945432488, 10.5022189209992], [48.0985905464365, 10.4914905947648], [48.0954563798551, 10.4772132760924], [48.0982142847374, 10.4790386098237], [48.0985424030712, 10.4748802043109], [48.1016597682741, 10.4723716258087], [48.1073777390256, 10.4734708256463], [48.1117251929398, 10.4699778959915], [48.1146532602471, 10.4707404267975], [48.1205944452818, 10.4672516800072], [48.1224926998081, 10.4627033199051], [48.1301064099303, 10.4596620732366], [48.1384826740939, 10.4513830136532], [48.1546723235231, 10.4515014042564], [48.1543730970374, 10.4488936790802], [48.1588135580991, 10.4481162108353], [48.1627467996086, 10.4462495718264], [48.163762746748, 10.4497218026259], [48.1564427195697, 10.4658021058426], [48.1573888283842, 10.4759828875176], [48.154631525725, 10.4769843241187], [48.1540245619383, 10.4828076582991], [48.1512682742661, 10.4849732234364]] };
var BorderHolzguenz = { "Header": ["lat", "lon"], "Values": [[48.0110781139105, 10.2265099923156], [48.0117102993894, 10.2289988497732], [48.0175978054527, 10.2240688068832], [48.0264349746061, 10.2258076654887], [48.033072754209, 10.2226004235151], [48.0348181978414, 10.2325368944389], [48.0401518609184, 10.2339473825735], [48.0405184317275, 10.2282626589418], [48.0423357302207, 10.2295614366826], [48.0409006704424, 10.234286876155], [48.043874352213, 10.2348069653061], [48.0438729133032, 10.2541287535315], [48.0439422743893, 10.256647240775], [48.0423346025406, 10.2560893797784], [48.0414242092376, 10.2589394949708], [48.0410747331246, 10.2651653501774], [48.0390353252798, 10.264686134179], [48.0383932284686, 10.2681180570434], [48.0337462067117, 10.2739769221439], [48.0314493090618, 10.2709127293063], [48.0268921469177, 10.2728712425632], [48.021752339942, 10.2710373201237], [48.0205848575913, 10.2738386321069], [48.0196804099374, 10.2709928861933], [48.018783928632, 10.2652840196937], [48.0161939606065, 10.2660913904986], [48.0154777170779, 10.2633708426557], [48.0165934447628, 10.2621417890122], [48.0140868951733, 10.2614925432968], [48.0138302322572, 10.2637175919313], [48.0131064041425, 10.261084513457], [48.0120366471047, 10.2622004521733], [48.0099329870409, 10.250518675905], [48.00898243627, 10.2512583833953], [48.0076342276937, 10.245148350083], [48.005560642019, 10.2459590289417], [48.0052912487308, 10.2419865306081], [48.0040591156508, 10.2420067145473], [48.0026562619936, 10.230437541175], [48.0068218533172, 10.2302859190109], [48.0110781139105, 10.2265099923156]] };
var BorderLauben = { "Header": ["lat", "lon"], "Values": [[48.0469202499323, 10.2309199824423], [48.0566133852747, 10.2371840816246], [48.0629873511545, 10.239308731383], [48.0646125991741, 10.2378139082317], [48.0661911620887, 10.2504746224213], [48.0681198978538, 10.2545605150123], [48.0674720599884, 10.2850862247269], [48.0714542190995, 10.2852759999446], [48.0718508509705, 10.2887453954508], [48.0754985459697, 10.292362180421], [48.0758679171862, 10.3005161425111], [48.0800510733779, 10.299538048464], [48.0796054821319, 10.3015791175937], [48.081319811852, 10.3033092588265], [48.0888412477146, 10.3014274396309], [48.0893055879553, 10.3039843253175], [48.0922257535971, 10.3042804035032], [48.0937140909175, 10.3224699060742], [48.0942080879807, 10.3249025878212], [48.0957323464959, 10.324939269256], [48.0928012576148, 10.3261788197854], [48.0917985188295, 10.3305911311884], [48.0913716431862, 10.3269181466332], [48.0863503235814, 10.3288266611619], [48.0842971522239, 10.3276719948406], [48.0841847262029, 10.3291127993483], [48.0780564977751, 10.3296674810576], [48.0733521677515, 10.3363230393215], [48.0707122633092, 10.3312970584077], [48.0657197908971, 10.3279809774887], [48.0669972842132, 10.3257524321877], [48.0632518008371, 10.3070139267846], [48.0618092782447, 10.3069441310611], [48.06330099012, 10.3039092489596], [48.0625443976624, 10.3013920732452], [48.0548456205943, 10.3005702705838], [48.0534478312877, 10.2947682419158], [48.0455405339554, 10.2879146828012], [48.0460197382917, 10.2860461760677], [48.047801720553, 10.2866268656738], [48.0502281616631, 10.2660100897738], [48.0465485268191, 10.2642552943519], [48.0451423482599, 10.2584152735018], [48.0461072697712, 10.2544483557182], [48.0438729133032, 10.2541287535315], [48.043874352213, 10.2348069653061], [48.0409006704424, 10.234286876155], [48.0423357302207, 10.2295614366826], [48.0469202499323, 10.2309199824423]] };
var BorderPfaffenhausen = { "Header": ["lat", "lon"], "Values": [[48.1185962523343, 10.415167921205], [48.1218849428406, 10.4143355895596], [48.1283019719844, 10.4177588403302], [48.1337622738263, 10.4167158310687], [48.1348131909477, 10.4245503362952], [48.1337492441119, 10.4238694762805], [48.1332192683258, 10.427697496816], [48.1353820858846, 10.4237076887326], [48.1358461513514, 10.4222105938943], [48.1353063683456, 10.4152583794457], [48.1380773987213, 10.4120837161288], [48.1405879015914, 10.4190388533848], [48.1425226874676, 10.4151327795501], [48.1498168368775, 10.4169265983481], [48.1491387044478, 10.4114211821257], [48.1501033510941, 10.4112338211345], [48.1551006037391, 10.4256275692543], [48.1565642254848, 10.4243864810189], [48.1593530660256, 10.429505788197], [48.1595916202985, 10.437573981785], [48.1570618794684, 10.4373785740626], [48.1588135580991, 10.4481162108353], [48.1543730970374, 10.4488936790802], [48.1546723235231, 10.4515014042564], [48.1384826740939, 10.4513830136532], [48.1301064099303, 10.4596620732366], [48.1224926998081, 10.4627033199051], [48.1205944452818, 10.4672516800072], [48.1146532602471, 10.4707404267975], [48.1117251929398, 10.4699778959915], [48.1073777390256, 10.4734708256463], [48.1016597682741, 10.4723716258087], [48.0985424030712, 10.4748802043109], [48.0982142847374, 10.4790386098237], [48.0954563798551, 10.4772132760924], [48.0940122618571, 10.4770031082212], [48.0939895139193, 10.4742579295994], [48.0890093502562, 10.475357546266], [48.0885582937696, 10.4723831489413], [48.085518080825, 10.4722162722618], [48.0852114260797, 10.4676528514397], [48.0871090716176, 10.4671447784675], [48.0855589241514, 10.466538762277], [48.0848461027646, 10.4611590184887], [48.0858606684635, 10.4597543732098], [48.0846129330232, 10.4597252646272], [48.0840073236895, 10.454095045202], [48.08657726471, 10.4543404582854], [48.0857366728589, 10.4520332504481], [48.0897944176353, 10.4477690662391], [48.0919199347394, 10.4420556025347], [48.0938673884402, 10.4421247047751], [48.0938255120614, 10.438828115997], [48.1019313778859, 10.4406480058789], [48.106029177637, 10.4481399333485], [48.1093621518073, 10.4459913276998], [48.109233700607, 10.4437751864106], [48.1138025503104, 10.4406546574593], [48.1139991723393, 10.4386293062674], [48.1195960311684, 10.4355198642992], [48.1175899159422, 10.433950086357], [48.1177462651035, 10.4266828391944], [48.1159547918762, 10.419348251479], [48.1158539657981, 10.416126070014], [48.1185962523343, 10.415167921205]] };
var BorderOberrieden = { "Header": ["lat", "lon"], "Values": [[48.1046348718697, 10.4027511482966], [48.1052903129189, 10.4053410161476], [48.1065716540922, 10.4048621930214], [48.1063387979774, 10.4073322673191], [48.1126748960015, 10.4077504056004], [48.1185962523343, 10.415167921205], [48.1158539657981, 10.416126070014], [48.1159547918762, 10.419348251479], [48.1177462651035, 10.4266828391944], [48.1175899159422, 10.433950086357], [48.1195960311684, 10.4355198642992], [48.1139991723393, 10.4386293062674], [48.1138025503104, 10.4406546574593], [48.109233700607, 10.4437751864106], [48.1093621518073, 10.4459913276998], [48.106029177637, 10.4481399333485], [48.1019313778859, 10.4406480058789], [48.0938255120614, 10.438828115997], [48.0938673884402, 10.4421247047751], [48.0919199347394, 10.4420556025347], [48.0897944176353, 10.4477690662391], [48.0857366728589, 10.4520332504481], [48.08657726471, 10.4543404582854], [48.0840073236895, 10.454095045202], [48.0822188356787, 10.4511369841922], [48.0803586825355, 10.4519994903972], [48.078763826901, 10.4473940509242], [48.0795220250137, 10.4446162247627], [48.0777972765559, 10.4416105765152], [48.0760887986213, 10.4455576849365], [48.0735514287332, 10.4443976166939], [48.0745168214386, 10.4386818735157], [48.0712753138452, 10.4383202036307], [48.0707036735724, 10.434651939356], [48.0720718458125, 10.4339092713787], [48.0722306447375, 10.4298606077943], [48.0711632980861, 10.4227779381358], [48.0732024005503, 10.4225510794828], [48.0735491431184, 10.4203082317514], [48.0713449842295, 10.4120767982118], [48.0738860602028, 10.3966097869887], [48.072207023639, 10.3946785494425], [48.0738333295316, 10.390426166367], [48.0727855540878, 10.3876040818278], [48.0734484457389, 10.3809625401993], [48.0772047188784, 10.3828162823882], [48.0805152604324, 10.3793398938597], [48.0776711309425, 10.3737220126762], [48.0743821298114, 10.3750972345175], [48.0761645779786, 10.3735566517839], [48.0740833374827, 10.3696998436613], [48.074738939444, 10.3666504460939], [48.0762895973936, 10.3730808382856], [48.0783737456656, 10.3718249224705], [48.0773747198571, 10.3665278254688], [48.0793033870735, 10.3708509824924], [48.0779531000129, 10.3631730822401], [48.0766399333802, 10.3587531023716], [48.0816759476437, 10.3549186098595], [48.0835430316787, 10.3602209539317], [48.0883097334673, 10.3641767961244], [48.0892377609146, 10.3672529984607], [48.088238014469, 10.3777814817979], [48.0892454424925, 10.3774590206828], [48.0908334717554, 10.3864702616287], [48.0955204034413, 10.3940856211254], [48.0989280099928, 10.3956473183437], [48.0987065103817, 10.3994533598689], [48.1046348718697, 10.4027511482966]] };
var Mitglieder = [
  {
    Name: "Breitenbrunn",
    Lat: 48.1371498,
    Lon: 10.4006665,
    Border: BorderBreitenbrunn.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Erkheim",
    Lat: 48.0379981,
    Lon: 10.3358813,
    Border: BorderErkheim.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Holzg\xFCnz",
    Lat: 48.0243576,
    Lon: 10.2580843,
    Border: BorderHolzguenz.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Lauben",
    Lat: 48.0591683,
    Lon: 10.2900307,
    Border: BorderLauben.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Oberrieden",
    Lat: 48.0888716,
    Lon: 10.4260227,
    Border: BorderOberrieden.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Pfaffenhausen",
    Lat: 48.1196711,
    Lon: 10.454339,
    Border: BorderPfaffenhausen.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Salgen",
    Lat: 48.1305896,
    Lon: 10.4783375,
    Border: BorderSalgen.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  },
  {
    Name: "Sontheim",
    Lat: 48.0058035,
    Lon: 10.3554635,
    Border: BorderSontheim.Values.map((v) => {
      return { Lat: v[0], Lon: v[1] };
    })
  }
];
var MuaMap = class extends HTMLElement {
  connectedCallback() {
    let root = this.attachShadow({ mode: "open" });
    root.append(template5.content.cloneNode(true));
    this.initMap(root.getElementById("map"));
  }
  async initMap(mapElement) {
    let { default: ol } = await import("./ol-H2ONBIAB.js");
    function styleFunc(feature2) {
      let m = feature2.getProperties();
      return new ol.style.Style({
        text: new ol.style.Text({
          font: "600 16px system-ui, sans-serif",
          fill: new ol.style.Fill({ color: "white" }),
          backgroundFill: new ol.style.Fill({ color: "black" }),
          backgroundStroke: new ol.style.Stroke({ color: "white", width: 2, lineJoin: "round" }),
          padding: [2, 8, 2, 8],
          text: m.Name
        })
      });
    }
    var mitgliederSource = new ol.source.Vector();
    var mitgliederBorderSource = new ol.source.Vector();
    for (let m of Mitglieder) {
      var feature = new ol.Feature(m);
      var coords = ol.proj.fromLonLat([m.Lon, m.Lat]);
      feature.setGeometry(new ol.geom.Point(coords));
      mitgliederSource.addFeature(feature);
      if (!m.Border) {
        continue;
      }
      var featureBoundary = new ol.Feature();
      var border = m.Border.map((v) => ol.proj.fromLonLat([v.Lon, v.Lat]));
      featureBoundary.setGeometry(new ol.geom.Polygon([border]));
      mitgliederBorderSource.addFeature(featureBoundary);
    }
    var layerMap = new ol.layer.Tile({ source: new ol.source.OSM() });
    var layerMitglieder = new ol.layer.Vector({
      source: mitgliederSource,
      style: styleFunc
    });
    var layerMitgliederBorder = new ol.layer.Vector({
      source: mitgliederBorderSource,
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "black",
          width: 2
        }),
        fill: new ol.style.Fill({
          color: "#00000020"
        })
      })
    });
    var view = new ol.View();
    var map = new ol.Map({
      target: mapElement,
      layers: [
        layerMap,
        layerMitgliederBorder,
        layerMitglieder
      ],
      view
    });
    view.fit(mitgliederSource.getExtent(), { padding: [64, 64, 64, 64] });
  }
};
customElements.define("mua-map", MuaMap);

// src/components/mua-register.ts
var template6 = document.createElement("template");
template6.innerHTML = `
<style>

#register {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: lightgrey;

    height: calc(5 * 32px);
    width: calc(10 * 32px);
    padding: 8px;
    border-radius: 2px;

    filter: brightness(1.1);

    cursor: pointer;
    user-select: none;
}

#register:hover {
    filter: brightness(1.25);
}

#modal {
    display: none;
}

details {

    color: white;
    background-color: black;    
    padding: 2px 4px;
    border-radius: 2px;

    word-break: break-word;
}

slot[name=details] {
    display: block;
    margin: 8px 0;
}

</style>

<div id="register">
    <details id="details">
        <summary id="name"></summary>
        <slot name="details"></slot>
    </details>
</div>

`;
var MuaRegister = class extends HTMLElement {
  connectedCallback() {
    let root = this.attachShadow({ mode: "closed" });
    root.append(template6.content.cloneNode(true));
    const register = root.getElementById("register");
    const src = this.getAttribute("backgroundsrc");
    register.style.backgroundImage = `url(${src})`;
    register.style.backgroundSize = `cover`;
    const details = root.getElementById("details");
    register.addEventListener("click", (e) => {
      details.open = !details.open;
      e.preventDefault();
    });
    const name = root.getElementById("name");
    name.innerText = this.getAttribute("name");
  }
};
customElements.define("mua-register", MuaRegister);

// src/components/mua-link.ts
var template7 = document.createElement("template");
template7.innerHTML = `
<style>
    a {
        color: var(--app-on-secondary);
        background-color: var(--app-secondary);
        text-decoration: none;

        font-size: 20px;
        border-radius: 2px;
        padding: 2px 4px;
    }

    a:hover {
        text-decoration: underline;
    }

    a.accent {
        background-color: var(--app-ternary);
        color: var(--app-on-ternary);
    }

</style>

<a id="link" class="accent" href="/"><slot></slot></a>

</header>
`;
var MuaLink = class extends HTMLElement {
  connectedCallback() {
    let root = this.attachShadow({ mode: "open" });
    root.append(template7.content.cloneNode(true));
    const link = root.getElementById("link");
    link.href = this.getAttribute("href");
  }
};
customElements.define("mua-link", MuaLink);
