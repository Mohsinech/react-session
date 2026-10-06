// ✅ CONCEPT: Props = data passed from a parent component into a child.

interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
}

function ProfileCard({ name, role, avatar }: ProfileCardProps) {
  return (
    <div className="card">
      <img src={avatar} alt={name} width={100} height={100} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default function Solution() {
  return (
    <div className="grid">
      <ProfileCard
        name="Sara"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/100?img=5"
      />
      <ProfileCard
        name="Youssef"
        role="Backend Developer"
        avatar="https://i.pravatar.cc/100?img=12"
      />
      <ProfileCard
        name="Imane"
        role="UI/UX Designer"
        avatar="https://i.pravatar.cc/100?img=9"
      />
    </div>
  );
}
