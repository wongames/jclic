if(JClicObject){JClicObject.projectFiles["verkeer03.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"verkeer03\" version=\"0.1.3\"><settings><title>Verkeer03<\/title><revision description=\"created\" date=\"6/7/22\" /><author name=\"Charlotte Peeters\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo12\" delay=\"1\" /><item name=\"groot naar klein\" delay=\"1\" /><item name=\"rijmen\" delay=\"1\" /><item name=\"cijfers tellen\" delay=\"1\" /><item name=\"puzzel12\" delay=\"1\" /><\/sequence><activities><activity class=\"@associations.SimpleAssociation\" name=\"cijfers tellen\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Hoeveel kegels tel je?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xC0C0C0\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"1 kegels .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"2 kegels .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"3 kegels .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"4 kegels .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"5 kegels .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"6 kegels .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"4.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"5.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"6.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"groot naar klein\" code=\"\"><description /><messages><cell txtAlign=\"left,middle\" imgAlign=\"left,middle\" avoidOverlapping=\"true\" border=\"false\" image=\"groot naar klein .jpg\" type=\"initial\"><style /><p>Zet de plaatjes van GROOT naar klein<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"1\" /><cell image=\"groot.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleiner.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"nog kleiner .jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleinst .jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AUB\" /><\/activity><activity class=\"@memory.MemoryGame\" name=\"memo12\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"3\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"3\" /><cell image=\"memo (16).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (15).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (14).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (13).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (12).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (11).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (7).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (10).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (6).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (3).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (4).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (9).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel12\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"3\" cols=\"4\" border=\"true\" image=\"puzzel12.jpg\"><style /><shaper class=\"@TriangularJigSaw\" cols=\"4\" rows=\"3\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"rijmen\" code=\"\"><description /><messages /><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell txtAlign=\"right,bottom\" image=\"bus.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>bus<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"boot.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>boot<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"stuur.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>stuur<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"trein.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>trein<\/p><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell txtAlign=\"right,bottom\" image=\"mus.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>mus<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"noot.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>noot<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"vuur.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>vuur<\/p><\/cell><cell txtAlign=\"right,bottom\" image=\"konijn.jpg\"><style><font family=\"Arial\" size=\"22\" /><color background=\"0xFFFFFF\" /><\/style><p>konijn<\/p><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"1 kegels .jpg\" file=\"1_kegels_.jpg\" /><media name=\"1.jpg\" file=\"1.jpg\" /><media name=\"2 kegels .jpg\" file=\"2_kegels_.jpg\" /><media name=\"2.jpg\" file=\"2.jpg\" /><media name=\"3 kegels .jpg\" file=\"3_kegels_.jpg\" /><media name=\"3.jpg\" file=\"3.jpg\" /><media name=\"4 kegels .jpg\" file=\"4_kegels_.jpg\" /><media name=\"4.jpg\" file=\"4.jpg\" /><media name=\"5 kegels .jpg\" file=\"5_kegels_.jpg\" /><media name=\"5.jpg\" file=\"5.jpg\" /><media name=\"6 kegels .jpg\" file=\"6_kegels_.jpg\" /><media name=\"6.jpg\" file=\"6.jpg\" /><media name=\"boot.jpg\" file=\"boot.jpg\" /><media name=\"bus.jpg\" file=\"bus.jpg\" /><media name=\"groot naar klein .jpg\" file=\"groot_naar_klein_.jpg\" /><media name=\"groot.jpg\" file=\"groot.jpg\" /><media name=\"kleiner.jpg\" file=\"kleiner.jpg\" /><media name=\"kleinst .jpg\" file=\"kleinst_.jpg\" /><media name=\"konijn.jpg\" file=\"konijn.jpg\" /><media name=\"memo (10).jpg\" file=\"memo__10_.jpg\" /><media name=\"memo (11).jpg\" file=\"memo__11_.jpg\" /><media name=\"memo (12).jpg\" file=\"memo__12_.jpg\" /><media name=\"memo (13).jpg\" file=\"memo__13_.jpg\" /><media name=\"memo (14).jpg\" file=\"memo__14_.jpg\" /><media name=\"memo (15).jpg\" file=\"memo__15_.jpg\" /><media name=\"memo (16).jpg\" file=\"memo__16_.jpg\" /><media name=\"memo (3).jpg\" file=\"memo__3_.jpg\" /><media name=\"memo (4).jpg\" file=\"memo__4_.jpg\" /><media name=\"memo (6).jpg\" file=\"memo__6_.jpg\" /><media name=\"memo (7).jpg\" file=\"memo__7_.jpg\" /><media name=\"memo (9).jpg\" file=\"memo__9_.jpg\" /><media name=\"mus.jpg\" file=\"mus.jpg\" /><media name=\"nog kleiner .jpg\" file=\"nog_kleiner_.jpg\" /><media name=\"noot.jpg\" file=\"noot.jpg\" /><media name=\"puzzel12.jpg\" file=\"puzzel12.jpg\" /><media name=\"stuur.jpg\" file=\"stuur.jpg\" /><media name=\"trein.jpg\" file=\"trein.jpg\" /><media name=\"verkeerachtergrond.jpg\" file=\"verkeerachtergrond.jpg\" /><media name=\"vuur.jpg\" file=\"vuur.jpg\" /><media name=\"verkeerapplause.mp3\" file=\"verkeerapplause.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}