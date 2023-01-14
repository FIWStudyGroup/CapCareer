-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Jan 2023 um 16:11
-- Server-Version: 10.4.25-MariaDB
-- PHP-Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `capcareer_wizard_230107`
--
CREATE DATABASE IF NOT EXISTS `capcareer_wizard_mit_rollen` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `capcareer_wizard_mit_rollen`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer` (
  `id` int(4) NOT NULL,
  `answer` text COLLATE utf8mb4_german2_ci NOT NULL,
  `rating` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `answer`
--

INSERT INTO `answer` (`id`, `answer`, `rating`) VALUES
(1, 'starke technische Verstaendnis ', 5),
(2, 'mittlere technische Verstaendnis ', 3),
(3, 'schwach technische Verstaendnis ', 1),
(4, 'starke Technischer Background', 5),
(5, 'mittlere Technischer Background', 3),
(6, 'schwache Technischer Background', 1),
(7, 'starke Reisebereitschaft', 5),
(8, 'mittlere Reisebereitschaft', 3),
(9, 'schwache Reisebereitschaft', 1),
(10, 'starke Analysefaehigkeit', 5),
(11, 'mittlere Analysefaehigkeit\n', 3),
(12, 'schwache Analysefaehigkeit', 1),
(13, 'starke Fachliches Verstaendnis', 5),
(14, 'mittlere Fachliches Verstaendnis', 3),
(15, 'schwache Fachliches Verstaendnis', 1),
(16, 'starke Datenanalyse', 5),
(17, 'mittlere Datenanalyse', 3),
(18, 'schwache Datenanalyse', 1),
(19, 'starke Linguistik', 5),
(20, 'mittlere Linguistik', 3),
(21, 'schwache Linguistik', 1),
(22, 'starke Entscheidungsfaehigkeit', 5),
(23, 'mittlere Entscheidungsfaehigkeit', 3),
(24, 'schwache Entscheidungsfaehigkeit', 1),
(25, 'starke Priorisieren', 5),
(26, 'mittlere Priorisieren', 3),
(27, 'schwache Priorisieren', 1),
(28, 'starke Zeitmanagement', 5),
(29, 'mittlere Zeitmanagement', 3),
(30, 'schwache Zeitmanagement', 1),
(31, 'starke Kommunikationsskills', 5),
(32, 'mittlere Kommunikationsskills', 3),
(33, 'schwache Kommunikationsskills', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer_skill`
--

