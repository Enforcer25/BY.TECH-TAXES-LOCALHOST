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
			<p class="pp">РЕЗУЛЬТАТЫ ПОИСКА</p>
			</div>
						
			</div>
			
			
			<div class="head-content-low">
			
			</div>
			
			<div class="content-txt">

			
			
<ul class="searchresults">

    <?php if(have_posts()):?><?php while(have_posts()):the_post();?>

    <li style="margin-bottom:20px;">

        <div class="post" id="post-<?php the_ID();?>">

            <h3><a href="<?php the_permalink();?>" title="<?php the_title();?>"><?php the_title();?></a></h3>

            <div class="entry">

                <?php the_excerpt('...');?>

            </div>

        </div>

    </li>

    <?php endwhile;?>

</ol>

    <?php else:?>

<?php endif;?>			
			
			
			
			
			
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