// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
   "name": "person1",
	"photo": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxsoPaLi8lDVMrP4uSNNotU3F_AoCIYXeSEBHdgF-6EcZRtqsFjg",
	"scores": [
	"1",
	"1",
	"1",
	"1",
	"1",
	"1",
	"1",
	"1",
	"1",
	"1"
	] 
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;