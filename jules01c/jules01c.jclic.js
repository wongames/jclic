if(JClicObject){JClicObject.projectFiles["jules01c.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"jules01c\" version=\"0.1.3\"><settings><title>jules01c<\/title><revision description=\"created\" date=\"10/9/22\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"schaduw\" delay=\"1\" /><item name=\"kleuren\" delay=\"1\" /><item name=\"paddenstoel\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"blaadjes.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"eekhoorn.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesbos.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paddenstoel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"1\" border=\"true\" image=\"puzzeljulesherfst.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"1\" rows=\"2\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"1\" /><cell image=\"eekhoorn.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paddenstoel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"blaadjes.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"egel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"1\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"1\" /><cell image=\"schaduweekhoorn.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduwpaddenstoel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduwblaadjes.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduwegel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"kleuren\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welke paraplu heeft dezelfde kleur als de jas van Jules?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"jules paraplublauw .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules parapluboranje .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules paraplugeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules paraplugroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules paraplupaars .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"jules paraplu.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"paraplu blauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paraplu oranje.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paraplu geel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paraplu groen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paraplu paars.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paraplu rood.jpg\" /><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"paddenstoel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Kan je dezelfde kleur paddenstoel vinden? <\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"1\" /><cell image=\"paddenstoel.jpg\"><style /><\/cell><cell image=\"paddenstoelgeel.jpg\"><style /><\/cell><cell image=\"paddenstoelbruin.jpg\"><style /><\/cell><cell image=\"paddenstoelroos.jpg\"><style /><\/cell><\/cells><cells rows=\"1\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"1\" /><cell image=\"paddenstoel.jpg\" /><cell image=\"paddenstoelgeel.jpg\"><style /><\/cell><cell image=\"paddenstoelbruin.jpg\"><style /><\/cell><cell image=\"paddenstoelroos.jpg\"><style /><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><\/activities><mediaBag><media name=\"blaadjes.jpg\" file=\"blaadjes.jpg\" /><media name=\"eekhoorn.jpg\" file=\"eekhoorn.jpg\" /><media name=\"egel.jpg\" file=\"egel.jpg\" /><media name=\"jules paraplu.jpg\" file=\"jules_paraplu.jpg\" /><media name=\"jules paraplublauw .jpg\" file=\"jules_paraplublauw_.jpg\" /><media name=\"jules parapluboranje .jpg\" file=\"jules_parapluboranje_.jpg\" /><media name=\"jules paraplugeel.jpg\" file=\"jules_paraplugeel.jpg\" /><media name=\"jules paraplugroen.jpg\" file=\"jules_paraplugroen.jpg\" /><media name=\"jules paraplupaars .jpg\" file=\"jules_paraplupaars_.jpg\" /><media name=\"julesachtergrondjpg.jpg\" file=\"julesachtergrondjpg.jpg\" /><media name=\"julesbos.jpg\" file=\"julesbos.jpg\" /><media name=\"paddenstoel.jpg\" file=\"paddenstoel.jpg\" /><media name=\"paddenstoelbruin.jpg\" file=\"paddenstoelbruin.jpg\" /><media name=\"paddenstoelgeel.jpg\" file=\"paddenstoelgeel.jpg\" /><media name=\"paddenstoelroos.jpg\" file=\"paddenstoelroos.jpg\" /><media name=\"paraplu blauw.jpg\" file=\"paraplu_blauw.jpg\" /><media name=\"paraplu geel.jpg\" file=\"paraplu_geel.jpg\" /><media name=\"paraplu groen.jpg\" file=\"paraplu_groen.jpg\" /><media name=\"paraplu oranje.jpg\" file=\"paraplu_oranje.jpg\" /><media name=\"paraplu paars.jpg\" file=\"paraplu_paars.jpg\" /><media name=\"paraplu rood.jpg\" file=\"paraplu_rood.jpg\" /><media name=\"puzzeljulesherfst.jpg\" file=\"puzzeljulesherfst.jpg\" /><media name=\"schaduwblaadjes.jpg\" file=\"schaduwblaadjes.jpg\" /><media name=\"schaduweekhoorn.jpg\" file=\"schaduweekhoorn.jpg\" /><media name=\"schaduwegel.jpg\" file=\"schaduwegel.jpg\" /><media name=\"schaduwpaddenstoel.jpg\" file=\"schaduwpaddenstoel.jpg\" /><media name=\"applausejules .mp3\" file=\"applausejules_.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}
