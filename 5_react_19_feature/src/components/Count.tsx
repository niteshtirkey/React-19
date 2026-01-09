import { useActionState } from "react";

async function increment(previousState: { count: number; name: string }, formData: any) {
  const name = formData.get("name");
  console.log(name);
  return { count: previousState.count + 1, name };
}

const Count = () => {
  const [state, formAction] = useActionState(increment, { count: 0, name: "" });
  return (
    <div>
      <form>
        <h1 className="text-3xl">{state.count}</h1>
        <p>{state.name}</p>
        <button formAction={formAction}>Increment</button>
        <br />
        <input
          type="text"
          placeholder="please enter your name"
          className="border-2"
          name="name"
        />
      </form>
    </div>
  );
};

export default Count;
