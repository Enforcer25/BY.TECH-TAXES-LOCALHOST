<?php 
/*
Template Name: Art1
Template Post Type: post, page, product
*/
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php bloginfo('name'); ?> - <?php the_title(); ?></title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
		
	<?php wp_head(); ?>
		
</head>

<body>

<div class="wrapper">

	<div class="middle">

		<div class="container">
			
			
			<div class="before">&nbsp;</div>
			<div class="content">
			<div class="content-header">
			<div style="display:inline"><a href="/"><img class="imghead2" src="<?php bloginfo('template_directory'); ?>/img/logo2.png" /></a></div>
			<img class="imghead3" src="<?php bloginfo('template_directory'); ?>/img/logotxt-article.png" />
			<div class="right-header-art">
			<?php $author = get_post_custom_values('author'); $num = get_post_custom_values('num'); $date = get_post_custom_values('date'); ?>
			<div class="editor-article"><?php echo $num[0]; ?> <br /><span class="editor-month"><?php echo $date[0]; ?></span>
			
			<p class="input-article"><?php get_search_form(); ?></p>
			</div>
			</div>
			</div>
			
			
			<div class="head-content-up">
			<div class="cols2">
			
			<p class="pp"><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></p>
			</div>
			<?php the_title(); ?>
			<p><?php echo $author[0]; ?></p>
			</div>
			<div class="head-content-low">
			
			<?php 
			global $post;
			$content = get_post_field('post_content', get_the_ID());
			$content_parts = get_extended($content);
			echo apply_filters('the_content', $content_parts['main']);
			?>
			</div>
			
			<div class="content-txt">
			<?php //echo apply_filters('the_content',$post->post_content); ?>
			<?php //echo $content_parts['extended']; ?>
			<?php echo apply_filters('the_content', $content_parts['extended']); ?>
			</div>
			
			<div class="content-footer">
			&nbsp;</div>
			
			</div><!-- .content-->
		</div><!-- .container-->

    <?php get_sidebar(); ?>

	</div><!-- .middle-->

</div><!-- .wrapper -->

	<?php wp_footer(); ?>

</body>
</html>

