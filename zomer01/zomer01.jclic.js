if(JClicObject){JClicObject.projectFiles["zomer01.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"zomer01\" version=\"0.1.3\"><settings><title>zomer01<\/title><revision description=\"created\" date=\"7/24/23\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo\" delay=\"1\" /><item name=\"schaduw\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"kleuren\" delay=\"1\" /><item name=\"puzzel vorm\" delay=\"1\" /><\/sequence><activities><activity class=\"@associations.SimpleAssociation\" name=\"kleuren\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welk badpak hoort bij het kindje? Kijk goed naar de kleur.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondzomer.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausezomer_.mp3\" /><sound id=\"finishedOk\" file=\"applausezomer_.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"badgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"badpakblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"badpakoranje.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"badpakrood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"badpakroos.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kbadpakgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"kindje geel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kindje blauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kindje oranje.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kindje rood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kindje roos.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kindje groen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@memory.MemoryGame\" name=\"memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondzomer.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausezomer_.mp3\" /><sound id=\"finishedOk\" file=\"applausezomer_.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"zonnebril kindje.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"strandlakenmeisjes.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"parrasol.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"strandbal .jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zandkasteel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zon.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondzomer.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausezomer_.mp3\" /><sound id=\"finishedOk\" file=\"applausezomer_.mp3\" /><\/eventSounds><\/settings><cells rows=\"3\" cols=\"2\" border=\"true\" image=\"zwemband.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"2\" rows=\"3\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel vorm\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Inlegpuzzel: vormen<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondzomer.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausezomer_.mp3\" /><sound id=\"finishedOk\" file=\"applausezomer_.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" border=\"true\" image=\"allevormenzon.jpg\"><style shadow=\"true\" transparent=\"true\"><color background=\"0xCCCCCC\" /><\/style><shaper class=\"@Holes\" cols=\"3\" rows=\"2\"><shape comment=\"0\">M:0.085714,0.228571|L:0.130519,0.097321|L:0.133117,0.097321|L:0.177922,0.230357|L:0.087013,0.233929|L:0.087013,0.226786|L:0.085714,0.226786|L:0.085714,0.228571<\/shape><shape comment=\"1\">M:0.448052,0.240179|B:0.446104,0.28125,0.444805,0.34375,0.385714,0.320536|B:0.361688,0.3125,0.353896,0.277295,0.352597,0.260714|B:0.353896,0.21467,0.372066,0.189286,0.394481,0.189286|B:0.416895,0.189286,0.435714,0.204464,0.448052,0.240179<\/shape><shape comment=\"2\">rectangle:0.800649,0.444643,0.066234,0.098214<\/shape><shape comment=\"3\">M:0.162987,0.54375|L:0.213636,0.467857|L:0.261039,0.544643|L:0.212338,0.622321|L:0.163636,0.546429|L:0.162338,0.544643|L:0.162987,0.54375<\/shape><shape comment=\"4\">M:0.351948,0.754464|L:0.333117,0.86875|L:0.448701,0.869643|L:0.428571,0.753571|L:0.351948,0.754464|L:0.351948,0.753571|L:0.351948,0.754464<\/shape><shape comment=\"5\">M:0.555195,0.465179|L:0.559091,0.519643|L:0.523377,0.540179|L:0.56039,0.557143|L:0.561688,0.616964|L:0.586364,0.56875|L:0.625325,0.585714|L:0.597403,0.5375|L:0.618831,0.490179|L:0.584416,0.507143|L:0.557143,0.465179|L:0.55974,0.520536|L:0.559091,0.521429|L:0.555195,0.465179<\/shape><shape comment=\"6\">M:0.657792,0.180357|L:0.665584,0.163393|L:0.675974,0.144643|L:0.703247,0.121429|L:0.72013,0.113393|L:0.736364,0.111607|L:0.749351,0.119643|L:0.755844,0.14375|L:0.750649,0.160714|L:0.737662,0.186607|L:0.724675,0.2|L:0.705844,0.216071|L:0.684416,0.224107|L:0.67013,0.223214|L:0.661688,0.217857|L:0.658442,0.208929|L:0.654545,0.201786|L:0.655844,0.18125|L:0.657792,0.183036|L:0.657792,0.180357<\/shape><\/shaper><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondzomer.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausezomer_.mp3\" /><sound id=\"finishedOk\" file=\"applausezomer_.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"parrasolschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"slippersschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"strandbalschaduw .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zandkasteelschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zonnebrilschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zonschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"parrasol.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"slippers.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"strandbal .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zandkasteel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zonnebril.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"zon.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"achtergrondzomer.jpg\" file=\"achtergrondzomer.jpg\" /><media name=\"allevormenzon.jpg\" file=\"allevormenzon.jpg\" /><media name=\"badgeel.jpg\" file=\"badgeel.jpg\" /><media name=\"badpakblauw.jpg\" file=\"badpakblauw.jpg\" /><media name=\"badpakoranje.jpg\" file=\"badpakoranje.jpg\" /><media name=\"badpakrood.jpg\" file=\"badpakrood.jpg\" /><media name=\"badpakroos.jpg\" file=\"badpakroos.jpg\" /><media name=\"kbadpakgroen.jpg\" file=\"kbadpakgroen.jpg\" /><media name=\"kindje blauw.jpg\" file=\"kindje_blauw.jpg\" /><media name=\"kindje geel.jpg\" file=\"kindje_geel.jpg\" /><media name=\"kindje groen.jpg\" file=\"kindje_groen.jpg\" /><media name=\"kindje oranje.jpg\" file=\"kindje_oranje.jpg\" /><media name=\"kindje rood.jpg\" file=\"kindje_rood.jpg\" /><media name=\"kindje roos.jpg\" file=\"kindje_roos.jpg\" /><media name=\"parrasol.jpg\" file=\"parrasol.jpg\" /><media name=\"parrasolschaduw.jpg\" file=\"parrasolschaduw.jpg\" /><media name=\"slippers.jpg\" file=\"slippers.jpg\" /><media name=\"slippersschaduw.jpg\" file=\"slippersschaduw.jpg\" /><media name=\"strandbal .jpg\" file=\"strandbal_.jpg\" /><media name=\"strandbalschaduw .jpg\" file=\"strandbalschaduw_.jpg\" /><media name=\"strandlakenmeisjes.jpg\" file=\"strandlakenmeisjes.jpg\" /><media name=\"zandkasteel.jpg\" file=\"zandkasteel.jpg\" /><media name=\"zandkasteelschaduw.jpg\" file=\"zandkasteelschaduw.jpg\" /><media name=\"zon.jpg\" file=\"zon.jpg\" /><media name=\"zonnebril kindje.jpg\" file=\"zonnebril_kindje.jpg\" /><media name=\"zonnebril.jpg\" file=\"zonnebril.jpg\" /><media name=\"zonnebrilschaduw.jpg\" file=\"zonnebrilschaduw.jpg\" /><media name=\"zonschaduw.jpg\" file=\"zonschaduw.jpg\" /><media name=\"zwemband.jpg\" file=\"zwemband.jpg\" /><media name=\"applausezomer_.mp3\" file=\"applausezomer_.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}