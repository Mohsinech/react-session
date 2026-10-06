// 🎯 GOAL: Build a reusable ProfileCard that receives data through PROPS.
//
// TODO 1: Create a type called ProfileProps with: name (string), role (string), avatar (string)
// TODO 2: Make ProfileCard accept those props
// TODO 3: Show the avatar image, the name in an <h2>, and the role in a <p>
// TODO 4: In the Starter component below, render 3 cards with different people

interface ProfileProps {
  name: string;
  role: string;
  avatar: string;
}

function ProfileCard({ name, role, avatar }: ProfileProps) {
  return (
    <div className="card">
      <ProfileCard name={name} role={role} avatar={avatar} />
    </div>
  );
}

export default function Starter() {
  return (
    <div className="grid">
      <ProfileCard
        name="John Doe"
        role="Software Engineer"
        avatar="https://i.pravatar.cc/100?img=1"
      />
      <ProfileCard
        name="Alice Smith"
        role="Frontend Engineer"
        avatar="https://i.pravatar.cc/80?img=1"
      />
    </div>
  );
}
