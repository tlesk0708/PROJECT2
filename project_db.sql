-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2025 at 07:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `question1` varchar(255) DEFAULT NULL,
  `question2` varchar(255) DEFAULT NULL,
  `question3` varchar(255) DEFAULT NULL,
  `question4` varchar(255) DEFAULT NULL,
  `question5` varchar(255) DEFAULT NULL,
  `question6` varchar(255) DEFAULT NULL,
  `question7` varchar(255) DEFAULT NULL,
  `question8` varchar(255) DEFAULT NULL,
  `question9` varchar(255) DEFAULT NULL,
  `question10` varchar(255) DEFAULT NULL,
  `question11` varchar(255) DEFAULT NULL,
  `question12` varchar(255) DEFAULT NULL,
  `question13` varchar(255) DEFAULT NULL,
  `question14` varchar(255) DEFAULT NULL,
  `question15` varchar(255) DEFAULT NULL,
  `question16` varchar(255) DEFAULT NULL,
  `question17` varchar(255) DEFAULT NULL,
  `question18` varchar(255) DEFAULT NULL,
  `question19` varchar(255) DEFAULT NULL,
  `question20` varchar(255) DEFAULT NULL,
  `question21` varchar(255) DEFAULT NULL,
  `question22` varchar(255) DEFAULT NULL,
  `question23` varchar(255) DEFAULT NULL,
  `question24` varchar(255) DEFAULT NULL,
  `question25` varchar(255) DEFAULT NULL,
  `question26` varchar(255) DEFAULT NULL,
  `question27` varchar(255) DEFAULT NULL,
  `question28` varchar(255) DEFAULT NULL,
  `question29` varchar(255) DEFAULT NULL,
  `question30` varchar(255) DEFAULT NULL,
  `question31` varchar(255) DEFAULT NULL,
  `question32` varchar(255) DEFAULT NULL,
  `question33` varchar(255) DEFAULT NULL,
  `question34` varchar(255) DEFAULT NULL,
  `question35` varchar(255) DEFAULT NULL,
  `question36` varchar(255) DEFAULT NULL,
  `question37` varchar(255) DEFAULT NULL,
  `question38` varchar(255) DEFAULT NULL,
  `question39` varchar(255) DEFAULT NULL,
  `question40` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assessment`
--

CREATE TABLE `assessment` (
  `assessment_id` int(100) NOT NULL,
  `assessment1` varchar(255) NOT NULL,
  `assessment2` varchar(255) NOT NULL,
  `assessment3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `user_id`, `password`, `firstname`, `lastname`, `age`) VALUES
('Tong', 1, '1234', 'สรวิศ', 'เลอธนกุล', 30),
('Toong', 3, '1234', 'rwar', 'rawra', 30),
('Sorawit', 10, '1234', 'baba', 'nana', 20),
('tt', 30, 'tttt1234', 'tt', 'tt', 22),
('t', 31, 'tttt1234', 't', 't', 22),
('jame', 32, 'tong15632', 'นาย ดำ', ' น้ำเงิน', 17),
('how', 33, 'fghj1234', 'สรวิศ', 'tt', 22),
('test', 34, 'test1234', 'tt', 'tt', 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`assessment_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`) USING BTREE,
  ADD UNIQUE KEY `username` (`username`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assessment`
--
ALTER TABLE `assessment`
  MODIFY `assessment_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
