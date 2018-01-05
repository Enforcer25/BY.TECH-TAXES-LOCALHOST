<?php

function custom_posts_per_page($query){
if(is_home()){ $query->set('posts_per_page',20); }
if(is_search()){ $query->set('posts_per_page',20); }
if(is_archive()){ $query->set('posts_per_page',20); }
}
add_action('pre_get_posts','custom_posts_per_page');


function register_styles() {
	wp_register_style('style', get_template_directory_uri() . '/style.css');
	wp_enqueue_style('style');
	
	wp_register_style('fontstyle', get_template_directory_uri() . '/fonts/stylesheet.css');
	wp_enqueue_style('fontstyle');
	
	wp_register_style('icomoon', get_template_directory_uri() . '/fonts/icomoon/style.css');
	wp_enqueue_style('icomoon');
}

add_action('wp_enqueue_scripts', 'register_styles');

function the_truncated_post($symbol_amount) {
	$filtered = strip_tags( preg_replace('@<style[^>]*?>.*?</style>@si', '', preg_replace('@<script[^>]*?>.*?</script>@si', '', apply_filters('the_content', get_the_content()))) );
	echo substr($filtered, 0, strrpos(substr($filtered, 0, $symbol_amount), ' ')) . '...';
}

function hidecategory($query) {
if ( $query->is_home ) {
	$query->set('cat','-1,-7');
	}
return $query;
}
add_filter('pre_get_posts', 'hidecategory');