-- ==============================================================
-- BMO — Business Meet Organization
-- 150th Week Celebration Database Schema
-- Location: Kumbakonam, Tamil Nadu, India
-- Compatible with MySQL 5.7+ / 8.0+ & phpMyAdmin
-- ==============================================================

SET NAMES utf8mb4;
SET time_zone = '+05:30';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

-- --------------------------------------------------------------
-- 1. Table structure for: event_settings
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_settings` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `event_name` VARCHAR(255) NOT NULL DEFAULT 'BMO 150th Week Celebration',
  `event_date` DATE NOT NULL DEFAULT '2026-10-13',
  `event_time` VARCHAR(100) DEFAULT '08:00 AM - 01:30 PM IST',
  `venue` VARCHAR(255) DEFAULT 'Convention Hall & Gala Grounds',
  `location` VARCHAR(255) NOT NULL DEFAULT 'Kumbakonam, Tamil Nadu',
  `description` TEXT,
  `hero_title` VARCHAR(255) DEFAULT '150TH WEEK CELEBRATION',
  `hero_subtitle` TEXT,
  `phone` VARCHAR(50) DEFAULT '+91 98400 12345',
  `email` VARCHAR(150) DEFAULT 'info@bmokumbakonam.org',
  `whatsapp` VARCHAR(50) DEFAULT '+91 98400 12345',
  `google_maps_url` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Initial default record for BMO 150th Week
INSERT INTO `event_settings` (
  `id`, `event_name`, `event_date`, `event_time`, `venue`, `location`, `description`, `hero_title`, `hero_subtitle`, `phone`, `email`, `whatsapp`, `google_maps_url`
) VALUES (
  1,
  'BMO 150th Week Celebration',
  '2026-10-13',
  '08:00 AM - 01:30 PM IST',
  'Convention Hall & Gala Grounds',
  'Kumbakonam, Tamil Nadu',
  'Celebrating 150 weeks of continuous business collaboration, trusted referrals and entrepreneurial empowerment across Kumbakonam.',
  '150TH WEEK CELEBRATION',
  'A COMMUNITY OF BUSINESS OWNERS BUILDING CONNECTIONS THAT MATTER.',
  '+91 98400 12345',
  'info@bmokumbakonam.org',
  '+91 98400 12345',
  'https://maps.google.com/?q=Kumbakonam+Tamil+Nadu'
) ON DUPLICATE KEY UPDATE `event_name` = VALUES(`event_name`);

-- --------------------------------------------------------------
-- 2. Table structure for: testimonials (Member Stories)
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `business_name` VARCHAR(200) NOT NULL,
  `designation` VARCHAR(150) NOT NULL,
  `photo` TEXT,
  `quote` TEXT NOT NULL,
  `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample Presentation Records
