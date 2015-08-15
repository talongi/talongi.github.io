//New comment
var controller = {
	init:function() {
		view.display();
	}
}

var view = {
	display: function() {
	$('#education').prepend('<hr class="hrbody"/>');
	for (var school in model.schools) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLschoolLink.replace('%data%', model.schools[school].url) + HTMLschoolName.replace('%data%', model.schools[school].name) + HTMLschoolDegree.replace('%data%', model.schools[school].degree));
		$('.education-entry:last').append(HTMLschoolDates.replace('%data%', model.schools[school].dates));
		$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', model.schools[school].location));
		$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', model.schools[school].major));
	}
	$('#education').append(HTMLonlineClasses);
	for (var onlineClass in model.online) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLonlineTitle.replace('%data%', model.online[onlineClass].title) + HTMLonlineSchool.replace('%data%', model.online[onlineClass].school));
		$('.education-entry:last').append(HTMLonlineDates.replace('%data%', model.online[onlineClass].dates));
		$('.education-entry:last').append(HTMLonlineURL.replace('%data%', model.online[onlineClass].url));
	}
	$('#workExperience').prepend('<hr class="hrbody"/>');
	for (var job in model.jobs) {
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', model.jobs[job].employer).replace('#', model.jobs[job].link) + HTMLworkTitle.replace('%data%', model.jobs[job].title));
		$('.work-entry:last').append(HTMLworkDates.replace('%data%', model.jobs[job].dates));
		$('.work-entry:last').append(HTMLworkLocation.replace('%data%', model.jobs[job].location));
		$('.work-entry:last').append(HTMLworkDescription.replace('%data%', model.jobs[job].description));
	}
	$('#projects').append(HTMLprojectStart);
		$('#projects').prepend('<hr class="hrbody"/>');
	for (item in model.projects){
		$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', model.projects[item].title).replace('#', model.projects[item].link));
		$('.project-entry:last').append(HTMLprojectDates.replace('%data%', model.projects[item].dates));
		$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', model.projects[item].description));
		var formattedLink = HTMLprojectLink.replace('%data%', model.projects[item].link);
		var formattedImage = HTMLprojectImage.replace('%data%', model.projects[item].images);
		formattedLink = formattedLink.replace('%image%', formattedImage);
		$('.project-entry:last').append(formattedLink);
	}
	$('#header').prepend(internationalizeButton);
	$('#header').prepend(HTMLheaderRole.replace('%data%', model.bio[0].role));
	$('#header').prepend(HTMLheaderName.replace('%data%', model.bio[0].name));
	$('#imgskill').append(HTMLbioPic.replace('%data%', model.bio[0].image));
	$('#imgskill').append(HTMLWelcomeMsg.replace('%data%', model.bio[0].welcomeMessage));
	$('#topContacts').append(HTMLmobile.replace('%data%', model.bio[0].mobile));
	$('#footerContacts').append(HTMLmobile.replace('%data%', model.bio[0].mobile));
	$('#topContacts').append(HTMLlocation.replace('%data%', model.bio[0].location));
	$('#footerContacts').append(HTMLlocation.replace('%data%', model.bio[0].location));
	$('#topContacts').append(HTMLemail.replace('%data%', model.bio[0].email));
	$('#footerContacts').append(HTMLemail.replace('%data%', model.bio[0].email));
	$('#topContacts').append(HTMLgithub.replace('%data%', model.bio[0].github));
	$('#footerContacts').append(HTMLgithub.replace('%data%', model.bio[0].github));
	$('#topContacts').append(HTMLtwitter.replace('%data%', model.bio[0].twitter));
	$('#footerContacts').append(HTMLtwitter.replace('%data%', model.bio[0].twitter));

	if (model.bio[0].skills.length > 0) {
		$('#imgskill').append(HTMLskillsStart);
		for (var skill in model.bio[0].skills) {
			$('#skills').append(HTMLskills.replace('%data%', model.bio[0].skills[skill][0]));
		};

	}

	$('#mapDiv').append(googleMap);
	$('#mapDiv').prepend('<hr class="hrbody"/>');
	},
	//Function to change name to International version and back to American version on click of button
	inName: function() {
		var oldName = $('#name').text();
		var splitName = oldName.split(' ');
		if (splitName[1] != splitName[1].toUpperCase()) {
			splitName[1] = splitName[1].toUpperCase();
			$('#international-button').text('Americanize');
		} else if (splitName[1] == splitName[1].toUpperCase()) {
			splitName[1] = splitName[1].slice(0,1) + splitName[1].slice(1).toLowerCase();
			$('#international-button').text('Internationalize');
		}
		var iName = splitName.join(' ');

		return iName;
	}
}

