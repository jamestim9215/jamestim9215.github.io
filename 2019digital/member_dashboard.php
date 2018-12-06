<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://www.aorus.com/favicon.ico" type="image/x-icon">
    <link rel="Bookmark" href="https://www.aorus.com/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="https://www.aorus.com/favicon.ico">
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <!-- 引入bootstrap 3 css-->
    <link rel="stylesheet" href="member/css/bootstrap.min.css">
    <!-- 引入FAFA ICON -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="member/css/style.css">
    <link rel="stylesheet" href="member/css/gicon.css">
    <link rel="stylesheet" href="member/css/b4-style.css">
    <link rel="stylesheet" href="member/css/jquery-ui.css">
    <!-- css 寫這裡 -->
    <link rel="stylesheet" href="member/css/member/menu.css">
    <link rel="stylesheet" href="member/css/member/member.css">
    <link rel="stylesheet" href="member/css/member/dashboard.css">
	<title>Dashboard | AORUS Member</title>
</head>

<body>
    <div class="page-loading-cover">
        <span><div class="lds-dual-ring"></div></span>
    </div>
    <div class="function-loading-cover">
        <span><div class="lds-dual-ring"></div></span>
    </div>

    <div class="go-top-div">
        <i class="fas fa-angle-up"></i>
    </div>
    <div class="aorus_header_div">
		<div class="aorus-menu">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<a href="member/dashboard"><img src="member/images/logo.png" class="header-logo" alt=""></a>
						<ul class="lv1 hidden-xs hidden-sm">
							<li><a href="https://www.aorus.com/news.php">News</a></li>
							<li>
								<a href="https://www.aorus.com/blog.php">Blog</a>
								<ul class="lv2">
									<li><a href="https://www.aorus.com/blog.php?cata=1">Discover</a></li>
									<li><a href="https://www.aorus.com/blog.php?cata=2">Gaming</a></li>
									<li><a href="https://www.aorus.com/blog.php?cata=9">Tutorial</a></li>
									<li><a href="https://www.aorus.com/blog.php?cata=16">Featured</a></li>
								</ul>
							</li>
							<li>
								<a href="https://www.aorus.com/event.php">Event</a>
								<!-- <ul class="lv2">
									<li><a href="https://www.aorus.com/event.php">ALL EVENTS</a></li>
								</ul> -->
							</li>
							<li>
								<a href="https://www.aorus.com/social-new-feed.php">Community</a>
								<ul class="lv2">
									<li><a href="https://www.aorus.com/social-new-feed.php">Social_plaza</a></li>
									<li><a href="https://www.aorus.com/esport.php">Esport</a></li>
									<li><a href="https://www.aorus.com/social-video.php">Channel</a></li>
									<li><a href="https://www.aorus.com/wallpaper.php">Wallpaper</a></li>
								</ul>
							</li>
							<li>
								<a href="#">Products</a>
								<ul class="lv2">
									<li><a href="https://www.aorus.com/product-list.php?t=53">Motherboards</a></li>
									<li><a href="https://www.aorus.com/product-list.php?t=17">Graphicscards</a></li>
									<li><a href="https://www.aorus.com/product-list.php?t=35">Laptops</a></li>
									<li><a href="https://www.aorus.com/product-list.php?t=18">Peripherals</a></li>
									<li><a href="https://www.aorus.com/product-list.php?t=48">Accessories</a></li>
									<li><a href="https://www.aorus.com/product-list.php?t=89">Pccomponents</a></li>
								</ul>
							</li>
							<li><a href="https://www.aorus.com/wherebuy.php">Buy</a></li>
							<li>
								<a href="#">Membership</a>
								<ul class="lv2">
									<li><a href="whyjoin">Whyjoin</a></li>
									<li><a href="level">Levels</a></li>
									<li><a href="aboutpointrewards">Points_Rewards</a></li>
									<li><a href="medal">Achievement_Badges</a></li>
									<li><a href="rankboard">Leaderboard</a></li>
									<li><a href="FAQ">FAQs</a></li>
								</ul>
							</li>
						</ul>
						<ul class="user-ul">
							<li class="member">
								<a><i class="g_icons gi_member"></i></a>
								<ul class="lv2 text-right" style="background:#ff640099;">
									<li><a href="member_dashboard.php" style="display:block">My Account</a></li>
									<li><a href="member_login.php" style="display:block">Logout</a></li>
								</ul>
							</li>
							<li class="hidden-md hidden-lg">
								<!-- <span class="mMenuBtn glyphicon glyphicon-menu-hamburger"></span> -->
								<div class="menu-hamburger">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="aorus-m-menu">
		<ul class="lv1">
			<li><a href="https://www.aorus.com/news.php">News</a></li>
			<li>
				<a>Blog</a>
				<span>▼</span>
				<ul class="lv2">
					<li><a href="https://www.aorus.com/blog.php?cata=1">Discover</a></li>
					<li><a href="https://www.aorus.com/blog.php?cata=2">Gaming</a></li>
					<li><a href="https://www.aorus.com/blog.php?cata=9">Tutorial</a></li>
					<li><a href="https://www.aorus.com/blog.php?cata=16">Featured</a></li>
				</ul>
			</li>
			<li>
				<a href="https://www.aorus.com/event.php">Event</a>
			</li>
			<li>
				<a>Community</a>
				<span>▼</span>
				<ul class="lv2">
					<li><a href="https://www.aorus.com/social-new-feed.php">Social_plaza</a></li>
					<li><a href="https://www.aorus.com/esport.php">Esport</a></li>
					<li><a href="https://www.aorus.com/social-video.php">Channel</a></li>
					<li><a href="https://www.aorus.com/wallpaper.php">Wallpaper</a></li>
				</ul>
			</li>
			<li>
				<a>Products</a>
				<span>▼</span>
				<ul class="lv2">
					<li><a href="https://www.aorus.com/product-list.php?t=53">Motherboards</a></li>
					<li><a href="https://www.aorus.com/product-list.php?t=17">Graphicscards</a></li>
					<li><a href="https://www.aorus.com/product-list.php?t=35">Laptops</a></li>
					<li><a href="https://www.aorus.com/product-list.php?t=18">Peripherals</a></li>
					<li><a href="https://www.aorus.com/product-list.php?t=48">Accessories</a></li>
					<li><a href="https://www.aorus.com/product-list.php?t=89">Pccomponents</a></li>
				</ul>
			</li>
			<li><a href="https://www.aorus.com/wherebuy.php">Buy</a></li>
			<li>
				<a>Membership</a>
				<span>▼</span>
				<ul class="lv2">
					<li><a href="whyjoin">Whyjoin</a></li>
					<li><a href="level">Levels</a></li>
					<li><a href="aboutpointrewards">Points_Rewards</a></li>
					<li><a href="medal">Achievement_Badges</a></li>
					<li><a href="rankboard">Leaderboard</a></li>
					<li><a href="FAQ">FAQs</a></li>
				</ul>
			</li>   
		</ul>
	</div>
    <div class="container-fluid page-100">
        <div class="row">
			<div class="member-menu-div">
				<div class="container p-0">
					<div class="btn-subMenu hidden-md hidden-lg font-aldrich">Member<i class="fas fa-chevron-down"></i></div>
					<ul class="lv1 mt-1">
						<li >
							<a class="font-aldrich"> My Account  <i class="fas fa-chevron-down"></i></a>
							<ul class="lv2">
								<li><a href="member_dashboard.php">My Dashboard </a></li>
								<li><a href="member_dashboard.php">My Points Rewards </a></li>
								<!-- <li><a href="member/member/bookmark" )}}">My Bookmarks</a></li> -->
								<li><a href="member_dashboard.php">My Activity </a></li>
								<li><a href="member_dashboard.php">Invite Friends </a></li>
							</ul>
						</li>
						<li>
							<a class="font-aldrich"> Account Settings   <i class="fas fa-chevron-down"></i></a>
							<ul class="lv2">
								<li><a href="member_dashboard.php">Account Details </a></li>
								<li><a href="member_dashboard.php">Change Password </a></li>
								<li><a href="member_dashboard.php">Shipping Address </a></li>
							</ul>
						</li>
						<li>
							<a class="font-aldrich"> My Products    <i class="fas fa-chevron-down"></i></a>
							<ul class="lv2">
								<li><a href="member_dashboard.php">My Products Services </a></li>
								<li><a href="member_dashboard.php">Register Your Product </a></li>
							</ul>
						</li>
						<li>
							<a class="font-aldrich"  href="member_dashboard.php"> Contribute Content  </a>
							<!-- <ul class="lv2">
								<li><a href="member/member/submission">Submission</a></li> -->
								<!-- <li><a href="">Translation Project</a></li> -->
							<!-- </ul> -->
						</li>
					</ul>
				</div>
			</div>
			<div class="container-fluid breadcrumb-div">
				<div class="row">
					<div class="container">
						<div class="row">
							<div class="col-xs-12 mt-4 pt-1">
								<ul>
									<li>My Account</li>
									<li>My Dashboard</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container my-1">
				<div class="row">
					<div class="col-xs-12 col-sm-5 col-md-5 col-lg-4 text-center">
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-1">
							
								<div class="bg-gray-222 box-shadow rounded" style="padding:16px 0;">
								
									<span class="h5 text-gray-999 font-weight-300" style="margin-left: 30px;">Open Profile To Others</span>   
									<input class="toggle toggle__light a-t-l" type="checkbox" id="User_ProfileClose">
									
									<!-- <div class="row text-center mt-3">
										<div class="col-xs-12 col-sm-6 col-md-12 col-lg-6">
											<div class="level chart" data-percent="49" style="top: -20px;">
												<div class="tag h1 font-weight-700"><span class="tag-text">0</span>%</div>
											</div>
											<div class="text-gray-999 h4 font-weight-300">Advance to next level</div> 
										</div>
										<div class="col-xs-12 col-sm-6 col-md-12 col-lg-6">
											<img src="member/./images/point2.png" width="100" alt="" class="point-img">
											<div class="mt-1" style="color:#FCCA46"><span class="h1 font-weight-700">41</span> pt</div>
											<div class="text-gray-999 h4 font-weight-300">Current Points</div> 
										</div>
									</div> -->
								</div>
							</div>
							<div class="col-xs-12 p-1">
								<div class="bg-gray-222 box-shadow p-3 rounded">
									<div class="member-img">
										<img src="member/images/bg2/AORUS-Gaming-Corner-03.jpg" alt="">
									</div>
									<!-- <button class="btn bg-orange px-3 my-2"> Follow </button> -->
									<h4 class="font-weight-700">
										Ray
									</h4>
									<h6 class="text-gray-666 font-weight-300 mb-3">
									Member Since 2018-01-01
									</h6>
									<img src="member/images/level/level-diamond.png" width="100" alt="">
									<h6 class="text-gray-999 font-weight-300 mb-2">Diamond</h6>

									<div class="progress bg-gray-333" >
										<div class="progress-bar bg-orange" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id="level_percentage" style="width: 100%;">
										100%
										</div>
									</div>
									<div id="userPorfileText">
										<div class="bg-gray-111 text-gray-999 font-weight-300 rounded px-2 py-1 step1 text-left">
											<h5>Hello! My name is Ray.</h5>
										</div>
										<textarea class="form-control m-0 step2" name="" id="" cols="30" rows="10"></textarea>
										<div id="error"></div>
									</div>
									<h4 class="text-gray-999 font-weight-300 mt-2">Followers</h4>
									<div class="follow-div">
										
										<img src="https://source.unsplash.com/50x50/?girl" style="cursor:pointer;">
										<img src="https://source.unsplash.com/50x50/?game" style="cursor:pointer;">
										<img src="https://source.unsplash.com/50x50/?man" style="cursor:pointer;">
										<img src="https://source.unsplash.com/50x50/?cat" style="cursor:pointer;">
										<div class="follow-more-div follower-btn" id="UserFollower">+99</div>
											
									</div>
									<h4 class="text-gray-999 font-weight-300 mt-2">Following</h4>
									<div class="follow-div">
										
										<img src="https://source.unsplash.com/50x50/?girl" style="cursor:pointer;">
										<img src="https://source.unsplash.com/50x50/?game" style="cursor:pointer;">
										<img src="https://source.unsplash.com/50x50/?man" style="cursor:pointer;">
										<img src="https://source.unsplash.com/50x50/?cat" style="cursor:pointer;">
										<div class="follow-more-div follower-btn" id="UserFollowing">+99</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12 p-1">
								<div class="bg-gray-222 box-shadow p-1 rounded">
									<!-- <div class="row ">
										<div class="info-box">
											<div class="font-weight-300 font-aldrich h2" style="color:#A1C181">2,562</div>
											<div class="text-gray-999 h4 font-weight-300 mb-2">Tipics</div> 
										</div>
										<div class="info-box">
											<div class="font-weight-300 font-aldrich h2" style="color:#ADE0C4">875</div>
											<div class="text-gray-999 h4 font-weight-300 mb-2">Replies</div> 
										</div>
										<div class="info-box">
											<div class="font-weight-300 font-aldrich h2" style="color:#F4A261">875</div>
											<div class="text-gray-999 h4 font-weight-300 mb-2">Solved</div> 
										</div>
									</div> -->
									<div class="row ">
										<div class="">
											<div class="text-gray-999 h4 font-weight-300 mb-2">Achievements</div> 
										</div>
									</div>
									<div class="row">
										<div class="col-xs-12 py-1">
											<span class="badge-img"><img src="member/images/badge/01-Badge-LongevityMilestones-4years.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/02-BDay-3rd.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/03-Comment-100x.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/04-like-50x.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/05-recieved-100-likes.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/06-follower-50-followers.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/07-Invited-20x.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/08-articles-10x.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/09-video-10x.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/10-wallpaper-10x.png"  alt=""></span>
											<span class="badge-img"><img src="member/images/badge/13-count-me-in.png"  alt=""></span>
											<span class="badge-img">
												<img src="member/images/badge/badge-blank.png"  alt="">
												<span> +15 </span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-8">
						<div class="row">
							
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-1">
								<div class="bg-gray-222 box-shadow py-1 px-3 rounded">
									<h5>My AORUS Points
										<i class="fas fa-lock float-right"></i>
									</h5>
									<div class="row text-center mt-3">
										<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
											<img src="member/./images/point2.png" width="100" alt="" class="point-img">
											<div class="mt-1 font-aldrich" style="color:#FCCA46"><span class="h1 font-weight-700">33,699</span> pt</div>
											<div class="text-gray-999 h6 font-weight-300">Total Available Points</div> 
										</div>
										<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left sm-text-center">
											<h4 class="">My Points Summary</h4>
											<p class="text-gray-999">
											My Lifetime Points : <span class="text-white font-aldrich" id="TotalPoint">99,999</span><br>
											Redeemed : <span class="text-white font-aldrich" id="RedeemedPoint">54,300</span><br>
											Pending : <span class="text-white font-aldrich" id="PendingPoint">12,000</span>
											</p>
											<a href="member_dashboard.php"> <button class="btn btn-orange btn-sm">Redeem Now</button></a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-1">
								<div class="bg-gray-222 box-shadow py-3 px-3 rounded">
									<div class="row text-center row-border">
										<input class="toggle toggle__light a-t-r" type="checkbox" id="User_LoginLinkCheckClose">
										<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-border p-0">
											<div class="font-weight-300 font-aldrich" style="font-size: 3.5rem; color:#ADE0C4" id="login_times">888</div>
											<div class="text-gray-999 h6 font-weight-300 mb-2">Login Times</div> 
										</div>
										<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-border p-0">
											<div class="font-weight-300 font-aldrich" style="font-size: 3.5rem; color:#F4A261" id="likes_received">1350</div>
											<div class="text-gray-999 h6 font-weight-300 mb-2">Likes Received</div> 
										</div>
										<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-border p-0">
											<div class="font-weight-300 font-aldrich" style="font-size: 3.5rem; color:#FCCA46" id="checked_by_others">1100</div>
											<div class="text-gray-999 h6 font-weight-300 mb-2"> Checked By Others</div> 
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div class="col-xs-12 col-sm-7 col-md-5 col-lg-8 p-1">
						<div class="bg-gray-222 box-shadow p-1 rounded">
						<input class="toggle toggle__light a-t-r" type="checkbox" id="User_CommentsClose">
							<div class="tab-div">
								<button value="tab-1" class="active">Comments</button>
								<button value="tab-2">Posts</button>
								<button value="tab-3">Joined Activities</button>
							</div>
							<div class="tab px-2" id="tab-1">
								<div class="row">
									<div class="col-xs-12 p-1" id="User_comment">
										<h4>replied to the Blog
											<a href="" target="_blank">
											 AORUS Audio: Professional Grade Audio Optimized For Gaming
											</a>
										</h4>
										<p class="text-gray-999">
										GIGABYTE introduces AORUS RGB Memory with the industry's first RGB enabled demo modules. Each 16GB kit of two comes with two
										</p>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
										<hr>

										<h4>replied to the Blog
											<a href="" target="_blank">
											Intel Chipset Breakdown on GIGABYTE AORUS Motherboards
											</a>
										</h4>
										<p class="text-gray-999">
											Great post. Gigabyte is a motherboard manufacturer, compared to Intel it is a bit slow in the race. By the way, it is best for gaming. From 
											dell printer support you can install and assemble motherboard.
										</p>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
										<hr>

										<h4>replied to the Blog
											<a href="" target="_blank">
											 [Tech Friday] X470 Thermal Design
											</a>
										</h4>
										<p class="text-gray-999">
											Amazing and Professional site of Games. this is one of the best site. Here is a website with huge variety of unblocked games
										</p>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
									</div>
								</div>
							</div>
							<div class="tab px-2" id="tab-2" style="display:none;">
								<div class="row">
									<div class="col-xs-12 p-1" id="User_post">
										<h4><a href="" target="_blank">GIGABYTE Makes AORUS RGB Memory</a></h4>
										<p class="text-gray-999">ntroducing a new component to join GIGABYTE’s product line up is AORUS RGB Memory lighting the way towards an ultimate AORUS PC Dream Machine. </p>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
										<hr>
										<h4><a href="" target="_blank">AORUS Z390 Motherboards: Game at 5GHz+</a></h4>
										<p class="text-gray-999">AORUS Z390 motherboards represent the ultimate combination of power, performance, and technology. We've completely redesigned our boards from the ground up in order to deliver the best possible gaming experience. </p>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
										<hr>
										<h4><a href="" target="_blank">Best Ryzen Motherboard for Gaming</a></h4>
										<p class="text-gray-999">he launch of AMD’s B450 chipset now completes the full range of compatible motherboards for the 2nd Gen Ryzen lineup. Like a true comeback story, AMD Ryzen chips paired with AORUS motherboards showcase a combination capable of tackling the most demanding tasks from today’s applications.</p>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
									</div>
								</div>
							</div>
							<div class="tab px-2" id="tab-3" style="display:none;">
								<div class="row">
									<div class="col-xs-12 p-1" id="User_gamebundle">
									
										<h4><a href="" target="_blank">AORUS RTX 2080 Ti/ 2080 4 Year Warranty</a></h4>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
										<hr>
										<h4><a href="" target="_blank">Buy GIGABYTE NVIDIA GeForce GTX 1060 6GB, GeForce GTX 1070, 1070 Ti graphics card and get Monster Hunter World game for FREE!</a></h4>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
										<hr>
										<h4><a href="" target="_blank">Back to School - Buy the latest GIGABYTE AM4 motherboards get up to €40 FREE STEAM wallet codes!</a></h4>
										<p class="text-right text-gray-666">Tuesday at 1:56 PM Aug 21 2018</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				<!-- </div>
				<div class="row"> -->
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-8 p-1">
						<div class="bg-gray-222 box-shadow p-3 rounded">
							<div class="row">
								<div class="col-xs-12">
									<h4>Recommended</h4>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-6 img-div">
									<div>
										<img src="member/images/bg2/AORUS-RGB-Memory.jpg" width="100%" alt="">
									</div>
								</div>
								<div class="col-xs-12 col-sm-12 col-md-6 ">
									<h4>GIGABYTE Makes AORUS RGB Memory</h4>
									<span class="label bg-gray-666 font-weight-500">Aug 21 2018</span>
									<div class="p mt-1 text-gray-999 text-ellipsis-p">
									<p>GIGABYTE introduces AORUS RGB Memory with the industry's first RGB enabled demo modules. Each 16GB kit of two comes with two additional dummy sticks to fill up your dual-channel motherboard with flush RGB illumination.
									</p>
									</div>
									<button class="btn bg-gray-111 float-right"> More </button>
								</div>
							</div>
							<hr>
							
						
							
							<div class="row">
                    			<div class="col-xs-12 col-sm-6 img-div mb-2">
                            		<div>
										<img src="http://testaorus.gigabyte.com.tw/upload/Product/F_20181112103456T74Sre.JPG" width="100%" alt="">
										<div class="title p-1">
											<h4>5 Reasons to Buy the X399 AORUS XTREME</h4>
										</div>
										<div class="hover p-1">
											<div>
												<h5>Aug 08 2018</h5>
												<div class="p text-gray-999 text-ellipsis-p mb-3"><p>Lean in and let’s explore the new X399 AORUS XTREME and understand why it is the top choice to pair with 2<sup>nd</sup> Gen AMD Ryzen Threadripper processors.</p></div>
												<span class="more font-aldrich" onclick="open_link('http://testaorus.gigabyte.com.tw/blog-detail.php?i=342')"> More </span>
											
											</div>
										</div>
									</div>
								</div> 
                         
                                <div class="col-xs-12 col-sm-6 img-div mb-2">
									<div>
										<img src="http://testaorus.gigabyte.com.tw/upload/Product/F_201811121038722hcmZ_.JPG" width="100%" alt="">
										<div class="title p-1">
											<h4>Best Ryzen Motherboard for Gaming</h4>
										</div>
										<div class="hover p-1">
											<div>
												<h5>Aug 02 2018</h5>
												<div class="p text-gray-999 text-ellipsis-p mb-3"><p>Wondering which AMD Ryzen motherboard is right for you? Find out with B450 &amp; X470 AORUS Motherboards to give you the best Ryzen gaming system!</p></div>
												
												
												<span class="more font-aldrich" onclick="open_link('http://testaorus.gigabyte.com.tw/blog-detail.php?i=341')"> More </span>
											
											</div>
										</div>
									</div>
								</div> 
                         
                                <div class="col-xs-12 col-sm-6 img-div mb-2">
									<div>
										<img src="http://testaorus.gigabyte.com.tw/upload/Product/F_20181112103848xDQ5g4.JPG" width="100%" alt="">
										<div class="title p-1">
											<h4>RGB Fusion shines light that matters</h4>
										</div>
										<div class="hover p-1">
											<div>
												<h5>May 31 2018</h5>
												<div class="p text-gray-999 text-ellipsis-p mb-3"><p>Set the color that matches your style on the different light zones across the motherboard to provide an experience of surround lighting and now, with more indirect and diffused light points, one extra dimension enters the equation to make the details of the motherboard truly pop.</p></div>
												
												
												<span class="more font-aldrich" onclick="open_link('http://testaorus.gigabyte.com.tw/blog-detail.php?i=316')"> More </span>
											
											</div>
										</div>
									</div>
								</div> 
                         
                                <div class="col-xs-12 col-sm-6 img-div mb-2">
									<div>
										<img src="http://testaorus.gigabyte.com.tw/upload/Product/F_201811121039846vYFVf.PNG" width="100%" alt="">
										<div class="title p-1">
											<h4>The Science Behind AORUS H5: Beryllium Diaphragm</h4>
										</div>
										<div class="hover p-1">
											<div>
												<h5>May 25 2018</h5>
												<div class="p text-gray-999 text-ellipsis-p mb-3"><p>To break the boundary of typical gaming headset, H5 is equipped with the diaphragm which is made by beryllium, delivering most immersive sound while gaming, widest sound field and minimum distortion. H5 is right the most versatile headset ever!</p></div>
												
												
												<span class="more font-aldrich" onclick="open_link('http://testaorus.gigabyte.com.tw/blog-detail.php?i=312')"> More </span>
											
											</div>
										</div>
									</div>
								</div> 
                        	</div>
									
										
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>

  
  <!-- Footer -->
	<div class="aorus-footer">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-9">
					<ul>
						<li><a href="https://www.aorus.com/about.php">About AORUS</a></li>
						<li><a href="https://www.aorus.com/member-product-register.php">Product Registration</a></li>
						<li><a href="https://esupport.gigabyte.com/Question/AorusTechQuery?eng=1">Contact Us</a></li> 
						<li><a href="https://profile.gigabyte.com/PrivacyPolicy.aspx">Privacy Policy</a></li>
						<li><a href="https://profile.gigabyte.com/TermsOfUse.aspx">Terms of Use</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-md-3 text-right">
					<div class="lang-btn p-1"><i class="g_icons gi_flag gi_flag_us"></i> US ▼</div>
				</div>
				<div class="col-xs-12">
					<hr>
					<div class="g_copyright">
						<p style="color:#656565;">Copyright©2017 GIGA-BYTE Technology Co., Ltd. All rights reserved.</p>
						<p style="color:#4d4d4d;">All intellectual property rights, including without limitation to copyright and trademark of this work and its derivative works are the property of, or are licensed to, GIGA-BYTE Technology Co., Ltd.</p>
						<p style="color:#4d4d4d;">Any unauthorized use is strictly prohibited.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="lang-cover">
		<div class="lang-box px-2 py-2">
			<div class="lang-close-btn"></div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12 text-center font-aldrich">
						<h2>Country</h2>
					</div>
					<div class="col-xs-12">
						<hr class="border-orange border-orange-2">
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-xs-12">
						<h4>Americas</h4>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://www.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_us mr-1"></i>Global (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://br.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_br mr-1"></i>Brazil (Português)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://latam.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_latam mr-1"></i>LATAM (Español)</a></div>
				</div>
				<div class="row mb-3">
					<div class="col-xs-12">
						<h4>Europe</h4>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://at.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_at mr-1"></i>Austria (Deutsch)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ru.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_by mr-1"></i>Belarus (Русский)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://be.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_be mr-1"></i>Belgium (Dutch)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://cz.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_cz mr-1"></i>Czech Republic (Czech)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://fr.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_fr mr-1"></i>France (Français)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://de.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_de mr-1"></i>Germany (Deutsch)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ie.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_ie mr-1"></i>Ireland (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://it.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_it mr-1"></i>Italy (Italiano)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ru.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_kz mr-1"></i>Kazakhstan (Русский)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ru.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_kg mr-1"></i>Kyrgyzstan (Русский)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://nl.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_nl mr-1"></i>Netherlands (Dutch)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://nordic.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_nordic mr-1"></i>Nordic (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://pl.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_pl mr-1"></i>Poland (Polski)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ro.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_ro mr-1"></i>Romania (Romanian)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ru.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_ru mr-1"></i>Russia (Русский)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://es.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_es mr-1"></i>Spain (Español)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ch.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_ch mr-1"></i>Switzerland (Deutsch)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ru.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_ua mr-1"></i>Ukraine (Русский)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://gb.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_gb mr-1"></i>United Kingdom (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ru.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_uz mr-1"></i>Uzbekistan (Русский)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://at.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_at mr-1"></i>Austria (Deutsch)</a></div>
				</div>
				<div class="row mb-3">
					<div class="col-xs-12">
						<h4>Asia Pacific</h4>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://arabic.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_arabic mr-1"></i>Arabic (Arabic)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://au.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_au mr-1"></i>Australia (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://bd.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_bd mr-1"></i>Bangladesh (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://cn.aorus.com" class="p-1" target="_blank"><i class="g_icons gi_flag gi_flag_cn mr-1"></i>China (简体中文)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://hk.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_hk mr-1"></i>Hong Kong (繁體中文)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://in.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_in mr-1"></i>India (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://id.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_id mr-1"></i>Indonesia (Indonesian)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://il.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_il mr-1"></i>Israel (Hebrew)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://jp.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_jp mr-1"></i>Japan (日本語)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://kr.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_kr mr-1"></i>Korea (한국어)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://lk.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_lk mr-1"></i>Sri Lanka (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://my.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_my mr-1"></i>Malaysia (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://ph.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_ph mr-1"></i>Philippines (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://pk.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_pk mr-1"></i>Pakistan (English)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://persian.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_persian mr-1"></i>Persian (Persian)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://tw.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_tw mr-1"></i>Taiwan (繁體中文)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://th.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_th mr-1"></i>Thailand (ไทย )</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://tr.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_tr mr-1"></i>Turkey (Türkçe)</a></div>
					<div class="col-xs-12 col-sm-6 col-md-3"><a href="https://vn.aorus.com" class="p-1"><i class="g_icons gi_flag gi_flag_vn mr-1"></i>Vietnam (Tiếng Việt)</a></div>
				</div>
			</div>
		</div>
	</div>
  <!-- 引入jQuery cdn -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
  <!-- 引入 bootstrap3 js -->
  <script src="member/js/bootstrap.min.js"></script>
  <script src="member/js/aorus-menu.js"></script>
  <script src="member/js/jquery.validate.min.js"></script>
  <script src="member/js/jquery-ui.js"></script>
	<!-- js 打這裡 -->
	<script src="member/js/member/member-menu.js"></script>
    <script src="member/js/member/dashboard.js"></script>
    <script>
    $(window).load(function(){
        $(".page-loading-cover").fadeOut();
        $("input").on('change',function(){
            $(this).removeClass("show");
        });
        $("textarea").on('change',function(){
            $(this).removeClass("show");
        });
		$(".tab-div button").on('click',function(){
            
            var id = $(this).val();
            $(".tab-div button").removeClass('active');
            $(this).addClass('active');
            $(".tab").fadeOut(250);
            $("#"+id).delay(250).fadeIn(250);
        });
    });

    </script>

</body>
</html>