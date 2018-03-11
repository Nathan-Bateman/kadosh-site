var me = 'nathan';
var me3 ='bateman';
console.log(me + me3);

$( document ).ready(function() {
	$('body').scrollTop(0);
	});

//toggle text and button for "how we serve" section

function showMore (event) {
  		var target = $( this );
  		if ( target.hasClass('more-serve-details') ) {
    		target.nextAll().toggle();
  		}
  		if (target.text() === 'more') {
  			target.text('less');
  			target.css("font-weight"," 100");
  		} else if (target.text() === 'less') {
  			target.text('more'); 
  			target.css("font-weight"," 400");		
  		}
}
$( ".more-serve-details" ).click( showMore ).closest( "p" ).hide();

//modal data attributes to load for all web projects
var projectModal = $('#work').on('show.bs.modal', function (event) {
  var imgClicked = $(event.relatedTarget); // Button that triggered the modal
  var imgFiletoLoad = imgClicked.data('img'); // Extract info from data-* attributes
  var description = imgClicked.data('description');
  var skills = imgClicked.data('skills');
  var titleToLoad = imgClicked.data('title');
  var liveLink = imgClicked.data('live');
  var gitLink = imgClicked.data('git');
  var modal = $(this);
  modal.find('.modal-title').text(titleToLoad);
  modal.find('.modal-body .description').text(description);
  modal.find('.modal-body .skills').text(skills);
  modal.find('.modal-body img').attr("src",imgFiletoLoad);
  modal.find('.modal-footer .live').attr("href",liveLink);
  modal.find('.modal-footer .git').attr("href",gitLink);
});




//array of objects to get data for future projects

var webProjects = [{
						'title': 'Sample Site1',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site2',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site3',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site4',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site5',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site6',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site7',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site8',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site9',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site10',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site11',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					},
					{
						'title': 'Sample Site12',
						'img': 'http://placekitten.com/360/333',
						'live': 'https://constructionofhope.org/index.php',
						'describe': 'this is the site, it speaks for itself, for better or for worse',
						'polaroid' : 'http://placekitten.com/360/333'
					}];
//post all the projects

function postProjects () {
	var openRowCol12 = '<div class="row"><div class="col-md-12">';
	var closeRowCol12 = '</div></div>';
	var $postDivs = $('.work-done-content-wrapper');
	for (var i = 0; i < webProjects.length; i++) {
		var count = i;
		var project = webProjects[i];
		var projectTitle = project.title;
		var projectImg = project.img;
		var projectLive = project.live;
		var projectDescribe = project.describe;
		var projectPolaroid = project.polaroid;
		
		var projectMarkup = '<div class="col-md-4">' +
							'<div class="polaroid" data-toggle="modal" data-target="#work"' +
							' data-img="' + projectImg +'"' +
							' data-live="' + projectLive + '"' +
							' data-title="' + projectTitle + '"' +
							' data-description="' + projectDescribe + '">' +
							' <img class="img-responsive" src="' + projectPolaroid + '">' +
							' <div class="polaroid-container">' +
							' <p>' + projectTitle + '</p></div></div></div>';

			if (count % 3 === 0 && count !=0) {
	                    $postDivs.append(closeRowCol12);
	                }
	           
	                if (count % 3 === 0) {
	                    var openRowCol = '<div class="row"><div class="col-md-12 child-row hide visually-hide' + ' row-'+ count +'">';
	                    var classToString = '.row-' + count.toString();
	                    $postDivs.append(openRowCol);
	                    //var $postChildren = $( "div" ).closest( classToString, $postDivs ); 
	                    var $postChildren = $(classToString); 
	                    //$postChildren.append(projectMarkup);  
	                }  

	            $(projectMarkup).appendTo($postChildren);
	            //$postChildren.append(projectMarkup);

	                if (count === webProjects.length - 1) {
	                        $postDivs.append(closeRowCol12);
	                    }
	}	
}

//toggle all projects on user click
function toggleWork () {
	let allProjects = $('.child-row');
	if (allProjects.hasClass( "hide" )) {
		allProjects.removeClass('hide');
		setTimeout(function () {
      		allProjects.removeClass('visually-hide');
    	}, 100);
    	$('html, body').animate({
        	scrollTop: '+=380px'
    	}, 1500);
    	$('.work-done-show-more').text("See less work");
	} else {
		
		setTimeout(function () {
      		allProjects.addClass('hide');
    	}, 1650);
      	allProjects.addClass('visually-hide');
      		$('html, body').animate({
        	scrollTop: $("#work-done").offset().top
    	}, 1500);
      	$('.work-done-show-more').text("See all work");

	}
}
//slickNave Menu
$(function(){
		$('#nav-small').slicknav();
	});
//scroll to contact section of site - initiated by onClick data attribut
function scrollContact () {
	$('html, body').animate({
	    scrollTop: ($('#contact').offset().top)
	},500);
}
//KO View Model
var kadoshViewModel = function () {
	var self = this;
		self.oneActive = ko.observable(true);
		self.twoActive = ko.observable(false);
		self.threeActive = ko.observable(false);
		self.fourActive = ko.observable(false);
		self.fiveActive = ko.observable(false);
	self.displayMessage = function (data, event) {
		var clickedId = event.target.id;
		
		if (clickedId === 'init-contact') {
			console.log(clickedId);	
			self.oneActive(true);
			self.twoActive(false);
			self.threeActive(false);
			self.fourActive(false);
			self.fiveActive(false);
		} else if(clickedId === 'meeting') {
			console.log(clickedId);	
			self.oneActive(false);
			self.twoActive(true);
			self.threeActive(false);
			self.fourActive(false);
			self.fiveActive(false);

		} else if(clickedId === 'site-build') {
			console.log(clickedId);	
			self.oneActive(false);
			self.twoActive(false);
			self.threeActive(true);
			self.fourActive(false);
			self.fiveActive(false);
			
		} else if(clickedId === 'training') {
			console.log(clickedId);	
			self.oneActive(false);
			self.twoActive(false);
			self.threeActive(false);
			self.fourActive(true);
			self.fiveActive(false);
			
		} else if(clickedId === 'launch') {
			console.log(clickedId);	
			self.oneActive(false);
			self.twoActive(false);
			self.threeActive(false);
			self.fourActive(false);
			self.fiveActive(true);
			
		}
	};


	}
postProjects();
ko.applyBindings(new kadoshViewModel());	