
import olCss from '../../libs/openlayers/v6.13.0-dist/ol.css';
import {gemeindeBorders} from './borders';

var template = document.createElement('template') as HTMLTemplateElement;
template.innerHTML = `
<style>

:host {
    display: block;
    height: 300px;
    
}

#map {
    height: 100%;
    width: 100%;
}

${olCss}

</style>

<div id="map">
</div>
`

interface LatLonTable {
    Header: string[]
    Values: number[][]
}

interface Gemeinde {
    Name: string
    Borders: LatLonTable[]
}

function findGemeindeBorders(name: string): { Lat: number, Lon: number }[][] {
    for (let g of gemeindeBorders as Gemeinde[]) {
        if (g.Name !== name) {
            continue
        }
        
        var borders: { Lat: number, Lon: number }[][] = [];
        for (let p of g.Borders) {
            borders.push(
                p.Values.map(v => { return { Lat: v[0], Lon: v[1] };})
            );
        }
        return borders;
    }

    throw new Error(`gemeinde ${name} not found`);
}


interface Mitglied {
    Name: string;
    Lat: number;
    Lon: number;

    Borders: { Lat: number, Lon: number }[][];

    // TODO Fläche
}

var Mitglieder: Mitglied[] = [
    { 
        Name: "Breitenbrunn",
        Lat: 48.1371498, Lon: 10.4006665,
        Borders: findGemeindeBorders("Breitenbrunn"),
    },
    { 
        Name: "Markt Erkheim",
        Lat: 48.0379981, Lon: 10.3358813,
        Borders: findGemeindeBorders("Erkheim"),
    },
    { 
        Name: "Holzgünz",
        Lat: 48.0243576, Lon: 10.2580843,
        Borders: findGemeindeBorders("Holzgünz"),
    },
    { 
        Name: "Lauben",
        Lat: 48.0591683, Lon: 10.2900307,
        Borders: findGemeindeBorders("Lauben"),
    },
    { 
        Name: "Oberrieden",
        Lat: 48.0888716, Lon: 10.4260227,
        Borders: findGemeindeBorders("Oberrieden"),
    },
    { 
        Name: "Pfaffenhausen",
        Lat: 48.1196711, Lon: 10.454339,
        Borders: findGemeindeBorders("Pfaffenhausen"),
    },
    { 
        Name: "Salgen",
        Lat: 48.1305896, Lon: 10.4783375,
        Borders: findGemeindeBorders("Salgen"),
    },
    { 
        Name: "Sontheim", 
        Lat: 48.0058035, Lon: 10.3554635,
        Borders: findGemeindeBorders("Sontheim"),
    },
    { 
        Name: "Markt Rettenbach", 
        Lat: 47.9479617, Lon: 10.3948471,
        Borders: findGemeindeBorders("Markt Rettenbach"),
    },
    { 
        Name: "Marktgemeinde Legau",
        Lat: 47.8566773, Lon: 10.1292599,
        Borders: findGemeindeBorders("Legau"),
    },
    { 
        Name: "Lautrach",
        Lat: 47.8967411, Lon: 10.1164635,
        Borders: findGemeindeBorders("Lautrach"),
    },
    { 
        Name: "Kronburg",
        Lat: 47.9046825, Lon: 10.1567595,
        Borders: findGemeindeBorders("Kronburg"),
    },

    { 
        Name: "Westerheim", 
        Lat: 48.0155586, Lon: 10.3018677,
        Borders: findGemeindeBorders("Westerheim"),
    },
    {
        Name: "Ungerhausen",
        Lat: 48.005556, Lon: 10.266667,
        Borders: findGemeindeBorders("Ungerhausen"),
    },
]



