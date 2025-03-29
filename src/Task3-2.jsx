export default function Task32( {company} ) {
    console.log(company);
  return (
    <div className="card2">
        <h2>Name: {company.name}</h2>
        <p>Company Name: {company.company.name}</p>
        <p>Company Address: {company.address.city}</p>
    </div>
  );
}
