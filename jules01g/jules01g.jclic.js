if(JClicObject){JClicObject.projectFiles["jules01g.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"jules01g\" version=\"0.1.3\"><settings><title>jules01g<\/title><revision description=\"created\" date=\"11/13/22\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"Schaduw\" delay=\"1\" /><item name=\"kleuren\" delay=\"1\" /><item name=\"inleg\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"jules.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"mandje paasei.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kip.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paasei.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"2\" border=\"true\" image=\"puzzel2stukken.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"2\" rows=\"1\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"Schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"5\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"5\" rows=\"1\" /><cell image=\"mandje paasei.jpg\"><style /><\/cell><cell image=\"paasei.jpg\"><style /><\/cell><cell image=\"paasklok.jpg\"><style /><\/cell><cell image=\"kuikentje.jpg\"><style /><\/cell><cell image=\"kip.jpg\"><style /><\/cell><\/cells><cells rows=\"1\" cols=\"5\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"5\" rows=\"1\" /><cell image=\"mandje paasei SCHADUW.jpg\"><style /><\/cell><cell image=\"paasei SCHADUW.jpg\"><style /><\/cell><cell image=\"paasklok SCHADUW.jpg\"><style /><\/cell><cell image=\"kuikentje SCHADUW.jpg\"><style /><\/cell><cell image=\"kip SCHADUW.jpg\"><style /><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"kleuren\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welk paaseitje heeft dezelfde kleur als het mandje van Jules? <\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"jules mandje blauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules mandje geel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules mandje groen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules mandje rood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"paasei blauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paasei geel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paasei groen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paasei rood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"inleg\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" border=\"true\" image=\"puzzel 3.jpg\"><style transparent=\"true\"><color background=\"0xFFFFFF\" /><\/style><shaper class=\"@Holes\" cols=\"3\" rows=\"2\"><shape comment=\"0\">M:0.689944,0.640523|L:0.73324,0.671895|L:0.773277,0.666013|L:0.786778,0.663399|L:0.782123,0.64183|L:0.786778,0.609804|L:0.798417,0.598039|L:0.816108,0.589543|L:0.830074,0.593464|L:0.83892,0.608497|L:0.837989,0.623529|L:0.831471,0.63268|L:0.824953,0.626797|L:0.820764,0.615033|L:0.810987,0.611111|L:0.801676,0.620915|L:0.800745,0.629412|L:0.807263,0.643137|L:0.816574,0.65098|L:0.832402,0.652941|L:0.850093,0.657516|L:0.865922,0.692157|L:0.890596,0.711765|L:0.900838,0.718301|L:0.912011,0.730065|L:0.906425,0.776471|L:0.902235,0.816993|L:0.904097,0.866667|L:0.895717,0.904575|L:0.88594,0.939216|L:0.875698,0.98366|L:0.87244,0.992157|L:0.852421,0.977124|L:0.831937,0.962745|L:0.812849,0.942484|L:0.802142,0.930065|L:0.793762,0.927451|L:0.786313,0.93268|L:0.783985,0.956863|L:0.796089,0.978431|L:0.804469,0.994771|L:0.701583,0.996732|L:0.72486,0.965359|L:0.732309,0.926144|L:0.725326,0.912418|L:0.707635,0.89281|L:0.689944,0.871895|L:0.67784,0.846405|L:0.677374,0.840523|L:0.682961,0.83268|L:0.684358,0.830065|L:0.678771,0.812418|L:0.682495,0.79281|L:0.691341,0.775163|L:0.69041,0.737908|L:0.67784,0.711111|L:0.664339,0.679739|L:0.662011,0.660131|L:0.674115,0.645752|L:0.681564,0.643137|L:0.69041,0.642484|L:0.690875,0.642484|L:0.689944,0.640523<\/shape><shape comment=\"1\">M:0.538175,0.098039|L:0.530726,0.119608|L:0.526536,0.147059|L:0.523743,0.168627|L:0.514898,0.196732|L:0.513967,0.203268|L:0.520484,0.215033|L:0.524674,0.226797|L:0.520019,0.252288|L:0.511173,0.271895|L:0.512104,0.303268|L:0.522812,0.286275|L:0.529795,0.26732|L:0.537244,0.261438|L:0.533054,0.23268|L:0.534451,0.199346|L:0.535847,0.18366|L:0.543296,0.181046|L:0.548883,0.188235|L:0.556331,0.205882|L:0.575885,0.211111|L:0.587989,0.205229|L:0.601024,0.194118|L:0.617784,0.191503|L:0.619646,0.200654|L:0.62244,0.203922|L:0.628492,0.203922|L:0.632216,0.211765|L:0.630819,0.219608|L:0.626629,0.229412|L:0.628492,0.233987|L:0.630354,0.24183|L:0.627095,0.24902|L:0.628957,0.254902|L:0.625698,0.266013|L:0.613594,0.272549|L:0.594972,0.28366|L:0.581471,0.29085|L:0.574953,0.326144|L:0.566574,0.347059|L:0.642458,0.348366|L:0.666201,0.345752|L:0.67784,0.330065|L:0.674115,0.299346|L:0.650372,0.223529|L:0.645717,0.188889|L:0.646182,0.124183|L:0.641527,0.104575|L:0.655493,0.09281|L:0.654562,0.075817|L:0.64851,0.062745|L:0.635009,0.058824|L:0.621974,0.062745|L:0.607542,0.066013|L:0.595438,0.064706|L:0.590317,0.064706|L:0.582402,0.067974|L:0.562849,0.062745|L:0.548883,0.049673|L:0.533054,0.04902|L:0.522346,0.054248|L:0.519088,0.069281|L:0.520484,0.086928|L:0.52933,0.091503|L:0.539106,0.099346|L:0.538641,0.096078<\/shape><shape comment=\"2\">M:0.084264,0.630719|L:0.170391,0.624183|L:0.176443,0.629412|L:0.174115,0.652941|L:0.193669,0.660131|L:0.214153,0.650327|L:0.229981,0.64183|L:0.244879,0.640523|L:0.25838,0.659477|L:0.260708,0.679085|L:0.252328,0.703922|L:0.232775,0.744444|L:0.223929,0.828758|L:0.205773,0.870588|L:0.175512,0.901307|L:0.137803,0.912418|L:0.108473,0.910457|L:0.079143,0.884967|L:0.068436,0.892157|L:0.056797,0.885621|L:0.049348,0.865359|L:0.047952,0.848366|L:0.019553,0.849673|L:0.017225,0.808497|L:0.022812,0.750327|L:0.04252,0.680174|L:0.084264,0.630719<\/shape><shape comment=\"3\">M:0.542365,0.72549|L:0.539106,0.794771|L:0.536313,0.848366|L:0.532123,0.878431|L:0.539106,0.881699|L:0.534916,0.927451|L:0.497207,0.932026|L:0.45298,0.928758|L:0.418994,0.909804|L:0.41946,0.896732|L:0.400838,0.890196|L:0.400838,0.86732|L:0.409218,0.843791|L:0.408287,0.830065|L:0.434823,0.79085|L:0.464153,0.739216|L:0.48324,0.733987|L:0.499069,0.718301|L:0.513501,0.733987|L:0.543762,0.722876|L:0.544693,0.723529|L:0.542365,0.72549<\/shape><shape comment=\"4\">M:0.275605,0.120261|L:0.252948,0.133333|L:0.227809,0.142484|L:0.198945,0.149455|L:0.191496,0.143355|L:0.189944,0.134205|L:0.181564,0.126797|L:0.16077,0.124183|L:0.163873,0.138998|L:0.175047,0.149455|L:0.188703,0.149455|L:0.192117,0.15512|L:0.161701,0.178649|L:0.145251,0.188671|L:0.122905,0.169935|L:0.105525,0.176906|L:0.0928,0.180392|L:0.113284,0.20305|L:0.130354,0.203486|L:0.141217,0.194771|L:0.150528,0.19085|L:0.130664,0.218736|L:0.116387,0.219608|L:0.104593,0.233987|L:0.09342,0.25403|L:0.089696,0.269717|L:0.108007,0.265359|L:0.125388,0.248366|L:0.132216,0.233115|L:0.133147,0.223094|L:0.16915,0.186057|L:0.167908,0.199129|L:0.160149,0.212636|L:0.160149,0.223965|L:0.16946,0.252723|L:0.173805,0.255338|L:0.182185,0.227451|L:0.181875,0.210893|L:0.174736,0.196078|L:0.175667,0.181264|L:0.209808,0.159041|L:0.225016,0.157298|L:0.222843,0.173856|L:0.208876,0.192157|L:0.206704,0.216558|L:0.214153,0.229194|L:0.227188,0.2122|L:0.232154,0.187364|L:0.22874,0.171678|L:0.236809,0.154684|L:0.302607,0.135076|L:0.276847,0.121133<\/shape><\/shaper><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"jules mandje blauw.jpg\" file=\"jules_mandje_blauw.jpg\" /><media name=\"jules mandje geel.jpg\" file=\"jules_mandje_geel.jpg\" /><media name=\"jules mandje groen.jpg\" file=\"jules_mandje_groen.jpg\" /><media name=\"jules mandje rood.jpg\" file=\"jules_mandje_rood.jpg\" /><media name=\"jules.jpg\" file=\"jules.jpg\" /><media name=\"julesachtergrondjpg.jpg\" file=\"julesachtergrondjpg.jpg\" /><media name=\"kip SCHADUW.jpg\" file=\"kip_schaduw.jpg\" /><media name=\"kip.jpg\" file=\"kip.jpg\" /><media name=\"kuikentje SCHADUW.jpg\" file=\"kuikentje_schaduw.jpg\" /><media name=\"kuikentje.jpg\" file=\"kuikentje.jpg\" /><media name=\"mandje paasei SCHADUW.jpg\" file=\"mandje_paasei_schaduw.jpg\" /><media name=\"mandje paasei.jpg\" file=\"mandje_paasei.jpg\" /><media name=\"paasei blauw.jpg\" file=\"paasei_blauw.jpg\" /><media name=\"paasei geel.jpg\" file=\"paasei_geel.jpg\" /><media name=\"paasei groen.jpg\" file=\"paasei_groen.jpg\" /><media name=\"paasei rood.jpg\" file=\"paasei_rood.jpg\" /><media name=\"paasei SCHADUW.jpg\" file=\"paasei_schaduw.jpg\" /><media name=\"paasei.jpg\" file=\"paasei.jpg\" /><media name=\"paasklok SCHADUW.jpg\" file=\"paasklok_schaduw.jpg\" /><media name=\"paasklok.jpg\" file=\"paasklok.jpg\" /><media name=\"puzzel 3.jpg\" file=\"puzzel_3.jpg\" /><media name=\"puzzel2stukken.jpg\" file=\"puzzel2stukken.jpg\" /><media name=\"applausejules .mp3\" file=\"applausejules_.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}
