if(JClicObject){JClicObject.projectFiles["sint03.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"sint03\" version=\"0.1.3\"><settings><title>Sint03<\/title><revision description=\"created\" date=\"8/13/22\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"rijmen\" delay=\"1\" /><item name=\"groot naar klein\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"patroon\" delay=\"1\" /><item name=\"tellen\" delay=\"1\" /><\/sequence><activities><activity class=\"@associations.SimpleAssociation\" name=\"rijmen\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Rijmen: Wat rijmt er op?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondsint.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"SINTapplause.mp3\" /><sound id=\"finishedOk\" file=\"SINTapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell txtAlign=\"right,bottom\" image=\"sint rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>SINT<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"paard rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>PAARD<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"piet rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>PIET<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"zak rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>ZAK<\/p><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell txtAlign=\"right,bottom\" image=\"wind rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>WIND<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"taart rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>TAART<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"friet rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>FRIET<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"slak rijm.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><p>SLAK<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"groot naar klein\" code=\"\"><description /><messages><cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" avoidOverlapping=\"true\" image=\"picto groot naar klein .jpg\" type=\"initial\"><style><font family=\"Arial\" size=\"72\" /><\/style><p>van GROOT naar klein<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondsint.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"SINTapplause.mp3\" /><sound id=\"finishedOk\" file=\"SINTapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"5\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\"><style /><shaper class=\"@Rectangular\" cols=\"5\" rows=\"1\" /><cell image=\"groot .jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleiner  .jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"klein  .jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleinst  .jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleinst2  .jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AUB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondsint.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"SINTapplause.mp3\" /><sound id=\"finishedOk\" file=\"SINTapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"4\" cols=\"3\" border=\"true\" image=\"puzzel 3.jpg\"><style borderStroke=\"1.7\" markerStroke=\"2.7\"><color border=\"0x66FF00\" /><\/style><shaper class=\"@TriangularJigSaw\" cols=\"3\" rows=\"4\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.ComplexAssociation\" name=\"patroon\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Vul het patroon aan..<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondsint.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"SINTapplause.mp3\" /><sound id=\"finishedOk\" file=\"SINTapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"3\" cols=\"1\" cellWidth=\"874.0\" cellHeight=\"241.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"1\" rows=\"3\" /><cell id=\"0\" image=\"patr  5 .jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell id=\"1\" image=\"patr 3.jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell id=\"2\" image=\"patr 4.jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"4\" cols=\"1\" cellWidth=\"261.0\" cellHeight=\"187.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"1\" rows=\"4\" /><cell image=\"patr  5 rood .jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"patr  geel .jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"patr  groenn .jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"patr  gblauw .jpg\"><style borderStroke=\"0.7\" markerStroke=\"2.7\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"tellen\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Hoeveel wortels eet het paard van Sinterklaas?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondsint.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"SINTapplause.mp3\" /><sound id=\"finishedOk\" file=\"SINTapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"7\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"7\" rows=\"1\" /><cell image=\"wortels1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"wortels2.jpg\" /><cell image=\"wortels3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"wortels4.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"wortels5.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"wortels6jpg.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"wortels7.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"1\" cols=\"7\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"7\" rows=\"1\" /><cell txtAlign=\"left,middle\" imgAlign=\"right,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>1<\/p><\/cell><cell txtAlign=\"left,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>2<\/p><\/cell><cell txtAlign=\"left,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>3<\/p><\/cell><cell txtAlign=\"left,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>4<\/p><\/cell><cell txtAlign=\"left,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>5<\/p><\/cell><cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>6<\/p><\/cell><cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" image=\"paardcijfer.jpg\"><style><font family=\"Arial\" size=\"72\" /><color background=\"0xFFFFFF\" /><\/style><p>7<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><\/activities><mediaBag><media name=\"achtergrondsint.jpg\" file=\"achtergrondsint.jpg\" /><media name=\"friet rijm.jpg\" file=\"friet_rijm.jpg\" /><media name=\"groot .jpg\" file=\"groot_.jpg\" /><media name=\"klein  .jpg\" file=\"klein__.jpg\" /><media name=\"kleiner  .jpg\" file=\"kleiner__.jpg\" /><media name=\"kleinst  .jpg\" file=\"kleinst__.jpg\" /><media name=\"kleinst2  .jpg\" file=\"kleinst2__.jpg\" /><media name=\"paard rijm.jpg\" file=\"paard_rijm.jpg\" /><media name=\"paardcijfer.jpg\" file=\"paardcijfer.jpg\" /><media name=\"patr  5 .jpg\" file=\"patr__5_.jpg\" /><media name=\"patr  5 rood .jpg\" file=\"patr__5_rood_.jpg\" /><media name=\"patr  gblauw .jpg\" file=\"patr__gblauw_.jpg\" /><media name=\"patr  geel .jpg\" file=\"patr__geel_.jpg\" /><media name=\"patr  groenn .jpg\" file=\"patr__groenn_.jpg\" /><media name=\"patr 3.jpg\" file=\"patr_3.jpg\" /><media name=\"patr 4.jpg\" file=\"patr_4.jpg\" /><media name=\"picto groot naar klein .jpg\" file=\"picto_groot_naar_klein_.jpg\" /><media name=\"piet rijm.jpg\" file=\"piet_rijm.jpg\" /><media name=\"puzzel 3.jpg\" file=\"puzzel_3.jpg\" /><media name=\"sint rijm.jpg\" file=\"sint_rijm.jpg\" /><media name=\"slak rijm.jpg\" file=\"slak_rijm.jpg\" /><media name=\"taart rijm.jpg\" file=\"taart_rijm.jpg\" /><media name=\"wind rijm.jpg\" file=\"wind_rijm.jpg\" /><media name=\"wortels1.jpg\" file=\"wortels1.jpg\" /><media name=\"wortels2.jpg\" file=\"wortels2.jpg\" /><media name=\"wortels3.jpg\" file=\"wortels3.jpg\" /><media name=\"wortels4.jpg\" file=\"wortels4.jpg\" /><media name=\"wortels5.jpg\" file=\"wortels5.jpg\" /><media name=\"wortels6jpg.jpg\" file=\"wortels6jpg.jpg\" /><media name=\"wortels7.jpg\" file=\"wortels7.jpg\" /><media name=\"zak rijm.jpg\" file=\"zak_rijm.jpg\" /><media name=\"SINTapplause.mp3\" file=\"sintapplause.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}