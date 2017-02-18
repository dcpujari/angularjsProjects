var app=angular.module("myApp",[]);

app.controller("myController",function ($scope) {

	$scope.employees=[
		{name:"Dnyaneshwar",gender:"male",salary:30000,city:'Pune'},
		{name:"Raj",gender:"male",salary:30000,city:'Mumbai'},
		{name:"Mahesh",gender:"male",salary:45000,city:'Delhi'},
		{name:"Mona",gender:"female",salary:60000,city:'Hyderabad'},
		{name:"Priya",gender:"fmale",salary:20000,city:'Pune'},
		{name:"Soni",gender:"female",salary:40000,city:'Banglore'},
		{name:"Sanju",gender:"female",salary:50000,city:'Chennai'},
	];


	var str="pune,mumbai,nashik,Hyderabad,pune,mumbai,nashik,Hyderabad,pune,mumbai,nashik,Hyderabad";
	var words = str.replace(/[,]/g, '').split(/\s/);
	$scope.stringOccurence(words);

});

function stringOccurence(words) {
	var frequencyObj={};
	console.log(words);
	words.forEach(function(w){
		console.log("w: "+w);
	    if(!frequencyObj[w]){
		    frequencyObj[w]=0;
	  	} 
	    frequencyObj[w]++;
	});
	console.log(frequencyObj);
	return frequencyObj;
}