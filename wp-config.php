<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'wp');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '1234');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'SdxE`j`^I_Nyi<u<2Mu{joJt6#1D%D4:8JUFJ!b5g*dUCkpW47^yD<ewSBB?B(jN');
define('SECURE_AUTH_KEY',  'wyOHGM+AJc-knpbM81gt]_P6tqK+53)>_QXKJJI{g(Q8ds1[jLK?A@%eu^>-OxXL');
define('LOGGED_IN_KEY',    'bq/5HW|e29}TMzrwj@z!ayJQWR<TJyQrUVr$=OV9E%!u V&GSDv]v[pu^4R/IbEQ');
define('NONCE_KEY',        'z]CXjGS<$Ko3Wcew2GahBrcQ>ouNEkfu>Ku7Yq*#V,+YRE}otiHt*x/)>H6o3-Ae');
define('AUTH_SALT',        'A~)`T=}>93@$AzFT(^:N| ?y^%F9DW7=Y:2TmgvQTpe!7L]wYc@2Xdjt|J]I|os^');
define('SECURE_AUTH_SALT', ':G+ ^@CG];?w9@,#@?jJUSn8-{YhakT+cj!Wak_2oMGGbCQUP8IceM|9z9*H124u');
define('LOGGED_IN_SALT',   'f}&wjzUB-^aFH]r7|7<NVB+^&D_W&`+tK6:jFRb<XDH]VAwl/^kvr!VyF:bqsv@n');
define('NONCE_SALT',       '<I|R z5S@uW`AB:EuMFYEa]!naumA:(1>`3o8Sc:@Cv_c*/Y^Ai`1`Yei p~eN/F');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');


