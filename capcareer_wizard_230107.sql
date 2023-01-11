-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 10. Jan 2023 um 22:19
-- Server-Version: 10.4.20-MariaDB
-- PHP-Version: 8.0.9

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
CREATE DATABASE IF NOT EXISTS `capcareer_wizard_230107` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `capcareer_wizard_230107`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer`
--
-- Erstellt am: 10. Jan 2023 um 19:02
-- Zuletzt aktualisiert: 10. Jan 2023 um 19:07
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `answer` text COLLATE utf8mb4_german2_ci NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `answer`:
--

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
-- Tabellenstruktur für Tabelle `answer_rating`
--
-- Erstellt am: 07. Jan 2023 um 15:56
--

DROP TABLE IF EXISTS `answer_rating`;
CREATE TABLE IF NOT EXISTS `answer_rating` (
  `job_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `answer_id` int(11) NOT NULL,
  KEY `job_id` (`job_id`),
  KEY `answer_id` (`answer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `answer_rating`:
--   `job_id`
--       `job_post_wizard` -> `id`
--   `answer_id`
--       `answer` -> `id`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `answer_skill`
--
-- Erstellt am: 07. Jan 2023 um 15:56
--

DROP TABLE IF EXISTS `answer_skill`;
CREATE TABLE IF NOT EXISTS `answer_skill` (
  `answer_id` int(4) NOT NULL,
  `skill_id` int(4) UNSIGNED ZEROFILL NOT NULL,
  PRIMARY KEY (`skill_id`,`answer_id`),
  KEY `answer_id` (`answer_id`)
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
(1, 0001),
(1, 0006),
(3, 0006),
(1, 0008),
(3, 0010);

-- --------------------------------------------------------

--
-- Stellvertreter-Struktur des Views `current_answers`
-- (Siehe unten für die tatsächliche Ansicht)
--
DROP VIEW IF EXISTS `current_answers`;
CREATE TABLE IF NOT EXISTS `current_answers` (
`sequence` int(2) unsigned
,`question_id` int(4)
,`answer_id` int(4)
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `current_questionnaire`
--
-- Erstellt am: 07. Jan 2023 um 15:56
--

DROP TABLE IF EXISTS `current_questionnaire`;
CREATE TABLE IF NOT EXISTS `current_questionnaire` (
  `sequence` int(2) UNSIGNED NOT NULL,
  `question_id` int(4) NOT NULL,
  PRIMARY KEY (`sequence`),
  KEY `FK_question_id` (`question_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `current_questionnaire`:
--   `question_id`
--       `question` -> `id`
--

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
-- Stellvertreter-Struktur des Views `current_questionnaire_answers`
-- (Siehe unten für die tatsächliche Ansicht)
--
DROP VIEW IF EXISTS `current_questionnaire_answers`;
CREATE TABLE IF NOT EXISTS `current_questionnaire_answers` (
`sequence` int(2) unsigned
,`question_id` int(4)
,`answer_id` int(4)
);

-- --------------------------------------------------------

--
-- Stellvertreter-Struktur des Views `current_questionnaire_answers_text`
-- (Siehe unten für die tatsächliche Ansicht)
--
DROP VIEW IF EXISTS `current_questionnaire_answers_text`;
CREATE TABLE IF NOT EXISTS `current_questionnaire_answers_text` (
`sequence` int(2) unsigned
,`answer_id` int(4)
,`answer` text
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `job_post_wizard`
--
-- Erstellt am: 07. Jan 2023 um 15:56
--

DROP TABLE IF EXISTS `job_post_wizard`;
CREATE TABLE IF NOT EXISTS `job_post_wizard` (
  `id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `ref` varchar(20) COLLATE utf8mb4_german2_ci NOT NULL,
  `title` varchar(500) COLLATE utf8mb4_german2_ci NOT NULL,
  `description` text COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `url` varchar(120) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `job_post_wizard`:
--

--
-- Daten für Tabelle `job_post_wizard`
--

INSERT INTO `job_post_wizard` (`id`, `ref`, `title`, `description`, `url`) VALUES
(00001, '', 'Business Analyst BTS (w/m/d)', 'BTS = Business and Technology Solutions, nach Branchen ausgerichtet, vornehmlich Beratung, Prozessanalyse', 'hier URL'),
(00002, '', 'B.A. C&CA', '', 'hier URL'),
(00003, '', 'B.A. DCX', '', 'hier URL'),
(00004, '', 'B.A. I&D', '', 'hier URL'),
(00005, '150612', 'SW Engineer BTS', '', 'hier URL'),
(00006, '', 'SW Engineer \nC&CA, DCX', '', 'hier URL'),
(00007, '', 'SW Engineer I&D', 'C&CA = Cloud & Custom Applications, besch?ftigt sich vornehmlich mit der Entwicklung von Individualsoftware', 'hier URL'),
(00008, '', 'UX-Professional', 'Ein Usability & UX Professional - im Folgenden f?r die Lesbarkeit als UX Professional zusammengefasst - k?mmert sich um die Nutzungsqualit?t von interaktiven Systemen sowie um die Erlebnisse der Benutzer vor, w?hrend und nach der Benutzung. Es gibt eine Vielzahl von Handlungsfeldern, in denen Aktivit?ten von UX Professional ben?tigt werden. ', 'hier URL'),
(00009, '', 'Business/Enterprise Architect', NULL, 'hier URL'),
(00010, '', 'Agile Enabler', NULL, 'hier URL');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `job_skill`
--
-- Erstellt am: 07. Jan 2023 um 15:56
-- Zuletzt aktualisiert: 10. Jan 2023 um 19:22
--

DROP TABLE IF EXISTS `job_skill`;
CREATE TABLE IF NOT EXISTS `job_skill` (
  `job_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `skill_id` int(4) UNSIGNED ZEROFILL NOT NULL,
  `rating` int(1) DEFAULT NULL,
  KEY `FK_skill_id` (`skill_id`),
  KEY `FK_job_id` (`job_id`)
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
-- Tabellenstruktur für Tabelle `passende_jobs`
--
-- Erstellt am: 10. Jan 2023 um 20:57
-- Zuletzt aktualisiert: 10. Jan 2023 um 20:57
--

DROP TABLE IF EXISTS `passende_jobs`;
CREATE TABLE IF NOT EXISTS `passende_jobs` (
  `answer_rating` int(11) DEFAULT NULL,
  `rating` int(1) DEFAULT NULL,
  `job_id` int(5) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONEN DER TABELLE `passende_jobs`:
--

--
-- Daten für Tabelle `passende_jobs`
--

INSERT INTO `passende_jobs` (`answer_rating`, `rating`, `job_id`) VALUES
(1, 1, 00010);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `question`
--
-- Erstellt am: 07. Jan 2023 um 15:56
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `question` text COLLATE utf8mb4_german2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `question`:
--

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
-- Erstellt am: 07. Jan 2023 um 15:56
-- Zuletzt aktualisiert: 10. Jan 2023 um 19:24
--

DROP TABLE IF EXISTS `question_answer`;
CREATE TABLE IF NOT EXISTS `question_answer` (
  `question_id` int(5) NOT NULL,
  `answer_id` int(4) NOT NULL,
  KEY `FK_question_id` (`question_id`),
  KEY `FK_answer_id` (`answer_id`)
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
-- Tabellenstruktur für Tabelle `skill`
--
-- Erstellt am: 07. Jan 2023 um 15:56
--

DROP TABLE IF EXISTS `skill`;
CREATE TABLE IF NOT EXISTS `skill` (
  `id` int(4) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `skill` varchar(1000) COLLATE utf8mb4_german2_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `skill` (`skill`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;

--
-- RELATIONEN DER TABELLE `skill`:
--

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

-- --------------------------------------------------------

--
-- Struktur des Views `current_answers` als Tabelle exportiert
--
DROP TABLE IF EXISTS `current_answers`;
CREATE TABLE IF NOT EXISTS `current_answers`(
    `sequence` int(2) unsigned NOT NULL,
    `question_id` int(4) NOT NULL,
    `answer_id` int(4) NOT NULL
);

-- --------------------------------------------------------

--
-- Struktur des Views `current_questionnaire_answers` als Tabelle exportiert
--
DROP TABLE IF EXISTS `current_questionnaire_answers`;
CREATE TABLE IF NOT EXISTS `current_questionnaire_answers`(
    `sequence` int(2) unsigned NOT NULL,
    `question_id` int(4) NOT NULL,
    `answer_id` int(4) NOT NULL
);

-- --------------------------------------------------------

--
-- Struktur des Views `current_questionnaire_answers_text` als Tabelle exportiert
--
DROP TABLE IF EXISTS `current_questionnaire_answers_text`;
CREATE TABLE IF NOT EXISTS `current_questionnaire_answers_text`(
    `sequence` int(2) unsigned NOT NULL,
    `answer_id` int(4) NOT NULL,
    `answer` text COLLATE utf8mb4_german2_ci NOT NULL
);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `answer_rating`
--
ALTER TABLE `answer_rating`
  ADD CONSTRAINT `answer_rating_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `job_post_wizard` (`id`),
  ADD CONSTRAINT `answer_rating_ibfk_2` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
