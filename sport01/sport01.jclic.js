if(JClicObject){JClicObject.projectFiles["sport01.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"sport01\" version=\"0.1.3\"><settings><title>Sport01<\/title><revision description=\"created\" date=\"12/28/23\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo\" delay=\"1\" /><item name=\"schaduw\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"kleur\" delay=\"1\" /><item name=\"tellen\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrond sport .jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausesportl.mp3\" /><sound id=\"finishedOk\" file=\"applausesportl.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"basket.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"voetbal.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"sw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"gyme.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"tennisjpg.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"manjudo.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrond sport .jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausesportl.mp3\" /><sound id=\"finishedOk\" file=\"applausesportl.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"basket.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"manjudo.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paardmetbogen.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaatsen.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell avoidOverlapping=\"true\" image=\"tennisjpg.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"voetbal.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"basketschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"manjudoschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"paardmetbogenschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaatsenschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"tennisschaduwjpg.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"voetbalschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrond sport .jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausesportl.mp3\" /><sound id=\"finishedOk\" file=\"applausesportl.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" border=\"true\" image=\"puzzel.jpg\"><style /><shaper class=\"@TriangularJigSaw\" cols=\"3\" rows=\"2\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"kleur\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welk badpak hoort bij de zwemmers? Kijk goed naar de kleur van de zwembril.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrond sport .jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausesportl.mp3\" /><sound id=\"finishedOk\" file=\"applausesportl.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"brilblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"brilgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"brilgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"briloranje.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"brilpaars.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"brilrood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"padpakblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"padpakgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"padpakbgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"padpakoranje.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"padpakpaars.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"padpakrood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"tellen\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Hoeveel voetballen tel je?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"achtergrond sport .jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausesportl.mp3\" /><sound id=\"finishedOk\" file=\"applausesportl.mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"1\" /><cell image=\"bal1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"bal2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"bal3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"1\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"1\" /><cell image=\"getalbeeld1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"getalbeeld2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"getalbeeld3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><\/activities><mediaBag><media name=\"achtergrond sport .jpg\" file=\"achtergrond_sport_.jpg\" /><media name=\"bal1.jpg\" file=\"bal1.jpg\" /><media name=\"bal2.jpg\" file=\"bal2.jpg\" /><media name=\"bal3.jpg\" file=\"bal3.jpg\" /><media name=\"basket.jpg\" file=\"basket.jpg\" /><media name=\"basketschaduw.jpg\" file=\"basketschaduw.jpg\" /><media name=\"brilblauw.jpg\" file=\"brilblauw.jpg\" /><media name=\"brilgeel.jpg\" file=\"brilgeel.jpg\" /><media name=\"brilgroen.jpg\" file=\"brilgroen.jpg\" /><media name=\"briloranje.jpg\" file=\"briloranje.jpg\" /><media name=\"brilpaars.jpg\" file=\"brilpaars.jpg\" /><media name=\"brilrood.jpg\" file=\"brilrood.jpg\" /><media name=\"getalbeeld1.jpg\" file=\"getalbeeld1.jpg\" /><media name=\"getalbeeld2.jpg\" file=\"getalbeeld2.jpg\" /><media name=\"getalbeeld3.jpg\" file=\"getalbeeld3.jpg\" /><media name=\"gyme.jpg\" file=\"gyme.jpg\" /><media name=\"manjudo.jpg\" file=\"manjudo.jpg\" /><media name=\"manjudoschaduw.jpg\" file=\"manjudoschaduw.jpg\" /><media name=\"paardmetbogen.jpg\" file=\"paardmetbogen.jpg\" /><media name=\"paardmetbogenschaduw.jpg\" file=\"paardmetbogenschaduw.jpg\" /><media name=\"padpakbgroen.jpg\" file=\"padpakbgroen.jpg\" /><media name=\"padpakblauw.jpg\" file=\"padpakblauw.jpg\" /><media name=\"padpakgeel.jpg\" file=\"padpakgeel.jpg\" /><media name=\"padpakoranje.jpg\" file=\"padpakoranje.jpg\" /><media name=\"padpakpaars.jpg\" file=\"padpakpaars.jpg\" /><media name=\"padpakrood.jpg\" file=\"padpakrood.jpg\" /><media name=\"puzzel.jpg\" file=\"puzzel.jpg\" /><media name=\"schaatsen.jpg\" file=\"schaatsen.jpg\" /><media name=\"schaatsenschaduw.jpg\" file=\"schaatsenschaduw.jpg\" /><media name=\"sw.jpg\" file=\"sw.jpg\" /><media name=\"tennisjpg.jpg\" file=\"tennisjpg.jpg\" /><media name=\"tennisschaduwjpg.jpg\" file=\"tennisschaduwjpg.jpg\" /><media name=\"voetbal.jpg\" file=\"voetbal.jpg\" /><media name=\"voetbalschaduw.jpg\" file=\"voetbalschaduw.jpg\" /><media name=\"applausesportl.mp3\" file=\"applausesportl.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}