INSERT INTO `testimonials` (`id`, `name`, `business_name`, `designation`, `photo`, `quote`, `status`) VALUES
(1, 'Sample Member 01', 'Kumbakonam Agro Enterprises', 'Managing Director', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', 'BMO provided a structured, ethical platform to share leads and learn best practices. Over the past 150 weeks, our business expanded across the Delta region with trusted partner support.', 'active'),
(2, 'Sample Member 02', 'Heritage City Infra Builders', 'Founder & CEO', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', 'The camaraderie and business discipline within BMO are unparalleled. Every meeting brings tangible value, trusted referrals, and sincere professional encouragement.', 'active'),
(3, 'Sample Member 03', 'Thanjavur Art & Crafts Export', 'Principal Partner', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', 'Celebrating 150 weeks is proof of our collective consistency. BMO isn\'t just a networking chapter; it is an extended business family that cheers each other\'s triumphs.', 'active');

-- --------------------------------------------------------------
-- 3. Table structure for: gallery (Memories from our journey)
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `gallery` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `image` TEXT NOT NULL,
  `category` VARCHAR(100) NOT NULL DEFAULT 'Events',
  `type` ENUM('image', 'video') NOT NULL DEFAULT 'image',
  `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (`category`),
  INDEX (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample Presentation Records
INSERT INTO `gallery` (`id`, `title`, `image`, `category`, `type`, `status`) VALUES
(1, 'Weekly Business Exchange Forum', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', 'Meetings', 'image', 'active'),
(2, '100th Week Milestone Celebration', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', 'Events', 'image', 'active'),
(3, 'Business Networking & Referrals', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', 'Members', 'image', 'active'),
(4, 'Leadership Panel & Growth Strategy', 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', 'Events', 'image', 'active'),
(5, 'Kumbakonam Regional Business Circle', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', 'Meetings', 'image', 'active'),
(6, 'Member Achievements & Honors', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', 'Members', 'image', 'active'),
(7, 'Inspiring Keynote & Vision 2030', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', 'Videos', 'video', 'active'),
(8, 'Collaborative Partnerships & MOUs', 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?auto=format&fit=crop&w=800&q=80', 'Events', 'image', 'active');

-- --------------------------------------------------------------
-- 4. Table structure for: event_highlights
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `event_highlights` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(200) NOT NULL,
  `description` TEXT,
  `icon` VARCHAR(100) DEFAULT 'star',
  `sort_order` INT NOT NULL DEFAULT 0,
  `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `event_highlights` (`id`, `title`, `description`, `icon`, `sort_order`, `status`) VALUES
(1, 'WELCOME & NETWORKING', 'Warm reception and open networking over refreshments with business owners.', 'handshake', 1, 'active'),
(2, 'BMO JOURNEY HIGHLIGHTS', 'Reflecting on 150 weeks of impactful chapter growth and milestone achievements.', 'award', 2, 'active'),
(3, 'MEMBER STORIES', 'Real-world stories from local entrepreneurs whose businesses flourished through BMO.', 'sparkles', 3, 'active'),
(4, 'BUSINESS CONNECTIONS', 'Structured interaction rounds to discover prospective strategic vendors and allies.', 'network', 4, 'active'),
(5, 'CELEBRATION & DINNER', 'A celebratory banquet commemorating milestone achievements with fellowship.', 'utensils', 5, 'active');

-- --------------------------------------------------------------
-- 5. Table structure for: contact_messages
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `business_name` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('unread', 'read', 'archived') NOT NULL DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (`status`),
  INDEX (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 6. Table structure for: journey_milestones
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `journey_milestones` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `week_number` VARCHAR(50) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `description` TEXT NOT NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `journey_milestones` (`id`, `week_number`, `title`, `description`, `sort_order`, `status`) VALUES
(1, 'Week 1', 'The Beginning', 'First circle of passionate local entrepreneurs assembled in Kumbakonam.', 1, 'active'),
(2, 'Week 25', 'Growing Community', 'Cross-sector knowledge exchange and first 100 business referrals exchanged.', 2, 'active'),
(3, 'Week 50', 'More Opportunities', 'Expanded membership footprint with specialized industry focus sessions.', 3, 'active'),
(4, 'Week 100', 'Stronger Together', 'Milestone century mark with multi-crore business synergy generated.', 4, 'active'),
(5, 'Week 150', 'A Milestone to Celebrate', 'A proud gala celebration of solidarity, enterprise, and future growth.', 5, 'active');

-- --------------------------------------------------------------
-- 7. Table structure for: social_links
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_links` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `platform` VARCHAR(50) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  `sort_order` INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `social_links` (`id`, `platform`, `url`, `status`, `sort_order`) VALUES
(1, 'facebook', 'https://facebook.com', 'active', 1),
(2, 'instagram', 'https://instagram.com', 'active', 2),
(3, 'linkedin', 'https://linkedin.com', 'active', 3),
(4, 'youtube', 'https://youtube.com', 'active', 4);

SET foreign_key_checks = 1;
