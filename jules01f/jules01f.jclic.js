if(JClicObject){JClicObject.projectFiles["jules01f.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"jules01f\" version=\"0.1.3\"><settings><title>Jules01f<\/title><revision description=\"created\" date=\"11/13/22\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"kleuren\" delay=\"1\" /><item name=\"schauw\" delay=\"1\" /><item name=\"puzzel 2\" delay=\"1\" /><\/sequence><activities><activity class=\"@associations.SimpleAssociation\" name=\"kleuren\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welke narrenkap heeft dezelfde kleur als Jules zijn verkleedpak?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"julesbgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesbgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesrood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"mutsgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"mutsgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"mutsblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"mutsrood.jpg\"><style /><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@memory.MemoryGame\" name=\"memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"julesverkleed.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesclown.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"marie verkleed.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"trommel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"2\" border=\"true\" image=\"puzzelcarnaval.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"2\" rows=\"1\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schauw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"cowboyhoed.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"hoed.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kroon.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"narrenkap.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"cowboyhoedschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"hoedschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kroonschaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"narrenkapschauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel 2\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"2\" border=\"true\" image=\"puzzelcarnaval2.jpg\"><style /><shaper class=\"@JigSaw\" cols=\"2\" rows=\"1\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"cowboyhoed.jpg\" file=\"cowboyhoed.jpg\" /><media name=\"cowboyhoedschaduw.jpg\" file=\"cowboyhoedschaduw.jpg\" /><media name=\"hoed.jpg\" file=\"hoed.jpg\" /><media name=\"hoedschaduw.jpg\" file=\"hoedschaduw.jpg\" /><media name=\"julesachtergrondjpg.jpg\" file=\"julesachtergrondjpg.jpg\" /><media name=\"julesbgeel.jpg\" file=\"julesbgeel.jpg\" /><media name=\"julesbgroen.jpg\" file=\"julesbgroen.jpg\" /><media name=\"julesblauw.jpg\" file=\"julesblauw.jpg\" /><media name=\"julesclown.jpg\" file=\"julesclown.jpg\" /><media name=\"julesrood.jpg\" file=\"julesrood.jpg\" /><media name=\"julesverkleed.jpg\" file=\"julesverkleed.jpg\" /><media name=\"kroon.jpg\" file=\"kroon.jpg\" /><media name=\"kroonschaduw.jpg\" file=\"kroonschaduw.jpg\" /><media name=\"marie verkleed.jpg\" file=\"marie_verkleed.jpg\" /><media name=\"mutsblauw.jpg\" file=\"mutsblauw.jpg\" /><media name=\"mutsgeel.jpg\" file=\"mutsgeel.jpg\" /><media name=\"mutsgroen.jpg\" file=\"mutsgroen.jpg\" /><media name=\"mutsrood.jpg\" file=\"mutsrood.jpg\" /><media name=\"narrenkap.jpg\" file=\"narrenkap.jpg\" /><media name=\"narrenkapschauw.jpg\" file=\"narrenkapschauw.jpg\" /><media name=\"puzzelcarnaval.jpg\" file=\"puzzelcarnaval.jpg\" /><media name=\"puzzelcarnaval2.jpg\" file=\"puzzelcarnaval2.jpg\" /><media name=\"trommel.jpg\" file=\"trommel.jpg\" /><media name=\"applausejules .mp3\" file=\"applausejules_.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}