<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php bloginfo('name'); ?></title>
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
			<img class="imghead3" src="<?php bloginfo('template_directory'); ?>/img/logotxt.png" />
			<div class="right-header">
			<p class="input-article"><?php get_search_form(); ?></p>
            <?php
            $content = get_post_field('post_content', '1');
			$content_parts = get_extended($content); ?>
			<div class="editor"><?php echo $content_parts['extended']; ?></div>
			<div class="foto"><?php echo $content_parts['main']; ?></div>
			</div>
			</div>
			
			<div class="imghead">
			<img src="<?php bloginfo('template_directory'); ?>/img/banner.jpg" />
			</div>

                
            <?php if ( ! is_home() && ! is_front_page() ) : ?>
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<?php the_content(); ?>
                <?php endwhile; ?>
                <?php endif; ?>
			<?php endif; ?>
		
			<div class="cols">
               
				<div class="leftcol">
      
                    <?php
$i=1;
$args1 = array(
	'type'         => 'post',
	'child_of'     => 0,
	'parent'       => '',
	'orderby'      => 'id',
	'order'        => 'ASC',
	'hide_empty'   => 1,
	'hierarchical' => 1,
	'exclude'      => '1',
	'include'      => '',
	'number'       => 0,
	'taxonomy'     => 'category',
	'pad_counts'   => false,
);
$categories = get_categories($args1);
foreach($categories as $category) { ?>

<div class="blockpost">
                <img src="<?php bloginfo('template_directory'); ?>/img/ico-<?php echo $category->cat_ID ?>.png" />
                <?php $i++; ?>
				<p class="pp"><?php echo $category->name; ?></p>

<div class="txt">

<?php
	$args = array(
		'numberposts' => 5,
		'category' => $category->cat_ID,
		'orderby' => 'date',
		'order' => 'DESC',
		'post_type' => 'post',
	);
	$mposts = get_posts($args);
	foreach($mposts as $mpost)
		{
		echo '<p><a href="' . get_permalink($mpost->ID) . '" ><b style="text-transform:uppercase">'. get_post_meta($mpost->ID, 'author', true). '</b> '.$mpost->post_title.'</a></p>';
        } ?>
</div>
</div>

	<?php } ?>
			
			     </div>
                
            </div>

			<div class="content-footer">&nbsp;</div>
			
			</div><!-- .content-->
		</div><!-- .container-->

    <?php get_sidebar(); ?>

	</div><!-- .middle-->

</div><!-- .wrapper -->

	<?php wp_footer(); ?>

</body>
</html>