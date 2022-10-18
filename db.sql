-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost:8889
-- 生成日時: 2022 年 10 月 18 日 12:32
-- サーバのバージョン： 5.7.32
-- PHP のバージョン: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- データベース: `kintai`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `attendances`
--

CREATE TABLE `attendances` (
  `id` int(11) NOT NULL COMMENT 'id',
  `user_id` int(11) NOT NULL COMMENT 'users.id',
  `calendar` date NOT NULL COMMENT '日付',
  `data` json NOT NULL COMMENT '日付,出勤,退勤,休(分),休(区分)',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='出勤簿';

-- --------------------------------------------------------

--
-- テーブルの構造 `paid_periods`
--

CREATE TABLE `paid_periods` (
  `id` int(11) NOT NULL COMMENT 'id',
  `user_id` mediumint(9) NOT NULL COMMENT 'users.id',
  `start_date` date NOT NULL COMMENT '有効期間開始',
  `end_date` date NOT NULL COMMENT '有効期間終了',
  `number` tinyint(11) NOT NULL DEFAULT '0' COMMENT '日数',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='有給休暇付与履歴';

-- --------------------------------------------------------

--
-- テーブルの構造 `users`
--

CREATE TABLE `users` (
  `id` mediumint(9) NOT NULL COMMENT 'id',
  `name` varchar(30) NOT NULL COMMENT '名前',
  `login_id` varchar(10) NOT NULL,
  `password` varchar(30) NOT NULL COMMENT 'パスワード',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='ユーザー';

-- --------------------------------------------------------

--
-- テーブルの構造 `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL COMMENT 'id',
  `user_id` smallint(6) NOT NULL COMMENT 'users.id',
  `leave_date` date NOT NULL COMMENT '休暇取得日',
  `vacation_category_id` smallint(6) NOT NULL COMMENT '休暇区分',
  `remarks` varchar(100) DEFAULT NULL COMMENT '備考',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- テーブルの構造 `vacation_categories`
--

CREATE TABLE `vacation_categories` (
  `id` smallint(11) NOT NULL COMMENT 'id',
  `name` varchar(30) NOT NULL COMMENT '休暇区分名',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  `deleted_at` datetime DEFAULT NULL COMMENT '削除日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='休暇区分';

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id_calendar_unique` (`user_id`,`calendar`) USING BTREE,
  ADD KEY `user_id_index` (`user_id`) USING BTREE;

--
-- テーブルのインデックス `paid_periods`
--
ALTER TABLE `paid_periods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_index` (`user_id`) USING BTREE;

--
-- テーブルのインデックス `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vacation_category_id_index` (`vacation_category_id`) USING BTREE,
  ADD KEY `user_id_index` (`user_id`) USING BTREE;

--
-- テーブルのインデックス `vacation_categories`
--
ALTER TABLE `vacation_categories`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- テーブルの AUTO_INCREMENT `paid_periods`
--
ALTER TABLE `paid_periods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- テーブルの AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- テーブルの AUTO_INCREMENT `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id';

--
-- ダンプしたテーブルの制約
--

--
-- テーブルの制約 `paid_periods`
--
ALTER TABLE `paid_periods`
  ADD CONSTRAINT `user_id_index` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- テーブルの制約 `vacations`
--
ALTER TABLE `vacations`
  ADD CONSTRAINT `vacation_category_id_index` FOREIGN KEY (`vacation_category_id`) REFERENCES `vacation_categories` (`id`) ON UPDATE CASCADE;
