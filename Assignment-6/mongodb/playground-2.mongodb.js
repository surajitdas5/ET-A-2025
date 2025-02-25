// create/select database
use('et-a')

// inserting data
// db.collectionName.insert
// db.student.insertOne({
//     "mob": 777777,
//     "email": "test@gmail.com"
// })

// db.employee.insertMany([
//     {
//         "eid": "E101",
//         "name": "John Doe",
//         "salary": 60000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E102",
//         "name": "Jane Smith",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E103",
//         "name": "Amit Patel",
//         "salary": 55000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E104",
//         "name": "Priya Sharma",
//         "salary": 80000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E105",
//         "name": "Raj Singh",
//         "salary": 75000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E106",
//         "name": "Kavita Gupta",
//         "salary": 60000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E107",
//         "name": "Sandeep Verma",
//         "salary": 90000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E108",
//         "name": "Ananya Das",
//         "salary": 65000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E109",
//         "name": "Rahul Kapoor",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E110",
//         "name": "Pooja Khanna",
//         "salary": 80000,
//         "dept": "SDE"
//     }
// ])

// display
// db.student.find()
// db.employee.find()
// db.employee.findOne()


// sort
// db.employee.find().sort({"dept": 1})
// db.employee.find().sort({"name": -1})
// db.employee.find().sort({"dept": 1, "name": 1})

// limit
// db.employee.find().limit(3)
// db.employee.find().skip(3).limit(3)

// db.employee.find().sort({"salary": -1}).limit(1)
// db.employee.find().sort({"salary": -1}).skip(1).limit(1)


// query
// find({query}, {projectoion}, {options})

// db.employee.find({"eid": "E101"})
// db.employee.find({"dept": "HR"})
// db.employee.find({"dept": "hr"})

// implicit and operation
// db.employee.find({"dept": "MGR", "salary": 60000})

// db.employee.find({}, {_id: 0, name: 1, salary: 1})
// db.employee.find({"dept": "HR"}, {_id: 0, name: 1, salary: 1})


// operator

// relational
// find({"attr_name": {$operator: "value"}})
// db.employee.find({"salary": {$gt: 75000}})
// db.employee.find({"salary": {$gte: 75000}})
db.employee.find({"name": {$eq: "John Doe"}})