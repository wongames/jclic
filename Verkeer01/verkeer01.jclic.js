if(JClicObject){JClicObject.projectFiles["verkeer01.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"verkeer01\" version=\"0.1.3\"><settings><title>Verkeer01<\/title><revision description=\"created\" date=\"6/4/22\" /><author name=\"Charlotte Peeters\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"Memo (6)\" delay=\"1\" /><item name=\"getalbeelden 3\" delay=\"1\" /><item name=\"schaduwen\" delay=\"1\" /><item name=\"puzzel 1\" delay=\"1\" /><item name=\"vormen\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"Memo (6)\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"2\" /><cell image=\"memo (6).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (7).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (13).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (9).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"memo (5).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"getalbeelden 3\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Hoeveel auto's tel je?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"1\" /><cell image=\"blauweauto1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"blauweauto2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"blauweauto3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"1\" cols=\"3\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"3\" rows=\"1\" /><cell image=\"getalbeeld1.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"getalbeeld2.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"getalbeeld3.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AUB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel 1\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel: <\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"3\" border=\"true\" image=\"puzzel1.jpg\"><style /><shaper class=\"@JigSaw\" cols=\"3\" rows=\"2\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduwen\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw bij het plaatje.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"kleurschaduw (1).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (2).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (3).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (4).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (5).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (6).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (7).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"kleurschaduw (8).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"schaduw (1).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (2).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (3).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (4).jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (5).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (6).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (7).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"schaduw (8).jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"vormen\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Kan jij de juiste vorm vinden?<\/p><\/cell><cell type=\"final\"><style /><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"verkeerachtergrond.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"verkeerapplause.mp3\" /><sound id=\"finishedOk\" file=\"verkeerapplause.mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"autocirkel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autodriehoek.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autoovaal .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autoruit .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autoster.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autotrapezium .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autovierkant.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"autovijfhoek .jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"4\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"4\" rows=\"2\" /><cell image=\"cirkel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"driehoek.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"ovaal.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"ruit.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"ster.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"trappezium.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"vierkant.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"vijfhoek.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"autocirkel.jpg\" file=\"autocirkel.jpg\" /><media name=\"autodriehoek.jpg\" file=\"autodriehoek.jpg\" /><media name=\"autoovaal .jpg\" file=\"autoovaal_.jpg\" /><media name=\"autoruit .jpg\" file=\"autoruit_.jpg\" /><media name=\"autoster.jpg\" file=\"autoster.jpg\" /><media name=\"autotrapezium .jpg\" file=\"autotrapezium_.jpg\" /><media name=\"autovierkant.jpg\" file=\"autovierkant.jpg\" /><media name=\"autovijfhoek .jpg\" file=\"autovijfhoek_.jpg\" /><media name=\"blauweauto1.jpg\" file=\"blauweauto1.jpg\" /><media name=\"blauweauto2.jpg\" file=\"blauweauto2.jpg\" /><media name=\"blauweauto3.jpg\" file=\"blauweauto3.jpg\" /><media name=\"cirkel.jpg\" file=\"cirkel.jpg\" /><media name=\"driehoek.jpg\" file=\"driehoek.jpg\" /><media name=\"getalbeeld1.jpg\" file=\"getalbeeld1.jpg\" /><media name=\"getalbeeld2.jpg\" file=\"getalbeeld2.jpg\" /><media name=\"getalbeeld3.jpg\" file=\"getalbeeld3.jpg\" /><media name=\"kleurschaduw (1).jpg\" file=\"kleurschaduw__1_.jpg\" /><media name=\"kleurschaduw (2).jpg\" file=\"kleurschaduw__2_.jpg\" /><media name=\"kleurschaduw (3).jpg\" file=\"kleurschaduw__3_.jpg\" /><media name=\"kleurschaduw (4).jpg\" file=\"kleurschaduw__4_.jpg\" /><media name=\"kleurschaduw (5).jpg\" file=\"kleurschaduw__5_.jpg\" /><media name=\"kleurschaduw (6).jpg\" file=\"kleurschaduw__6_.jpg\" /><media name=\"kleurschaduw (7).jpg\" file=\"kleurschaduw__7_.jpg\" /><media name=\"kleurschaduw (8).jpg\" file=\"kleurschaduw__8_.jpg\" /><media name=\"memo (13).jpg\" file=\"memo__13_.jpg\" /><media name=\"memo (5).jpg\" file=\"memo__5_.jpg\" /><media name=\"memo (6).jpg\" file=\"memo__6_.jpg\" /><media name=\"memo (7).jpg\" file=\"memo__7_.jpg\" /><media name=\"memo (9).jpg\" file=\"memo__9_.jpg\" /><media name=\"memo.jpg\" file=\"memo.jpg\" /><media name=\"ovaal.jpg\" file=\"ovaal.jpg\" /><media name=\"puzzel1.jpg\" file=\"puzzel1.jpg\" /><media name=\"ruit.jpg\" file=\"ruit.jpg\" /><media name=\"schaduw (1).jpg\" file=\"schaduw__1_.jpg\" /><media name=\"schaduw (2).jpg\" file=\"schaduw__2_.jpg\" /><media name=\"schaduw (3).jpg\" file=\"schaduw__3_.jpg\" /><media name=\"schaduw (4).jpg\" file=\"schaduw__4_.jpg\" /><media name=\"schaduw (5).jpg\" file=\"schaduw__5_.jpg\" /><media name=\"schaduw (6).jpg\" file=\"schaduw__6_.jpg\" /><media name=\"schaduw (7).jpg\" file=\"schaduw__7_.jpg\" /><media name=\"schaduw (8).jpg\" file=\"schaduw__8_.jpg\" /><media name=\"ster.jpg\" file=\"ster.jpg\" /><media name=\"trappezium.jpg\" file=\"trappezium.jpg\" /><media name=\"verkeerachtergrond.jpg\" file=\"verkeerachtergrond.jpg\" /><media name=\"vierkant.jpg\" file=\"vierkant.jpg\" /><media name=\"vijfhoek.jpg\" file=\"vijfhoek.jpg\" /><media name=\"verkeerapplause.mp3\" file=\"verkeerapplause.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}
