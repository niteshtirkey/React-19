
import User from "../components/User";
import Button from "../components/Button";

function UserFile() {
  return (
    <div>
      <User name="John" age={30} marrid={false} />
      <Button
        label="Click"
        onClick={() => console.log("Clicked")}
        disable={false}
      />
    </div>
  );
}

export default UserFile;