DROP TABLE IF EXISTS `answer_skill`;
CREATE TABLE `answer_skill` (
  `answer_id` int(4) NOT NULL,
  `skill_id` int(4) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `answer_skill`
--

INSERT INTO `answer_skill` (`answer_id`, `skill_id`) VALUES
(1, 0001),
(1, 0006),
(3, 0006),
(1, 0008),
(3, 0010);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `current_questionnaire`
--

DROP TABLE IF EXISTS `current_questionnaire`;
CREATE TABLE `current_questionnaire` (
  `sequence` int(2) UNSIGNED NOT NULL,
  `question_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `current_questionnaire`
--

INSERT INTO `current_questionnaire` (`sequence`, `question_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `current_questionnaire_answers`
--

DROP TABLE IF EXISTS `current_questionnaire_answers`;
CREATE TABLE `current_questionnaire_answers` (
  `sequence` int(2) UNSIGNED NOT NULL,
  `question_id` int(4) NOT NULL,
  `answer_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `current_questionnaire_answers_text`
--

DROP TABLE IF EXISTS `current_questionnaire_answers_text`;
CREATE TABLE `current_questionnaire_answers_text` (
  `sequence` int(2) UNSIGNED NOT NULL,
  `answer_id` int(4) NOT NULL,
  `answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `job_angebot`
--

DROP TABLE IF EXISTS `job_angebot`;
CREATE TABLE `job_angebot` (
  `ref` varchar(100) NOT NULL,
  `rolle_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `standort` varchar(1000) DEFAULT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int(4) NOT NULL,
  `question` text COLLATE utf8mb4_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `question`
--

INSERT INTO `question` (`id`, `question`) VALUES
(1, '1. Hast du technisches Verstaendnis?'),
(2, '2. Wie stark ist dein technischer Background?'),
(3, '3. Wie gross ist deine Reisebereitschaft?\n'),
(4, '4. Wie stark ist deine Analyse Faehigkeit von Prozessen?'),
(5, '5. Wie stark ist dein Fachliches Verstaendnis?'),
(6, '6. Wie stark ist deine Faehigkeit Daten zu analysieren?'),
(7, '7. Wie stark ist deine Linguistik?'),
(8, '8. Wie stark ist deine Faehigkeit Entscheidungen zu treffen?'),
(9, '9. Wie stark bist du im Priorisieren?'),
(10, '10. Wie gut ist dein Zeitmanagement?'),
(11, '11. Wie stark sind deine Kommunikationsskills?');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question_answer`
--

DROP TABLE IF EXISTS `question_answer`;
CREATE TABLE `question_answer` (
  `question_id` int(5) NOT NULL,
  `answer_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `question_answer`
--

INSERT INTO `question_answer` (`question_id`, `answer_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(5, 13),
(5, 14),
(5, 15),
(6, 16),
(6, 17),
(6, 18),
(7, 19),
(7, 20),
(7, 21),
(8, 22),
(8, 23),
(8, 24),
(9, 25),
(9, 26),
(9, 27),
(10, 28),
(10, 29),
(10, 30),
(11, 31),
(11, 32),
(11, 33),
(2, 4),
(2, 5),
(2, 6),
(1, 1),
(1, 2),
(1, 3),
(3, 7),
(3, 8),
(3, 9),
(4, 10),
(4, 11),
(4, 12),
(5, 13),
(5, 14),
(5, 15),
(6, 16),
(6, 17),
(6, 18),
(7, 19),
(7, 20),
(7, 21),
(8, 22),
(8, 23),
(8, 24),
(9, 25),
(9, 26),
(9, 27),
(10, 28),
(10, 29),
(10, 30),
(11, 31),
(11, 32),
(11, 33),
(2, 4),
(2, 5),
(2, 6);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rolle`
--

DROP TABLE IF EXISTS `rolle`;
CREATE TABLE `rolle` (
  `id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `rolle` varchar(100) NOT NULL,
  `beschreibung` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `rolle`
--

INSERT INTO `rolle` (`id`, `rolle`, `beschreibung`) VALUES
(00001, 'Business Analyst BTS (w/m/d)', 'BTS = Business and Technology Solutions, nach Branchen ausgerichtet, vornehmlich Beratung, Prozessanalyse'),
(00002, 'B.A. C&CA', 'hier URL'),
(00003, 'B.A. DCX', 'hier URL'),
(00004, 'B.A. I&D', 'hier URL'),
(00005, 'SW Engineer BTS', 'hier URL'),
(00006, 'SW Engineer \nC&CA, DCX', 'hier URL'),
(00007, 'SW Engineer I&D', 'C&CA = Cloud & Custom Applications, besch?ftigt sich vornehmlich mit der Entwicklung von Individualsoftware'),
(00008, 'UX-Professional', 'Ein Usability & UX Professional - im Folgenden f?r die Lesbarkeit als UX Professional zusammengefasst - k?mmert sich um die Nutzungsqualit?t von interaktiven Systemen sowie um die Erlebnisse der Benutzer vor, w?hrend und nach der Benutzung. Es gibt eine Vielzahl von Handlungsfeldern, in denen Aktivit?ten von UX Professional ben?tigt werden. '),
(00009, 'Business/Enterprise Architect', ''),
(00010, 'Agile Enabler', '');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rolle_skill`
--

DROP TABLE IF EXISTS `rolle_skill`;
CREATE TABLE `rolle_skill` (
  `rolle_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `skill_id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `rating` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `rolle_skill`
--

INSERT INTO `rolle_skill` (`rolle_id`, `skill_id`, `rating`) VALUES
(00001, 0001, 3),
(00001, 0002, 1),
(00001, 0003, 5),
(00001, 0004, 5),
(00001, 0005, 5),
(00001, 0006, 4),
(00001, 0007, 0),
(00001, 0008, 5),
(00001, 0009, 5),
(00001, 0010, 5),
(00001, 0011, 5),
(00002, 0001, 5),
(00002, 0002, 3),
(00002, 0003, 4),
(00002, 0004, 5),
(00002, 0005, 5),
(00002, 0006, 4),
(00002, 0007, 0),
(00002, 0008, 5),
(00002, 0009, 5),
(00002, 0010, 5),
(00002, 0011, 5),
(00003, 0001, 4),
(00003, 0002, 2),
(00003, 0003, 4),
(00003, 0004, 5),
(00003, 0005, 5),
(00003, 0006, 3),
(00003, 0007, 0),
(00003, 0008, 5),
(00003, 0009, 5),
(00003, 0010, 5),
(00003, 0011, 5),
(00004, 0001, 5),
(00004, 0002, 3),
(00004, 0003, 4),
(00004, 0004, 5),
(00004, 0005, 5),
(00004, 0006, 5),
(00004, 0007, 3),
(00004, 0008, 5),
(00004, 0009, 5),
(00004, 0010, 5),
(00004, 0011, 5),
(00005, 0001, 5),
(00005, 0002, 4),
(00005, 0003, 3),
(00005, 0004, 4),
(00005, 0005, 4),
(00005, 0006, 3),
(00005, 0007, 0),
(00005, 0008, 3),
(00005, 0009, 4),
(00005, 0010, 4),
(00005, 0011, 4),
(00006, 0001, 5),
(00006, 0002, 5),
(00006, 0003, 1),
(00006, 0004, 3),
(00006, 0005, 3),
(00006, 0006, 3),
(00006, 0007, 0),
(00006, 0008, 3),
(00006, 0009, 4),
(00006, 0010, 4),
(00006, 0011, 3),
(00007, 0001, 5),
(00007, 0002, 3),
(00007, 0003, 1),
(00007, 0004, 4),
(00007, 0005, 3),
(00007, 0006, 5),
(00007, 0007, 3),
(00007, 0008, 3),
(00007, 0009, 4),
(00007, 0010, 4),
(00007, 0011, 3),
(00008, 0001, 3),
(00008, 0002, 3),
(00008, 0003, 5),
(00008, 0004, 3),
(00008, 0005, 4),
(00008, 0006, 0),
(00008, 0007, 0),
(00008, 0008, 3),
(00008, 0009, 5),
(00008, 0010, 4),
(00008, 0011, 5),
(00009, 0001, 5),
(00009, 0002, 5),
(00009, 0003, 4),
(00009, 0004, 4),
(00009, 0005, 4),
(00009, 0006, 2),
(00009, 0007, 0),
(00009, 0008, 5),
(00009, 0009, 5),
(00009, 0010, 4),
(00009, 0011, 3),
(00010, 0001, 1),
(00010, 0002, 1),
(00010, 0003, 2),
(00010, 0004, 1),
(00010, 0005, 1),
(00010, 0006, 0),
(00010, 0007, 0),
(00010, 0008, 2),
(00010, 0009, 5),
(00010, 0010, 5),
(00010, 0011, 5);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `skill`
--

DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill` (
  `id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `skill` varchar(1000) COLLATE utf8mb4_german2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- Daten für Tabelle `skill`
--

INSERT INTO `skill` (`id`, `skill`) VALUES
(0001, 'Technisches Verstaendnis'),
(0002, 'Technischer Background'),
(0003, 'Reisebereitschaft'),
(0004, 'Analysefaehigkeit Prozesse'),
(0005, 'Fachliches Verstaendnis'),
(0006, 'Datenanalyse'),
(0007, 'Linguistik'),
(0008, 'Entscheidungsfaehigkeit'),
(0009, 'Priorisieren '),
(0010, 'Zeitmanagement'),
(0011, 'Kommunikationsskills\n');

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
-- Indizes für die Tabelle `current_questionnaire`
--
ALTER TABLE `current_questionnaire`
  ADD PRIMARY KEY (`sequence`),
  ADD KEY `FK_question_id` (`question_id`) USING BTREE;

--
-- Indizes für die Tabelle `job_angebot`
--
ALTER TABLE `job_angebot`
  ADD PRIMARY KEY (`ref`),
  ADD KEY `FK_rolle_id` (`rolle_id`);

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
-- Indizes für die Tabelle `rolle`
--
ALTER TABLE `rolle`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `rolle_skill`
--
ALTER TABLE `rolle_skill`
  ADD KEY `FK_rolle_id` (`rolle_id`),
  ADD KEY `FK_skill_id` (`skill_id`);

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
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT für Tabelle `question`
--
ALTER TABLE `question`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
-- Constraints der Tabelle `current_questionnaire`
--
ALTER TABLE `current_questionnaire`
  ADD CONSTRAINT `current_questionnaire_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `job_angebot`
--
ALTER TABLE `job_angebot`
  ADD CONSTRAINT `job_angebot_ibfk_1` FOREIGN KEY (`rolle_id`) REFERENCES `rolle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `question_answer`
--
ALTER TABLE `question_answer`
  ADD CONSTRAINT `FK_answer_id` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`),
  ADD CONSTRAINT `FK_question_id` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Constraints der Tabelle `rolle_skill`
--
ALTER TABLE `rolle_skill`
  ADD CONSTRAINT `rolle_skill_ibfk_1` FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rolle_skill_ibfk_2` FOREIGN KEY (`rolle_id`) REFERENCES `rolle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
