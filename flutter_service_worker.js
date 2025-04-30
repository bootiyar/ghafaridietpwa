'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ce9e5c78fd33af4204dbdc89df45e5b1",
"version.json": "0c28d4b568e6e0aba7e8bc681692808f",
"splash/img/light-2x.png": "357a7b1e3965de2e36f780a037bfe23a",
"splash/img/dark-4x.png": "f1031086bb3de32bdb4f9d00ec3ea392",
"splash/img/light-3x.png": "a78ee2572315cae232fc8d7702b66463",
"splash/img/dark-3x.png": "a78ee2572315cae232fc8d7702b66463",
"splash/img/light-4x.png": "f1031086bb3de32bdb4f9d00ec3ea392",
"splash/img/dark-2x.png": "357a7b1e3965de2e36f780a037bfe23a",
"splash/img/dark-1x.png": "79e676c81406645789561dac8165198f",
"splash/img/light-1x.png": "79e676c81406645789561dac8165198f",
"index.html": "7c6cb4e1fed38050a17ea585e5136a9b",
"/": "7c6cb4e1fed38050a17ea585e5136a9b",
"main.dart.js": "a9ca0659d05f7bdedfd5ae37882d62b2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "1c19ee66c4663d1e11ff22f5d14bf634",
"icons/favicon-16x16.png": "a2b8f949495b958aa6308c9de513036c",
"icons/favicon.ico": "86102ebdfbb06a90e4044850f1488b46",
"icons/apple-icon.png": "11ee54017eb6e964fb69fd9e79693d12",
"icons/apple-icon-144x144.png": "309c6253accc5ae8ade6aeb19559cd7c",
"icons/android-icon-192x192.png": "9d3eb2267ed43e3dbe3f0be9855ff5bf",
"icons/apple-icon-precomposed.png": "11ee54017eb6e964fb69fd9e79693d12",
"icons/apple-icon-114x114.png": "7e5c40919f8f0dd9fd4b16f134e3f143",
"icons/ms-icon-310x310.png": "ce06d3048a3ecf0abc336ee0081e3b35",
"icons/Icon-192.png": "da6e147972b8e60294f4991d89a147f0",
"icons/Icon-maskable-192.png": "da6e147972b8e60294f4991d89a147f0",
"icons/ms-icon-144x144.png": "309c6253accc5ae8ade6aeb19559cd7c",
"icons/apple-icon-57x57.png": "38e9b57a73fda83cf7ad232b146da8dd",
"icons/apple-icon-152x152.png": "65e0b67d25718b578681706ddfe95930",
"icons/ms-icon-150x150.png": "91019c41855ef3679cee31a55360ee50",
"icons/android-icon-72x72.png": "ac9a672000fbeded0207568b691e942e",
"icons/android-icon-96x96.png": "37a3e839416fe4f09cdbf421e64b7a1c",
"icons/android-icon-36x36.png": "1706e639d4ba312c4a74bcc12b61de02",
"icons/apple-icon-180x180.png": "c657395936f580845a2eddb599e126d3",
"icons/favicon-96x96.png": "454cb8238ab788bd886e25105364c6ee",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "48d77c01fffded1e8c53e1660bbc6e50",
"icons/apple-icon-76x76.png": "c971982a2cceeeab2568af2fcc6e13a9",
"icons/apple-icon-60x60.png": "accac06d8a3d7367be2dbfdae764b990",
"icons/Icon-maskable-512.png": "cee52642a530f79e26eb798778dd032f",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "5fea635bdeb2939d4b369d5e421131e6",
"icons/apple-icon-72x72.png": "ac9a672000fbeded0207568b691e942e",
"icons/apple-icon-120x120.png": "700c59bb4de98413ed32d2e951aefaba",
"icons/Icon-512.png": "cee52642a530f79e26eb798778dd032f",
"icons/favicon-32x32.png": "e16a8082954b81c43b527617bdda65f3",
"icons/ms-icon-70x70.png": "61b13c7a8729b21026fd11986aa1611f",
"manifest.json": "5f683312c739ea6be8dea3b4714e2fec",
"assets/AssetManifest.json": "afe660d16645790ec58be03acad5d477",
"assets/NOTICES": "f72cdba1be7137219a18892b8d7cba47",
"assets/FontManifest.json": "c92dca38842ee3359273454b3a96ccd3",
"assets/AssetManifest.bin.json": "e49db31d25b1b54a79448a4e568ce62c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c3f7b208423c7a19c38a633642e66473",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/anim/error.json": "ef86708063b869ef7c06449458b55f3f",
"assets/assets/anim/search.json": "048643f325d96e566867ed11fac2e2c8",
"assets/assets/anim/loading.json": "2b34b752b708537640ac6bd372fd2070",
"assets/assets/anim/diet.json": "6c2fdbfa9ca84d81f87b6dcb77a3cff0",
"assets/assets/anim/_developing.json": "10c3073e2bae766e3e2159361918c91a",
"assets/assets/anim/timer.json": "9e19a5b10afd2cd1d3fdf4c135611360",
"assets/assets/flags/gb-eng.webp": "7bd8b485a48612c1171640e1b474426c",
"assets/assets/flags/ki.webp": "8a3de9bfe93b1661bb077f41f44c2c6a",
"assets/assets/flags/sv.webp": "6132a577484dd6390e917c9d724961f9",
"assets/assets/flags/ag.webp": "88ace31349a0167f3a4416edd9950e15",
"assets/assets/flags/mq.webp": "c75a347a028d6bd7b00e948eb6e01631",
"assets/assets/flags/th.webp": "b67478031cfa1655d2e2af1707c9311f",
"assets/assets/flags/jo.webp": "e74b8ca336510a9edc41136db99a8113",
"assets/assets/flags/sc.webp": "af629300498845e13248cb59d8168171",
"assets/assets/flags/md.webp": "cd0b1ac0aa8624a536778951ea92a270",
"assets/assets/flags/ar.webp": "54090444575924b0187777213162e6db",
"assets/assets/flags/ck.webp": "77a65df6eb9e8d798a5c0f2b85bd1752",
"assets/assets/flags/xk.webp": "83b584099bc86640eea1d6172977cfd0",
"assets/assets/flags/ie.webp": "3a5e49bce186afd36fa96356888560ef",
"assets/assets/flags/es.webp": "c6672cd96b77853a41dcd01a8dbc5cbd",
"assets/assets/flags/re.webp": "9a39e3365ae9d2bfccf5be0174de263c",
"assets/assets/flags/lb.webp": "c09330b6e75b64696639f2e5dfcbf937",
"assets/assets/flags/bm.webp": "d1df0f2996f4d73122fcb2c7ed00f3d3",
"assets/assets/flags/gs.webp": "9f54fbc5761353c1468e53dc6997e205",
"assets/assets/flags/ke.webp": "99be5efbbe5e45f1b1b7b3b622be0a98",
"assets/assets/flags/yt.webp": "3101416d3d821ec7acbe43b46a92beda",
"assets/assets/flags/bt.webp": "daeff8d885981c5916f6bc2bb3fa05b1",
"assets/assets/flags/pe.webp": "9cd8bee1f3c5c7d47f267576d745dc9b",
"assets/assets/flags/cr.webp": "3db15b87ed1486e758906c27e55b3d2b",
"assets/assets/flags/sz.webp": "0ccfa869def78e3b1034378e0eba59ee",
"assets/assets/flags/td.webp": "208e7b2717d4bd001ae07d1c41d823b6",
"assets/assets/flags/mh.webp": "fe3e15c6e6fe4cd53207b16cac9ace38",
"assets/assets/flags/cg.webp": "bc6df13e4944d6a0378467f024db35e0",
"assets/assets/flags/so.webp": "7278027ac2a0f2b8640c332673a31563",
"assets/assets/flags/kp.webp": "ee5acaf23fd70bfce6be913ed8d3a90a",
"assets/assets/flags/gf.webp": "634abb0a107dfaa1d250d5e690ef6c78",
"assets/assets/flags/ba.webp": "4f858f8355668f352e2e1c99fbf9a39c",
"assets/assets/flags/gg.webp": "19ce8db3799461ac831bae77c580d5db",
"assets/assets/flags/vi.webp": "d9e1a7c17deb448e45e8e821a98c0ede",
"assets/assets/flags/hn.webp": "b35776b6e5ade672ad3cb47cc3e9f65f",
"assets/assets/flags/sn.webp": "c0fa20d6e9cd90015082664ed3e7f5ee",
"assets/assets/flags/cf.webp": "1fcbba735b3c31a32891152a5a5fed8d",
"assets/assets/flags/dm.webp": "ff66abf2a80b25c7f3b38ce515f71ed8",
"assets/assets/flags/nc.webp": "9a39e3365ae9d2bfccf5be0174de263c",
"assets/assets/flags/gr.webp": "fafcf0f47c3187169992790b2ba68b4c",
"assets/assets/flags/nz.webp": "7167337e6e75e1077cb814da6c7277f4",
"assets/assets/flags/lc.webp": "04ec91e8acdb169e6bf0808d26940f2a",
"assets/assets/flags/bl.webp": "c75a347a028d6bd7b00e948eb6e01631",
"assets/assets/flags/id.webp": "5e400e3852947698dbdbb98b788930f7",
"assets/assets/flags/er.webp": "26338738999c3575dbebecbd563648f2",
"assets/assets/flags/uz.webp": "f71d4526ce02bd126fae9c2801a1f75e",
"assets/assets/flags/fm.webp": "bd4c7830f0f515c849ce079c62ff0780",
"assets/assets/flags/ve.webp": "cb0a054bfac14a497a34ca29bf5f16ca",
"assets/assets/flags/me.webp": "9a482a3945b5b155fcb8e9ee9c080c24",
"assets/assets/flags/as.webp": "9494532e314c937e5eebfe87dc485f9a",
"assets/assets/flags/sb.webp": "8cee3af6d0805744ea3bdc6d71dcb1c7",
"assets/assets/flags/af.webp": "b2790147625a607a91aaecca5d9325b4",
"assets/assets/flags/mp.webp": "4020fee28646b4649cfb9c990fab0bc2",
"assets/assets/flags/by.webp": "f4655f669089d70365ce6df910c6c3b5",
"assets/assets/flags/no.webp": "12e8ce9b0fc489bf3d2d04a0f42329ce",
"assets/assets/flags/lv.webp": "a9f4ccce71cf25c1ec0d16606fe8c4ae",
"assets/assets/flags/ph.webp": "4f4ac2c4120e0ca286df65e825b7495a",
"assets/assets/flags/eg.webp": "22445dc0e80a5b546f821cffd3d91b19",
"assets/assets/flags/iq.webp": "1cc82e8a87a1e09d104bf82db22b0a89",
"assets/assets/flags/kh.webp": "ce9eb1634d6720c92e36032ad2804165",
"assets/assets/flags/gu.webp": "9ec7dddbd294a5c77866b1a792f41688",
"assets/assets/flags/br.webp": "95370f325cb9f9117c4b1a695d54f0a3",
"assets/assets/flags/am.webp": "f119911bdb92dc6f0df0cfe3dd912ca7",
"assets/assets/flags/dj.webp": "4ce4fa90f539843afbb53c0be1f58845",
"assets/assets/flags/je.webp": "481eea2afcdac56aaabde8faa2f84a5c",
"assets/assets/flags/zm.webp": "6759a310556e6758982b25cf6fafba11",
"assets/assets/flags/mn.webp": "c83f6c25c7658af1b4725f2f67266256",
"assets/assets/flags/ax.webp": "14d8662a60743b6af3935ee0c20dddc7",
"assets/assets/flags/ca.webp": "6fd7d11fe67ceb72881ed84c3b11665c",
"assets/assets/flags/si.webp": "29635d2a452d2c00b7a01207358d0750",
"assets/assets/flags/jp.webp": "0909f42aac64c47c722f5a792dbdde58",
"assets/assets/flags/tw.webp": "927ec05ef94aacae094f400a98cd61a2",
"assets/assets/flags/vn.webp": "6d92682cf7361ae2e676a194ea592939",
"assets/assets/flags/io.webp": "ab5b2552d21e927ef3a752fea97c331b",
"assets/assets/flags/bg.webp": "9e471ff1c612dd787cff08b7666dd216",
"assets/assets/flags/ro.webp": "1514ec3191724c877a76f7a583db1d6d",
"assets/assets/flags/gy.webp": "6f941ac51bec6aae34880439b039401b",
"assets/assets/flags/cx.webp": "7c05fca84bd8d9cfb4bb073d2189b1c0",
"assets/assets/flags/mw.webp": "6c03ccbc46ea9c3bde7a831eea8cbc3f",
"assets/assets/flags/tn.webp": "05775e6007a120def85e728f545d3496",
"assets/assets/flags/za.webp": "e8fff68d99eef9cdcf65a56cd366ab30",
"assets/assets/flags/se.webp": "fc788ccbca1376414a8e20686d003130",
"assets/assets/flags/cm.webp": "c50298b1871297b857c85f233582aa0a",
"assets/assets/flags/at.webp": "ef604b1c349513837b02a80ebe020f2f",
"assets/assets/flags/fj.webp": "ba1f5aae6ede5e32bc56f6290e43c53d",
"assets/assets/flags/kz.webp": "e015e5c70d82669777060cdee966b163",
"assets/assets/flags/gl.webp": "a43f250f0b2f2a257e74949f788bab88",
"assets/assets/flags/bq-bo.webp": "1f005ca4572b6c8a8c617ba5b62fd37f",
"assets/assets/flags/bj.webp": "86539cd7b8b613c9dbc916e84210d26b",
"assets/assets/flags/gm.webp": "6c31e7e0edb1355a9a8aa6a0962548e2",
"assets/assets/flags/et.webp": "26650b481fe2426fb7028aa0557b76bf",
"assets/assets/flags/fk.webp": "874e3a2fa676e7c8cc4969ee7c91e437",
"assets/assets/flags/vc.webp": "03fe3e264cc5402e5da730e30fd40e91",
"assets/assets/flags/tz.webp": "36bf2efd2f19c7c0b8a6b4a09d9c467d",
"assets/assets/flags/mc.webp": "026cda0ec5df406a45b8e9e1f0b501f6",
"assets/assets/flags/cl.webp": "8fcd0627c4f37e386c10189b749846b5",
"assets/assets/flags/au.webp": "4702d88b91dfd9f7da98e841df44cdad",
"assets/assets/flags/bq-sa.webp": "d8d7a2c74deeb25ae17e40705869ce8b",
"assets/assets/flags/sd.webp": "3c118f930db8a9e8fb6276f227be2e03",
"assets/assets/flags/to.webp": "00c6f0a630384abb9716ca7a76cf82eb",
"assets/assets/flags/cy.webp": "67ed16c263e5a5cbfae3e4193af76a64",
"assets/assets/flags/mv.webp": "295f8f09b5953533eab5e6315f62d0f6",
"assets/assets/flags/ni.webp": "f3d3654bf2af5db5468806539076d80e",
"assets/assets/flags/rw.webp": "2364d1f24b946a557b85ee5e54209d4f",
"assets/assets/flags/pn.webp": "0e6b51b57d4873c710f9f6ea387bba0f",
"assets/assets/flags/kn.webp": "b55810361811df283e4b726b7601af07",
"assets/assets/flags/pw.webp": "9ba56c147c49fe419bd2335065853cf3",
"assets/assets/flags/np.webp": "7e9d71d85ab06a97025e27a0a780114c",
"assets/assets/flags/li.webp": "72f2ba7d9c84ecd391f388b1a5e9c7f9",
"assets/assets/flags/bf.webp": "facfed11ea7ae9ca94257484fa9d8bfa",
"assets/assets/flags/in.webp": "6d0c5724eff6fff0a37cd573b358c1dd",
"assets/assets/flags/kw.webp": "689d8fb7e38eafc0605eb3cf35bb55b5",
"assets/assets/flags/ga.webp": "e449d78a07b4cd62af5df24d01b63ba7",
"assets/assets/flags/tv.webp": "0235997cf81d3abe6fe8ff0238f65de5",
"assets/assets/flags/sh.webp": "ebe2ea0d65e71cad33cae257849641d0",
"assets/assets/flags/mo.webp": "711000ceada54d14a880d674fefbaa15",
"assets/assets/flags/tc.webp": "0121e0c3ae066573884a7e9f76c39afc",
"assets/assets/flags/fr.webp": "c75a347a028d6bd7b00e948eb6e01631",
"assets/assets/flags/dk.webp": "ebef0845a588074b95742a7bf6bde662",
"assets/assets/flags/al.webp": "04935c2861bf27cee6bdd4174662de87",
"assets/assets/flags/cu.webp": "1a6c3a37ad37a6705b9e00f1ce11b73a",
"assets/assets/flags/mz.webp": "75e4fb23631ddf0d128144b8ecd28b83",
"assets/assets/flags/bs.webp": "0edf84978fa7e3390fc986ca535341fe",
"assets/assets/flags/ne.webp": "ef756f5dfaa94cfd4c9af6779758d854",
"assets/assets/flags/gb-wls.webp": "9671a24804ff990b4ae0aee367830cc1",
"assets/assets/flags/gt.webp": "3ca8d3493c5c39bd9d3a75c94c0b2c17",
"assets/assets/flags/pt.webp": "b994c084c60a66a9cf0a6b6e82af3d83",
"assets/assets/flags/be.webp": "3dfee7e6aae949ff128e31260dbabb71",
"assets/assets/flags/us.webp": "9bcaa27ccaff6e768557ddcca95609f2",
"assets/assets/flags/ye.webp": "dfb600a448137c4283156421a4be72c1",
"assets/assets/flags/gb.webp": "5cc0a6a49075ee0fd8e511aa61d5f885",
"assets/assets/flags/im.webp": "6e696939252561ea965ebbe568d65fdb",
"assets/assets/flags/hk.webp": "dcb31c5dd71fa3f653ea6e9dd9ba806c",
"assets/assets/flags/sk.webp": "36e7e170dedfcade99fbdff79ca8fbb6",
"assets/assets/flags/cc.webp": "8964c98b9e56e7b21e864773c7fd7a64",
"assets/assets/flags/az.webp": "636185b8f993710533236586dc617829",
"assets/assets/flags/ml.webp": "3777a52a29ae3f7b7207a255f0a3e0af",
"assets/assets/flags/my.webp": "597f05d3280843651e755e62db47b898",
"assets/assets/flags/cv.webp": "81afb1e7a278c108e3bf9fc82499944c",
"assets/assets/flags/ao.webp": "f23b22ef550b8088aefa991b748220de",
"assets/assets/flags/pa.webp": "02237fe83ed348110af0cf8ee8f9d7a4",
"assets/assets/flags/nf.webp": "9c47c8d35ea94a3ba43bfbcd4ee3fb5b",
"assets/assets/flags/gw.webp": "7c7c4185216a86f09992790138e32f0e",
"assets/assets/flags/bi.webp": "341e9477f0fc85885ceab47561abdda7",
"assets/assets/flags/gn.webp": "f99f73ac62c547d66bd4c19ff13b16bf",
"assets/assets/flags/wf.webp": "5046137cc3f58795a1279ad0fda4938b",
"assets/assets/flags/co.webp": "65be82f7fa7d21aad9e413dd7c08c9a3",
"assets/assets/flags/sg.webp": "51e4cc737c9bd9dba004c049b876fd16",
"assets/assets/flags/hr.webp": "187ed0217553a52eca3494d191896cd5",
"assets/assets/flags/tl.webp": "35bc20ea1a6ca3aca50a817b62d41cc3",
"assets/assets/flags/vu.webp": "9fe5ce36166041112197fd67cbf963fa",
"assets/assets/flags/mu.webp": "0ba0c8120f87c735b898338c83b5bd66",
"assets/assets/flags/cz.webp": "093892874bb0a51c976361d60898e136",
"assets/assets/flags/sr.webp": "135910dfe5629ca50b7d76e7dc16880f",
"assets/assets/flags/ls.webp": "d09176100cb8bdad8578322642a9e8c1",
"assets/assets/flags/pm.webp": "5046137cc3f58795a1279ad0fda4938b",
"assets/assets/flags/it.webp": "646c815d69fb385a646741524013b4da",
"assets/assets/flags/km.webp": "06d7a0c05967c627091fe76ee7b4869b",
"assets/assets/flags/ws.webp": "bd31080c80eb6cf749d9f717f216b693",
"assets/assets/flags/ec.webp": "4fbce686d35e284a561840e4b0d4836a",
"assets/assets/flags/pl.webp": "280317c3706d47387ea7a23f40405fa8",
"assets/assets/flags/ru.webp": "bf4431432b3894d142a93a59758f63f7",
"assets/assets/flags/lr.webp": "91ea897db300ffa85fa8a0472bdfb624",
"assets/assets/flags/ss.webp": "f9b79e3c4c432c2d2cab127df8c42247",
"assets/assets/flags/mt.webp": "309581b7829413e254d2c0be910e7a11",
"assets/assets/flags/om.webp": "efd02ead78d948343c6e01570aae20b0",
"assets/assets/flags/tm.webp": "f2c25f56e12f8de816245644dd89b58b",
"assets/assets/flags/de.webp": "3afb26276584760bd2d03c6c460e30a6",
"assets/assets/flags/aw.webp": "b5348015c4de146116cf65dbe90a8624",
"assets/assets/flags/cn.webp": "ed6412e2a2fb4fce036cdc0d267c2fd4",
"assets/assets/flags/ma.webp": "467cab1485d277007a5873f853dd2ac5",
"assets/assets/flags/va.webp": "26eb0329929b9c9a71a263e9dfef6e0c",
"assets/assets/flags/zw.webp": "891aa67edc58fa5f02496ccf6d578119",
"assets/assets/flags/fi.webp": "76ba738fdd7da2b5d0a9defb92fca106",
"assets/assets/flags/ky.webp": "6cdd986b3610109406300256a375bbd3",
"assets/assets/flags/py.webp": "0b67feddca40a799c3ada92dc8c7e3e9",
"assets/assets/flags/bh.webp": "1a4dd8654531cd702d5cd2d62a5788cf",
"assets/assets/flags/ug.webp": "12107525bdc669d166f45d1c952185cf",
"assets/assets/flags/ng.webp": "4a3988e77f1aaf7cc95ede2077342cd3",
"assets/assets/flags/mx.webp": "a21a75cb6c9b16fb0aea6f3535e23b11",
"assets/assets/flags/cw.webp": "41f9ac1048b73553541a527816a91677",
"assets/assets/flags/mm.webp": "d71d8e869d846422a471dfa61077ae33",
"assets/assets/flags/sj.webp": "12e8ce9b0fc489bf3d2d04a0f42329ce",
"assets/assets/flags/tt.webp": "8534508f2ef0b3b16754b42870266880",
"assets/assets/flags/gb-nir.webp": "5cc0a6a49075ee0fd8e511aa61d5f885",
"assets/assets/flags/il.webp": "202d15b6e7c352a0d96c924373797b5e",
"assets/assets/flags/bd.webp": "fb03896ca07045df8429e74fd61431b5",
"assets/assets/flags/lk.webp": "2cb6e708bed1f1c6b4f518f49a08ce46",
"assets/assets/flags/nr.webp": "b6db574d7c9f9b90e633e0451291211b",
"assets/assets/flags/bo.webp": "877d5ccf63f266214e7fa2b6e3775a76",
"assets/assets/flags/gh.webp": "16321feaf0db76ce51f1afe378c3fa55",
"assets/assets/flags/uy.webp": "355fe9bc6db2e84d9e2090130b0f779e",
"assets/assets/flags/ci.webp": "f51907517ca98ad1397ac4f201f566d9",
"assets/assets/flags/mf.webp": "c75a347a028d6bd7b00e948eb6e01631",
"assets/assets/flags/sa.webp": "9243921fc3fc061179066d2f53619e83",
"assets/assets/flags/ht.webp": "c63fbd7c59b30d795a0d764c38a21beb",
"assets/assets/flags/jm.webp": "d29d79f6590b6726c56fcb02ba64f496",
"assets/assets/flags/tj.webp": "109402c2adddf57447b46561cf49df6f",
"assets/assets/flags/ms.webp": "a3afbc1882cc69fbd6bc7ceb9fe6c22d",
"assets/assets/flags/gb-sct.webp": "006c05e2addf75ecb56c46d5f71c20f1",
"assets/assets/flags/ae.webp": "435e17990a5c5f9cb344b1be51a7a110",
"assets/assets/flags/st.webp": "d2ec0db720c05cdc3b38dcf106069fde",
"assets/assets/flags/lu.webp": "45364cc5813b5373b517eb2cdc28eb36",
"assets/assets/flags/nl.webp": "2f6eb566abd1deaf850354df6e75e081",
"assets/assets/flags/bz.webp": "3dfd2f643ed959c78dad5a65c1ae91cd",
"assets/assets/flags/pk.webp": "0c2844708f00d2922479803b491740e4",
"assets/assets/flags/ir.webp": "b842592f78b48a05a42a3e2c3bd97d11",
"assets/assets/flags/pr.webp": "c27a6cd0e1cec38534450e906bb781b1",
"assets/assets/flags/nu.webp": "c57798d38bb848676aa571953a924426",
"assets/assets/flags/gd.webp": "cde58911f94cf9236183401741aac3c7",
"assets/assets/flags/kr.webp": "d40e363d6cc8fd72b2a922a85ff922ca",
"assets/assets/flags/hm.webp": "4702d88b91dfd9f7da98e841df44cdad",
"assets/assets/flags/sm.webp": "213a1c7881baab326c1514b9bef765d8",
"assets/assets/flags/tf.webp": "68bc0c64ed8766503b190ef23fbd9128",
"assets/assets/flags/sx.webp": "f45e039560bf7ee564048ccf3beefe68",
"assets/assets/flags/qa.webp": "12fbf731a72e64c07bfa83e58e883f2d",
"assets/assets/flags/ai.webp": "6ca71dd2f8075fe0ae12f87a85c7ef27",
"assets/assets/flags/pg.webp": "4fd32b3e715f15af254b019d1e6db02b",
"assets/assets/flags/ly.webp": "31377152436de33e7641218f78238624",
"assets/assets/flags/bv.webp": "12e8ce9b0fc489bf3d2d04a0f42329ce",
"assets/assets/flags/kg.webp": "804acd32f84d8beea7511c2014c1c98a",
"assets/assets/flags/eh.webp": "5f108b43a973a0e8aa4472fd23226e4b",
"assets/assets/flags/gq.webp": "6f04b96f86914bb150cf3c7638ffe7d9",
"assets/assets/flags/gp.webp": "c75a347a028d6bd7b00e948eb6e01631",
"assets/assets/flags/ua.webp": "d4d77cd98ea493878ebc202788660598",
"assets/assets/flags/na.webp": "c3f81f78f30777ffc33318498c8cd194",
"assets/assets/flags/bw.webp": "dca186b436567c64411eb428ac207deb",
"assets/assets/flags/pf.webp": "da56158920257c637634c8e01e66bd93",
"assets/assets/flags/sy.webp": "9ac7b5bfc3bddbbbf5e91171086acbc8",
"assets/assets/flags/do.webp": "ff8ce0256b06daae75bb990fdd4c6c0a",
"assets/assets/flags/tg.webp": "96569c51f17b6ddf1ab11b5b02466606",
"assets/assets/flags/cd.webp": "25f36b4e3395ece3366b0636704560d7",
"assets/assets/flags/mk.webp": "782d5e1ffc0f5b3d58415f1a55daf3f2",
"assets/assets/flags/sl.webp": "e331ab369200ee6063e09a1b3950bd08",
"assets/assets/flags/dz.webp": "80bf910aa438aaeb6c5a1aee711ba018",
"assets/assets/flags/tr.webp": "6feedb4db13d6263dd3a7ac1cd95a585",
"assets/assets/flags/ge.webp": "26ec2172e712311157d02fe43f5e2202",
"assets/assets/flags/bb.webp": "f59477dcaf9d9dce53a255c1442b15ba",
"assets/assets/flags/ps.webp": "5591f805970a40cc704eb72e6a084ee8",
"assets/assets/flags/um.webp": "9bcaa27ccaff6e768557ddcca95609f2",
"assets/assets/flags/is.webp": "fede9bb6b26bfd1228a6bc3a2dd5a77b",
"assets/assets/flags/ee.webp": "66f19d0c883012de0a76cddf323ef118",
"assets/assets/flags/rs.webp": "c75e510f8bca8357706519b786c47826",
"assets/assets/flags/lt.webp": "9d05066fbf51f55debf188b078e3fe9f",
"assets/assets/flags/mr.webp": "741331fe9c527ed4e4860e19af6e514c",
"assets/assets/flags/ad.webp": "56a9d64fc405e12d829f93537d4b5175",
"assets/assets/flags/tk.webp": "d28f6edd87dafd04cd23c01c39af9d76",
"assets/assets/flags/hu.webp": "d32c16dd28cde8397524a56025bd3761",
"assets/assets/flags/bq-se.webp": "a9568445dae24b1656ffd39d45ee15e2",
"assets/assets/flags/ch.webp": "d14f1b1499c48c0098d792daa7030ca5",
"assets/assets/flags/aq.webp": "34315c486afb7dbcfaab1a10363e38d0",
"assets/assets/flags/mg.webp": "5e215ed14153fc98b9692818deb45c50",
"assets/assets/flags/vg.webp": "a3afbc1882cc69fbd6bc7ceb9fe6c22d",
"assets/assets/flags/fo.webp": "ad97d274cc3f393627f667fe44564daa",
"assets/assets/flags/gi.webp": "3f4788f388f850146d853855253d26c2",
"assets/assets/flags/bn.webp": "d41ff6575e702f75d4c3fb39538d3699",
"assets/assets/flags/la.webp": "41a5541be22ff1e1d354f809cf7b4b55",
"assets/assets/image/calendar_1.png": "3ef9fdc4e1de1c33db4fe7e080aecef2",
"assets/assets/image/health_ios.png": "ca5a0cf83d5b036daa0f0882004abbe7",
"assets/assets/image/intro_1.svg": "e30e8313640ce5afe52e4f688809d09f",
"assets/assets/image/leaderboard.png": "a8003308d729ebd38278f4c11615478b",
"assets/assets/image/man_woman.png": "97dfe8e9f212b7c029fa68003941e0ce",
"assets/assets/image/gift1.svg": "fa9e449ae94a776019844c9206d827e5",
"assets/assets/image/done_check.svg": "1c0e3fa4951abd8eaacef7949a0cd076",
"assets/assets/image/health_android.png": "0cf531a5ca6e371e4f66f001107aad5e",
"assets/assets/image/pointer.png": "69d9576d47ac1641b12191da08ea03e3",
"assets/assets/image/intro_3.png": "679de6eb06f9a00f9af926344b06d1b8",
"assets/assets/image/check_1.png": "2d2a1551bec5a56234532a6117ed32db",
"assets/assets/image/cvs.png": "094bf4f5313d26c2c8a3246a504af89c",
"assets/assets/image/intro_2.png": "ca4dd0b178ed4a0874b41b611bca116f",
"assets/assets/image/renewal_back.png": "76f38a7eb437d70b596df93c6667371c",
"assets/assets/image/placeholder.png": "57bb2fb756ff35d0f0f5036aec5a2177",
"assets/assets/image/period.svg": "501024adeb4f4b5740a29cea4f6f38e6",
"assets/assets/image/logo/logo_title.svg": "f33db9dd3d9637e7e124b131c448c9ac",
"assets/assets/image/logo/logo_shadow.svg": "8627f2c49d26f92f4e27b92540bede1f",
"assets/assets/image/logo/logo_en.jpg": "b4ed896cd326625a47bd31bcc907fd77",
"assets/assets/image/logo/logo.png": "11c39289a46b97ad940e67c4114ff6ee",
"assets/assets/image/logo/logo_svg.svg": "be149bfb1974a4da59f56cf833a46da6",
"assets/assets/image/grid_blocks.png": "2efcda8bb7da2c1e6dda6192c47497e9",
"assets/assets/image/exercise.png": "1248731ce832921b9a942b07612c5e3e",
"assets/assets/image/finish.svg": "001ad955487d2007b0475e696d3487a6",
"assets/assets/image/icon/emoji3.png": "129324095408f6bc3b08c2318e5f4748",
"assets/assets/image/icon/left_circle.svg": "07c967b9e0f2aed118707280ab1147e1",
"assets/assets/image/icon/age_group.svg": "fb49f4b0c338d18aea6c164366d3276d",
"assets/assets/image/icon/dinner.svg": "5b64d5bf7a162a6be60ef041f9bfe35f",
"assets/assets/image/icon/medal1.svg": "4676abc1398f106dce23071a5e64dd5d",
"assets/assets/image/icon/heart_fill.svg": "f0d6ceafb98c39b43d76ea455c9a7029",
"assets/assets/image/icon/emoji2.png": "149d7e15a85d69284ea45429d6e6776b",
"assets/assets/image/icon/fit.svg": "bf6d6f5e8f46d70a987d605354cee94e",
"assets/assets/image/icon/reply.svg": "07a284257630a1c59fa17d35e79f173b",
"assets/assets/image/icon/like1.svg": "49f789fabd85eb51d03e82cb1948a5aa",
"assets/assets/image/icon/medal3.svg": "70ea9fe6a5d673d420a3bd51ed52f6c1",
"assets/assets/image/icon/medal2.svg": "1a8a59279afbd87fb9f4a986215c7aac",
"assets/assets/image/icon/user.svg": "22222ce73f2a3a168b6e8c6b215fc621",
"assets/assets/image/icon/home.svg": "1f4b0562af38bc50f453da9b51fc772c",
"assets/assets/image/icon/emoji1.png": "17a84d2992f0051af90e0e50fb656fd4",
"assets/assets/image/icon/emoji5.png": "85980017965917bd1a98a041967645f6",
"assets/assets/image/icon/glass1.svg": "6555476b3de76d505901f33de72a5c2c",
"assets/assets/image/icon/logout.svg": "268665b0c27e93b984455d26d25ca7dc",
"assets/assets/image/icon/heart_rate.svg": "1f9a9736fc64a753fdded929b4dd5315",
"assets/assets/image/icon/rotate.svg": "4d226f4400a55065b01269fb8d2795dd",
"assets/assets/image/icon/down.svg": "7f978f67e7df3a6ff71b317b19b32b4a",
"assets/assets/image/icon/left1.svg": "fb5c493ab8b20b05cef2bca2256b1e78",
"assets/assets/image/icon/crop.svg": "471999a1d532d68c4c784aa8c7c78b54",
"assets/assets/image/icon/credit_card.svg": "7e759709d333ccd3355fec23d0ed1e87",
"assets/assets/image/icon/emoji4.png": "f16e6038cf9aa04849c830afd33120e1",
"assets/assets/image/icon/calories1.svg": "023503cf07a8584f520bf36ba90f2861",
"assets/assets/image/icon/chips.svg": "1b2a3aa8ab80a883fef14e065f365f14",
"assets/assets/image/icon/energy.svg": "da59d63cec89de73682af0d26a4a7d1d",
"assets/assets/image/icon/lock.svg": "f126a272f17a9039e3f335c4e5cc069d",
"assets/assets/image/icon/dislike.svg": "c47a8071eba45aabea59ca856a3b66cc",
"assets/assets/image/icon/arrow_left.svg": "a06de3658c081b127b5ec5a129b83800",
"assets/assets/image/icon/link.svg": "0798ad40d0e975449f9ee7d76dbdb113",
"assets/assets/image/icon/store.svg": "106a620bf1f3bbe74e3c1a030b9ce8ad",
"assets/assets/image/icon/period_calendar.svg": "656a8269d05fd50f1c750f1e7ac71e12",
"assets/assets/image/icon/add_square.svg": "04dbe1cd7c4d42621dc18ec642fe8a3e",
"assets/assets/image/icon/gallery.svg": "30e444e5036747c474cf9d69b17cc18d",
"assets/assets/image/icon/close_circle.svg": "f4247d2a152de2ca0a44a48932711f13",
"assets/assets/image/icon/bell.svg": "cba1cffe5d3ced6c6099ab2e53a66094",
"assets/assets/image/icon/tick_fill_circle.svg": "0b55de405b36fa009ba7fac9b4c612b3",
"assets/assets/image/icon/plus.svg": "dca275b52768e33260b1ded4daeb6dc7",
"assets/assets/image/icon/check.svg": "f8ae424ea5a3729d1f7d596cf8570dba",
"assets/assets/image/icon/ranking.svg": "3add9091592e343885fdd61f7d78fcbc",
"assets/assets/image/icon/warning.svg": "b10c08df5180d5684d13a632c8aac9ed",
"assets/assets/image/icon/weight_scale.svg": "2682152795c349e7ebddbf7d09d40008",
"assets/assets/image/icon/connection.svg": "08c0287dd8dc93b23e044d80ee2efcf6",
"assets/assets/image/icon/info.svg": "51c32ebd5676db8b3af6269ce3c93ffd",
"assets/assets/image/icon/add.svg": "4628c8a996434833099cab88eb3bdb82",
"assets/assets/image/icon/close.svg": "e57924ed488b9fe65526f20149f520db",
"assets/assets/image/icon/copy.svg": "a71655d358e9b2174b2771987fe4b7c5",
"assets/assets/image/icon/reload.svg": "d165a4f1c23eac163f5eee8889e60350",
"assets/assets/image/icon/unselected_radio.svg": "a86681309e4cf0b3fb7fc8ec9120319d",
"assets/assets/image/icon/lamp.svg": "2b49fee9e66d13fca20d1725e1951e71",
"assets/assets/image/icon/right.svg": "d9f9e85aa0cf0e94eee000a8528e8836",
"assets/assets/image/icon/lock_border.svg": "c951670d9703fa09a9c8b6a3624c4f27",
"assets/assets/image/icon/tick_circle.svg": "a49cd18c53131c8836cbfda589694cf8",
"assets/assets/image/icon/messages.svg": "a1eede3825930946218da52243e224c3",
"assets/assets/image/icon/play.svg": "d5902e5291bd7db52e141fa33de7dee9",
"assets/assets/image/icon/chat.svg": "4055aa5c40d350011536d03598731184",
"assets/assets/image/icon/notification.svg": "eff38395072272f9bc4c0f47672d2451",
"assets/assets/image/icon/diagram.svg": "db3afd9bdc20df070ca598f698859ead",
"assets/assets/image/icon/send.svg": "1f0b84dd0e0ee45f98a16b5aec11ebe2",
"assets/assets/image/icon/facebook.svg": "5adfb772f9d5c25403fdc458643af17a",
"assets/assets/image/icon/breakfast.svg": "7cbaa0b8a7a778b862bea07d0ac1a367",
"assets/assets/image/icon/dumbbells.svg": "6cdf6129df0e8045410be7900a654e8a",
"assets/assets/image/icon/google.svg": "bcf9430b124f8a3e3b4bb3322bfdd922",
"assets/assets/image/icon/plate.svg": "2943f565feb65ab12a0fe78eb9431913",
"assets/assets/image/icon/glass.svg": "87281898d68e7185c46af833cc10b124",
"assets/assets/image/icon/google_health.svg": "24f6d356805ac357333be89d481fc05d",
"assets/assets/image/icon/star.svg": "4d5e697ed40f329e6a5b90ab972d54c7",
"assets/assets/image/icon/nutrition.svg": "2c2f07a0c59dbeaa48f817b3f25dff53",
"assets/assets/image/icon/edit.svg": "361fedd12ef34fa9950a09f4a694038b",
"assets/assets/image/icon/selected_radio.svg": "cc57aea1b36331d8a96e75ac7d11c204",
"assets/assets/image/icon/height.svg": "9b402240b719e906bb54bfea1e585c5b",
"assets/assets/image/icon/clock.svg": "f96310ea7039efca87ec74f58478351e",
"assets/assets/image/icon/success.svg": "1f0acda93772e28acd6fd6803026dfbe",
"assets/assets/image/icon/calories.svg": "4048fd82901e2bf6df90528c1d5923d4",
"assets/assets/image/icon/share.svg": "cebcafbe68ac56c086841ecd2dc52651",
"assets/assets/image/icon/water.svg": "cff965ef02e049a80cf1752abfcc3788",
"assets/assets/image/icon/calendar.svg": "2f2e77f5d19503fc4c6a6fb80e656367",
"assets/assets/image/icon/food_menu.svg": "2659a12e2e5d97c9c18dd0f3ad790349",
"assets/assets/image/icon/rice.svg": "0c03fc42ee1c2149d6b6dfac062be77c",
"assets/assets/image/icon/error.svg": "73ef21e7215708760a1c5cccd92d03d1",
"assets/assets/image/icon/avatar.svg": "9bef623dd29c34667b999c94dc1a848f",
"assets/assets/image/icon/left.svg": "ca94efb841330ebcf23c4c49dbcb4d18",
"assets/assets/image/icon/timer.svg": "e32fd7917e1ae78785d14dffbd98d7b4",
"assets/assets/image/icon/run.svg": "5850fa9eaef4c5c22e806e3681039db3",
"assets/assets/image/icon/cook.svg": "6fd3847c3f5b0a87d9f00a707ace5f06",
"assets/assets/image/icon/delete_form.svg": "1fd11df484e4f40f1b8db6bc49b5e757",
"assets/assets/image/quote.svg": "8b6c8692a992058274ff45545fdacbd7",
"assets/assets/image/half_circle_2.svg": "4f7863189bebba9c8f14260de9136b6c",
"assets/assets/image/weighter.svg": "aedbe26f51e473fe4b22c1610abcfb1e",
"assets/assets/image/fit11.png": "480f1019f3736488a6073ded968bd3fd",
"assets/assets/image/half_circle_1.svg": "e15b8c462add43ceb425b4d116798ad3",
"assets/assets/image/shopping_basket.svg": "a1d48a7e6ca372d5f3562cee6dd809ca",
"assets/assets/image/bg.png": "fd5399fb5b468866e401f2bf49acc3f9",
"assets/assets/fonts/dana_light.ttf": "a50fc4365bc5f3b9a160e707f9f1a2b4",
"assets/assets/fonts/dana_bold.ttf": "87d824745e8855753d71bf9637a45891",
"assets/assets/fonts/dana_regular.ttf": "46dc609d47a260b0f3676f6a147db905",
"assets/assets/fonts/dana_medium.ttf": "82abca3cbd2d19c236a673f85778ac78",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
