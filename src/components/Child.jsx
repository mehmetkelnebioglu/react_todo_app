export default function Child(props) {
  console.log("child props", props);

  return (
    <>
      <div>
        <h1>Child</h1>
        <p>{props?.user?.name}</p>
        <p>{props?.user?.title}</p>
      </div>
    </>
  );
}