var model = {
		'jobs': [
		{
			'employer': 'Change Sciences',
			'title': 'UX Researcher and Analyst',
			'location': 'New York, NY',
			'dates': 'August, 2012 to Present',
			'description': 'Usability testing and competitive benchmarking for websites and mobile applications. UX research and strategy.',
			'link': 'http://www.changesciences.com/'
		},
		{
			'employer': 'Sourcetone Inc.',
			'title': 'UX Research Intern',
			'location': 'New York, NY',
			'dates': 'August, 2011 to October, 2011',
			'description': 'Conducted end-to-end usability testing on an interactive prototype. Recruited participants according to user personas and moderated user tests. Analyzed data and gave actionable design recommendations to the Director of Product Development',
			'link': 'http://www.sourcetone.com/'
		}
		],
		'projects': [
		{
			'title': 'Udacity Portfolio Page',
			'dates': 'October 2014',
			'description': 'A portfolio page derived from a mockup. Lanugages used: HTML/CSS',
			'images': 'http://talongi.github.io/images/bubble.png',
			'link': 'http://talongi.github.io/portfolio'
		},
		{
			'title': 'Frogger Clone',
			'dates': 'December 2014',
			'description': 'A clone of the classic arcade game, Frogger. Based on a Udacity project for the Object Oriented Javascript course. Languages used: HTML/CSS/Javascript',
			'images': 'http://www.decalninja.com/images/dn-frogger-frog.jpg',
			'link': 'http://talongi.github.io/frogger_clone'
		}
		],
		'bio': [
		{
			'name': 'Tony Alongi',
			'image': 'images/profilepic.jpg',
			'role': 'UX/Front-end',
			'welcomeMessage': 'UX Professional. Aspiring Front-end Developer.',
			'mobile': '585.967.9118',
			'email': 'aalongi2@gmail.com',
			'twitter': '@tonybigtree',
			'github': 'talongi',
			'location': 'New York, NY',
			'skills': [['UX Research'],['UX Design'],['Data Visualization (Tableau)'],['HTML/CSS'],['Javascript']]
		}
		],
		'schools': [
		{
			'name': 'University of Rochester',
			'location': 'Rochester, NY, US',
			'degree': 'BA',
			'major': 'Brain and Cognitive Science',
			'dates': '2009',
			'url': 'http://www.bcs.rochester.edu/index.php'
		},
		{
			'name': 'Rochester Institute of Technology',
			'location': 'Rochester, NY, US',
			'degree': 'MS',
			'major': 'Applied, Experimental, and Engineering Psychology',
			'dates': '2011',
			'url': 'http://www.rit.edu/cla/psychology/graduate/ms-experimental-psych/overview'
		}
		],
		'online': [
		{
			'title': 'Programming Foundations with Python',
			'school': 'Udacity',
			'dates': '2014',
			'url': 'http://www.udacity.com'
		},
		{
		'title': 'Intro to HTML and CSS',
			'school': 'Udacity',
			'dates': '2014',
			'url': 'http://www.udacity.com'
		}
		]

}

controller.init();