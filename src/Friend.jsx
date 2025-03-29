export default function Friend({ friend }) {
  //   console.log(friend);
  const { name, username, email, phone, website } = friend;
  return (
    <div className="card2">
      <h4>Name: {name}</h4>
      <h4>Username: {username}</h4>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Website: {website}</h4>
    </div>
  );
}
