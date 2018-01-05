<?php 
/*
Template Name: Art3
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
			<? $author = get_post_custom_values('author'); $num = get_post_custom_values('num'); $date = get_post_custom_values('date'); ?>
			<div class="editor-article"><?php echo $num[0]; ?> <br /><span class="editor-month"><?php echo $date[0]; ?></span>
			
			<p class="input-article"><?php get_search_form(); ?></p>
			</div>
			</div>
			</div>
			
			<div class="head-content-up">
			<div class="cols2">
			<p class="pp"> <?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></p>
			</div>
			<div class="art-2-wrap-before">
			<?php
			$author = get_post_custom_values('author');
			?>
			<span><?php echo $author[0]; ?></span>
			</div>
			<span><?php the_title(); ?></span>
			<div class="art-2-wrap">
			<?php
			$review = get_post_custom_values('review');
			?>
			<span><?php echo $review[0]; ?></span>
			</div>
			
						
			</div>
			
			
			<div class="head-content-low">
			
			</div>
			
			<div class="content-txt">
			<?php
			$content = get_post_field('post_content', get_the_ID());
			$content_parts = get_extended($content); ?>
			<?php echo $content_parts['main']; ?>
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
