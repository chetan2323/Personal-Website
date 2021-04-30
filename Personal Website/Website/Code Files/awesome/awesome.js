
$(document).ready(function()
{
	$(".about").click(function()
	{
		location.href = "../home/home.html"
	})

	$(".mumma").mouseenter(function()
	{
		$(".mumma").css('background-image','url(../../Public/Images/mummahover.jpg)')
	})

	$(".mumma").mouseleave(function()
	{
		$(".mumma").css('background-image','url(../../Public/Images/mumma.jpg)')
	})

	$(".pita").mouseenter(function()
	{
		$(".pita").css('background-image','url(../../Public/Images/dadhover.jpg)')
	})

	$(".pita").mouseleave(function()
	{
		$(".pita").css('background-image','url(../../Public/Images/dad.jpg)')
	})

	$(".me").mouseenter(function()
	{
		$(".me").css('background-image','url(../../Public/Images/selfhover.jpg)')
	})

	$(".me").mouseleave(function()
	{
		$(".me").css('background-image','url(../../Public/Images/self.jpg)')
	})

	$(".sid").mouseenter(function()
	{
		$(".sid").css('background-image','url(../../Public/Images/brohover.jpg)')
	})

	$(".sid").mouseleave(function()
	{
		$(".sid").css('background-image','url(../../Public/Images/bro.jpg)')
	})

	$(".nishu").mouseenter(function()
	{
		$(".nishu").css('background-image','url(../../Public/Images/sisthover.jpg)')
	})

	$(".nishu").mouseleave(function()
	{
		$(".nishu").css('background-image','url(../../Public/Images/sist.jpg)')
	})

	$(".mys").mouseenter(function()
	{
		$(".mys").css('background-image','url(../../Public/Images/Block2.jpg)')
	})

	$(".mys").mouseleave(function()
	{
		$(".mys").css('background-image','url(../../Public/Images/Block.jpg)')
	})

	$(".dinner").addClass("hidden")

	$(".phone").click(function()
	{
		$(".dinner").removeClass("hidden")
		$(".dinner").addClass("box")

		setTimeout(function()
		{
			$(".dinner").removeClass("box")
			$(".dinner").addClass("hidden")
		}, 6000);
	})

	$(".ig").click(function()
	{
		location.href = "https://www.instagram.com/lakhani.twinkle/"
	})

	$(".email").click(function()
	{
		window.location.href = "mailto:twinkle14081997@gmail.com?subject=Subject&body=message%20goes%20here"
	})

	// Redirect
	$(".mumma").click(function()
	{
		location.href="../mother/mother.html"
	})

	$(".pita").click(function()
	{
		location.href="../father/father.html"
	})

	$(".me").click(function()
	{
		location.href="../self/self.html"
	})

	$(".sid").click(function()
	{
		location.href="../brother/brother.html"
	})

	$(".nishu").click(function()
	{
		location.href="../sister/sister.html"
	})

	$(".mys").click(function()
	{
		location.href="../mystery/mystery.html"
	})
})
