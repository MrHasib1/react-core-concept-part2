import { use, useState } from "react";
import Task32 from "./Task3-2";

export default function Task3({ companyPromise }) {
  const [name] = useState(0);
  //   console.log(companyPromise);
  const companies = use(companyPromise);
  //   console.log(companies);

  return (
    <div className="card">
      {companies.map((company) => (
        <Task32 company={company}></Task32>
      ))}
    </div>
  );
}