var BorderUnterallgaeu1: LatLonTable = {"Header":["lat","lon"],"Values":[[47.9758873503765,10.1154622974126],[47.9889295175457,10.1149989388866],[47.9968454651401,10.1215912068451],[48.0040557972585,10.1196151513262],[48.0070158188878,10.1244618873323],[48.0110374732081,10.1259205036639],[48.0161688126535,10.1336476890049],[48.0131126191143,10.1375812102757],[48.0133906542052,10.1393696607791],[47.9967344160598,10.1543857283637],[47.9957260126187,10.1518023106447],[47.9891641111052,10.1510016821081],[47.9869800243784,10.1352507838162],[47.9858816565766,10.1367092650802],[47.9843212701729,10.1334978663566],[47.9699343702473,10.1284138574903],[47.96730521303,10.1307077366876],[47.9699173556034,10.1376207648223],[47.9659700871582,10.1395730578031],[47.9671954353944,10.1415609280904],[47.9644926710847,10.1450686579014],[47.95849222173,10.134955147193],[47.9594045112784,10.1330467029562],[47.9579799867066,10.1291154431068],[47.962104551388,10.1235734692421],[47.9603838422641,10.1164952160248],[47.9642157106727,10.1168253827341],[47.9646299511145,10.1133114535132],[47.9735344757601,10.1193454550549],[47.9738371412052,10.1171986778163],[47.9711816081723,10.1149870859587],[47.9758873503765,10.1154622974126]]};
var BorderUnterallgaeu2: LatLonTable = {"Header":["lat","lon"],"Values":[[47.8655603919558,10.1022805021725],[47.859660059255,10.0931148491925],[47.8556266785642,10.0831421008721],[47.8605447846415,10.0801110542128],[47.8611957652772,10.0818017161566],[47.8634510881894,10.079173317397],[47.8654076794487,10.0802849617884],[47.8677050855043,10.0769841614549],[47.8699549485851,10.0823278801992],[47.8673528084367,10.0875048802699],[47.8673402585779,10.0916240151368],[47.8724774249215,10.0979726687133],[47.8767215299778,10.0981272060564],[47.8766432723373,10.1028840310839],[47.8784229144651,10.1070610742164],[47.8831706056495,10.1065987220723],[47.8847759507186,10.0955367567679],[47.8890254208974,10.1032578165766],[47.9057009834431,10.1016441560442],[47.9062054657801,10.1048101202143],[47.9087672557729,10.1038817170099],[47.9106511592361,10.1104036064366],[47.9155945935747,10.1085193054201],[47.9165896281396,10.1124451711632],[47.9230126388915,10.1049917696144],[47.9309619691012,10.1078761216821],[47.9338998518615,10.1111898826563],[47.9370698536611,10.1101769627921],[47.9385330828621,10.1102011682457],[47.933679235732,10.1157856063299],[47.9278526540389,10.1324773936534],[47.929640309466,10.1363380798376],[47.925442827831,10.1392714916626],[47.9203700245472,10.1373293475239],[47.9184900194968,10.1431840354805],[47.929310012472,10.1493248175714],[47.9210366823803,10.1502131585813],[47.9231168602997,10.1540894228646],[47.9185655151686,10.1533513476179],[47.9180928106542,10.1557927228655],[47.9167981592256,10.1543805274088],[47.9155129933988,10.1563065336637],[47.9179999448384,10.1613974299079],[47.922221081055,10.1591191952727],[47.9241504891438,10.1655435950586],[47.9316729204512,10.1750403542338],[47.9297647765806,10.1756040042563],[47.9302778018302,10.1802687279761],[47.9329019768429,10.1801414246848],[47.9329661127197,10.1827429342495],[47.9342931981414,10.1813215470258],[47.9344907648926,10.1836614339678],[47.9360612315303,10.1805602828625],[47.9383205441964,10.1816843002211],[47.9387152323806,10.1917779758654],[47.9473347363398,10.1864867746868],[47.9475761515705,10.1847172368724],[47.9507254673752,10.1877148170315],[47.9525594325475,10.1865568300145],[47.9563828648196,10.1973390909018],[47.9599055535458,10.1957858783128],[47.971914172281,10.2028196581179],[47.9768421106442,10.1998399743717],[47.980925747214,10.208057130466],[47.9807799349193,10.2117339945195],[47.9817589032747,10.2113481171929],[47.9808245407833,10.2046310346193],[47.9930117328819,10.2005958485153],[48.000841836262,10.2005809700833],[48.0023676199785,10.2067809264279],[48.0043719633709,10.2060344013189],[48.0055072260808,10.2125669034505],[48.0088254386799,10.2158043177762],[48.0117102993894,10.2289988497732],[48.0175978054527,10.2240688068832],[48.0264349746061,10.2258076654887],[48.033072754209,10.2226004235151],[48.0348181978414,10.2325368944389],[48.0401518609184,10.2339473825735],[48.0405184317275,10.2282626589418],[48.0466291333289,10.2314647281467],[48.0474893281821,10.2295272419034],[48.0431096434919,10.220005307808],[48.0449565767261,10.2125988395536],[48.04151147747,10.2107216371718],[48.0409909015994,10.2009784079259],[48.0366946624939,10.1981500443703],[48.0342663747981,10.2018739313346],[48.0345031317842,10.1961397037632],[48.0275215778172,10.1821685548449],[48.0236524513454,10.16878892214],[48.0276799915469,10.1621007840154],[48.0245420057718,10.1540035241064],[48.0263208131399,10.1483421109462],[48.0228532400156,10.1360604066616],[48.0329403378248,10.1279905857924],[48.0396715045364,10.1346319131619],[48.0443249345064,10.1366046404109],[48.0465481098007,10.1411936691373],[48.0504006883696,10.141326968394],[48.0527281680707,10.1391543771635],[48.0548648405513,10.1427061837909],[48.0589940101999,10.1439402517105],[48.0656691996806,10.1409434445845],[48.074224647294,10.1440521675558],[48.0769658505105,10.1355441351237],[48.082787276935,10.1352501124958],[48.0898094556842,10.1399832390239],[48.0938181347866,10.1374722887658],[48.095399106815,10.140886595049],[48.0977601778814,10.1407940484739],[48.1008300716784,10.1367590041806],[48.1082438308496,10.1367078312204],[48.1106478268923,10.1449251298647],[48.1133498517599,10.145141562786],[48.113841754728,10.1491090897094],[48.1177926038632,10.1505676336184],[48.1204348410445,10.1603785774393],[48.1247877762738,10.1811306750517],[48.1233338671768,10.1928762193996],[48.1261736155388,10.1915322187157],[48.1279191072395,10.1946814227594],[48.1333426228578,10.1964405736394],[48.136483935138,10.2062171455502],[48.14120530877,10.2105022018829],[48.143227688493,10.2150964002436],[48.1464570190451,10.2093157050289],[48.1486413420304,10.2111869201208],[48.1532148000971,10.2060065767769],[48.155945109353,10.2102360635526],[48.1633635779984,10.2094506083802],[48.164293493701,10.2113884037959],[48.1633478017218,10.2235605491444],[48.1663202508637,10.2235202475498],[48.169326048459,10.2179867471624],[48.1792001691579,10.2216780195711],[48.1807063995508,10.2254050117069],[48.1809844726928,10.2340248217753],[48.1841006511863,10.2369731841953],[48.1846329836763,10.2343478434301],[48.1824249207654,10.2259013232272],[48.1844561319438,10.2243504749792],[48.1847559553888,10.2271806724505],[48.1833111950789,10.2283188190508],[48.1850902691726,10.2334026637306],[48.1865349893183,10.2302142953853],[48.1862593433923,10.2229340753214],[48.1877104817231,10.2228586103084],[48.1918596603227,10.2256768410405],[48.1919366588536,10.2407204798518],[48.1956420933774,10.2445396918036],[48.1966404130543,10.2429631526817],[48.1957126470016,10.2455557190054],[48.1976022565783,10.25045564586],[48.198913087938,10.2479515627586],[48.1981005159696,10.2526611578811],[48.2017813054691,10.2548528815259],[48.2029193660138,10.2504864078309],[48.202488008643,10.2554380499264],[48.2051567721804,10.257861197226],[48.2072552099189,10.2552481032185],[48.2110868468557,10.256525531667],[48.2122951677132,10.2537236729032],[48.2141649245214,10.2555603500359],[48.2181003238201,10.2549611933067],[48.220802163377,10.2573952092374],[48.2218236108708,10.2666119206846],[48.2296138998436,10.2715135146487],[48.2287616659803,10.2777466787954],[48.2224122322098,10.281220612781],[48.2226359171441,10.2841952049133],[48.2236841602753,10.2832217853897],[48.2247689647864,10.2851789886114],[48.2220994997124,10.2873775632061],[48.2237268362884,10.2886473738387],[48.2221649732244,10.2907376586757],[48.2238837168606,10.2927263581244],[48.2214190275358,10.2961229191566],[48.2191243681568,10.2923881927558],[48.2186302470757,10.2972567225031],[48.2155695089977,10.2973831394756],[48.2149647214507,10.3011485227664],[48.2066558263652,10.2999261707909],[48.2066244128276,10.2966382113812],[48.2029973432939,10.2966316323379],[48.2026561642586,10.2937418126896],[48.1980150715005,10.2951126077826],[48.1976339621681,10.289190789286],[48.19407975382,10.2911554475033],[48.1932253494312,10.2948306627126],[48.1908153105507,10.2934252549796],[48.1895152378603,10.2966429469485],[48.1845199485591,10.2949256654674],[48.1839645984467,10.3080180211235],[48.1867124536139,10.3078781930526],[48.1898044125529,10.3125595717511],[48.1922156393388,10.3112683258536],[48.1910858292295,10.3098410908104],[48.1944723409824,10.3100206313093],[48.1975854405499,10.3125995475848],[48.1977979976936,10.3153393225005],[48.1830697666179,10.3176791610583],[48.1800733800575,10.3371323927555],[48.1739478788561,10.3475120676477],[48.17395196696,10.352239063723],[48.1687583936575,10.3506596830807],[48.1683603818696,10.3470507205296],[48.1650605826918,10.3499765113477],[48.1639558329908,10.3477496754525],[48.1596833479244,10.3490349870593],[48.1659929779735,10.3507746243129],[48.165933064771,10.3559587633837],[48.1619832770598,10.3572238064565],[48.1630195734081,10.3603896448971],[48.1620926693823,10.3632728808761],[48.1652123718826,10.3672739721646],[48.1651873850796,10.3723483442244],[48.1667921066934,10.3746161472439],[48.1714071434091,10.3727920797789],[48.1712475776885,10.3835141478697],[48.1725416778565,10.3881704654815],[48.1752770029254,10.3878683658952],[48.1765675757341,10.3904345660862],[48.1802458552525,10.3893006401091],[48.1818662207241,10.4028705444647],[48.1845244192011,10.4056927810431],[48.184566006267,10.4085800190268],[48.189913444142,10.4091567722145],[48.1956620697206,10.4061011845312],[48.19287569137,10.4117262274106],[48.1893744137985,10.4142237189646],[48.1888932042537,10.4176274303584],[48.1938706140497,10.418835437025],[48.1955926037086,10.422330371535],[48.1919409723756,10.4242751285731],[48.1927115391376,10.4272856789881],[48.1907063039284,10.4355082224846],[48.1917661626041,10.4357900368821],[48.191849617049,10.4444002271303],[48.1940496253898,10.4450254873014],[48.1954929584855,10.4398963906941],[48.1980292212882,10.4425549161804],[48.1977511246297,10.4456844945209],[48.2077206988689,10.4426481103243],[48.2073412796415,10.4703489648036],[48.2145504830867,10.4788378023768],[48.2172033874995,10.4795848243026],[48.2155174388408,10.4841744568264],[48.2182882356929,10.4854026059263],[48.2188080227224,10.4947494641779],[48.221027795024,10.4944577022423],[48.2203713721423,10.5002786623352],[48.2175569748515,10.5008511526068],[48.2178923905062,10.5044073780223],[48.2198562297241,10.506583269422],[48.220638856582,10.5133956260358],[48.2222526364162,10.5135125326296],[48.2250759196033,10.5185217464008],[48.2228871246125,10.5219086876668],[48.223174561678,10.5241927098111],[48.2203443012723,10.525243745786],[48.2216113548874,10.5305325420236],[48.2184458280868,10.5322160053528],[48.2165027961205,10.528588207818],[48.2146994645826,10.5347463693801],[48.2137185624358,10.5334000750245],[48.2125807657877,10.5349505352979],[48.2064474806431,10.531742941626],[48.2088088166166,10.5427054418904],[48.2032231841374,10.5448204835489],[48.2044023269591,10.5608342858046],[48.1984946597726,10.5677958905674],[48.2046130369836,10.5660336850064],[48.2066935963053,10.5623582374162],[48.2084080306172,10.5705930687102],[48.2103652758418,10.5741357527245],[48.2120653196898,10.5735910968136],[48.2137225420765,10.5818903655754],[48.2109041092432,10.5910798781267],[48.2058641241213,10.5913365451826],[48.2044541369922,10.589839988824],[48.2050317122887,10.5874583805542],[48.2028030311596,10.5793160571512],[48.1987410213424,10.5813422542832],[48.1963371448166,10.5764195291134],[48.1942022951188,10.5822906449382],[48.1947773247311,10.586097099095],[48.1924760903774,10.5875330631322],[48.1933421682293,10.5951132049981],[48.1908867975948,10.5976503377944],[48.1901221670311,10.5910625017407],[48.1862699412838,10.5872662561288],[48.185177859548,10.5779385954519],[48.1870706258402,10.5689559023232],[48.1816548729051,10.568325757787],[48.1802435109041,10.5513061816912],[48.1792665994251,10.5492549538144],[48.1765048745179,10.5514509357645],[48.176098232209,10.5453787746565],[48.1740186943394,10.5420409327642],[48.1723163176824,10.5532016024584],[48.1753135250581,10.5677101926117],[48.1670134795572,10.5684087937452],[48.1674055351324,10.5868213390519],[48.1653325627487,10.5944497457331],[48.1667145090074,10.5974335179285],[48.1644883554494,10.6040345608985],[48.1596177140158,10.609413534641],[48.1595578466278,10.6166483835927],[48.1577602821726,10.6196385469664],[48.1585102508874,10.6260977793625],[48.1638543525614,10.626346777045],[48.1673516199544,10.6303199484219],[48.1667636548669,10.6356259375077],[48.1697172143515,10.6429716283056],[48.1660524091953,10.6445514383102],[48.1653830977317,10.6488606773317],[48.1716433734824,10.6557357380166],[48.1706994716964,10.6635527134356],[48.1681313145354,10.6663927791235],[48.1736351613103,10.6711645445425],[48.1723593474214,10.6849410725449],[48.1653614711674,10.6900021864184],[48.1668794749113,10.6927996708268],[48.1639120741534,10.6955832332364],[48.1569346052628,10.6948949299828],[48.1558178255988,10.6887659789617],[48.1486780800576,10.6855449595758],[48.1489953859525,10.6897056035066],[48.147650657535,10.6916843222893],[48.1486039381806,10.6924169877473],[48.1448310936985,10.7015390312422],[48.1370016066686,10.6961776634958],[48.1349285355855,10.6925129149247],[48.1356230026839,10.6867618142744],[48.1335814301888,10.6856631449868],[48.1331449458645,10.689802921205],[48.1304652445368,10.6849515116745],[48.1267938325913,10.6838653897777],[48.1267824765966,10.6867571117771],[48.1157018724331,10.6876913492079],[48.0998394364334,10.6944111229947],[48.0954633904591,10.6930043354238],[48.0947944096373,10.6999942832382],[48.0987669344595,10.7019836567479],[48.0863937149964,10.7021303276579],[48.0834062820569,10.7030853317736],[48.0836697233044,10.7060399707773],[48.0597255897107,10.7080636295685],[48.0570653283018,10.7022723560136],[48.0550586678243,10.7023881895265],[48.053482424664,10.693814730615],[48.0483357338428,10.6907686060809],[48.0432117834215,10.6946914904312],[48.0432014847803,10.6982787254086],[48.0316150029499,10.6987262404412],[48.0315559802158,10.6922128150897],[48.0297396898414,10.6914205725001],[48.0313463445087,10.6858534269817],[48.0263649067618,10.6865305725012],[48.0243839383288,10.6900901532198],[48.0227986724356,10.6896079355687],[48.0211760796937,10.6774154218652],[48.01564844655,10.6776723248606],[48.0142277110268,10.6695623332631],[48.0161600994807,10.665649673475],[48.0160471056514,10.6581720800547],[48.0095792126112,10.6559619006271],[48.009386511729,10.6609782880164],[48.0013352246958,10.6605340383631],[48.0020239540346,10.6546597971349],[47.9891899128004,10.6527733769411],[47.9906806522818,10.6484426268127],[47.990038268892,10.6456578539158],[47.9861478828865,10.6478564476107],[47.9828344798097,10.6464050634043],[47.9799203459825,10.6492737742958],[47.970688494663,10.6456726278545],[47.9692480026025,10.6374848506495],[47.9674877772921,10.6359334945434],[47.9638622925296,10.6372430556206],[47.9478166336159,10.6220096826455],[47.9498455402665,10.6186945621424],[47.9492524252637,10.6158038840304],[47.9520743674311,10.615702367085],[47.9516951458028,10.6110198736479],[47.9554067566866,10.6116756825976],[47.9550353322722,10.6088681936402],[47.9594788935474,10.6099936380566],[47.960604400232,10.6009057709433],[47.9636730665475,10.6029930858279],[47.9663139766453,10.6008687561738],[47.9706652946446,10.5672424090118],[47.9742386718504,10.5659715305361],[47.9737372978269,10.5624893000376],[47.9755594949045,10.5641878699612],[47.9799446826552,10.5483716535936],[47.979183977943,10.5418177678507],[47.9808365289555,10.5384513765358],[47.9845825105739,10.5379236319289],[47.9842499965258,10.5285276946071],[47.9802229722223,10.5236393589478],[47.9785202284285,10.5251585996492],[47.9745672935453,10.5226013695866],[47.9749207949153,10.5178506905165],[47.9714985555683,10.5150238572741],[47.9672103967509,10.5167138757541],[47.9681838894253,10.521373053603],[47.9552246816076,10.5182273003346],[47.9548428124306,10.5141975555256],[47.9499902343516,10.5100955009437],[47.9467912573774,10.5105895621936],[47.9456203404877,10.513636690694],[47.9427149945596,10.5134370633473],[47.9407143931076,10.5096952443782],[47.9383516831542,10.5088891539853],[47.9350402066299,10.4988427288714],[47.9339185456554,10.4993156480375],[47.9338192268752,10.4887449755773],[47.9319686834216,10.488004201958],[47.9337676901235,10.4879521547144],[47.9348506627657,10.4821233770245],[47.9463232302509,10.4898230657479],[47.9479243924997,10.4863573050643],[47.9400516026508,10.4791662616501],[47.939155612369,10.4692477902721],[47.9384196893857,10.4676318331806],[47.9376375354724,10.4689007383585],[47.9362105548393,10.4637199181644],[47.9332633064649,10.463779114492],[47.9327427628888,10.4606297822722],[47.9259888512576,10.4571821247757],[47.924279550504,10.4581332476906],[47.9228598757905,10.4555390279132],[47.9241443781621,10.4534454461696],[47.9247285115192,10.455330637633],[47.9265819948154,10.4537839971296],[47.9225127840427,10.4504040842341],[47.9225344960056,10.438428928483],[47.9198761164675,10.4355995933587],[47.9214060020768,10.4306958457251],[47.9158822675804,10.4250026304768],[47.9136882630084,10.4254348478798],[47.9125448014654,10.4180955162259],[47.9138273647719,10.4126483188741],[47.9113287910135,10.4095650334479],[47.9131592730197,10.4076712954099],[47.9121270895277,10.4049089625714],[47.9089506284573,10.4065127185665],[47.908007281771,10.4036403588841],[47.9050454318533,10.4086800946318],[47.9054267964729,10.402036444468],[47.8994530227711,10.4056780766006],[47.9000626754367,10.3958142060279],[47.9027891908734,10.3958758870263],[47.8984501259292,10.3950863034359],[47.9022512484841,10.3945500129044],[47.9030899386575,10.3917407380022],[47.9020778886004,10.388934348763],[47.9054829771957,10.3884939958141],[47.9050122068379,10.3868724405522],[47.9088856842845,10.38439700468],[47.9168366726302,10.3823896836937],[47.9202341087628,10.3750204560425],[47.9253535484836,10.3716402832406],[47.9231569836075,10.3659265399405],[47.9208761447514,10.3668905762428],[47.9194354037138,10.3590026065693],[47.9093030896002,10.3640316342544],[47.9026186975786,10.3783220989664],[47.8969381575726,10.3786489171893],[47.8965726536905,10.3809700205513],[47.8930529805503,10.3824805963897],[47.888769871589,10.3764757080444],[47.8820276629131,10.3783999746883],[47.8878805743741,10.3660173540298],[47.8877999815383,10.3633393866092],[47.885822510687,10.3638235615405],[47.8856737914024,10.3581377284731],[47.8834450686224,10.3574913608775],[47.8808990851261,10.3641543118719],[47.8789963912059,10.3637651567596],[47.8727336634731,10.3555722680829],[47.8746816216352,10.3481800470435],[47.8743776484866,10.3433257814095],[47.8760114380536,10.3418208619111],[47.8714368250356,10.3298301709427],[47.868033917995,10.3283677890091],[47.8655207004053,10.3347107450144],[47.8629335598228,10.328947931309],[47.8609784242231,10.3373327949825],[47.8580154269617,10.3270588866356],[47.8560044205387,10.3183312757556],[47.8583266681689,10.3156584491089],[47.8585963513217,10.3101280196274],[47.8637637934074,10.30602267898],[47.862022176443,10.3051420482927],[47.8631893430105,10.3040008960719],[47.8616660137377,10.29998215682],[47.8545084375244,10.2979902965985],[47.8526537942851,10.2902183480105],[47.8563249732763,10.2848573096546],[47.853814894026,10.2810411416093],[47.8568286094618,10.2818582631407],[47.8579434375158,10.279632885874],[47.8573265524997,10.2773124097838],[47.8537033186159,10.278979849029],[47.8533788425683,10.2763681723243],[47.8559365463069,10.2747640651739],[47.8560013376632,10.2648239612982],[47.8584910667249,10.2660944186966],[47.8604037989807,10.2590309641204],[47.8590569759258,10.2595448855045],[47.8589528410455,10.2563159295475],[47.8568443555124,10.2550541283561],[47.857336696729,10.2527030846897],[47.855675314758,10.2498293637406],[47.8531747368721,10.24981719087],[47.8519047298615,10.2530040164608],[47.8458411108651,10.2542179989426],[47.845749261024,10.2486396664871],[47.8412474547427,10.2347123402847],[47.8396510697047,10.2360697314056],[47.8393652151197,10.2321051499366],[47.8396828700916,10.2211003648623],[47.8439538483789,10.2156402251457],[47.8444321073728,10.2104301738893],[47.8486381743752,10.210623771685],[47.8469677041428,10.1994534939706],[47.8487409686189,10.1924748415726],[47.8508687645463,10.1936934111353],[47.8529446672908,10.1916564300915],[47.8512429388731,10.1902454753416],[47.8528573684832,10.1862993633057],[47.8479645205482,10.1862097304455],[47.8405528286302,10.193005424749],[47.8390313694046,10.1917646299461],[47.8392803525308,10.1873920558355],[47.8381726369393,10.1830478646461],[47.8368898774774,10.1835038211803],[47.835300861046,10.1731923522993],[47.8332568535889,10.1727817735],[47.8324807560469,10.1695255925791],[47.8291150405103,10.1692682577194],[47.828575498673,10.1631395793143],[47.8257481326566,10.1618772830597],[47.8250911179868,10.1597684335611],[47.8265917532199,10.1581412051646],[47.8254939598091,10.1497018717682],[47.823636929289,10.1542553099433],[47.8215893358692,10.1534192485899],[47.8200497779258,10.1319530589209],[47.8225082313929,10.1311926111409],[47.8228453729473,10.1253799615592],[47.8269296210009,10.1236948173622],[47.8293037384982,10.1179073361863],[47.8400156423578,10.1102893656358],[47.8423574163774,10.1027691505388],[47.8433805354578,10.1021880546288],[47.847120205803,10.1100134076063],[47.8530485225295,10.1074529730458],[47.8519041676391,10.1038606420399],[47.8451364333922,10.0995215976345],[47.8483160406993,10.0970535378549],[47.8438986466869,10.0941111033697],[47.8444719507419,10.0924261114972],[47.8482930942367,10.0957631641838],[47.8512735701129,10.0951287072088],[47.8526710298023,10.100637217516],[47.8538759528795,10.0968144233043],[47.8553242695085,10.0979464040741],[47.8536730824712,10.1021104694783],[47.8554177858564,10.1015873021309],[47.8563572140497,10.1054260031283],[47.8600805776428,10.10379089024],[47.8643485576218,10.1054664887225],[47.8655603919558,10.1022805021725]]};

