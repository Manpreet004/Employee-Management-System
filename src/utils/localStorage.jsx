
const employees = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "employee1@example.com",
    "password": "123",
    "taskcount" : {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile the monthly sales report and send it to the manager.",
        "taskDate": "2024-12-15",
        "taskCategory": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update CRM",
        "taskDescription": "Update customer data in the CRM system.",
        "taskDate": "2024-12-10",
        "taskCategory": "Data Management"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting Notes",
        "taskDescription": "Prepare and distribute notes from the last team meeting.",
        "taskDate": "2024-12-16",
        "taskCategory": "Communication"
      }
    ]
  },
  {
    "id": 2,
    "name": "Ishita Gupta",
    "email": "employee2@example.com",
    "password": "123",
    "taskcount" : {
        "active": 0,
        "newTask": 1,
        "completed": 2,
        "failed": 0,
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Perform a full inventory check of the warehouse.",
        "taskDate": "2024-12-18",
        "taskCategory": "Operations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit Expense Report",
        "taskDescription": "Submit the expense report for last month.",
        "taskDate": "2024-12-11",
        "taskCategory": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Follow-Up",
        "taskDescription": "Follow up with clients about pending invoices.",
        "taskDate": "2024-12-09",
        "taskCategory": "Client Relations"
      }
    ]
  },
  {
    "id": 3,
    "name": "Kabir Desai",
    "email": "employee3@example.com",
    "password": "123",
    "taskcount" : {
        "active": 1,
        "newTask": 0,
        "completed": 2,
        "failed": 0,
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Website Update",
        "taskDescription": "Update the company website with new product information.",
        "taskDate": "2024-12-19",
        "taskCategory": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Complete market research on competitors.",
        "taskDate": "2024-12-12",
        "taskCategory": "Research"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Plan",
        "taskDescription": "Draft a social media marketing plan for Q1.",
        "taskDate": "2024-12-17",
        "taskCategory": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "name": "Ananya Iyer",
    "email": "employee4@example.com",
    "password": "123",
    "taskcount" : {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "System Maintenance",
        "taskDescription": "Perform routine maintenance on company systems.",
        "taskDate": "2024-12-20",
        "taskCategory": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Backup Audit",
        "taskDescription": "Audit and verify all system backups.",
        "taskDate": "2024-12-13",
        "taskCategory": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Security Assessment",
        "taskDescription": "Conduct a security assessment of internal systems.",
        "taskDate": "2024-12-14",
        "taskCategory": "IT"
      }
    ]
  },
  {
    "id": 5,
    "name": "Riya Verma",
    "email": "employee5@example.com",
    "password": "123",
    "taskcount" : {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0,
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Recruitment Drive",
        "taskDescription": "Coordinate the recruitment drive for the new positions.",
        "taskDate": "2024-12-21",
        "taskCategory": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Employee Feedback Survey",
        "taskDescription": "Analyze results of the employee feedback survey.",
        "taskDate": "2024-12-12",
        "taskCategory": "HR"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Plan and organize a training session for the new software.",
        "taskDate": "2024-12-18",
        "taskCategory": "HR"
      }
    ]
  }
];

const admin = [
  {
    "name" : "Manpreet",
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setLocalStorage = ()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees =  JSON.parse(localStorage.getItem('employees'))
  const admin =  JSON.parse(localStorage.getItem('admin'))
  // console.log(employees)
  // console.log(admin)
  return{employees,admin}
}