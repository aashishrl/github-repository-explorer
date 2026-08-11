import {useState} from 'react';

type Employees = {
  id: number;
  employeeName: string;
  job: string;
}

const employees:Employees[] = [
  {
    id: 1,
    employeeName: "Jenny Wilson",
    job: "Software Engineer",
  },
  {
    id: 2,
    employeeName: "Ronald Richards",
    job: "Product Manager",
  },
  {
    id: 3,
    employeeName: "Darrell Steward",
    job: "UI/UX Designer",
  },
  {
    id: 4,
    employeeName: "Courtney Henry",
    job: "QA Engineer",
  },
  {
    id: 5,
    employeeName: "Cameron Williamson",
    job: "Software Engineer",
  },
  {
    id: 6,
    employeeName: "Brooklyn Simmons",
    job: "Product Manager",
  },
  {
    id: 7,
    employeeName: "Darlene Robertson",
    job: "UI/UX Designer",
  },
  {
    id: 8,
    employeeName: "Wade Warren",
    job: "QA Engineer",
  },
  {
    id: 9,
    employeeName: "Esther Howard",
    job: "Software Engineer",
  },
  {
    id: 10,
    employeeName: "Kristin Watson",
    job: "Product Manager",
  },
  {
    id: 11,
    employeeName: "Guy Hawkins",
    job: "UI/UX Designer",
  },
  {
    id: 12,
    employeeName: "Savannah Nguyen",
    job: "QA Engineer",
  },
];

export default function Dashboard () {
  
  // const [filteredData, setFilteredData] = useState(employees);
  const [search, setSearch] = useState("");

  const filteredDate = employees.filter(employee=>{
    const query = search.toLocaleLowerCase();
    if(search.trim()==="") return employee;
    return(
      employee.employeeName.toLocaleLowerCase().includes(query)
    )
  })

  const handleSoftClick = filteredDate.filter(data=>{
    console.log("software button clicked")
    return data.job==="Software Engineer";
  })
  
  return (
    <div className="px-12 py-6">
      <div className="flex justify-between">
        <input 
          type="text" className="p-2 px-3 border" placeholder="search employee name"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          <button>All</button>
          <button onClick={handleSoftClick}>Software Engineer</button>
          <button>UI/UX Designer</button>
          <button>QA Engineer</button>
          <button>Product Manager</button>
        </div>
      </div>
        <br />
        <hr />
        <br />
      <div className="space-y-2">
        {filteredDate.map(employee=>(
          <p key={employee.id} className="w-fit bg-amber-200 p-2 px-6 rounded-md border-l-4 border-l-amber-500">
            {employee.employeeName}
          </p>
        ))}
      </div>
    </div>
  )
}