interface Landkreisgrenze {
    Border: { Lat: number, Lon: number }[];
}

var Landkreisgrenzen: Landkreisgrenze[] = [
    {
        Border: BorderUnterallgaeu1.Values.map(v => { return { Lat: v[0], Lon: v[1] };})
    },
    {
        Border: BorderUnterallgaeu2.Values.map(v => { return { Lat: v[0], Lon: v[1] };})
    }
]

class MuaMap extends HTMLElement {
    
    connectedCallback() {
        let root = this.attachShadow({ mode: 'open' })
        root.append(template.content.cloneNode(true))

        this.initMap(root.getElementById('map'))


    }

    async initMap(mapElement: HTMLElement) {

        let {default: ol} = await import('../../libs/openlayers/v6.13.0-dist/ol');

        function labelStyleFunc(title: string, cluster: boolean) {
            let text = new ol.style.Text({
                font: "600 14px system-ui, sans-serif",
                fill: new ol.style.Fill({ color: 'white' }),
                backgroundFill: new ol.style.Fill({ color: 'black' }),
                padding: [2, 8, 2, 8],
                text: title,
            });

            return new ol.style.Style({
                text: text
            });;
        }

        var mitgliederSource = new ol.source.Vector();
        var mitgliederBorderSource = new ol.source.Vector();

        for (let m of Mitglieder) {
            var feature = new ol.Feature(m);
            var coords = ol.proj.fromLonLat([m.Lon, m.Lat]);
            feature.setGeometry(new ol.geom.Point(coords));
            mitgliederSource.addFeature(feature);

            for (let b of m.Borders) {
                var featureBoundary = new ol.Feature();
                var borderM = b.map(v => ol.proj.fromLonLat([v.Lon, v.Lat]));
                featureBoundary.setGeometry(new ol.geom.Polygon([borderM]))
                mitgliederBorderSource.addFeature(featureBoundary);
            }
        }

        var landkreisBorderSource = new ol.source.Vector();
        for (let l of Landkreisgrenzen) {
            var feature = new ol.Feature();
            var borderL = l.Border.map(v => ol.proj.fromLonLat([v.Lon, v.Lat]));
            feature.setGeometry(new ol.geom.Polygon([borderL]))
            landkreisBorderSource.addFeature(feature);
        }

        const mitgliederClusterSource = new ol.source.Cluster({
            distance: 36,
            minDistance: 0,
            source: mitgliederSource, 
        });

        var layerMap = new ol.layer.Tile({ source: new ol.source.OSM() })
        var layerMitglieder = new ol.layer.Vector({
            source: mitgliederClusterSource,
            style: (f: any) => {
                const clusterSize = f.get('features').length;
                if (clusterSize > 1) {
                    
                    return labelStyleFunc(`(${clusterSize})`, true);
                }
                let m = f.get('features')[0].getProperties() as Mitglied;
                return labelStyleFunc(m.Name, false);
            },
        });
        var layerMitgliederBorder = new ol.layer.Vector({
            source: mitgliederBorderSource,
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'black',
                    width: 2,
                }),
                fill: new ol.style.Fill({
                    color: '#00000020',
                }),
            }),
        });

        var layerLandkreisBorder = new ol.layer.Vector({
            source: landkreisBorderSource,
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'gray',
                    width: 2,
                }),
            }),
        });



        var view = new ol.View();

        var map = new ol.Map({
            target: mapElement,
            layers: [
                layerMap,
                layerLandkreisBorder,
                layerMitgliederBorder,
                layerMitglieder,
            ],
            view: view,
        });

        view.fit(mitgliederSource.getExtent(), { padding: [16, 16, 16, 16] })

    }
}

customElements.define('mua-map', MuaMap);

