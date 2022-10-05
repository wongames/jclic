if(JClicObject){JClicObject.projectFiles["jules01a.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"jules01a\" version=\"0.1.3\"><settings><title>Jules01a<\/title><revision description=\"created\" date=\"10/2/22\" /><descriptors /><meta_langs>nl<\/meta_langs><descriptions><description language=\"nl\" /><\/descriptions><license type=\"by-nc-sa\" url=\"https://creativecommons.org/licenses/by-nc-sa/4.0\" /><\/settings><sequence><item id=\"start\" name=\"memo school\" delay=\"1\" /><item name=\"kleur\" delay=\"1\" /><item name=\"schaduw\" delay=\"1\" /><item name=\"puzzel2\" delay=\"1\" /><item name=\"kleuren\" delay=\"1\" /><\/sequence><activities><activity class=\"@memory.MemoryGame\" name=\"memo school\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Memory: Zoek 2 dezelfde plaatjes<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"hoek1.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"hoek2.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"hoek3.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"hoek4.jpg\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"schaduw\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Zoek de juiste schaduw<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"5\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"5\" rows=\"1\" /><cell image=\"boekentasjulesschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"drinkbusschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesappelschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesbrooddoosschaduw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"1\" cols=\"5\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"5\" rows=\"1\" /><cell image=\"boekentasjuleskleur.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"juleskleur.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"drinkbuskleur.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesappelkleur.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"julesbrooddooskleur.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"BUA\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"kleur\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Kan jij hetzelfde plaatje vinden? Kijk goed naar de kleuren.<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"blauw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"geel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"groen.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"rood.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"blauw.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"geel.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"groen.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"rood.jpg\"><style borderStroke=\"0.7\" markerStroke=\"5.0\"><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><activity class=\"@puzzles.DoublePuzzle\" name=\"puzzel2\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Puzzel je mee?<\/p><\/cell><\/messages><settings margin=\"8\" dragCells=\"true\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"1\" cols=\"2\" border=\"true\" image=\"puzzelschool.jpg\"><style /><shaper class=\"@ClassicJigSaw\" cols=\"2\" rows=\"1\" /><\/cells><scramble times=\"31\" /><layout position=\"AB\" /><\/activity><activity class=\"@associations.SimpleAssociation\" name=\"kleuren\" code=\"\"><description /><messages><cell type=\"initial\"><style /><p>Welke kleur boekentas neemt Jules mee naar school?<\/p><\/cell><\/messages><settings margin=\"8\" report=\"true\" reportActions=\"false\"><container bgColor=\"0xC0C0C0\"><image name=\"julesachtergrondjpg.jpg\" tiled=\"true\" /><counters time=\"false\" actions=\"false\" score=\"false\" /><\/container><window bgColor=\"0xFFFFFF\" border=\"true\" /><eventSounds><sound id=\"finishedError\" file=\"applausejules .mp3\" /><sound id=\"finishedOk\" file=\"applausejules .mp3\" /><\/eventSounds><\/settings><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"primary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"juleskleurblauw.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"juleskleurgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"juleskleurgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"juleskleurrood.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><cells rows=\"2\" cols=\"2\" cellWidth=\"300.0\" cellHeight=\"300.0\" border=\"true\" id=\"secondary\"><style /><shaper class=\"@Rectangular\" cols=\"2\" rows=\"2\" /><cell image=\"boekentasBLAUW.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"boekentasgeel.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"boekentasgroen.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><cell image=\"boekentasROOD.jpg\"><style><color background=\"0xFFFFFF\" /><\/style><\/cell><\/cells><scramble times=\"31\" primary=\"true\" secondary=\"true\" /><layout position=\"AB\" /><\/activity><\/activities><mediaBag><media name=\"blauw.jpg\" file=\"blauw.jpg\" /><media name=\"boekentasBLAUW.jpg\" file=\"boekentasblauw.jpg\" /><media name=\"boekentasgeel.jpg\" file=\"boekentasgeel.jpg\" /><media name=\"boekentasgroen.jpg\" file=\"boekentasgroen.jpg\" /><media name=\"boekentasjuleskleur.jpg\" file=\"boekentasjuleskleur.jpg\" /><media name=\"boekentasjulesschaduw.jpg\" file=\"boekentasjulesschaduw.jpg\" /><media name=\"boekentasROOD.jpg\" file=\"boekentasrood.jpg\" /><media name=\"drinkbuskleur.jpg\" file=\"drinkbuskleur.jpg\" /><media name=\"drinkbusschaduw.jpg\" file=\"drinkbusschaduw.jpg\" /><media name=\"geel.jpg\" file=\"geel.jpg\" /><media name=\"groen.jpg\" file=\"groen.jpg\" /><media name=\"hoek1.jpg\" file=\"hoek1.jpg\" /><media name=\"hoek2.jpg\" file=\"hoek2.jpg\" /><media name=\"hoek3.jpg\" file=\"hoek3.jpg\" /><media name=\"hoek4.jpg\" file=\"hoek4.jpg\" /><media name=\"julesachtergrondjpg.jpg\" file=\"julesachtergrondjpg.jpg\" /><media name=\"julesappelkleur.jpg\" file=\"julesappelkleur.jpg\" /><media name=\"julesappelschaduw.jpg\" file=\"julesappelschaduw.jpg\" /><media name=\"julesbrooddooskleur.jpg\" file=\"julesbrooddooskleur.jpg\" /><media name=\"julesbrooddoosschaduw.jpg\" file=\"julesbrooddoosschaduw.jpg\" /><media name=\"juleskleur.jpg\" file=\"juleskleur.jpg\" /><media name=\"juleskleurblauw.jpg\" file=\"juleskleurblauw.jpg\" /><media name=\"juleskleurgeel.jpg\" file=\"juleskleurgeel.jpg\" /><media name=\"juleskleurgroen.jpg\" file=\"juleskleurgroen.jpg\" /><media name=\"juleskleurrood.jpg\" file=\"juleskleurrood.jpg\" /><media name=\"julesschaduw.jpg\" file=\"julesschaduw.jpg\" /><media name=\"puzzelschool.jpg\" file=\"puzzelschool.jpg\" /><media name=\"rood.jpg\" file=\"rood.jpg\" /><media name=\"applausejules .mp3\" file=\"applausejules_.mp3\" /><\/mediaBag><\/JClicProject>\r\n";}