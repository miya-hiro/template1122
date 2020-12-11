// ローディング判定
jQuery(window).on("load", function () {

	navColor();

});

jQuery(function () {
	
// mv以下にスクロールしたら
	jQuery(window).on("scroll", function () {
		navColor();
	});

	/* ドロワー */
	jQuery(".js-drawer").on("click", function () {
		var targetClass = jQuery(this).attr("data-target");
		jQuery("." + targetClass).toggleClass("is-checked");
	});

	/* スムーススクロール */
	jQuery('a[href^="#"]').click(function () {
		var header = jQuery("#header").height();
		var speed = 300;
		var id = jQuery(this).attr("href");
		var target = jQuery("#" == id ? "html" : id);
		var position = jQuery(target).offset().top - header;

		$('.drawer').find('.is-checked').each(function () {
			$(this).removeClass('is-checked');
		});

		if ("fixed" !== jQuery("#header").css("position")) {
			position = jQuery(target).offset().top;
		}
		if (0 > position) {
			position = 0;
		}
		jQuery("html, body").animate(
			{
				scrollTop: position
			},
			speed
		);
		return false;
	});

	/* 電話リンク */
	let ua = navigator.userAgent;
	if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
		jQuery('a[href^="tel:"]')
			.css("cursor", "default")
			.on("click", function (e) {
				e.preventDefault();
			});
	}

	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
		speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
		slidesPerView: 1, // 何枚のスライドを表示するか
		// spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
		// direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
		effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
 
		// スライダーの自動再生
		// autoplay: true 　のみなら既定値での自動再生
		autoplay: {
			delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
			stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
			disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
		},
	});

});

/* 関数定義 */
function navColor() {
	var scrollTop = $('.header').outerHeight() - 50;
	var $header = $('.header');
	var $body = $('body');

	$(window).scrollTop() > scrollTop ? $body.addClass("scrolled") : $body.removeClass("scrolled");
}
