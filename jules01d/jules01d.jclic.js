if(JClicObject){JClicObject.projectFiles["jules01d.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"jules01d\" version=\"0.1.3\"><settings><title>jules01d<\/title><revision description=\"created\" date=\"10/13/22\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo\" delay=\"1\" /><item name=\"puzzel\" delay=\"1\" /><item name=\"schaduw\" delay=\"1\" /><item name=\"speelgoed\" delay=\"1\" /><item name=\"puzzel2\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"memo\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"paars.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schoen met tekening.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"sint en pietjpg.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesmijter.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"1\" border=\"true\" image=\"sint.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"1\" rows=\"2\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"schoen met tekening kleur.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"sint kleur.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"piet kleur .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesmijterkleur.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"schoen met tekening SCHADUW.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"sint schaduw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"piet schaduw .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduwjulesmijter-resized.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"speelgoed\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welk speelgoed staat er op het lijstje van Jules?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"400.0\" cellHeight=\"400.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"julesball.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesboot.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julestrommel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"juleskonijnl.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"400.0\" cellHeight=\"400.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"bal .jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"boot .jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"trommel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"konijn.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel2\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"1\" border=\"true\" image=\"sint en pietjpg.jpg\"><style /><shaper class=\"@TriangularJigSaw\" cols=\"1\" rows=\"2\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"bal .jpg\" file=\"bal_.jpg\" /><media name=\"boot .jpg\" file=\"boot_.jpg\" /><media name=\"julesachtergrondjpg.jpg\" file=\"julesachtergrondjpg.jpg\" /><media name=\"julesball.jpg\" file=\"julesball.jpg\" /><media name=\"julesboot.jpg\" file=\"julesboot.jpg\" /><media name=\"juleskonijnl.jpg\" file=\"juleskonijnl.jpg\" /><media name=\"julesmijter.jpg\" file=\"julesmijter.jpg\" /><media name=\"julesmijterkleur.jpg\" file=\"julesmijterkleur.jpg\" /><media name=\"julestrommel.jpg\" file=\"julestrommel.jpg\" /><media name=\"konijn.jpg\" file=\"konijn.jpg\" /><media name=\"paars.jpg\" file=\"paars.jpg\" /><media name=\"piet kleur .jpg\" file=\"piet_kleur_.jpg\" /><media name=\"piet schaduw .jpg\" file=\"piet_schaduw_.jpg\" /><media name=\"schaduwjulesmijter-resized.jpg\" file=\"schaduwjulesmijter-resized.jpg\" /><media name=\"schoen met tekening kleur.jpg\" file=\"schoen_met_tekening_kleur.jpg\" /><media name=\"schoen met tekening SCHADUW.jpg\" file=\"schoen_met_tekening_schaduw.jpg\" /><media name=\"schoen met tekening.jpg\" file=\"schoen_met_tekening.jpg\" /><media name=\"sint en pietjpg.jpg\" file=\"sint_en_pietjpg.jpg\" /><media name=\"sint kleur.jpg\" file=\"sint_kleur.jpg\" /><media name=\"sint schaduw.jpg\" file=\"sint_schaduw.jpg\" /><media name=\"sint.jpg\" file=\"sint.jpg\" /><media name=\"trommel.jpg\" file=\"trommel.jpg\" /><media name=\"applausejules .mp3\" file=\"applausejules_.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}
