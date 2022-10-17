-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 17, 2022 at 01:30 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `kintai`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` int(11) NOT NULL COMMENT 'id',
  `user_id` int(11) NOT NULL COMMENT 'users.id',
  `calendar` date NOT NULL COMMENT '日付',
  `data` json NOT NULL COMMENT '日付,出勤,退勤,休(分),休(区分)',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='出勤簿';

-- --------------------------------------------------------

--
-- Table structure for table `paid_periods`
--

CREATE TABLE `paid_periods` (
  `id` int(11) NOT NULL COMMENT 'id',
  `user_id` mediumint(9) NOT NULL COMMENT 'users.id',
  `start_date` date NOT NULL COMMENT '有効期間開始',
  `end_date` date NOT NULL COMMENT '有効期間終了',
  `number` tinyint(11) NOT NULL DEFAULT '0' COMMENT '日数',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='有給休暇付与履歴';

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` mediumint(9) NOT NULL COMMENT 'id',
  `name` varchar(30) NOT NULL COMMENT '名前',
  `login_id` varchar(10) NOT NULL,
  `password` varchar(30) NOT NULL COMMENT 'パスワード',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ユーザー';

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL COMMENT 'id',
  `user_id` smallint(6) NOT NULL COMMENT 'users.id',
  `leave_date` date NOT NULL COMMENT '休暇取得日',
  `vacation_category_id` smallint(6) NOT NULL COMMENT '休暇区分',
  `remarks` varchar(100) DEFAULT NULL COMMENT '備考',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vacation_categories`
--

CREATE TABLE `vacation_categories` (
  `id` smallint(11) NOT NULL COMMENT 'id',
  `name` varchar(30) NOT NULL COMMENT '休暇区分名',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='休暇区分';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id_calendar_unique` (`user_id`,`calendar`) USING BTREE,
  ADD KEY `user_id_index` (`user_id`) USING BTREE;

--
-- Indexes for table `paid_periods`
--
ALTER TABLE `paid_periods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacation_categories`
--
ALTER TABLE `vacation_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- AUTO_INCREMENT for table `paid_periods`
--
ALTER TABLE `paid_periods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';
