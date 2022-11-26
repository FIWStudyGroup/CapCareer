
CREATE DATABASE IF NOT EXISTS `capcareer_wizard_221125` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci;
USE `capcareer_wizard_221125`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer`
--
-- Erstellt am: 24. Nov 2022 um 01:04
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer` (
  `id` int(4) NOT NULL,
  `answer` text COLLATE utf8mb4_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `answer`:
--

--
-- Daten für Tabelle `answer`
--

INSERT INTO `answer` (`id`, `answer`) VALUES
(1, 'Ich gehe begeistert an Herausforderungen ran und arbeite mich schnell in neue Themengebieten ein'),
(2, 'Ich gehe die Herausforderungen an und versuche neue Aufgaben solide umzusetzten. '),
(3, 'Ich hole mir gerne Unterstuetzung hinzu, da mich neue Herausforderungen auch mal ueberfordern koennen.');


--
-- Tabellenstruktur für Tabelle `job_post_wizard`
--
-- Erstellt am: 24. Nov 2022 um 01:04
--

DROP TABLE IF EXISTS `job_post_wizard`;
CREATE TABLE `job_post_wizard` (
  `id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `ref` varchar(20) COLLATE utf8mb4_german2_ci NOT NULL,
  `title` varchar(500) COLLATE utf8mb4_german2_ci NOT NULL,
  `description` text COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `url` varchar(120) COLLATE utf8mb4_german2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `job_post_wizard`:
--

--
-- Daten für Tabelle `job_post_wizard`
--

INSERT INTO `job_post_wizard` (`id`, `ref`, `title`, `description`, `url`) VALUES
(00001, '150612', 'Softwareentwickler (w/m/d)', 'Du moechtest den gesamten Software-Entwicklungsprozess verstehen und geschaeftskritische Individualsoftware auf hoechstem Niveau gestalten? Du sucht eine Zukunft im Software Engineering in einem global agierenden Unternehmen? Dann werde als Softwareentwickler (w/m/d) Teil unseres Teams!\n\nDiese Stelle ist in Vollzeit sowie in Teilzeit zu besetzen.\n\nDein neuer Job\n\n    Agile Entwicklung in abwechslungsreichen und innovativen Softwareprojekten f?r Branchenf?hrer.\n    Zeige deine Coding Skills mit Technologien wie Spring Boot, Docker, Kubernetes, Angular, Cloud und Microservices - oder lerne bei uns wie es geht.\n    Entdecke alle Facetten des Software Engineerings von der Planung bis zum Betrieb: Konzepte, Implementierung, Testen und Kundenkontakt.\n    Bei uns z?hlt, was man sagt, nicht wer es sagt - durch unsere flachen Hierarchien bekommst du schnell die Freiheit, selbst zu gestalten und Verantwortung zu ?bernehmen.\n    Im Team (weiter-)entwickeln - Wir setzen auf die St?rke der Teamarbeit und profitieren von internen Communitys.\n\nDein Profil\n\n    Dein abgeschlossenes Studium in Informatik, Wirtschaftsinformatik oder einem anderen MINT-Fach hat dich neugierig auf die Softwareentwicklung gemacht? Oder du willst als IT-affine/r Quereinsteiger*in bei uns starten? Klasse!\n    Du konntest schon erste Erfahrungen im Programmieren sammeln, z. B. mit Java, JavaScript oder C# und bist bereit weitere Skills aufzubauen.\n    Dein hohes Qualit?tsbewusstsein und agiles Mindset verbindest du mit Kommunikationsst?rke und Teamplayer-Mentalit?t, du hast Freude daran Wissen aufzubauen und zu teilen.\n    Du hast gute Deutsch- und Englischkenntnisse', 'https://www.capgemini.com/de-de/jobs/MGmSa4MBp4DrZzPZiZxC/softwareentwickler-wmd/'),
(00003, 'julia_0', 'Business Analyst BTS (w/m/d)', 'BTS = Business and Technology Solutions, nach Branchen ausgerichtet, vornehmlich Beratung, Prozessanalyse', 'hier URL'),
(00004, 'julia_1', 'Business Analyst C&CA (w/m/d)', 'C&CA = Cloud & Custom Applications, besch?ftigt sich vornehmlich mit der Entwicklung von Individualsoftware', 'hier URL'),
(00005, 'julia_2', 'UX-Professional (w/m/d)', 'Ein Usability & UX Professional - im Folgenden f?r die Lesbarkeit als UX Professional zusammengefasst - k?mmert sich um die Nutzungsqualit?t von interaktiven Systemen sowie um die Erlebnisse der Benutzer vor, w?hrend und nach der Benutzung. Es gibt eine Vielzahl von Handlungsfeldern, in denen Aktivit?ten von UX Professional ben?tigt werden. Je nach Qualifikation und Erfahrung spezialisieren sich UX Professionals auf ein oder mehrere Rollen. Der Fokus des Berufsfeldes Usability/UX liegt auf den T?tigkeiten von UX Professionals in den Aufgaben im Sinne des menschzentrierten Gestaltungsprozesses, wie er in der DIN EN ISO 9241-210 beschrieben ist: MANAGEMENT - Planung und Auswahl der nutzerzentrierten Methoden Strategie f?r Human-centered Design in Unternehmen, Portfolio- und Produktplanung mit Fokus auf Usability/UX, Festlegen, Einf?hren und Betreiben von nutzerzentrierten Aktivit?ten in Produkt-, Service- und Systemgestaltung. RESEARCH - Analyse des Problems\nErheben von Nutzungskontexten sowie ableiten von Nutzungsanforderungen entlang identifizierter Erfordernisse \nKONZEPTION, SPEZIFIKATION & DESIGN - Gestaltungsalternative planen, entwerfen und umsetzen\nKonzipieren, Spezifizieren und Umsetzung von L?sungen und der Interaktion zwischen Mensch und System bis hin zur L?sung\nEVALUATION - Gestaltungsl?sungen aus Benutzerperspektive bewerten\nDurchf?hren von Usability-Inspektionen (ohne Benutzer) und Usability-Tests (mit Benutzern)\nDerzeit existiert eine Vielzahl an Jobtitel (u.a. UX Designer, UI Designer, UX Engineer, UX Manager, UI Designer, Product Owner, User Researcher, UX Specialist, u.v.m.) unter denen UX Professionals einzelne oder mehrere der beschriebenen Aufgaben im Rahmen von Entwicklungsprojekten wahrnehmen. \nDie unterschiedlichen T?tigkeiten innerhalb der oben genannten Aufgaben werden anhand von professionellen Rollen beschrieben, die sich durch unterschiedliche Methoden, Werkzeuge und ben?tigte Qualifikation und Erfahrung differenzieren. \nEs besteht kein Anspruch auf Vollst?ndigkeit. Die beispielhaften Rollen werden st?ndig weiter konkretisiert und beschrieben.', 'https://germanupa.de/wissen/berufsbild'),
(00006, 'julia_3', 'Business/Enterprise Architect (w/m/d)', 'Business/Enterprise Architect Designers\nDo you want to support leading companies to improve business performance through business design and enterprise architecture? Do you want to work with proven methodologies, best-practices content, leading tools & methods? Your projects will concentrate on areas such as business modeling & enterprise modeling, value stream analysis, business capability design, business process improvement, customer experience design, methodology, governance, impact-analysis, information flow design, information architecture, IT landscape architecture, tools & methods, workshop facilitation, as-is-analysis and design of target architectures.\n\nIn this position, you might have a few projects at hand simultaneously, depending on your skillset and wish. There will be a lot of variation, and you will get a unique chance to work with a very experienced and innovative team! Further on, you will also get to specialize in the area of consulting that motivates you the most.', 'https://www.solita.fi/en/positions/business-enterprise-architect-designers-4861517003/');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question`
--
-- Erstellt am: 24. Nov 2022 um 01:04
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int(4) NOT NULL,
  `question` text COLLATE utf8mb4_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `question`:
--

--
-- Daten für Tabelle `question`
--

INSERT INTO `question` (`id`, `question`) VALUES
(1, 'Wie gehen Sie mit Herausforderungen um?');



--
-- Tabellenstruktur für Tabelle `skill`
--
-- Erstellt am: 18. Nov 2022 um 15:59
--

DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill` (
  `id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `skill` varchar(1000) COLLATE utf8mb4_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `skill`:
--

--
-- Daten für Tabelle `skill`
--

INSERT INTO `skill` (`id`, `skill`) VALUES
(0001, 'technikbegeistert'),
(0002, 'verantwortungsbewusst'),
(0003, 'organisiert'),
(0004, 'selbststaendig'),
(0005, 'analytisch'),
(0006, 'lernbereitschaft'),
(0007, 'Abstraktionsvermoegen'),
(0008, 'schnelle Auffassungsgabe'),
(0009, 'kreativ'),
(0010, 'teamplayer'),
(0011, 'loest gerne knifflige Probleme'),
(0012, 'mutig'),
(0013, 'selbstbewusst'),
(0014, 'detailorientiert'),
(0015, 'kann gut zuhoeren'),
(0016, 'kann sich gut ausdruecken'),
(0017, 'teilt gerne Wissen'),
(0018, 'Einzelgaenger'),
(0019, 'bodenstaendig'),
(0020, 'Reisebereitschaft'),
(0021, 'Analysefaehigkeit Prozesse'),
(0022, 'Fachliches Verstaendnis'),
(0023, 'Datenanalyse'),
(0024, 'Linguistisches Verstaendnis'),
(0025, 'Entscheidungsfaehigkeit'),
(0026, 'Priorisierung'),
(0027, 'Zeitmanagement');










-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer_skill`
--
-- Erstellt am: 24. Nov 2022 um 01:04
--

DROP TABLE IF EXISTS `answer_skill`;
CREATE TABLE `answer_skill` (
  `answer_id` int(4) NOT NULL,
  `skill_id` int(4) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `answer_skill`:
--   `answer_id`
--       `answer` -> `id`
--   `skill_id`
--       `skill` -> `id`
--

--
-- Daten für Tabelle `answer_skill`
--

INSERT INTO `answer_skill` (`answer_id`, `skill_id`) VALUES
(1, 0004),
(2, 0004),
(1, 0006),
(3, 0006),
(1, 0008),
(3, 0010),
(3, 0012),
(2, 0019);

-- --------------------------------------------------------


--
-- Tabellenstruktur für Tabelle `job_skill`
--
-- Erstellt am: 24. Nov 2022 um 01:04
--

DROP TABLE IF EXISTS `job_skill`;
CREATE TABLE `job_skill` (
  `job_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `skill_id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `rating` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `job_skill`:
--   `job_id`
--       `job_post_wizard` -> `id`
--   `skill_id`
--       `skill` -> `id`
--

--
-- Daten für Tabelle `job_skill`
--

INSERT INTO `job_skill` (`job_id`, `skill_id`, `rating`) VALUES
(00001, 0001, 5),
(00001, 0002, 3),
(00001, 0003, 5),
(00001, 0004, 3),
(00001, 0005, 5),
(00001, 0006, 5),
(00001, 0007, 5),
(00001, 0008, 3),
(00001, 0010, 5),
(00001, 0011, 5),
(00001, 0012, 3),
(00001, 0013, 3),
(00001, 0014, 5),
(00001, 0017, 3),
(00001, 0019, 0),
(00001, 0021, 5),
(00001, 0022, 5),
(00001, 0023, 1),
(00001, 0025, 1),
(00001, 0026, 3),
(00001, 0027, 3),
(00003, 0001, 3),
(00003, 0015, 5),
(00003, 0016, 5),
(00003, 0020, 5),
(00003, 0021, 5),
(00003, 0022, 5),
(00003, 0023, 4),
(00003, 0024, 0),
(00003, 0024, 5),
(00003, 0025, 5),
(00003, 0026, 5),
(00003, 0027, 5),
(00004, 0001, 4),
(00004, 0015, 5),
(00004, 0016, 5),
(00004, 0020, 4),
(00004, 0021, 5),
(00004, 0022, 5),
(00004, 0023, 4),
(00004, 0024, 0),
(00004, 0025, 5),
(00004, 0026, 5),
(00004, 0027, 5),
(00005, 0001, 3),
(00005, 0015, 5),
(00005, 0016, 5),
(00005, 0020, 5),
(00005, 0021, 3),
(00005, 0022, 4),
(00005, 0023, 0),
(00005, 0024, 0),
(00005, 0025, 3),
(00005, 0026, 5),
(00005, 0027, 4),
(00006, 0001, 5),
(00006, 0015, 3),
(00006, 0016, 3),
(00006, 0020, 4),
(00006, 0021, 4),
(00006, 0022, 4),
(00006, 0023, 2),
(00006, 0024, 0),
(00006, 0025, 5),
(00006, 0026, 5),
(00006, 0027, 4);



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question_answer`
--
-- Erstellt am: 24. Nov 2022 um 01:04
--

DROP TABLE IF EXISTS `question_answer`;
CREATE TABLE `question_answer` (
  `question_id` int(5) NOT NULL,
  `answer_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `question_answer`:
--   `answer_id`
--       `answer` -> `id`
--   `question_id`
--       `question` -> `id`
--

--
-- Daten für Tabelle `question_answer`
--

INSERT INTO `question_answer` (`question_id`, `answer_id`) VALUES
(1, 1),
(1, 2),
(1, 3);

-- --------------------------------------------------------


--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `answer_skill`
--
ALTER TABLE `answer_skill`
  ADD PRIMARY KEY (`skill_id`,`answer_id`),
  ADD KEY `answer_id` (`answer_id`);

--
-- Indizes für die Tabelle `job_post_wizard`
--
ALTER TABLE `job_post_wizard`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `job_skill`
--
ALTER TABLE `job_skill`
  ADD KEY `FK_skill_id` (`skill_id`),
  ADD KEY `FK_job_id` (`job_id`);

--
-- Indizes für die Tabelle `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `question_answer`
--
ALTER TABLE `question_answer`
  ADD KEY `FK_question_id` (`question_id`),
  ADD KEY `FK_answer_id` (`answer_id`);

--
-- Indizes für die Tabelle `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `skill` (`skill`) USING HASH;

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `job_post_wizard`
--
ALTER TABLE `job_post_wizard`
  MODIFY `id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `question`
--
ALTER TABLE `question`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `skill`
--
ALTER TABLE `skill`
  MODIFY `id` int(4) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `answer_skill`
--
ALTER TABLE `answer_skill`
  ADD CONSTRAINT `answer_skill_ibfk_1` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`),
  ADD CONSTRAINT `answer_skill_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`);

--
-- Constraints der Tabelle `job_skill`
--
ALTER TABLE `job_skill`
  ADD CONSTRAINT `FK_job_id` FOREIGN KEY (`job_id`) REFERENCES `job_post_wizard` (`id`),
  ADD CONSTRAINT `FK_skill_id` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`);

--
-- Constraints der Tabelle `question_answer`
--
ALTER TABLE `question_answer`
  ADD CONSTRAINT `FK_answer_id` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`),
  ADD CONSTRAINT `FK_question_id` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);


--
-- Metadaten
--
USE `phpmyadmin`;

--
-- Metadaten für Tabelle answer
--

--
-- Metadaten für Tabelle answer_skill
--

--
-- Metadaten für Tabelle job_post_wizard
--

--
-- Metadaten für Tabelle job_skill
--

--
-- Metadaten für Tabelle question
--

--
-- Metadaten für Tabelle question_answer
--

--
-- Metadaten für Tabelle skill
--

--
-- Metadaten für Datenbank capcareer_wizard
--

--
-- Daten für Tabelle `pma__pdf_pages`
--

INSERT INTO `pma__pdf_pages` (`db_name`, `page_descr`) VALUES
('capcareer_wizard', 'er_diagramm_capcareer_wizard');

SET @LAST_PAGE = LAST_INSERT_ID();

--
-- Daten für Tabelle `pma__table_coords`
--

INSERT INTO `pma__table_coords` (`db_name`, `table_name`, `pdf_page_number`, `x`, `y`) VALUES
('capcareer_wizard', 'answer', @LAST_PAGE, 430, 400),
('capcareer_wizard', 'answer_skill', @LAST_PAGE, 50, 530),
('capcareer_wizard', 'job_post_wizard', @LAST_PAGE, 970, 80),
('capcareer_wizard', 'job_skill', @LAST_PAGE, 550, 210),
('capcareer_wizard', 'question', @LAST_PAGE, 90, 40),
('capcareer_wizard', 'question_answer', @LAST_PAGE, 70, 240),
('capcareer_wizard', 'skill', @LAST_PAGE, 570, 550);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
