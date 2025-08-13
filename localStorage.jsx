localStorage.clear()
const employee = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskSummary": {
      "active": 5,
      "newTask": 5,
      "completed":6,
      "failed": 6,
    },
    "tasks": [ 
       {
      "active": true,
      "newTask": true,
      "completed":true,
      "failed": false,
      "title": "Update API docs",
      "description": "Write documentation for the new endpoints.",
      "date": "2025-07-17",
      "category": "Documentation"
    },
   {
      "active": true,
      "newTask": true,
      "completed":true,
      "failed": false,
      "title": "Update API docs",
      "description": "Write documentation for the new endpoints.",
      "date": "2025-07-17",
      "category": "Documentation"
    },
     {
      "active": false,
      "newTask": true,
      "completed":false,
      "failed": true,
      "title": "Email updates",
      "description": "Send weekly update emails to all stakeholders.",
      "date": "2025-07-16",
      "category": "Communication"
    },

     /*{
      "active": true,
      "newTask": false,
      "completed":true,
      "failed": false,
      "title": "Email updates",
      "description": "Send weekly update emails to all stakeholders.",
      "date": "2025-07-15",
      "category": "Communication"
    },
     {
      "active": false,
      "newTask": true,
      "completed":false,
      "failed": true,
      "title": "Bug verification",
      "description": "Verify fixed bugs in the staging environment.",
      "date": "2025-07-14",
      "category": "QA"
    },
    {
      "active": false,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Interview candidates",
      "description": "Conduct interviews for frontend developer role.",
      "date": "2025-07-22",
      "category": "HR"
    },
    {
      "active": false,
      "newTask": true,
      "completed":false,
      "failed": false,
      "title": "Update API docs",
      "description": "Write documentation for the new endpoints.",
      "date": "2025-07-19",
      "category": "Documentation"
    },
    {
      "active": true,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Interview candidates",
      "description": "Conduct interviews for frontend developer role.",
      "date": "2025-07-21",
      "category": "HR"
    },
    {
      "active": true,
      "newTask": false,
      "completed":false,
      "failed": true,
      "title": "Team meeting",
      "description": "Organize a weekly sync-up with all teams.",
      "date": "2025-07-18",
      "category": "Management"
    },
    {
      "active": false,
      "newTask": false,
      "completed":false,
      "failed": true,
      "title": "Client demo",
      "description": "Showcase new features to the potential client.",
      "date": "2025-07-22",
      "category": "Sales"
    }*/
  ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskSummary": {
      "active": 4,
      "newTask": 5,
      "completedd":2,
      "failed": 5,
    },
    "tasks": [

      {
      "active": true,
      "newTask": true,
      "completed":true,
      "failed": true,
      "title": "Write test cases",
      "description": "Prepare unit tests for the payment module.",
      "date": "2025-07-14",
      "category": "Testing"
    },
    {
      "active": true,
      "newTask": true,
      "completed":true,
      "failed": true,
      "title": "Market analysis",
      "description": "Research competitors' product pricing.",
      "date": "2025-07-17",
      "category": "Research"
    },
    {
      "active": false,
      "newTask": true,
      "completed":true,
      "failed": false,
      "title": "Write test cases",
      "description": "Prepare unit tests for the payment module.",
      "date": "2025-07-14",
      "category": "Testing"
    },
    /*{
      "active": false,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Market analysis",
      "description": "Research competitors' product pricing.",
      "date": "2025-07-15",
      "category": "Research"
    },
    {
      "active": false,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Update API docs",
      "description": "Write documentation for the new endpoints.",
      "date": "2025-07-22",
      "category": "Documentation"
    },
    {
      "active": true,
      "newTask": false,
      "completed":true,
      "failed": false,
      "title": "Market analysis",
      "description": "Research competitors' product pricing.",
      "date": "2025-07-17",
      "category": "Research"
    },
    {
      "active": false,
      "newTask": true,
      "completed":true,
      "failed": true,
      "title": "Write test cases",
      "description": "Prepare unit tests for the payment module.",
      "date": "2025-07-21",
      "category": "Testing"
    },
    {
      "active": true,
      "newTask": true,
      "completed":true,
      "failed": true,
      "title": "Email updates",
      "description": "Send weekly update emails to all stakeholders.",
      "date": "2025-07-15",
      "category": "Communication"
    }*/
     ]
  },
  {
    "id": 3,
    "firstname": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskSummary": {
      "active": 2,
      "newTask": 3,
      "completedd":1,
      "failed": 5,
    },
    "tasks": [ 
     {
      "active": false,
      "newTask": false,
      "completed":true,
      "failed": false,
      "title": "Market analysis",
      "description": "Research competitors' product pricing.",
      "date": "2025-07-14",
      "category": "Research"
    },
    {
      "active": false,
      "newTask": true,
      "completed":true,
      "failed": false,
      "title": "Interview candidates",
      "description": "Conduct interviews for frontend developer role.",
      "date": "2025-07-21",
      "category": "HR"
    },
    {
      "active": false,
      "newTask": true,
      "completed":true,
      "failed": true,
      "title": "Team meeting",
      "description": "Organize a weekly sync-up with all teams.",
      "date": "2025-07-12",
      "category": "Management"
    },
    /*{
      "active": false,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Create banner",
      "description": "Design a promotional banner for the product launch.",
      "date": "2025-07-21",
      "category": "Design"
    },
    {
      "active": false,
      "newTask": true,
      "completed":true,
      "failed": true,
      "title": "Market analysis",
      "description": "Research competitors' product pricing.",
      "date": "2025-07-19",
      "category": "Research"
    },
    {
      "active": true,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Create banner",
      "description": "Design a promotional banner for the product launch.",
      "date": "2025-07-16",
      "category": "Design"
    },
    {
      "active": false,
      "newTask": false,
      "completed":true,
      "failed": true,
      "title": "Email updates",
      "description": "Send weekly update emails to all stakeholders.",
      "date": "2025-07-19",
      "category": "Communication"
    },
    {
      "active": true,
      "newTask": false,
      "completed":true,
      "failed": false,
      "title": "Update API docs",
      "description": "Write documentation for the new endpoints.",
      "date": "2025-07-19",
      "category": "Documentation"
    }*/
    
    ]
  },
  {
    "id": 4,
    "firstname": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskSummary": {
      "active": 1,
      "newTask": 1,
      "completedd":1,
      "failed": 3,
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completedd":true,
        "failed": false,
        "title": "Create banner",
        "description": "Design a promotional banner for the product launch.",
        "date": "2025-07-12",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completedd":false,
        "failed": true,
        "title": "Fix login bug",
        "description": "Resolve the login issue affecting session timeouts.",
        "date": "2025-07-17",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completedd":true,
        "failed": true,
        "title": "Create banner",
        "description": "Design a promotional banner for the product launch.",
        "date": "2025-07-19",
        "category": "Design"
      },
      /*{
        "active": false,
        "newTask": false,
        "completedd":true,
        "failed": true,
        "title": "Email updates",
        "description": "Send weekly update emails to all stakeholders.",
        "date": "2025-07-22",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": true,
        "completedd":true,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve the login issue affecting session timeouts.",
        "date": "2025-07-13",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completedd":false,
        "failed": false,
        "title": "Bug verification",
        "description": "Verify fixed bugs in the staging environment.",
        "date": "2025-07-12",
        "category": "QA"
      }*/
    ]
  },
  {
    "id": 5,
    "firstname": "Kavya",
    "email": "employee5@example.com",
    "password": "123",
    "taskSummary": {
      "active": 1,
      "newTask": 2,
      "failed": 2,
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completedd":false,
        "failed": true,
        "title": "Bug verification",
        "description": "Verify fixed bugs in the staging environment.",
        "date": "2025-07-14",
        "category": "QA"
      },
     /* {
        "active": false,
        "newTask": true,
        "completedd":true,
        "failed": true,
        "title": "Client demo",
        "description": "Showcase new features to the potential client.",
        "date": "2025-07-15",
        "category": "Sales"
      }*/
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@anish.com",
    "password": "123"
  }
];



        export const setLocalStorage=()=> {
          localStorage.setItem('employee',JSON.stringify(employee))
          localStorage.setItem('admin',JSON.stringify(admin))
        }
        //export const getLocalStorage = () => {
  //const employeeData = localStorage.getItem('employee');
  //const adminData = localStorage.getItem('admin');
  //const employee = JSON.parse(localStorage.getItem('employee'))     
  //const admin =  JSON.parse(localStorage.getItem('admin'))
  //return {
   // employee: employeeData ? JSON.parse(employeeData) : null,
   // admin: adminData ? JSON.parse(adminData) : null,
      // employee,admin
 
    export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem("admin") || "[]");
  const employee = JSON.parse(localStorage.getItem("employee") || "[]");
  return { admin, employee };
 
 
 
    };


 

