const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Fix UI Bugs",
                "taskDescription": "Resolve layout issues on the dashboard.",
                "taskDate": "2025-02-01",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements with the client.",
                "taskDate": "2025-02-02",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write API Documentation",
                "taskDescription": "Document REST API endpoints.",
                "taskDate": "2025-02-03",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from team members.",
                "taskDate": "2025-02-04",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Improve performance of database queries.",
                "taskDate": "2025-02-05",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix critical bugs reported by users.",
                "taskDate": "2025-02-06",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Update Security Patches",
                "taskDescription": "Apply latest security updates.",
                "taskDate": "2025-02-07",
                "category": "Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for project demo.",
                "taskDate": "2025-02-08",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Test New Features",
                "taskDescription": "Perform QA testing on the latest release.",
                "taskDate": "2025-02-09",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the latest build to production.",
                "taskDate": "2025-02-10",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];
 
export const setLocalStorage = () => {
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}