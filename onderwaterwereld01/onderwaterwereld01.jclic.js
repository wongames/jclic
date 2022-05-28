if(JClicObject){JClicObject.projectFiles["onderwaterwereld01.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"onderwaterwereld01\" version=\"0.1.3\"><settings><title>Onderwaterwereld01<\/title><revision description=\"created\" date=\"5/22/22\" /><author name=\"Charlotte Peeters\" /><descriptors /><eventSounds><sound id=\"finishedError\" file=\"applause_onderwaterwereld.mp3\" /><sound id=\"finishedOk\" file=\"applause_onderwaterwereld.mp3\" /><\/eventSounds><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"Memo\" delay=\"1\" /><item name=\"schaduw\" delay=\"1\" /><item name=\"kleur\" delay=\"1\" /><item name=\"Tellen tot 3\" delay=\"1\" /><item name=\"puzzel 1\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"Memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondonderwaterwereld.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0x99FFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applause_onderwaterwereld.mp3\" /><sound id=\"finishedOk\" file=\"applause_onderwaterwereld.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"memo(1).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo(2).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo(3).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo(4).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo(5).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo(6).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"Tellen tot 3\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Tel je mee? Hoeveel visjes tel je?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondonderwaterwereld.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0x99FFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applause_onderwaterwereld.mp3\" /><sound id=\"finishedOk\" file=\"applause_onderwaterwereld.mp3\" /><\/eventSounds><\/settings><cells rows=\"3\" cols=\"1\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"1\" rows=\"3\" /><cell image=\"vis1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"vis2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"vis3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"3\" cols=\"1\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"1\" rows=\"3\" /><cell image=\"getalbeeld1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"getalbeeld2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"getalbeeld3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"kleur\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welke parel heeft dezelfde kleur als de schelp?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondonderwaterwereld.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0x99FFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applause_onderwaterwereld.mp3\" /><sound id=\"finishedOk\" file=\"applause_onderwaterwereld.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"schelpblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelpgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelpgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelporanje.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelppaars.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelprood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelproos.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schelpwit.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"blauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"geel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"groen.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"oranje.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paars.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"rood.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"roos.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"wit.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel 1\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondonderwaterwereld.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0x99FFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applause_onderwaterwereld.mp3\" /><sound id=\"finishedOk\" file=\"applause_onderwaterwereld.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" border=\"true\" image=\"puzzelonderwater1.jpg\"><style><color foreground=\"0xFF0000\" border=\"0xFF0000\" /><\/style><shaper class=\"@ClassicJigSaw\" cols=\"2\" rows=\"2\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw bij het plaatje.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrondonderwaterwereld.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0x99FFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applause_onderwaterwereld.mp3\" /><sound id=\"finishedOk\" file=\"applause_onderwaterwereld.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"kleur1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleur2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleur3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleur4.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleur5.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleur6.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"schaduw1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw4.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw5.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw6.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"achtergrondonderwaterwereld.jpg\" file=\"achtergrondonderwaterwereld.jpg\" /><media name=\"blauw.jpg\" file=\"blauw.jpg\" /><media name=\"geel.jpg\" file=\"geel.jpg\" /><media name=\"getalbeeld1.jpg\" file=\"getalbeeld1.jpg\" /><media name=\"getalbeeld2.jpg\" file=\"getalbeeld2.jpg\" /><media name=\"getalbeeld3.jpg\" file=\"getalbeeld3.jpg\" /><media name=\"groen.jpg\" file=\"groen.jpg\" /><media name=\"kleur1.jpg\" file=\"kleur1.jpg\" /><media name=\"kleur2.jpg\" file=\"kleur2.jpg\" /><media name=\"kleur3.jpg\" file=\"kleur3.jpg\" /><media name=\"kleur4.jpg\" file=\"kleur4.jpg\" /><media name=\"kleur5.jpg\" file=\"kleur5.jpg\" /><media name=\"kleur6.jpg\" file=\"kleur6.jpg\" /><media name=\"memo(1).jpg\" file=\"memo_1_.jpg\" /><media name=\"memo(2).jpg\" file=\"memo_2_.jpg\" /><media name=\"memo(3).jpg\" file=\"memo_3_.jpg\" /><media name=\"memo(4).jpg\" file=\"memo_4_.jpg\" /><media name=\"memo(5).jpg\" file=\"memo_5_.jpg\" /><media name=\"memo(6).jpg\" file=\"memo_6_.jpg\" /><media name=\"oranje.jpg\" file=\"oranje.jpg\" /><media name=\"paars.jpg\" file=\"paars.jpg\" /><media name=\"puzzelonderwater1.jpg\" file=\"puzzelonderwater1.jpg\" /><media name=\"rood.jpg\" file=\"rood.jpg\" /><media name=\"roos.jpg\" file=\"roos.jpg\" /><media name=\"schaduw1.jpg\" file=\"schaduw1.jpg\" /><media name=\"schaduw2.jpg\" file=\"schaduw2.jpg\" /><media name=\"schaduw3.jpg\" file=\"schaduw3.jpg\" /><media name=\"schaduw4.jpg\" file=\"schaduw4.jpg\" /><media name=\"schaduw5.jpg\" file=\"schaduw5.jpg\" /><media name=\"schaduw6.jpg\" file=\"schaduw6.jpg\" /><media name=\"schelpblauw.jpg\" file=\"schelpblauw.jpg\" /><media name=\"schelpgeel.jpg\" file=\"schelpgeel.jpg\" /><media name=\"schelpgroen.jpg\" file=\"schelpgroen.jpg\" /><media name=\"schelporanje.jpg\" file=\"schelporanje.jpg\" /><media name=\"schelppaars.jpg\" file=\"schelppaars.jpg\" /><media name=\"schelprood.jpg\" file=\"schelprood.jpg\" /><media name=\"schelproos.jpg\" file=\"schelproos.jpg\" /><media name=\"schelpwit.jpg\" file=\"schelpwit.jpg\" /><media name=\"vis1.jpg\" file=\"vis1.jpg\" /><media name=\"vis2.jpg\" file=\"vis2.jpg\" /><media name=\"vis3.jpg\" file=\"vis3.jpg\" /><media name=\"wit.jpg\" file=\"wit.jpg\" /><media name=\"applause_onderwaterwereld.mp3\" file=\"applause_onderwaterwereld.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}
