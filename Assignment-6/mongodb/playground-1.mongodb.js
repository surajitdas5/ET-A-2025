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
// db.employee.find({"name": {$eq: "John Doe"}})


// logical
// find({$operator: [{cond-1}, {cond-2}, ...]})
// db.employee.find({$and: [{"salary": {$gt: 60000}}, {"salary": {$lt: 80000}}]})
// db.employee.find({$and: [{"salary": {$gt: 70000}}, {"dept": {$eq: "SDE"}}]})
// db.employee.find({$and: [{"salary": {$gt: 70000}}, {"dept": "SDE"}]})

// db.employee.find({$or: [{"dept": "HR"}, {"salary": {$gt: 70000}}]})

// db.employee.find({$or: [{"dept": "HR"}, {"dept": "MGR"}]})

// db.employee.find({"dept": {$in: ["HR", "MGR"]}})


// aggregation pipeline
// db.collectionName.aggregate([
//     {
//         // stage-1,
//     },
//     {
//         // stage-2,
//     },
//     {
//         // stage-3,
//     }
// ])

// db.employee.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           "emp_count": {
//             $sum: 1
//           }
//         }
//     }
// ])


// db.employee.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           "avg_sal": {
//             $avg: "$salary"
//           }
//         }
//     }
// ])

// db.employee.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           "emp_count": {
//             $sum: 1
//           }
//         }
//     },
//     {
//         $sort: {
//           "emp_count": -1
//         }
//     },
//     {
//         $limit: 1
//     }
// ])

// db.contactInfo.insertMany([
//     {
//         "eid": "E101",
//         "mobile": "9876543210",
//         "email": "john.doe@example.com",
//         "address": {
//             "city": "Mumbai",
//             "state": "Maharashtra",
//             "zip": 400001
//         }
//     },
//     {
//         "eid": "E102",
//         "mobile": "9876543211",
//         "email": "jane.smith@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "zip": 110001
//         }
//     },
//     {
//         "eid": "E103",
//         "mobile": "9876543212",
//         "email": "amit.patel@example.com",
//         "address": {
//             "city": "Ahmedabad",
//             "state": "Gujarat",
//             "zip": 380001
//         }
//     },
//     {
//         "eid": "E104",
//         "mobile": "9876543213",
//         "email": "priya.sharma@example.com",
//         "address": {
//             "city": "Chandigarh",
//             "state": "Punjab",
//             "zip": 160001
//         }
//     },
//     {
//         "eid": "E105",
//         "mobile": "9876543214",
//         "email": "raj.singh@example.com",
//         "address": {
//             "city": "Jaipur",
//             "state": "Rajasthan",
//             "zip": 302001
//         }
//     },
//     {
//         "eid": "E106",
//         "mobile": "9876543215",
//         "email": "kavita.gupta@example.com",
//         "address": {
//             "city": "Kolkata",
//             "state": "West Bengal",
//             "zip": 700001
//         }
//     },
//     {
//         "eid": "E107",
//         "mobile": "9876543216",
//         "email": "sandeep.verma@example.com",
//         "address": {
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "zip": 560001
//         }
//     },
//     {
//         "eid": "E108",
//         "mobile": "9876543217",
//         "email": "ananya.das@example.com",
//         "address": {
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "zip": 500001
//         }
//     },
//     {
//         "eid": "E109",
//         "mobile": "9876543218",
//         "email": "rahul.kapoor@example.com",
//         "address": {
//             "city": "Chennai",
//             "state": "Tamil Nadu",
//             "zip": 600001
//         }
//     },
//     {
//         "eid": "E110",
//         "mobile": "9876543219",
//         "email": "pooja.khanna@example.com",
//         "address": {
//             "city": "Pune",
//             "state": "Maharashtra",
//             "zip": 411001
//         }
//     }
// ])
// db.contactInfo.find()

// join
// db.employee.aggregate([
//     {
//         $lookup: {
//           from: "contactInfo",
//           localField: "eid",
//           foreignField: "eid",
//           as: "cinfo"
//         }
//     }
// ])


// db.employee.aggregate([
//     {
//         $lookup: {
//           from: "contactInfo",
//           localField: "eid",
//           foreignField: "eid",
//           as: "cinfo"
//         }
//     },
//     {
//         $project: {
//           "_id": 0,
//           "name": 1,
//           "dept": 1,
//           "salary": 1,
//           "cinfo.mobile": 1,
//           "cinfo.email": 1,
//           "cinfo.address.state": 1,
//         }
//     }
// ])


// update
// update({query}, {$set: {"attr_name": value}})
// db.employee.updateOne({"eid": "E101"}, {$set: {"name": "John Smith", "salary": 100000}})

// db.employee.updateMany({"dept": "MGR"}, {$set: {"dept": "Manager"}})

// db.employee.find()

// delete [one, many]
// deleteOne({qry})