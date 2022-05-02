-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 02-05-2022 a las 01:43:40
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `presupuestos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administracion`
--

CREATE TABLE IF NOT EXISTS `administracion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `concepto` varchar(100) NOT NULL,
  `monto` decimal(20,0) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `administracion`
--

INSERT INTO `administracion` (`id`, `concepto`, `monto`, `tipo`, `fecha`) VALUES
(3, 'Pilates', '2800', 'egreso', '2022-04-19'),
(6, 'Perfume', '10000', 'egreso', '2022-04-01'),
(7, 'Supermercado', '1501', 'egreso', '2022-05-01'),
(8, 'Kiosko', '1200', 'egreso', '2021-12-01'),
(9, 'Ferreteria', '1222', 'ingreso', '2021-12-01'),
(10, 'Honorarios profesionales', '5000', 'ingreso', '2022-04-01');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
