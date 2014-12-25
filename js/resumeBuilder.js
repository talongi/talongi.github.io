
var work = {
	"jobs": [
	{
		"employer": "Change Sciences",
		"title": "UX Researcher and Analyst",
		"location": "New York, NY",
		"dates": "August, 2012 to Present",
		"description": "Usability testing and competitive benchmarking for websites and mobile applications. UX research and strategy.",
		"link": "http://www.changesciences.com/"
	},
	{
		"employer": "Sourcetone Inc.",
		"title": "UX Research Intern",
		"location": "New York, NY",
		"dates": "August, 2011 to October, 2011",
		"description": "Conducted end-to-end usability testing on an interactive prototype. Recruited participants according to user personas and moderated user tests. Analyzed data and gave actionable design recommendations to the Director of Product Development",
		"link": "http://www.sourcetone.com/"
	}
	],
	display: function() {
		$("#workExperience").prepend("<hr class='hrbody'/>");
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].link) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}
}

var projects = {
	"projects": [
	{
		"title": "Udacity Portfolio Page",
		"dates": "October 2014",
		"description": "A portfolio page derived from a mockup. Lanugages used: HTML/CSS",
		"images": "http://talongi.github.io/images/bubble.png",
		"link": "http://talongi.github.io/portfolio"
	}
	],
	display: function() {
		$("#projects").prepend("<hr class='hrbody'/>");
	for (item in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[item].title).replace("#", projects.projects[item].link));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[item].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[item].description));
		formattedLink = HTMLprojectLink.replace("%data%", projects.projects[item].link);
		console.log(formattedLink);
		formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
		formattedLink = formattedLink.replace("%image%", formattedImage);
		console.log(formattedLink);
		$(".project-entry:last").append(formattedLink);

	}

}
}

var bio = {
	"name": "Tony Alongi",
	"image": "images/speeds.png",
	"role": "UX/Front-end",
	"welcomeMessage": "UX Professional. Aspiring Front-end developer.",
	"contacts": {
		"mobile": "585.967.9118",
		"email": "aalongi2@gmail.com",
		"twitter": "@tonybigtree",
		"github": "talongi",
		"location": "New York, NY"
	},
	"skills": [["UX Research", 1],["UX Design", 1], ["HTML", 0.5], ["CSS",0.4], ["Javascript",0.2]],
	display: function() {
	$("#header").prepend(internationalizeButton);
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#imgskill").append(HTMLbioPic.replace("%data%", bio.image));
	$("#imgskill").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	if (bio.skills.length > 0) {
		$("#imgskill").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill][0]));
		};

	}
	$("#mapDiv").append(googleMap);
	$("#mapDiv").prepend("<hr class='hrbody'/>");
	},
	inName: function() {
	var oldName = $("#name").text();
	var splitName = oldName.split(" ");
	if (splitName[1] != splitName[1].toUpperCase()) {
		splitName[1] = splitName[1].toUpperCase();
		$("#international-button").text("Americanize");
	} else if (splitName[1] == splitName[1].toUpperCase()) {
		splitName[1] = splitName[1].slice(0,1) + splitName[1].slice(1).toLowerCase();
		$("#international-button").text("Internationalize");
	}
	var iName = splitName.join(" ");

	return iName;
	}
}

var education = {
	"schools": [
	{
		"name": "University of Rochester",
		"location": "Rochester, NY, US",
		"degree": "BA",
		"major": "Brain and Cognitive Science",
		"dates": "2009"
	},
	{
		"name": "Rochester Institute of Technology",
		"location": "Rochester, NY, US",
		"degree": "MS",
		"major": "Applied, Experimental, and Engineering Psychology",
		"dates": "2011"
	}
	],
	"online": [
	{
		"title": "Programming Foundations with Python",
		"school": "Udacity",
		"dates": "2014",
		"url": "http://www.udacity.com"
	},
	{
	"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2014",
		"url": "http://www.udacity.com"
	}
	],
	display: function() {
		$("#education").prepend("<hr class='hrbody'/>");
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
	}
	$("#education").append(HTMLonlineClasses);
	for (var onlineClass in education.online) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.online[onlineClass].title) + HTMLonlineSchool.replace("%data%", education.online[onlineClass].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.online[onlineClass].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.online[onlineClass].url));
	}
}

}

projects.display();
education.display();
bio.display();
work.display();
