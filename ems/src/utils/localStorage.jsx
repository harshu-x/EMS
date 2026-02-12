const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar UI",
        taskDescription: "Resolve alignment issue in navbar",
        taskDate: "2026-02-12",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect login API with frontend",
        taskDate: "2026-02-10",
        taskCategory: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Fix",
        taskDescription: "Fix crash on dashboard load",
        taskDate: "2026-02-08",
        taskCategory: "Debugging"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Design login UI using Tailwind",
        taskDate: "2026-02-12",
        taskCategory: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "State Management",
        taskDescription: "Implement useState logic",
        taskDate: "2026-02-11",
        taskCategory: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Responsive Layout",
        taskDescription: "Make mobile responsive",
        taskDate: "2026-02-09",
        taskCategory: "CSS"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Form Validation",
        taskDescription: "Add validation rules",
        taskDate: "2026-02-07",
        taskCategory: "Frontend"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Routing",
        taskDescription: "Add react-router setup",
        taskDate: "2026-02-12",
        taskCategory: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Component Refactor",
        taskDescription: "Clean reusable components",
        taskDate: "2026-02-10",
        taskCategory: "Code Quality"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add theme toggle",
        taskDate: "2026-02-11",
        taskCategory: "UI"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design user schema",
        taskDate: "2026-02-12",
        taskCategory: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Auth Logic",
        taskDescription: "Implement JWT auth",
        taskDate: "2026-02-09",
        taskCategory: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Setup",
        taskDescription: "Fix server deployment error",
        taskDate: "2026-02-08",
        taskCategory: "DevOps"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Tests",
        taskDescription: "Add unit tests",
        taskDate: "2026-02-12",
        taskCategory: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress assets",
        taskDate: "2026-02-11",
        taskCategory: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy to production",
        taskDate: "2026-02-10",
        taskCategory: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234"
  }
];


export const setLocalStorage =() =>{
   localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
   const employee = JSON.parse(localStorage.getItem('employees'))

    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employee , admin};
   
   
}